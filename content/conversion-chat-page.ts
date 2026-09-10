/**
 * Single source of editable copy for the Conversion Chat product page (/conversion-chat).
 * Sourced directly from conversion-chat-product-page.md.
 */

export const conversionChatPage = {
  metaTitle: "Conversion Chat — AI Chat for the Website You Already Have | Alizane Labs",
  metaDescription:
    "A chat bubble in the corner of your site — one script tag, zero rebuild. Answers using your actual business info, captures phone and email, alerts you within seconds, and sends a monthly report by email. 14 days free.",

  hero: {
    eyebrow: "The Product",
    title: "Conversion Chat",
    subhead: "AI chat for the website you already have.",
    body: "A chat bubble in the corner of your site — one script tag, nothing to rebuild, no plugin, no migration. It answers using your actual services and business information, captures a visitor's phone and email from the conversation — plus their name, when they give it alongside their contact details — and gets you the details within seconds. Once a month, it also sends you a report of everything that happened, by email. No dashboard, nothing to log into.",
    ctaPrimary: "Try Conversion Chat free for 14 days →",
    ctaPrimaryHref: "/pricing?plan=chat#start",
    ctaSecondary: "See full pricing →",
    ctaSecondaryHref: "/pricing",
    badges: [
      "14-Day Free Trial",
      "One Script Tag Setup",
      "No Rebuild or Migration",
    ],
  },

  afterHoursGap: {
    eyebrow: "The After-Hours Gap",
    title: "The enquiries that go cold after hours don't feel like a number. They just feel like a quiet month.",
    body: "Someone lands on your site at 9pm, or on a Sunday, has a question, and doesn't see an easy way to ask it. Most won't call outside business hours. Most won't fill out a contact form either. They leave, and you never find out — not that they were there, not what they wanted, not that they went to whoever answered first. Multiply that by every after-hours visit you've ever had, and that's the real size of what this catches.",
  },

  whatItDoes: {
    eyebrow: "Capabilities",
    title: "What it actually does",
    items: [
      {
        num: "01",
        title: "24/7 Instant Answers",
        desc: "Answers every enquiry instantly, at any hour — nights, weekends, and holidays without delays.",
      },
      {
        num: "02",
        title: "One Script Tag",
        desc: "Installs with one script tag on the site you already have — no rebuild, no plugin, no migration required.",
      },
      {
        num: "03",
        title: "Direct Contact Extraction",
        desc: "Captures a visitor's phone and email from the conversation, plus their name when provided alongside contact info.",
      },
      {
        num: "04",
        title: "Guaranteed Lead Persistence",
        desc: "Saves the lead before you're ever alerted, so nothing depends on the alert or email delivery succeeding.",
      },
      {
        num: "05",
        title: "Intent Capture",
        desc: "Tells you what people asked about — including the ones who left without giving any contact details.",
      },
      {
        num: "06",
        title: "After-Hours Visibility",
        desc: "Shows you exactly how much of your inquiry volume happened outside your regular working hours.",
      },
      {
        num: "07",
        title: "Monthly Emailed Report",
        desc: "A clean report sent by email once a month — no dashboard to remember, nothing to log into.",
      },
      {
        num: "08",
        title: "Brand Matching",
        desc: "Configured to match your exact brand colours, tone, and visual presence seamlessly.",
      },
      {
        num: "09",
        title: "Custom Business Tuning",
        desc: "Set up specifically for your business — your services, your pricing rules, your tone, and your questions.",
      },
    ],
  },

  monthlyReport: {
    eyebrow: "Monthly Intelligence",
    title: "No dashboard. A report, once a month, that tells you what actually happened.",
    body: "Emailed, not logged into — worth saying plainly, since that's the point, not a gap. It shows what people asked about, including the ones who never left a name. When they reached out, in terms you'd actually use, not a 24-hour chart — weekend enquiries count as out of hours, because an 11am Saturday call is still outside the work week for most trades. Whether they gave a phone or an email. And the number that tends to land hardest: how much of it happened while you were closed, or asleep.",
    specimen: {
      reportPeriod: "Monthly Intelligence Brief",
      totalConversations: "48",
      afterHoursPercent: "68%",
      afterHoursSubtext: "Enquiries received outside standard business hours & weekends",
      leadsCaptured: "21",
      leadsSubtext: "Verified phone or email captured directly in conversation",
      unsubmittedInquiries: "17",
      unsubmittedSubtext: "Service questions asked by visitors who left before sharing details",
      topQuestions: [
        "\"Do you handle emergency storm damage after 7 PM?\"",
        "\"Are you licensed and insured for commercial properties?\"",
        "\"Can someone provide an on-site estimate tomorrow morning?\"",
      ],
    },
  },

  whoItsFor: {
    eyebrow: "Ideal Fit",
    title: "Who it's for",
    body: "Any business whose website gets enquiries and sometimes misses them — especially outside business hours. If you're not running paid ads and don't need a dedicated landing page, this is the simpler fit. If you're already paying for clicks and want a page built specifically for that traffic, with ad tracking as the actual point of the product, see Conversion Desk instead. One business can run both — each conversation records which one it came from, so nothing gets mixed together in the report.",
    deskCta: "See Conversion Desk →",
    deskHref: "/product",
  },

  howItWorks: {
    eyebrow: "Execution",
    title: "How it works",
    steps: [
      {
        num: "01",
        title: "Custom Setup",
        body: "We set it up with your services, your tone, the questions you actually get asked, and your brand colours.",
      },
      {
        num: "02",
        title: "One Script Tag",
        body: "One script tag goes on your site. That's the entire integration. Nothing to rebuild or reconfigure.",
      },
      {
        num: "03",
        title: "Live & Reporting",
        body: "It goes live — answering visitors, capturing leads, alerting you within seconds, and sending you a report of what happened at the end of the month.",
      },
    ],
  },

  cta: {
    line: "See it in action — there's one running in the corner of this page right now.",
    button: "Try Conversion Chat free for 14 days →",
    buttonHref: "/pricing?plan=chat#start",
    pricingLinkText: "See full pricing →",
    pricingHref: "/pricing",
  },
} as const;
