"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { TrackedLink } from "@/components/tracked-link";
import { cn } from "@/components/ui/cn";
import { cta, nav, signalBar, site } from "@/content/site";
import { analyticsEvents } from "@/lib/analytics";

export function SiteHeader() {
  const pathname = usePathname();
  const [menu, setMenu] = useState({ open: false, pathname });
  const open = menu.open;

  // Navigating closes the mobile menu; adjusting during render avoids an
  // extra committed frame with the menu still open.
  if (menu.pathname !== pathname) setMenu({ open: false, pathname });

  const setOpen = (next: boolean) => setMenu({ open: next, pathname });

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenu({ open: false, pathname });
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, pathname]);

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-abyss text-white">
        <div className="mx-auto flex w-full max-w-[76rem] flex-wrap items-center justify-center gap-x-3 gap-y-1 px-5 py-2 text-center text-xs sm:px-8">
          <span className="inline-flex items-center gap-2 text-graphite-light">
            <span
              aria-hidden="true"
              className="relative inline-flex h-1.5 w-1.5 items-center justify-center"
            >
              <span className="absolute inline-flex h-1.5 w-1.5 rounded-full bg-signal animate-pulse-ring" />
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
            </span>
            {signalBar.text}
          </span>
          <Link
            href={signalBar.href}
            className="font-medium text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
          >
            {signalBar.linkLabel}
          </Link>
        </div>
      </div>

      <header className="border-b border-ink/10 bg-canvas/85 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-[76rem] items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          <Link href="/" className="flex items-center" aria-label={`${site.name} home`}>
            <Image
              src="/alizane-logo-v5.png"
              alt={site.name}
              width={240}
              height={60}
              className="h-9 w-auto object-contain"
              priority
            />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "text-sm transition-colors",
                    active ? "text-ink" : "text-graphite hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <TrackedLink
              href={cta.primary.href}
              event={analyticsEvents.primaryCtaClick}
              location="header"
            >
              {cta.primary.label}
            </TrackedLink>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-4 py-2 text-sm font-medium text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        <div id="mobile-nav" hidden={!open} className="border-t border-ink/10 bg-canvas lg:hidden">
          <nav
            aria-label="Primary mobile"
            className="mx-auto w-full max-w-[76rem] px-5 py-4 sm:px-8"
          >
            <ul className="flex flex-col">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className="block border-b border-ink/8 py-3.5 text-base text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <TrackedLink
              href={cta.primary.href}
              event={analyticsEvents.primaryCtaClick}
              location="header-mobile"
              size="lg"
              className="mt-5 w-full"
            >
              {cta.primary.label}
            </TrackedLink>
          </nav>
        </div>
      </header>
    </div>
  );
}
