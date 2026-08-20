"use client";

import React, { useState } from "react";

export function AiAutomationServices() {
  const [activeStep, setActiveStep] = useState(0);

  const demoSteps = [
    {
      title: "Inbound Lead Trigger",
      actor: "Website Webhook",
      detail: "Inbound inquiry received with contact details and project scope.",
      systemLine: "event.received { type: 'form_submission', source: 'website_edge', priority: 'high' }",
    },
    {
      title: "AI Voice & SMS Engagement",
      actor: "Retell AI Voice Agent",
      detail: "Autonomous voice assistant engages within 60 seconds to confirm requirements.",
      systemLine: "voice.dispatched { latency: '520ms', status: 'connected', qualification: 'verified' }",
    },
    {
      title: "CRM Sync & Calendar Booking",
      actor: "n8n → CRM Controller",
      detail: "Direct appointment inserted onto owner's calendar and CRM record updated.",
      systemLine: "crm.synced { provider: 'GHL/Jobber', booking: 'Confirmed', alert: 'SMS_sent' }",
    },
  ];

  return (
    <section id="automation" className="border-t border-[#E7E5E4] py-24 sm:py-32 bg-[#F9F9F7]">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-3.5 py-1 text-xs font-mono text-[#065F46] shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#059669] animate-pulse" />
            <span className="uppercase tracking-widest text-[11px] font-semibold">
              AI Automation Studio
            </span>
          </div>

          <h2 className="mt-4 font-serif text-3xl sm:text-5xl text-[#111827] leading-tight">
            AI Automation Services
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#57534E] leading-relaxed">
            We don&apos;t just build websites that look exceptional. We engineer autonomous AI voice, lead capture, and workflow machines that convert inbound attention into booked revenue around the clock.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Service 1: 60-Second AI Voice Dispatch */}
          <article className="flex flex-col justify-between rounded-xl border border-[#E7E5E4] bg-white p-8 shadow-xs transition-all hover:-translate-y-1 hover:shadow-md">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#ECFDF5] border border-[#A7F3D0] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[#065F46] font-semibold">
                  Pillar 01
                </span>
                <span className="font-mono text-xs text-[#78716C]">Retell AI · Deepgram</span>
              </div>

              <h3 className="mt-6 font-serif text-2xl text-[#111827]">
                60-Second AI Voice &amp; Dispatch Engines
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#57534E]">
                Autonomous voice assistants that instantly answer inbound calls, qualify project scope, answer service questions, and insert booked appointments directly into your calendar 24/7.
              </p>
            </div>

            <div className="mt-8 rounded-lg border border-[#E7E5E4] bg-[#F9F9F7] p-4 font-mono text-xs">
              <div className="flex items-center gap-2 text-[#065F46] font-semibold">
                <span className="h-2 w-2 rounded-full bg-[#059669] animate-pulse" />
                <span>Ultra-low Latency: ~520ms response</span>
              </div>
              <p className="mt-2 text-[#78716C]">
                &quot;Thanks for calling Apex. I see you requested an emergency HVAC dispatch. Can I confirm your address?&quot;
              </p>
            </div>
          </article>

          {/* Service 2: Autonomous n8n Workflow Architecture */}
          <article className="flex flex-col justify-between rounded-xl border border-[#E7E5E4] bg-white p-8 shadow-xs transition-all hover:-translate-y-1 hover:shadow-md">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#ECFDF5] border border-[#A7F3D0] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[#065F46] font-semibold">
                  Pillar 02
                </span>
                <span className="font-mono text-xs text-[#78716C]">n8n · REST APIs</span>
              </div>

              <h3 className="mt-6 font-serif text-2xl text-[#111827]">
                Autonomous CRM &amp; Workflow Architecture
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#57534E]">
                Centralized orchestration pipelines that connect your website directly to Jobber, ServiceTitan, GoHighLevel, HubSpot, or custom databases with zero manual data entry or missed leads.
              </p>
            </div>

            <div className="mt-8 space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between rounded border border-[#E7E5E4] bg-[#F9F9F7] p-2.5">
                <span className="text-[#111827]">1. Webhook Trigger</span>
                <span className="text-[#065F46] font-semibold">Captured</span>
              </div>
              <div className="flex items-center justify-between rounded border border-[#E7E5E4] bg-[#F9F9F7] p-2.5">
                <span className="text-[#111827]">2. AI Lead Qualification</span>
                <span className="text-[#065F46] font-semibold">Verified</span>
              </div>
              <div className="flex items-center justify-between rounded border border-[#E7E5E4] bg-[#F9F9F7] p-2.5">
                <span className="text-[#111827]">3. CRM Sync &amp; Owner SMS</span>
                <span className="text-[#D97706] font-semibold">Dispatched</span>
              </div>
            </div>
          </article>

          {/* Service 3: Open-Estimate & Pipeline Revival */}
          <article className="flex flex-col justify-between rounded-xl border border-[#E7E5E4] bg-white p-8 shadow-xs transition-all hover:-translate-y-1 hover:shadow-md">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#ECFDF5] border border-[#A7F3D0] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[#065F46] font-semibold">
                  Pillar 03
                </span>
                <span className="font-mono text-xs text-[#78716C]">Revenue Recovery</span>
              </div>

              <h3 className="mt-6 font-serif text-2xl text-[#111827]">
                Open-Estimate &amp; Pipeline Revival
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#57534E]">
                Over 60% of issued proposals die silently in CRMs without structured follow-up. We deploy intelligent 21-day multi-channel revival sequences that systematically monetize your quoted deals.
              </p>
            </div>

            <div className="mt-8 rounded-lg border border-[#A7F3D0] bg-[#ECFDF5] p-4 text-xs font-mono">
              <div className="text-[#065F46] font-semibold">AVERAGE REVIVAL SPRINT</div>
              <div className="mt-1 font-serif text-lg text-[#111827]">
                11–15% Lift in Closed Revenue
              </div>
              <div className="mt-2 text-[#57534E]">
                Multi-touch SMS + Voice check-in sequences
              </div>
            </div>
          </article>

          {/* Service 4: 24/7 Intelligent AI Website Employees */}
          <article className="flex flex-col justify-between rounded-xl border border-[#E7E5E4] bg-white p-8 shadow-xs transition-all hover:-translate-y-1 hover:shadow-md">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#ECFDF5] border border-[#A7F3D0] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[#065F46] font-semibold">
                  Pillar 04
                </span>
                <span className="font-mono text-xs text-[#78716C]">Conversational AI</span>
              </div>

              <h3 className="mt-6 font-serif text-2xl text-[#111827]">
                24/7 Intelligent AI Website Employees
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#57534E]">
                Embedded on-page AI assistants trained on your business pricing, service areas, and FAQs. They capture prospect phone numbers and book appointments while you are on the job site.
              </p>
            </div>

            <div className="mt-8 rounded-lg border border-[#E7E5E4] bg-[#F9F9F7] p-4 font-mono text-xs">
              <div className="flex items-center justify-between text-[#111827] font-semibold border-b border-[#E7E5E4] pb-2">
                <span>Direct Lead Capture</span>
                <span className="text-[#065F46]">Active 24/7</span>
              </div>
              <div className="mt-2 space-y-1 text-[#78716C]">
                <div>✓ Name &amp; Phone validation</div>
                <div>✓ Scope &amp; timeline qualification</div>
                <div>✓ Instant SMS notification to owner</div>
              </div>
            </div>
          </article>
        </div>

        {/* Interactive Live Workflow Trace Demo */}
        <div className="mt-16 rounded-xl border border-[#064E3B] bg-[#064E3B] p-8 sm:p-10 text-white shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-emerald-800/80 pb-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#34D399] font-semibold">
                Autonomous Workflow Execution
              </span>
              <h3 className="mt-2 font-serif text-2xl sm:text-3xl text-white">
                How the autonomous engine responds in real time
              </h3>
            </div>
            <span className="rounded-full bg-emerald-950/80 border border-emerald-700/60 px-3.5 py-1 font-mono text-xs text-emerald-300">
              Live System Trace
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Step Selectors */}
            <div className="space-y-3 lg:col-span-1">
              {demoSteps.map((step, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`w-full rounded-lg border p-4 text-left transition-all ${
                    activeStep === idx
                      ? "border-[#34D399] bg-emerald-900/60 text-white shadow-sm"
                      : "border-emerald-800/60 bg-emerald-950/40 text-emerald-200/70 hover:border-emerald-700 hover:text-white"
                  }`}
                >
                  <div className="font-mono text-xs text-[#34D399]">0{idx + 1} · {step.actor}</div>
                  <div className="mt-1 font-serif text-base text-white">{step.title}</div>
                </button>
              ))}
            </div>

            {/* Active Trace Terminal */}
            <div className="flex flex-col justify-between rounded-lg border border-emerald-800/80 bg-[#022C22] p-6 font-mono text-xs text-emerald-100 lg:col-span-2">
              <div>
                <div className="flex items-center justify-between border-b border-emerald-800/60 pb-3 text-[11px] text-emerald-400">
                  <span>TERMINAL LOG · STEP 0{activeStep + 1}</span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#34D399] animate-pulse" />
                    DISPATCH ENGINE ACTIVE
                  </span>
                </div>
                <div className="mt-4 text-sm text-white font-serif">
                  {demoSteps[activeStep].detail}
                </div>
                <div className="mt-4 rounded bg-black/40 p-4 text-xs text-[#34D399] border border-emerald-900">
                  &gt; {demoSteps[activeStep].systemLine}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-emerald-800/60 text-[11px] text-emerald-400/70">
                Connected to Next.js edge webhooks, Retell AI voice models, and n8n REST endpoints.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
