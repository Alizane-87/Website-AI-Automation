export interface Faq {
  question: string;
  answer: string;
}

export const homeFaqs: Faq[] = [
  {
    question: "Does this replace my website?",
    answer:
      "No — it installs on the site and number you already have. If you don't have a site yet, that's a separate conversation; this is about what happens when someone calls or messages, not about building you a new one.",
  },
  {
    question: "How does the AI actually answer calls?",
    answer:
      "It picks up immediately and has a conversation, not a phone tree — asks what you'd ask, then books the job or gets the details to your team right away. Callers are told up front they're talking with an automated assistant.",
  },
  {
    question: "What if it gets something wrong, or a caller wants a person?",
    answer:
      "It's built to hand off, not guess. Anything outside what it's configured for — an upset caller, a question it can't answer — routes to your team instead of the AI improvising.",
  },
  {
    question: "How much does this cost?",
    answer:
      "It depends on call volume, how many systems it needs to plug into, and which pieces you need — answering, chat, follow-up, or all three. Send your setup through the form or ask the chat assistant, and you'll get real numbers back, not a generic range.",
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
