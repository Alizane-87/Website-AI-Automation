"use client";

import React, { useState } from "react";

interface FontItem {
  id: string;
  name: string;
  category: "Serif" | "Sans" | "Brutalist / Wide" | "Mono";
  foundry: string;
  license: "100% Free (Google / OFL)" | "100% Free (Fontshare)" | "Paid Commercial";
  price: string;
  cssFamily: string;
  defaultWeight: number;
  hasItalic?: boolean;
  badge: string;
  vibe: string;
  bestUse: string;
  purposes: string[];
}

const ALL_FONTS: FontItem[] = [
  // --- 1. Brutalist & Wide Displays ---
  {
    id: "F01",
    name: "Clash Display",
    category: "Brutalist / Wide",
    foundry: "Indian Type Foundry / Fontshare",
    license: "100% Free (Fontshare)",
    price: "$0 Free Commercial",
    cssFamily: "'Clash Display', sans-serif",
    defaultWeight: 700,
    badge: "⚡ Awwwards Gold Standard",
    vibe: "Bold, uncompromising brutalist luxury with high contrast and geometric edge.",
    bestUse: "High-ticket contractor flagship hero titles & modern agency storefronts.",
    purposes: ["Contractors", "Agency", "Hero Display", "Brutalist"],
  },
  {
    id: "F02",
    name: "Syne",
    category: "Brutalist / Wide",
    foundry: "Bonjour Monde / Lucas Descroix",
    license: "100% Free (Google / OFL)",
    price: "$0 (SIL OFL)",
    cssFamily: "'Syne', sans-serif",
    defaultWeight: 800,
    badge: "🎨 Avant-Garde Art Gallery",
    vibe: "Extreme, wild geometric contrast with exaggerated wide uppercase characters.",
    bestUse: "Luxury lifestyle brands, architecture monographs, and design portfolios.",
    purposes: ["Creative Agency", "Architecture", "Luxury", "Avant-Garde"],
  },
  {
    id: "F03",
    name: "Panchang",
    category: "Brutalist / Wide",
    foundry: "Indian Type Foundry / Fontshare",
    license: "100% Free (Fontshare)",
    price: "$0 Free Commercial",
    cssFamily: "'Panchang', sans-serif",
    defaultWeight: 800,
    badge: "💥 Ultra-Wide Power Header",
    vibe: "Massive horizontal width with heavy geometric confidence that commands the screen.",
    bestUse: "Heavy industrial power headers, construction, and high-impact hero statements.",
    purposes: ["Contractors", "Heavy Trades", "Industrial", "Power Headers"],
  },
  {
    id: "F04",
    name: "Unbounded",
    category: "Brutalist / Wide",
    foundry: "Studio Feixen / NaN",
    license: "100% Free (Google / OFL)",
    price: "$0 (SIL OFL)",
    cssFamily: "'Unbounded', sans-serif",
    defaultWeight: 800,
    badge: "🚀 Space-Age Techno Display",
    vibe: "Ultra-wide futuristic techno display with distinctive circular counters and digital DNA.",
    bestUse: "Autonomous AI platforms, high-speed edge telemetry, and Web3 infrastructure.",
    purposes: ["AI Tech", "SaaS", "Telemetry", "Futuristic"],
  },
  {
    id: "F05",
    name: "Tanker",
    category: "Brutalist / Wide",
    foundry: "Indian Type Foundry / Fontshare",
    license: "100% Free (Fontshare)",
    price: "$0 Free Commercial",
    cssFamily: "'Tanker', sans-serif",
    defaultWeight: 400,
    badge: "🔨 Heavy Machinery All-Caps",
    vibe: "Massive solid industrial block display with unapologetic physical presence.",
    bestUse: "Commercial roofing, excavation, industrial demolition, and heavy equipment.",
    purposes: ["Heavy Trades", "Contractors", "Roofing", "Industrial"],
  },
  {
    id: "F06",
    name: "Array",
    category: "Brutalist / Wide",
    foundry: "Indian Type Foundry / Fontshare",
    license: "100% Free (Fontshare)",
    price: "$0 Free Commercial",
    cssFamily: "'Array', sans-serif",
    defaultWeight: 700,
    badge: "🤖 Robotic Space Modular",
    vibe: "Wide geometric modular display typeface with tech stencil incisions.",
    bestUse: "Robotics hardware, autonomous vehicle fleets, and security command matrices.",
    purposes: ["AI Tech", "Security", "Hardware", "Robotics"],
  },
  {
    id: "F07",
    name: "Stardom",
    category: "Brutalist / Wide",
    foundry: "Indian Type Foundry / Fontshare",
    license: "100% Free (Fontshare)",
    price: "$0 Free Commercial",
    cssFamily: "'Stardom', sans-serif",
    defaultWeight: 700,
    badge: "🍸 Retro-Futuristic Luxury",
    vibe: "Circular retro-futuristic geometry with theatrical luxury flair.",
    bestUse: "High-end nightlife, experimental creative consultancies, and fashion events.",
    purposes: ["Luxury", "Hospitality", "Nightlife", "Creative"],
  },

  // --- 2. Modernist & Swiss Sans ---
  {
    id: "F08",
    name: "Outfit",
    category: "Sans",
    foundry: "Onsen Studio (Google Fonts)",
    license: "100% Free (Google / OFL)",
    price: "$0 (SIL OFL)",
    cssFamily: "'Outfit', sans-serif",
    defaultWeight: 700,
    badge: "🎯 Multipurpose Brand Sans",
    vibe: "Pristine geometric clarity with balanced letterforms and exceptional friendliness.",
    bestUse: "All-purpose contractor storefronts, modern funnels, and high-conversion SaaS.",
    purposes: ["Multipurpose", "Contractors", "SaaS", "Booking Funnels"],
  },
  {
    id: "F09",
    name: "Manrope",
    category: "Sans",
    foundry: "Mikhail Sharanda (Google Fonts)",
    license: "100% Free (Google / OFL)",
    price: "$0 (SIL OFL)",
    cssFamily: "'Manrope', sans-serif",
    defaultWeight: 700,
    badge: "💳 Fintech & Modern UI Standard",
    vibe: "Semi-geometric modern sans with open aperture and pixel-perfect screen rhythm.",
    bestUse: "Fintech platforms, high-converting checkout flows, and complex dashboard apps.",
    purposes: ["Fintech", "SaaS", "Dashboard UI", "Multipurpose"],
  },
  {
    id: "F10",
    name: "Switzer",
    category: "Sans",
    foundry: "Indian Type Foundry / Fontshare",
    license: "100% Free (Fontshare)",
    price: "$0 Free Commercial",
    cssFamily: "'Switzer', sans-serif",
    defaultWeight: 700,
    badge: "🇨🇭 Pure Swiss Neo-Grotesque",
    vibe: "Flawless neutral Swiss typography with tight kerning (ultimate Helvetica replacement).",
    bestUse: "Editorial layouts, clean contractor service lists, and pristine Bento grids.",
    purposes: ["Multipurpose", "Swiss UI", "Contractors", "Bento Grids"],
  },
  {
    id: "F11",
    name: "Chillax",
    category: "Sans",
    foundry: "Indian Type Foundry / Fontshare",
    license: "100% Free (Fontshare)",
    price: "$0 Free Commercial",
    cssFamily: "'Chillax', sans-serif",
    defaultWeight: 600,
    badge: "✨ Luxury Minimalist Sans",
    vibe: "Ultra-clean geometric luxury with sophisticated curves and generous breathing room.",
    bestUse: "Boutique hotels, luxury service retainers, and high-end design consultancies.",
    purposes: ["Luxury", "Hospitality", "Interior Design", "Agency"],
  },
  {
    id: "F12",
    name: "Cabinet Grotesk",
    category: "Sans",
    foundry: "Indian Type Foundry / Fontshare",
    license: "100% Free (Fontshare)",
    price: "$0 Free Commercial",
    cssFamily: "'Cabinet Grotesk', sans-serif",
    defaultWeight: 800,
    badge: "🏗️ Heavy Industrial Swiss",
    vibe: "Compressed proportions, heavy vertical weight, and immense industrial swagger.",
    bestUse: "HVAC, commercial electrical, roofing, and bold contractor brand identities.",
    purposes: ["Contractors", "HVAC", "Roofing", "Heavy Trades"],
  },
  {
    id: "F13",
    name: "Bricolage Grotesque",
    category: "Sans",
    foundry: "Mathieu Triay (Google Fonts)",
    license: "100% Free (Google / OFL)",
    price: "$0 (SIL OFL)",
    cssFamily: "'Bricolage Grotesque', sans-serif",
    defaultWeight: 700,
    badge: "🇫🇷 Franco-British Vintage Modern",
    vibe: "Quirky, historical grotesque with exaggerated optical personality and vintage charm.",
    bestUse: "Creative studio agency manifestos, punchy editorial callouts, and product showcases.",
    purposes: ["Creative Agency", "Editorial", "Manifestos", "Product"],
  },
  {
    id: "F14",
    name: "Satoshi",
    category: "Sans",
    foundry: "Indian Type Foundry / Fontshare",
    license: "100% Free (Fontshare)",
    price: "$0 Free Commercial",
    cssFamily: "'Satoshi', sans-serif",
    defaultWeight: 700,
    badge: "⚡ Modernist Startup Clarity",
    vibe: "Precision geometric neo-grotesque with striking legibility across all screen densities.",
    bestUse: "High-growth tech startups, clean Bento grids, and sleek commercial service sites.",
    purposes: ["SaaS", "Startups", "Bento Grids", "Multipurpose"],
  },
  {
    id: "F15",
    name: "Urbanist",
    category: "Sans",
    foundry: "Corey Hu (Google Fonts)",
    license: "100% Free (Google / OFL)",
    price: "$0 (SIL OFL)",
    cssFamily: "'Urbanist', sans-serif",
    defaultWeight: 700,
    hasItalic: true,
    badge: "🏙️ Modernist Architectural Sans",
    vibe: "Geometric neo-grotesque inspired by modernist architecture and clean urban horizons.",
    bestUse: "Luxury real estate development, architectural firms, and minimalist portfolios.",
    purposes: ["Real Estate", "Architecture", "Luxury", "Portfolios"],
  },
  {
    id: "F16",
    name: "Epilogue",
    category: "Sans",
    foundry: "Tyler Finck / Etcetera Type (Google Fonts)",
    license: "100% Free (Google / OFL)",
    price: "$0 (SIL OFL)",
    cssFamily: "'Epilogue', sans-serif",
    defaultWeight: 800,
    hasItalic: true,
    badge: "📢 Bold Marketing Power Sans",
    vibe: "Variable neo-grotesque sans with high personality, clean weights, and bold swagger.",
    bestUse: "High-impact conversion pages, brand launch headlines, and direct-response funnels.",
    purposes: ["Marketing", "Contractors", "Direct Response", "Headlines"],
  },
  {
    id: "F17",
    name: "Ranade",
    category: "Sans",
    foundry: "Indian Type Foundry / Fontshare",
    license: "100% Free (Fontshare)",
    price: "$0 Free Commercial",
    cssFamily: "'Ranade', sans-serif",
    defaultWeight: 600,
    badge: "💄 High-Contrast Fashion Sans",
    vibe: "High-contrast humanist display sans with sculpted terminals and haute-couture energy.",
    bestUse: "Luxury cosmetics, high-end fashion boutiques, and modern lifestyle magazines.",
    purposes: ["Fashion", "Cosmetics", "Luxury", "Editorial"],
  },
  {
    id: "F18",
    name: "Space Grotesk",
    category: "Sans",
    foundry: "Florian Karsten (Google Fonts)",
    license: "100% Free (Google / OFL)",
    price: "$0 (SIL OFL)",
    cssFamily: "'Space Grotesk', sans-serif",
    defaultWeight: 700,
    badge: "🛸 Tech-Brutalist Grotesque",
    vibe: "Derived from Space Mono but converted to a proportional sans with idiosyncratic quirks.",
    bestUse: "AI automation engines, cybersecurity enclaves, and futuristic engineering systems.",
    purposes: ["AI Tech", "Cybersecurity", "Engineering", "SaaS"],
  },
  {
    id: "F19",
    name: "Plus Jakarta Sans",
    category: "Sans",
    foundry: "Tokotype / Gumpita Rahayu",
    license: "100% Free (Google / OFL)",
    price: "$0 (SIL OFL)",
    cssFamily: "'Plus Jakarta Sans', sans-serif",
    defaultWeight: 700,
    badge: "🏢 Modern Humanist Enterprise",
    vibe: "Geometric warmth with modern open counters and exceptional balance.",
    bestUse: "Approachable enterprise tech, booking funnels, and high-conversion client apps.",
    purposes: ["Enterprise", "Booking Funnels", "Multipurpose", "SaaS"],
  },
  {
    id: "F20",
    name: "Telma",
    category: "Sans",
    foundry: "Indian Type Foundry / Fontshare",
    license: "100% Free (Fontshare)",
    price: "$0 Free Commercial",
    cssFamily: "'Telma', sans-serif",
    defaultWeight: 700,
    badge: "🎭 Expressive Cursive Energy",
    vibe: "Distinctive display typeface with pinched cursive energy and dramatic visual presence.",
    bestUse: "Unforgettable agency hero statements, festival websites, and creative studios.",
    purposes: ["Creative Agency", "Bespoke", "Display", "Festival"],
  },

  // --- 3. Haute-Couture & Luxury Editorial Serifs ---
  {
    id: "F21",
    name: "Bodoni Moda",
    category: "Serif",
    foundry: "Owen Earl (Google Fonts)",
    license: "100% Free (Google / OFL)",
    price: "$0 (SIL OFL)",
    cssFamily: "'Bodoni Moda', serif",
    defaultWeight: 800,
    hasItalic: true,
    badge: "👑 Haute-Couture Vogue Luxury",
    vibe: "Extreme Didone hairline contrast between razor-thin horizontal serifs and massive black stems.",
    bestUse: "Ultra-luxury flagships, high-end jewelry, prestige architecture, and Vogue aesthetics.",
    purposes: ["Luxury", "Fashion", "Jewelry", "High-Ticket"],
  },
  {
    id: "F22",
    name: "Instrument Serif",
    category: "Serif",
    foundry: "Instrument / Rodrigo Fuenzalida",
    license: "100% Free (Google / OFL)",
    price: "$0 (SIL OFL)",
    cssFamily: "'Instrument Serif', serif",
    defaultWeight: 400,
    hasItalic: true,
    badge: "🏛️ Stripe Press Renaissance",
    vibe: "Razor-sharp modern Renaissance serif with delicate bracketed curves and expressive italics.",
    bestUse: "High-ticket Alizane $4,500 flagship headers, executive manifestos, and book-style editorial.",
    purposes: ["Executive", "Luxury", "High-Ticket", "Manifestos"],
  },
  {
    id: "F23",
    name: "Newsreader",
    category: "Serif",
    foundry: "Production Type (Google Fonts)",
    license: "100% Free (Google / OFL)",
    price: "$0 (SIL OFL)",
    cssFamily: "'Newsreader', serif",
    defaultWeight: 600,
    hasItalic: true,
    badge: "📖 High-Fashion Book Editorial",
    vibe: "Continuous text serif with optical sizing, exceptional rhythm, and razor-sharp italics.",
    bestUse: "Long-form journalism, medical clinic prestige, and legal leadership publications.",
    purposes: ["Medical", "Legal", "Editorial", "Consulting"],
  },
  {
    id: "F24",
    name: "Italiana",
    category: "Serif",
    foundry: "Santiago Orozco (Google Fonts)",
    license: "100% Free (Google / OFL)",
    price: "$0 (SIL OFL)",
    cssFamily: "'Italiana', serif",
    defaultWeight: 400,
    badge: "🇮🇹 Italian Master Calligraphy",
    vibe: "Slender, graceful proportions inspired by the Italian calligraphy masters.",
    bestUse: "High-end luxury spas, boutique hotels, fine dining, and bespoke interior design.",
    purposes: ["Luxury Spa", "Hospitality", "Fine Dining", "Interior Design"],
  },
  {
    id: "F25",
    name: "Besley",
    category: "Serif",
    foundry: "Owen Earl / Indestructible Type",
    license: "100% Free (Google / OFL)",
    price: "$0 (SIL OFL)",
    cssFamily: "'Besley', serif",
    defaultWeight: 700,
    hasItalic: true,
    badge: "🪵 1845 Clarendon Slab Revival",
    vibe: "Revival of the first patented typeface (Clarendon). Rugged elegance with massive character.",
    bestUse: "Custom home builders, artisan furniture makers, distilleries, and heritage contractors.",
    purposes: ["Contractors", "Custom Builders", "Heritage", "Artisan"],
  },
  {
    id: "F26",
    name: "Cinzel Decorative",
    category: "Serif",
    foundry: "Natanael Gama (Google Fonts)",
    license: "100% Free (Google / OFL)",
    price: "$0 (SIL OFL)",
    cssFamily: "'Cinzel Decorative', serif",
    defaultWeight: 700,
    badge: "⚔️ Roman Imperial Royal Swashes",
    vibe: "First-century Roman inscriptional proportions adorned with flourish swash terminals.",
    bestUse: "Prestige law firms, elite wealth management, security vaults, and luxury crests.",
    purposes: ["Legal", "Wealth Management", "Security Enclaves", "Crests"],
  },
  {
    id: "F27",
    name: "Playfair Display SC",
    category: "Serif",
    foundry: "Claus Eggers Sørensen",
    license: "100% Free (Google / OFL)",
    price: "$0 (SIL OFL)",
    cssFamily: "'Playfair Display SC', serif",
    defaultWeight: 700,
    badge: "🏛️ Small Caps Stately Roman",
    vibe: "Small caps edition of Playfair with stately Roman proportions and high-fashion contrast.",
    bestUse: "Prestige sub-headings, legal seals, luxury certificates, and high-end hotel badges.",
    purposes: ["Legal", "Luxury Hospitality", "Badges", "Sub-Headings"],
  },
  {
    id: "F28",
    name: "Castoro Titling",
    category: "Serif",
    foundry: "Tiro Typeworks / John Hudson",
    license: "100% Free (Google / OFL)",
    price: "$0 (SIL OFL)",
    cssFamily: "'Castoro Titling', serif",
    defaultWeight: 400,
    badge: "🏛️ Aristocratic Titling Caps",
    vibe: "Sculpted Roman titling capitals engineered for monumental authority and permanence.",
    bestUse: "Private equity, high-net-worth wealth management, and heritage institutional brands.",
    purposes: ["Private Equity", "Wealth Management", "Finance", "Institutional"],
  },
  {
    id: "F29",
    name: "Prata",
    category: "Serif",
    foundry: "Cyreal (Google Fonts)",
    license: "100% Free (Google / OFL)",
    price: "$0 (SIL OFL)",
    cssFamily: "'Prata', serif",
    defaultWeight: 400,
    badge: "💧 Didone Teardrop Terminals",
    vibe: "Refined Didone with soft teardrop terminals and organic tear-drop counterforms.",
    bestUse: "Luxury beauty clinics, cosmetic surgeons, gourmet restaurants, and fashion lookbooks.",
    purposes: ["Medical Aesthetics", "Beauty", "Fine Dining", "Fashion"],
  },
  {
    id: "F30",
    name: "Sentient",
    category: "Serif",
    foundry: "Indian Type Foundry / Fontshare",
    license: "100% Free (Fontshare)",
    price: "$0 Free Commercial",
    cssFamily: "'Sentient', serif",
    defaultWeight: 500,
    badge: "🌿 Modern Organic Luxury Serif",
    vibe: "Contemporary humanist serif with organic warmth, generous proportions, and timeless grace.",
    bestUse: "High-ticket bespoke interior designers, luxury contractors, and sustainability brands.",
    purposes: ["Interior Design", "Contractors", "Sustainability", "Luxury"],
  },
  {
    id: "F31",
    name: "Zodiak",
    category: "Serif",
    foundry: "Indian Type Foundry / Fontshare",
    license: "100% Free (Fontshare)",
    price: "$0 Free Commercial",
    cssFamily: "'Zodiak', serif",
    defaultWeight: 700,
    badge: "☕ Chunky Modernist Display Serif",
    vibe: "Chunky transitional display serif with thick block serifs and modern razor cuts.",
    bestUse: "Specialty coffee roasters, lifestyle magazines, packaging, and trendy hospitality.",
    purposes: ["Hospitality", "Lifestyle", "Packaging", "Artisan"],
  },
  {
    id: "F32",
    name: "Fraunces",
    category: "Serif",
    foundry: "Undercase Type (Google Fonts)",
    license: "100% Free (Google / OFL)",
    price: "$0 (SIL OFL)",
    cssFamily: "'Fraunces', serif",
    defaultWeight: 700,
    hasItalic: true,
    badge: "🍷 Wonky Vintage Soft-Serif",
    vibe: "Inspired by early 20th-century packaging with soft voluptuous serifs and organic charisma.",
    bestUse: "Luxury food & beverage, artisan distilleries, and bespoke craftsman websites.",
    purposes: ["Artisan", "Food & Beverage", "Craftsman", "Packaging"],
  },
  {
    id: "F33",
    name: "DM Serif Display",
    category: "Serif",
    foundry: "Colophon / Frank Grießhammer",
    license: "100% Free (Google / OFL)",
    price: "$0 (SIL OFL)",
    cssFamily: "'DM Serif Display', serif",
    defaultWeight: 400,
    hasItalic: true,
    badge: "📰 Authoritative High-Contrast Editorial",
    vibe: "High-contrast transitional display serif designed for powerful, commanding editorial headlines.",
    bestUse: "Executive leadership interviews, thought-leadership journals, and premium media builds.",
    purposes: ["Executive", "Media", "Editorial", "Interviews"],
  },
  {
    id: "F34",
    name: "Cormorant Garamond",
    category: "Serif",
    foundry: "Christian Thalmann (Google Fonts)",
    license: "100% Free (Google / OFL)",
    price: "$0 (SIL OFL)",
    cssFamily: "'Cormorant Garamond', serif",
    defaultWeight: 600,
    hasItalic: true,
    badge: "📜 Classical Royal Calligraphy",
    vibe: "Delicate 16th-century Garamond revival with razor-thin serifs and exquisite calligraphic rhythm.",
    bestUse: "Fine art galleries, luxury heritage estates, and classical architecture portfolios.",
    purposes: ["Fine Art", "Heritage", "Architecture", "Luxury"],
  },

  // --- 4. High-Tech Precision Monospaces ---
  {
    id: "F35",
    name: "Fragment Mono",
    category: "Mono",
    foundry: "Production Type (Google Fonts)",
    license: "100% Free (Google / OFL)",
    price: "$0 (SIL OFL)",
    cssFamily: "'Fragment Mono', monospace",
    defaultWeight: 400,
    hasItalic: true,
    badge: "📐 Swiss Code Mono Revival",
    vibe: "Helvetica monospaced revival with architectural symmetry and Swiss rationalism.",
    bestUse: "Developer documentation, pricing calculators, latency metrics, and API payloads.",
    purposes: ["Developer Tools", "Pricing Math", "Telemetry", "Swiss UI"],
  },
  {
    id: "F36",
    name: "Red Hat Mono",
    category: "Mono",
    foundry: "MCKL / Red Hat (Google Fonts)",
    license: "100% Free (Google / OFL)",
    price: "$0 (SIL OFL)",
    cssFamily: "'Red Hat Mono', monospace",
    defaultWeight: 600,
    hasItalic: true,
    badge: "🐧 Enterprise Linux Terminal Mono",
    vibe: "Clean, open, human-readable terminal monospace engineered for enterprise infrastructure.",
    bestUse: "Server logs, Kubernetes dashboards, operational status pages, and system health badges.",
    purposes: ["Enterprise", "Server Logs", "DevOps", "Infrastructure"],
  },
  {
    id: "F37",
    name: "Syne Mono",
    category: "Mono",
    foundry: "Bonjour Monde (Google Fonts)",
    license: "100% Free (Google / OFL)",
    price: "$0 (SIL OFL)",
    cssFamily: "'Syne Mono', monospace",
    defaultWeight: 400,
    badge: "⚡ Quirky Mechanical Hybrid Mono",
    vibe: "Quirky handwritten/mechanical hybrid monospace with rebellious creative personality.",
    bestUse: "Indie hacker tools, creative code experiments, and unconventional tech badges.",
    purposes: ["Indie Hacker", "Creative Code", "Badges", "Experimental"],
  },
  {
    id: "F38",
    name: "JetBrains Mono",
    category: "Mono",
    foundry: "JetBrains (Google Fonts)",
    license: "100% Free (Google / OFL)",
    price: "$0 (SIL OFL)",
    cssFamily: "'JetBrains Mono', monospace",
    defaultWeight: 600,
    hasItalic: true,
    badge: "💻 Developer Code Supremacy",
    vibe: "Engineered specifically for developers with expanded lowercase height and crystal-clear shapes.",
    bestUse: "Interactive API consoles, live telemetry logs, and developer documentation hubs.",
    purposes: ["Developer Tools", "Code Snippets", "Telemetry", "SaaS"],
  },
  {
    id: "F39",
    name: "Space Mono",
    category: "Mono",
    foundry: "Colophon Foundry (Google Fonts)",
    license: "100% Free (Google / OFL)",
    price: "$0 (SIL OFL)",
    cssFamily: "'Space Mono', monospace",
    defaultWeight: 700,
    hasItalic: true,
    badge: "🛰️ Space-Grade Typewriter Mono",
    vibe: "Geometric monospace combining 1960s space race headlines with brutalist mechanics.",
    bestUse: "System diagnostic readouts, latency pings, and hardware spec matrices.",
    purposes: ["Cybersecurity", "Hardware", "Telemetry", "Space Tech"],
  },
  {
    id: "F40",
    name: "Geist Mono",
    category: "Mono",
    foundry: "Vercel",
    license: "100% Free (Google / OFL)",
    price: "$0 (SIL OFL)",
    cssFamily: "var(--font-geist-mono), monospace",
    defaultWeight: 500,
    badge: "⚡ Edge Server Telemetry Standard",
    vibe: "Sculpted by Vercel for millisecond speed gauges and precision dashboard pills.",
    bestUse: "Core Web Vitals scores, sub-second speed audits, and Alizane telemetry tags.",
    purposes: ["Edge CDN", "Speed Gauges", "Alizane Core", "Telemetry"],
  },
];

