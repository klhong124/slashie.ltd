# Slashie Ltd

Corporate site for [Slashie Ltd](https://slashie.ltd), a UK company (no. 17276315) that builds products and provides web and frontend services.

The page is a single scroll: an introduction, Slashie, DanPartners, web and frontend services, a short company story, and an enquiry link. Copy lives in typed files under `content/`. Sections are components under `components/`. The visual system follows [slashie.app](https://slashie.app): Geist, the green `#00DC82` pill, white cards with a hairline and a light shadow.

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

DanPartners public copy is a placeholder. Replace `summary` in `content/products.ts` (marked `TODO(owner)`). Do not invent product or technology details there.

Registered office and company number are the details already published on [slashie.app/terms](https://slashie.app/terms) and the Companies House record. Enquiries go to hello@slashie.ltd.
