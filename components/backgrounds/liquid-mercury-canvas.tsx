"use client";

import React, { useRef, useEffect, useCallback } from "react";

interface LiquidMercuryCanvasProps {
  children?: React.ReactNode;
}

export function LiquidMercuryCanvas({ children }: LiquidMercuryCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ripples = useRef<{ x: number; y: number; r: number; opacity: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const render = () => {
      ctx.fillStyle = "rgba(7, 10, 14, 0.25)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ripples.current.forEach((rip, idx) => {
        rip.r += 2.5;
        rip.opacity -= 0.015;
        if (rip.opacity <= 0) {
          ripples.current.splice(idx, 1);
          return;
        }
        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(226, 232, 240, ${rip.opacity * 0.4})`;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#34D399";
        ctx.stroke();
      });

      animId = requestAnimationFrame(render);
    };
    render();

    return () => cancelAnimationFrame(animId);
  }, []);

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    ripples.current.push({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      r: 10,
      opacity: 1,
    });
  }, []);

  return (
    <div
      onClick={handleClick}
      className="relative min-h-[380px] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#070A0E] p-8 text-[#F4F2EF] cursor-pointer"
    >
      <canvas ref={canvasRef} width={800} height={380} className="pointer-events-none absolute inset-0 h-full w-full" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
