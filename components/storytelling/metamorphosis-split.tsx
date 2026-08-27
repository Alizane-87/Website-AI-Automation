"use client";

import React, { useRef, useState, useEffect } from "react";

export function MetamorphosisSplit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0.5);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      setProgress(Math.min(1, Math.max(0, (vh - rect.top) / (rect.height + vh))));
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
            <span>Story 03 · Before &amp; After Metamorphosis</span>
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl text-white">The Evolutionary Transition</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* State A: The Legacy Strain */}
          <div className="rounded-3xl border border-red-500/30 bg-red-950/20 p-8 space-y-4">
            <div className="font-mono text-xs text-red-400 font-bold">STATE A: THE LEGACY CONTRACTOR</div>
            <h3 className="font-serif text-2xl text-white">Sluggish 6.8s Load &amp; Missed Calls</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400 font-sans">
              <li>❌ 72% mobile bounce rate on cellular connections.</li>
              <li>❌ 6 PM emergency calls land in voicemail graveyard.</li>
              <li>❌ Lost high-ticket HVAC/roofing quotes to faster rivals.</li>
            </ul>
          </div>

          {/* State B: The Autonomous Machine */}
          <div className="rounded-3xl border border-emerald-500/40 bg-emerald-950/30 p-8 space-y-4 shadow-2xl">
            <div className="font-mono text-xs text-emerald-400 font-bold">STATE B: THE ALIZANE ENGINE</div>
            <h3 className="font-serif text-2xl text-white">280ms Edge Delivery &amp; 24/7 AI Triage</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-emerald-100 font-sans">
              <li>✓ 100/100 Core Web Vitals with instant mobile rendering.</li>
              <li>✓ 3.8s speed-to-lead qualification with audio transcription.</li>
              <li>✓ Automated 21-day quote retention &amp; 5★ review loop.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
