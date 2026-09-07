"use client";

import React, { useCallback } from "react";
import { HeroSection } from "@/components/hero-section";
import { TheGapSection } from "@/components/the-gap-section";
import { ProductSection } from "@/components/product-section";
import { FaqAccordion } from "@/components/faq-accordion";
import Link from "next/link";

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

      {/* 2. THE GAP SECTION */}
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
                  The prompts, the routing rules, the alert timing — someone who knows your business adjusts them when something&apos;s off. You ask for a change; you don&apos;t go find a setting.
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
                  Your number, your site, your existing setup. Nothing to migrate, nothing to switch off first.
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

      {/* 4. THE PRODUCTS (CONVERSION CHAT & CONVERSION DESK) */}
      <ProductSection />

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
                  We set up your page.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#57534E]">
                  The Conversion Desk page, the chat, the alert routing — configured for your business specifically. You see it before any of it is live.
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
                  Try it yourself. Once you&apos;re satisfied, it goes live — nothing to migrate, nothing changes for your customers except that someone answers now.
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
                  Real enquiries surface things a script can&apos;t predict. Someone adjusts it when they do — you ask, it gets fixed, not filed as a ticket.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <FaqAccordion />

      {/* 7. GET STARTED CTA */}
      <section id="start" className="border-t border-[#E7E5E4] py-20 sm:py-28 bg-[#F9F9F7]">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-2xl border border-[#065F46]/30 bg-[#ECFDF5]/60 p-8 sm:p-14 shadow-xs text-center max-w-3xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-widest text-[#065F46] font-semibold">
              Get Started
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111827]">
              Start catching the leads you already paid for.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#57534E] max-w-xl mx-auto leading-relaxed">
              Try Conversion Chat free for 14 days on the site you already have, or explore our transparent pricing plans.
            </p>
            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <Link
                href="/conversion-chat"
                className="inline-flex items-center gap-2 rounded-md bg-[#065F46] px-6 py-3.5 text-sm font-medium text-white shadow-xs transition-all hover:bg-[#064E3B] active:scale-98"
              >
                <span>Try Conversion Chat free →</span>
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center rounded-md border border-[#D6D3D1] bg-white px-6 py-3.5 text-sm font-medium text-[#111827] shadow-2xs transition-all hover:border-[#111827] hover:bg-[#F9F9F7]"
              >
                View pricing tiers →
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-xs font-mono text-[#78716C]">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#059669]" />
                14-day free trial on chat
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#059669]" />
                Zero lock-in contracts
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
