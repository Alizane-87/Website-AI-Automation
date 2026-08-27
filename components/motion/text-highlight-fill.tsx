"use client";

import React, { useRef, useState, useEffect } from "react";

interface TextHighlightFillProps {
  text?: string;
  tag?: string;
}

const DEFAULT_TEXT =
  "Most websites lose over 70% of potential high-ticket clients because they load slowly and force visitors into voicemails. Alizane answers instantly, qualifies the job scope, and locks the calendar.";

export function TextHighlightFill({
  text = DEFAULT_TEXT,
  tag = "Device 11 · Kinetic Text Highlighter Fill",
}: TextHighlightFillProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      setProgress(Math.min(1, Math.max(0, (vh - rect.top) / (rect.height + vh))));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const words = text.split(" ");

  return (
    <section ref={containerRef} className="border-b border-white/10 py-24 px-6 sm:px-16 bg-[#080A0D]">
      <div className="mx-auto max-w-4xl">
        <div className="font-mono text-xs text-emerald-400 mb-4 uppercase">{tag}</div>
        <p className="font-serif text-2xl sm:text-4xl leading-relaxed transition-colors duration-150">
          {words.map((word, idx) => {
            const threshold = idx / words.length;
            const isLit = progress >= threshold;
            return (
              <span
                key={idx}
                className={`inline-block mr-2 transition-all duration-200 ${
                  isLit ? "text-white font-medium" : "text-white/20"
                }`}
              >
                {word}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
