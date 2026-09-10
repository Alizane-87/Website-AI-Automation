"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export function SiteHeader() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentScroll = window.scrollY;
        setScrollProgress(Math.min(100, Math.max(0, (currentScroll / totalScroll) * 100)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E7E5E4] bg-[#F9F9F7]/90 backdrop-blur-md transition-shadow duration-200">
      {/* Dynamic Reading Scroll Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#065F46] via-[#059669] to-[#34D399] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/alizane-mark.svg"
            alt="Alizane Labs Logo"
            width={32}
            height={32}
            className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1"
            priority
          />
          <span className="font-serif text-xl font-medium tracking-tight text-[#111827] transition-colors group-hover:text-[#065F46]">
            Alizane Labs
          </span>
        </Link>

        <nav className="hidden items-center gap-6 sm:flex">
          <Link
            href="/"
            className="text-sm font-normal text-[#57534E] transition-colors hover:text-[#111827]"
          >
            Home
          </Link>
          <Link
            href="/conversion-chat"
            className="text-sm font-normal text-[#57534E] transition-colors hover:text-[#111827]"
          >
            Conversion Chat
          </Link>
          <Link
            href="/product"
            className="text-sm font-normal text-[#57534E] transition-colors hover:text-[#111827]"
          >
            Conversion Desk
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-normal text-[#57534E] transition-colors hover:text-[#111827]"
          >
            Pricing
          </Link>
          <Link
            href="/pricing#start"
            className="relative overflow-hidden rounded-md bg-[#065F46] px-4 py-2 text-sm font-medium text-white shadow-xs transition-all duration-200 hover:bg-[#064E3B] hover:shadow-sm active:scale-98"
          >
            Get your plan
          </Link>
        </nav>

        <div className="flex items-center gap-3 sm:hidden">
          <Link
            href="/pricing#start"
            className="rounded-md bg-[#065F46] px-3.5 py-1.5 text-xs font-medium text-white shadow-xs active:scale-95"
          >
            Get plan
          </Link>
        </div>
      </div>
    </header>
  );
}
