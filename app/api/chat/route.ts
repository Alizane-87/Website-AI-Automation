import { NextRequest, NextResponse } from "next/server";
import { checkChatRateLimit, chatClientKeyFromHeaders } from "@/lib/rate-limit";

// Alizane Labs AI Website Assistant Controller (Powered by Google Gemini 2.0 Flash)
const SYSTEM_PROMPT = `You are the Alizane Assistant for Alizane Labs (https://alizanelabs.site).
You are a sharp, helpful, and professional agency representative. You explain what Alizane Labs does for contractors and service businesses clearly and conversationally.

CRITICAL TONE & IDENTITY RULES:
- NEVER break character. NEVER say "I am an AI model", "I can't browse the web or run code", or output robotic AI disclaimers.
- Speak naturally, warmly, and concisely as part of the Alizane Labs team.
- Keep answers focused (2-4 sentences max per response) and conversational.

WHAT ALIZANE LABS DOES:
We build high-converting websites, 24/7 AI phone receptionists, and automated lead follow-up systems designed specifically for contractors (HVAC, roofing, plumbing, electrical, restoration, general contracting, and home services).

OUR CORE CAPABILITIES & HOW WE HELP CONTRACTORS:
1. High-Converting Websites: Mobile-first, blazing fast, tap-to-call buttons, before/after project sliders, live Google reviews feed, and local area SEO pages (so you rank in every surrounding town).
2. 24/7 AI Phone Receptionist: Answers incoming calls in 1 ring 24/7/365, answers customer FAQs, qualifies leads, and books estimates directly into your calendar so you never lose a job while on a roof or under a sink.
3. Instant Speed-to-Lead: Auto-texts missed callers and web inquiries in under 60 seconds with an instant SMS alert directly to the contractor's cell phone.
4. 21-Day Quote Nurturing: Automated SMS & email follow-up sequence that keeps open estimates warm and closes undecided homeowners without manual chasing.
5. Fully Managed Hosting & Routine Edits: Fast cloud hosting, SSL, security, and monthly content updates included with zero long-term contracts (100% month-to-month).
6. Custom Systems: For multi-crew operations, custom CRM integrations, or unique workflows, our engineering team builds tailored solutions.

OUR 3 PUBLISHED PACKAGES:
1. The Site ($1,500 build + $99/mo): Up to 5 core pages, mobile-first design, tap-to-call, contact form with instant email alerts, hosting, SSL & 2 routine content updates/mo.
2. The Works ($2,800 build + $149/mo): Up to 10 service pages + 10 town area pages (up to 20 pages total), before/after gallery, Google reviews feed, Instant Lead SMS alerts to phone, Instant Customer Auto-Text, Local Schema SEO, and 5 routine updates/mo.
3. The Site That Answers ($4,500 build + $299/mo): Everything in The Works + 5 updates/mo + 24/7 AI Phone Receptionist (100 call mins/mo included) + 24/7 AI Website Chat + 21-day quote follow-up automation.

CONVERSATION & OBJECTION HANDLING:
- If a user asks "what else?", "how does it work?", or pushes for deeper detail, explain practical benefits: e.g., how the AI receptionist books jobs after hours, how instant auto-text stops leads from calling competitors, or how town area pages expand local Google search reach.
- If asked for custom features or enterprise needs: "For custom workflows or multi-location setups, our engineering team can scope a tailored build. What trade are you in, and what's the best phone or email for the team to reach you?"
- ALWAYS state build cost + monthly fee together ($1,500 + $99/mo, $2,800 + $149/mo, $4,500 + $299/mo).
- Keep responses engaging by occasionally asking what trade they are in or what their biggest bottleneck is.`;

