"use client";

import React, { useCallback } from "react";
import { HeroSection } from "@/components/hero-section";
import { TheGapSection } from "@/components/the-gap-section";
import { BentoCapabilities } from "@/components/bento-capabilities";
import { PricingPlans } from "@/components/pricing-plans";
import { FaqAccordion } from "@/components/faq-accordion";
import { ContactSection } from "@/components/contact-section";

export default function HomePage() {
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  }, []);

  return (
    <div className="bg-[#F9F9F7] text-[#111827] font-sans antialiased selection:bg-[#A7F3D0] selection:text-[#065F46]">
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. THE GAP SECTION (REPLACES WEBSITE SLIDER) */}
      <TheGapSection />

      {/* 3. WHY US SECTION */}
      <section id="why" className="border-t border-[#E7E5E4] py-24 sm:py-32 bg-[#F9F9F7]">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 flex flex-wrap items-baseline gap-4" data-reveal>
            <span className="font-mono text-xs uppercase tracking-widest text-[#065F46] font-semibold">
              Why us
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111827]">
              Not a DIY chatbot tool. Not a call center.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <article
              onMouseMove={handleMouseMove}
              data-reveal
              style={{ ["--reveal-delay" as string]: "100ms" }}
              className="spotlight-card group rounded-xl border border-[#E7E5E4] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#065F46]/40 hover:shadow-md flex flex-col justify-between"
            >
              <div className="relative z-10">
                <span className="font-mono text-xs font-semibold text-[#065F46]">01 · Custom Tuning</span>
                <h3 className="font-serif text-2xl text-[#111827] mt-3 mb-3 transition-colors group-hover:text-[#065F46]">
                  Someone tunes it, not a login
                </h3>
                <p className="text-sm leading-relaxed text-[#57534E]">
                  The prompts, the routing rules, the follow-up timing — someone who knows your business adjusts them when something&apos;s off. You ask for a change; you don&apos;t go find a setting.
                </p>
              </div>
            </article>

            {/* Card 2 */}
            <article
              onMouseMove={handleMouseMove}
              data-reveal
              style={{ ["--reveal-delay" as string]: "200ms" }}
              className="spotlight-card group rounded-xl border border-[#E7E5E4] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#065F46]/40 hover:shadow-md flex flex-col justify-between"
            >
              <div className="relative z-10">
                <span className="font-mono text-xs font-semibold text-[#065F46]">02 · Seamless Integration</span>
                <h3 className="font-serif text-2xl text-[#111827] mt-3 mb-3 transition-colors group-hover:text-[#065F46]">
                  Works with what you&apos;ve already got
                </h3>
                <p className="text-sm leading-relaxed text-[#57534E]">
                  Your number, your site, your calendar, your CRM if you have one. Nothing to migrate, nothing to switch off first.
                </p>
              </div>
            </article>

            {/* Card 3 */}
            <article
              onMouseMove={handleMouseMove}
              data-reveal
              style={{ ["--reveal-delay" as string]: "300ms" }}
              className="spotlight-card group rounded-xl border border-[#E7E5E4] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#065F46]/40 hover:shadow-md flex flex-col justify-between"
            >
              <div className="relative z-10">
                <span className="font-mono text-xs font-semibold text-[#065F46]">03 · Zero Overhead</span>
                <h3 className="font-serif text-2xl text-[#111827] mt-3 mb-3 transition-colors group-hover:text-[#065F46]">
                  Nothing to manage
                </h3>
                <p className="text-sm leading-relaxed text-[#57534E]">
                  No dashboard to check, no software to update, no uptime to monitor. It just runs.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 4. WHAT IT ACTUALLY DOES (CAPABILITIES) */}
      <BentoCapabilities />

      {/* 5. PROCESS SECTION */}
      <section id="process" className="border-t border-[#E7E5E4] py-24 sm:py-32 bg-[#F9F9F7]">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 flex flex-wrap items-baseline gap-4" data-reveal>
            <span className="font-mono text-xs uppercase tracking-widest text-[#065F46] font-semibold">
              Process
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111827]">
              What happens after you say yes
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <article
              onMouseMove={handleMouseMove}
              data-reveal
              style={{ ["--reveal-delay" as string]: "100ms" }}
              className="spotlight-card group rounded-xl border border-[#E7E5E4] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#065F46]/40 hover:shadow-md"
            >
              <div className="relative z-10">
                <span className="font-mono text-xs text-[#065F46] font-semibold">01</span>
                <h3 className="mt-3 font-serif text-2xl text-[#111827] transition-colors group-hover:text-[#065F46]">
                  A conversation.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#57534E]">
                  Twenty minutes on how your phone actually gets answered today, and where leads currently go quiet.
                </p>
              </div>
            </article>

            <article
              onMouseMove={handleMouseMove}
              data-reveal
              style={{ ["--reveal-delay" as string]: "200ms" }}
              className="spotlight-card group rounded-xl border border-[#E7E5E4] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#065F46]/40 hover:shadow-md"
            >
              <div className="relative z-10">
                <span className="font-mono text-xs text-[#065F46] font-semibold">02</span>
                <h3 className="mt-3 font-serif text-2xl text-[#111827] transition-colors group-hover:text-[#065F46]">
                  We build the flow.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#57534E]">
                  The call script, the chat, the follow-up timing — configured for your business specifically. You hear it and read it before any of it is live.
                </p>
              </div>
            </article>

            <article
              onMouseMove={handleMouseMove}
              data-reveal
              style={{ ["--reveal-delay" as string]: "150ms" }}
              className="spotlight-card group rounded-xl border border-[#E7E5E4] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#065F46]/40 hover:shadow-md"
            >
              <div className="relative z-10">
                <span className="font-mono text-xs text-[#065F46] font-semibold">03</span>
                <h3 className="mt-3 font-serif text-2xl text-[#111827] transition-colors group-hover:text-[#065F46]">
                  You test it, then we flip it on.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#57534E]">
                  Call it yourself. Once you&apos;re satisfied, it goes live on your existing number and site — nothing to migrate, nothing changes for your customers except who picks up.
                </p>
              </div>
            </article>

            <article
              onMouseMove={handleMouseMove}
              data-reveal
              style={{ ["--reveal-delay" as string]: "250ms" }}
              className="spotlight-card group rounded-xl border border-[#E7E5E4] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#065F46]/40 hover:shadow-md"
            >
              <div className="relative z-10">
                <span className="font-mono text-xs text-[#065F46] font-semibold">04</span>
                <h3 className="mt-3 font-serif text-2xl text-[#111827] transition-colors group-hover:text-[#065F46]">
                  We keep tuning it.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#57534E]">
                  Real calls surface things a script can&apos;t predict. Someone adjusts it when they do — you ask, it gets fixed, not filed as a ticket.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 6. PRICING (BUILT AROUND WHAT YOU ACTUALLY NEED) */}
      <PricingPlans />

      {/* 7. FAQ SECTION */}
      <FaqAccordion />

      {/* 8. GET YOUR AUTOMATION PLAN (REQUIREMENTS FORM) */}
      <ContactSection />
    </div>
  );
}
