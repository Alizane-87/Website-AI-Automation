"use client";

import React, { useRef, useEffect } from "react";

export function ParticleMorphHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;
    const count = 120;
    const particles = Array.from({ length: count }, (_, i) => ({
      angle: (i / count) * Math.PI * 2,
      radius: Math.random() * 2 + 1.5,
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.03;
      const cX = canvas.width / 2;
      const cY = canvas.height / 2;

      particles.forEach((p, idx) => {
        // Morphing parametric shape (Circle -> Star -> Heart -> Circle)
        const morphR = 70 + Math.sin(t + p.angle * 3) * 25 + Math.cos(t * 0.5 + p.angle * 5) * 15;
        const x = cX + Math.cos(p.angle + t * 0.2) * morphR;
        const y = cY + Math.sin(p.angle + t * 0.2) * morphR;

        ctx.beginPath();
        ctx.arc(x, y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = idx % 2 === 0 ? "#34D399" : "#10B981";
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#34D399";
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };
    render();

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#06080B] py-28 px-6 sm:px-16 text-[#F4F2EF] text-center">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/80 px-4 py-1 text-xs font-mono text-emerald-300">
          <span>Hero 20 · Dynamic Particle Morphing Silhouette</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-7xl font-normal tracking-tight text-white leading-tight">
          Fluid Intelligence in Constant Motion.
        </h1>

        <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto font-sans leading-relaxed">
          120 autonomous mathematical particle nodes morphing through geometric attractors in real time.
        </p>

        <div className="pt-4">
          <canvas ref={canvasRef} width={400} height={240} className="mx-auto" />
        </div>
      </div>
    </section>
  );
}
