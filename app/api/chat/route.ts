import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit, clientKeyFromHeaders } from "@/lib/rate-limit";

const SYSTEM_PROMPT = `You are the AI Assistant for Alizane Labs (https://alizanelabs.site).
You are speaking directly with a website visitor, business owner, or contractor.

YOUR OBJECTIVES:
1. Provide concise, helpful, and transparent answers about Alizane Labs' custom web design and AI automation services.
2. Maintain an editorial, professional, consultative tone (crisp, confident, knowledgeable).
3. If the user expresses interest in building a site or getting a quote, encourage them to fill out the 4-step project planner on the homepage or ask for their Name, Phone, and Trade so our lead architect can prepare a custom proposal.

CORE KNOWLEDGE BASE:
- Who we are: Alizane Labs is a digital studio engineering high-performance bespoke websites and autonomous 24/7 AI phone receptionists for local trade and commercial businesses (HVAC, Plumbing, Roofing, Electrical, Restoration, and more).
- Technology: We build on modern Next.js and Tailwind CSS with sub-second edge speeds — zero bloated WordPress plugins or slow templates.
- Plans & Pricing:
  1. The Site ($1,500 to build, then $99/month): Up to 5 core pages, mobile-first sub-second speed, tap-to-call, contact form with instant email alerts, hosting & 2 content updates/mo.
  2. The Works ($2,800 to build, then $149/month): Up to 10 service & 10 town area pages, before/after gallery, live Google reviews feed, Instant Lead SMS alerts, Instant Customer Auto-Text, and Local Schema SEO.
  3. The Site That Answers ($4,500 to build, then $299/month · 100 call mins included, then ~$0.25/min): Everything in The Works + 24/7 AI Phone Receptionist + 24/7 Website AI Chat Employee + 21-day automated quote follow-up.
- Terms: 100% month-to-month. Domain stays in client's name unconditionally. Invoiced electronically payable via ACH to our designated U.S. bank account.
- Turnaround: 7 to 10 business days from kickoff to public launch.

CONVERSATION GUIDELINES:
- Keep responses concise (2 to 4 sentences max). Never output walls of text.
- If the visitor wants to start or get a plan, guide them to click "Get your build plan" or ask for their details.`;

export async function POST(req: NextRequest) {
  // 1. IP Rate Limiting
  const limit = checkRateLimit(clientKeyFromHeaders(req.headers));
  if (!limit.allowed) {
    return NextResponse.json(
      { message: "Too many chat messages. Please slow down." },
      { status: 429 }
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

    const apiKey = process.env.OPENROUTER_API_KEY;
    const model = process.env.AI_CHAT_MODEL || "openrouter/free";

    if (!apiKey || apiKey === "your_openrouter_api_key_here") {
      return NextResponse.json(
        {
          role: "assistant",
          content:
            "Hello! I am the Alizane Labs AI assistant. To enable live AI chat on localhost, please add your OPENROUTER_API_KEY to .env.local.",
        },
        { status: 200 }
      );
    }

    // Call OpenRouter API
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        "HTTP-Referer": "https://alizanelabs.site",
        "X-Title": "Alizane Labs Website Assistant",
      },
      body: JSON.stringify({
        model: model,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages.slice(-6), // Keep last 6 messages for context
        ],
        temperature: 0.4,
        max_tokens: 300,
      }),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      console.error("OpenRouter Error:", errData);
      return NextResponse.json(
        {
          role: "assistant",
          content:
            "I'm experiencing a brief connection delay. Feel free to explore our plans below or fill out the project planner to get your tailored build plan!",
        },
        { status: 200 }
      );
    }

    const data = await response.json();
    const assistantMessage = data.choices?.[0]?.message?.content || "How else can I help you today?";

    // Async check if lead info was provided in recent messages, send to n8n webhook
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

    return NextResponse.json({
      role: "assistant",
      content: assistantMessage,
    });
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
