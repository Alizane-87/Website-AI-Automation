export interface Faq {
  question: string;
  answer: string;
}

export const homeFaqs: Faq[] = [
  {
    question: "Does this replace my website?",
    answer:
      "No — it installs on the site and number you already have. If you don't have a site yet, that's a separate conversation; this is about what happens when someone reaches out, not about building you a new one.",
  },
  {
    question: "How does Conversion Desk actually work?",
    answer:
      "It's one page your ads send people to. A button to call, and a conversation already open that answers questions about your business and takes down their details. If a call comes in and nobody picks up, it catches that too instead of letting it go to voicemail.",
  },
  {
    question: "What if it gets something wrong, or a caller wants a person?",
    answer:
      "It's built to capture, not to guess. Anything outside what it's configured for routes to you instead of it improvising.",
  },
  {
    question: "How much does this cost?",
    answer:
      "See current pricing on the Conversion Desk page, or ask the chat assistant here — it depends on what you need.",
  },
  {
    question: "Will this work with my existing phone number?",
    answer:
      "Usually, through call forwarding set up during onboarding. If your setup is unusual, we confirm compatibility before anything changes.",
  },
  {
    question: "What if I already have a chatbot or answering service?",
    answer:
      "Then you already know what the gap feels like when it doesn't quite work. We can usually run alongside it or replace it — worth a conversation either way.",
  },
  {
    question: "Can I cancel?",
    answer:
      "Month to month. If it's not worth what you're paying for it, you stop paying for it.",
  },
  {
    question: "Are you based overseas?",
    answer:
      "Yes — we are based in India and work with businesses internationally (across the US, UK, UAE, and beyond). You work directly with a dedicated person with direct same-day communication.",
  },
];
