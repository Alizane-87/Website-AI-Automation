"use client";

import React, { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "What does the $99 a month cover?",
    a: "Hosting, keeping the site online and up to date, and two content changes a month — a new service, new photos, an updated phone number. Someone who answers when you need something changed, rather than a login and a manual.",
  },
  {
    q: "Why is there a build cost and a monthly?",
    a: "The build is the site. The monthly is us running it — hosting, updates, and changes when you need them. Most places charge you for the build and then leave you to work out the rest on your own.",
  },
  {
    q: "What if I stop paying the monthly?",
    a: "The site pauses until the invoice clears, then it goes straight back up. Your domain stays in your name throughout — that part never changes.",
  },
  {
    q: "I already have someone who does this.",
    a: "Then you're ahead of most. Worth asking one thing: how long does it take to get a phone number changed? The complaint we hear isn't about quality, it's about waiting three weeks.",
  },
  {
    q: "What's the chatbot actually do?",
    a: "It talks to people who land on your site, answers the usual questions, and takes their name, number and what they need. You get the details straight away, even when you can't get to your phone.",
  },
  {
    q: "Are you overseas?",
    a: "Yes — we're based in India, working with businesses in the U.S. You deal with a person and get answers the same day, not a ticket number.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" aria-labelledby="faq-heading" className="border-t border-[#E7E5E4] py-24 sm:py-32 bg-[#F9F9F7]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 flex flex-wrap items-baseline gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#065F46] font-semibold">
            FAQ
          </span>
          <h2 id="faq-heading" className="font-serif text-3xl sm:text-4xl text-[#111827]">
            The ones we get asked most
          </h2>
        </div>

        <div className="max-w-3xl border-t border-[#E7E5E4]">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-[#E7E5E4]">
                <button
                  type="button"
                  id={`faq-btn-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left font-serif text-lg sm:text-xl font-normal text-[#111827] transition-colors hover:text-[#065F46] focus-visible:outline-2 focus-visible:outline-[#065F46]"
                >
                  <span>{item.q}</span>
                  <span className="font-mono text-xl text-[#78716C]" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                    className="pb-6 text-[15.5px] leading-relaxed text-[#57534E]"
                  >
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
