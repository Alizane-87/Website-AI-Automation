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

// In-memory edge cache with 5-minute TTL to ensure sub-millisecond edge latency
const cache = new Map<string, { config: ClientChatbotConfig; expiresAt: number }>();
const CACHE_TTL_MS = 5 * 60 * 1000;

/**
 * Fetches dynamic client chatbot configuration from Supabase with edge caching & graceful fallback.
 */
export async function getClientChatbotConfig(clientId?: string): Promise<ClientChatbotConfig | null> {
  const normalizedId = (clientId || "alizane-agency").toLowerCase().trim();

  // 1. Check in-memory cache
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
    return null; // Fallback to local default if Supabase env vars are not set
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
        // Enable Next.js revalidation cache (300s)
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
