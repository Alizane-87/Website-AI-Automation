"use client";

import { usePathname } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AiChatWidget } from "@/components/ai-chat-widget";
import { ReactNode } from "react";

export function GlobalAgencyLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isDemo = pathname?.startsWith("/demo");

  // On /demo routes, render purely the standalone contractor website with zero agency header/chat overlap
  if (isDemo) {
    return <main id="main" className="flex-1">{children}</main>;
  }

  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter />
      <AiChatWidget />
    </>
  );
}
