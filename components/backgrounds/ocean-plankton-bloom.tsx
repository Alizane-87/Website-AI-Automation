"use client";

import React, { useRef, useEffect, useCallback } from "react";

interface OceanPlanktonBloomProps {
  children?: React.ReactNode;
}

export function OceanPlanktonBloom({ children }: OceanPlanktonBloomProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparks = useRef<{ x: number; y: number; vx: number; vy: number; life: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const render = () => {
      ctx.fillStyle = "rgba(4, 8, 12, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      sparks.current.forEach((sp, idx) => {
        sp.x += sp.vx;
        sp.y += sp.vy;
        sp.life -= 0.02;
        if (sp.life <= 0) {
          sparks.current.splice(idx, 1);
          return;
        }
        ctx.beginPath();
        ctx.arc(sp.x, sp.y, 2.5 * sp.life, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(52, 211, 153, ${sp.life})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#34D399";
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };
    render();

    return () => cancelAnimationFrame(animId);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    for (let i = 0; i < 3; i++) {
      sparks.current.push({
        x: e.clientX - rect.left + (Math.random() - 0.5) * 10,
        y: e.clientY - rect.top + (Math.random() - 0.5) * 10,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        life: 1,
      });
    }
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-[380px] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#04080C] p-8 text-[#F4F2EF]"
    >
      <canvas ref={canvasRef} width={800} height={380} className="pointer-events-none absolute inset-0 h-full w-full" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
