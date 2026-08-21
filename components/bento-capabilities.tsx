"use client";

import React from "react";

export function BentoCapabilities() {
  return (
    <section id="capabilities" className="border-t border-[#E7E5E4] bg-[#F9F9F7] py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-3.5 py-1 text-xs font-mono text-[#065F46] shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#059669] animate-pulse" />
            <span className="uppercase tracking-widest text-[11px] font-semibold">
              What We Build For You
            </span>
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl text-[#111827] leading-tight">
            Websites and automated systems that bring work in.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#57534E] leading-relaxed">
            We don&apos;t just build clean websites. We connect the phone answering, quote follow-up, and lead routing so you never lose a customer to a slow response.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {/* Card 1: Custom High-Performance Website (Span 7) */}
          <div className="flex flex-col justify-between rounded-xl border border-[#E7E5E4] bg-white p-7 md:col-span-7 sm:p-9 shadow-xs">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#ECFDF5] border border-[#A7F3D0] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[#065F46] font-semibold">
                  Pillar 01
                </span>
                <span className="font-mono text-xs text-[#78716C]">Fast &amp; Mobile-First</span>
              </div>
              <h3 className="mt-6 font-serif text-2xl text-[#111827]">
                Custom Design &amp; Instant Loading
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#57534E]">
                A clean, bespoke website built to make your business look like the clear leader in your area. Fast on every device, easy for customers to navigate, and built to turn visitors into phone calls.
              </p>
            </div>

            <div className="mt-8 rounded-lg border border-[#E7E5E4] bg-[#F9F9F7] p-5">
              <div className="flex items-center justify-between border-b border-[#E7E5E4] pb-3 text-xs font-mono text-[#78716C]">
                <span>BUILT FOR SPEED &amp; MOBILITY</span>
                <span className="rounded bg-[#ECFDF5] border border-[#A7F3D0] px-2 py-0.5 font-mono text-[11px] font-semibold text-[#065F46]">
                  Optimized
                </span>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-3 text-center">
                <div className="rounded border border-[#E7E5E4] bg-white p-3">
                  <div className="font-mono text-xs text-[#78716C]">Speed</div>
                  <div className="mt-1 font-mono text-sm font-semibold text-[#111827]">Fast &amp; Clean</div>
                </div>
                <div className="rounded border border-[#E7E5E4] bg-white p-3">
                  <div className="font-mono text-xs text-[#78716C]">Layout</div>
                  <div className="mt-1 font-mono text-sm font-semibold text-[#111827]">Mobile-First</div>
                </div>
                <div className="rounded border border-[#E7E5E4] bg-white p-3">
                  <div className="font-mono text-xs text-[#78716C]">Structure</div>
                  <div className="mt-1 font-mono text-sm font-semibold text-[#111827]">SEO Ready</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: 24/7 AI Voice Answering (Span 5) */}
          <div className="flex flex-col justify-between rounded-xl border border-[#E7E5E4] bg-white p-7 md:col-span-5 sm:p-9 shadow-xs">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#ECFDF5] border border-[#A7F3D0] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[#065F46] font-semibold">
                  Pillar 02
                </span>
                <span className="font-mono text-xs text-[#78716C]">24/7 Phone Assistant</span>
              </div>
              <h3 className="mt-6 font-serif text-2xl text-[#111827]">
                Instant AI Call Answering
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#57534E]">
                An intelligent phone assistant that answers customer calls within seconds, answers common questions about your services, and books appointments onto your calendar while you are working.
              </p>
            </div>

            <div className="mt-8 rounded-lg border border-[#E7E5E4] bg-[#F9F9F7] p-4">
              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-[#059669] animate-pulse" />
                <span className="font-mono text-xs font-medium text-[#111827]">Live Call Answering</span>
                <span className="ml-auto font-mono text-xs text-[#065F46] font-semibold">Always Active</span>
              </div>
              <div className="mt-3 rounded border border-[#E7E5E4] bg-white p-3 text-xs text-[#57534E]">
                <span className="text-[#111827] font-semibold">AI Assistant:</span> &quot;Thanks for calling Apex. We can have a technician at your property today — would 2:00 PM or 4:00 PM suit you best?&quot;
              </div>
            </div>
          </div>

          {/* Card 3: Automatic Lead Routing (Span 5) */}
          <div className="flex flex-col justify-between rounded-xl border border-[#E7E5E4] bg-white p-7 md:col-span-5 sm:p-9 shadow-xs">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#ECFDF5] border border-[#A7F3D0] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[#065F46] font-semibold">
                  Pillar 03
                </span>
                <span className="font-mono text-xs text-[#78716C]">Zero Manual Work</span>
              </div>
              <h3 className="mt-6 font-serif text-2xl text-[#111827]">
                Instant Lead Delivery &amp; Alerts
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#57534E]">
                Whenever someone fills in a form or requests a callback, their name, number, and job details go straight to your phone by text message. No lost emails, no missed jobs.
              </p>
            </div>

            <div className="mt-8 space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between rounded border border-[#E7E5E4] bg-[#F9F9F7] p-2.5">
                <span className="text-[#111827]">1. Customer submits quote request</span>
                <span className="rounded bg-[#ECFDF5] px-2 py-0.5 text-[11px] font-semibold text-[#065F46]">Instant</span>
              </div>
              <div className="flex items-center justify-between rounded border border-[#E7E5E4] bg-[#F9F9F7] p-2.5">
                <span className="text-[#111827]">2. Details checked &amp; validated</span>
                <span className="rounded bg-[#ECFDF5] px-2 py-0.5 text-[11px] font-semibold text-[#065F46]">Verified</span>
              </div>
              <div className="flex items-center justify-between rounded border border-[#E7E5E4] bg-[#F9F9F7] p-2.5">
                <span className="text-[#111827]">3. Text alert sent to your phone</span>
                <span className="rounded bg-[#ECFDF5] px-2 py-0.5 text-[11px] font-semibold text-[#065F46]">Alerted</span>
              </div>
            </div>
          </div>

          {/* Card 4: Automatic Quote Follow-Up (Span 7) */}
          <div className="flex flex-col justify-between rounded-xl border border-[#E7E5E4] bg-white p-7 md:col-span-7 sm:p-9 shadow-xs">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#ECFDF5] border border-[#A7F3D0] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[#065F46] font-semibold">
                  Client Retention
                </span>
                <span className="font-mono text-xs text-[#78716C]">Automated Check-Ins</span>
              </div>
              <h3 className="mt-6 font-serif text-2xl text-[#111827]">
                Automatic Quote Follow-Up
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#57534E]">
                Most customers who ask for a quote get busy and forget to respond. Our system sends polite, automated check-ins over 21 days to win back jobs you already spent time quoting on.
              </p>
            </div>

            <div className="mt-8 rounded-lg border border-[#E7E5E4] bg-[#F9F9F7] p-5">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="font-mono text-xs text-[#78716C]">RESULTS FROM FOLLOW-UP SPRINT (EXAMPLE)</div>
                  <div className="mt-1 font-serif text-2xl font-normal text-[#111827]">11–15% More Jobs Won</div>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#57534E]">
                  <span className="rounded border border-[#E7E5E4] bg-white px-2.5 py-1">SMS</span>
                  <span>+</span>
                  <span className="rounded border border-[#E7E5E4] bg-white px-2.5 py-1">Phone</span>
                  <span>+</span>
                  <span className="rounded border border-[#E7E5E4] bg-white px-2.5 py-1">Calendar</span>
                </div>
              </div>
              <p className="mt-3 border-t border-[#E7E5E4] pt-2.5 font-mono text-[11px] text-[#78716C]">
                *Illustrative example based on structured 21-day multi-touch follow-up sequences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
