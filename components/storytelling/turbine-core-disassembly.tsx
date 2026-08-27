"use client";

import React, { useRef, useState, useEffect } from "react";

export function TurbineCoreDisassembly() {
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
    <section ref={containerRef} className="relative border-b border-white/10 bg-[#06080B]" style={{ height: "230vh" }}>
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center px-6 sm:px-16 overflow-hidden text-[#F4F2EF] text-center">
        <div className="mx-auto max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/80 px-3.5 py-1 text-xs font-mono text-emerald-300">
            <span>Story 07 · 3D Exploded Turbine Assembly ({Math.round(progress * 100)}%)</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-white">Radial Engine Disassembly</h2>

          {/* 3D Radial Turbine Blades Expanding */}
          <div className="relative mx-auto mt-8 h-72 w-72 flex items-center justify-center" style={{ perspective: "1000px" }}>
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
              const spread = (1 - progress) * 60;
              return (
                <div
                  key={i}
                  style={{
                    transform: `rotate(${deg}deg) translateY(${-spread}px) rotateX(${progress * 20}deg)`,
                    transition: "transform 100ms ease-out",
                  }}
                  className="absolute h-16 w-4 rounded-xl border border-emerald-400/50 bg-emerald-950/80 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                />
              );
            })}

            <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 border-emerald-400 bg-black font-mono text-xs text-emerald-300 font-bold shadow-2xl">
              CORE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
