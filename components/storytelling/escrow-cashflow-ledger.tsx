"use client";

import React, { useRef, useState, useEffect } from "react";

export function EscrowCashflowLedger() {
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

  const totalRecovered = Math.round(progress * 48000);

  return (
    <section ref={containerRef} className="border-b border-white/10 py-24 px-6 sm:px-16 bg-[#080B0E] text-[#F4F2EF]">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/80 px-3.5 py-1 text-xs font-mono text-emerald-300">
            <span>Story 10 · Automated Cashflow Ledger</span>
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl text-white">Live ROI Reconciliation</h2>
        </div>

        <div className="rounded-3xl border border-white/15 bg-black/80 p-8 shadow-2xl space-y-4 font-mono text-xs">
          <div className="flex justify-between border-b border-white/10 pb-3 text-gray-400">
            <span>TRANSACTION RECONCILIATION</span>
            <span>NET ROI: +12.4X</span>
          </div>

          <div className="flex justify-between text-base sm:text-xl font-serif text-white py-2">
            <span>Total Lost Revenue Recovered</span>
            <span className="text-emerald-400 font-bold tabular-nums">+${totalRecovered.toLocaleString()}</span>
          </div>

          <div className="rounded-xl bg-emerald-950/40 border border-emerald-500/30 p-4 text-emerald-200 text-xs">
            ✓ Every emergency lead routed and closed contributes directly to your net cash position.
          </div>
        </div>
      </div>
    </section>
  );
}
