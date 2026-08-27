"use client";

import React, { useRef, useState, useEffect } from "react";

export function HorizontalPanPipeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !railRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const travel = Math.max(containerRef.current.offsetHeight - vh, 1);
      const p = Math.min(1, Math.max(0, -rect.top / travel));
      setProgress(p);

      const overflow = railRef.current.scrollWidth - window.innerWidth + 80;
      railRef.current.style.transform = `translate3d(${-overflow * p}px, 0, 0)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="relative border-b border-white/10 bg-[#0A0D10]" style={{ height: "260vh" }}>
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center overflow-hidden text-[#F4F2EF]">
        <div className="px-6 sm:px-16 mb-4 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/80 px-3.5 py-1 text-xs font-mono text-emerald-300">
            <span>Story 06 · Panoramic Horizontal Rail ({Math.round(progress * 100)}%)</span>
          </div>
        </div>

        {/* Panning Rail Container */}
        <div ref={railRef} className="flex items-center gap-6 px-6 sm:px-16 will-change-transform">
          {[
            { tag: "PILLAR 01", title: "Sub-Second Ingestion", desc: "280ms Edge Speed Verified", color: "bg-[#161D24]" },
            { tag: "PILLAR 02", title: "24/7 AI Triage", desc: "3.8s Speed-to-Lead Response", color: "bg-[#064E3B]" },
            { tag: "PILLAR 03", title: "Direct Dispatch", desc: "Instant SMS & Calendar Lock", color: "bg-[#022C22]" },
            { tag: "PILLAR 04", title: "Revenue Retention", desc: "21-Day Follow-Up & 5★ Review", color: "bg-[#161D24]" },
          ].map((card, idx) => (
            <div
              key={idx}
              className={`h-[320px] w-[340px] shrink-0 rounded-3xl border border-white/15 ${card.color} p-8 flex flex-col justify-between shadow-2xl`}
            >
              <span className="font-mono text-xs text-emerald-400 font-bold">{card.tag}</span>
              <div>
                <h3 className="font-serif text-2xl text-white">{card.title}</h3>
                <p className="text-xs text-gray-300 mt-2">{card.desc}</p>
              </div>
              <div className="font-mono text-[10px] text-gray-500">ALIZANE AUTONOMOUS PIPELINE</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
