"use client";

import Link from "next/link";
import React from "react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E7E5E4] bg-[#F9F9F7]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-serif text-xl font-medium tracking-tight text-[#111827] transition-colors group-hover:text-[#065F46]">
            Alizane Labs
          </span>
        </Link>

        <nav className="hidden items-center gap-7 sm:flex">
          <a
            href="#why"
            className="text-sm font-normal text-[#57534E] transition-colors hover:text-[#111827]"
          >
            Why us
          </a>
          <a
            href="#capabilities"
            className="text-sm font-normal text-[#57534E] transition-colors hover:text-[#111827]"
          >
            Capabilities
          </a>
          <a
            href="#process"
            className="text-sm font-normal text-[#57534E] transition-colors hover:text-[#111827]"
          >
            Process
          </a>
          <a
            href="#price"
            className="text-sm font-normal text-[#57534E] transition-colors hover:text-[#111827]"
          >
            Plans
          </a>
          <a
            href="#faq"
            className="text-sm font-normal text-[#57534E] transition-colors hover:text-[#111827]"
          >
            FAQ
          </a>
          <a
            href="#start"
            className="rounded-md bg-[#065F46] px-4 py-2 text-sm font-medium text-white shadow-xs transition-colors hover:bg-[#064E3B]"
          >
            Get your free plan
          </a>
        </nav>

        <div className="flex items-center gap-3 sm:hidden">
          <a
            href="#start"
            className="rounded-md bg-[#065F46] px-3.5 py-1.5 text-xs font-medium text-white"
          >
            Get a plan
          </a>
        </div>
      </div>
    </header>
  );
}
