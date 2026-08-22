export interface ContractorService {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  icon: string;
}

export interface ContractorReview {
  name: string;
  location: string;
  time: string;
  text: string;
  rating: number;
}

export interface ClientChatbotConfig {
  clientId: string;
  businessName: string;
  phone: string;
  serviceCity: string;
  tagline: string;
  subheadline: string;
  trade: string;
  systemPrompt: string;
  themeAccent: string;
  themeHover: string;
  themeBorder: string;
  themePulse: string;
  themeOnAccent: string;
  leadWebhookUrl?: string;
  allowedDomains: string[];
  isActive: boolean;
  trustBadges: string[];
  services: ContractorService[];
  serviceAreas: string[];
  reviews: ContractorReview[];
}

// Built-in verified client profiles for instantaneous edge resolution
const BUILT_IN_CLIENTS: Record<string, ClientChatbotConfig> = {
  "water-extraction-team": {
    clientId: "water-extraction-team",
    businessName: "Water Extraction Team (W.E.T.)",
    phone: "(303) 232-8888",
    serviceCity: "Denver & Colorado Front Range",
    tagline: "Denver’s Premier Water Mitigation Contractor 〰️ Open 24 Hours A Day",
    subheadline: "Woman-Owned Small Business (WOSB) & IICRC Certified. Truck-mounted rapid water extraction, fire restoration, mold remediation, and rebuilds across the Denver Metro.",
    trade: "Water Mitigation & Disaster Restoration",
    systemPrompt: `You are the 24/7 AI Emergency Dispatch Assistant for Water Extraction Team (W.E.T.), Denver's premier water mitigation, fire restoration, mold remediation, and asbestos abatement contractor. You speak in a confident, reassuring, and urgent tone. You help homeowners and commercial property managers in Denver, Aurora, Lakewood, Littleton, and the Colorado Front Range who are facing burst pipes, flooded basements, sewage backups, fire/smoke damage, or mold problems. Key facts: 1. We operate 24/7/365 with rapid under 60-minute emergency dispatch. 2. Emergency phone: (303) 232-8888. 3. Certifications: IICRC Certified, Woman-Owned Small Business Certified (WOSB), fully licensed & insured. 4. We work directly with all major insurance carriers (State Farm, Allstate, USAA, Travelers, Farmers) for direct insurance billing with zero upfront delay. Always answer questions directly and encourage property owners to provide their name, phone number, and address or call (303) 232-8888 for immediate truck-mounted extraction dispatch. Never output markdown asterisks or bullet points.`,
    themeAccent: "#005691",
    themeHover: "#004070",
    themeBorder: "#071526",
    themePulse: "#38BDF8",
    themeOnAccent: "#FFFFFF",
    allowedDomains: ["*"],
    isActive: true,
    trustBadges: [
      "Woman-Owned Small Business Certified",
      "IICRC Master Restoration Certified",
      "Foundation 1023 Supporter",
      "Direct Insurance Billing Accepted",
    ],
    services: [
      {
        title: "24/7 Water Extraction & Structural Drying",
        category: "Emergency 24/7",
        description: "Truck-mounted and mobile extraction units removing thousands of gallons of flood water with thermal infrared moisture mapping and commercial dehumidification.",
        highlights: [
          "Under 60-minute Denver dispatch window",
          "High-CFM truck mounted water extraction",
          "Hardwood floor and subfloor drying mats",
        ],
        icon: "🌊",
      },
      {
        title: "Fire & Smoke Damage Restoration",
        category: "Disaster Recovery",
        description: "Comprehensive structural soot removal, thermal fogging deodorization, and content pack-out to restore your property after devastating fire damage.",
        highlights: [
          "Complete smoke & odor thermal fogging",
          "Soot removal from walls, ceilings & HVAC",
          "Direct insurance coordination & Xactimate billing",
        ],
        icon: "🔥",
      },
      {
        title: "Mold Remediation & Containment",
        category: "Environmental",
        description: "Strict containment barriers, negative air pressure HEPA scrubbers, and botanical anti-microbial treatments to safely eradicate toxic mold colonies.",
        highlights: [
          "Negative air pressure containment zones",
          "HEPA air filtration and moisture source elimination",
          "Independent post-remediation clearance testing",
        ],
        icon: "🧪",
      },
      {
        title: "CDPHE Asbestos Abatement",
        category: "Hazmat Certified",
        description: "Certified asbestos removal for popcorn ceilings, vinyl flooring, duct insulation, and drywall to keep your home safe during renovations.",
        highlights: [
          "State of Colorado CDPHE compliant protocols",
          "Safe containment and certified waste disposal",
          "Air quality clearance verification",
        ],
        icon: "⚠️",
      },
      {
        title: "Property Solutions Team (PST Rebuild)",
        category: "Full Reconstruction",
        description: "Full post-mitigation rebuild services: drywall repair, texturing, painting, trim carpentry, and new flooring to make your home brand new again.",
        highlights: [
          "Seamless transition from mitigation to rebuild",
          "Licensed general contracting craftsmanship",
          "Full 5-year workmanship warranty",
        ],
        icon: "🏗️",
      },
      {
        title: "Direct Insurance Claims Desk",
        category: "Hassle-Free Billing",
        description: "We work directly with State Farm, Allstate, USAA, Travelers, Liberty Mutual, and all major carriers with zero out-of-pocket delays.",
        highlights: [
          "Itemized Xactimate estimates provided to adjuster",
          "100% direct insurance carrier billing",
          "Zero out-of-pocket payment required for covered losses",
        ],
        icon: "📋",
      },
    ],
    serviceAreas: [
      "Denver",
      "Aurora",
      "Lakewood",
      "Littleton",
      "Centennial",
      "Highlands Ranch",
      "Englewood",
      "Golden",
      "Arvada",
      "Westminster",
      "Thornton",
      "Boulder",
    ],
    reviews: [
      {
        name: "Greg M.",
        location: "Denver (Wash Park)",
        time: "3 days ago",
        text: "A water line burst in our finished basement at 2:00 AM on a freezing night. Water Extraction Team had a truck-mounted crew in our driveway within 40 minutes. They saved our hardwood floors and handled the insurance claim entirely.",
        rating: 5,
      },
      {
        name: "Elena R.",
        location: "Lakewood, CO",
        time: "2 weeks ago",
        text: "Professional, respectful, and fast. As a homeowner dealing with kitchen smoke and soot damage, having W.E.T. manage both the cleanup and rebuild with their PST team was a massive relief.",
        rating: 5,
      },
      {
        name: "Marcus T.",
        location: "Highlands Ranch, CO",
        time: "1 month ago",
        text: "Found severe mold in our crawlspace during a home inspection. W.E.T. set up negative air containment, cleared the mold completely, and provided the clearance certificate in 4 days. Incredible team.",
        rating: 5,
      },
    ],
  },
  "waterextractionteam": {
    clientId: "waterextractionteam",
    businessName: "Water Extraction Team (W.E.T.)",
    phone: "(303) 232-8888",
    serviceCity: "Denver & Colorado Front Range",
    tagline: "Denver’s Premier Water Mitigation Contractor 〰️ Open 24 Hours A Day",
    subheadline: "Woman-Owned Small Business (WOSB) & IICRC Certified. Truck-mounted rapid water extraction, fire restoration, mold remediation, and rebuilds across the Denver Metro.",
    trade: "Water Mitigation & Disaster Restoration",
    systemPrompt: `You are the 24/7 AI Emergency Dispatch Assistant for Water Extraction Team (W.E.T.), Denver's premier water mitigation, fire restoration, mold remediation, and asbestos abatement contractor. You speak in a confident, reassuring, and urgent tone. You help homeowners and commercial property managers in Denver, Aurora, Lakewood, Littleton, and the Colorado Front Range who are facing burst pipes, flooded basements, sewage backups, fire/smoke damage, or mold problems. Key facts: 1. We operate 24/7/365 with rapid under 60-minute emergency dispatch. 2. Emergency phone: (303) 232-8888. 3. Certifications: IICRC Certified, Woman-Owned Small Business Certified (WOSB), fully licensed & insured. 4. We work directly with all major insurance carriers (State Farm, Allstate, USAA, Travelers, Farmers) for direct insurance billing with zero upfront delay. Always answer questions directly and encourage property owners to provide their name, phone number, and address or call (303) 232-8888 for immediate truck-mounted extraction dispatch. Never output markdown asterisks or bullet points.`,
    themeAccent: "#005691",
    themeHover: "#004070",
    themeBorder: "#071526",
    themePulse: "#38BDF8",
    themeOnAccent: "#FFFFFF",
    allowedDomains: ["*"],
    isActive: true,
    trustBadges: [
      "Woman-Owned Small Business Certified",
      "IICRC Master Restoration Certified",
      "Foundation 1023 Supporter",
      "Direct Insurance Billing Accepted",
    ],
    services: [
      {
        title: "24/7 Water Extraction & Structural Drying",
        category: "Emergency 24/7",
        description: "Truck-mounted and mobile extraction units removing thousands of gallons of flood water with thermal infrared moisture mapping and commercial dehumidification.",
        highlights: [
          "Under 60-minute Denver dispatch window",
          "High-CFM truck mounted water extraction",
          "Hardwood floor and subfloor drying mats",
        ],
        icon: "🌊",
      },
      {
        title: "Fire & Smoke Damage Restoration",
        category: "Disaster Recovery",
        description: "Comprehensive structural soot removal, thermal fogging deodorization, and content pack-out to restore your property after devastating fire damage.",
        highlights: [
          "Complete smoke & odor thermal fogging",
          "Soot removal from walls, ceilings & HVAC",
          "Direct insurance coordination & Xactimate billing",
        ],
        icon: "🔥",
      },
      {
        title: "Mold Remediation & Containment",
        category: "Environmental",
        description: "Strict containment barriers, negative air pressure HEPA scrubbers, and botanical anti-microbial treatments to safely eradicate toxic mold colonies.",
        highlights: [
          "Negative air pressure containment zones",
          "HEPA air filtration and moisture source elimination",
          "Independent post-remediation clearance testing",
        ],
        icon: "🧪",
      },
      {
        title: "CDPHE Asbestos Abatement",
        category: "Hazmat Certified",
        description: "Certified asbestos removal for popcorn ceilings, vinyl flooring, duct insulation, and drywall to keep your home safe during renovations.",
        highlights: [
          "State of Colorado CDPHE compliant protocols",
          "Safe containment and certified waste disposal",
          "Air quality clearance verification",
        ],
        icon: "⚠️",
      },
      {
        title: "Property Solutions Team (PST Rebuild)",
        category: "Full Reconstruction",
        description: "Full post-mitigation rebuild services: drywall repair, texturing, painting, trim carpentry, and new flooring to make your home brand new again.",
        highlights: [
          "Seamless transition from mitigation to rebuild",
          "Licensed general contracting craftsmanship",
          "Full 5-year workmanship warranty",
        ],
        icon: "🏗️",
      },
      {
        title: "Direct Insurance Claims Desk",
        category: "Hassle-Free Billing",
        description: "We work directly with State Farm, Allstate, USAA, Travelers, Liberty Mutual, and all major carriers with zero out-of-pocket delays.",
        highlights: [
          "Itemized Xactimate estimates provided to adjuster",
          "100% direct insurance carrier billing",
          "Zero out-of-pocket payment required for covered losses",
        ],
        icon: "📋",
      },
    ],
    serviceAreas: [
      "Denver",
      "Aurora",
      "Lakewood",
      "Littleton",
      "Centennial",
      "Highlands Ranch",
      "Englewood",
      "Golden",
      "Arvada",
      "Westminster",
      "Thornton",
      "Boulder",
    ],
    reviews: [
      {
        name: "Greg M.",
        location: "Denver (Wash Park)",
        time: "3 days ago",
        text: "A water line burst in our finished basement at 2:00 AM on a freezing night. Water Extraction Team had a truck-mounted crew in our driveway within 40 minutes. They saved our hardwood floors and handled the insurance claim entirely.",
        rating: 5,
      },
      {
        name: "Elena R.",
        location: "Lakewood, CO",
        time: "2 weeks ago",
        text: "Professional, respectful, and fast. As a homeowner dealing with kitchen smoke and soot damage, having W.E.T. manage both the cleanup and rebuild with their PST team was a massive relief.",
        rating: 5,
      },
      {
        name: "Marcus T.",
        location: "Highlands Ranch, CO",
        time: "1 month ago",
        text: "Found severe mold in our crawlspace during a home inspection. W.E.T. set up negative air containment, cleared the mold completely, and provided the clearance certificate in 4 days. Incredible team.",
        rating: 5,
      },
    ],
  },
  "alizane-restoration": {
    clientId: "alizane-restoration",
    businessName: "Alizane Emergency Restoration",
    phone: "(555) 019-2834",
    serviceCity: "Dallas-Fort Worth Metro Area",
    tagline: "24/7 Emergency Water Mitigation & Disaster Recovery",
    subheadline: "Rapid-response emergency crews deployed in under 60 minutes. Direct insurance billing, IICRC certified, and zero hidden overtime fees.",
    trade: "Emergency Water Damage & Restoration",
    systemPrompt: `You are the 24/7 AI Emergency Dispatch Assistant for Alizane Emergency Restoration. We dispatch rapid-response water mitigation and emergency cleanup crews in under 60 minutes across the metro area. Direct insurance billing, IICRC certified, 24/7 dispatch hotline: (555) 019-2834. Always answer with calm, decisive urgency and capture their name and phone number for immediate technician dispatch. Never use markdown asterisks or bullet points.`,
    themeAccent: "#065F46",
    themeHover: "#044E3A",
    themeBorder: "#044E3A",
    themePulse: "#34D399",
    themeOnAccent: "#FFFFFF",
    allowedDomains: ["*"],
    isActive: true,
    trustBadges: [
      "IICRC Master Water Restoration",
      "Licensed & Bonded #TX-83912",
      "Direct Insurance Billing",
      "Zero Overtime Surcharges",
    ],
    services: [
      {
        title: "24/7 Emergency Water Extraction",
        category: "Emergency 24/7",
        description: "Immediate high-volume water pump-out, flooded basement extraction, and moisture mapping within 60 minutes.",
        highlights: ["<60 min dispatch", "High-power extractors", "Moisture mapping"],
        icon: "⚡",
      },
      {
        title: "Structural Drying & Dehumidification",
        category: "Restoration",
        description: "Commercial LGR dehumidifiers and high-velocity air movers prevent mold growth and preserve drywalls and framing.",
        highlights: ["Thermal drying", "Daily moisture logs", "Zero drywall mold risk"],
        icon: "💨",
      },
      {
        title: "Mold Remediation & Sanitization",
        category: "Environmental",
        description: "Full containment barriers and antimicrobial fogging to completely eliminate toxic mold spores.",
        highlights: ["HEPA air scrubbers", "Safe botanical sanitizers", "Pass clearance guaranteed"],
        icon: "🧪",
      },
      {
        title: "Sewage Cleanup & Biohazard",
        category: "Emergency 24/7",
        description: "Safe Category 3 black water extraction, complete decontamination, and medical-grade sterilization.",
        highlights: ["Cat 3 biohazard removal", "Odor neutralization", "Full antimicrobial treatment"],
        icon: "☣️",
      },
      {
        title: "Fire & Soot Restoration",
        category: "Disaster Recovery",
        description: "Complete soot removal, thermal fogging deodorization, and structural cleaning after house or commercial fires.",
        highlights: ["Thermal fogging", "Air duct cleaning", "Pack-out services"],
        icon: "🔥",
      },
      {
        title: "Direct Insurance Claims Desk",
        category: "Direct Billing",
        description: "We work directly with State Farm, Allstate, USAA, and all major insurance carriers for 100% direct billing.",
        highlights: ["Xactimate itemized pricing", "Zero upfront payment", "Adjuster walkthrough assistance"],
        icon: "📋",
      },
    ],
    serviceAreas: ["Dallas", "Plano", "Frisco", "McKinney", "Carrollton", "Fort Worth", "Arlington", "Irving"],
    reviews: [
      {
        name: "David K.",
        location: "Plano, TX",
        time: "1 week ago",
        text: "Water pipe burst above our living room ceiling. Alizane Restoration had a crew here in 35 minutes. They contained the water, set up drying equipment, and billed our insurance directly.",
        rating: 5,
      },
      {
        name: "Rachel M.",
        location: "Frisco, TX",
        time: "3 weeks ago",
        text: "Fast, polite, and extremely thorough. They explained every step and had our basement completely dry in 3 days.",
        rating: 5,
      },
      {
        name: "Carlos S.",
        location: "Dallas, TX",
        time: "1 month ago",
        text: "5-star service during an emergency flood. The AI chatbot answered my questions at 3:00 AM and a truck arrived before 4:00 AM.",
        rating: 5,
      },
    ],
  },
};

