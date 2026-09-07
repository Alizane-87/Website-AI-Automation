"use client";

import React, { useCallback } from "react";

const WORKFLOW_STEPS = [
  {
    num: "01",
    label: "Capture",
    tag: "Immediate Response",
    summary:
      "Every chat gets a response immediately, day or night, and calls that would've gone to voicemail get caught instead.",
    meta: "24/7/365 · Zero Voicemail Dropoff",
  },
  {
    num: "02",
    label: "Qualify",
    tag: "Intelligent Triage",
    summary:
      "Collects what you'd actually ask: what they need, any relevant details, how urgent it is, new contact or existing.",
    meta: "Custom Guardrails & Intent Parsing",
  },
  {
    num: "03",
    label: "Alert",
    tag: "Instant Notification",
    summary:
      "Gets you the details within seconds — not sitting in a form you have to remember to check.",
    meta: "Direct Dispatch Within Seconds",
  },
];

export function TheGapSection() {
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  }, []);

  return (
    <section className="border-t border-[#E7E5E4] py-20 sm:py-28 bg-[#F5F5F4]/70">
      <div className="mx-auto max-w-5xl px-6" data-reveal>
        {/* Header Block */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-3.5 py-1 text-xs font-mono text-[#065F46] shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#059669]" />
            <span className="uppercase tracking-widest text-[11px] font-semibold">
              The Gap
            </span>
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111827] leading-tight">
            A missed call doesn&apos;t feel like a lost lead. It just feels like Tuesday.
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#57534E]">
            Nobody sees the moment it happens. A call comes in mid-meeting, or at 7pm, or on a Saturday. It rings out, or hits voicemail, or a message says someone will call back. The person on the other end doesn&apos;t wait — they move to the next name on the list. There&apos;s no missed-opportunity report to check. Just a quieter month than it should&apos;ve been.
          </p>
        </div>

        {/* Workflow Timeline Block */}
        <div className="mt-14 border-t border-[#E7E5E4] pt-12">
          <div className="flex flex-wrap items-baseline justify-between gap-4 mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#111827]">
              How it actually works
            </h3>
            <span className="font-mono text-xs text-[#78716C]">
              3-Step Automated Execution Cycle
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {WORKFLOW_STEPS.map((step, idx) => (
              <div
                key={step.num}
                onMouseMove={handleMouseMove}
                style={{ ["--reveal-delay" as string]: `${(idx + 1) * 100}ms` }}
                className="spotlight-card group flex flex-col justify-between rounded-xl border border-[#E7E5E4] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#065F46]/40 hover:shadow-md"
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between border-b border-[#E7E5E4] pb-3">
                    <span className="font-mono text-xs font-semibold text-[#065F46]">
                      {step.num} · {step.label}
                    </span>
                    <span className="rounded bg-[#ECFDF5] border border-[#A7F3D0] px-2 py-0.5 font-mono text-[10px] text-[#065F46] font-medium">
                      {step.tag}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-[#57534E]">
                    {step.summary}
                  </p>
                </div>

                <div className="relative z-10 mt-6 border-t border-[#E7E5E4] pt-3">
                  <span className="font-mono text-[11px] text-[#78716C]">
                    {step.meta}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verification / Pre-Launch Tuning Guarantee */}
        <div className="mt-12 rounded-xl border border-[#E7E5E4] bg-white p-7 sm:p-9 shadow-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-widest text-[#065F46] font-semibold">
                Rigorous Pre-Launch Verification
              </span>
              <p className="mt-2 text-sm sm:text-base leading-relaxed text-[#111827]">
                Before it&apos;s live, we run it through the situations that actually come up for your business — a routine request, someone in a hurry, someone who just wants quick information, an obvious robocall. You hear it work before a customer does.
              </p>
            </div>
            <a
              href="#product"
              className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#065F46] px-5 py-2.5 text-xs font-medium text-white transition-colors hover:bg-[#064E3B]"
            >
              <span>See the product</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