function sanitizeAssistantResponse(rawText: string): string {
  if (!rawText) return "";

  let text = rawText.trim();

  // 1. Strip XML-style reasoning/think tags
  if (text.includes("</think>")) {
    text = text.split("</think>").pop() || "";
  }
  if (text.includes("</thought>")) {
    text = text.split("</thought>").pop() || "";
  }
  if (text.includes("</reasoning>")) {
    text = text.split("</reasoning>").pop() || "";
  }
  text = text.replace(/<think>[\s\S]*?<\/think>/gi, "");
  text = text.replace(/<thought>[\s\S]*?<\/thought>/gi, "");
  text = text.replace(/<reasoning>[\s\S]*?<\/reasoning>/gi, "");

  // 2. Strip plaintext chain-of-thought preambles
  text = text.replace(/^Here('s| is) a thinking process:?[\s\S]*?(?=(?:Hello|Hi|Our|The Site|The Works|We |That's|For |At Alizane|\n\n[A-Z]))/i, "");
  text = text.replace(/^Thinking Process:?[\s\S]*?(?=(?:Hello|Hi|Our|The Site|The Works|We |That's|For |At Alizane|\n\n[A-Z]))/i, "");

  // 3. Catch raw CoT breakdown if remaining
  const isRawCoT = /^\s*(Here('s| is) a thinking process|Thinking Process|\*\*Analyze User Input:\*\*|\*\*Identify Core Task:\*\*|\*\*Check Constraints)/i.test(text);
  if (isRawCoT) {
    const splitMatch = text.split(/\n\s*(?:Response|Final Response|Answer|Output):\s*/i);
    if (splitMatch.length > 1) {
      text = splitMatch.pop() || "";
    } else {
      // Safe, grounded default response if model only outputted internal CoT
      return "Our monthly packages include hosting, SSL security, and routine updates: The Site ($1,500 + $99/mo with 2 updates/mo), The Works ($2,800 + $149/mo with 5 updates/mo), and The Site That Answers ($4,500 + $299/mo with 5 updates/mo + 24/7 AI Receptionist). How can I help you choose the right fit?";
    }
  }

  // 4. Strip model safety/assistant prefixes
  text = text.replace(/^User Safety:\s*\w+\s*/i, "");
  text = text.replace(/^(Assistant|Alizane Assistant):\s*/i, "");

  return text.trim();
}

export async function POST(req: NextRequest) {
  // 1. Dedicated IP Rate Limiting (Anti-Spam Guardrail)
  const limit = checkChatRateLimit(chatClientKeyFromHeaders(req.headers));
  if (!limit.allowed) {
    return NextResponse.json(
      {
        role: "assistant",
        content: "You are sending messages too quickly. Please pause for a few moments before trying again.",
      },
      { status: 429, headers: { "retry-after": String(limit.retryAfterSeconds) } }
    );
  }

  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { message: "Invalid chat payload." },
        { status: 400 }
      );
    }

    // 2. Input Sanitization & Clamping (Anti-Token-Drain Guardrail)
    const sanitizedMessages = messages
      .filter((m) => m && typeof m.content === "string" && m.content.trim().length > 0)
      .slice(-10) // Keep the last 10 turns
      .map((m) => ({
        role: m.role === "user" ? ("user" as const) : ("assistant" as const),
        content: m.content.trim().slice(0, 500),
      }));

    if (sanitizedMessages.length === 0) {
      return NextResponse.json(
        { message: "Empty message payload." },
        { status: 400 }
      );
    }

    const geminiApiKey = (
      process.env.GEMINI_API_KEY ||
      process.env.GOOGLE_API_KEY ||
      process.env.GEMINI_KEY ||
      process.env.GOOGLE_GENERATIVE_AI_API_KEY ||
      ""
    ).replace(/['"=]/g, "").trim();
    const openRouterApiKey = (process.env.OPENROUTER_API_KEY || "").replace(/['"=]/g, "").trim();

    let assistantMessage = "";
    let activeProvider = "fallback";
    let diagnosticTrace = "init";
    if (!geminiApiKey) {
      diagnosticTrace = "no-gemini-key-in-env";
    } else {
      diagnosticTrace = `gemini-key-present-len-${geminiApiKey.length}`;
    }

    // 3A. PRIMARY: Official Google Gemini API (Ultra-fast, zero-CoT leaks, 100% free)
    if (geminiApiKey && geminiApiKey !== "your_gemini_api_key_here") {
      let geminiModel = (process.env.AI_CHAT_MODEL || "gemini-2.0-flash")
        .replace(/['"=]/g, "")
        .trim()
        .replace(/^models\//, "");

      if (geminiModel.includes("/")) {
        geminiModel = geminiModel.split("/").pop() || "gemini-2.0-flash";
      }
      if (geminiModel.includes("001")) {
        geminiModel = geminiModel.replace("-001", "");
      }
      if (!geminiModel.startsWith("gemini-")) {
        geminiModel = "gemini-2.0-flash";
      }

      // Gemini requires first message to be "user" and alternating roles
      const geminiContents: { role: "user" | "model"; parts: { text: string }[] }[] = [];
      for (const m of sanitizedMessages) {
        const role = m.role === "user" ? "user" : "model";
        if (geminiContents.length === 0 && role === "model") {
          continue;
        }
        const prev = geminiContents[geminiContents.length - 1];
        if (prev && prev.role === role) {
          prev.parts[0].text += `\n${m.content}`;
        } else {
          geminiContents.push({
            role,
            parts: [{ text: m.content }],
          });
        }
      }

      const candidateModels = Array.from(
        new Set([
          geminiModel,
          "gemini-2.0-flash",
          "gemini-1.5-flash",
          "gemini-2.5-flash",
          "gemini-1.5-flash-8b",
        ])
      );

      if (geminiContents.length > 0) {
        for (const modelToTry of candidateModels) {
          try {
            const geminiRes = await fetch(
              `https://generativelanguage.googleapis.com/v1beta/models/${modelToTry}:generateContent?key=${geminiApiKey}`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  systemInstruction: {
                    parts: [{ text: SYSTEM_PROMPT }],
                  },
                  contents: geminiContents,
                  generationConfig: {
                    temperature: 0.2,
                    maxOutputTokens: 350,
                  },
                }),
              }
            );

            if (geminiRes.ok) {
              const geminiData = await geminiRes.json();
              const candidate = geminiData.candidates?.[0];
              const rawText = candidate?.content?.parts?.[0]?.text || "";
              assistantMessage = sanitizeAssistantResponse(rawText);
              if (assistantMessage) {
                activeProvider = `google-gemini (${modelToTry})`;
                break;
              }
            } else {
              const err = await geminiRes.text();
              console.error(`Gemini (${modelToTry}) API Error:`, geminiRes.status, err);
              activeProvider = `gemini-api-error-${geminiRes.status}-${modelToTry}`;
              diagnosticTrace = `err-${geminiRes.status}-${err.slice(0, 80)}`;
            }
          } catch (e: any) {
            console.error(`Gemini (${modelToTry}) Fetch Error:`, e);
            activeProvider = `gemini-fetch-catch-${e?.message || "error"}`;
          }
        }
      }
    }

    // 3B. FALLBACK: OpenRouter API
    if (!assistantMessage && openRouterApiKey && openRouterApiKey !== "your_openrouter_api_key_here") {
      let openRouterModel = (process.env.AI_CHAT_MODEL || "google/gemini-2.0-flash-001")
        .replace(/['"=]/g, "")
        .trim();

      if (!openRouterModel.includes("/") && openRouterModel.startsWith("gemini-")) {
        openRouterModel = `google/${openRouterModel}`;
      }

      try {
        const openRouterRes = await fetch("https://openrouter.ai/api/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${openRouterApiKey}`,
            "HTTP-Referer": "https://www.alizanelabs.site",
            "X-Title": "Alizane Labs Website Assistant",
          },
          body: JSON.stringify({
            model: openRouterModel,
            messages: [
              { role: "system", content: SYSTEM_PROMPT },
              ...sanitizedMessages,
            ],
            temperature: 0.2,
            max_tokens: 350,
            reasoning: { effort: "none" },
          }),
        });

        if (openRouterRes.ok) {
          const data = await openRouterRes.json();
          const rawText = data.choices?.[0]?.message?.content || "";
          assistantMessage = sanitizeAssistantResponse(rawText);
          if (assistantMessage) {
            activeProvider = `openrouter (${openRouterModel})`;
          }
        } else {
          const errData = await openRouterRes.json().catch(() => ({}));
          console.error("OpenRouter Error:", errData);
        }
      } catch (e) {
        console.error("OpenRouter Fetch Error:", e);
      }
    }

    // 4. Default if no API key is configured or both services fail
    if (!assistantMessage) {
      if (!geminiApiKey && !openRouterApiKey) {
        assistantMessage =
          "Hello! I am the Alizane Labs AI assistant. To activate live responses, please configure GEMINI_API_KEY in your environment variables.";
      } else {
        assistantMessage =
          "We offer 3 straightforward packages for contractors: The Site ($1,500 + $99/mo), The Works ($2,800 + $149/mo with 20 SEO pages & lead auto-text), and The Site That Answers ($4,500 + $299/mo with 24/7 AI Receptionist). What trade are you in?";
      }
    }

    // 5. Async lead capture webhook to n8n
    const latestUserMsg = messages[messages.length - 1]?.content || "";
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl && (latestUserMsg.includes("@") || /\d{10}/.test(latestUserMsg))) {
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "website_ai_chat",
          message: latestUserMsg,
          full_history: messages,
          timestamp: new Date().toISOString(),
        }),
      }).catch((e) => console.error("Chat lead webhook error:", e));
    }

    return NextResponse.json(
      {
        role: "assistant",
        content: assistantMessage,
        provider: activeProvider,
        diagnostic: diagnosticTrace,
      },
      {
        headers: {
          "x-ai-provider": activeProvider,
          "x-ai-diagnostic": diagnosticTrace,
        },
      }
    );
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      {
        role: "assistant",
        content: "Sorry, I ran into an error. Please try again or reach out at hello@alizanelabs.site.",
      },
      { status: 500 }
    );
  }
}
