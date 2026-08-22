"use client";

import React, { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "What does the monthly retainer cover?",
    a: "Hosting on high-speed edge infrastructure, domain security/SSL, keeping the site updated, and your monthly content changes — two on The Site, five on The Works and The Site That Answers — for a new service, new job photos, or updated phone numbers. A real person who answers when you need something changed, rather than a ticket queue.",
  },
  {
    q: "Why is there a build cost and a monthly fee?",
    a: "The build cost covers the custom design, editorial copywriting, and development of your site. The monthly fee covers us actively managing it — hosting, security, and making changes when you need them. Most agencies charge thousands upfront and then leave you to manage hosting and updates alone.",
  },
  {
    q: "What if I ever want to leave or stop paying?",
    a: "Every plan is month-to-month with no lock-in contracts. Your domain remains 100% in your name from day one and stays with you wherever you go.",
  },
  {
    q: "I already have someone who manages our website.",
    a: "Then you are ahead of most. It is always worth asking one simple question: how long does it take them to make a quick update? The most common complaint we hear from business owners isn't about design quality — it's waiting three weeks for a simple phone number update.",
  },
  {
    q: "How does the 24/7 AI employee work?",
    a: "Depending on your plan, our intelligent AI systems answer visitor chats on your website or answer phone calls 24/7. They answer common questions using your exact business knowledge, qualify the caller, and either book appointments onto your calendar or text you their details immediately. The phone plan includes 100 call minutes every month (~50 customer calls), with extra minutes billed at a simple ~25¢/min.",
  },
  {
    q: "Are you based overseas?",
    a: "Yes — we are based in India and work with businesses internationally (across the US, UK, UAE, and beyond). You work directly with a dedicated person with direct same-day communication.",
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
