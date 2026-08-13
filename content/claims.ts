/**
 * Business claims and facts that require owner confirmation before launch.
 *
 * Anything not yet confirmed is `null` and never rendered as a statement.
 * See `docs/content-gaps.md` for the review checklist.
 */

export const pendingLabel = "To be confirmed before launch";

export const claims: {
  /** Public contact mailbox shown in the footer and on /contact. */
  contactEmail: string | null;
  /** Public business location, e.g. "London, United Kingdom". */
  location: string | null;
  /** Stated reply time for new inquiries. Only rendered when confirmed. */
  responseTime: string | null;
  /** Fixed-scope sprint option, if one genuinely exists. */
  sprintOption: { name: string; duration: string; scope: string } | null;
  /** Engagement pricing. Null renders as "Scoped after discovery." */
  pricing: string | null;
  /** Real, published social profiles only. */
  social: readonly { label: string; href: string }[];
  /** Verified client logos, with authorisation on file. */
  clientLogos: readonly { name: string; src: string; width: number; height: number }[];
} = {
  contactEmail: null,
  location: null,
  responseTime: null,
  sprintOption: null,
  pricing: null,
  social: [],
  clientLogos: [],
};

export const pricingLabel = claims.pricing ?? "Scoped after discovery.";
