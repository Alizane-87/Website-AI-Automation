import { NextRequest, NextResponse } from "next/server";
import { checkChatRateLimit, chatClientKeyFromHeaders } from "@/lib/rate-limit";
import { getClientChatbotConfig } from "@/lib/supabase-chat";

// Alizane Labs AI Website Assistant Controller (Powered by Google Gemini 2.0 Flash)
const SYSTEM_PROMPT = `You are the Alizane Assistant for Alizane Labs (https://alizanelabs.site).
You are a sharp, helpful, and professional agency representative. You explain what Alizane Labs does for contractors and service businesses clearly and conversationally.

CRITICAL TONE & IDENTITY RULES:
- NEVER break character. NEVER say "I am an AI model", "I can't browse the web or run code", or output robotic AI disclaimers.
- Speak naturally, warmly, and concisely as part of the Alizane Labs team.
- Keep answers focused (2-4 sentences max per response) and conversational.
- Reply in plain conversational sentences only. Never use markdown — no asterisks, no bullet points, no hash headings, no square-bracket links. If you need a list, write it as a sentence or separate it with line breaks.

WHAT ALIZANE LABS DOES:
We build high-converting websites, 24/7 AI phone receptionists, and automated lead follow-up systems designed specifically for contractors (HVAC, roofing, plumbing, electrical, restoration, general contracting, and home services).

OUR CORE CAPABILITIES & HOW WE HELP CONTRACTORS:
1. High-Converting Websites: Mobile-first, blazing fast, tap-to-call buttons, before/after project sliders, live Google reviews feed, and local area SEO pages (so you rank in every surrounding town).
2. 24/7 AI Phone Receptionist: Answers incoming calls in 1 ring 24/7/365, answers customer FAQs, qualifies leads, and books estimates directly into your calendar so you never lose a job while on a roof or under a sink.
3. Instant Speed-to-Lead Response: When a visitor submits a quote or contact request on the website, two things happen instantly:
   - Instant Customer Auto-Text: The customer immediately receives an automated text on their phone confirming their project request was received, keeping them from jumping to a competitor.
   - Instant Lead SMS Alerts: The contractor instantly receives a text alert on their phone with the prospect's full details so they can connect right away.
4. 21-Day Quote Nurturing: Automated SMS & email follow-up sequence that keeps open estimates warm and closes undecided homeowners without manual chasing.
5. Fully Managed Hosting & Routine Edits: Fast cloud hosting, SSL, security, and monthly content updates included with zero long-term contracts (100% month-to-month).
6. Custom Systems: For multi-crew operations, custom CRM integrations, or unique workflows, our engineering team builds tailored solutions.

OUR 3 PUBLISHED PACKAGES:
1. The Site ($1,500 build + $99/mo): Up to 5 core pages, mobile-first design, tap-to-call, contact form with instant email alerts, hosting, SSL & 2 routine content updates/mo.
2. The Works ($2,800 build + $149/mo): Up to 10 service pages + 10 town area pages (up to 20 pages total), before/after gallery, Google reviews feed, Instant Lead SMS alerts to contractor's phone, Instant Customer Auto-Text, Local Schema SEO, and 5 routine updates/mo.
3. The Site That Answers ($4,500 build + $299/mo): Everything in The Works + 5 updates/mo + 24/7 AI Phone Receptionist (100 call mins/mo included) + 24/7 AI Website Chat + 21-day quote follow-up automation.

CONVERSATION & OBJECTION HANDLING:
- If a user asks "what else?", "how does it work?", or pushes for deeper detail, explain practical benefits: e.g., how the AI receptionist answers calls and books estimates 24/7, how instant customer auto-text immediately acknowledges web inquiries so homeowners don't submit quotes to competitors, or how town area pages expand local Google search reach.
- If asked for custom features or enterprise needs: "For custom workflows or multi-location setups, our engineering team can scope a tailored build. What trade are you in, and what's the best phone or email for the team to reach you?"
- ALWAYS state build cost + monthly fee together ($1,500 + $99/mo, $2,800 + $149/mo, $4,500 + $299/mo).
- Keep responses engaging by occasionally asking what trade they are in or what their biggest bottleneck is.`;

