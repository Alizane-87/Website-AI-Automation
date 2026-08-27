"use client";

import React from "react";

interface LaserHorizonGroundProps {
  children?: React.ReactNode;
}

export function LaserHorizonGround({ children }: LaserHorizonGroundProps) {
  return (
    <div className="relative min-h-[380px] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#06080B] p-8 text-[#F4F2EF]">
      {/* 3D Perspective Ground Plane */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 opacity-30"
        style={{
          transform: "perspective(300px) rotateX(60deg)",
          transformOrigin: "bottom",
          backgroundImage: "linear-gradient(to right, rgba(16, 185, 129, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(16, 185, 129, 0.3) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "linear-gradient(to top, black, transparent)",
          WebkitMaskImage: "linear-gradient(to top, black, transparent)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
