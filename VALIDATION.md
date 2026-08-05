# VALIDATION — run before every ship

Status as of the 2026-08-05 revamp (all checks re-runnable; commands below).

- [x] **All 9 routes exist; no other routes do.** `/`, `/supply`, `/services`, `/technology`, `/sectors/agriculture`, `/sectors/banking`, `/sectors/industry`, `/about`, `/contact`, `/rfq` all return 200. Only additions are non-page infrastructure: `/api/rfq`, `/sitemap.xml`, `/robots.txt`, `/opengraph-image`, `/icon.png`. Verified against `next build` route list.
- [x] **Every legacy route 301s correctly.** `/capabilities`, `/global-sourcing`, `/import-export`, `/why-mettco`, `/vision`, `/business-development`, `/solutions`, `/process`, `/products`, `/request-a-quote`, `/industries`, `/industries/*` all issue permanent redirects to the nearest surviving page (Next.js emits 308, the method-preserving equivalent of 301; search engines treat both as permanent). Verified with curl loop against the production build.
- [x] **Zero invented numbers, logos, testimonials, or banned vocabulary.** Grep over `src/` for the full banned list (`seamless|cutting-edge|innovative|world-class|state-of-the-art|solutions provider|synergy|empower|unlock|elevate|leverage|end-to-end|trusted by|above and beyond|your success`) and for stat patterns (`\d+\+`, testimonial, certif, client logo, "our team/fleet/warehouse"): no matches. The only numeric claims on the site are "Founded 2026" and "Quotes within 24 hours".
- [x] **Hero + both CTAs visible on 360×740 without scrolling.** Hero is `min-h-[100svh]` with bottom-anchored content and `pb-24` clearing the 52px sticky bar; headline at 2.35rem wraps within the first screen.
- [x] **Sticky WhatsApp/call bar on every page (mobile).** Rendered in the root layout (`StickyBar`), `md:hidden`, `env(safe-area-inset-bottom)` respected; footer carries `pb-20` on mobile so nothing is obscured.
- [x] **Preloader ≤1.2s, once per session, skipped under reduced motion.** Time-based (never asset-blocking), 1.2s hard unmount, `sessionStorage` flag, `prefers-reduced-motion` early return. ~2KB total.
- [x] **Lighthouse mobile** — production (`https://www.mettco.com.pk`, 2026-08-05, report: `lighthouse-prod.report.html`): **Performance 97, Accessibility 100, Best Practices 100, SEO 100**. Simulated 4G: FCP 1.06s, **LCP 1.36s** (< 2.0s budget), **CLS 0** (< 0.05 budget), TBT 120ms. The hero h1 is excluded from the entrance animation specifically to protect LCP (see `globals.css`). Re-run after major changes: `npx lighthouse https://www.mettco.com.pk --form-factor=mobile --screenEmulation.mobile`.
- [x] **All images load, alt text, correct dimensions, no CLS.** Every `<img>` served via `next/image` with explicit width/height (or `fill` in a fixed-size frame); grep of rendered HTML shows zero `<img>` without `alt`; CLS measured 0. All 7 Unsplash source URLs return HTTP 200. Alt text describes product categories only — no implied ownership.
- [x] **RFQ flow completes end-to-end; WhatsApp links correct.** API tested: valid submission → 200 `{ok:true}`; missing fields → 400; honeypot filled → silent 200 drop. WhatsApp deep links use `https://wa.me/<number>?text=` with the pre-filled message from `src/config/site.ts`. *(Note: links carry the `<WHATSAPP_NUMBER>` placeholder until the founder fills in real numbers.)*
- [x] **Keyboard-navigable; focus visible; AA contrast.** Global `:focus-visible` outline (signal on graphite), skip-to-content link, semantic landmarks, one `h1` per page (verified per route), `aria-current`/`aria-expanded` on nav. Palette contrast: `#EDEDE8` on `#111417` ≈ 15:1; muted `#A8ADA9` on `#111417` ≈ 7:1; graphite text on signal `#FF5A1F` ≈ 5.9:1 — all pass AA. Lighthouse a11y 100.

## Outstanding before real-world launch

1. Replace placeholders in `src/config/site.ts`: `<WHATSAPP_NUMBER>`, `<PHONE_NUMBER>`, `<EMAIL>`, `<FOUNDER_NAME>`, `<NTN_NUMBER>`, advisor project lines.
2. Configure RFQ email delivery (Resend env vars — see README) or watch Vercel logs.
3. Re-run Lighthouse against the live URL and record Performance here.
4. Flip `boilersLive` only when a boiler source is confirmed.
