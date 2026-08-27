"use client";

import React, { useRef, useState, useEffect } from "react";

const STRATA = [
  {
    altitudeFt: 10000,
    tag: "STRATUM 01 · 10,000 FT",
    layer: "Surface Traffic Stratosphere",
    title: "Inbound High-Intent Search Capture",
    desc: "Google Local Services Ads, localized SEO rankings, and Google Maps clicks hitting sub-second edge CDN nodes worldwide.",
    specs: ["280ms Edge Delivery", "0% DNS Latency", "Global Multi-Region"],
    accent: "text-blue-400 border-blue-500/40 bg-blue-950/40",
    glow: "shadow-[0_0_30px_rgba(59,130,246,0.25)]",
    icon: "📡",
  },
  {
    altitudeFt: 5000,
    tag: "STRATUM 02 · 5,000 FT",
    layer: "Neural Intelligence Stratum",
    title: "24/7 AI Receptionist & Voice Triage",
    desc: "Autonomous conversational agent answering on the first ring, verifying emergency scope, checking zip codes, and sending SMS photo requests.",
    specs: ["3.8s Speed-to-Lead", "Natural Speech Synthesis", "Instant Audio Transcription"],
    accent: "text-emerald-400 border-emerald-500/40 bg-emerald-950/40",
    glow: "shadow-[0_0_30px_rgba(16,185,129,0.25)]",
    icon: "⚡",
  },
  {
    altitudeFt: 0,
    tag: "STRATUM 03 · SEA LEVEL",
    layer: "The Subterranean Revenue Vault",
    title: "Locked Calendars & Compounding Reviews",
    desc: "Direct Outlook/Google Calendar synchronization, real-time SMS dispatch tickets to lead technicians, and automated 5-star Google review loops.",
    specs: ["Zero Missed Calls", "Automated 21-Day Retainers", "12X Net ROI"],
    accent: "text-amber-400 border-amber-500/40 bg-amber-950/40",
    glow: "shadow-[0_0_30px_rgba(245,158,11,0.25)]",
    icon: "🏦",
  },
];

export function AltitudeCameraFlight() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeStratum, setActiveStratum] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh - rect.top) / (rect.height + vh)));
      setProgress(p);
      setActiveStratum(Math.min(STRATA.length - 1, Math.floor(p * STRATA.length)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentAltitude = Math.round(10000 - progress * 10000);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden border-b border-white/10 py-28 px-6 sm:px-16 text-[#F4F2EF] transition-colors duration-500"
      style={{
        background: `radial-gradient(ellipse at 50% 30%, rgba(${Math.round(6 + progress * 5)}, ${Math.round(30 + progress * 40)}, ${Math.round(40 - progress * 20)}, 0.3), #06080B 80%)`,
      }}
    >
      {/* Background Altitude Coordinate Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "100% 48px",
        }}
      />

      <div className="mx-auto max-w-5xl space-y-12">
        {/* Top Header & Telemetry Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-white/10 pb-6">
          <div className="text-center sm:text-left space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/80 px-3.5 py-1 text-xs font-mono text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Story 04 · Vertical Altitude Flight</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-white">Descent Through the Alizane Stack</h2>
          </div>

          {/* Altimeter Telemetry HUD */}
          <div className="rounded-2xl border border-white/15 bg-black/80 p-4 font-mono text-xs shadow-2xl space-y-1 text-right shrink-0">
            <div className="text-[10px] text-gray-400">FLIGHT TELEMETRY HUD</div>
            <div className="text-xl sm:text-2xl font-bold text-emerald-400 tabular-nums">
              ALT: {currentAltitude.toLocaleString()} FT
            </div>
            <div className="text-[10px] text-gray-400">DESCENT RATE: -1,200 FT/MIN</div>
          </div>
        </div>

        {/* 3 Altitude Strata Cards */}
        <div className="space-y-8">
          {STRATA.map((stratum, idx) => {
            const isCurrent = idx === activeStratum;
            return (
              <div
                key={idx}
                onClick={() => setActiveStratum(idx)}
                className={`relative rounded-3xl border p-8 transition-all duration-500 cursor-pointer ${
                  isCurrent
                    ? `${stratum.accent} ${stratum.glow} scale-[1.02] shadow-2xl backdrop-blur-md`
                    : "border-white/10 bg-white/5 opacity-50 hover:opacity-80"
                }`}
              >
                {/* Stratum Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold">
                    <span className="text-xl">{stratum.icon}</span>
                    <span>{stratum.tag}</span>
                    <span className="text-gray-400">· {stratum.layer}</span>
                  </div>
                  <span className="rounded bg-black/60 px-3 py-1 font-mono text-[10px] text-gray-300">
                    {isCurrent ? "● ACTIVE STRATUM" : "CLICK TO FOCUS"}
                  </span>
                </div>

                {/* Stratum Content */}
                <div className="mt-6 space-y-4">
                  <h3 className="font-serif text-2xl sm:text-3xl text-white">{stratum.title}</h3>
                  <p className="text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed">{stratum.desc}</p>

                  {/* Feature Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {stratum.specs.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="rounded-lg border border-white/10 bg-black/40 px-3 py-1 font-mono text-xs text-emerald-200"
                      >
                        ✓ {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
