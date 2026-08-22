export interface ClientChatbotConfig {
  clientId: string;
  businessName: string;
  systemPrompt: string;
  themeAccent: string;
  themeHover: string;
  themeBorder: string;
  themePulse: string;
  themeOnAccent: string;
  leadWebhookUrl?: string;
  allowedDomains: string[];
  isActive: boolean;
}

// Built-in verified client profiles for instantaneous edge resolution
const BUILT_IN_CLIENTS: Record<string, ClientChatbotConfig> = {
  "water-extraction-team": {
    clientId: "water-extraction-team",
    businessName: "Water Extraction Team (W.E.T.)",
    systemPrompt: `You are the 24/7 AI Emergency Dispatch Assistant for Water Extraction Team (W.E.T.), Denver's premier water mitigation, fire restoration, mold remediation, and emergency cleanup contractor. You speak in a confident, reassuring, and urgent tone. You help homeowners and commercial property managers in the Denver Metro and Front Range area facing burst pipes, flooded basements, sewage backups, fire/smoke damage, or mold problems. Key facts: 1. We operate 24/7/365 with rapid under 60-minute emergency dispatch. 2. Emergency phone: (303) 232-8888. 3. Certifications: IICRC Certified, Woman-Owned Small Business Certified (WOSB), fully licensed and insured. 4. We assist with all insurance claims and direct insurance carrier billing. Always answer questions directly and encourage property owners to provide their name, phone number, and address or call (303) 232-8888 for immediate truck-mounted extraction dispatch. Never output markdown asterisks or bullet points.`,
    themeAccent: "#005691",
    themeHover: "#004070",
    themeBorder: "#071526",
    themePulse: "#38BDF8",
    themeOnAccent: "#FFFFFF",
    allowedDomains: ["*"],
    isActive: true,
  },
  "waterextractionteam": {
    clientId: "waterextractionteam",
    businessName: "Water Extraction Team (W.E.T.)",
    systemPrompt: `You are the 24/7 AI Emergency Dispatch Assistant for Water Extraction Team (W.E.T.), Denver's premier water mitigation, fire restoration, mold remediation, and emergency cleanup contractor. You speak in a confident, reassuring, and urgent tone. You help homeowners and commercial property managers in the Denver Metro and Front Range area facing burst pipes, flooded basements, sewage backups, fire/smoke damage, or mold problems. Key facts: 1. We operate 24/7/365 with rapid under 60-minute emergency dispatch. 2. Emergency phone: (303) 232-8888. 3. Certifications: IICRC Certified, Woman-Owned Small Business Certified (WOSB), fully licensed and insured. 4. We assist with all insurance claims and direct insurance carrier billing. Always answer questions directly and encourage property owners to provide their name, phone number, and address or call (303) 232-8888 for immediate truck-mounted extraction dispatch. Never output markdown asterisks or bullet points.`,
    themeAccent: "#005691",
    themeHover: "#004070",
    themeBorder: "#071526",
    themePulse: "#38BDF8",
    themeOnAccent: "#FFFFFF",
    allowedDomains: ["*"],
    isActive: true,
  },
  "alizane-restoration": {
    clientId: "alizane-restoration",
    businessName: "Alizane Emergency Restoration",
    systemPrompt: `You are the 24/7 AI Emergency Dispatch Assistant for Alizane Emergency Restoration. We dispatch rapid-response water mitigation and emergency cleanup crews in under 60 minutes across the metro area. Direct insurance billing, IICRC certified, 24/7 dispatch hotline: (555) 019-2834. Always answer with calm, decisive urgency and capture their name and phone number for immediate technician dispatch. Never use markdown asterisks or bullet points.`,
    themeAccent: "#065F46",
    themeHover: "#044E3A",
    themeBorder: "#044E3A",
    themePulse: "#34D399",
    themeOnAccent: "#FFFFFF",
    allowedDomains: ["*"],
    isActive: true,
  },
};

// In-memory edge cache with 5-minute TTL to ensure sub-millisecond edge latency
const cache = new Map<string, { config: ClientChatbotConfig; expiresAt: number }>();
const CACHE_TTL_MS = 5 * 60 * 1000;

/**
 * Fetches dynamic client chatbot configuration from Supabase with edge caching & graceful fallback.
 */
export async function getClientChatbotConfig(clientId?: string): Promise<ClientChatbotConfig | null> {
  const normalizedId = (clientId || "alizane-agency").toLowerCase().trim();

  // 1. Check built-in client profiles (Instant 0ms)
  if (BUILT_IN_CLIENTS[normalizedId]) {
    return BUILT_IN_CLIENTS[normalizedId];
  }

  // 2. Check in-memory cache
  const cached = cache.get(normalizedId);
  if (cached && cached.expiresAt > Date.now()) {
    return cached.config;
  }

  const supabaseUrl = (process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || "").replace(/\/$/, "");
  const supabaseKey = (
    process.env.SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    ""
  ).replace(/['"=]/g, "").trim();

  if (!supabaseUrl || !supabaseKey) {
    return null;
  }

  try {
    const res = await fetch(
      `${supabaseUrl}/rest/v1/client_chatbots?client_id=eq.${encodeURIComponent(normalizedId)}&select=*`,
      {
        method: "GET",
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          "Content-Type": "application/json",
        },
        next: { revalidate: 300 },
      }
    );

    if (!res.ok) {
      console.error(`[supabase-chat] Error fetching client config (${res.status}):`, await res.text());
      return null;
    }

    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) {
      return null;
    }

    const row = data[0];
    const config: ClientChatbotConfig = {
      clientId: row.client_id,
      businessName: row.business_name || "Alizane Labs Client",
      systemPrompt: row.system_prompt,
      themeAccent: row.theme_accent || "#065F46",
      themeHover: row.theme_hover || "#064E3B",
      themeBorder: row.theme_border || "#064E3B",
      themePulse: row.theme_pulse || "#34D399",
      themeOnAccent: row.theme_on_accent || "#FFFFFF",
      leadWebhookUrl: row.lead_webhook_url || undefined,
      allowedDomains: row.allowed_domains || ["*"],
      isActive: row.is_active ?? true,
    };

    cache.set(normalizedId, { config, expiresAt: Date.now() + CACHE_TTL_MS });
    return config;
  } catch (error) {
    console.error("[supabase-chat] Fetch error:", error);
    return null;
  }
}
