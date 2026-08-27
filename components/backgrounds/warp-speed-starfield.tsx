"use client";

import React, { useRef, useEffect } from "react";

interface WarpSpeedStarfieldProps {
  children?: React.ReactNode;
}

export function WarpSpeedStarfield({ children }: WarpSpeedStarfieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const count = 100;
    const stars = Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * canvas.width,
      y: (Math.random() - 0.5) * canvas.height,
      z: Math.random() * canvas.width,
    }));

    const render = () => {
      ctx.fillStyle = "rgba(5, 7, 10, 0.3)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const cX = canvas.width / 2;
      const cY = canvas.height / 2;

      stars.forEach((s) => {
        s.z -= 3;
        if (s.z <= 0) {
          s.z = canvas.width;
          s.x = (Math.random() - 0.5) * canvas.width;
          s.y = (Math.random() - 0.5) * canvas.height;
        }

        const k = 120 / s.z;
        const px = s.x * k + cX;
        const py = s.y * k + cY;
        const size = Math.max(0.5, (1 - s.z / canvas.width) * 2.5);

        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fillStyle = "#34D399";
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
