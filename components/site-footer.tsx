import Image from "next/image";
import Link from "next/link";

import { claims } from "@/content/claims";
import { footerNav, site } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-abyss text-graphite-light">
      <div className="mx-auto w-full max-w-[76rem] px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center" aria-label={`${site.name} home`}>
              <Image
                src="/alizane-logo-v5.png"
                alt={site.name}
                width={200}
                height={50}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="display-face mt-5 text-lead text-white">{site.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed">{site.descriptor}</p>
            {claims.location ? <p className="mt-4 text-sm">{claims.location}</p> : null}
            {claims.contactEmail ? (
              <a
                href={`mailto:${claims.contactEmail}`}
                className="mt-2 inline-block text-sm text-white hover:underline"
              >
                {claims.contactEmail}
              </a>
            ) : null}
          </div>

          {footerNav.map((group) => (
            <nav key={group.heading} aria-label={group.heading}>
              <h2 className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-white">
                {group.heading}
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/12 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          {claims.social.length ? (
            <ul className="flex gap-5">
              {claims.social.map((profile) => (
                <li key={profile.href}>
                  <a href={profile.href} className="hover:text-white">
                    {profile.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
