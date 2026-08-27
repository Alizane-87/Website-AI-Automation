"use client";

import React, { useState } from "react";

export function DualRealityHero() {
  const [splitPos, setSplitPos] = useState(50);

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#07090C] py-24 px-6 sm:px-16 text-[#F4F2EF]">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/80 px-3.5 py-1 text-xs font-mono text-emerald-300">
            <span>Hero 05 · Dual-Reality Diagonal Split</span>
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl text-white">The Cost of 2014 vs The Power of 2026</h2>
        </div>

        {/* Interactive Dual-Reality Split Canvas */}
        <div
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const pct = Math.max(20, Math.min(80, ((e.clientX - rect.left) / rect.width) * 100));
            setSplitPos(pct);
          }}
          className="relative mt-8 h-[400px] w-full overflow-hidden rounded-3xl border border-white/20 shadow-2xl cursor-ew-resize select-none"
        >
          {/* Left Reality: The 2014 Leak */}
          <div className="absolute inset-0 bg-[#251A18] p-10 flex flex-col justify-between text-[#E2D9CC]">
            <div>
              <div className="font-mono text-xs text-red-400 font-bold">🔴 2014 SLOW WORDPRESS LEAK</div>
              <h3 className="mt-4 font-serif text-2xl sm:text-3xl text-white">6.8s Load Time · 72% Mobile Bounce</h3>
              <p className="mt-2 text-xs sm:text-sm text-[#BDB2A1] max-w-md">
                Phone rings to voicemail after 6 PM. Emergency calls lost to competitors. Zero automated retention.
              </p>
            </div>
            <div className="rounded-lg bg-red-950/60 border border-red-500/30 p-3 font-mono text-xs text-red-300">
              ⚠️ Estimated Lost Revenue: $48,000 / Year
            </div>
          </div>

          {/* Right Reality: The 2026 Alizane Engine */}
          <div
            className="absolute inset-0 bg-[#064E3B] p-10 flex flex-col justify-between text-white transition-all duration-75"
            style={{ clipPath: `inset(0 0 0 ${splitPos}%)` }}
          >
            <div>
              <div className="font-mono text-xs text-emerald-300 font-bold">⚡ 2026 ALIZANE AUTONOMOUS ENGINE</div>
              <h3 className="mt-4 font-serif text-2xl sm:text-3xl text-white">280ms Edge Speed · 24/7 AI Triage</h3>
              <p className="mt-2 text-xs sm:text-sm text-emerald-100 max-w-md">
                Answers before the 2nd ring, qualifies emergency scope, and locks the calendar with instant SMS alerts.
              </p>
            </div>
            <div className="rounded-lg bg-black/40 border border-emerald-400/40 p-3 font-mono text-xs text-emerald-200">
              ✓ Recovered Revenue: +$64,000 / Year (12x ROI)
            </div>
          </div>

          {/* Divider Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_white]"
            style={{ left: `${splitPos}%` }}
          />
        </div>
      </div>
    </section>
  );
}
