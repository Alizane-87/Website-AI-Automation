import { siteUrl } from "@/lib/env";
import { claims } from "@/content/claims";
import { site } from "@/content/site";
import type { Faq } from "@/content/faqs";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: siteUrl,
    description: site.descriptor,
    slogan: site.tagline,
    ...(claims.contactEmail ? { email: claims.contactEmail } : {}),
    ...(claims.social.length ? { sameAs: claims.social.map((profile) => profile.href) } : {}),
  };
}

export function serviceSchema({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType,
    description,
    provider: { "@type": "Organization", name: site.name, url: siteUrl },
    areaServed: { "@type": "Place", name: "Worldwide" },
    url: `${siteUrl}${path}`,
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

/** Breadcrumbs for pages nested below the homepage. */
export function breadcrumbSchema(trail: readonly { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path === "/" ? "" : item.path}`,
    })),
  };
}
