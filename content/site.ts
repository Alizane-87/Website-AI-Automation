/**
 * Single source of editable site copy and business facts for Alizane Labs.
 * Option A: Digital Systems Studio (Custom Websites + AI Automation)
 */

export const site = {
  name: "Alizane Labs",
  category: "Digital Systems Studio",
  tagline: "Websites that look exceptional. Systems that work relentlessly.",
  supportingTagline: "Design the experience. Automate the opportunity.",
  descriptor:
    "Alizane Labs creates distinctive custom websites and autonomous AI systems for ambitious businesses.",
  defaultTitle: "Alizane Labs — Custom Websites & AI Automation Studio",
  defaultDescription:
    "Alizane Labs designs high-performance editorial websites and engineers intelligent AI voice and automation systems that convert attention into qualified pipeline.",
} as const;

export const nav = [
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/#system", label: "How It Works" },
  { href: "/#pricing", label: "Engagements" },
  { href: "/#faq", label: "FAQ" },
] as const;

/** Primary conversion destination. Every CTA reads from here. */
export const ctaHref = "/contact";

export const cta = {
  primary: { label: "Start a Project", href: ctaHref },
  secondary: { label: "Explore Capabilities", href: "/#capabilities" },
  capabilities: { label: "Explore Capabilities", href: "/#capabilities" },
  discuss: { label: "Discuss Your Architecture", href: ctaHref },
} as const;

