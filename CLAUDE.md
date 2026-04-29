# Hunt&Hire — Project Context for Claude

## What this project is

A luxury limousine / transportation booking website for **Hunt&Hire**, built with React + Vite + TypeScript. It was originally scaffolded from a Hercules.app template. All Hercules-specific code, authentication, and the Convex backend have been stripped out and replaced with a clean, self-contained setup.

## Tech stack

| Layer      | Choice                                   |
| ---------- | ---------------------------------------- |
| Frontend   | React 19, TypeScript, Vite 7             |
| Styling    | Tailwind CSS v4, shadcn/ui components    |
| Routing    | React Router DOM v7                      |
| Animations | Motion (motion/react)                    |
| Forms      | Controlled React state (no form library) |
| Email      | Mailtrap Sending API                     |
| API routes | Vercel serverless functions (`api/`)     |
| Deployment | Vercel                                   |

## What was removed (Hercules + Convex cleanup)

The original template was built for Hercules.app and included:

- `@usehercules/auth` — OIDC authentication provider
- `@usehercules/vite` — Vite plugin
- `@usehercules/eslint-plugin` — ESLint rules
- `convex` — backend database/mutations
- `@convex-dev/eslint-plugin`
- `oidc-client-ts` + `react-oidc-context` — OIDC dependencies

All of these have been removed. The following files were simplified or deleted:

- `src/components/providers/auth.tsx` → passthrough (no-op)
- `src/components/providers/convex.tsx` → passthrough (no-op)
- `src/components/providers/default.tsx` → wraps only ThemeProvider, QueryClientProvider, TooltipProvider, Toaster
- `src/hooks/use-auth.ts` → stub exports (auth is unused)
- `src/components/ui/signin.tsx` → still present but unused; uses the auth stub
- `src/pages/auth/Callback.tsx` → redirects to `/` immediately
- `convex/` directory → deleted entirely
- `index.html` → removed Hercules og:image meta tags
- `eslint.config.mjs` → removed Hercules and Convex ESLint plugins
- `vite.config.ts` → removed `hercules()` plugin

## Brand name

The brand name is **Hunt&Hire** (with an ampersand). In HTML attribute values use `Hunt&amp;Hire`; in JSX text and JS strings use `Hunt&Hire`. Never write "HuntnHire". Do not change email addresses — they use lowercase `huntnhire` and are correct as-is.

## Forms and email

Both forms submit via `fetch` to Vercel serverless functions. There is no database — submissions are sent directly as emails via the Mailtrap Sending API.

### Contact form (`/contact`)

- Frontend: `src/pages/contact/page.tsx`
- API route: `api/contact.ts`
- Posts `{ name, email, phone?, subject, message }`

### Booking form (`/book`)

- Frontend: `src/pages/book/page.tsx`
- API route: `api/booking.ts`
- 4-step multi-page form (Event → Trip → Personal Info → Review)
- Posts full booking payload on final step
- `passengers` and `hoursNeeded` are stored as `string` in `BookingFormData` (not `number`) — this allows the fields to be fully cleared while typing. They are parsed with `parseInt` at validation time and on submit. Do not change these back to `number` with a `|| 1` fallback; that was the original bug (clearing the field snapped it back to 1).

### Environment variables

Stored in `.env` (gitignored — never committed). Must also be added to **Vercel dashboard → Settings → Environment Variables** for production.

```
MAILTRAP_API_TOKEN=...
SENDER_EMAIL=auto@shujasaqib.me
RECEIVER_EMAIL=iamshujasaqib@gmail.com
```

These are server-side only — intentionally NOT prefixed with `VITE_` so they are never bundled into the browser.

**Sender domain requirement**: `shujasaqib.me` must be verified under Sending Domains in the Mailtrap dashboard before emails will send successfully.

## Local development

```bash
npm run dev   # starts Vite on localhost:5173
```

The `api/contact` and `api/booking` routes are handled by a **Vite dev middleware plugin** defined inside `vite.config.ts` (`apiDevPlugin`). This intercepts `/api/*` requests directly in the Vite dev server — no `vercel dev`, no separate API server, no Vercel account needed for local testing.

