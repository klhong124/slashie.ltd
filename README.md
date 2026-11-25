# Slashie Ltd

Corporate site for [Slashie Ltd](https://slashie.ltd), a UK company (no. 17276315) that helps Cantonese-speaking business owners in the UK grow their business with websites, apps and online systems.

## Pages

| Page | English | 繁中 (zh-HK) |
| --- | --- | --- |
| Home | `/` | `/zh-hk` |
| Services & solutions | `/services` | `/zh-hk/services` |
| Products (Slashie, DanPartners) | `/products` | `/zh-hk/products` |
| Pricing | `/pricing` | `/zh-hk/pricing` |
| Team | `/team` | `/zh-hk/team` |
| Contact (enquiry builder) | `/contact` | `/zh-hk/contact` |
| Privacy | `/privacy` | `/zh-hk/privacy` |

Routes live in `app/[lang]/`. `proxy.ts` serves English from unprefixed URLs by rewriting them to `/en/...`, and redirects any `/en/...` URL to its unprefixed form. Search engines get per-page titles, descriptions, canonical and hreflang links (en-GB, zh-HK, x-default), a bilingual sitemap, and JSON-LD for the business (ProfessionalService with languages and UK service area), its services, FAQs and breadcrumbs. All copy lives in typed files: `content/types.ts`, `content/en.ts` and `content/zh-hk.ts`. The visual system follows [slashie.app](https://slashie.app): Geist, the green `#00DC82` pill, white cards with a hairline and a light shadow.

## Requirements

- [Bun](https://bun.sh) 1.4 or newer
- Node.js 22, which Next.js uses under the hood

## Run

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
bun run build
bun start
```

`bun run lint` runs ESLint.

No environment variables are required. Do not commit secrets.

## Deploy on Vercel

1. Import the GitHub repository `klhong124/slashie.ltd`.
2. Framework preset: Next.js. Vercel uses Bun when `bun.lock` is present.
3. Leave the environment variable list empty.
4. Deploy. The production build command is `bun run build`.

## Point slashie.ltd at Vercel

The domain is registered and not yet pointed anywhere. After the project is deployed:

1. In the Vercel project, open **Settings → Domains** and add `slashie.ltd`. Add `www.slashie.ltd` as well if you want it to redirect.
2. At the registrar, set the DNS records Vercel shows for the domain. Vercel’s usual records, which the dashboard will confirm, are:
   - Apex (`slashie.ltd`): `A` record to `76.76.21.21`
   - `www`: `CNAME` to `cname.vercel-dns.com`
3. Wait for DNS to propagate and for Vercel to issue the certificate. HTTPS is automatic once the domain verifies.

Use the records on the Vercel domain screen if they differ from the ones above.

## Content still needed

Search for `TODO(owner)` in `content/`:

- **Pricing**: every tier shows `£TBC`. Replace `price` (and confirm each tier's `includes`) in `pricing.groups`. Do not publish invented prices or payment terms.
- **Team**: `team.members` is empty and renders nothing. Add people only when they are real and have approved their listing.
- **Pricing comparison**: confirm the feature ticks in `pricing.compare`.
- **Privacy notice**: have `privacy.sections` reviewed.
- **WhatsApp**: set `whatsapp` in `content/company.ts` to show WhatsApp buttons. Empty means hidden.
- **DanPartners**: `products.dan.summary` is a placeholder. Do not invent product or technology details there.

Registered office and company number are the details already published on [slashie.app/terms](https://slashie.app/terms) and the Companies House record. Enquiries go to hello@slashie.ltd.
