import React from "react";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#E7E5E4] bg-[#F9F9F7] py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row text-xs text-[#78716C]">
        <div className="flex items-center gap-3">
          <span className="font-serif text-sm font-medium text-[#111827]">Alizane Labs</span>
          <span>·</span>
          <span>Websites &amp; AI Systems Studio</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="mailto:hello@alizanelabs.site"
            className="hover:text-[#065F46] transition-colors underline underline-offset-4"
          >
            hello@alizanelabs.site
          </a>
          <span>© {new Date().getFullYear()} All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
