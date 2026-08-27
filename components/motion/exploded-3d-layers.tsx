"use client";

import React, { useRef, useState, useEffect } from "react";

interface Exploded3DLayersProps {
  height?: string;
  tag?: string;
}

export function Exploded3DLayers({
  height = "240vh",
  tag = "Device 07 · 3D Exploded Layer Assembly",
}: Exploded3DLayersProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const travel = Math.max(containerRef.current.offsetHeight - vh, 1);
      setProgress(Math.min(1, Math.max(0, -rect.top / travel)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="relative border-b border-white/10 bg-[#0B0F14]" style={{ height }}>
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center px-6 sm:px-16 overflow-hidden">
        <div className="mx-auto w-full max-w-4xl">
          <div className="font-mono text-xs text-emerald-400 mb-4 uppercase">{tag}</div>
          <div className="relative mx-auto h-[320px] w-full max-w-xl" style={{ perspective: "1200px" }}>
            <div
              style={{
                transform: `rotateX(20deg) rotateY(-10deg) translateZ(${(-100 * (1 - progress)).toFixed(1)}px)`,
              }}
              className="absolute inset-x-6 inset-y-4 rounded-xl border border-white/10 bg-[#161B22] p-4 text-xs font-mono text-gray-400"
            >
              Layer 03: Compute &amp; SSL Enclave
            </div>
            <div
              style={{
                transform: `rotateX(20deg) rotateY(-10deg) translateZ(${(30 * (1 - progress)).toFixed(1)}px)`,
              }}
              className="absolute inset-x-4 inset-y-2 rounded-xl border border-emerald-500/30 bg-[#064E3B] p-4 text-xs font-mono text-emerald-200"
            >
              Layer 02: AI Voice &amp; Chat Core
            </div>
            <div
              style={{
                transform: `rotateX(20deg) rotateY(-10deg) translateZ(${(110 * (1 - progress)).toFixed(1)}px)`,
                boxShadow: progress > 0.8 ? "0 0 30px rgba(16,185,129,0.3)" : "none",
              }}
              className="absolute inset-0 rounded-xl border border-white/30 bg-white/10 p-5 backdrop-blur-md text-white shadow-2xl transition-all"
            >
              Layer 01: Sub-Second Glass UI
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
