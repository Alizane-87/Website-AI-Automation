"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ReactNode } from "react";

export function GlobalAgencyLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isWorkspace =
    pathname?.startsWith("/studio") || pathname?.startsWith("/lab");

  // On /studio and /lab routes, isolate canvas with zero agency header/chat overlap
  if (isWorkspace) {
    return <main id="main" className="flex-1">{children}</main>;
  }

  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter />
      {/*
        The chat widget is the Alizane chatbot service, embedded exactly the way
        a client embeds it — one script tag, tenant resolved from data-client-id.
        Everything it says comes from the `alizane-agency` row in client_chatbots,
        so the prompt is edited in the database, never here.
      */}
      <Script
        src="https://chat.alizanelabs.site/embed.js"
        data-client-id="alizane-agency"
        strategy="afterInteractive"
      />
    </>
  );
}
