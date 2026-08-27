"use client";

import React, { useState, useEffect } from "react";

interface TerminalAuditHeroProps {
  headline?: string;
  subheadline?: string;
  badge?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function TerminalAuditHero({
  headline = "Websites engineered to close before the second ring.",
  subheadline = "Sub-second Next.js architecture paired with 24/7 AI employee dispatch. Zero missed calls. Zero monthly friction.",
  badge = "⚡ 280ms Edge Speed Verified",
  ctaText = "Get Your Build Plan",
  ctaHref = "#pricing",
}: TerminalAuditHeroProps) {
  const [latency, setLatency] = useState(24);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(Math.random() * 8) + 21);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#0A0D10] py-24 sm:py-32 px-6 sm:px-16 text-[#F4F2EF]">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-3.5 py-1 font-mono text-xs text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{badge}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-normal leading-[1.1] tracking-tight text-white">
            {headline}
          </h1>

          <p className="text-base sm:text-lg text-gray-400 max-w-xl font-sans leading-relaxed">
            {subheadline}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={ctaHref}
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 font-mono text-sm font-semibold text-black shadow-lg hover:bg-emerald-400 transition-all active:scale-95"
            >
              <span>{ctaText}</span>
              <span>→</span>
            </a>
            <span className="font-mono text-xs text-gray-500">No lock-in · 100/100 Core Web Vitals Guaranteed</span>
          </div>
        </div>

        {/* Right Column: Speed Audit Terminal Gauge */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-white/15 bg-black/80 p-6 shadow-2xl backdrop-blur-xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs text-gray-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                SYSTEM TELEMETRY
              </span>
              <span>EDGE: US-EAST (VERCEL)</span>
            </div>

            {/* Core Web Vitals Gauge */}
            <div className="flex items-center justify-around py-2">
              <div className="text-center">
                <div className="relative inline-flex items-center justify-center">
                  <svg className="h-24 w-24 -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.1)" strokeWidth="6" fill="none" />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#10B981"
                      strokeWidth="6"
                      strokeDasharray="251.2"
                      strokeDashoffset="0"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                  <span className="absolute font-mono text-2xl font-bold text-emerald-400">100</span>
                </div>
                <div className="mt-2 font-mono text-[11px] text-gray-400 uppercase">Performance</div>
              </div>

              <div className="space-y-2 text-left font-mono text-xs">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-1">
                  <span className="text-gray-400">TTFB:</span>
                  <span className="text-emerald-400 font-semibold">{latency}ms</span>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-1">
                  <span className="text-gray-400">FCP:</span>
                  <span className="text-emerald-400 font-semibold">0.28s</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-gray-400">Speed Index:</span>
                  <span className="text-emerald-400 font-semibold">0.4s</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-emerald-950/40 border border-emerald-500/30 p-3 font-mono text-xs text-emerald-300 flex items-center justify-between">
              <span>✓ Speed-to-Lead Protocol</span>
              <span className="font-bold">3.8s Response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
