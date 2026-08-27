"use client";

import React, { useRef, useState, useEffect } from "react";

const TRANSCRIPT_CHUNKS = [
  "CALLER: 'Hi, my commercial freezer stopped working and we have $8,000 of meat inside.'",
  "AI AGENT: 'I understand this is an urgent emergency for your restaurant. What is the address?'",
  "CALLER: '142 Main St. Can someone come immediately?'",
  "AI AGENT: 'Dispatch confirmed. Lead technician dispatched with ETA 45 minutes.'",
];

export function AudioTranscriptionScrubber() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeChunk, setActiveChunk] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh - rect.top) / (rect.height + vh)));
      setActiveChunk(Math.min(TRANSCRIPT_CHUNKS.length - 1, Math.floor(p * TRANSCRIPT_CHUNKS.length)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="border-b border-white/10 py-24 px-6 sm:px-16 bg-[#080B0E] text-[#F4F2EF]">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/80 px-3.5 py-1 text-xs font-mono text-emerald-300">
            <span>Story 14 · Audio Waveform Transcript Scrubber</span>
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl text-white">Live Call Intelligence</h2>
        </div>

        <div className="rounded-3xl border border-white/15 bg-black/90 p-8 shadow-2xl space-y-4 font-mono text-xs">
          <div className="flex justify-between border-b border-white/10 pb-3 text-gray-400">
            <span className="text-emerald-400">● CALL LOG: 09:14:02 PM</span>
            <span>CHUNKS: {activeChunk + 1} / 4</span>
          </div>

          <div className="space-y-3">
            {TRANSCRIPT_CHUNKS.slice(0, activeChunk + 1).map((chunk, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-lg border ${
                  chunk.startsWith("AI")
                    ? "border-emerald-500/40 bg-emerald-950/40 text-emerald-200"
                    : "border-white/10 bg-white/5 text-gray-300"
                }`}
              >
                {chunk}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
