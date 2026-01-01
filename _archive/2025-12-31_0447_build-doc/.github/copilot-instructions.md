# Copilot Project Guide: Radiant System Build Documentation

## Architecture Overview

This workspace contains two interconnected React applications documenting the Radiant Seven system architecture:

- **radiant-manual/** — Next.js 16 + React 19 production app serving interactive documentation with build orders, retrospectives, and evaluations
- **StudioTriptych/app/** — Vite staging ground for converting rd7-full-project-scaffolds HTML into React components before migrating to Next.js

Both apps share design philosophy: extract content from static HTML into structured JSON data, then render via composable React components fed by loaders.

## Workspace Dependencies (Monorepo Context)

`radiant-manual` references external workspace packages (`@clearline7/*`) via pnpm workspace protocol. These packages are NOT in this folder—they exist in a parent monorepo structure:
- [next.config.ts](radiant-manual/next.config.ts#L14-L18) transpiles `@clearline7/theme`, `@clearline7/components`, `@clearline7/set-definitions`
- Webpack config forces React singleton resolution to avoid dual-React issues (lines 27-35)
- If you see import errors for `@clearline7/*`, the parent workspace may not be installed—run `pnpm install` from monorepo root

## radiant-manual: Data-Driven Manual System

**Entry flow:** [src/app/page.tsx](radiant-manual/src/app/page.tsx) → [ManualViewer](radiant-manual/src/components/manual/ManualViewer.tsx) → section views (BuildOrderView, RetrospectiveView, EvaluationView)

**Data loading pattern:**
- JSON source files in [public/data/manual/](radiant-manual/public/data/manual/)
- [json-loader.ts](radiant-manual/src/lib/loaders/json-loader.ts) fetches via `/data/manual/*.json` public URLs
- Types defined in [manual.types.ts](radiant-manual/src/lib/types/manual.types.ts)—all section structures strongly typed

**Component architecture:**
- [ManualViewer](radiant-manual/src/components/manual/ManualViewer.tsx) orchestrates tab state + data loading (client component with `useEffect`)
- [SectionTabs](radiant-manual/src/components/manual/SectionTabs.tsx) controls active section (`build-order | retrospective | evaluation`)
- [BuildOrderView](radiant-manual/src/components/manual/BuildOrderView.tsx) renders array of sections with file structures, core types, code patterns, integration points—uses grid layout with hover states

**Styling:**
- Tailwind v4 (PostCSS mode) with custom dark theme: slate/teal/purple color palette
- Design tokens: teal-300 for primary accent, slate-950 background, border-teal-500/20 for subtle separators
- Sticky header with backdrop blur, hover states on cards (border color transitions)
- All components use utility classes—avoid writing new CSS files

**Build commands (pnpm only):**
- `pnpm dev` → Next dev server
- `pnpm build` → production build with `--webpack` flag (required for monorepo transpilePackages)
- `pnpm lint` → ESLint

## StudioTriptych: HTML-to-React Conversion Staging

**Purpose:** Extract content from [src/pages/rd7-full-project-scaffolds.html](StudioTriptych/app/src/pages/rd7-full-project-scaffolds.html) (design tokens, build diagrams, file structures) into React components.

**Current state:**
- [main.tsx](StudioTriptych/app/src/main.tsx) → [App.tsx](StudioTriptych/app/src/App.tsx) → [StudioTriptych.tsx](StudioTriptych/app/src/pages/StudioTriptych.tsx)
- StudioTriptych is a static landing page with inline styles (hero + studio cards + architecture sections)
- Uses placeholder images: `backgroundImage: 'url(/api/placeholder/...)'`—replace with real assets under `public/`

**Migration plan (from [.github/copilot-instructions.md](StudioTriptych/app/.github/copilot-instructions.md)):**
- Extract rd7 HTML design tokens (colors, typography, spacing) into Tailwind config
- Convert domain sections (RDX Session, Grindhouse, Content Factor, etc.) into data-driven components
- Build components as framework-agnostic—avoid Vite-only APIs for eventual Next.js migration
- Use structured data arrays (like radiant-manual's JSON pattern) instead of massive JSX blocks

**Styling direction:**
- Phase out [index.css](StudioTriptych/app/src/index.css) and [App.css](StudioTriptych/app/src/App.css) when Tailwind is introduced
- rd7 HTML uses high-contrast teal/charcoal palette—preserve in Tailwind utilities
- Keep accessibility: ensure text contrast, keyboard focus states

**Build commands (pnpm):**
- `pnpm dev` → Vite dev server
- `pnpm build` → `tsc -b && vite build`
- `pnpm lint`, `pnpm preview`

## Code Patterns & Conventions

**Component structure:**
- Use `'use client'` directive for client-side state/effects (Next.js)
- Prefer composition: small, single-purpose components over monolithic files
- Export interfaces/types alongside components in separate type files
- Loading/error states required for async data (see ManualViewer pattern)

**Data modeling:**
- JSON files in `public/data/` for static content
- TypeScript interfaces in `src/lib/types/`
- Loader functions in `src/lib/loaders/` that fetch + parse JSON
- Components receive typed props from loaders—never fetch directly in view components

**File organization:**
- `src/components/[feature]/` for feature-specific components (e.g., `manual/`, `RDX/`)
- `src/lib/` for utilities, loaders, types
- `src/app/` for Next.js pages (radiant-manual only)
- `src/pages/` for page-level compositions (StudioTriptych only)
- `public/data/` for static JSON content

**TypeScript:**
- React 19 + TS 5—use modern React APIs (no deprecated patterns)
- Export all types from `*.types.ts` files
- Prefer interface over type for objects, type for unions/primitives

## Integration & Conversion Workflow

When converting HTML content (rd7-full-project-scaffolds) to React:

1. Extract design tokens → Tailwind config or CSS variables
2. Parse content structure → JSON data files (see [convert-sections.ts](radiant-manual/scripts/convert-sections.ts) example)
3. Define TypeScript interfaces for data shape
4. Create loader function to fetch JSON
5. Build presentational components that map over data
6. Add navigation/search metadata (section IDs become anchors)

Example: [BuildOrderView](radiant-manual/src/components/manual/BuildOrderView.tsx) maps over `sections: BuildOrderSection[]` from JSON, rendering each with ID-based anchors for navigation.

## Known Gotchas

- **Monorepo React conflicts:** If you see "multiple React instances" errors, check [next.config.ts](radiant-manual/next.config.ts#L27-L35) webpack aliases—must force single React resolution
- **Public asset paths:** Use `/data/...` not `public/data/...` in fetch calls (Next.js serves `public/` at root)
- **Client vs Server components:** Default to server components in Next.js App Router unless you need state/effects (then add `'use client'`)
- **No routing in StudioTriptych yet:** Single-page app—any multi-section nav should use anchor links until Next.js migration
- **ESLint config:** Both apps use ESM-style eslint.config (v9+)—extend via spread operator, not `.eslintrc`

## Testing & Verification

No test suites present. When adding tests:
- Vitest for StudioTriptych (Vite-native)
- Jest or Vitest for radiant-manual (document choice in package.json scripts)
- Update copilot-instructions.md with test commands

## Design System

**Color palette (consistent across both apps):**
- Background: `slate-950` → `slate-900` gradient
- Primary accent: `teal-300`, `teal-400`, `teal-500`
- Secondary: `purple-300`–`purple-500`, `blue-400`, `amber-400`
- Text: `gray-50` (headers), `gray-300` (body), `gray-400` (muted)
- Borders: `slate-700`, `teal-500/20` (translucent)

**Typography:**
- Font: system-ui stack (no custom fonts yet)
- Headers: bold, tight tracking (`tracking-tight`)
- Mono: `font-mono` for code, file paths, technical labels

**Spacing:**
- Sections: `space-y-24` (large vertical rhythm)
- Cards: `p-6` standard, `gap-6` grids
- Max width: `max-w-6xl` for content containers
