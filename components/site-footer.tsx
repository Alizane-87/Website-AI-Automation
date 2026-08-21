import React from "react";
import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#E7E5E4] bg-[#F9F9F7] py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 sm:flex-row text-xs text-[#78716C]">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <Image
            src="/alizane-mark.svg"
            alt="Alizane Labs Logo"
            width={24}
            height={24}
            className="h-6 w-6 object-contain"
          />
          <Link href="/" className="font-serif text-sm font-medium text-[#111827] hover:text-[#065F46] transition-colors">
            Alizane Labs
          </Link>
          <span>·</span>
          <span>Websites &amp; AI Systems Studio</span>
        </div>

        {/* Legal & Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link
            href="/privacy"
            className="hover:text-[#111827] transition-colors underline underline-offset-4"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="hover:text-[#111827] transition-colors underline underline-offset-4"
          >
            Terms of Service
          </Link>
          <Link
            href="/ai-disclosure"
            className="hover:text-[#111827] transition-colors underline underline-offset-4"
          >
            AI Disclosure
          </Link>
          <a
            href="mailto:hello@alizanelabs.site"
            className="hover:text-[#065F46] transition-colors font-medium"
          >
            hello@alizanelabs.site
          </a>
        </div>

        {/* Copyright */}
        <div>
          <span>© {new Date().getFullYear()} All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
