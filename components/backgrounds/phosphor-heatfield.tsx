"use client";

import React, { useRef, useEffect, useCallback } from "react";

interface PhosphorHeatfieldProps {
  children?: React.ReactNode;
}

export function PhosphorHeatfield({ children }: PhosphorHeatfieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stamps = useRef<{ x: number; y: number; life: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const render = () => {
      ctx.fillStyle = "rgba(7, 9, 12, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stamps.current.forEach((st, idx) => {
        st.life -= 0.03;
        if (st.life <= 0) {
          stamps.current.splice(idx, 1);
          return;
        }
        const grad = ctx.createRadialGradient(st.x, st.y, 0, st.x, st.y, 45 * st.life);
        grad.addColorStop(0, `rgba(52, 211, 153, ${st.life * 0.6})`);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(st.x, st.y, 45 * st.life, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };
    render();

    return () => cancelAnimationFrame(animId);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    stamps.current.push({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      life: 1,
    });
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-[380px] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#07090C] p-8 text-[#F4F2EF]"
    >
      <canvas ref={canvasRef} width={800} height={400} className="pointer-events-none absolute inset-0 h-full w-full" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
