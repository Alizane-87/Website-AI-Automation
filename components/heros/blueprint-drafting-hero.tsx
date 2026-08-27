"use client";

import React, { useState, useCallback } from "react";

export function BlueprintDraftingHero() {
  const [crosshair, setCrosshair] = useState({ x: 300, y: 150 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCrosshair({
      x: Math.round(e.clientX - rect.left),
      y: Math.round(e.clientY - rect.top),
    });
  }, []);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden border-b border-white/10 bg-[#090D12] py-28 px-6 sm:px-16 text-[#F4F2EF] text-center select-none"
    >
      {/* Blueprint Grid Lines */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-25" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="draftGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(52, 211, 153, 0.5)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#draftGrid)" />
      </svg>

      {/* Dynamic Cursor Dimension Lines */}
      <div
        className="pointer-events-none absolute top-0 bottom-0 border-l border-emerald-500/40"
        style={{ left: `${crosshair.x}px` }}
      />
      <div
        className="pointer-events-none absolute left-0 right-0 border-t border-emerald-500/40"
        style={{ top: `${crosshair.y}px` }}
      />

      <div className="relative mx-auto max-w-5xl space-y-6">
        <div className="inline-flex items-center gap-2 rounded border border-emerald-500/40 bg-black/60 px-3.5 py-1 text-xs font-mono text-emerald-300">
          <span>Hero 17 · Architectural Blueprint Drafting</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-7xl font-normal tracking-tight text-white leading-tight">
          Engineered to Exact Structural Tolerances.
        </h1>

        <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto font-sans leading-relaxed">
          Move your mouse to draft live dimension coordinates across our CAD blueprint canvas.
        </p>

        <div className="font-mono text-xs text-emerald-400">
          DRAFT_COORD: [X: {crosshair.x}px, Y: {crosshair.y}px] · SCALE 1:1 · ZERO DRIFT
        </div>
      </div>
    </section>
  );
}
