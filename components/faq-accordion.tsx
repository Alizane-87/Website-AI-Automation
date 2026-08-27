"use client";

import React, { useState } from "react";
import { homeFaqs } from "@/content/faqs";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" aria-labelledby="faq-heading" className="border-t border-[#E7E5E4] py-24 sm:py-32 bg-[#F9F9F7]">
      <div className="mx-auto max-w-5xl px-6" data-reveal>
        <div className="mb-12 flex flex-wrap items-baseline gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#065F46] font-semibold">
            FAQ
          </span>
          <h2 id="faq-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111827]">
            The ones we get asked most
          </h2>
        </div>

        <div className="max-w-3xl border-t border-[#E7E5E4]">
          {homeFaqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-[#E7E5E4]">
                <button
                  type="button"
                  id={`faq-btn-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left font-serif text-lg sm:text-xl font-normal text-[#111827] transition-colors hover:text-[#065F46] focus-visible:outline-2 focus-visible:outline-[#065F46] cursor-pointer"
                >
                  <span>{item.question}</span>
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
                    {item.answer}
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
