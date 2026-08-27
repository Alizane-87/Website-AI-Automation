"use client";

import React, { useRef, useState, useEffect } from "react";

interface CylinderCarouselProps {
  height?: string;
  tag?: string;
}

export function CylinderCarousel({
  height = "240vh",
  tag = "Device 20 · 3D Cylindrical Ferris Wheel",
}: CylinderCarouselProps) {
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
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center px-6 overflow-hidden">
        <div className="mx-auto w-full max-w-4xl text-center">
          <div className="font-mono text-xs text-emerald-400 mb-4 uppercase">{tag}</div>
          <div className="relative mx-auto h-[280px] w-[320px]" style={{ perspective: "1000px" }}>
            <div
              className="relative h-full w-full transition-transform duration-75"
              style={{
                transformStyle: "preserve-3d",
                transform: `rotateX(${(progress * 360).toFixed(1)}deg)`,
              }}
            >
              {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <div
                  key={i}
                  className="absolute inset-0 flex flex-col items-center justify-center rounded-xl border border-emerald-500/40 bg-emerald-950/90 p-4 text-white shadow-xl"
                  style={{ transform: `rotateX(${deg}deg) translateZ(160px)` }}
                >
                  <span className="font-mono text-xs text-emerald-300">NODE 0{i + 1}</span>
                  <span className="font-serif text-lg mt-1">Cylinder Face</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
