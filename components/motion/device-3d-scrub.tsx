"use client";

import React, { useRef, useState, useEffect } from "react";

interface Device3DScrubProps {
  height?: string;
  tag?: string;
}

export function Device3DScrub({
  height = "220vh",
  tag = "Device 12 · 3D Device Mockup Scrub",
}: Device3DScrubProps) {
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
    <section ref={containerRef} className="relative border-b border-white/10 bg-[#0A0D10]" style={{ height }}>
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center px-6 sm:px-16 overflow-hidden">
        <div className="mx-auto w-full max-w-4xl text-center">
          <div className="font-mono text-xs text-emerald-400 mb-2 uppercase">{tag}</div>
          <h3 className="font-serif text-2xl text-white mb-6">Device un-pitches into full frontal view</h3>
          <div
            className="mx-auto h-[260px] sm:h-[320px] w-full max-w-md rounded-2xl border-4 border-gray-700 bg-black p-4 shadow-2xl transition-transform duration-100"
            style={{
              transform: `perspective(1000px) rotateX(${((1 - progress) * 35).toFixed(1)}deg) scale(${(0.85 + progress * 0.15).toFixed(2)})`,
            }}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px] font-mono text-emerald-400">
              <span>● Live Screen Scrub</span>
              <span>Pitch: {Math.round((1 - progress) * 35)}°</span>
            </div>
            <div className="mt-4 space-y-2 text-left font-mono text-xs text-gray-300">
              <div className="rounded bg-white/10 p-2">Screen UI Scrubbing at {Math.round(progress * 100)}%</div>
              <div className="rounded bg-[#065F46] p-2 text-white">✓ Lead Dispatched to Calendar</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
