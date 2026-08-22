import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { AiChatWidget } from "@/components/ai-chat-widget";
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
    "custom website design",
    "web design studio",
    "AI automation",
    "AI assistant for business",
    "lead capture automation",
    "conversion focused website",
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
