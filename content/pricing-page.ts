/**
 * Single source of editable copy for the standalone Pricing page (/pricing).
 * Sourced directly from pricing-page.md.
 */

export interface PricingTier {
  id: string;
  name: string;
  originalPrice: string;
  price: string;
  period: string;
  buildFee: string;
  trial: string;
  status: "Available now" | "Launching soon";
  badgeColor: "emerald" | "stone";
  headline: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  productLinkText: string;
  productHref: string;
  popular?: boolean;
}

export const pricingPage = {
  metaTitle: "Pricing — Conversion Chat & Conversion Desk | Alizane Labs",
  metaDescription:
    "Transparent pricing for Alizane Labs lead automation. Conversion Chat at $99/mo with 14 days free. Conversion Desk and Desk Pro launching soon.",

  hero: {
    eyebrow: "Transparent Pricing",
    title: "Pricing",
    subhead:
      "Three ways to add AI to how leads reach you. Start with chat on the site you have, or go further with a dedicated page built for your ad traffic.",
    bannerNotice:
      "Conversion Chat is live today with a 14-day free trial. Conversion Desk and Conversion Desk Pro are launching soon — join the early trial list to secure first access.",
  },

  tiers: [
    {
      id: "chat",
      name: "Conversion Chat",
      originalPrice: "$149",
      price: "$99",
      period: "/mo",
      buildFee: "None (Done for you)",
      trial: "14 days free",
      status: "Available now",
      badgeColor: "emerald",
      headline: "AI chat for your existing website",
      description:
        "One script tag in the corner of your site. Answers questions using your real business info, captures phone and email, and alerts you in seconds.",
      features: [
        "1 script tag on your current site — no rebuild",
        "24/7 instant answers to customer questions",
        "Phone and email capture from conversation",
        "Lead saved before alert dispatch",
        "Intent capture on non-converting visitors",
        "Monthly report emailed to you — no dashboard",
        "Custom branded to your website colours",
      ],
      ctaText: "Get Conversion Chat free for 14 days →",
      ctaHref: "/pricing?plan=chat#start",
      productLinkText: "See Conversion Chat details →",
      productHref: "/conversion-chat",
      popular: true,
    },
    {
      id: "desk",
      name: "Conversion Desk",
      originalPrice: "$299",
      price: "$199",
      period: "/mo",
      buildFee: "$997",
      trial: "—",
      status: "Launching soon",
      badgeColor: "stone",
      headline: "Dedicated ad landing page with per-ad tracking",
      description:
        "A dedicated phone-first page built specifically for your paid ad traffic. Every click-to-call and chat enquiry tracked back to its ad.",
      features: [
        "Everything in Conversion Chat",
        "Dedicated mobile-first landing page for ads",
        "Google Ads & Meta CAPI per-ad attribution",
        "GCLID and UTM keyword capture",
        "Unsubmitted inquiry triage and logging",
        "Instant email and push alert notifications",
        "Zero site migration or downtime required",
      ],
      ctaText: "Join the trial list →",
      ctaHref: "/pricing?plan=desk#start",
      productLinkText: "See Conversion Desk details →",
      productHref: "/product",
      popular: false,
    },
    {
      id: "pro",
      name: "Conversion Desk Pro",
      originalPrice: "$599",
      price: "$399",
      period: "/mo",
      buildFee: "$1,497",
      trial: "—",
      status: "Launching soon",
      badgeColor: "stone",
      headline: "Everything in Desk plus 24/7 AI phone answering",
      description:
        "The complete conversion backstop: ad landing page triage plus an AI receptionist answering missed calls 24/7 so no caller hits voicemail.",
      features: [
        "Everything in Conversion Desk",
        "24/7 AI phone answering on your existing number",
        "300 voice minutes included ($0.55/min overage)",
        "Instant emergency scope and caller qualification",
        "Direct lead details dispatch immediately after call",
        "Continuous engineer tuning and custom script updates",
      ],
      ctaText: "Join the trial list →",
      ctaHref: "/pricing?plan=pro#start",
      productLinkText: "See Conversion Desk details →",
      productHref: "/product",
      popular: false,
    },
  ] as PricingTier[],

  faqSection: {
    eyebrow: "Plain Answers",
    title: "A few pricing questions, answered plainly",
    questions: [
      {
        question: "Do the pre-launch tiers have a set launch date?",
        answer:
          "We don't have a rigid public calendar date. We are rolling out Conversion Desk to contractors from our early trial list in batches to ensure attribution, tracking, and telephony run with zero issues. Joining the trial list gives you first access when onboarding opens.",
      },
      {
        question: "What happens when I join the trial list?",
        answer:
          "We take down your business details and what ads you currently run. When your onboarding spot is ready, we reach out directly with your preview build before public signup opens.",
      },
      {
        question: "Can I start with Conversion Chat and move to Conversion Desk later?",
        answer:
          "Yes — Conversion Chat works on your existing site, and moving to Conversion Desk later doesn't require undoing anything, since Conversion Desk is a separate page, not a replacement for the widget itself.",
      },
      {
        question: "Are there any setup fees for Conversion Chat?",
        answer:
          "No setup fee. Setup is completely done for you during your 14-day free trial.",
      },
    ],
  },

  closingCta: {
    line: "Conversion Chat you can start today. Conversion Desk you can get in line for.",
    chatButton: "Get Conversion Chat free for 14 days →",
    chatHref: "/pricing?plan=chat#start",
    deskButton: "Join the Conversion Desk trial list →",
    deskHref: "/pricing?plan=desk#start",
  },
} as const;
