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

export interface ContractorLeader {
  name: string;
  role: string;
  bio: string;
}

export interface ClientChatbotConfig {
  clientId: string;
  businessName: string;
  phone: string;
  tollFree: string;
  address: string;
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
  leadership: ContractorLeader[];
  foundationMission?: string;
}

// Built-in verified client profiles for instantaneous edge resolution
const BUILT_IN_CLIENTS: Record<string, ClientChatbotConfig> = {
  "water-extraction-team": {
    clientId: "water-extraction-team",
    businessName: "Water Extraction Team (W.E.T.)",
    phone: "(303) 232-8888",
    tollFree: "(866) 344-4WET",
    address: "4191 Inca St, Denver, CO 80211",
    serviceCity: "Denver & Colorado Front Range",
    tagline: "Denver’s Premier Water Mitigation Contractor 〰️ Open 24 Hours A Day",
    subheadline: "SBA Certified Women-Owned Small Business (WOSB) & IICRC Certified. Over 30 years of excellence in truck-mounted water extraction, fire restoration, mold remediation, and Property Solutions Team (PST) rebuilds.",
    trade: "Water Extraction & Environmental Remediation",
    systemPrompt: `You are the 24/7 AI Emergency Dispatch Assistant for Water Extraction Team (W.E.T.), located at 4191 Inca St, Denver, CO 80211. 
Key facts:
1. Leadership: Co-Owners Jennifer Kronebusch (COO & Partner) and David Lian (President & Partner), and Mark Muniz-Brown (EVP Business Development).
2. Emergency lines: (303) 232-8888 and (866) 344-4WET. 24/7/365 rapid response.
3. SBA Certified Women-Owned Small Business (WOSB), Colorado Health Links Certified Partner, licensed & insured in CO & MT.
4. Services: 24/7 Water Extraction (truck mounted units), Fire & Smoke Restoration, Mold Remediation, Deodorization (protein neutralizing), Asbestos Abatement, and Construction by Property Solutions Team (PST).
5. Community: Proud supporter of Foundation 1023 (first responder mental health wellness). W.E.T. donates 5% of a property loss to Foundation 1023 when mentioned.
6. Direct Insurance Billing: We bill all carriers (State Farm, Allstate, USAA, Travelers, Farmers) directly using Xactimate itemized pricing with zero out-of-pocket delays.
Always speak with calm, authoritative urgency. Capture the caller's address, name, and phone number for immediate technician dispatch. Never use markdown asterisks or bullet points.`,
    themeAccent: "#005691",
    themeHover: "#004070",
    themeBorder: "#071526",
    themePulse: "#38BDF8",
    themeOnAccent: "#FFFFFF",
    allowedDomains: ["*"],
    isActive: true,
    foundationMission: "Water Extraction Team (W.E.T.) is a proud partner of Foundation 1023, funding confidential emotional and mental wellness services for Colorado First Responders. W.E.T. donates 5% of property loss jobs to Foundation 1023 when mentioned by homeowners or first responders.",
    trustBadges: [
      "SBA Certified Women-Owned Small Business (WOSB)",
      "Colorado Health Links Certified Partner",
      "Foundation 1023 Official Supporter (5% Loss Donation)",
      "Licensed & Insured in Colorado & Montana",
    ],
    leadership: [
      {
        name: "Jennifer Kronebusch, MBA",
        role: "Chief Operating Officer & Partner",
        bio: "Leading Water Extraction Team for nearly two decades, guiding commercial and residential clients throughout Colorado's Front Range and managing the Property Solutions Team (PST) rebuild division.",
      },
      {
        name: "David Lian",
        role: "President & Partner",
        bio: "Leading Water Extraction Team for over three decades, directing large-scale enterprise disaster recovery and residential mitigation across Colorado and nationwide.",
      },
      {
        name: "Mark Muniz-Brown, CMCA, AMS, PCAM",
        role: "Executive Vice President of Business Development",
        bio: "Nearly two decades serving HOA homeowners and HOA Boards of Directors. Leads multi-family emergency response and management company relations across the Denver Metro.",
      },
    ],
    services: [
      {
        title: "Water Extraction & Structural Drying",
        category: "24/7 Emergency",
        description: "Truck mounted and mobile extraction units removing thousands of gallons of flood waters from leaking pipes, broken water mains, or severe runoff with thermal moisture imaging.",
        highlights: [
          "High-CFM truck mounted water extraction units",
          "FLIR infrared thermal moisture mapping behind drywalls",
          "Industrial LGR dehumidifiers and vortex air movers",
        ],
        icon: "🌊",
      },
      {
        title: "Fire & Smoke Damage Restoration",
        category: "Disaster Recovery",
        description: "Comprehensive restoration for single-family and multi-family structures damaged by fire, soot residue, and smoke protein infiltration.",
        highlights: [
          "Structural soot removal and air scrubber purification",
          "Thermal fogging smoke protein neutralization",
          "Itemized Xactimate loss itemization for insurance",
        ],
        icon: "🔥",
      },
      {
        title: "Mold Remediation & Containment",
        category: "Environmental",
        description: "When left untreated, water damaged surfaces lead to hazardous mold colonies. We establish negative air pressure containment and botanical antimicrobials.",
        highlights: [
          "Negative air pressure containment zones",
          "HEPA air scrubbers eliminating airborne mold spores",
          "Clearance testing protocol verification",
        ],
        icon: "🧪",
      },
      {
        title: "Deodorization Services",
        category: "Odor Neutralization",
        description: "Every odor (smoke, decomposition, sewage) contains specific proteins that can be neutralized at the molecular level with thermal fogging and ozone.",
        highlights: [
          "Molecular protein odor breakdown",
          "HVAC and structural thermal fogging",
          "Permanent smell elimination without masking agents",
        ],
        icon: "💨",
      },
      {
        title: "Asbestos Abatement",
        category: "CDPHE Certified",
        description: "W.E.T. certified technicians test for asbestos at loss-based sites, establishing state-compliant containment and safe acoustic/drywall disposal.",
        highlights: [
          "State of Colorado CDPHE certified abatement",
          "Containment barriers and negative air filtration",
          "Safe certified disposal manifests",
        ],
        icon: "⚠️",
      },
      {
        title: "Property Solutions Team (PST Rebuild)",
        category: "Full Reconstruction",
        description: "Full post-mitigation design-build construction division: drywall repair, painting, trim carpentry, load-bearing wall relocation, and complete insurance rebuilds.",
        highlights: [
          "Seamless transition from water extraction to rebuild",
          "Licensed general contracting craftsmanship",
          "Directed by COO Jennifer Kronebusch",
        ],
        icon: "🏗️",
      },
    ],
    serviceAreas: [
      "Denver (4191 Inca St)",
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
        name: "Julie Baca",
        location: "Colorado Management & Realty (HOA Community)",
        time: "Verified Client",
        text: "I absolutely recommend Mark and WET. We had an active flood from a pipe on the third floor of one of our HOA communities, I called Mark and he had a crew in route within minutes. Once on site, the crew opened the wall with such care, placed drop cloths on the floor to protect the flooring, found the leak and fixed it, dried everything out, and followed up over the next couple of days until dry. The speed and professionalism is much appreciated!",
        rating: 5,
      },
      {
        name: "Mark Richardson",
        location: "Denver Homeowner",
        time: "Verified Client",
        text: "Co-Owners Jennifer and Dave, and the entire Property Solutions Team, were wonderful to work with from start to finish, completing an extensive remodel on my home in less than two months that included, among other things, relocating load-bearing walls. To say I am pleased with their services would be an understatement.",
        rating: 5,
      },
      {
        name: "John B. Holt",
        location: "Front Range Property Owner",
        time: "Verified Client",
        text: "Property Solutions Team was wonderful to work with, a truly professional organization that took the design-build process seriously, providing clear guidance from inception to completion. Jennifer, the company’s Chief Operating Officer, is steeped in construction practices, and is a pleasure to work with.",
        rating: 5,
      },
    ],
  },
  "waterextractionteam": {
    clientId: "waterextractionteam",
    businessName: "Water Extraction Team (W.E.T.)",
    phone: "(303) 232-8888",
    tollFree: "(866) 344-4WET",
    address: "4191 Inca St, Denver, CO 80211",
    serviceCity: "Denver & Colorado Front Range",
    tagline: "Denver’s Premier Water Mitigation Contractor 〰️ Open 24 Hours A Day",
    subheadline: "SBA Certified Women-Owned Small Business (WOSB) & IICRC Certified. Over 30 years of excellence in truck-mounted water extraction, fire restoration, mold remediation, and Property Solutions Team (PST) rebuilds.",
    trade: "Water Extraction & Environmental Remediation",
    systemPrompt: `You are the 24/7 AI Emergency Dispatch Assistant for Water Extraction Team (W.E.T.), located at 4191 Inca St, Denver, CO 80211. 
Key facts:
1. Leadership: Co-Owners Jennifer Kronebusch (COO & Partner) and David Lian (President & Partner), and Mark Muniz-Brown (EVP Business Development).
2. Emergency lines: (303) 232-8888 and (866) 344-4WET. 24/7/365 rapid response.
3. SBA Certified Women-Owned Small Business (WOSB), Colorado Health Links Certified Partner, licensed & insured in CO & MT.
4. Services: 24/7 Water Extraction (truck mounted units), Fire & Smoke Restoration, Mold Remediation, Deodorization (protein neutralizing), Asbestos Abatement, and Construction by Property Solutions Team (PST).
5. Community: Proud supporter of Foundation 1023 (first responder mental health wellness). W.E.T. donates 5% of a property loss to Foundation 1023 when mentioned.
6. Direct Insurance Billing: We bill all carriers (State Farm, Allstate, USAA, Travelers, Farmers) directly using Xactimate itemized pricing with zero out-of-pocket delays.
Always speak with calm, authoritative urgency. Capture the caller's address, name, and phone number for immediate technician dispatch. Never use markdown asterisks or bullet points.`,
    themeAccent: "#005691",
    themeHover: "#004070",
    themeBorder: "#071526",
    themePulse: "#38BDF8",
    themeOnAccent: "#FFFFFF",
    allowedDomains: ["*"],
    isActive: true,
    foundationMission: "Water Extraction Team (W.E.T.) is a proud partner of Foundation 1023, funding confidential emotional and mental wellness services for Colorado First Responders. W.E.T. donates 5% of property loss jobs to Foundation 1023 when mentioned by homeowners or first responders.",
    trustBadges: [
      "SBA Certified Women-Owned Small Business (WOSB)",
      "Colorado Health Links Certified Partner",
      "Foundation 1023 Official Supporter (5% Loss Donation)",
      "Licensed & Insured in Colorado & Montana",
    ],
    leadership: [
      {
        name: "Jennifer Kronebusch, MBA",
        role: "Chief Operating Officer & Partner",
        bio: "Leading Water Extraction Team for nearly two decades, guiding commercial and residential clients throughout Colorado's Front Range and managing the Property Solutions Team (PST) rebuild division.",
      },
      {
        name: "David Lian",
        role: "President & Partner",
        bio: "Leading Water Extraction Team for over three decades, directing large-scale enterprise disaster recovery and residential mitigation across Colorado and nationwide.",
      },
      {
        name: "Mark Muniz-Brown, CMCA, AMS, PCAM",
        role: "Executive Vice President of Business Development",
        bio: "Nearly two decades serving HOA homeowners and HOA Boards of Directors. Leads multi-family emergency response and management company relations across the Denver Metro.",
      },
    ],
    services: [
      {
        title: "Water Extraction & Structural Drying",
        category: "24/7 Emergency",
        description: "Truck mounted and mobile extraction units removing thousands of gallons of flood waters from leaking pipes, broken water mains, or severe runoff with thermal moisture imaging.",
        highlights: [
          "High-CFM truck mounted water extraction units",
          "FLIR infrared thermal moisture mapping behind drywalls",
          "Industrial LGR dehumidifiers and vortex air movers",
        ],
        icon: "🌊",
      },
      {
        title: "Fire & Smoke Damage Restoration",
        category: "Disaster Recovery",
        description: "Comprehensive restoration for single-family and multi-family structures damaged by fire, soot residue, and smoke protein infiltration.",
        highlights: [
          "Structural soot removal and air scrubber purification",
          "Thermal fogging smoke protein neutralization",
          "Itemized Xactimate loss itemization for insurance",
        ],
        icon: "🔥",
      },
      {
        title: "Mold Remediation & Containment",
        category: "Environmental",
        description: "When left untreated, water damaged surfaces lead to hazardous mold colonies. We establish negative air pressure containment and botanical antimicrobials.",
        highlights: [
          "Negative air pressure containment zones",
          "HEPA air scrubbers eliminating airborne mold spores",
          "Clearance testing protocol verification",
        ],
        icon: "🧪",
      },
      {
        title: "Deodorization Services",
        category: "Odor Neutralization",
        description: "Every odor (smoke, decomposition, sewage) contains specific proteins that can be neutralized at the molecular level with thermal fogging and ozone.",
        highlights: [
          "Molecular protein odor breakdown",
          "HVAC and structural thermal fogging",
          "Permanent smell elimination without masking agents",
        ],
        icon: "💨",
      },
      {
        title: "Asbestos Abatement",
        category: "CDPHE Certified",
        description: "W.E.T. certified technicians test for asbestos at loss-based sites, establishing state-compliant containment and safe acoustic/drywall disposal.",
        highlights: [
          "State of Colorado CDPHE certified abatement",
          "Containment barriers and negative air filtration",
          "Safe certified disposal manifests",
        ],
        icon: "⚠️",
      },
      {
        title: "Property Solutions Team (PST Rebuild)",
        category: "Full Reconstruction",
        description: "Full post-mitigation design-build construction division: drywall repair, painting, trim carpentry, load-bearing wall relocation, and complete insurance rebuilds.",
        highlights: [
          "Seamless transition from water extraction to rebuild",
          "Licensed general contracting craftsmanship",
          "Directed by COO Jennifer Kronebusch",
        ],
        icon: "🏗️",
      },
    ],
    serviceAreas: [
      "Denver (4191 Inca St)",
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
        name: "Julie Baca",
        location: "Colorado Management & Realty (HOA Community)",
        time: "Verified Client",
        text: "I absolutely recommend Mark and WET. We had an active flood from a pipe on the third floor of one of our HOA communities, I called Mark and he had a crew in route within minutes. Once on site, the crew opened the wall with such care, placed drop cloths on the floor to protect the flooring, found the leak and fixed it, dried everything out, and followed up over the next couple of days until dry. The speed and professionalism is much appreciated!",
        rating: 5,
      },
      {
        name: "Mark Richardson",
        location: "Denver Homeowner",
        time: "Verified Client",
        text: "Co-Owners Jennifer and Dave, and the entire Property Solutions Team, were wonderful to work with from start to finish, completing an extensive remodel on my home in less than two months that included, among other things, relocating load-bearing walls. To say I am pleased with their services would be an understatement.",
        rating: 5,
      },
      {
        name: "John B. Holt",
        location: "Front Range Property Owner",
        time: "Verified Client",
        text: "Property Solutions Team was wonderful to work with, a truly professional organization that took the design-build process seriously, providing clear guidance from inception to completion. Jennifer, the company’s Chief Operating Officer, is steeped in construction practices, and is a pleasure to work with.",
        rating: 5,
      },
    ],
  },
  "alizane-restoration": {
    clientId: "alizane-restoration",
    businessName: "Alizane Emergency Restoration",
    phone: "(555) 019-2834",
    tollFree: "(800) 555-0199",
    address: "Dallas Metro Operations Center, Dallas, TX",
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
    leadership: [
      {
        name: "David Chen",
        role: "Director of Operations",
        bio: "Managing emergency flood response and large-loss mitigation teams across North Texas.",
      },
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

  return null;
}
