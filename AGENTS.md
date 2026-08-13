# AGENTS.md - Alizane Labs Studio Site Workspace

At the start of EVERY conversation in this workspace, you MUST automatically execute the following 2 steps BEFORE answering:

1. **Read Memory Ledger:** Run `view_file` on `d:\Alizane Labs\Alizane Labs - Antigravity\alizanelabs-site\memory.json`.
2. **Set Persona & Rules:** Adopt the Next.js/Vercel agency site rules in `.antigravity/rules.md`.

## Core Purpose
Manage and update the Next.js site for Alizane Labs, a digital systems studio
offering custom websites and AI automation. Project inquiries are captured at
`/contact` and delivered server-side.
- Repo: `alizanelabs-site`
- Hosting: Vercel ($0)
- Form Lead Webhook: configured via `LEAD_WEBHOOK_URL` (see `README.md`)

## Content rules
Never add testimonials, case studies, client logos, awards, certifications, team
credentials, performance metrics, revenue results, pricing, or delivery promises
that are not confirmed. Unverified facts belong in `content/claims.ts` as `null`;
open items are tracked in `docs/content-gaps.md`.