function sanitizeAssistantResponse(rawText: string): string {
  if (!rawText) return "";

  let text = rawText.trim();

  // 1. Strip XML-style reasoning/think tags if any
  text = text.replace(/<think>[\s\S]*?<\/think>/gi, "");
  text = text.replace(/<thought>[\s\S]*?<\/thought>/gi, "");
  text = text.replace(/<reasoning>[\s\S]*?<\/reasoning>/gi, "");

  // 2. Strip leading plaintext chain-of-thought preambles
  text = text.replace(/^Here('s| is) a thinking process:?\s*/i, "");
  text = text.replace(/^Thinking Process:?\s*/i, "");

  // 3. Strip model safety/assistant prefixes
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
    const { messages, clientId } = await req.json();

    const MAX_MESSAGES_PER_CONVERSATION = 40; // ~20 back-and-forths

    if (!Array.isArray(messages)) {
      return NextResponse.json({ message: "Bad request." }, { status: 400 });
    }

    if (messages.length === 0) {
      return NextResponse.json({ message: "Empty message payload." }, { status: 400 });
    }

    if (messages.length > MAX_MESSAGES_PER_CONVERSATION) {
      return NextResponse.json(
        {
          role: "assistant",
          content:
            "We've covered a lot here. Refresh the page to start fresh, or email hello@alizanelabs.site and a human will take it from here.",
        },
        { status: 200 }
      );
    }

    // 2. Reject oversized single messages — a 50k-character paste costs real money.
    const latestUserMsg = messages[messages.length - 1]?.content || "";
    const MAX_CHARS_PER_MESSAGE = 2000;
    if (typeof latestUserMsg !== "string" || latestUserMsg.length > MAX_CHARS_PER_MESSAGE) {
      return NextResponse.json(
        { role: "assistant", content: "Could you shorten that a little? I'll pick it up from there." },
        { status: 200 }
      );
    }

    // Dynamic Multi-Tenant Client Configuration (Supabase with edge cache & local fallback)
    const clientConfig = await getClientChatbotConfig(clientId);
    const activeSystemPrompt = clientConfig?.systemPrompt || SYSTEM_PROMPT;
    const targetWebhookUrl = clientConfig?.leadWebhookUrl || process.env.LEAD_WEBHOOK_URL;

    // Input Sanitization & Clamping (Anti-Token-Drain Guardrail)
    const sanitizedMessages = messages
      .filter((m) => m && typeof m.content === "string" && m.content.trim().length > 0)
      .slice(-10)
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
      Buffer.from("QVEuQWI4Uk42TG1ZMWVwNnNYOUhCZ3BFYVl1MlM1QnR3UjBHbk9JRlNlX0xIcTkyc3VFd1E=", "base64").toString("utf-8")
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

      const priorityModels = [
        "gemini-flash-lite-latest",
        "gemini-flash-latest",
        "gemini-2.0-flash-exp",
        "gemini-1.5-flash-latest",
      ];

      if (geminiContents.length > 0) {
        for (const modelName of priorityModels) {
          try {
            const geminiRes = await fetch(
              `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${geminiApiKey}`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  systemInstruction: {
                    parts: [{ text: activeSystemPrompt }],
                  },
                  contents: geminiContents,
                  generationConfig: {
                    temperature: 0.2,
                    maxOutputTokens: 600,
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
                activeProvider = `google-gemini (${modelName})`;
                break;
              }
            } else {
              const err = await geminiRes.text();
              console.error(`Gemini (${modelName}) API Error:`, geminiRes.status, err);
              diagnosticTrace = `err-${geminiRes.status}-${modelName}`;
            }
          } catch (e: any) {
            console.error(`Gemini (${modelName}) Fetch Error:`, e);
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
              { role: "system", content: activeSystemPrompt },
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

    // 4. Default if both AI services fail
    if (!assistantMessage) {
      if (clientConfig && clientConfig.clientId !== "alizane-agency") {
        assistantMessage = `Thank you for reaching out to ${clientConfig.businessName}. Our emergency response team is available 24/7/365 across the local metro area. Please provide your property address or call our emergency dispatch hotline directly for immediate assistance!`;
      } else {
        assistantMessage =
          "We offer 3 straightforward packages for contractors: The Site ($1,500 + $99/mo), The Works ($2,800 + $149/mo with 20 SEO pages & lead auto-text), and The Site That Answers ($4,500 + $299/mo with 24/7 AI Receptionist). What trade are you in?";
      }
    }

    // 5. Async lead capture webhook (Fires once per conversation when contact info is first provided)
    const CONTACT_RE = /([\w.+-]+@[\w-]+\.[\w.-]+)|(\+?\d[\d\s().-]{8,}\d)/;

    const priorUserText = messages
      .slice(0, -1)
      .filter((m: { role: string }) => m.role === "user")
      .map((m: { content: string }) => String(m.content))
      .join(" ");

    // Fires exactly once: contact details appear now, and appeared in no earlier turn.
    const isNewLead =
      CONTACT_RE.test(String(latestUserMsg)) && !CONTACT_RE.test(priorUserText);

    if (targetWebhookUrl && isNewLead) {
      const transcript = messages
        .map((m: { role: string; content: string }) => `${m.role === "user" ? "Visitor" : "Assistant"}: ${m.content}`)
        .join("\n")
        .slice(-3500); // Safe length for Telegram / Slack / webhook payload limits

      try {
        await fetch(targetWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            source: clientConfig ? `site_ai_chat_${clientConfig.clientId}` : "site_ai_chat",
            client_id: clientConfig?.clientId || "alizane-agency",
            business_name: clientConfig?.businessName || "Alizane Labs",
            message: latestUserMsg,
            transcript,
            timestamp: new Date().toISOString(),
          }),
          signal: AbortSignal.timeout(3000),
        });
      } catch (e) {
        // A lost lead must leave a trace. Never swallow this silently.
        console.error(
          `[chat] LEAD DELIVERY FAILED — visitor message: ${String(latestUserMsg).slice(0, 200)} — ${
            e instanceof Error ? e.message : String(e)
          }`
        );
      }
    }

    const isDev = process.env.NODE_ENV !== "production";

    const debugHeaders: Record<string, string> = isDev
      ? {
          "x-ai-provider": String(activeProvider).replace(/[\r\n\t]/g, " ").slice(0, 100),
          "x-ai-diagnostic": String(diagnosticTrace).replace(/[\r\n\t]/g, " ").slice(0, 100),
        }
      : {};

    // Always log the trace server-side so you keep it in production.
    console.log(`[chat] client=${clientConfig?.clientId || "default"} provider=${activeProvider} trace=${diagnosticTrace}`);

    return NextResponse.json(
      {
        role: "assistant",
        content: assistantMessage,
        ...(isDev ? { provider: activeProvider, diagnostic: diagnosticTrace } : {}),
      },
      { headers: debugHeaders }
    );
  } catch (error) {
    // Operators get the detail in Vercel logs. The visitor gets a sentence.
    console.error(
      `[chat] request failed: ${error instanceof Error ? error.stack ?? error.message : String(error)}`
    );
    return NextResponse.json(
      {
        role: "assistant",
        content:
          "Sorry, I ran into an error. Please try again, or email hello@alizanelabs.site and we'll pick it up from there.",
      },
      { status: 500 }
    );
  }
}
