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
    <section id="product" className="border-t border-[#E7E5E4] bg-[#F9F9F7] py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <div className="mb-14 max-w-2xl" data-reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-3.5 py-1 text-xs font-mono text-[#065F46] shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#059669] animate-pulse" />
            <span className="uppercase tracking-widest text-[11px] font-semibold">
              The Product
            </span>
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111827] leading-tight">
            One product, built for the ad traffic you&apos;re already paying for.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#57534E] leading-relaxed">
            Conversion Desk is the page your ads should land on instead of your homepage — built for a phone, answering every enquiry the moment it arrives.
          </p>
        </div>

        {/* 3 Core Cards Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {/* Card 1: A Page, Not a Homepage (Lead Card - Span 12 or 7) */}
          <div
            onMouseMove={handleMouseMove}
            data-reveal
            style={{ ["--reveal-delay" as string]: "100ms" }}
            className="spotlight-card group flex flex-col justify-between rounded-xl border border-[#E7E5E4] bg-white p-7 md:col-span-7 sm:p-9 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#065F46]/40 hover:shadow-md"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#ECFDF5] border border-[#A7F3D0] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[#065F46] font-semibold">
                  01 · Dedicated Page
                </span>
                <span className="font-mono text-xs text-[#78716C]">Phone-First Triage</span>
              </div>
              <h3 className="mt-6 font-serif text-2xl text-[#111827] transition-colors group-hover:text-[#065F46]">
                A Page, Not a Homepage
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#57534E]">
                One page, built for a phone, that your ads point to instead of your homepage. A button to call at the top, and a conversation already open underneath it — answering questions about your business and taking the caller&apos;s name and number before they wander off. Nobody gets sent looking for anything else.
              </p>
            </div>

            <div className="relative z-10 mt-8 rounded-lg border border-[#E7E5E4] bg-[#F9F9F7] p-4 transition-colors group-hover:border-[#A7F3D0]/70">
              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-[#059669] animate-pulse" />
                <span className="font-mono text-xs font-medium text-[#111827]">Live Conversation Flow</span>
                <span className="ml-auto font-mono text-xs text-[#065F46] font-semibold">Instant Triage</span>
              </div>
              <div className="mt-3 rounded border border-[#E7E5E4] bg-white p-3 text-xs leading-relaxed text-[#57534E]">
                <span className="text-[#111827] font-semibold">AI Assistant:</span> &quot;Thanks for calling — happy to help. Can I grab your name and what you&apos;re looking for? I can get you booked in, or connect you with the right person.&quot;
              </div>
            </div>
          </div>

          {/* Card 2: Every Enquiry Tracked (Span 5) */}
          <div
            onMouseMove={handleMouseMove}
            data-reveal
            style={{ ["--reveal-delay" as string]: "200ms" }}
            className="spotlight-card group flex flex-col justify-between rounded-xl border border-[#E7E5E4] bg-white p-7 md:col-span-5 sm:p-9 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#065F46]/40 hover:shadow-md"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#ECFDF5] border border-[#A7F3D0] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[#065F46] font-semibold">
                  02 · Attribution
                </span>
                <span className="font-mono text-xs text-[#78716C]">Google &amp; Meta CAPI</span>
              </div>
              <h3 className="mt-6 font-serif text-2xl text-[#111827] transition-colors group-hover:text-[#065F46]">
                Every Enquiry Tracked
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#57534E]">
                Every lead comes back tagged with the exact ad and keyword that produced it — including the ones who asked something and left without giving their name, which most systems never see at all.
              </p>
            </div>

            <div className="relative z-10 mt-8 space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between rounded border border-[#E7E5E4] bg-[#F9F9F7] p-2.5 transition-colors group-hover:border-[#A7F3D0]/70">
                <span className="text-[#111827]">GCLID &amp; UTM Keyword Stamp</span>
                <span className="rounded bg-[#ECFDF5] px-2 py-0.5 text-[11px] font-semibold text-[#065F46]">Captured</span>
              </div>
              <div className="flex items-center justify-between rounded border border-[#E7E5E4] bg-[#F9F9F7] p-2.5 transition-colors group-hover:border-[#A7F3D0]/70">
                <span className="text-[#111827]">Unsubmitted Query Triage</span>
                <span className="rounded bg-[#ECFDF5] px-2 py-0.5 text-[11px] font-semibold text-[#065F46]">Logged</span>
              </div>
            </div>
          </div>

          {/* Card 3: You're Alerted, Not Left Checking (Span 12) */}
          <div
            onMouseMove={handleMouseMove}
            data-reveal
            style={{ ["--reveal-delay" as string]: "250ms" }}
            className="spotlight-card group flex flex-col justify-between rounded-xl border border-[#E7E5E4] bg-white p-7 md:col-span-12 sm:p-9 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#065F46]/40 hover:shadow-md"
          >
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-[#ECFDF5] border border-[#A7F3D0] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[#065F46] font-semibold">
                    03 · Direct Notification
                  </span>
                  <span className="font-mono text-xs text-[#78716C]">Zero Dashboard Overhead</span>
                </div>
                <h3 className="mt-4 font-serif text-2xl text-[#111827] transition-colors group-hover:text-[#065F46]">
                  You&apos;re Alerted, Not Left Checking
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#57534E]">
                  The moment someone reaches out, you get their name, number, and what they said. No dashboard, no login — we tell you.
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3 font-mono text-xs">
                <div className="rounded border border-[#E7E5E4] bg-[#F9F9F7] px-4 py-3 text-center">
                  <div className="text-[#78716C]">Alert Latency</div>
                  <div className="font-bold text-[#065F46] text-sm mt-0.5">&lt; 3 Seconds</div>
                </div>
                <div className="rounded border border-[#E7E5E4] bg-[#F9F9F7] px-4 py-3 text-center">
                  <div className="text-[#78716C]">Lead Delivery</div>
                  <div className="font-bold text-[#111827] text-sm mt-0.5">Email &amp; Push</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Callout Block with Link to /product */}
        <div className="mt-8 rounded-xl border border-[#065F46]/30 bg-[#ECFDF5]/60 p-7 sm:p-9 shadow-xs" data-reveal>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <span className="font-mono text-xs uppercase tracking-widest text-[#065F46] font-semibold">
                Conversion Intelligence
              </span>
              <h3 className="mt-2 font-serif text-2xl sm:text-3xl text-[#111827]">
                Most chat widgets can tell you someone showed up. Very few can tell you which ad brought them.
              </h3>
              <p className="mt-2 text-sm sm:text-base leading-relaxed text-[#57534E]">
                See the complete feature specifications, pricing tiers, and attribution workflow on the dedicated product page.
              </p>
            </div>
            <Link
              href="/product"
              className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#065F46] px-5 py-3 text-sm font-medium text-white shadow-xs transition-all hover:bg-[#064E3B] active:scale-98"
            >
              <span>See the full product</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
