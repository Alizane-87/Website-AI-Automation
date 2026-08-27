"use client";

import React, { useRef, useState, useEffect } from "react";

interface KineticTypeProps {
  lines?: string[];
  height?: string;
  tag?: string;
}

export function KineticType({
  lines = [
    "1. Websites that load in 280ms.",
    "2. AI receptionist answers in 4 seconds.",
    "3. Direct calendar lock & follow-up.",
  ],
  height = "240vh",
  tag = "Device 01 · Kinetic Line Split",
}: KineticTypeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const travel = Math.max(containerRef.current.offsetHeight - vh, 1);
      const p = Math.min(1, Math.max(0, -rect.top / travel));
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="relative border-b border-white/10" style={{ height }}>
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center px-6 sm:px-16 overflow-hidden">
        <div className="mx-auto w-full max-w-5xl">
          <div className="font-mono text-xs text-emerald-400 mb-4 uppercase">{tag}</div>
          {lines.map((line, idx) => {
            const start = 0.05 + idx * 0.3;
            const lineProgress = Math.min(1, Math.max(0, (progress - start) / 0.25));
            const isEmerald = idx === 1;

            return (
              <div key={idx} className="overflow-hidden py-1 mt-2">
                <h2
                  className={`font-serif text-3xl sm:text-6xl transition-all duration-300 ease-out ${
                    isEmerald ? "text-emerald-400" : "text-white"
                  }`}
                  style={{
                    transform: `translateY(${Math.max(0, (1 - lineProgress) * 110)}%)`,
                    opacity: lineProgress,
                  }}
                >
                  {line}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
