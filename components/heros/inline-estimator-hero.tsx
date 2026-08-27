"use client";

import React, { useState } from "react";

export function InlineEstimatorHero() {
  const [ticket, setTicket] = useState(2500);
  const [missedCalls, setMissedCalls] = useState(6);

  const annualLoss = ticket * missedCalls * 12;
  const recoveredAnnual = Math.round(annualLoss * 0.75);

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#0A0D10] py-24 px-6 sm:px-16 text-[#F4F2EF]">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/80 px-3.5 py-1 text-xs font-mono text-emerald-300">
            <span>Hero 06 · Inline ROI Estimator</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight text-white leading-tight">
            Calculate your missed-call revenue leakage.
          </h1>

          <p className="text-base sm:text-lg text-gray-400 font-sans leading-relaxed">
            Every unanswered after-hours phone call is a ticket handed directly to your competitor. Adjust the sliders to see what you recover.
          </p>
        </div>

        {/* Live Interactive ROI Calculator Card */}
        <div className="lg:col-span-6 rounded-3xl border border-white/20 bg-black/80 p-8 shadow-2xl space-y-6">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between font-mono text-xs text-gray-300 mb-1">
                <span>Average Job Ticket</span>
                <span className="text-emerald-400 font-bold">${ticket.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={500}
                max={10000}
                step={250}
                value={ticket}
                onChange={(e) => setTicket(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between font-mono text-xs text-gray-300 mb-1">
                <span>Missed / After-Hours Calls / Mo</span>
                <span className="text-emerald-400 font-bold">{missedCalls} calls</span>
              </div>
              <input
                type="range"
                min={1}
                max={25}
                value={missedCalls}
                onChange={(e) => setMissedCalls(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>
          </div>

          {/* Real-time Math Output */}
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/40 p-6 text-center">
            <div className="font-mono text-xs uppercase tracking-widest text-emerald-300">
              Annual Revenue Recoverable with Alizane
            </div>
            <div className="mt-2 font-serif text-4xl sm:text-5xl text-emerald-400 font-bold">
              +${recoveredAnnual.toLocaleString()}
            </div>
            <div className="mt-2 text-xs font-mono text-gray-400">
              Investment: $599/mo ({(recoveredAnnual / (599 * 12)).toFixed(1)}x Guaranteed ROI)
            </div>
          </div>

          <a
            href="#pricing"
            className="block text-center rounded-xl bg-emerald-500 py-3.5 font-mono text-sm font-semibold text-black hover:bg-emerald-400 transition-all shadow-lg"
          >
            Lock in $59/mo Offer →
          </a>
        </div>
      </div>
    </section>
  );
}
