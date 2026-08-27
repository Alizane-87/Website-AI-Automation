"use client";

import React from "react";

interface TopographicContourMapProps {
  children?: React.ReactNode;
}

export function TopographicContourMap({ children }: TopographicContourMapProps) {
  return (
    <div className="relative min-h-[380px] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#06080B] p-8 text-[#F4F2EF]">
      {/* Topographic Elevation Curves SVG */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <path d="M-100,100 C150,200 350,50 600,150 C800,220 900,100 1000,180" fill="none" stroke="#10B981" strokeWidth="1.5" />
        <path d="M-100,160 C180,260 380,110 630,210 C830,280 930,160 1000,240" fill="none" stroke="#10B981" strokeWidth="1.5" />
        <path d="M-100,220 C210,320 410,170 660,270 C860,340 960,220 1000,300" fill="none" stroke="#10B981" strokeWidth="1.5" />
        <path d="M-100,280 C240,380 440,230 690,330 C890,400 990,280 1000,360" fill="none" stroke="#10B981" strokeWidth="1.5" />
      </svg>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
