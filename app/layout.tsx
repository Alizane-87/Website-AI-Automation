import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { RevealProvider } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/content/site";
import { siteUrl } from "@/lib/env";
import { organizationSchema } from "@/lib/structured-data";

import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const displaySerif = Instrument_Serif({
  variable: "--font-display-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: site.defaultTitle,
    template: `%s | ${site.name}`,
  },
  description: site.defaultDescription,
  applicationName: site.name,
  keywords: [
    "AI phone answering",
    "AI voice assistant",
    "website AI chat",
    "lead automation",
    "automated follow up",
    "instant lead response",
    "speed to lead",
    "Alizane Labs",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.defaultTitle,
    description: site.defaultDescription,
    url: siteUrl,
    images: [
      {
        url: "/alizane-logo.png",
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.defaultTitle,
    description: site.defaultDescription,
    images: ["/alizane-logo.png"],
  },
  robots: { index: true, follow: true },
};

import { GlobalAgencyLayout } from "@/components/global-agency-layout";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${displaySerif.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,400,600,700&f[]=cabinet-grotesk@400,700,800,900&f[]=satoshi@400,500,700,900&f[]=general-sans@400,500,600,700&f[]=chillax@400,500,600,700&f[]=sentient@300,400,500,700&f[]=panchang@400,600,700,800&f[]=switzer@400,500,600,700,800&f[]=ranade@400,500,600,700&f[]=zodiak@400,600,700,800&f[]=telma@400,500,700&f[]=tanker@400&f[]=array@400,600,700&f[]=stardom@400,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Besley:ital,wght@0,400..900;1,400..900&family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Castoro+Titling&family=Cinzel+Decorative:wght@400;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&family=DM+Serif+Display:ital@0;1&family=Epilogue:ital,wght@0,400..900;1,400..900&family=Fragment+Mono:ital@0;1&family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Instrument+Serif:ital@0;1&family=Italiana&family=JetBrains+Mono:ital,wght@0,400;0,600;0,700;1,400&family=Manrope:wght@400;500;600;700;800&family=Newsreader:ital,opsz,wght@0,6..72,400..800;1,6..72,400..800&family=Outfit:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400&family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Prata&family=Red+Hat+Mono:ital,wght@0,400..700;1,400..700&family=Space+Grotesk:wght@400;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Syne:wght@400;600;700;800&family=Syne+Mono&family=Unbounded:wght@400;600;800;900&family=Urbanist:ital,wght@0,400..900;1,400..900&display=swap"
        />
      </head>
      <body className="flex min-h-full flex-col bg-canvas">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        <GlobalAgencyLayout>{children}</GlobalAgencyLayout>
        <RevealProvider />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
