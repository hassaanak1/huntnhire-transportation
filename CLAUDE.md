# HuntnHire — Project Context for Claude

## What this project is

A luxury limousine / transportation booking website for **HuntnHire**, built with React + Vite + TypeScript. It was originally scaffolded from a Hercules.app template. All Hercules-specific code, authentication, and the Convex backend have been stripped out and replaced with a clean, self-contained setup.

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

## Project structure

```
├── api/
│   ├── contact.ts          # Vercel function — contact form email
│   ├── booking.ts          # Vercel function — booking request email
│   ├── tsconfig.json       # Separate TS config for API (CommonJS, Node types)
│   └── package.json        # "type": "commonjs" — overrides root ESM for Vercel CJS functions
├── src/
│   ├── components/
│   │   ├── providers/      # Theme, QueryClient, Tooltip wrappers
│   │   ├── ui/             # shadcn/ui components
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── site-layout.tsx
│   ├── pages/
│   │   ├── home/           # Landing page sections
│   │   ├── contact/        # Contact form page
│   │   ├── book/           # Multi-step booking form
│   │   ├── fleet/          # Vehicle fleet page
│   │   ├── about/
│   │   ├── services/       # Services + individual service pages
│   │   └── auth/Callback.tsx  # Redirects to / (auth removed, kept for safety)
│   ├── hooks/
│   │   ├── use-auth.ts     # Stub (auth unused)
│   │   ├── use-page-meta.ts
│   │   └── use-mobile.ts
│   └── lib/utils.ts
├── src/components/scroll-to-top.tsx  # Scrolls window to top on every route change
├── vite.config.ts          # Includes apiDevPlugin for local API handling
├── vercel.json             # SPA rewrite + build config
├── .env                    # Gitignored — local secrets
└── CLAUDE.md               # This file
```

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
