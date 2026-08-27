"use client";

import React from "react";

interface RadarCircuitHeroProps {
  headline?: string;
  subheadline?: string;
}

export function RadarCircuitHero({
  headline = "24/7 AI Radar Dispatch for High-Volume Contractors.",
  subheadline = "Never let an after-hours emergency call slip into voicemail. Our neural radar triage answers before the second ring and locks the calendar.",
}: RadarCircuitHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#080B0E] py-28 px-6 sm:px-16 text-[#F4F2EF]">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/70 px-3.5 py-1 text-xs font-mono text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Hero 03 · Radar Circuit Constellation</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight text-white leading-tight">
            {headline}
          </h1>

          <p className="text-base sm:text-lg text-gray-400 font-sans leading-relaxed">
            {subheadline}
          </p>

          <div className="pt-2 flex items-center gap-4">
            <a
              href="#pricing"
              className="rounded-lg bg-emerald-500 px-6 py-3 font-mono text-sm font-semibold text-black hover:bg-emerald-400 transition-all shadow-lg"
            >
              Deploy 24/7 Radar Triage →
            </a>
          </div>
        </div>

        {/* Radar Sweep Interactive Display */}
        <div className="lg:col-span-6 flex items-center justify-center">
          <div className="relative h-72 w-72 sm:h-96 sm:w-96 rounded-full border border-emerald-500/20 bg-black/60 shadow-2xl flex items-center justify-center overflow-hidden">
            {/* Concentric Radar Rings */}
            <div className="absolute inset-8 rounded-full border border-emerald-500/15" />
            <div className="absolute inset-20 rounded-full border border-emerald-500/20" />
            <div className="absolute inset-32 rounded-full border border-emerald-500/30" />

            {/* Radar Sweep Needle */}
            <div
              className="absolute inset-0 origin-center animate-spin"
              style={{
                animationDuration: "4s",
                background: "conic-gradient(from 0deg, rgba(16, 185, 129, 0.4) 0deg, transparent 60deg)",
              }}
            />

            {/* Active Nodes */}
            <div className="absolute top-1/4 left-1/3 flex items-center gap-1">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="rounded bg-black/80 px-1.5 py-0.5 font-mono text-[9px] text-emerald-300">
                INBOUND: $4,200 HVAC
              </span>
            </div>

            <div className="absolute bottom-1/3 right-1/4 flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="rounded bg-black/80 px-1.5 py-0.5 font-mono text-[9px] text-emerald-300">
                QUALIFIED: 3.8s
              </span>
            </div>

            {/* Center Radar Transmitter Core */}
            <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-emerald-400 bg-emerald-950 text-emerald-200 font-mono text-xs font-bold shadow-[0_0_20px_rgba(16,185,129,0.5)]">
              AI
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
