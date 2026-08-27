"use client";

import React from "react";

interface PrismaticCausticsProps {
  children?: React.ReactNode;
}

export function PrismaticCaustics({ children }: PrismaticCausticsProps) {
  return (
    <div className="relative min-h-[380px] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#06080B] p-8 text-[#F4F2EF]">
      {/* Chromatic Caustic Light Waves */}
      <div className="pointer-events-none absolute -top-10 -left-10 h-72 w-72 rounded-full bg-gradient-to-tr from-emerald-500/20 via-teal-400/10 to-transparent blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-72 w-72 rounded-full bg-gradient-to-bl from-blue-500/20 via-emerald-400/10 to-transparent blur-3xl animate-pulse" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
