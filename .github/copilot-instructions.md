# Radiant System — AI Agent Instructions

## Project Overview

This workspace contains a **multi-repository ecosystem** for story orchestration, document styling, and ritual-based workflows within the Radiant Systems monorepo:

- **radiant-systems/** (current): Unified Turborepo monorepo (Story OS orchestrator + embedded product monorepos)
  - **apps/**: Runnable applications (web, clearline7, vsm-web, sipc-lore, rsys-web)
  - **packages/**: Shared workspace libraries (ui, types, config, data, ritual-brand components)
  - **rco-intra/**: Radiant Protocol orchestrator specifications

**Core Philosophy**: Protocol-first coordination, Design-as-Data, Sovereignty (observe and preserve, never impose).

## Architecture Fundamentals

### radiant-systems/ — Story OS & Product Suite

**Turborepo monorepo** with dual-codebase structure:

1. **Core Orchestrator** (`rco-intra/core/`, `rco-intra/docs/`, `rco-intra/specs/`)
   - Node.js stubs + protocol definitions (implementation pending)
   - Radiant Protocol v0.1 envelope schema: [rco-intra/specs/radiant-schema.json](rco-intra/specs/radiant-schema.json)
   - Message types: `INTENT`, `TRANSFORM_REQUEST`, `TRANSFORM_RESPONSE`, `PIPELINE_REQUEST`, `PIPELINE_RESPONSE`, `ERROR`
   - **Status**: Documentation complete, `orchestrator.js` and `radiant-config.js` are empty stubs

2. **apps/web** — Primary Next.js 16 Application
   - Marketing, docs (MDX), manuals, visualizations
   - Tech: React 19, Next.js 16, Tailwind 4
   - Dev: `pnpm dev` (runs on localhost:3000)

3. **apps/products/** — Embedded product monorepos:
   - **clearline7/**: Document styling system (7 opinionated style sets)
   - **vsm-web/**: VSM training system (React 18, Vite, shadcn/ui)
   - **vrdev-web-port/**: Legacy VR portfolio

4. **packages/** — Shared workspace packages:
   - `ui/`: shadcn/ui components + custom components
   - `types/`: Shared TypeScript interfaces
   - `config/`: ESLint, Tailwind configs
   - `data/`: Data loaders & validators

### rd7xt/VRIT-React/ — Ritual React (Design Token Pipeline) [LEGACY/EXTERNAL]

*Note: This reference is preserved for historical context. Ritual design tokens and components are now integrated into `packages/` within the radiant-systems monorepo.*

- **Design tokens** → Located in `packages/` ritual-related packages
- **Ritual React components** → Located in `packages/ritual-ui/` and similar
- **Critical**: Edit tokens in design-source → rebuild ritual-brand → changes propagate to apps

### style-system/ — Sovereign Style Intelligence

Non-prescriptive introspection system:

- **manifests/**: Raw inventory JSONs (clearline7, vsm-school, etc.)
- **reports/**: Analysis and suggestions
- **schema/**: `manifest.schema.json`, `udl-ingest.schema.json`
- **agents/repo-style-scan/**: Automated scanners

## Developer Workflows

### radiant-systems/

```bash
# Root-level (uses Turbo)
pnpm install
pnpm dev          # Runs all apps/packages
pnpm build        # Builds entire monorepo
pnpm lint         # Lints all packages

# Specific apps
cd apps/web && pnpm dev
cd apps/products/clearline7 && pnpm dev:guide
cd apps/products/vsm-web && pnpm dev
```

### rd7xt/VRIT-React/

```bash
# ALWAYS build tokens first after editing design-source/
# (Note: Actual build commands depend on current workspace package structure)
pnpm --filter ritual-brand build    # Compiles tokens → CSS
pnpm --filter ritual-ui build
pnpm build                          # Build all packages
```

## Critical Conventions

### Component Patterns (shadcn/ui ecosystem)

- **Import utilities**: `import { cn } from "@/lib/utils"` (clsx + tailwind-merge)
- **Component structure** (ClearLine7 pattern):
  ```
  ComponentName/
  ├── index.ts              # Barrel export
  ├── ComponentName.tsx     # Main logic
  ├── style.css            # Component styles
  ├── motion.ts            # Animations
  ├── ComponentName.test.tsx
  └── readme.md
  ```
- **Use Radix UI primitives** via shadcn/ui (Sidebar, Sheet, Dialog, etc.)
- **Testing**: Vitest for unit tests (see `clearline7/packages/theme/src/useSetDefinitionCSS.test.tsx`)

### Design Token Systems

1. **ClearLine7**: SetDefinition classes → CSS variables → Tailwind
   - 7 editions: Federal Flow, Tech Docs, Clerk Room, Blog Posts, Clerical Office Pro, Wiki Guidelines, Clearline7
   - Usage: `<SetDefinitionProvider setDefinition={Clearline7}>`
   - Location: [apps/products/clearline7/packages/set-definitions/](apps/products/clearline7/packages/set-definitions/)

2. **Ritual React**: Design tokens + components
   - Design tokens are compiled → CSS variables → Tailwind
   - **Always rebuild ritual-brand after editing design tokens**

### Protocol & Messaging (Radiant Core)

- All adapters emit/consume Radiant Protocol envelopes
- Adapter location: `rco-intra/core/adapters/`
- Example adapters: `dropframe-adapter.js`, `grindline-adapter.js` (currently stubs)
- Envelope format: `{"id":"uuid","version":"radiant-protocol-v0.1","type":"INTENT","timestamp":"ISO-8601","payload":{},"meta":{"source":"..."}}`
- **Never hardcode workflows** — implement transformers that accept/emit envelopes

### Routing

- **apps/web**: Next.js 16 App Router (`src/app/`)
- **VSM apps**: React Router with BrowserRouter
- **ClearLine7 apps**: React Router with BrowserRouter
- **Archived radiant_systems**: HashRouter (legacy)

## Where to Implement Features

| Feature Type | Location | Example |
|--------------|----------|---------|
| Radiant orchestrator logic | `rco-intra/core/` | `orchestrator.js`, `radiant-config.js` |
| Protocol adapters | `rco-intra/core/adapters/` | `dropframe-adapter.js` |
| Next.js pages/components | `apps/web/src/` | `app/(marketing)/page.tsx` |
| Shared UI components | `packages/ui/src/` | `sidebar.tsx`, `button.tsx` |
| ClearLine7 doc components | `apps/products/clearline7/packages/components/` | `document/Heading/` |
| VSM training features | `apps/products/vsm-web/apps/vsm-school-web/` | `src/components/` |
| Ritual design tokens | `rd7xt/VRIT-React/design-source/TOKENS_SOURCE/` | `phases.json` |
| Ritual UI components | `rd7xt/VRIT-React/packages/ritual-ui/` | Component library |
| Style analysis | `style-system/reports/` | Analysis markdown |

## Key Integration Points

- **Radiant Protocol schema**: [rco-intra/specs/radiant-schema.json](rco-intra/specs/radiant-schema.json)
- **Manual data loading**: `apps/web/src/lib/loaders/json-loader.ts`
- **ClearLine7 theme**: `packages/theme/src/SetDefinitionProvider.tsx`
- **Ritual sound hooks**: `packages/gttm/mission/src/components/CardRitual.tsx` (useRitualSound)
- **Style manifests**: `style-system/manifests/*.json` (UDL ingestion)
- **cn() utility**: Used everywhere for className merging (clsx + tailwind-merge)

## Common Tasks

### Adding a Radiant adapter

1. Create `rco-intra/core/adapters/your-adapter.js`
2. Implement envelope validation (ref: `specs/radiant-schema.json`)
3. Add tests and example in `examples/`

### Adding a ClearLine7 component

1. Create `apps/products/clearline7/packages/components/src/document/YourComponent/`
2. Follow structure: `index.ts`, `YourComponent.tsx`, `style.css`, `motion.ts`, readme
3. Export from `packages/components/src/document/index.ts`
4. Add specimen page in `apps/preview/src/pages/components/`

### Modifying Ritual phases

1. Edit `rd7xt/VRIT-React/design-source/TOKENS_SOURCE/phases.json`
2. Rebuild: `pnpm --filter @gttm/ritual-brand build`
3. Verify CSS in `packages/ritual-brand/dist/ritual.css`

### Adding shared UI to packages/ui/

1. Extract from `apps/web/src/components/` or archived `_archive/radiant_systems/src/components/ui/`
2. Update `packages/ui/src/components/`
3. Update package.json exports

## What NOT To Do

- ❌ Don't implement orchestration logic in Next.js apps — use `rco-intra/core/`
- ❌ Don't hardcode phase colors/durations in Ritual components — use `design-source/TOKENS_SOURCE/`
- ❌ Don't add React code to `design-source/` — tokens and assets only
- ❌ Don't generate creative content in Radiant — it coordinates, doesn't create
- ❌ Don't modify style-system manifests manually — agents generate them
- ❌ Don't conflate `_archive/radiant_systems/` (archived Vite app) with `apps/web/` (active Next.js app)

## Status & Priorities

**Top priorities** (from rdx/TODO.md):
1. Implement `rco-intra/core/orchestrator.js` and `radiant-config.js`
2. Complete adapter implementations with real transport layer
3. Extract shared UI components to `packages/ui/`
4. Write missing docs: `overview.md`, `story-os.md`, `modules.md`, `philosophy.md`

**Known issues**:
- Core orchestrator is empty (stubs only)
- Component duplication between apps (migration in progress)
- Routes not fully wired in archived `radiant_systems/`

## Quick Reference

```bash
# Common commands
pnpm dev                                      # Run everything (from radiant-systems/)
pnpm --filter @clearline7/set-definitions build   # Build specific package
pnpm --filter hub dev                         # Run Ritual hub
turbo build                                   # Build with cache

# Testing
pnpm test                                     # Run all tests
pnpm test:coverage                            # With coverage

# Checking errors
pnpm build                                    # Compile-time checks
```

---

*For detailed architecture: [README.md](README.md), [rd7xt/VRIT-React/context.md](../rd7xt/VRIT-React/context.md), [style-system/README.md](../style-system/README.md)*
