# Content gaps — confirm before launch

Everything below is unknown or unverified. It is deliberately absent from the
site rather than invented. Fill the value in the listed file and it renders
automatically.

## Business identity — `content/claims.ts`

| Field | Used for | Status |
| --- | --- | --- |
| `contactEmail` | Footer, `/contact` sidebar, Organization schema `email` | `null` |
| `location` | Footer, `/about` header | `null` |
| `responseTime` | `/contact` sidebar, `/thank-you` intro | `null` |
| `sprintOption` | Engagement options on `/` | `null` |
| `pricing` | Engagement options; falls back to "Scoped after discovery." | `null` |
| `social` | Footer links, Organization schema `sameAs` | empty |
| `clientLogos` | Not rendered anywhere until real, approved logos exist | empty |

## Legal identity — `content/legal.ts`

`entityName`, `address`, `privacyEmail`, `contactEmail`, `governingLaw` are all
`null` and render as "To be confirmed before launch". Privacy, terms, and AI
disclosure copy are drafts and need founder plus counsel review.

## Proof — `content/work.ts`

`caseStudies` is intentionally empty. `/work` shows a "no published case studies
yet" state instead. To publish one you need, in writing from the client:

- permission to name them (or an agreed anonymised description),
- the business problem and the decision made,
- the outcomes they are willing to stand behind, with the measurement window,
- approval for any screenshots or media.

`exampleEngagements` are illustrative and labelled as such. They are not client
results and must not be relabelled as such.

## Deliberately absent claims

No testimonials, logos, awards, certifications, team credentials, performance
metrics, revenue figures, published prices, guaranteed timelines, uptime claims,
or compliance assertions appear anywhere on the site. Adding any of these
requires a verified source.

## Configuration

- `NEXT_PUBLIC_SITE_URL` — confirm the production domain. `lib/env.ts` defaults
  to `https://alizanelabs.com`; `lib/lead-delivery.ts` previously referenced
  `alizanelabs.site`. One canonical domain needs to be chosen.
- `LEAD_WEBHOOK_URL` — required in production. Until it is set, `/contact`
  submissions are rejected with a visible error rather than silently dropped.
- `NEXT_PUBLIC_SCHEDULING_URL` — optional. When unset, the booking CTA on
  `/contact` is hidden entirely.