The plugin reads env vars via Vite's `loadEnv(mode, cwd, "")` (empty prefix = loads all vars, not just `VITE_`-prefixed ones), so `MAILTRAP_API_TOKEN` etc. are available server-side without being exposed to the browser bundle.

## Production deployment (Vercel)

```bash
npm run build   # tsc -b && vite build → outputs dist/
```

`vercel.json` is configured with:

- `buildCommand`: `npm run build`
- `outputDirectory`: `dist`
- Rewrite `/((?!api/).*) → /index.html` — serves the SPA for all non-API routes (React Router handles client-side navigation)

Vercel auto-detects files in `api/` as Node.js serverless functions. The `api/tsconfig.json` configures TypeScript for CommonJS output compatible with Vercel's Node.js runtime. Types come from `@vercel/node` (devDependency).

**ESM/CJS module conflict**: The root `package.json` has `"type": "module"` (required by Vite), which tells Node.js to load all compiled `.js` files as ES modules. The API functions compile to CommonJS (per `api/tsconfig.json`). Without a local override, Node.js tries to load the CJS bundle as ESM and crashes — `FUNCTION_INVOCATION_FAILED` — before any handler code runs. The `api/package.json` with `"type": "commonjs"` overrides the root setting for that directory only, so the CJS bundle loads correctly. **Do not delete `api/package.json`.**

## Business contact details

| Field   | Value                                    |
| ------- | ---------------------------------------- |
| Phone   | (214) 253-8405 / `tel:+12142538405`      |
| Email   | admin@huntnhire.co                       |
| Address | 2019 Allen St, Dallas, TX 75204, United States |

These appear throughout the app (header, footer, contact page, hero, service pages, book page, about page, floating CTA, structured data). When updating contact details, search for the old value across all `src/` files — do not update just one location.

## Routes

| Path                          | Component                                              |
| ----------------------------- | ------------------------------------------------------ |
| `/`                           | `src/pages/Index.tsx`                                  |
| `/services`                   | `src/pages/services/page.tsx`                          |
| `/services/limo-service`      | `src/pages/services/limo-service/page.tsx`             |
| `/services/party-bus`         | `src/pages/services/party-bus/page.tsx`                |
| `/services/corporate`         | `src/pages/services/corporate/page.tsx`                |
| `/services/airport-transfers` | `src/pages/services/airport-transfers/page.tsx`        |
| `/services/wedding`           | `src/pages/services/wedding/page.tsx`                  |
| `/fleet`                      | `src/pages/fleet/page.tsx`                             |
| `/about`                      | `src/pages/about/page.tsx`                             |
| `/contact`                    | `src/pages/contact/page.tsx`                           |
| `/book`                       | `src/pages/book/page.tsx`                              |
| `/privacy-policy`             | `src/pages/privacy/page.tsx`                           |
| `/auth/callback`              | `src/pages/auth/Callback.tsx` (redirects to `/`)       |
| `*`                           | `src/pages/NotFound.tsx`                               |

## Project structure

