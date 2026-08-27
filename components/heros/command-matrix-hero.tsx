"use client";

import React, { useState, useEffect } from "react";

const DISPATCH_EVENTS = [
  { time: "09:14:02 PM", text: "INBOUND VOICE: $4,500 Main Sewer Line" },
  { time: "09:14:06 PM", text: "AI TRIAGE: Address Verified & Qualified" },
  { time: "09:14:38 PM", text: "CALENDAR: Locked 08:30 AM Tomorrow" },
  { time: "09:14:40 PM", text: "DISPATCH: SMS Sent to Lead Tech John" },
];

export function CommandMatrixHero() {
  const [eventIndex, setEventIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setEventIndex((prev) => (prev + 1) % DISPATCH_EVENTS.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#080B0E] py-24 px-6 sm:px-16 text-[#F4F2EF]">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/70 px-3.5 py-1 text-xs font-mono text-emerald-300">
            <span>Hero 08 · Command Matrix Dispatch</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight text-white leading-tight">
            The 24/7 Autonomous Lead-to-Cash Command Center.
          </h1>

          <p className="text-base sm:text-lg text-gray-400 font-sans leading-relaxed">
            Real-time automated call handling, instant dispatch SMS tickets, and continuous review loops running silently in the background.
          </p>

          <div className="pt-2">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 font-mono text-sm font-semibold text-black hover:bg-emerald-400 transition-all shadow-lg"
            >
              <span>Launch Command Center</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Live Command Stream UI */}
        <div className="lg:col-span-5 rounded-2xl border border-white/15 bg-black/90 p-6 shadow-2xl space-y-4 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 text-gray-400">
            <span className="text-emerald-400 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              LIVE DISPATCH FEED
            </span>
            <span>PORT: 443</span>
          </div>

          <div className="space-y-2">
            {DISPATCH_EVENTS.map((event, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-lg border transition-all ${
                  idx === eventIndex
                    ? "border-emerald-500/60 bg-emerald-950/50 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.25)]"
                    : "border-white/5 bg-white/5 text-gray-400"
                }`}
              >
                <div className="text-[10px] text-gray-500">{event.time}</div>
                <div className="mt-1 font-semibold">{event.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