export const footerNav = [
  {
    heading: "Studio",
    links: [
      { href: "/#capabilities", label: "Capabilities" },
      { href: "/#system", label: "Architecture" },
      { href: "/#pricing", label: "Engagements" },
      { href: "/contact", label: "Start a Project" },
    ],
  },
  {
    heading: "Capabilities",
    links: [
      { href: "/#capabilities", label: "Custom Web Architecture" },
      { href: "/#capabilities", label: "AI Voice & Dispatch" },
      { href: "/#capabilities", label: "Workflow & CRM Automations" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
] as const;

export const signalBar = {
  text: "Q3 Project Slots Open · Accepting Select Web & AI Automation Builds",
  linkLabel: "Inquire Now",
  href: ctaHref,
} as const;

export const hero = {
  eyebrow: "Digital Systems Studio · Custom Websites + AI Automation",
  headline: "Make your business impossible to overlook—and effortless to choose.",
  body: "Alizane Labs designs bespoke, high-performance websites and connects them to autonomous AI voice, lead capture, and workflow engines. One studio for how your business looks, converts, and operates.",
  reassurance: "Custom-engineered on Next.js 16, Retell AI, and n8n. Zero generic templates or bloated builders.",
} as const;

export const capabilityStrip = {
  items: [
    "Next.js Architecture",
    "Retell AI Voice",
    "n8n Controller",
    "CRM Orchestration",
    "Conversion Systems",
  ],
  supporting: "One unified studio engineering the frontend experience and the automation machine behind it.",
} as const;

export const reframe = {
  label: "The Core Bottleneck",
  headline: "Most websites stop working the moment someone becomes interested.",
  body: "A beautiful homepage is only half the equation. The true leverage lies in what happens next: instant response times, intelligent qualification, seamless CRM sync, and continuous follow-up on every quoted deal.",
  closing: "We design the public experience and engineer the operational engine behind it.",
  traditional: {
    label: "Traditional Agency Site",
    steps: ["Visit", "Browse", "Fill Form", "Wait 24 Hours", "Lead Goes Cold"],
  },
  system: {
    label: "Alizane Digital System",
    steps: ["Visit", "Understand", "Instant AI Response", "Qualify & Sync", "Booked Deal"],
  },
} as const;

export const studioPillars = [
  {
    id: "web-architecture",
    badge: "Pillar 01",
    tag: "Design & Engineering",
    title: "Custom High-Performance Websites",
    description:
      "Bespoke web applications built on Next.js 16. Fast load times, editorial aesthetics, mobile-responsive layout, and copy engineered to convert premium clients.",
    details: [
      "Sub-second page loads on Vercel Edge",
      "Editorial typography with custom layout hierarchy",
      "SEO-optimized and accessibility-compliant architecture",
      "Interactive product demos and conversion funnels",
    ],
  },
  {
    id: "voice-dispatch",
    badge: "Pillar 02",
    tag: "Voice AI & Response",
    title: "60-Second AI Voice & Dispatch Engines",
    description:
      "Autonomous voice assistants powered by Retell AI and ultra-low latency models that instantly answer inbound calls, qualify prospects, and book appointments onto your calendar 24/7.",
    details: [
      "Sub-600ms conversational latency",
      "Multi-channel instant SMS + Voice outreach",
      "Custom business knowledgebase & guardrails",
      "Direct calendar injection & call recordings",
    ],
  },
  {
    id: "workflow-automation",
    badge: "Pillar 03",
    tag: "Autonomous Ops",
    title: "Autonomous n8n & CRM Workflows",
    description:
      "Centralized orchestration pipelines that connect your website to Jobber, ServiceTitan, GoHighLevel, HubSpot, or custom databases without messy point-to-point glue.",
    details: [
      "Webhook and REST API event ingestion",
      "Automated estimate follow-up and revival sequences",
      "Multi-party notifications (SMS, Email, Slack/Teams)",
      "Zero manual data entry or lost opportunities",
    ],
  },
] as const;

export const engagementModels = [
  {
    id: "web-sprint",
    name: "Web Architecture Sprint",
    price: "$2,500",
    period: "one-time",
    description:
      "Complete design, copy, development, and deployment of a bespoke Next.js 16 website built to establish market authority.",
    highlights: [
      "Full custom design & editorial typography",
      "High-converting copy & strategic positioning",
      "Vercel deployment + sub-second performance",
      "Lead webhook integration to your CRM",
      "2-week delivery timeline",
    ],
    ctaLabel: "Start Web Sprint",
    popular: false,
  },
  {
    id: "full-system",
    name: "Complete Digital System",
    price: "$4,500",
    period: "one-time",
    description:
      "The flagship studio build: Custom high-performance website paired with an autonomous Retell AI voice engine and n8n automation pipeline.",
    highlights: [
      "Everything in Web Architecture Sprint",
      "Retell AI Voice Agent (Inbound/Outbound)",
      "Centralized n8n workflow controller",
      "Full CRM two-way data synchronization",
      "Automated 21-day estimate revival engine",
      "3-week delivery timeline",
    ],
    ctaLabel: "Build Full System",
    popular: true,
  },
  {
    id: "managed-desk",
    name: "Managed Systems Desk",
    price: "$799",
    period: "per month",
    description:
      "Ongoing continuous optimization, new automation workflows, voice agent tuning, and priority technical support.",
    highlights: [
      "Continuous prompt & AI voice optimization",
      "Unlimited workflow tweaks & new integrations",
      "Hosting, security & edge performance monitoring",
      "Monthly conversion and lead audit reports",
      "Direct private Slack / Teams engineering channel",
    ],
    ctaLabel: "Join Managed Desk",
    popular: false,
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Discovery & System Architecture",
    description:
      "We map your exact client journey, technical stack, conversion bottlenecks, and automation opportunities into a unified blueprint.",
  },
  {
    number: "02",
    title: "Bespoke Design & Frontend Build",
    description:
      "We engineer your website using clean editorial typography, warm monochrome aesthetics, and sub-second Next.js 16 components.",
  },
  {
    number: "03",
    title: "AI Voice & Workflow Integration",
    description:
      "We configure Retell AI voice models, build n8n logic pipelines, and integrate your CRM so every lead triggers an instant response.",
  },
  {
    number: "04",
    title: "Deployment & Production Hand-off",
    description:
      "We launch on Vercel Edge, run end-to-end load tests, and deliver a clean, documented system ready to capture revenue immediately.",
  },
] as const;

export const demo = {
  label: "Interactive Workflow",
  headline: "How the autonomous dispatch engine responds in real-time.",
  visitorMessage: "Do you have emergency dispatch and same-day estimate booking?",
  disclaimer: "Illustrative trace of a production workflow. Actual business logic is tailored to your CRM and telephony rules.",
  steps: [
    {
      title: "Inbound Trigger",
      actor: "Website Webhook",
      detail: "Inbound inquiry received with contact details and project requirements.",
      summary: "Inbound inquiry received with contact details and project requirements.",
      action: "Payload parsed, validated, and routed to n8n orchestration node.",
      systemLine: "event.received { type: 'form_submission', source: 'nextjs_edge', priority: 'high' }",
    },
    {
      title: "AI Voice & SMS Engagement",
      actor: "Retell AI Voice Agent",
      detail: "Voice assistant calls back within 60 seconds to confirm project scope.",
      summary: "Voice assistant calls back within 60 seconds to confirm project scope.",
      action: "Identified commercial project with $15,000 budget and urgent 2-week timeline.",
      systemLine: "voice.dispatched { latency: '520ms', status: 'connected', qualification: 'verified' }",
    },
    {
      title: "CRM Sync & Calendar Injection",
      actor: "n8n → CRM API",
      detail: "Direct booking confirmed onto team calendar and tagged in CRM.",
      summary: "Direct booking confirmed onto team calendar and tagged in CRM.",
      action: "Team alerted via SMS / Slack with call summary and recording link.",
      systemLine: "crm.synced { provider: 'Jobber', booking: 'Confirmed Thu 10:00 AM', status: 'deal_created' }",
    },
  ],
} as const;

