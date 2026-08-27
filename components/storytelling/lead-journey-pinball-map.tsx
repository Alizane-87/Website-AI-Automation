"use client";

import React, { useRef, useState, useEffect } from "react";

export function LeadJourneyPinballMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh - rect.top) / (rect.height + vh)));
      setActiveStep(Math.min(3, Math.floor(p * 4)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="border-b border-white/10 py-24 px-6 sm:px-16 bg-[#07090C] text-[#F4F2EF]">
      <div className="mx-auto max-w-5xl space-y-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/80 px-3.5 py-1 text-xs font-mono text-emerald-300">
          <span>Story 09 · Lead Journey Circuit Route</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl text-white">The Lead Transit Path</h2>

        {/* 4-Node Pinball Circuit */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-6">
          {["1. Search Ad Hit", "2. AI Qualification", "3. Calendar Dispatch", "4. Bank Vault Deposit"].map((node, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-6 font-mono text-xs transition-all ${
                i <= activeStep
                  ? "border-emerald-400 bg-emerald-950/60 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] scale-105"
                  : "border-white/10 bg-white/5 text-gray-500"
              }`}
            >
              <div className="text-2xl mb-2">{i <= activeStep ? "⚡" : "○"}</div>
              <div className="font-bold">{node}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
