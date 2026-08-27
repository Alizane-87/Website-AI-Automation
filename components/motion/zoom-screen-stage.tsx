"use client";

import React, { useRef, useState, useEffect } from "react";

interface ZoomScreenStageProps {
  height?: string;
  tag?: string;
}

export function ZoomScreenStage({
  height = "220vh",
  tag = "Device 15 · Dual-Axis Zoom-to-Screen",
}: ZoomScreenStageProps) {
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
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center px-6 overflow-hidden">
        <div className="mx-auto w-full max-w-4xl text-center">
          <div className="font-mono text-xs text-emerald-400 mb-2 uppercase">{tag}</div>
          <div
            className="mx-auto flex h-[280px] w-full max-w-xl flex-col justify-between border border-emerald-500/40 bg-gradient-to-br from-[#065F46] to-[#042F2E] p-8 text-white shadow-2xl transition-all duration-100"
            style={{
              transform: `scale(${(0.65 + progress * 0.35).toFixed(2)})`,
              borderRadius: `${Math.max(4, (1 - progress) * 32)}px`,
            }}
          >
            <div className="font-mono text-xs text-emerald-200">Scale: {Math.round((0.65 + progress * 0.35) * 100)}%</div>
            <h3 className="font-serif text-3xl text-white">Full-Bleed Stage Zoom</h3>
            <div className="font-mono text-xs text-emerald-200">Radius: {Math.round((1 - progress) * 32)}px</div>
          </div>
        </div>
      </div>
    </section>
  );
}
