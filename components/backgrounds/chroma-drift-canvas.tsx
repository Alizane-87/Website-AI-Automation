"use client";

import React, { useState, useEffect } from "react";

interface ChromaDriftCanvasProps {
  children?: React.ReactNode;
}

export function ChromaDriftCanvas({ children }: ChromaDriftCanvasProps) {
  const [hue, setHue] = useState(160);

  useEffect(() => {
    const handleScroll = () => {
      const p = (window.scrollY / (document.body.scrollHeight || 1)) * 360;
      setHue(Math.round(150 + p * 0.4));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        backgroundColor: `hsl(${hue}, 35%, 6%)`,
        transition: "background-color 0.4s ease-out",
      }}
      className="relative min-h-[380px] w-full overflow-hidden rounded-3xl border border-white/10 p-8 text-[#F4F2EF]"
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
