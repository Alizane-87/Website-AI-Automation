"use client";

import React, { useRef, useEffect, useCallback } from "react";

interface PhosphorTraceProps {
  title?: string;
  tag?: string;
}

export function PhosphorTrace({
  title = "Move mouse across canvas to leave bioluminescent heat trail",
  tag = "Device 21 · Thermochromic Phosphor Heatprint Trail",
}: PhosphorTraceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailPoints = useRef<{ x: number; y: number; age: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const render = () => {
      ctx.fillStyle = "rgba(10, 13, 16, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      trailPoints.current.forEach((pt, idx) => {
        pt.age += 0.02;
        if (pt.age > 1) {
          trailPoints.current.splice(idx, 1);
          return;
        }
        const radius = (1 - pt.age) * 24;
        const gradient = ctx.createRadialGradient(pt.x, pt.y, 0, pt.x, pt.y, radius);
        gradient.addColorStop(0, `rgba(52, 211, 153, ${1 - pt.age})`);
        gradient.addColorStop(0.5, `rgba(16, 185, 129, ${(1 - pt.age) * 0.5})`);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };
    render();

    return () => cancelAnimationFrame(animId);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    trailPoints.current.push({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      age: 0,
    });
  }, []);

  return (
    <section className="border-b border-white/10 py-24 px-6 sm:px-16 bg-[#080A0D] text-center">
      <div className="mx-auto max-w-4xl">
        <div className="font-mono text-xs text-emerald-400 mb-2 uppercase">{tag}</div>
        <h3 className="font-serif text-2xl text-white mb-6">{title}</h3>
        <canvas
          ref={canvasRef}
          width={640}
          height={260}
          onMouseMove={handleMouseMove}
          className="mx-auto rounded-xl border border-white/20 bg-black shadow-2xl cursor-crosshair"
        />
      </div>
    </section>
  );
}
