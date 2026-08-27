"use client";

import React from "react";

interface BlueprintCoordinateGridProps {
  children?: React.ReactNode;
}

export function BlueprintCoordinateGrid({ children }: BlueprintCoordinateGridProps) {
  return (
    <div className="relative min-h-[380px] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#080C10] p-8 text-[#F4F2EF]">
      {/* CAD Coordinate Lines */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="cadGrid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(52, 211, 153, 0.4)" strokeWidth="0.75" />
            <circle cx="24" cy="24" r="1.5" fill="rgba(52, 211, 153, 0.6)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cadGrid)" />
      </svg>

      {/* Floating Telemetry Coordinates */}
      <div className="absolute top-4 right-6 font-mono text-[10px] text-emerald-400/60">
        GRID: 48x48 · LAT: 37.7749° N · LON: 122.4194° W
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
