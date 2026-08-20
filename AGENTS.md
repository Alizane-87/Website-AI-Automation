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

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
