/**
 * Work content architecture.
 *
 * `caseStudies` stays empty until a client approves publication. Nothing in
 * here may describe a real client, result, or metric that has not been
 * confirmed in writing. Example engagements below are labelled as examples.
 */

export type CaseStudyMedia = {
  /** Path under /public. Use `null` while the asset is still required. */
  src: string | null;
  alt: string;
  width: number;
  height: number;
};

export type CaseStudy = {
  slug: string;
  name: string;
  /** Rendered only when the client has approved being named. */
  client: string | null;
  industry: string;
  context: string;
  businessProblem: string;
  strategicDecision: string;
  solution: readonly string[];
  constraints: readonly string[];
  media: readonly CaseStudyMedia[];
  /** Verified, client-approved outcomes only. Empty until confirmed. */
  results: readonly { label: string; value: string }[];
  lessons: readonly string[];
  ctaLabel: string;
};

/** Approved, publishable case studies. Empty by design — content required. */
export const caseStudies: readonly CaseStudy[] = [];

export type ExampleEngagement = {
  title: string;
  situation: string;
  approach: readonly string[];
  intendedOutcome: string;
};

export const exampleEngagements: readonly ExampleEngagement[] = [
  {
    title: "Reposition an established service company",
    situation:
      "A respected company presents itself online like a much smaller, newer business. The offer reads as a list of services, so prospects compare on price.",
    approach: [
      "Clarify the position and the buyer it speaks to",
      "Rewrite the offer around outcomes and proof",
      "Rebuild the site with a clear hierarchy and one obvious next step",
    ],
    intendedOutcome:
      "The digital presence matches the quality of the business, and the offer is understood without a sales call.",
  },
  {
    title: "Turn after-hours traffic into qualified inquiries",
    situation:
      "Interest arrives in the evening and overnight. The form is answered the next working day, and the fastest responder wins the work.",
    approach: [
      "Design an intake conversation that answers common questions",
      "Capture the context a human needs before replying",
      "Route by urgency and confirm the next step immediately",
    ],
    intendedOutcome:
      "Every inquiry receives an immediate, useful response and reaches the right person with context attached.",
  },
  {
    title: "Replace fragmented booking and follow-up steps",
    situation:
      "Booking lives in one tool, notes in another, follow-up in someone's inbox. Steps are repeated, and opportunities go quiet.",
    approach: [
      "Map the real path from inquiry to appointment",
      "Connect calendar, CRM, and messaging into one workflow",
      "Automate reminders, incomplete-form follow-up, and handoff",
    ],
    intendedOutcome:
      "One workflow from first message to confirmed appointment, with staff involved only where judgement is needed.",
  },
];

export const workPage = {
  label: "Selected work",
  headline: "Built to create a measurable change.",
  intro:
    "We publish work only when a client has approved it, including any numbers. Until then, the engagements below describe the kinds of problems we take on and how we approach them.",
  examplesLabel: "Built for real business problems",
  examplesNote:
    "Example engagements that illustrate our approach. These are not client results.",
  caseStudyNote:
    "Approved client case studies will appear here as clients agree to publication.",
} as const;
