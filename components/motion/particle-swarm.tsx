"use client";

import React, { useRef, useEffect } from "react";

interface ParticleSwarmProps {
  title?: string;
  tag?: string;
}

export function ParticleSwarm({
  title = "Scroll speed scatters neural particle matrix",
  tag = "Device 16 · Canvas Particle Velocity Swarm",
}: ParticleSwarmProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const velocityRef = useRef(0);
  const lastScrollY = useRef(0);
  const lastTime = useRef(Date.now());

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const now = Date.now();
      const dt = Math.max(1, now - lastTime.current);
      const dy = y - lastScrollY.current;
      velocityRef.current = (dy / dt) * 15;
      lastScrollY.current = y;
      lastTime.current = now;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * 600,
      y: Math.random() * 260,
      originX: Math.random() * 600,
      originY: Math.random() * 260,
      vx: 0,
      vy: 0,
      radius: Math.random() * 2.5 + 1.5,
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const v = Math.abs(velocityRef.current);

      particles.forEach((p) => {
        if (v > 0.5) {
          p.vx += (Math.random() - 0.5) * v * 0.8;
          p.vy += (Math.random() - 0.5) * v * 0.8;
        }
        p.vx += (p.originX - p.x) * 0.05;
        p.vy += (p.originY - p.y) * 0.05;
        p.vx *= 0.85;
        p.vy *= 0.85;
        p.x += p.vx;
        p.y += p.vy;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#34D399";
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#10B981";
        ctx.fill();
      });

      velocityRef.current *= 0.88;
      animId = requestAnimationFrame(render);
    };
    render();

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section className="border-b border-white/10 py-24 px-6 sm:px-16 bg-[#080B0E]">
      <div className="mx-auto max-w-4xl text-center">
        <div className="font-mono text-xs text-emerald-400 mb-2 uppercase">{tag}</div>
        <h3 className="font-serif text-2xl text-white mb-6">{title}</h3>
        <canvas
          ref={canvasRef}
          width={600}
          height={260}
          className="mx-auto rounded-xl border border-white/15 bg-black/60 shadow-xl"
        />
      </div>
    </section>
  );
}
