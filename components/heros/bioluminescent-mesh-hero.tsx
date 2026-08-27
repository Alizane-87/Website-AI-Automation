"use client";

import React from "react";

export function BioluminescentMeshHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#06080B] py-32 px-6 sm:px-16 text-[#F4F2EF] text-center">
      {/* Animated Bioluminescent Mesh Gradient Orbs */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-[#065F46] opacity-40 blur-[120px] animate-pulse" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 h-80 w-80 rounded-full bg-[#047857] opacity-30 blur-[140px] animate-pulse" />
      <div className="pointer-events-none absolute -bottom-20 left-1/3 h-96 w-96 rounded-full bg-[#1E293B] opacity-50 blur-[130px]" />

      <div className="relative mx-auto max-w-5xl space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-4 py-1.5 text-xs font-mono text-emerald-300 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Hero 07 · Bioluminescent Aurora Mesh</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-7xl font-normal tracking-tight text-white leading-tight max-w-4xl mx-auto">
          Quiet luxury engineering for high-ticket service companies.
        </h1>

        <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto font-sans leading-relaxed">
          Tactile editorial typography, zero-lag edge servers, and bespoke 24/7 AI employee triage that mirrors your voice.
        </p>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#pricing"
            className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 font-mono text-sm font-semibold text-black hover:opacity-90 transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)]"
          >
            Commission Your Build →
          </a>
        </div>
      </div>
    </section>
  );
}
