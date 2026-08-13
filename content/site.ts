/**
 * Single source of editable site copy and business facts.
 *
 * Anything that is a business claim (contact details, availability, timing,
 * pricing) lives in `content/claims.ts` so it can be reviewed before launch.
 */

export const site = {
  name: "Alizane Labs",
  category: "Digital systems studio",
  tagline: "Websites that look exceptional. Systems that work relentlessly.",
  supportingTagline: "Design the experience. Automate the opportunity.",
  descriptor:
    "Alizane Labs creates distinctive websites and practical AI systems for ambitious businesses.",
  defaultTitle: "Alizane Labs — Custom Websites and AI Automation",
  defaultDescription:
    "Alizane Labs creates distinctive custom websites and practical AI automation systems that help businesses convert interest, respond faster, and operate more efficiently.",
} as const;

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/services/websites", label: "Websites" },
  { href: "/services/ai-automation", label: "AI Automation" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
] as const;

/** Primary conversion destination. Every CTA reads from here. */
export const ctaHref = "/contact";

export const cta = {
  primary: { label: "Start a project", href: ctaHref },
  secondary: { label: "See our work", href: "/work" },
  capabilities: { label: "Explore our capabilities", href: "/services/websites" },
  discuss: { label: "Discuss this project", href: ctaHref },
} as const;

