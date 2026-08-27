"use client";

import React, { useRef, useState, useEffect } from "react";

export function CadToFacadeMorph() {
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
      <div className="mx-auto max-w-4xl space-y-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/80 px-3.5 py-1 text-xs font-mono text-emerald-300">
          <span>Story 12 · CAD Blueprint to Finished Facade</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl text-white">Structural Transformation</h2>

        <div className="relative h-64 w-full rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
          {/* Blueprint Layer */}
          <div className="absolute inset-0 bg-[#0C151D] p-8 flex flex-col justify-between text-left font-mono text-xs text-blue-300">
            <div>CAD STRUCTURAL BLUEPRINT · WIREFRAME MESH</div>
            <div className="text-gray-400">Zero Style Bloat · Pure Geometric Grid</div>
          </div>

          {/* Finished Facade Layer */}
          <div
            className="absolute inset-0 bg-gradient-to-tr from-[#065F46] to-[#047857] p-8 flex flex-col justify-between text-left text-white shadow-2xl transition-all"
            style={{ clipPath: `inset(0 0 0 ${(1 - progress) * 100}%)` }}
          >
            <div className="font-mono text-xs text-emerald-200">FINISHED DIGITAL STOREFRONT</div>
            <div className="font-serif text-2xl">280ms Edge Speed Verified</div>
          </div>
        </div>
      </div>
    </section>
  );
}
