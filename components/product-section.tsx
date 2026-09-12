"use client";

import React, { useCallback } from "react";
import Link from "next/link";

export function ProductSection() {
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  }, []);

  return (
    <section id="products" className="scroll-mt-16 border-t border-[#E7E5E4] bg-[#F9F9F7] py-20 sm:py-28">
      {/* Anchor back-compatibility for #product */}
      <span id="product" className="sr-only" />

      <div className="mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <div className="mb-14 max-w-2xl" data-reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-3.5 py-1 text-xs font-mono text-[#065F46] shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#059669]" />
            <span className="uppercase tracking-widest text-[11px] font-semibold">
              The Products
            </span>
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111827] leading-tight">
            Two ways to add AI to how leads reach you.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#57534E] leading-relaxed">
            Start with chat on the site you have, or go further with a dedicated page built for your ad traffic.
          </p>
        </div>

        {/* 2 Product Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Card 1: Conversion Chat */}
          <div
            onMouseMove={handleMouseMove}
            data-reveal
            style={{ ["--reveal-delay" as string]: "100ms" }}
            className="spotlight-card group flex flex-col justify-between rounded-xl border border-[#E7E5E4] bg-white p-7 sm:p-9 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#065F46]/40 hover:shadow-md"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-full bg-[#ECFDF5] border border-[#A7F3D0] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[#065F46] font-semibold">
                  01 · On-Site Chat
                </span>
                <span className="rounded bg-[#ECFDF5] border border-[#A7F3D0] px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[#065F46]">
                  Available now
                </span>
              </div>

              <h3 className="mt-6 font-serif text-2xl sm:text-3xl text-[#111827] transition-colors group-hover:text-[#065F46]">
                Conversion Chat
              </h3>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#57534E]">
                AI chat for the website you already have. Answers questions using your business&apos;s own information, captures a name and number before someone leaves without saying anything, and alerts you the moment a lead comes in.
              </p>

              {/* Specimen Badges */}
              <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-[#E7E5E4] pt-5 text-xs font-mono text-[#78716C]">
                <span className="rounded border border-[#E7E5E4] bg-[#F9F9F7] px-2.5 py-1">
                  1-script tag setup
                </span>
                <span className="rounded border border-[#E7E5E4] bg-[#F9F9F7] px-2.5 py-1">
                  14 days free trial
                </span>
                <span className="rounded border border-[#E7E5E4] bg-[#F9F9F7] px-2.5 py-1">
                  Monthly email report
                </span>
              </div>
            </div>

            <div className="relative z-10 mt-8 border-t border-[#E7E5E4] pt-6">
              <Link
                href="/conversion-chat"
                className="group/btn inline-flex items-center gap-2 text-sm font-medium text-[#065F46] hover:text-[#064E3B] transition-colors"
              >
                <span>See Conversion Chat</span>
                <span className="transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* Card 2: Conversion Desk */}
          <div
            onMouseMove={handleMouseMove}
            data-reveal
            style={{ ["--reveal-delay" as string]: "200ms" }}
            className="spotlight-card group flex flex-col justify-between rounded-xl border border-[#E7E5E4] bg-white p-7 sm:p-9 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#065F46]/40 hover:shadow-md"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-full bg-[#F5F5F4] border border-[#E7E5E4] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[#78716C] font-semibold">
                  02 · Ad Landing Page
                </span>
                <span className="rounded bg-[#F5F5F4] border border-[#E7E5E4] px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[#78716C]">
                  Launching soon
                </span>
              </div>

              <h3 className="mt-6 font-serif text-2xl sm:text-3xl text-[#111827] transition-colors group-hover:text-[#065F46]">
                Conversion Desk
              </h3>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#57534E]">
                A dedicated page your ads point to instead of your homepage — built for a phone, with every click-to-call and chat enquiry tracked back to its ad.
              </p>

              {/* Specimen Badges */}
              <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-[#E7E5E4] pt-5 text-xs font-mono text-[#78716C]">
                <span className="rounded border border-[#E7E5E4] bg-[#F9F9F7] px-2.5 py-1">
                  Mobile-first standalone page
                </span>
                <span className="rounded border border-[#E7E5E4] bg-[#F9F9F7] px-2.5 py-1">
                  Meta CAPI per-ad attribution
                </span>
                <span className="rounded border border-[#E7E5E4] bg-[#F9F9F7] px-2.5 py-1">
                  Google Ads click-to-call conversion tracking
                </span>
              </div>
            </div>

            <div className="relative z-10 mt-8 border-t border-[#E7E5E4] pt-6">
              <Link
                href="/product"
                className="group/btn inline-flex items-center gap-2 text-sm font-medium text-[#065F46] hover:text-[#064E3B] transition-colors"
              >
                <span>See Conversion Desk</span>
                <span className="transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Closing Callout Block with Link to /pricing */}
        <div className="mt-10 rounded-xl border border-[#065F46]/30 bg-[#ECFDF5]/60 p-7 sm:p-9 shadow-xs" data-reveal>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-widest text-[#065F46] font-semibold">
                Transparent Pricing
              </span>
              <h3 className="mt-2 font-serif text-2xl sm:text-3xl text-[#111827]">
                Compare features, trial terms, and setup options.
              </h3>
              <p className="mt-2 text-sm text-[#57534E] leading-relaxed">
                Conversion Chat is live today with a 14-day free trial. Conversion Desk is open for early trial list reservations.
              </p>
            </div>
            <Link
              href="/pricing"
              className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#065F46] px-6 py-3.5 text-sm font-medium text-white shadow-xs transition-all hover:bg-[#064E3B] active:scale-98"
            >
              <span>See full pricing</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