export const footerNav = [
  {
    heading: "Studio",
    links: [
      { href: "/work", label: "Work" },
      { href: "/process", label: "Process" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Start a project" },
    ],
  },
  {
    heading: "Services",
    links: [
      { href: "/services/websites", label: "Custom websites" },
      { href: "/services/ai-automation", label: "AI automation" },
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
  text: "Now accepting select website and automation projects.",
  linkLabel: "Start a project",
  href: ctaHref,
} as const;

export const hero = {
  eyebrow: "Custom websites + AI automation",
  headline: "Make your business impossible to overlook—and easier to choose.",
  body: "Alizane Labs designs high-performance websites and intelligent automation systems that turn attention into qualified action. One studio for how your business looks, converts, and responds.",
  reassurance: "Custom-built around your brand, goals, and existing workflow.",
} as const;

export const capabilityStrip = {
  items: ["Strategy", "Copy", "Design", "Development", "Automation"],
  supporting: "One connected team from first idea to working system.",
} as const;

export const reframe = {
  label: "The missed opportunity",
  headline: "Most websites stop working the moment someone becomes interested.",
  body: "A polished homepage is only the beginning. The real opportunity lies in what happens next: the right message, a useful answer, intelligent qualification, timely follow-up, and a frictionless path to action.",
  closing: "We design the experience and engineer what happens behind it.",
  traditional: {
    label: "Traditional site",
    steps: ["Visit", "Browse", "Leave"],
  },
  system: {
    label: "Alizane system",
    steps: ["Visit", "Understand", "Engage", "Qualify", "Book or route"],
  },
} as const;

export type ServiceSummary = {
  slug: string;
  href: string;
  title: string;
  copy: string;
  features: readonly string[];
  ctaLabel: string;
};

export const services: readonly ServiceSummary[] = [
  {
    slug: "websites",
    href: "/services/websites",
    title: "Custom Websites",
    copy: "Distinctive digital experiences shaped around your positioning—not a recycled template. We combine strategy, conversion copy, interface design, development, motion, performance, and search fundamentals into one coherent build.",
    features: [
      "Positioning and information architecture",
      "Conversion-focused copy",
      "Responsive interface design",
      "Custom frontend development",
      "Motion and interactive storytelling",
      "Performance, accessibility, and technical SEO",
      "Analytics and conversion tracking",
    ],
    ctaLabel: "Explore custom websites",
  },
  {
    slug: "ai-automation",
    href: "/services/ai-automation",
    title: "AI Automation",
    copy: "Practical AI systems that respond, qualify, route, schedule, and follow up without forcing your team to manage every repetitive step.",
    features: [
      "AI webchat and inquiry handling",
      "Lead qualification and routing",
      "Appointment scheduling",
      "Email, SMS, and WhatsApp workflows",
      "Voice AI where appropriate",
      "CRM and internal workflow integrations",
      "Reporting and human handoff",
    ],
    ctaLabel: "Explore AI automation",
  },
] as const;

export const servicesSection = {
  label: "What we build",
  headline: "Two disciplines. One connected growth system.",
} as const;

export const differentiation = {
  label: "Why Alizane",
  headline: "Designed as one system—not assembled from disconnected vendors.",
  principles: [
    {
      title: "Built from your business",
      body: "Your offer, audience, workflow, and goals define the solution.",
    },
    {
      title: "Design with operational depth",
      body: "The customer-facing experience and the system behind it are planned together.",
    },
    {
      title: "AI with a real job",
      body: "Every automation must save time, improve response, or make the next action easier.",
    },
    {
      title: "Quality without unnecessary ceremony",
      body: "A focused process, direct communication, and clear decisions keep the work moving.",
    },
  ],
} as const;

export const demo = {
  label: "See the system work",
  headline: "From first question to the right next step.",
  disclaimer:
    "Illustrative example of a configured workflow. Not a live customer conversation.",
  visitorMessage:
    "Can you help us redesign our website and automate incoming inquiries?",
  steps: [
    {
      state: "active",
      title: "Recognises intent",
      detail:
        "Reads the message as two connected needs: a website rebuild and inquiry automation.",
      systemLine:
        "Intent: website redesign + inquiry automation. Confidence high enough to continue.",
    },
    {
      state: "active",
      title: "Asks one useful question",
      detail:
        "One question, chosen for what it changes about the recommendation—not a survey.",
      systemLine:
        "\u201cRoughly how many inquiries reach you in a month, and who handles the first reply today?\u201d",
    },
    {
      state: "qualified",
      title: "Suggests a project path",
      detail:
        "Matches the answer to an engagement shape and states what it would cover.",
      systemLine:
        "Suggested path: connected system \u2014 site rebuild plus intake, qualification, and routing.",
    },
    {
      state: "routed",
      title: "Offers consultation times",
      detail:
        "Reads real availability from the connected calendar and offers slots inside the conversation.",
      systemLine: "Available: Tue 10:00, Wed 15:30, Thu 09:00 \u2014 45 minutes.",
    },
    {
      state: "accepted",
      title: "Routes to a person with context",
      detail:
        "A named human receives the conversation, the answers, and the suggested path.",
      systemLine:
        "Handed to a person with the transcript, the qualification answer, and the proposed scope attached.",
    },
  ],
} as const;

export const processSteps = [
  {
    number: "01",
    title: "Diagnose",
    body: "We clarify the audience, offer, business goals, current friction, and technical constraints.",
  },
  {
    number: "02",
    title: "Define",
    body: "We shape the positioning, site architecture, conversion journey, and automation logic.",
  },
  {
    number: "03",
    title: "Design and build",
    body: "Copy, interface, development, integrations, and testing progress as one connected system.",
  },
  {
    number: "04",
    title: "Launch and improve",
    body: "We deploy, verify, measure, and refine the areas that influence real customer action.",
  },
] as const;

export const processSection = {
  label: "How it works",
  headline: "Fast because the decisions are clear.",
} as const;

export const engagement = {
  label: "Ways to work together",
  headline: "Start with the problem that matters most.",
  options: [
    {
      title: "Website",
      body: "For companies that need a sharper position, stronger digital presence, and clearer conversion path.",
      includes: [
        "Positioning and messaging",
        "Design and build",
        "Conversion journey and analytics",
      ],
    },
    {
      title: "Automation",
      body: "For teams losing time to repetitive inquiries, qualification, follow-up, routing, or booking.",
      includes: [
        "Workflow and response design",
        "Qualification, routing, and booking",
        "Integrations and human handoff",
      ],
    },
    {
      title: "Connected system",
      body: "For companies ready to redesign the customer experience and automate what happens behind it.",
      includes: [
        "Everything in Website and Automation",
        "One plan across experience and operations",
        "Measurement of the full journey",
      ],
    },
  ],
} as const;

export const finalCta = {
  eyebrow: "Have a website problem, an operations problem, or both?",
  headline: "Build the experience your business has grown into.",
  body: "Tell us what is not working today and what a better system should make possible. We will help you identify the highest-value place to begin.",
  reassurance:
    "No generic proposal. No unnecessary sales performance. Just a focused conversation about the problem and the right next step.",
} as const;
