"use client";

import React, { useRef, useState, useEffect } from "react";

interface CipherDecryptProps {
  ciphers?: string[];
  targets?: string[];
  tag?: string;
}

const DEFAULT_CIPHERS = ["0x8F_ENCLAVE", "0x3A_NEURAL", "0x9C_DISPATCH", "0x11_VERIFIED"];
const DEFAULT_TARGETS = ["SECURE ENCLAVE", "AI NEURAL CORE", "INSTANT DISPATCH", "100% VERIFIED"];

export function CipherDecrypt({
  ciphers = DEFAULT_CIPHERS,
  targets = DEFAULT_TARGETS,
  tag = "Device 19 · Hexadecimal Cipher Decryption",
}: CipherDecryptProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      setProgress(Math.min(1, Math.max(0, (vh - rect.top) / (rect.height + vh))));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="border-b border-white/10 py-24 px-6 sm:px-16 bg-[#07090C]">
      <div className="mx-auto max-w-4xl">
        <div className="font-mono text-xs text-emerald-400 mb-4 uppercase">{tag}</div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
          {ciphers.map((cipher, idx) => {
            const isDecrypted = progress >= (idx + 1) * 0.22;
            return (
              <div key={idx} className="rounded-xl border border-white/15 bg-black/60 p-4">
                <div className="text-[10px] text-gray-500">BLOCK 0{idx + 1}</div>
                <div
                  className={`mt-1 font-bold text-sm ${
                    isDecrypted ? "text-emerald-400" : "text-amber-400 animate-pulse"
                  }`}
                >
                  {isDecrypted ? targets[idx] : cipher}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