export function FontSpecimenMatrix() {
  const [customText, setCustomText] = useState(
    "Websites engineered to close before the second ring."
  );
  const [fontSize, setFontSize] = useState(42);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [isItalic, setIsItalic] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<"All" | "Brutalist / Wide" | "Sans" | "Serif" | "Mono">("All");

  const filteredFonts = ALL_FONTS.filter((f) => {
    if (categoryFilter !== "All" && f.category !== categoryFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = f.name.toLowerCase().includes(q);
      const matchVibe = f.vibe.toLowerCase().includes(q);
      const matchUse = f.bestUse.toLowerCase().includes(q);
      const matchPurpose = f.purposes.some((p) => p.toLowerCase().includes(q));
      if (!matchName && !matchVibe && !matchUse && !matchPurpose) return false;
    }
    return true;
  });

  return (
    <div className="space-y-12 py-10 px-6 sm:px-16 max-w-6xl mx-auto text-[#F4F2EF]">
      {/* Studio Font Header */}
      <div className="text-center space-y-4 border-b border-white/10 pb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/80 px-4 py-1 text-xs font-mono text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Tab 05 · Master Multipurpose Typography Engine ({filteredFonts.length} of 40 Typefaces)</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-6xl text-white tracking-tight">
          The 40 World-Class Multipurpose Typefaces
        </h1>
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto font-sans leading-relaxed">
          Loaded live via Google Fonts &amp; Fontshare CDN. Filter by trade, luxury tier, tech stack, or brutalist width.
        </p>
      </div>

      {/* Interactive Controls & Search Bar */}
      <div className="rounded-3xl border border-white/15 bg-black/90 p-6 shadow-2xl space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-8 space-y-2">
            <label className="font-mono text-xs text-emerald-400 flex items-center justify-between">
              <span>LIVE EDITABLE SPECIMEN TEXT:</span>
              <span className="text-gray-500">Type any headline to test live rendering</span>
            </label>
            <input
              type="text"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              placeholder="Type custom headline or copy..."
              className="w-full rounded-xl border border-white/20 bg-white/5 p-4 text-white placeholder-gray-500 outline-none focus:border-emerald-500 transition-colors text-base sm:text-xl font-medium"
            />
          </div>

          <div className="md:col-span-4 space-y-2">
            <label className="font-mono text-xs text-gray-400">SEARCH BY PURPOSE OR KEYWORD:</label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="e.g. Contractor, Luxury, Roofing, AI, Legal..."
              className="w-full rounded-xl border border-white/20 bg-[#161B22] p-4 text-white placeholder-gray-500 outline-none focus:border-emerald-500 transition-colors text-xs sm:text-sm font-mono"
            />
          </div>
        </div>

        {/* Sliders and Quick Toggles */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 pt-2 items-center">
          {/* Size */}
          <div className="space-y-1">
            <div className="flex justify-between font-mono text-xs text-gray-400">
              <span>SIZE: {fontSize}px</span>
            </div>
            <input
              type="range"
              min={20}
              max={84}
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
          </div>

          {/* Tracking */}
          <div className="space-y-1">
            <div className="flex justify-between font-mono text-xs text-gray-400">
              <span>TRACKING: {letterSpacing}px</span>
            </div>
            <input
              type="range"
              min={-2}
              max={12}
              value={letterSpacing}
              onChange={(e) => setLetterSpacing(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
          </div>

          {/* Style Toggle */}
          <div className="space-y-1">
            <div className="font-mono text-xs text-gray-400">STYLE TOGGLE</div>
            <button
              onClick={() => setIsItalic(!isItalic)}
              className={`w-full rounded-lg py-2 font-mono text-xs transition-all cursor-pointer border ${
                isItalic
                  ? "bg-emerald-500 text-black font-bold border-emerald-400"
                  : "bg-white/5 text-gray-400 border-white/10 hover:text-white"
              }`}
            >
              {isItalic ? "✓ ITALIC ENABLED" : "ITALIC DISABLED"}
            </button>
          </div>

          {/* Category Filter */}
          <div className="space-y-1">
            <div className="font-mono text-xs text-gray-400">CATEGORY</div>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value as any)}
              className="w-full rounded-lg border border-white/20 bg-[#161B22] py-2 px-3 font-mono text-xs text-white outline-none cursor-pointer"
            >
              <option value="All">All Categories (40)</option>
              <option value="Brutalist / Wide">Brutalist &amp; Wide Displays (7)</option>
              <option value="Sans">Modernist Neo-Grotesques (13)</option>
              <option value="Serif">Haute-Couture &amp; Luxury Serifs (14)</option>
              <option value="Mono">High-Tech Precision Monospaces (6)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Font Specimen Cards */}
      <div className="space-y-10">
        {filteredFonts.map((font) => (
          <div
            key={font.id}
            className="rounded-3xl border border-white/15 bg-[#0A0D12] p-8 shadow-2xl space-y-6 hover:border-emerald-500/50 transition-all group"
          >
            {/* Card Header & Metadata */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs text-emerald-400 font-bold">{font.id}</span>
                  <h3 className="font-bold text-2xl text-white tracking-tight">{font.name}</h3>
                  <span className="rounded-md bg-emerald-950/80 px-2.5 py-0.5 font-mono text-[11px] text-emerald-300 border border-emerald-500/30">
                    {font.badge}
                  </span>
                </div>
                <div className="font-mono text-xs text-gray-400">Foundry: {font.foundry}</div>
              </div>

              {/* License Tag */}
              <div className="flex flex-col sm:items-end">
                <span className="inline-block rounded-full bg-black/60 px-3.5 py-1 font-mono text-xs font-semibold text-emerald-300 border border-emerald-500/40 shadow-sm">
                  {font.license}
                </span>
                <span className="font-mono text-[10px] text-gray-500 mt-1">{font.price}</span>
              </div>
            </div>

            {/* Live Typography Specimen Rendering */}
            <div className="py-6 overflow-x-auto">
              <div
                style={{
                  fontFamily: font.cssFamily,
                  fontSize: `${fontSize}px`,
                  fontWeight: font.defaultWeight,
                  fontStyle: isItalic ? "italic" : "normal",
                  letterSpacing: `${letterSpacing}px`,
                  lineHeight: 1.1,
                }}
                className="text-white tracking-tight break-words transition-all group-hover:text-emerald-100"
              >
                {customText || font.name}
              </div>
            </div>

            {/* Specimen Vibe & Use Case Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-2xl bg-white/5 p-4 font-mono text-xs">
              <div>
                <span className="text-gray-400">DESIGN VIBE: </span>
                <span className="text-gray-200">{font.vibe}</span>
              </div>
              <div>
                <span className="text-emerald-400">BEST USE CASE: </span>
                <span className="text-gray-200">{font.bestUse}</span>
              </div>
              <div>
                <span className="text-gray-400">PURPOSE TAGS: </span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {font.purposes.map((p, pIdx) => (
                    <span
                      key={pIdx}
                      className="rounded bg-white/10 px-2 py-0.5 text-[10px] text-emerald-300"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
