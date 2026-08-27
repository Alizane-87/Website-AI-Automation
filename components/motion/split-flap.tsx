"use client";

import React, { useRef, useState, useEffect } from "react";

const DEFAULT_FLAP_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789·_#";

interface SplitFlapProps {
  targetText?: string;
  height?: string;
  tag?: string;
}

export function SplitFlap({
  targetText = "ALIZANE AUTONOMOUS ENGINE",
  height = "220vh",
  tag = "Device 06 · Split-Flap Scramble",
}: SplitFlapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [scrambled, setScrambled] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const travel = Math.max(containerRef.current.offsetHeight - vh, 1);
      const p = Math.min(1, Math.max(0, -rect.top / travel));
      setProgress(p);

      const targetLen = targetText.length;
      let result = "";
      for (let i = 0; i < targetLen; i++) {
        const charTarget = targetText[i];
        if (charTarget === " ") {
          result += " ";
          continue;
        }
        const charThreshold = (i / targetLen) * 0.8;
        if (p >= charThreshold + 0.15) result += charTarget;
        else if (p > 0.05) {
          const seed = Math.floor((p * 40 + i * 7) % DEFAULT_FLAP_CHARS.length);
          result += DEFAULT_FLAP_CHARS[seed];
        } else {
          result += "_";
        }
      }
      setScrambled(result);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [targetText]);

  return (
    <section ref={containerRef} className="relative border-b border-white/10 bg-[#080B0E]" style={{ height }}>
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center px-6 sm:px-16 overflow-hidden">
        <div className="mx-auto w-full max-w-5xl">
          <div className="font-mono text-xs text-emerald-400 mb-4 uppercase">{tag}</div>
          <div className="flex flex-wrap gap-1 rounded-2xl border border-white/15 bg-black/80 p-6 font-mono shadow-2xl">
            {scrambled.split("").map((c, idx) => (
              <div
                key={idx}
                className={`flex h-10 w-7 sm:h-12 sm:w-9 items-center justify-center rounded border font-mono text-lg font-bold transition-all ${
                  c === " "
                    ? "border-transparent w-2 sm:w-4"
                    : c === targetText[idx]
                    ? "border-emerald-500/60 bg-emerald-950 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                    : "border-amber-500/40 text-amber-400 animate-pulse"
                }`}
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
