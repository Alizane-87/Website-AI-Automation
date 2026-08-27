"use client";

import React, { useRef, useEffect } from "react";

interface MagneticFilingsFieldProps {
  children?: React.ReactNode;
}

export function MagneticFilingsField({ children }: MagneticFilingsFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 400, y: 190 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const cols = 20;
    const rows = 10;
    const spacingX = canvas.width / cols;
    const spacingY = canvas.height / rows;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const posX = c * spacingX + spacingX / 2;
          const posY = r * spacingY + spacingY / 2;
          const dx = mouseRef.current.x - posX;
          const dy = mouseRef.current.y - posY;
          const angle = Math.atan2(dy, dx);

          ctx.save();
          ctx.translate(posX, posY);
          ctx.rotate(angle);
          ctx.beginPath();
          ctx.moveTo(-6, 0);
          ctx.lineTo(6, 0);
          ctx.strokeStyle = "rgba(52, 211, 153, 0.4)";
          ctx.lineWidth = 1.5;
          ctx.stroke();
          ctx.restore();
        }
      }

      animId = requestAnimationFrame(render);
    };
    render();

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      }}
      className="relative min-h-[380px] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#080B0E] p-8 text-[#F4F2EF]"
    >
      <canvas ref={canvasRef} width={800} height={380} className="pointer-events-none absolute inset-0 h-full w-full" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
