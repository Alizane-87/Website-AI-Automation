"use client";

import React from "react";

interface QuantumHexLatticeProps {
  children?: React.ReactNode;
}

export function QuantumHexLattice({ children }: QuantumHexLatticeProps) {
  return (
    <div className="relative min-h-[380px] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#07090C] p-8 text-[#F4F2EF]">
      {/* Carbon Graphene Honeycomb SVG */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hexGrid" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(0.8)">
            <path
              d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100"
              fill="none"
              stroke="rgba(52, 211, 153, 0.6)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexGrid)" />
      </svg>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
