import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { termsSections } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Terms",
    description:
      "Terms governing use of the Alizane Labs website. Project work is governed by a separate written agreement.",
    path: "/terms",
  }),
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms of use"
      intro="These terms cover use of this website. Project work is governed by a separate written agreement."
      sections={termsSections}
    />
  );
}
