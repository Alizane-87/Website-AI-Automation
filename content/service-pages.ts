export type Capability = { title: string; body: string };

export type ServicePage = {
  slug: string;
  path: string;
  navLabel: string;
  eyebrow: string;
  headline: string;
  body: string;
  metaTitle: string;
  metaDescription: string;
  capabilitiesLabel: string;
  capabilitiesHeadline: string;
  capabilities: readonly Capability[];
  ctaLabel: string;
  closingHeadline: string;
  closingBody: string;
};

export const websitesPage: ServicePage & {
  transformationLabel: string;
  transformationHeadline: string;
  transformations: readonly { from: string; to: string }[];
} = {
  slug: "websites",
  path: "/services/websites",
  navLabel: "Websites",
  eyebrow: "Custom websites",
  headline: "Your website should express your value before you have to explain it.",
  body: "We combine positioning, copy, design, development, motion, and conversion strategy to create a digital presence that feels unmistakably yours.",
  metaTitle: "Custom Websites — Design, Copy, and Conversion Engineering",
  metaDescription:
    "Custom website design and development from Alizane Labs: positioning, conversion copy, interface design, motion, performance, accessibility, and analytics in one build.",
  capabilitiesLabel: "What the work covers",
  capabilitiesHeadline: "One team across strategy, design, and engineering.",
  capabilities: [
    {
      title: "Positioning and discovery",
      body: "We establish who the site speaks to, what makes the offer worth choosing, and which decisions the visitor needs help making.",
    },
    {
      title: "Information architecture",
      body: "Pages, hierarchy, and navigation are structured around the questions buyers actually ask, in the order they ask them.",
    },
    {
      title: "Conversion copy",
      body: "Every section earns its place: clarify the offer, answer an objection, or move the visitor toward a relevant action.",
    },
    {
      title: "Interface and visual design",
      body: "A distinctive design system — type, colour, layout, components — built for your brand rather than adapted from a template.",
    },
    {
      title: "Development",
      body: "Component-based frontend implementation with content separated from presentation, so routine updates never require a rebuild.",
    },
    {
      title: "Performance",
      body: "Optimised fonts, responsive images with explicit dimensions, lazy-loaded below-the-fold media, and no layout shift.",
    },
    {
      title: "Accessibility",
      body: "Semantic structure, keyboard-operable interfaces, visible focus states, sufficient contrast, and reduced-motion support.",
    },
    {
      title: "Search foundations",
      body: "Unique titles and descriptions, canonical URLs, structured data, internal linking, sitemap, and clean crawlable markup.",
    },
    {
      title: "Analytics",
      body: "A documented event layer for the actions that matter, so you can see where interest turns into inquiries.",
    },
    {
      title: "Launch and handoff",
      body: "Deployment, verification across devices, and documentation for the parts your team will manage.",
    },
  ],
  transformationLabel: "The change",
  transformationHeadline: "What the rebuild is actually for.",
  transformations: [
    { from: "Difficult to understand", to: "Immediately clear" },
    { from: "Visually interchangeable", to: "Recognisably yours" },
    { from: "Passive brochure", to: "Guided conversion journey" },
    { from: "Hard to maintain", to: "Structured for growth" },
  ],
  ctaLabel: "Plan your website",
  closingHeadline: "Tell us where the current site loses people.",
  closingBody:
    "Share the pages that underperform, the questions you answer repeatedly, and the action you want visitors to take. We will recommend the most useful starting point.",
};

export const aiAutomationPage: ServicePage & {
  principle: string;
  useCasesLabel: string;
  useCasesHeadline: string;
  useCases: readonly string[];
  boundariesLabel: string;
  boundariesHeadline: string;
  boundaries: readonly Capability[];
} = {
  slug: "ai-automation",
  path: "/services/ai-automation",
  navLabel: "AI Automation",
  eyebrow: "AI automation",
  headline: "Automate the delay between customer interest and meaningful action.",
  body: "Alizane Labs designs practical AI workflows that answer common questions, collect useful context, route opportunities, coordinate schedules, and keep your team informed.",
  metaTitle: "AI Automation — Inquiry Handling, Qualification, and Routing",
  metaDescription:
    "Practical AI automation from Alizane Labs: webchat and inquiry handling, qualification, routing, booking, messaging workflows, CRM integration, and human handoff.",
  capabilitiesLabel: "What the work covers",
  capabilitiesHeadline: "A defined system, not a black box.",
  capabilities: [
    {
      title: "Workflow discovery",
      body: "We map how inquiries arrive today, who touches them, where they stall, and which steps repeat without adding judgement.",
    },
    {
      title: "Knowledge and response design",
      body: "Approved answers, tone, and escalation language are written and reviewed before anything goes live.",
    },
    {
      title: "Qualification logic",
      body: "The few questions that genuinely change the recommendation, asked in a sequence that respects the visitor's time.",
    },
    {
      title: "Lead routing",
      body: "Rules based on need, location, urgency, or value decide who receives the opportunity and what context arrives with it.",
    },
    {
      title: "Calendar booking",
      body: "Real availability offered inside the conversation, with confirmation and reminders handled automatically.",
    },
    {
      title: "Messaging workflows",
      body: "Email, SMS, and WhatsApp sequences for confirmations, incomplete forms, and follow-up — with clear opt-out.",
    },
    {
      title: "CRM and system integration",
      body: "Records created and updated in the tools your team already uses, so nothing is re-entered by hand.",
    },
    {
      title: "Human handoff",
      body: "Designed in from the start: exceptions, high-value conversations, and sensitive topics reach a person with the full thread.",
    },
    {
      title: "Logging and reporting",
      body: "Visibility into what the system handled, what it escalated, and where the workflow needs adjustment.",
    },
    {
      title: "Privacy and data handling",
      body: "Documented data flows, retention, and access. Credentials stay server-side and out of client code.",
    },
    {
      title: "Testing and monitoring",
      body: "Scenario testing before launch, then monitoring so failures surface as alerts rather than silence.",
    },
  ],
  principle:
    "Automation should not make consequential promises, provide regulated advice, or conceal when someone is interacting with an automated system.",
  useCasesLabel: "Where it earns its place",
  useCasesHeadline: "Repetitive steps, handled properly.",
  useCases: [
    "Respond to after-hours inquiries",
    "Qualify leads before a consultation",
    "Route requests by need, location, budget, or urgency",
    "Coordinate available appointment times",
    "Follow up when a form is incomplete",
    "Summarise conversations for staff",
    "Answer approved frequently asked questions",
    "Escalate complex or sensitive situations to a person",
  ],
  boundariesLabel: "Boundaries",
  boundariesHeadline: "What the system is not allowed to do.",
  boundaries: [
    {
      title: "No invented answers",
      body: "The assistant works from approved material. Anything outside it becomes a handoff, not a guess.",
    },
    {
      title: "No consequential promises",
      body: "Pricing commitments, guarantees, and regulated advice stay with your team.",
    },
    {
      title: "No hidden automation",
      body: "People are told when they are interacting with an automated system, and how to reach a person.",
    },
  ],
  ctaLabel: "Explore an automation opportunity",
  closingHeadline: "Start with the step that costs your team the most time.",
  closingBody:
    "Describe how inquiries reach you today and what happens next. We will identify the workflow worth automating first and what it would take.",
};

export const servicePages = [websitesPage, aiAutomationPage] as const;
