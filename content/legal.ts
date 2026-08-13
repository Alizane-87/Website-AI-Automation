/**
 * DRAFT LEGAL CONTENT — requires founder and legal review before launch.
 *
 * These drafts are deliberately conservative. Do not add jurisdiction,
 * compliance, or certification claims that have not been reviewed by counsel.
 *
 * Missing founder inputs are represented as `null` below rather than invented.
 * Pages render a neutral "to be confirmed" line whenever a value is null.
 */

export const legalIdentity: {
  /** Registered legal entity name, e.g. "Alizane Labs LLC". */
  entityName: string | null;
  /** Full business address used for legal and email notices. */
  address: string | null;
  /** Privacy contact mailbox. */
  privacyEmail: string | null;
  /** General contact mailbox. */
  contactEmail: string | null;
  /** Jurisdiction whose law governs the terms. */
  governingLaw: string | null;
  lastUpdated: string;
} = {
  entityName: null,
  address: null,
  privacyEmail: null,
  contactEmail: null,
  governingLaw: null,
  lastUpdated: "Pending founder approval",
};

export const pendingValueLabel = "To be confirmed before launch";

export type LegalSection = { heading: string; paragraphs: string[]; bullets?: string[] };

export const privacySections: LegalSection[] = [
  {
    heading: "Scope of this policy",
    paragraphs: [
      "This policy describes how Alizane Labs handles information collected through this website. It does not describe how an individual client configures data handling inside a system we build for them; that configuration is agreed with each client and documented in their service agreement.",
    ],
  },
  {
    heading: "Information collected on this website",
    paragraphs: [
      "We collect only what you submit and a minimal set of technical signals needed to operate the site.",
    ],
    bullets: [
      "Details you enter in the project intake form: name, work email, company, website URL, the nature of the work, what is not working today, the outcome you want, and optional budget range, timing, tools, and additional context.",
      "Your consent to be contacted about the project you described.",
      "Aggregate, privacy-conscious usage events such as which calls-to-action are clicked. These events do not include names, email addresses, or phone numbers.",
      "Standard server and security logs generated when a page or form endpoint is requested.",
    ],
  },
  {
    heading: "How the information is used",
    paragraphs: [
      "Submitted details are used to reply to your inquiry, to prepare that conversation, and to keep a record of the request. We do not sell website form submissions.",
    ],
  },
  {
    heading: "Service providers",
    paragraphs: [
      "The site is hosted by a third-party hosting provider, and form submissions are passed to a destination we control for notification and follow-up. Providers process this information on our behalf under their own terms.",
    ],
  },
  {
    heading: "Retention",
    paragraphs: [
      "Inquiry details are retained for as long as needed to respond and to keep a record of the conversation, then removed on request. The specific retention period is confirmed before launch.",
    ],
  },
  {
    heading: "Your choices",
    paragraphs: [
      "You may ask us what inquiry information we hold about you, ask for it to be corrected, or ask for it to be deleted. Requests go to the privacy contact listed below.",
    ],
  },
  {
    heading: "Cookies and analytics",
    paragraphs: [
      "The site does not set advertising cookies. Where analytics are enabled, events are aggregate and do not attach contact details to a visitor.",
    ],
  },
];

export const termsSections: LegalSection[] = [
  {
    heading: "About these terms",
    paragraphs: [
      "These terms govern use of this website. Project work is governed separately by a written agreement signed before work begins; nothing on this site forms an offer or a contract.",
    ],
  },
  {
    heading: "Information on this site",
    paragraphs: [
      "Descriptions of services, capabilities, and process are provided for information. Scope, timing, and price for any specific project are confirmed in writing after an assessment.",
    ],
  },
  {
    heading: "No guaranteed outcomes",
    paragraphs: [
      "We do not guarantee search rankings, traffic, conversion rates, revenue, or any other business result. Examples described as illustrative are not client results.",
    ],
  },
  {
    heading: "Intellectual property",
    paragraphs: [
      "The design, code, and content of this website belong to Alizane Labs unless stated otherwise. Ownership of deliverables produced for a client is set out in that client's agreement.",
    ],
  },
  {
    heading: "Third-party services and links",
    paragraphs: [
      "The site may link to third-party services. We do not control those services and are not responsible for their content or practices.",
    ],
  },
  {
    heading: "Liability",
    paragraphs: [
      "The website is provided as-is. To the extent permitted by law, Alizane Labs is not liable for loss arising from use of the website. This does not limit liability that cannot be limited by law.",
    ],
  },
  {
    heading: "Changes",
    paragraphs: [
      "These terms may be updated. The date below reflects the most recent revision.",
    ],
  },
];

export const aiDisclosureSections: LegalSection[] = [
  {
    heading: "How we use automation in client systems",
    paragraphs: [
      "We build automated assistants that answer questions, collect context, qualify inquiries, offer appointment times, and route opportunities to a person. Every deployment is configured with the client and reviewed before it goes live.",
    ],
  },
  {
    heading: "Principles we hold to",
    paragraphs: [
      "These constraints are designed into the workflows we build.",
    ],
    bullets: [
      "Automation should not conceal that someone is interacting with an automated system.",
      "Automation should not make consequential promises or provide regulated advice.",
      "A person is always reachable, and sensitive or high-value conversations are escalated.",
      "Automated replies work from approved material rather than improvising answers.",
      "Recording, transcription, or message retention is disclosed and configured per deployment.",
    ],
  },
];