```
├── api/
│   ├── contact.ts              # Vercel function — contact form email
│   ├── booking.ts              # Vercel function — booking request email
│   ├── tsconfig.json           # Separate TS config for API (CommonJS, Node types)
│   └── package.json            # "type": "commonjs" — overrides root ESM for Vercel CJS functions
├── src/
│   ├── assets/
│   │   └── fleet/              # Fleet vehicle images (jpg/webp)
│   ├── components/
│   │   ├── providers/          # Theme, QueryClient, Tooltip wrappers
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── floating-cta.tsx
│   │   ├── trust-bar.tsx
│   │   ├── scroll-to-top.tsx   # Scrolls to top on every route change
│   │   ├── site-layout.tsx
│   │   └── seo/
│   │       └── structured-data.tsx  # JSON-LD schema (LocalBusiness, Organization, Service, etc.)
│   ├── hooks/
│   │   ├── use-auth.ts         # Stub (auth unused)
│   │   ├── use-debounce.ts
│   │   ├── use-mobile.ts
│   │   └── use-page-meta.ts
│   ├── pages/
│   │   ├── home/
│   │   │   └── _components/    # hero-section, services-section, fleet-section,
│   │   │                       # testimonials-section, why-choose-us, cta-section
│   │   ├── contact/page.tsx
│   │   ├── book/page.tsx
│   │   ├── fleet/
│   │   │   ├── _lib/fleet-data.ts   # Vehicle data array
│   │   │   └── page.tsx
│   │   ├── about/page.tsx
│   │   ├── services/
│   │   │   ├── _components/service-page-template.tsx
│   │   │   ├── _lib/service-data.ts
│   │   │   ├── page.tsx
│   │   │   ├── limo-service/page.tsx
│   │   │   ├── party-bus/page.tsx
│   │   │   ├── corporate/page.tsx
│   │   │   ├── airport-transfers/page.tsx
│   │   │   └── wedding/page.tsx
│   │   ├── privacy/page.tsx
│   │   ├── auth/Callback.tsx   # Redirects to / immediately
│   │   ├── Index.tsx           # Home page
│   │   └── NotFound.tsx
│   ├── lib/utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── vite.config.ts              # Includes apiDevPlugin for local API handling
├── vercel.json                 # SPA rewrite + build config
├── index.html
├── .env                        # Gitignored — local secrets
└── CLAUDE.md                   # This file
```

## Analytics

Vercel Web Analytics is enabled via `@vercel/analytics/react`. The `<Analytics />` component is mounted inside `<DefaultProviders>` in `App.tsx`, after `</BrowserRouter>`.

**Important**: always import from `@vercel/analytics/react`, never `@vercel/analytics/next` — the `/next` entrypoint uses Next.js App Router APIs that don't exist in Vite and will cause a blank page crash.

Analytics data is only collected in production (deployed to Vercel). Locally it runs as a no-op.

## Lockfile and package manager

The project uses **npm**. A `package-lock.json` is committed to the repo. There is no `pnpm-lock.yaml` — it was deleted because Vercel was picking it up (leftover from the original Hercules template), seeing it was out of sync with `package.json` after the dependency cleanup, and failing with `ERR_PNPM_OUTDATED_LOCKFILE`.

- Always use `npm install` locally, not pnpm or yarn.
- If a `pnpm-lock.yaml` ever reappears, delete it — it will break Vercel CI.

## Key decisions and constraints

- **No auth**: Authentication was part of the Hercules template but is unused in this project. The stub files (`use-auth.ts`, `signin.tsx`, `auth/Callback.tsx`) are left in place to avoid breaking anything but do nothing.
- **No database**: Convex was the original data store. It has been removed entirely. Form submissions go straight to email — nothing is persisted.
- **API token security**: The Mailtrap token must never have a `VITE_` prefix — that would expose it in the client bundle. All email logic lives exclusively in `api/` (production) and the Vite server-side plugin (development).
- **Do not add `vercel dev` back as the dev command** — it requires Vercel account linking and provides no benefit over the current Vite middleware approach.
- **Do not commit `pnpm-lock.yaml`** — Vercel detects it before `package-lock.json` and will try to use pnpm, breaking the build.
- **Do not delete `api/package.json`** — it fixes the `FUNCTION_INVOCATION_FAILED` crash caused by the ESM/CJS module conflict between the root `"type": "module"` and the CommonJS API bundles. See the Production deployment section for full explanation.
- **Navigation scroll-to-top**: `ScrollToTop` (`src/components/scroll-to-top.tsx`) is mounted inside `<BrowserRouter>` in `App.tsx`. It calls `window.scrollTo(0, 0)` on every `pathname` change. `SiteLayout` wraps `<Outlet>` in a `motion.div` keyed by pathname for a 180ms fade-in on each page transition. Do not remove the `key={pathname}` — without it, Motion won't re-trigger the animation on navigation.
- **WeddingWire & The Knot partner badges**: Four trust badges (WeddingWire partner, Review us on The Knot, Couples love us on The Knot, As Seen on The Knot) are placed in the **testimonials section** (`src/pages/home/_components/testimonials-section.tsx`) as an "As Featured On" row below the review cards. They are intentionally **not** in the footer.
