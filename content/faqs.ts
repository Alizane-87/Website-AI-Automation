export type Faq = { question: string; answer: string };

export const homeFaqs: Faq[] = [
  {
    question: "Do you work with a specific industry?",
    answer:
      "No. We work across industries and adapt the strategy, design language, and automation logic to each business. The common thread is a meaningful customer journey and a clear operational opportunity.",
  },
  {
    question: "Do you use templates?",
    answer:
      "We do not force businesses into a prepackaged visual identity. We may use proven engineering foundations where they improve reliability, but the strategy, copy, interface, and system design are created for the project.",
  },
  {
    question: "Can you improve our existing website?",
    answer:
      "Yes. We can redesign and rebuild the full experience or focus on the pages and systems creating the greatest friction. The right approach depends on the current technology and business goal.",
  },
  {
    question: "Can AI hand a conversation to a person?",
    answer:
      "Yes. Human handoff should be designed into the workflow. Automation handles the repeatable parts and routes exceptions, high-value opportunities, or sensitive conversations to the appropriate person.",
  },
  {
    question: "What can you integrate with?",
    answer:
      "Common projects connect calendars, CRMs, forms, messaging tools, email platforms, and internal systems. We confirm compatibility and data requirements before implementation.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Timing depends on scope, content readiness, integrations, and review cycles. After the initial assessment, we provide a clear delivery plan with milestones and responsibilities.",
  },
  {
    question: "Will we be able to update the website?",
    answer:
      "Yes. The content architecture makes routine updates straightforward. We also provide a documented handoff for the parts your team will manage.",
  },
];

export const faqSection = {
  label: "Questions",
  headline: "What people ask before starting.",
} as const;
