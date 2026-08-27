"use client";

import React, { useState, useCallback } from "react";

interface ArchitecturalDotGridProps {
  children?: React.ReactNode;
}

export function ArchitecturalDotGrid({ children }: ArchitecturalDotGridProps) {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-[380px] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#0A0D10] p-8 text-[#F4F2EF]"
    >
      {/* 24px Architectural Dot Matrix */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: `radial-gradient(400px circle at ${mouse.x}% ${mouse.y}%, black 30%, transparent 80%)`,
          WebkitMaskImage: `radial-gradient(400px circle at ${mouse.x}% ${mouse.y}%, black 30%, transparent 80%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
