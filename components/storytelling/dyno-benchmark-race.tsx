"use client";

import React, { useRef, useState, useEffect } from "react";

export function DynoBenchmarkRace() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh - rect.top) / (rect.height + vh)));
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="border-b border-white/10 py-24 px-6 sm:px-16 bg-[#080B0E] text-[#F4F2EF]">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/80 px-3.5 py-1 text-xs font-mono text-emerald-300">
            <span>Story 08 · Speed Dyno Drag Race</span>
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl text-white">The Head-to-Head Velocity Audit</h2>
        </div>

        <div className="space-y-6">
          {/* Race Track 1: Old Agency */}
          <div className="rounded-2xl border border-red-500/30 bg-red-950/20 p-6 space-y-2">
            <div className="flex justify-between font-mono text-xs text-red-400">
              <span>TRADITIONAL WORDPRESS SITE</span>
              <span>6.8s CHOKE (72% BOUNCE)</span>
            </div>
            <div className="h-4 w-full rounded-full bg-black/60 overflow-hidden">
              <div
                className="h-full bg-red-500 transition-all duration-100"
                style={{ width: `${Math.min(30, progress * 30)}%` }}
              />
            </div>
          </div>

          {/* Race Track 2: Alizane Engine */}
          <div className="rounded-2xl border border-emerald-500/40 bg-emerald-950/30 p-6 space-y-2 shadow-2xl">
            <div className="flex justify-between font-mono text-xs text-emerald-400">
              <span>ALIZANE EDGE ARCHITECTURE</span>
              <span>280ms FINISH (100/100 SPEED)</span>
            </div>
            <div className="h-4 w-full rounded-full bg-black/60 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-100 shadow-[0_0_15px_#34D399]"
                style={{ width: `${Math.min(100, progress * 130)}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