const cache = new Map<string, { config: ClientChatbotConfig; expiresAt: number }>();
const CACHE_TTL_MS = 5 * 60 * 1000;

export async function getClientChatbotConfig(clientId?: string): Promise<ClientChatbotConfig | null> {
  const normalizedId = (clientId || "alizane-agency").toLowerCase().trim();

  if (BUILT_IN_CLIENTS[normalizedId]) {
    return BUILT_IN_CLIENTS[normalizedId];
  }

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
      phone: row.phone || "(555) 019-2834",
      serviceCity: row.service_city || "Local Metro Area",
      tagline: row.tagline || `${row.business_name || "Contractor"} | 24/7 Quality Service`,
      subheadline: row.subheadline || "Licensed and insured contractor delivering upfront flat-rate pricing and guaranteed workmanship.",
      trade: row.trade || "General Contracting",
      systemPrompt: row.system_prompt,
      themeAccent: row.theme_accent || "#065F46",
      themeHover: row.theme_hover || "#044E3A",
      themeBorder: row.theme_border || "#044E3A",
      themePulse: row.theme_pulse || "#34D399",
      themeOnAccent: row.theme_on_accent || "#FFFFFF",
      leadWebhookUrl: row.lead_webhook_url || undefined,
      allowedDomains: row.allowed_domains || ["*"],
      isActive: row.is_active ?? true,
      trustBadges: row.trust_badges || ["Licensed & Insured", "Upfront Pricing", "Guaranteed Workmanship"],
      services: row.services || [],
      serviceAreas: row.service_areas || [],
      reviews: row.reviews || [],
    };

    cache.set(normalizedId, { config, expiresAt: Date.now() + CACHE_TTL_MS });
    return config;
  } catch (error) {
    console.error("[supabase-chat] Fetch error:", error);
    return null;
  }
}
