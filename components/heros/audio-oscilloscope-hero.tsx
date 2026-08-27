"use client";

import React, { useRef, useEffect } from "react";

export function AudioOscilloscopeHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let step = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      step += 0.05;

      ctx.beginPath();
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = "#34D399";
      ctx.shadowBlur = 12;
      ctx.shadowColor = "#10B981";

      const sliceWidth = canvas.width / 120;
      let x = 0;

      for (let i = 0; i < 120; i++) {
        const v = Math.sin(step + i * 0.1) * Math.cos(step * 0.5 + i * 0.05) * 35;
        const y = canvas.height / 2 + v;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
        x += sliceWidth;
      }

      ctx.stroke();
      animId = requestAnimationFrame(render);
    };
    render();

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#080B0E] py-28 px-6 sm:px-16 text-[#F4F2EF] text-center">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/80 px-4 py-1 text-xs font-mono text-emerald-300">
          <span>Hero 14 · Voice AI Oscilloscope Wave</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-7xl font-normal tracking-tight text-white leading-tight">
          Natural Voice. Instant Triage.
        </h1>

        <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto font-sans leading-relaxed">
          Real-time voice intelligence that speaks fluently, asks qualifying questions, and books calendar slots without robot artifacts.
        </p>

        {/* Live Audio Oscilloscope Canvas */}
        <div className="pt-6">
          <canvas
            ref={canvasRef}
            width={700}
            height={140}
            className="mx-auto rounded-2xl border border-emerald-500/30 bg-black/80 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
