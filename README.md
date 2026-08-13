# Alizane Labs website

Marketing site for Alizane Labs — a digital systems studio building custom
websites and practical AI automation.

Next.js (App Router) · TypeScript · Tailwind CSS v4 · deployed on Vercel.

## Local development

```bash
npm install
cp .env.example .env.local   # then set NEXT_PUBLIC_SITE_URL
npm run dev
```

```bash
npm run lint        # eslint
npm run typecheck   # tsc --noEmit
npm run build       # production build
```

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Positioning, services, illustrative automation walkthrough, process, FAQ |
| `/work` | How projects are approached, plus labelled example engagements |
| `/services/websites` | Custom website capability detail |
| `/services/ai-automation` | Automation capability detail and boundaries |
| `/process` | Four-stage engagement model with inputs and deliverables |
| `/about` | Studio positioning, beliefs, and working practices |
| `/contact` | Three-step project intake form |
| `/ai-disclosure` | How automation is used in delivered systems |
| `/privacy`, `/terms` | Legal drafts pending review |
| `/thank-you` | Post-submission confirmation (noindex) |

Routes from the previous restoration-specific site (`/restoration-emergency-engine`,
`/how-it-works`, `/pricing`, `/dispatch-audit`, `/ai-call-disclosure`) are
permanently redirected in `next.config.ts`.

## Structure

| Path | Purpose |
| --- | --- |
| `app/` | Routes plus `api/lead` (server-side intake), `sitemap.ts`, `robots.ts` |
| `components/` | Header, footer, forms, visuals, and `ui/` primitives (button, card, section) |
| `content/` | All editable copy: `site.ts`, `service-pages.ts`, `process-page.ts`, `about-page.ts`, `work.ts`, `faqs.ts`, `legal.ts`, `claims.ts` |
| `lib/` | `env.ts` (validated env), `lead-schema.ts`, `lead-delivery.ts`, `rate-limit.ts`, `analytics.ts`, `structured-data.ts`, `metadata.ts` |
| `docs/` | Content gaps, asset manifest, analytics event reference |

Unverified business facts live only in `content/claims.ts`. Anything still unknown
is `null` there and simply does not render — no placeholder invention.

## Environment variables

| Name | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yes in production | Absolute origin for canonicals, sitemap, Open Graph |
| `NEXT_PUBLIC_SCHEDULING_URL` | No | External scheduler. Unset ⇒ CTAs route to `/contact` |
| `LEAD_WEBHOOK_URL` | Yes in production | Server-side destination for project inquiries |
| `LEAD_WEBHOOK_TOKEN` | No | Bearer token for the lead webhook |
| `LEAD_NOTIFY_EMAIL` | No | Mailbox passed to the destination for notification routing |

Env is validated at startup in `lib/env.ts`; invalid values fail the build rather
than degrading silently. With no `LEAD_WEBHOOK_URL`, development logs that a lead
arrived (without contact details) and **production rejects the submission with a
visible error** instead of discarding it.

## Content and claims policy

Never add testimonials, case studies, client logos, awards, certifications, team
credentials, performance metrics, revenue results, pricing, or delivery promises
that are not confirmed. Example engagements on `/work` are clearly labelled as
illustrative and must stay that way until a client approves a real case study.
The automation walkthrough on `/` and `/services/ai-automation` states that it is
illustrative, sends no request, and collects no input.

`content/legal.ts` holds draft privacy, terms, and AI-disclosure copy. Values the
founder still has to supply (legal entity, address, privacy contact, governing
law) are `null` and render as "To be confirmed before launch". Legal drafts
require founder and counsel review before launch.

Open items are tracked in [`docs/content-gaps.md`](docs/content-gaps.md).
