"use client";

import React from "react";

interface NeonGridTunnelProps {
  children?: React.ReactNode;
}

export function NeonGridTunnel({ children }: NeonGridTunnelProps) {
  return (
    <div className="relative min-h-[380px] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#050608] p-8 text-[#F4F2EF]">
      {/* 3D Wireframe Tunnel Illusion */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(52, 211, 153, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(52, 211, 153, 0.4) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          transform: "perspective(300px) rotateX(45deg)",
          transformOrigin: "center",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
