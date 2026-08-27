"use client";

import React, { useState } from "react";

interface VoronoiTessellationProps {
  children?: React.ReactNode;
}

export function VoronoiTessellation({ children }: VoronoiTessellationProps) {
  const [activeCell, setActiveCell] = useState(2);

  return (
    <div className="relative min-h-[380px] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#06080B] p-8 text-[#F4F2EF]">
      {/* Voronoi Geometric Cells Grid */}
      <div className="pointer-events-none absolute inset-0 grid grid-cols-4 gap-2 p-4 opacity-25">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            onMouseEnter={() => setActiveCell(i)}
            className={`rounded-2xl border transition-all ${
              i === activeCell ? "border-emerald-400 bg-emerald-950/40" : "border-white/15 bg-white/5"
            }`}
          />
        ))}
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
