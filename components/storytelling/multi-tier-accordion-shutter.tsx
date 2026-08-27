"use client";

import React, { useRef, useState, useEffect } from "react";

export function MultiTierAccordionShutter() {
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
    <section ref={containerRef} className="border-b border-white/10 py-24 px-6 sm:px-16 bg-[#07090C] text-[#F4F2EF]">
      <div className="mx-auto max-w-4xl space-y-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/80 px-3.5 py-1 text-xs font-mono text-emerald-300">
          <span>Story 13 · Multi-Tier Accordion Shutter</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl text-white">Dynamic Shutter Exposure</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4" style={{ perspective: "1000px" }}>
          {["Sub-Second Ingestion", "AI Voice Triage", "Calendar Lock"].map((item, i) => (
            <div
              key={i}
              style={{
                transform: `rotateY(${((1 - progress) * 60).toFixed(0)}deg)`,
                transition: "transform 100ms ease-out",
              }}
              className="rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur-md shadow-2xl"
            >
              <div className="font-mono text-xs text-emerald-400">SHUTTER 0{i + 1}</div>
              <h3 className="font-serif text-lg text-white mt-2">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
