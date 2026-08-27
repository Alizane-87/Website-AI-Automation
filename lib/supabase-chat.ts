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
  "8weeksout": {
    clientId: "8weeksout",
    businessName: "8 Weeks Out (Joel Jamieson)",
    phone: "(425) 739-9295",
    tollFree: "(800) 555-8WKS",
    address: "BioForce Conditioning Systems HQ, Seattle, WA",
    serviceCity: "Global (Worldwide Coaches & Athletes)",
    tagline: "The World's Foremost Authority on Conditioning & Energy Systems",
    subheadline: "Created by Joel Jamieson — trusted by Navy SEALs, UFC Champions, NFL, NBA, MLS, NCAA, and thousands of elite coaches worldwide.",
    trade: "Elite Conditioning Certification & Athletic Performance",
    systemPrompt: `You are the 24/7 AI Performance & Certification Advisor for 8 Weeks Out and Joel Jamieson. Key facts: 1. Founder: Joel Jamieson, best-selling author and world-leading authority on energy systems, Heart Rate Variability (HRV), and conditioning. 2. Flagship program: BioForce Conditioning Certification, the self-guided gold standard for coaches. 3. Technology: Morpheus HRV recovery and digital conditioning ecosystem. 4. Proven record: Over 20 years preparing UFC champions, Olympic athletes, Navy SEALs, and professional teams. Always speak with scientific authority and practical clarity. Direct coaches to the BioForce Insider List and athletes to Joel's conditioning blueprints. Capture their name, coaching background, and email. Never use markdown asterisks or bullet points.`,
    themeAccent: "#E11D48",
    themeHover: "#BE123C",
    themeBorder: "#881337",
    themePulse: "#FB7185",
    themeOnAccent: "#FFFFFF",
    allowedDomains: ["*"],
    isActive: true,
    trustBadges: [
      "BioForce Conditioning Certified",
      "Pioneered Heart Rate Variability (HRV)",
      "Advisor to UFC & Navy SEALs",
      "Over 20+ Years in Elite Sport Science",
    ],
    leadership: [
      {
        name: "Joel Jamieson",
        role: "Founder & Lead Performance Scientist",
        bio: "Author of 'Ultimate MMA Conditioning' and creator of the BioForce Conditioning Certification and Morpheus recovery technology.",
      },
    ],
    services: [
      {
        title: "BioForce Conditioning Certification",
        category: "Coach Certification",
        description: "The complete, practical, self-guided certification teaching serious coaches how to design individualized conditioning programs that win.",
        highlights: ["Energy system breakdown", "Targeted volume and intensity formulas", "Official BioForce credential"],
        icon: "🏆",
      },
      {
        title: "Metabolic Conditioning Masterclasses",
        category: "Athletic Science",
        description: "Comprehensive education on mitochondrial density, cardiac stroke volume development, and fatigue resistance for combat and field sports.",
        highlights: ["Mitochondrial biogenesis", "Aerobic base construction", "High-threshold fatigue delay"],
        icon: "🔬",
      },
      {
        title: "Heart Rate Variability (HRV) Architecture",
        category: "Recovery & Strain",
        description: "Unlock objective autonomic recovery tracking to eliminate overtraining and pinpoint exactly when to push or taper training loads.",
        highlights: ["Morpheus recovery metrics", "Dynamic training zones", "Central nervous system monitoring"],
        icon: "💓",
      },
      {
        title: "Tactical & Combat Performance Systems",
        category: "Fight Camp Protocols",
        description: "Specialized 8-week peak preparation frameworks refined over decades for UFC champions, professional fighters, and tactical operators.",
        highlights: ["8-week peak timeline", "Weight cut conditioning safety", "Gas-tank endurance formulas"],
        icon: "🥊",
      },
    ],
    serviceAreas: ["Global Online Certification", "United States", "Canada", "United Kingdom", "Australia", "Europe", "Latin America"],
    reviews: [
      {
        name: "Coach Mike T.",
        location: "Austin, TX (Pro MMA Strength Coach)",
        time: "Certified Coach",
        text: "Joel’s conditioning frameworks transformed how I prepare my professional fighters. No more guessing on energy systems—our fighters never gas out in the 3rd round.",
        rating: 5,
      },
      {
        name: "Sarah K.",
        location: "Denver, CO (NCAA D1 Performance Director)",
        time: "Certified Coach",
        text: "The BioForce Certification is the undisputed gold standard. It bridges raw physiology and actionable day-to-day programming better than any clinic in the industry.",
        rating: 5,
      },
    ],
  },
  "8-weeks-out": {
    clientId: "8-weeks-out",
    businessName: "8 Weeks Out (Joel Jamieson)",
    phone: "(425) 739-9295",
    tollFree: "(800) 555-8WKS",
    address: "BioForce Conditioning Systems HQ, Seattle, WA",
    serviceCity: "Global (Worldwide Coaches & Athletes)",
    tagline: "The World's Foremost Authority on Conditioning & Energy Systems",
    subheadline: "Created by Joel Jamieson — trusted by Navy SEALs, UFC Champions, NFL, NBA, MLS, NCAA, and thousands of elite coaches worldwide.",
    trade: "Elite Conditioning Certification & Athletic Performance",
    systemPrompt: `You are the 24/7 AI Performance & Certification Advisor for 8 Weeks Out and Joel Jamieson. Key facts: 1. Founder: Joel Jamieson, best-selling author and world-leading authority on energy systems, Heart Rate Variability (HRV), and conditioning. 2. Flagship program: BioForce Conditioning Certification, the self-guided gold standard for coaches. 3. Technology: Morpheus HRV recovery and digital conditioning ecosystem. 4. Proven record: Over 20 years preparing UFC champions, Olympic athletes, Navy SEALs, and professional teams. Always speak with scientific authority and practical clarity. Direct coaches to the BioForce Insider List and athletes to Joel's conditioning blueprints. Capture their name, coaching background, and email. Never use markdown asterisks or bullet points.`,
    themeAccent: "#E11D48",
    themeHover: "#BE123C",
    themeBorder: "#881337",
    themePulse: "#FB7185",
    themeOnAccent: "#FFFFFF",
    allowedDomains: ["*"],
    isActive: true,
    trustBadges: [
      "BioForce Conditioning Certified",
      "Pioneered Heart Rate Variability (HRV)",
      "Advisor to UFC & Navy SEALs",
      "Over 20+ Years in Elite Sport Science",
    ],
    leadership: [
      {
        name: "Joel Jamieson",
        role: "Founder & Lead Performance Scientist",
        bio: "Author of 'Ultimate MMA Conditioning' and creator of the BioForce Conditioning Certification and Morpheus recovery technology.",
      },
    ],
    services: [
      {
        title: "BioForce Conditioning Certification",
        category: "Coach Certification",
        description: "The complete, practical, self-guided certification teaching serious coaches how to design individualized conditioning programs that win.",
        highlights: ["Energy system breakdown", "Targeted volume and intensity formulas", "Official BioForce credential"],
        icon: "🏆",
      },
      {
        title: "Metabolic Conditioning Masterclasses",
        category: "Athletic Science",
        description: "Comprehensive education on mitochondrial density, cardiac stroke volume development, and fatigue resistance for combat and field sports.",
        highlights: ["Mitochondrial biogenesis", "Aerobic base construction", "High-threshold fatigue delay"],
        icon: "🔬",
      },
      {
        title: "Heart Rate Variability (HRV) Architecture",
        category: "Recovery & Strain",
        description: "Unlock objective autonomic recovery tracking to eliminate overtraining and pinpoint exactly when to push or taper training loads.",
        highlights: ["Morpheus recovery metrics", "Dynamic training zones", "Central nervous system monitoring"],
        icon: "💓",
      },
      {
        title: "Tactical & Combat Performance Systems",
        category: "Fight Camp Protocols",
        description: "Specialized 8-week peak preparation frameworks refined over decades for UFC champions, professional fighters, and tactical operators.",
        highlights: ["8-week peak timeline", "Weight cut conditioning safety", "Gas-tank endurance formulas"],
        icon: "🥊",
      },
    ],
    serviceAreas: ["Global Online Certification", "United States", "Canada", "United Kingdom", "Australia", "Europe", "Latin America"],
    reviews: [
      {
        name: "Coach Mike T.",
        location: "Austin, TX (Pro MMA Strength Coach)",
        time: "Certified Coach",
        text: "Joel’s conditioning frameworks transformed how I prepare my professional fighters. No more guessing on energy systems—our fighters never gas out in the 3rd round.",
        rating: 5,
      },
      {
        name: "Sarah K.",
        location: "Denver, CO (NCAA D1 Performance Director)",
        time: "Certified Coach",
        text: "The BioForce Certification is the undisputed gold standard. It bridges raw physiology and actionable day-to-day programming better than any clinic in the industry.",
        rating: 5,
      },
    ],
  },
  "spartanfitnessmma": {
    clientId: "spartanfitnessmma",
    businessName: "Spartan Fitness (SBG Alabama)",
    phone: "(205) 824-8361",
    tollFree: "(205) 824-8361",
    address: "179 State Farm Parkway, Homewood, AL 35209",
    serviceCity: "Birmingham & Homewood, Alabama",
    tagline: "The Best Blend Of Self-Defense & Fitness Training In Birmingham",
    subheadline: "Official Straight Blast Gym (SBG) affiliate in Alabama. Brazilian Jiu-Jitsu (BJJ), Muay Thai Kickboxing, MMA, Kids Martial Arts, and High-Intensity Strength & Conditioning.",
    trade: "Martial Arts, BJJ, Muay Thai & MMA Academy",
    systemPrompt: `You are the 24/7 AI Membership & Training Assistant for Spartan Fitness (SBG Alabama), located at 179 State Farm Parkway, Homewood, AL 35209. Key facts: 1. Head Instructor & Founder: Chris Conolley (BJJ pioneer in Alabama), with senior instructors Roger Coelho, Kenned Coelho, Ethan Melisano, Tyler Stevens, Quadarrius McGinnis, Arthur Mpofu, and Anna Crutchfield. 2. Direct gym phone: (205) 824-8361. Email: info@spartanfitnessmma.com. 3. Programs: Brazilian Jiu-Jitsu (Gi and No-Gi), Muay Thai Kickboxing, Kids Martial Arts (Growing Gorillas), MMA Training, and Strength & Conditioning / Fitness Kickboxing. 4. Culture: Zero egos, safe, world-class SBG methodology suitable for complete beginners to professional fighters. Always welcome prospective students with warm enthusiasm, encourage them to book a free introductory class, and capture their name, desired martial art, and phone number. Never use markdown asterisks or bullet points.`,
    themeAccent: "#DC2626",
    themeHover: "#B91C1C",
    themeBorder: "#7F1D1D",
    themePulse: "#F87171",
    themeOnAccent: "#FFFFFF",
    allowedDomains: ["*"],
    isActive: true,
    trustBadges: [
      "Official SBG International Affiliate",
      "Authentic Black Belt Instruction",
      "Beginner-Friendly Ego-Free Gym",
      "State-of-the-Art Homewood Facility",
    ],
    leadership: [
      {
        name: "Chris Conolley",
        role: "Head Instructor & Founder",
        bio: "Founder of Spartan Fitness, pioneer of Brazilian Jiu-Jitsu in Alabama, and veteran martial arts coach who has trained champions and everyday beginners for over two decades.",
      },
      {
        name: "Roger Coelho",
        role: "Senior BJJ & MMA Instructor",
        bio: "High-level BJJ Black Belt instructor specializing in fundamental mechanics, guard passing, and competition submission grappling.",
      },
      {
        name: "Kenned Coelho",
        role: "Muay Thai & Striking Coach",
        bio: "Authentic striking coach emphasizing powerful kickboxing fundamentals, clinch control, and explosive conditioning.",
      },
    ],
    services: [
      {
        title: "Brazilian Jiu-Jitsu (BJJ - Gi & No-Gi)",
        category: "Ground Grappling",
        description: "World-class Brazilian Jiu-Jitsu instruction focused on leverage, joint locks, chokes, and defensive position control for self-defense and sport.",
        highlights: ["SBG fundamentals curriculum", "Ego-free sparring environment", "Gi and No-Gi daily sessions"],
        icon: "🥋",
      },
      {
        title: "Muay Thai Kickboxing",
        category: "Striking Arts",
        description: "High-energy eight-limb striking workouts incorporating punches, kicks, knees, elbows, and heavy bag combinations for elite cardio.",
        highlights: ["Authentic Thai pad drills", "High calorie expenditure", "Real-world striking power"],
        icon: "🥊",
      },
      {
        title: "Kids Martial Arts (Growing Gorillas)",
        category: "Youth Development",
        description: "Empowering children ages 4-13 with anti-bullying self-defense, emotional discipline, motor coordination, and lasting self-confidence.",
        highlights: ["Bully-prevention tactics", "Focus and school discipline", "Safe, positive coaching"],
        icon: "🦍",
      },
      {
        title: "Mixed Martial Arts (MMA)",
        category: "Combat Integration",
        description: "Seamlessly combining wrestling takedowns, cage work, submission defense, and technical striking for intermediate and advanced fighters.",
        highlights: ["Wall wrestling and cage control", "Ground-and-pound defense", "Comprehensive fight readiness"],
        icon: "🛡️",
      },
      {
        title: "Strength, Conditioning & Fitness Kickboxing",
        category: "Functional Fitness",
        description: "High-intensity metabolic circuits and bag-striking sessions designed to build functional muscle, burn fat, and boost cardiovascular capacity.",
        highlights: ["Functional kettlebell and barbell work", "Bag-striking endurance", "Coached by fitness pros"],
        icon: "🔥",
      },
    ],
    serviceAreas: [
      "Homewood, AL (179 State Farm Pkwy)",
      "Birmingham",
      "Vestavia Hills",
      "Mountain Brook",
      "Hoover",
      "Pelham",
      "Trussville",
      "Jefferson County",
    ],
    reviews: [
      {
        name: "Brad M.",
        location: "Homewood, AL",
        time: "Verified Member",
        text: "Spartan Fitness is an incredible community. Chris Conolley and the coaching staff are welcoming to beginners while maintaining world-class instruction. I lost 25 lbs in 6 months doing BJJ and Muay Thai.",
        rating: 5,
      },
      {
        name: "Jessica R.",
        location: "Birmingham, AL",
        time: "Verified Parent",
        text: "My kids have been in the martial arts program for two years—their confidence and focus in school has skyrocketed. Best gym in Alabama!",
        rating: 5,
      },
    ],
  },
  "spartan-fitness": {
    clientId: "spartan-fitness",
    businessName: "Spartan Fitness (SBG Alabama)",
    phone: "(205) 824-8361",
    tollFree: "(205) 824-8361",
    address: "179 State Farm Parkway, Homewood, AL 35209",
    serviceCity: "Birmingham & Homewood, Alabama",
    tagline: "The Best Blend Of Self-Defense & Fitness Training In Birmingham",
    subheadline: "Official Straight Blast Gym (SBG) affiliate in Alabama. Brazilian Jiu-Jitsu (BJJ), Muay Thai Kickboxing, MMA, Kids Martial Arts, and High-Intensity Strength & Conditioning.",
    trade: "Martial Arts, BJJ, Muay Thai & MMA Academy",
    systemPrompt: `You are the 24/7 AI Membership & Training Assistant for Spartan Fitness (SBG Alabama), located at 179 State Farm Parkway, Homewood, AL 35209. Key facts: 1. Head Instructor & Founder: Chris Conolley (BJJ pioneer in Alabama), with senior instructors Roger Coelho, Kenned Coelho, Ethan Melisano, Tyler Stevens, Quadarrius McGinnis, Arthur Mpofu, and Anna Crutchfield. 2. Direct gym phone: (205) 824-8361. Email: info@spartanfitnessmma.com. 3. Programs: Brazilian Jiu-Jitsu (Gi and No-Gi), Muay Thai Kickboxing, Kids Martial Arts (Growing Gorillas), MMA Training, and Strength & Conditioning / Fitness Kickboxing. 4. Culture: Zero egos, safe, world-class SBG methodology suitable for complete beginners to professional fighters. Always welcome prospective students with warm enthusiasm, encourage them to book a free introductory class, and capture their name, desired martial art, and phone number. Never use markdown asterisks or bullet points.`,
    themeAccent: "#DC2626",
    themeHover: "#B91C1C",
    themeBorder: "#7F1D1D",
    themePulse: "#F87171",
    themeOnAccent: "#FFFFFF",
    allowedDomains: ["*"],
    isActive: true,
    trustBadges: [
      "Official SBG International Affiliate",
      "Authentic Black Belt Instruction",
      "Beginner-Friendly Ego-Free Gym",
      "State-of-the-Art Homewood Facility",
    ],
    leadership: [
      {
        name: "Chris Conolley",
        role: "Head Instructor & Founder",
        bio: "Founder of Spartan Fitness, pioneer of Brazilian Jiu-Jitsu in Alabama, and veteran martial arts coach who has trained champions and everyday beginners for over two decades.",
      },
    ],
    services: [
      {
        title: "Brazilian Jiu-Jitsu (BJJ - Gi & No-Gi)",
        category: "Ground Grappling",
        description: "World-class Brazilian Jiu-Jitsu instruction focused on leverage, joint locks, chokes, and defensive position control for self-defense and sport.",
        highlights: ["SBG fundamentals curriculum", "Ego-free sparring environment", "Gi and No-Gi daily sessions"],
        icon: "🥋",
      },
      {
        title: "Muay Thai Kickboxing",
        category: "Striking Arts",
        description: "High-energy eight-limb striking workouts incorporating punches, kicks, knees, elbows, and heavy bag combinations for elite cardio.",
        highlights: ["Authentic Thai pad drills", "High calorie expenditure", "Real-world striking power"],
        icon: "🥊",
      },
      {
        title: "Kids Martial Arts (Growing Gorillas)",
        category: "Youth Development",
        description: "Empowering children ages 4-13 with anti-bullying self-defense, emotional discipline, motor coordination, and lasting self-confidence.",
        highlights: ["Bully-prevention tactics", "Focus and school discipline", "Safe, positive coaching"],
        icon: "🦍",
      },
    ],
    serviceAreas: ["Homewood, AL", "Birmingham", "Vestavia Hills", "Mountain Brook", "Hoover"],
    reviews: [
      {
        name: "Brad M.",
        location: "Homewood, AL",
        time: "Verified Member",
        text: "Spartan Fitness is an incredible community. Chris Conolley and the coaching staff are welcoming to beginners while maintaining world-class instruction.",
        rating: 5,
      },
    ],
  },
  "6packmacros": {
    clientId: "6packmacros",
    businessName: "6 Pack Macros",
    phone: "(813) 657-3531",
    tollFree: "(312) 742-1858",
    address: "Online Coaching Headquarters, Tampa, FL",
    serviceCity: "Nationwide Online Coaching",
    tagline: "A Person, Not A Program 〰️ Personalized Nutrition & Training",
    subheadline: "Personal nutrition and training coaching from a coach you choose yourself. Weekly calls, daily texts, and a plan built around the food you actually eat.",
    trade: "Personalized Nutrition & 1-on-1 Fitness Coaching",
    systemPrompt: `You are the 24/7 AI Coaching & Consultation Assistant for 6 Pack Macros. Key facts: 1. Core Model: 1-on-1 personal nutrition and fitness coaching with 170+ certified trainers (ISSA, ACE, NASM). 2. What clients get: Weekly check-in call, daily text accountability, custom nutrition plan with exact macro breakdown and dining-out strategies, and personalized workout routine. 3. Choice of Two Diet Formats: (a) Precise plan with exact foods, gram weights, and meal timing, or (b) Flexible macro plan with coaching on how to eat favorite foods while hitting daily targets. 4. Pricing: $150/month (cancel anytime) or 3-month plan at $100/month ($300 billed quarterly, saving 33%). 5. Cancellation: Cancel anytime in 1 click from your account or by emailing support@6packmacros.com with zero phone calls required. 6. Leadership: Founded by Zack Monawar (President) and Neil Parsont (Partner, former educator/tutor). 7. Free Consultation: Offer prospective clients a free consultation with a coach who fits their lifestyle (parents, busy executives, athletes, over 40). Speak warmly, honestly, and without judgment. Capture their name, fitness goals, and email or phone number for coach matching. Never use markdown asterisks or bullet points.`,
    themeAccent: "#B8541C",
    themeHover: "#9A4514",
    themeBorder: "#17436A",
    themePulse: "#B8541C",
    themeOnAccent: "#FFFFFF",
    allowedDomains: ["*"],
    isActive: true,
    trustBadges: [
      "170+ Certified Coaches (ISSA, ACE, NASM)",
      "Choose Your Own Named Coach",
      "Weekly Call & Daily Text Accountability",
      "Flexible Macros or Prescriptive Plan",
      "1-Click Cancellation (No Phone Calls)",
    ],
    leadership: [
      {
        name: "Zack Monawar",
        role: "President & Co-Founder",
        bio: "Struggled with weight since childhood before discovering sustainable macro balance. Now leading a network of 170+ certified coaches.",
      },
      {
        name: "Neil Parsont",
        role: "Partner & Co-Founder",
        bio: "Former tutoring company founder bringing clear, simple, step-by-step educational systems to nutrition and training.",
      },
      {
        name: "Hillary Bleiker",
        role: "Senior Coach (ISSA Certified)",
        bio: "Specializing in flexible macro coaching and sustainable body composition for busy parents and working professionals.",
      },
    ],
    services: [
      {
        title: "Personalized Nutrition & Macro Blueprint",
        category: "Custom Nutrition",
        description: "Exact protein, carb, and fat targets calculated for your metabolic rate, favorite foods, and dining out preferences.",
        highlights: ["Calculated for your exact metabolism", "Eat foods you actually enjoy", "Zero starvation or crash dieting"],
        icon: "🥗",
      },
      {
        title: "Custom Workout Programming",
        category: "Training Routine",
        description: "Tailored resistance and cardio routines built around your available equipment (full gym, home dumbbells, or bodyweight) and weekly schedule.",
        highlights: ["Designed for busy schedules", "Gym or home gym workouts", "Progressive overload tracking"],
        icon: "🏋️",
      },
      {
        title: "Weekly Call & Daily Text Accountability",
        category: "Human Connection",
        description: "A weekly one-on-one call and daily text check-ins with your chosen coach to adjust your numbers when your week changes.",
        highlights: ["Weekly private check-in call", "Daily motivational text support", "Continuous plan adjustments"],
        icon: "📱",
      },
      {
        title: "Two Distinct Diet Formats",
        category: "Flexible vs Precise",
        description: "Choose between a precise list of exact foods and meal timing, or a flexible macro target plan with coaching on how to hit goals eating out.",
        highlights: ["Precise plan: zero decision fatigue", "Flexible plan: freedom to eat favorites", "Switch formats anytime"],
        icon: "⚖️",
      },
      {
        title: "Free Ungated Macro Calculator",
        category: "Free Tool",
        description: "Instant calorie and macronutrient calculation with zero email walls, paired with honest coach insights on what numbers don't tell you.",
        highlights: ["Zero email or contact gate", "Instant on-screen numbers", "Realistic starting baseline"],
        icon: "🧮",
      },
    ],
    serviceAreas: ["Nationwide Online Coaching", "United States", "Canada", "Global Online"],
    reviews: [
      {
        name: "Margo Clay",
        location: "Wife & Mother (Coached by Hillary)",
        time: "Verified Client",
        text: "I learned to nourish my body and build strength without sacrificing the things I love. It gave me freedom and balance instead of feeling like a diet.",
        rating: 5,
      },
      {
        name: "Matt Doyle",
        location: "Coached by Zack & Neil",
        time: "Verified Client",
        text: "Always the fat kid growing up. Working with Zack and Neil taught me that you do not have to starve yourself to get lean and stay in shape.",
        rating: 5,
      },
      {
        name: "Dalton DiNatale",
        location: "Former Pro Baseball Player (Coached by Zack)",
        time: "Verified Client",
        text: "Thought I knew everything about training and dieting. Zack gave me the exact nutrition blueprint I was missing and broke through my plateau in 3 months.",
        rating: 5,
      },
    ],
  },
  "6-pack-macros": {
    clientId: "6-pack-macros",
    businessName: "6 Pack Macros",
    phone: "(813) 657-3531",
    tollFree: "(312) 742-1858",
    address: "Online Coaching Headquarters, Tampa, FL",
    serviceCity: "Nationwide Online Coaching",
    tagline: "A Person, Not A Program 〰️ Personalized Nutrition & Training",
    subheadline: "Personal nutrition and training coaching from a coach you choose yourself. Weekly calls, daily texts, and a plan built around the food you actually eat.",
    trade: "Personalized Nutrition & 1-on-1 Fitness Coaching",
    systemPrompt: `You are the 24/7 AI Coaching & Consultation Assistant for 6 Pack Macros. Key facts: 1. Core Model: 1-on-1 personal nutrition and fitness coaching with 170+ certified trainers (ISSA, ACE, NASM). 2. What clients get: Weekly check-in call, daily text accountability, custom nutrition plan with exact macro breakdown and dining-out strategies, and personalized workout routine. 3. Choice of Two Diet Formats: (a) Precise plan with exact foods, gram weights, and meal timing, or (b) Flexible macro plan with coaching on how to eat favorite foods while hitting daily targets. 4. Pricing: $150/month (cancel anytime) or 3-month plan at $100/month ($300 billed quarterly, saving 33%). 5. Cancellation: Cancel anytime in 1 click from your account or by emailing support@6packmacros.com with zero phone calls required. 6. Leadership: Founded by Zack Monawar (President) and Neil Parsont (Partner, former educator/tutor). 7. Free Consultation: Offer prospective clients a free consultation with a coach who fits their lifestyle (parents, busy executives, athletes, over 40). Speak warmly, honestly, and without judgment. Capture their name, fitness goals, and email or phone number for coach matching. Never use markdown asterisks or bullet points.`,
    themeAccent: "#B8541C",
    themeHover: "#9A4514",
    themeBorder: "#17436A",
    themePulse: "#B8541C",
    themeOnAccent: "#FFFFFF",
    allowedDomains: ["*"],
    isActive: true,
    trustBadges: [
      "170+ Certified Coaches (ISSA, ACE, NASM)",
      "Choose Your Own Named Coach",
      "Weekly Call & Daily Text Accountability",
      "Flexible Macros or Prescriptive Plan",
      "1-Click Cancellation (No Phone Calls)",
    ],
    leadership: [
      {
        name: "Zack Monawar",
        role: "President & Co-Founder",
        bio: "Struggled with weight since childhood before discovering sustainable macro balance. Now leading a network of 170+ certified coaches.",
      },
      {
        name: "Neil Parsont",
        role: "Partner & Co-Founder",
        bio: "Former tutoring company founder bringing clear, simple, step-by-step educational systems to nutrition and training.",
      },
    ],
    services: [
      {
        title: "Personalized Nutrition & Macro Blueprint",
        category: "Custom Nutrition",
        description: "Exact protein, carb, and fat targets calculated for your metabolic rate, favorite foods, and dining out preferences.",
        highlights: ["Calculated for your exact metabolism", "Eat foods you actually enjoy", "Zero starvation or crash dieting"],
        icon: "🥗",
      },
      {
        title: "Custom Workout Programming",
        category: "Training Routine",
        description: "Tailored resistance and cardio routines built around your available equipment (full gym, home dumbbells, or bodyweight) and weekly schedule.",
        highlights: ["Designed for busy schedules", "Gym or home gym workouts", "Progressive overload tracking"],
        icon: "🏋️",
      },
    ],
    serviceAreas: ["Nationwide Online Coaching", "United States", "Canada"],
    reviews: [
      {
        name: "Margo Clay",
        location: "Wife & Mother (Coached by Hillary)",
        time: "Verified Client",
        text: "I learned to nourish my body and build strength without sacrificing the things I love. It gave me freedom and balance instead of feeling like a diet.",
        rating: 5,
      },
    ],
  },
  "gravl": {
    clientId: "gravl",
    businessName: "Gravl AI (Smart Strength & Macros)",
    phone: "(800) 555-GRAVL",
    tollFree: "(800) 555-GRAVL",
    address: "Gravl Technologies Inc., San Francisco, CA",
    serviceCity: "Global (iOS & Android App Store)",
    tagline: "The Gym App That Plans Every Workout For You",
    subheadline: "Automatic progressive overload dialed by AI and backed by real strength coaches. Zero spreadsheets, zero guesswork, 50K+ 5-star ratings.",
    trade: "AI Strength Training & Automatic Progressive Overload App",
    systemPrompt: `You are the 24/7 AI Training & Product Specialist for Gravl (Gravl.ai). Key facts: 1. Core Product: Gravl is the intelligent strength training app that automatically calculates progressive overload, tracking every set and adjusting next week's weights without spreadsheets. 2. Gravl Macros: The frictionless calorie & macro tracker with 3-way food logging (camera AI photo recognition, voice dictation, barcode scanning). 3. Reputation: 50,000+ App Store ratings (4.9 / 5 stars), hit #1 in App Store fitness rankings, backed by certified exercise scientists. 4. Multilingual: Available in English, German, Spanish, French, Italian, Portuguese, Czech, and Polish. Always speak with cutting-edge tech precision, explain how Gravl eliminates gym decision fatigue, and guide users to start their free trial. Capture their training focus (strength, hypertrophy, fat loss) and email. Never use markdown asterisks or bullet points.`,
    themeAccent: "#84CC16",
    themeHover: "#65A30D",
    themeBorder: "#365314",
    themePulse: "#A3E635",
    themeOnAccent: "#09090B",
    allowedDomains: ["*"],
    isActive: true,
    trustBadges: [
      "#1 Ranked App Store Strength App",
      "50K+ 5-Star Reviews (4.9 Rating)",
      "Real Coach-Backed AI Algorithms",
      "Apple Health & Google Fit Sync",
    ],
    leadership: [
      {
        name: "Gravl Engineering & Sports Science Team",
        role: "AI & Exercise Physiology",
        bio: "Pioneering algorithmic resistance training, dynamic auto-regulation, and zero-friction 3-way macro logging for lifters worldwide.",
      },
    ],
    services: [
      {
        title: "Automatic Progressive Overload Engine",
        category: "AI Workout Planning",
        description: "Tracks every completed set, rep, and RPE, automatically prescribing optimal micro-increases in weight each week without manual calculations.",
        highlights: ["Automated weight and rep adjustments", "Fatigue auto-regulation", "Zero spreadsheet logging"],
        icon: "⚡",
      },
      {
        title: "Gravl Macros: Zero-Math Food Logging",
        category: "Nutrition Intelligence",
        description: "Log any meal in under 5 seconds using advanced computer vision AI photo scanning, natural voice dictation, or instant barcode lookup.",
        highlights: ["AI photo meal recognition", "Natural voice food dictation", "Precise macro nutrient breakdown"],
        icon: "📸",
      },
      {
        title: "Dynamic Gym Equipment Adaptation",
        category: "Smart Exercise Substitution",
        description: "Instantly substitute exercises on the fly based on busy gym equipment, physical limitations, or home dumbbell setups while maintaining target volume.",
        highlights: ["1-tap smart exercise swapping", "Equally effective biomechanical curves", "Never wait on crowded machines"],
        icon: "🔄",
      },
      {
        title: "Science-Backed Periodization Blocks",
        category: "Hypertrophy & Strength",
        description: "Structured multi-week mesocycles designed to systematically build muscle, maximize peak strength, and schedule deloads before injury strikes.",
        highlights: ["Periodized hypertrophy blocks", "Strategic deload scheduling", "Comprehensive volume landmarks"],
        icon: "📊",
      },
    ],
    serviceAreas: [
      "Global App Store (iOS & Android)",
      "United States",
      "United Kingdom",
      "Germany",
      "France",
      "Spain",
      "Italy",
      "Australia",
    ],
    reviews: [
      {
        name: "Alex R.",
        location: "San Francisco, CA",
        time: "App Store Review",
        text: "Gravl completely eliminated gym decision fatigue. It calculates my exact working sets and micro-loads weights perfectly. Hit a new deadlift PR in 4 weeks.",
        rating: 5,
      },
      {
        name: "Sophie M.",
        location: "London, UK",
        time: "App Store Review",
        text: "The macro camera scanner and automatic progression algorithm make this 10x better than Fitbod or MyFitnessPal. Absolute game-changer.",
        rating: 5,
      },
    ],
  },
  "gravl-ai": {
    clientId: "gravl-ai",
    businessName: "Gravl AI (Smart Strength & Macros)",
    phone: "(800) 555-GRAVL",
    tollFree: "(800) 555-GRAVL",
    address: "Gravl Technologies Inc., San Francisco, CA",
    serviceCity: "Global (iOS & Android App Store)",
    tagline: "The Gym App That Plans Every Workout For You",
    subheadline: "Automatic progressive overload dialed by AI and backed by real strength coaches. Zero spreadsheets, zero guesswork, 50K+ 5-star ratings.",
    trade: "AI Strength Training & Automatic Progressive Overload App",
    systemPrompt: `You are the 24/7 AI Training & Product Specialist for Gravl (Gravl.ai). Key facts: 1. Core Product: Gravl is the intelligent strength training app that automatically calculates progressive overload, tracking every set and adjusting next week's weights without spreadsheets. 2. Gravl Macros: The frictionless calorie & macro tracker with 3-way food logging (camera AI photo recognition, voice dictation, barcode scanning). 3. Reputation: 50,000+ App Store ratings (4.9 / 5 stars), hit #1 in App Store fitness rankings, backed by certified exercise scientists. 4. Multilingual: Available in English, German, Spanish, French, Italian, Portuguese, Czech, and Polish. Always speak with cutting-edge tech precision, explain how Gravl eliminates gym decision fatigue, and guide users to start their free trial. Capture their training focus (strength, hypertrophy, fat loss) and email. Never use markdown asterisks or bullet points.`,
    themeAccent: "#84CC16",
    themeHover: "#65A30D",
    themeBorder: "#365314",
    themePulse: "#A3E635",
    themeOnAccent: "#09090B",
    allowedDomains: ["*"],
    isActive: true,
    trustBadges: [
      "#1 Ranked App Store Strength App",
      "50K+ 5-Star Reviews (4.9 Rating)",
      "Real Coach-Backed AI Algorithms",
      "Apple Health & Google Fit Sync",
    ],
    leadership: [
      {
        name: "Gravl Engineering & Sports Science Team",
        role: "AI & Exercise Physiology",
        bio: "Pioneering algorithmic resistance training, dynamic auto-regulation, and zero-friction 3-way macro logging for lifters worldwide.",
      },
    ],
    services: [
      {
        title: "Automatic Progressive Overload Engine",
        category: "AI Workout Planning",
        description: "Tracks every completed set, rep, and RPE, automatically prescribing optimal micro-increases in weight each week without manual calculations.",
        highlights: ["Automated weight and rep adjustments", "Fatigue auto-regulation", "Zero spreadsheet logging"],
        icon: "⚡",
      },
      {
        title: "Gravl Macros: Zero-Math Food Logging",
        category: "Nutrition Intelligence",
        description: "Log any meal in under 5 seconds using advanced computer vision AI photo scanning, natural voice dictation, or instant barcode lookup.",
        highlights: ["AI photo meal recognition", "Natural voice food dictation", "Precise macro nutrient breakdown"],
        icon: "📸",
      },
    ],
    serviceAreas: ["Global App Store", "United States", "Canada", "United Kingdom", "Europe"],
    reviews: [
      {
        name: "Alex R.",
        location: "San Francisco, CA",
        time: "App Store Review",
        text: "Gravl completely eliminated gym decision fatigue. It calculates my exact working sets and micro-loads weights perfectly.",
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
