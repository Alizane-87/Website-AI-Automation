"use client";

import React, { useCallback } from "react";

export function BentoCapabilities() {
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  }, []);

  const handleOpenChat = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("alizane:open-chat"));
  };

  return (
    <section id="capabilities" className="border-t border-[#E7E5E4] bg-[#F9F9F7] py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <div className="mb-14 max-w-2xl" data-reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-3.5 py-1 text-xs font-mono text-[#065F46] shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#059669] animate-pulse" />
            <span className="uppercase tracking-widest text-[11px] font-semibold">
              What It Actually Does
            </span>
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111827] leading-tight">
            AI that answers, qualifies, and follows up — so a slow response never costs you the customer.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#57534E] leading-relaxed">
            It doesn&apos;t replace your team. It catches what happens before your team gets involved — the call at 9pm, the follow-up nobody got to, the visitor who almost left without saying anything.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {/* Pillar 01: AI Call Answering (Lead Pillar - Span 7) */}
          <div
            onMouseMove={handleMouseMove}
            data-reveal
            style={{ ["--reveal-delay" as string]: "100ms" }}
            className="spotlight-card group flex flex-col justify-between rounded-xl border border-[#E7E5E4] bg-white p-7 md:col-span-7 sm:p-9 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#065F46]/40 hover:shadow-md"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#ECFDF5] border border-[#A7F3D0] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[#065F46] font-semibold">
                  Pillar 01 · Lead Pillar
                </span>
                <span className="font-mono text-xs text-[#78716C]">24/7 Phone Answering</span>
              </div>
              <h3 className="mt-6 font-serif text-2xl text-[#111827] transition-colors group-hover:text-[#065F46]">
                AI Call Answering
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#57534E]">
                Every call gets answered — not routed to voicemail, not left ringing while your team is heads-down or off the clock. The AI answers immediately, asks what you&apos;d ask, and either books straight onto your calendar or gets the details to the right person right away.
              </p>
            </div>

            <div className="relative z-10 mt-8 rounded-lg border border-[#E7E5E4] bg-[#F9F9F7] p-4 transition-colors group-hover:border-[#A7F3D0]/70">
              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-[#059669] animate-pulse" />
                <span className="font-mono text-xs font-medium text-[#111827]">Live Voice Sample</span>
                <span className="ml-auto font-mono text-xs text-[#065F46] font-semibold">Conversational Latency: &lt;600ms</span>
              </div>
              <div className="mt-3 rounded border border-[#E7E5E4] bg-white p-3 text-xs leading-relaxed text-[#57534E]">
                <span className="text-[#111827] font-semibold">AI Assistant:</span> &quot;Thanks for calling — happy to help. Can I grab your name and what you&apos;re looking for? I can get you booked in, or connect you with the right person.&quot;
              </div>
            </div>
          </div>

          {/* Pillar 02: AI Chat On The Site You Already Have (Span 5) */}
          <div
            onMouseMove={handleMouseMove}
            data-reveal
            style={{ ["--reveal-delay" as string]: "200ms" }}
            className="spotlight-card group flex flex-col justify-between rounded-xl border border-[#E7E5E4] bg-white p-7 md:col-span-5 sm:p-9 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#065F46]/40 hover:shadow-md"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#ECFDF5] border border-[#A7F3D0] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[#065F46] font-semibold">
                  Pillar 02
                </span>
                <span className="font-mono text-xs text-[#78716C]">Embedded Widget</span>
              </div>
              <h3 className="mt-6 font-serif text-2xl text-[#111827] transition-colors group-hover:text-[#065F46]">
                AI Chat, On the Site You Already Have
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#57534E]">
                A chat widget goes on your existing site — the one you already have, the one your customers already know. It answers questions, qualifies who&apos;s serious, and gets contact details before they close the tab.
              </p>
            </div>

            <div className="relative z-10 mt-8 rounded-lg border border-[#E7E5E4] bg-[#F9F9F7] p-4 transition-colors group-hover:border-[#A7F3D0]/70">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#78716C]">Live On This Page</span>
                <button
                  type="button"
                  onClick={handleOpenChat}
                  className="rounded bg-[#ECFDF5] border border-[#A7F3D0] px-2.5 py-1 font-mono text-xs text-[#065F46] font-semibold hover:bg-[#D1FAE5] transition-colors cursor-pointer"
                >
                  Test Chat Assistant →
                </button>
              </div>
              <p className="mt-2.5 font-mono text-[11px] text-[#57534E]">
                That&apos;s the exact experience a visitor to your site would get.
              </p>
            </div>
          </div>

          {/* Pillar 03: Instant Lead Alerts (Span 5) */}
          <div
            onMouseMove={handleMouseMove}
            data-reveal
            style={{ ["--reveal-delay" as string]: "150ms" }}
            className="spotlight-card group flex flex-col justify-between rounded-xl border border-[#E7E5E4] bg-white p-7 md:col-span-5 sm:p-9 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#065F46]/40 hover:shadow-md"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#ECFDF5] border border-[#A7F3D0] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[#065F46] font-semibold">
                  Pillar 03
                </span>
                <span className="font-mono text-xs text-[#78716C]">Direct SMS Dispatch</span>
              </div>
              <h3 className="mt-6 font-serif text-2xl text-[#111827] transition-colors group-hover:text-[#065F46]">
                Instant Lead Alerts
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#57534E]">
                The second someone fills out a form, asks for a callback, or finishes a chat, their details go straight to your phone by text. No dashboard to check, no email to dig through.
              </p>
            </div>

            <div className="relative z-10 mt-8 space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between rounded border border-[#E7E5E4] bg-[#F9F9F7] p-2.5 transition-colors group-hover:border-[#A7F3D0]/70">
                <span className="text-[#111827]">Form filled / Chat completed</span>
                <span className="rounded bg-[#ECFDF5] px-2 py-0.5 text-[11px] font-semibold text-[#065F46]">Instant</span>
              </div>
              <div className="flex items-center justify-between rounded border border-[#E7E5E4] bg-[#F9F9F7] p-2.5 transition-colors group-hover:border-[#A7F3D0]/70">
                <span className="text-[#111827]">SMS alert sent to your phone</span>
                <span className="rounded bg-[#ECFDF5] px-2 py-0.5 text-[11px] font-semibold text-[#065F46]">&lt; 3 Sec</span>
              </div>
            </div>
          </div>

          {/* Pillar 04: Automated Follow-Up on Leads (Span 7) */}
          <div
            onMouseMove={handleMouseMove}
            data-reveal
            style={{ ["--reveal-delay" as string]: "250ms" }}
            className="spotlight-card group flex flex-col justify-between rounded-xl border border-[#E7E5E4] bg-white p-7 md:col-span-7 sm:p-9 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#065F46]/40 hover:shadow-md"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#ECFDF5] border border-[#A7F3D0] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[#065F46] font-semibold">
                  Pillar 04
                </span>
                <span className="font-mono text-xs text-[#78716C]">Lead Revival Sequence</span>
              </div>
              <h3 className="mt-6 font-serif text-2xl text-[#111827] transition-colors group-hover:text-[#065F46]">
                Automated Follow-Up on Leads
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#57534E]">
                Most inquiries go quiet — not a &quot;no,&quot; just life getting in the way. Instead of that opportunity disappearing, the system checks back on a schedule over the following weeks: a text, then another, spaced out to read as helpful, not desperate.
              </p>
            </div>

            <div className="relative z-10 mt-8 rounded-lg border border-[#E7E5E4] bg-[#F9F9F7] p-4 font-mono text-xs text-[#57534E]">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E7E5E4] pb-2.5">
                <span className="text-[#111827] font-semibold">Spaced Multi-Touch Nudges</span>
                <span className="rounded bg-[#ECFDF5] text-[#065F46] px-2 py-0.5 text-[11px] font-semibold">Automated Cadence</span>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[11px]">
                <div className="rounded border border-[#E7E5E4] bg-white p-2">
                  <div className="text-[#78716C]">Day 1</div>
                  <div className="font-semibold text-[#111827] mt-0.5">Quick Check-in</div>
                </div>
                <div className="rounded border border-[#E7E5E4] bg-white p-2">
                  <div className="text-[#78716C]">Day 4</div>
                  <div className="font-semibold text-[#111827] mt-0.5">Question Triage</div>
                </div>
                <div className="rounded border border-[#E7E5E4] bg-white p-2">
                  <div className="text-[#78716C]">Day 14</div>
                  <div className="font-semibold text-[#111827] mt-0.5">Final Courtesy</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5th Connection Card: How It All Connects */}
        <div className="mt-6 rounded-xl border border-[#065F46]/30 bg-[#ECFDF5]/60 p-7 sm:p-9 shadow-xs" data-reveal>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <span className="font-mono text-xs uppercase tracking-widest text-[#065F46] font-semibold">
                Unified Automation Architecture
              </span>
              <h3 className="mt-2 font-serif text-2xl sm:text-3xl text-[#111827]">
                How It All Connects
              </h3>
              <p className="mt-2 text-sm sm:text-base leading-relaxed text-[#57534E]">
                Underneath, it&apos;s one system — the call, the chat, the alerts, and the follow-ups are working off the same record, not four separate tools you have to keep in sync yourself.
              </p>
            </div>
            <a
              href="/pricing#start"
              className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#065F46] px-5 py-3 text-sm font-medium text-white shadow-xs transition-all hover:bg-[#064E3B] active:scale-98"
            >
              <span>Get your automation plan</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
