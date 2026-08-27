"use client";

import React from "react";

interface StudioGrainOverlayProps {
  children?: React.ReactNode;
}

export function StudioGrainOverlay({ children }: StudioGrainOverlayProps) {
  return (
    <div className="relative min-h-[380px] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#0B0E12] p-8 text-[#F4F2EF]">
      {/* SVG Micro-Grain Noise Filter */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-35 mix-blend-overlay">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
