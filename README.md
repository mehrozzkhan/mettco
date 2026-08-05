# METTCO — mettco.com.pk

General order supplier, Lahore. Next.js (App Router) + TypeScript + Tailwind CSS, deployed on Vercel.

Nine routes: `/`, `/supply`, `/services`, `/technology`, `/sectors/agriculture`, `/sectors/banking`, `/sectors/industry`, `/about`, `/contact`, `/rfq`. All old-site routes 301 to the nearest surviving page (see `next.config.mjs`).

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (run before pushing)
```

## Edit the facts — one file

Everything the founder may need to change lives in **`src/config/site.ts`**:

| Key | Replace with |
| --- | --- |
| `whatsappNumber` | WhatsApp number, digits only, international format (e.g. `923001234567`) |
| `phoneNumber` / `phoneDisplay` | Dialable number (`+9230...`) / display version (`0300 ...`) |
| `email` | Business email |
| `founderName` | Founder's name (signs the founder note) |
| `ntn` | NTN number (shown on /about and footer) |
| `advisorProjects` | 2–3 factual project lines for /services B-01 (type, city, year, role). Empty array = section hidden. |
| `boilersLive` | `true` to show the A-06 Boilers row on /supply once a boiler source is confirmed |
| `softwarePartnerName` | Set to name the software-house partner on /technology, only once confirmed public |
| `images` | Every image URL on the site (Unsplash CDN). Swap a URL + alt text here to change a photo. |

No component contains any of these values directly.

### Swapping images

Pick a photo on unsplash.com or pexels.com (free for commercial use), copy its CDN URL, and replace the `src` in `images` — keep the `w=` size param and update `alt`. The graphite duotone treatment is applied in CSS (`.img-duotone`), so any photo will match the site's mood. Rules: dark, industrial-documentary subjects only; alt text describes the product category, never implies ownership ("our warehouse" etc. is banned).

## RFQ submissions

`/rfq` posts to `/api/rfq` (validated, honeypot-protected). Delivery:

- **No setup:** submissions are logged — visible in Vercel → Project → Logs. Nothing is lost, but check the logs.
- **Email (recommended):** create a free [Resend](https://resend.com) account, then set Vercel env vars:
  - `RESEND_API_KEY` — from the Resend dashboard
  - `RFQ_TO_EMAIL` — where submissions should arrive (defaults to `site.email`)
  - `RFQ_FROM_EMAIL` — optional; a verified sender on your domain (defaults to Resend's onboarding sender)

Redeploy after setting the vars.

## Deployment

Repo `mehrozzkhan/mettco` → Vercel project `mettco` (already linked via `.vercel/project.json`). Push to `main` deploys production. Manual deploy: `vercel --prod`.

## Design notes

- Design system "Graphite & Signal": graphite `#111417`, paper `#EDEDE8`, one signal accent `#FF5A1F` reserved for CTAs/active states/preloader. Tokens in `tailwind.config.ts`.
- Fonts: Oswald (display), Inter (body), IBM Plex Mono (labels/codes) via `next/font` — self-hosted, subsetted, `display: swap`.
- Motion is CSS-only (preloader, hero entrance, scroll reveal, hover, nav condense). Framer Motion was deliberately dropped: every allowed motion is achievable in CSS at zero JS cost, and the performance budget outranks the library. All motion respects `prefers-reduced-motion`.
- The preloader is time-capped at 1.2s, once per session, and never blocks assets.
- Honesty rules from the build brief are binding: no invented numbers, logos, testimonials, certifications, or banned marketing vocabulary. Check `VALIDATION.md` before shipping copy changes.
