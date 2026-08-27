"use client";

import React, { useRef, useState, useEffect } from "react";

const CHAPTERS = [
  {
    num: "01",
    title: "Sub-Second Ingestion",
    desc: "Mobile visits load in 280ms on Cloudflare edge network, cutting bounce rates from 72% down to 14%.",
    telemetry: "STATUS: 280ms · 100/100 CORE WEB VITALS",
  },
  {
    num: "02",
    title: "24/7 AI Qualification",
    desc: "AI receptionist answers calls in 3.8 seconds, verifies scope, and sends SMS photo requests to homeowner.",
    telemetry: "STATUS: 3.8s RESPONSE · GEMINI FLASH AI",
  },
  {
    num: "03",
    title: "Direct Calendar Sync",
    desc: "Confirmed jobs lock directly into contractor calendar with SMS notifications and GPS directions.",
    telemetry: "STATUS: DISPATCH LOCKED · SMS TICKET SENT",
  },
];

export function SplitScreenDirector() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeChapter, setActiveChapter] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh - rect.top) / (rect.height + vh)));
      setActiveChapter(Math.min(CHAPTERS.length - 1, Math.floor(p * CHAPTERS.length)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="border-b border-white/10 py-24 px-6 sm:px-16 bg-[#080B0E] text-[#F4F2EF]">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Chapters */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/80 px-3.5 py-1 text-xs font-mono text-emerald-300">
            <span>Story 05 · Split-Screen Director</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-white">The Lead-to-Cash Symphony</h2>

          <div className="space-y-4 pt-4">
            {CHAPTERS.map((ch, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border transition-all ${
                  idx === activeChapter
                    ? "border-emerald-500/50 bg-emerald-950/40 text-white shadow-xl"
                    : "border-white/10 bg-white/5 text-gray-400"
                }`}
              >
                <div className="font-mono text-xs text-emerald-400 font-bold">PHASE {ch.num}</div>
                <h3 className="font-serif text-xl text-white mt-1">{ch.title}</h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-2">{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Dynamic Scrubbing Telemetry Screen */}
        <div className="lg:col-span-6">
          <div className="rounded-3xl border border-white/20 bg-black/90 p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs text-emerald-400">
              <span>● DIRECTOR PREVIEW</span>
              <span>PHASE {CHAPTERS[activeChapter].num} OF 03</span>
            </div>

            <div className="h-44 rounded-2xl border border-emerald-500/30 bg-emerald-950/30 p-6 flex flex-col justify-center text-center space-y-2">
              <div className="font-serif text-2xl text-white font-bold">{CHAPTERS[activeChapter].title}</div>
              <div className="font-mono text-xs text-emerald-300">{CHAPTERS[activeChapter].telemetry}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
