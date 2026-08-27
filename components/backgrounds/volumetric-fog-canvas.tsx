"use client";

import React, { useRef, useEffect } from "react";

interface VolumetricFogCanvasProps {
  children?: React.ReactNode;
}

export function VolumetricFogCanvas({ children }: VolumetricFogCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;
    const clouds = Array.from({ length: 12 }, () => ({
      x: Math.random() * 800,
      y: Math.random() * 380,
      r: Math.random() * 120 + 80,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.01;

      clouds.forEach((c) => {
        c.x += c.vx;
        c.y += c.vy;
        if (c.x < -100) c.x = canvas.width + 100;
        if (c.x > canvas.width + 100) c.x = -100;

        const g = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, c.r);
        g.addColorStop(0, "rgba(16, 185, 129, 0.08)");
        g.addColorStop(0.6, "rgba(5, 150, 105, 0.03)");
        g.addColorStop(1, "transparent");

        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };
    render();

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="relative min-h-[380px] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#05070A] p-8 text-[#F4F2EF]">
      <canvas ref={canvasRef} width={800} height={380} className="pointer-events-none absolute inset-0 h-full w-full" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
