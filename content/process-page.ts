export type ProcessStage = {
  number: string;
  title: string;
  summary: string;
  /** What happens during the stage. */
  activities: readonly string[];
  /** What the client provides. */
  clientProvides: readonly string[];
  /** What Alizane Labs produces. */
  deliverables: readonly string[];
};

export const processPage = {
  eyebrow: "Process",
  headline: "Fast because the decisions are clear.",
  body: "Four stages, each with a defined input, a defined output, and one decision to make before the next begins. No status theatre, no waiting for a weekly meeting to move.",
  metaTitle: "Process — How an Alizane Labs Project Runs",
  metaDescription:
    "How Alizane Labs runs a project: diagnose, define, design and build, launch and improve — including what you provide, what we produce, and how decisions, testing, and handoff work.",
  stages: [
    {
      number: "01",
      title: "Diagnose",
      summary:
        "We clarify the audience, offer, business goals, current friction, and technical constraints.",
      activities: [
        "A working session on the offer, the buyer, and how work is won today",
        "Review of the current site, analytics, and inquiry volume where available",
        "Review of the tools already in use: calendar, CRM, forms, messaging, phone",
        "Identification of the constraints that shape the build",
      ],
      clientProvides: [
        "Access to the current site, analytics, and any existing brand material",
        "Context on the sales conversation and the questions buyers repeat",
        "The internal owner who can make decisions",
      ],
      deliverables: [
        "A written problem statement",
        "The friction points ranked by business impact",
        "A recommended starting point and scope",
      ],
    },
    {
      number: "02",
      title: "Define",
      summary:
        "We shape the positioning, site architecture, conversion journey, and automation logic.",
      activities: [
        "Positioning and message hierarchy",
        "Page structure, content outline, and the path to each action",
        "Qualification questions, routing rules, and escalation paths",
        "Agreement on what is in scope and what is deliberately deferred",
      ],
      clientProvides: [
        "Approval of the positioning and message hierarchy",
        "Approved answers for anything the automation will say",
        "Confirmation of who receives which inquiries",
      ],
      deliverables: [
        "Site architecture and page outlines",
        "Conversion journey and automation logic in writing",
        "A build plan with sequence and dependencies",
      ],
    },
    {
      number: "03",
      title: "Design and build",
      summary:
        "Copy, interface, development, integrations, and testing progress as one connected system.",
      activities: [
        "Design system and page design in the browser, not just in static mockups",
        "Frontend implementation with content separated from presentation",
        "Integration work against test credentials and test calendars first",
        "Scenario testing: validation, errors, empty states, refusals, and handoff",
        "Accessibility, responsive, and performance checks as the work proceeds",
      ],
      clientProvides: [
        "Consolidated feedback at defined review points",
        "Content and assets you own: logos, photography, documents",
        "Integration access when the workflow is ready to connect",
      ],
      deliverables: [
        "The built site on a preview URL, updated continuously",
        "Working workflows with test results",
        "A list of anything still blocked on a decision or a credential",
      ],
    },
    {
      number: "04",
      title: "Launch and improve",
      summary:
        "We deploy, verify, measure, and refine the areas that influence real customer action.",
      activities: [
        "Pre-launch check: routes, metadata, forms, integrations, analytics, redirects",
        "Deployment and verification on the production domain",
        "Monitoring of the first real inquiries end to end",
        "Refinement of the steps where visitors hesitate or drop out",
      ],
      clientProvides: [
        "Domain and deployment access, or approval for us to coordinate it",
        "Confirmation that inquiries are arriving where they should",
      ],
      deliverables: [
        "The live site and working workflows",
        "Analytics events for the actions that matter",
        "Documented handoff for what your team will manage",
      ],
    },
  ] satisfies readonly ProcessStage[],
  decisions: {
    label: "How decisions and revisions work",
    items: [
      {
        title: "One decision per stage",
        body: "Each stage ends with a single decision. We do not start the next stage while the previous one is still open.",
      },
      {
        title: "Consolidated review",
        body: "Feedback is collected in one pass per review point. Rounds are defined in the build plan so scope stays honest.",
      },
      {
        title: "Direct communication",
        body: "You work with the people doing the work. Questions are asked when they arise, not saved for a status call.",
      },
      {
        title: "Change is priced honestly",
        body: "New scope is identified as new scope, with its effect on sequence and timing stated before it starts.",
      },
    ],
  },
  testing: {
    label: "How integrations are tested",
    items: [
      "Workflows are built against test credentials, test calendars, and test records first.",
      "Scenario tests cover the useful paths and the awkward ones: incomplete data, refusals, duplicates, and outages.",
      "Handoff is verified by a real person receiving a real conversation with its context attached.",
      "Nothing points at production data until the path has been tested end to end.",
    ],
  },
  preLaunch: {
    label: "Before launch",
    items: [
      "Every route, form state, and error state is exercised on desktop and mobile.",
      "Metadata, structured data, sitemap, robots, and redirects from old URLs are verified.",
      "Keyboard navigation, focus order, contrast, and reduced-motion behaviour are checked.",
      "Performance is measured on representative pages, not just the homepage.",
      "Analytics events are confirmed to fire once, with no personal data attached.",
    ],
  },
  handoff: {
    label: "What handoff includes",
    items: [
      "Where the content lives and how to edit it safely",
      "Documented environment variables and integration destinations",
      "Deployment and rollback steps",
      "The analytics events available and what each one means",
      "Known limitations and anything still awaiting confirmation",
    ],
  },
} as const;
