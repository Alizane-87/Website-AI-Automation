"use client";

import React from "react";

interface DigitalHexStreamProps {
  children?: React.ReactNode;
}

export function DigitalHexStream({ children }: DigitalHexStreamProps) {
  return (
    <div className="relative min-h-[380px] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#05080A] p-8 text-[#F4F2EF]">
      {/* Hex Stream Background Columns */}
      <div className="pointer-events-none absolute inset-0 flex justify-around opacity-15 font-mono text-[10px] text-emerald-400 select-none overflow-hidden">
        {Array.from({ length: 8 }).map((_, col) => (
          <div key={col} className="space-y-3 animate-pulse" style={{ animationDelay: `${col * 200}ms` }}>
            <div>0x8F 0x33 0x1A</div>
            <div>0xAA 0xFF 0x09</div>
            <div>0x7C 0x22 0xE1</div>
            <div>0x14 0x6B 0x88</div>
            <div>0x90 0xCC 0x4F</div>
          </div>
        ))}
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
