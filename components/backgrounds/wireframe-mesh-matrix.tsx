"use client";

import React, { useRef, useEffect } from "react";

interface WireframeMeshMatrixProps {
  children?: React.ReactNode;
}

export function WireframeMeshMatrix({ children }: WireframeMeshMatrixProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.03;

      ctx.strokeStyle = "rgba(16, 185, 129, 0.25)";
      ctx.lineWidth = 1;

      for (let y = 40; y < canvas.height; y += 30) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 15) {
          const wave = Math.sin(x * 0.02 + t + y * 0.01) * 12;
          if (x === 0) ctx.moveTo(x, y + wave);
          else ctx.lineTo(x, y + wave);
        }
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };
    render();

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="relative min-h-[380px] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#06080B] p-8 text-[#F4F2EF]">
      <canvas ref={canvasRef} width={800} height={380} className="pointer-events-none absolute inset-0 h-full w-full" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
