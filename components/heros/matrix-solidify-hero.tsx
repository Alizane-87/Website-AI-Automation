"use client";

import React, { useState } from "react";

export function MatrixSolidifyHero() {
  const [solid, setSolid] = useState(false);

  return (
    <section
      onMouseEnter={() => setSolid(true)}
      onMouseLeave={() => setSolid(false)}
      className="relative overflow-hidden border-b border-white/10 bg-[#05070A] py-28 px-6 sm:px-16 text-[#F4F2EF] text-center cursor-pointer select-none"
    >
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/80 px-4 py-1 text-xs font-mono text-emerald-300">
          <span>Hero 16 · Matrix Code Solidification</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-7xl font-normal tracking-tight text-white leading-tight">
          {solid ? (
            <span className="text-white transition-all duration-300">
              The Architecture of Revenue Certainty.
            </span>
          ) : (
            <span className="font-mono text-emerald-400 font-bold tracking-widest text-3xl sm:text-6xl animate-pulse">
              0x8F_ARCH_REVENUE_CERTAINTY_0x33
            </span>
          )}
        </h1>

        <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto font-sans leading-relaxed">
          Hover your mouse over this section to crystallize raw autonomous machine code into high-ticket conversion typography.
        </p>

        <div className="pt-4 font-mono text-xs text-gray-500">
          STATUS: {solid ? "CRYSTALLIZED [ENGLISH]" : "STREAMING [MACHINE CODE]"}
        </div>
      </div>
    </section>
  );
}
