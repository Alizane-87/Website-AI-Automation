/**
 * About content. Founder, team, location, and company history are business
 * facts — anything not confirmed lives in `content/claims.ts` as `null` and is
 * never invented here.
 */

export const aboutPage = {
  eyebrow: "About",
  headline: "A small studio for consequential digital work.",
  metaTitle: "About — A Small Studio for Consequential Digital Work",
  metaDescription:
    "Alizane Labs brings strategy, copy, interface design, development, and automation into one focused process — fewer handoffs, clearer decisions, one coherent system.",
  intro: [
    "Alizane Labs was created around a simple belief: the way a business presents itself and the way it responds to opportunity should not be designed separately.",
    "We bring strategy, copy, interface design, development, and automation into one focused process. That creates fewer handoffs, clearer decisions, and a finished system that feels coherent from the first impression to the final action.",
  ],
  beliefs: {
    label: "What we believe",
    items: [
      {
        title: "Clarity outperforms decoration",
        body: "A visitor who understands the offer in seconds is worth more than an effect they remember and cannot explain.",
      },
      {
        title: "The experience and the operations are one design",
        body: "What a customer sees and what happens after they act are the same system. Designing them apart is where most projects lose value.",
      },
      {
        title: "Automation must have a job",
        body: "If a workflow does not save time, improve response, or make the next action easier, it should not exist.",
      },
      {
        title: "Evidence over adjectives",
        body: "We would rather show a working system than describe an ambition. We publish results only when a client has approved them.",
      },
    ],
  },
  howWeWork: {
    label: "How we work",
    items: [
      "Small team, direct contact with the people doing the work.",
      "One decision per stage, so the project keeps moving.",
      "Written definitions before implementation, so scope is visible.",
      "Content separated from code, so your team can maintain the result.",
    ],
  },
  notDoing: {
    label: "What we do not do",
    items: [
      "Resell templates with a new colour palette.",
      "Ship automation that pretends to be a person.",
      "Publish invented metrics, logos, or case studies.",
      "Add tracking that a visitor has not consented to.",
      "Take on work where automation would harm the customer experience.",
    ],
  },
  communication: {
    label: "Working together",
    items: [
      {
        title: "Who you work with",
        body: "The people who design and build the system are the people you talk to. No account layer in between.",
      },
      {
        title: "How communication happens",
        body: "Written decisions, a shared preview URL that always reflects the current build, and calls when a conversation is genuinely faster.",
      },
      {
        title: "What quality means here",
        body: "It works on a phone on a poor connection, it works with a keyboard, it is legible, it loads quickly, and the next step is obvious.",
      },
    ],
  },
} as const;
