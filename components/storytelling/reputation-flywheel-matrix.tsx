"use client";

import React, { useRef, useState, useEffect } from "react";

export function ReputationFlywheelMatrix() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [spin, setSpin] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh - rect.top) / (rect.height + vh)));
      setSpin(p * 720);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="border-b border-white/10 py-24 px-6 sm:px-16 bg-[#06080B] text-[#F4F2EF]">
      <div className="mx-auto max-w-5xl text-center space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/80 px-3.5 py-1 text-xs font-mono text-emerald-300">
          <span>Story 15 · 5-Star Reputation Momentum Flywheel</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl text-white">The Self-Accelerating Flywheel</h2>

        <div className="relative mx-auto h-72 w-72 flex items-center justify-center">
          <div
            style={{ transform: `rotate(${spin}deg)` }}
            className="absolute inset-0 rounded-full border-4 border-dashed border-emerald-500/40 transition-transform duration-75 flex items-center justify-center"
          >
            <div className="h-44 w-44 rounded-full border border-emerald-400/30" />
          </div>
          <div className="relative z-10 text-center font-mono text-xs">
            <div className="text-3xl">⭐ 5.0</div>
            <div className="text-emerald-400 font-bold mt-1">FLYWHEEL</div>
          </div>
        </div>
      </div>
    </section>
  );
}
