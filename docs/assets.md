# Asset manifest

## In use

| File | Where | Notes |
| --- | --- | --- |
| `public/alizane-logo-v5.png` | Header, footer | Rendered through `next/image` at `h-9`/`h-8`; needs a transparent background |
| `app/icon.jpg` | Favicon / app icon | Generated route, served at `/icon.jpg` |

## Present but unused

`public/Logo.png`, `public/alizane-logo-v2.png`, `public/alizane-logo-v3.png` —
earlier logo revisions. Safe to delete once the final mark is confirmed.

## Still needed

| Asset | Purpose | Spec |
| --- | --- | --- |
| Open Graph image | Social sharing for every route | 1200×630 PNG, at `public/og.png`, then referenced from `lib/metadata.ts` |
| SVG logo | Crisper header rendering at any density | Single-colour SVG with transparent background |
| Project media | Case studies on `/work` | Only with written client approval; see `docs/content-gaps.md` |

No stock photography or placeholder imagery is used. Site visuals are built in
CSS (`components/hero-system.tsx`, `components/automation-demo.tsx`) so nothing
implies work or clients that do not exist. Both are decorative or explicitly
labelled illustrative.
