/**
 * Single source of editable copy for the Conversion Desk product page (/product).
 * Sourced directly from conversion-desk-product-page.md and supporting-copy.md.
 */

export const productPage = {
  metaTitle: "Conversion Desk — Turn Ad Clicks Into Answered Leads | Alizane Labs",
  metaDescription:
    "Conversion Desk is an AI chatbot landing page for your paid ads — tracking every conversion and answering every enquiry instantly, so nothing you paid for goes unnoticed.",

  hero: {
    eyebrow: "The Product",
    title: "Conversion Desk",
    subhead: "The one page your ad traffic should land on — not your homepage.",
    body: "Conversion Desk is a single page, built for a phone, that you send paid ad traffic to instead of your homepage. There's a button to call, and a conversation already open — an AI system trained on your business answers instantly, right there. Whoever lands here gets an answer or picks up the phone, on the spot. Nobody gets sent looking for anything else.",
    ctaPrimary: "Try our Conversion Desk →",
    ctaPrimaryHref: "https://go.alizanelabs.site",
    ctaSecondary: "See pricing tiers →",
    ctaSecondaryHref: "/pricing",
  },

  costOfNotHavingIt: {
    eyebrow: "The Bottleneck",
    title: "You already paid for that click.",
    paragraphs: [
      "Right now, every one of those ad clicks costs you money whether or not it converts. It lands on your homepage. The visitor has to find the right page, find a phone number, and decide to call — usually during business hours, usually while they're doing something else entirely. Most don't. Nothing is tracking what happened to them, so you never even find out they were there.",
      "It's worse outside business hours. Someone needs exactly what you offer at 9pm on a Sunday. They search, click your ad, land on your homepage — and there's nothing there that answers back. They go to the next result instead, and that one answers. You paid for the click. They got the customer. You'll never know it happened.",
      "And if you're running more than one ad, or more than one platform, there's no way to tell which one is actually earning its keep — just a total spend number and a guess about which campaign \"feels\" like it's working.",
    ],
  },

  whatItDoes: {
    eyebrow: "Capabilities",
    title: "Built to capture, qualify, and attribute every inquiry.",
    items: [
      "An AI system answers every enquiry instantly, any hour — nights, weekends, all of it",
      "Pulls the name, phone, and email straight out of the conversation automatically",
      "Alerts you within seconds of a lead arriving",
      "Tracks every conversion the moment it happens, saved before any alert goes out — so nothing gets lost",
      "You'll know which ad, campaign, and platform brought each enquiry — not just that someone reached out",
      "You'll know about the ones who ask something and leave without giving their details, too — most systems never catch those at all",
      "Answers using your actual services and your actual business, not a generic script",
      "Set up specifically for you — your wording, your questions, your branding",
      "One page, built for a phone, nothing to install on the site you already have",
    ],
    closingCallout:
      "Most tools can tell you someone showed up. Very few can tell you which ad brought them, or that people asked about a service and left before giving their name — most systems never catch that at all. All of this comes to you directly — there's no dashboard, no login, nothing to sign into. We tell you; you don't go looking.",
  },

  whoItsFor: {
    eyebrow: "Ideal Fit",
    title: "Who it's for",
    body: "Any business already running paid ads — Google, Meta, or both — and sending that traffic to a homepage instead of something built to answer it. If you're paying for clicks, this is for you.",
  },

  howItWorks: {
    eyebrow: "Execution",
    title: "How it works",
    steps: [
      {
        num: "01",
        title: "Ad click",
        body: "Someone clicks your ad and lands on your Conversion Desk instead of your homepage.",
      },
      {
        num: "02",
        title: "Instant conversation",
        body: "They call, or tap a question and start a conversation — answered instantly, using your business's own information.",
      },
      {
        num: "03",
        title: "Details extracted",
        body: "Their name, phone, and email are pulled out and saved automatically, the moment they're given.",
      },
      {
        num: "04",
        title: "Immediate alert",
        body: "You're alerted within seconds — their number is the first thing you see.",
      },
    ],
  },

  pricing: {
    eyebrow: "Pricing",
    title: "One page. Choose how much of the phone it covers.",
    tiers: [
      {
        name: "Desk",
        price: "$199",
        period: "/mo",
        description: "Ad landing page with conversational chat triage, conversion tracking, and instant alerts.",
        included: "Page + chat only, no phone",
        overage: "—",
        popular: false,
      },
      {
        name: "Desk + Answer",
        price: "$399",
        period: "/mo",
        description: "Everything in Desk plus missed-call phone backstop answering with lead details dispatch.",
        included: "300 voice minutes",
        overage: "$0.55/min",
        popular: true,
      },
    ],
  },

  cta: {
    line: "The easiest way to understand this is to use it.",
    button: "Try our Conversion Desk →",
    href: "https://go.alizanelabs.site",
  },
} as const;
