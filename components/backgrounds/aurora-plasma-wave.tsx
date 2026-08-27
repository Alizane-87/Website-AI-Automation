"use client";

import React from "react";

interface AuroraPlasmaWaveProps {
  children?: React.ReactNode;
}

export function AuroraPlasmaWave({ children }: AuroraPlasmaWaveProps) {
  return (
    <div className="relative min-h-[380px] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#07090C] p-8 text-[#F4F2EF]">
      {/* Aurora Plasma Blurs */}
      <div className="pointer-events-none absolute -top-20 left-10 h-72 w-72 rounded-full bg-[#065F46] opacity-40 blur-[100px] animate-pulse" />
      <div className="pointer-events-none absolute -bottom-20 right-10 h-80 w-80 rounded-full bg-[#047857] opacity-35 blur-[120px] animate-pulse" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#1E293B] opacity-50 blur-[90px]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
