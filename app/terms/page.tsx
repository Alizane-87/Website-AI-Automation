import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { termsNotice, termsSections } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Terms of Service",
    description:
      "Terms of Service governing the use of the Alizane Labs website and our digital products.",
    path: "/terms",
  }),
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms of Service"
      title="Terms of Service"
      intro="These terms govern the use of this website and our digital products."
      bannerNotice={termsNotice}
      sections={termsSections}
    />
  );
}
