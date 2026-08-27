"use client";

import React, { useRef, useState, useEffect } from "react";

export function XRayScannerWipe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scanPos, setScanPos] = useState(50);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh - rect.top) / (rect.height + vh)));
      setScanPos(p * 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="border-b border-white/10 py-24 px-6 sm:px-16 bg-[#080B0E] text-[#F4F2EF]">
      <div className="mx-auto max-w-4xl space-y-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/80 px-3.5 py-1 text-xs font-mono text-emerald-300">
          <span>Story 17 · Dual-Pane X-Ray Scanner Laser Wipe</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl text-white">Under the Surface Architecture</h2>

        <div className="relative h-64 w-full rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
          {/* Surface Gloss UI */}
          <div className="absolute inset-0 bg-[#064E3B] p-8 text-left text-white flex flex-col justify-between">
            <div className="font-mono text-xs text-emerald-300">SURFACE: EDITORIAL NEXT.JS UI</div>
            <div className="font-serif text-2xl">High-Converting Client Experience</div>
          </div>

          {/* Internal Wireframe X-Ray */}
          <div
            className="absolute inset-0 bg-[#0C151F] p-8 text-left text-blue-300 flex flex-col justify-between font-mono text-xs"
            style={{ clipPath: `inset(0 0 ${(100 - scanPos)}% 0)` }}
          >
            <div>X-RAY SCANNER: AI CIRCUIT CORE &amp; CRM WEBHOOKS</div>
            <div>STATUS: ACTIVE DISPATCH ROUTING</div>
          </div>

          {/* Scanning Laser Beam */}
          <div
            className="absolute left-0 right-0 h-1 bg-emerald-400 shadow-[0_0_20px_#34D399]"
            style={{ top: `${scanPos}%` }}
          />
        </div>
      </div>
    </section>
  );
}
