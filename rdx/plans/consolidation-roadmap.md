# Radiant System Consolidation Roadmap

**Created:** 2025-12-31  
**Status:** Planning  
**Goal:** Unify three apps into single Next.js monorepo with shared component library

---

## Target Architecture

```
radiant-system/
├── apps/
│   └── web/                       # Unified Next.js 16 app
│       ├── src/app/
│       │   ├── (marketing)/      # Public marketing
│       │   ├── (docs)/           # Documentation
│       │   ├── manual/           # Build order manual
│       │   └── studios/          # Studio pages
│       ├── public/data/          # JSON data files
│       └── package.json
├── packages/
│   ├── ui/                        # @radiant/ui
│   ├── config/                    # @radiant/config
│   ├── types/                     # @radiant/types
│   └── data/                      # @radiant/data
├── core/                          # Node.js orchestrator
├── turbo.json
└── pnpm-workspace.yaml
```

---

## Phase 1: Foundation (Week 1)

### Goals
- Monorepo structure established
- Shared packages created
- Build pipeline working

### Tasks

#### 1.1 Initialize Monorepo
- [ ] Choose build system (Turborepo recommended)
- [ ] Install Turborepo: `pnpm add -Dw turbo`
- [ ] Create `turbo.json` with pipeline config
- [ ] Create `pnpm-workspace.yaml`
- [ ] Update root `package.json` with workspace scripts

#### 1.2 Create Shared Packages

**@radiant/ui:**
- [ ] Create `packages/ui/` directory
- [ ] Initialize `package.json` with proper exports
- [ ] Copy shadcn/ui components from `radiant_systems/src/components/ui/`
- [ ] Extract custom components (Header, Footer, etc.)
- [ ] Create `packages/ui/src/lib/utils.ts` with `cn()` function
- [ ] Set up TailwindCSS config
- [ ] Add TypeScript config with path aliases
- [ ] Test build: `pnpm --filter @radiant/ui build`

**@radiant/config:**
- [ ] Create `packages/config/` directory
- [ ] Create `packages/config/eslint-config/` with shared ESLint rules
- [ ] Create `packages/config/typescript-config/` with `tsconfig.base.json`
- [ ] Create `packages/config/tailwind-config/` with shared Tailwind theme
- [ ] Export configs from each subdirectory

**@radiant/types:**
- [ ] Create `packages/types/` directory
- [ ] Create `packages/types/src/protocol.ts` from `specs/radiant-schema.json`
- [ ] Create `packages/types/src/manual.ts` from `radiant-manual/src/types/`
- [ ] Create `packages/types/src/index.ts` with re-exports
- [ ] Add Zod for runtime validation

**@radiant/data:**
- [ ] Create `packages/data/` directory
- [ ] Create `packages/data/src/loaders/` with JSON loaders
- [ ] Create `packages/data/src/validators/` with Zod schemas
- [ ] Port `json-loader.ts` from radiant-manual
- [ ] Add TanStack Query hooks

#### 1.3 Configure Build Pipeline
- [ ] Add Turborepo pipeline for `build`, `lint`, `test`, `dev`
- [ ] Configure caching in `turbo.json`
- [ ] Set up dependency graph (`packages/ui` → `apps/web`)
- [ ] Test parallel builds: `pnpm turbo build`

### Deliverables
- ✅ Monorepo structure
- ✅ Four shared packages building
- ✅ Turborepo pipeline running

### Success Criteria
```bash
pnpm turbo build  # All packages build successfully
pnpm turbo lint   # All packages pass linting
```

---

## Phase 2: Integration (Week 2-3)

### Goals
- Next.js app created
- All content migrated
- Consistent UX across all pages

### Tasks

#### 2.1 Create Unified Next.js App

- [x] Create `apps/web/` directory
- [x] Initialize Next.js 16: `pnpm create next-app@latest apps/web`
- [x] Configure Next.js with:
  - TypeScript strict mode
  - App router
  - TailwindCSS
  - `@radiant/ui` import
  - `@radiant/types` import
- [x] Set up layout with Header/Footer from `@radiant/ui`
- [x] Configure environment variables

#### 2.2 Migrate radiant_systems Pages

**Route structure:**
```
apps/web/src/app/
├── (marketing)/
│   ├── page.tsx                 # Index (Home)
│   ├── about/page.tsx           # About
│   ├── manifesto/page.tsx       # Manifesto
│   ├── case-studies/page.tsx    # Case Studies
│   └── learn/page.tsx           # Learn Hub
```

**Tasks:**
- [x] Create route groups: `(marketing)`, `(docs)`, `studios`, `manual`
- [x] Migrate `Index.tsx` → `apps/web/src/app/(marketing)/page.tsx`
- [x] Migrate `About.tsx` → `apps/web/src/app/(marketing)/about/page.tsx`
- [x] Migrate `Manifesto.tsx` → `apps/web/src/app/(marketing)/manifesto/page.tsx`
- [x] Migrate `CaseStudies.tsx` → `apps/web/src/app/(marketing)/case-studies/page.tsx`
- [x] Migrate `LearnHub.tsx` → `apps/web/src/app/(marketing)/learn/page.tsx`
- [x] Create `NotFound.tsx` → `apps/web/src/app/not-found.tsx`

**Content rewrite (align with doctrine):**
- [x] Rewrite Index hero: "Story OS for Creative Workflows"
- [x] Replace features: "Coordination not Generation", "Protocol-First", "Modular Frameworks"
- [x] Add protocol overview section
- [x] Link to `/protocol` docs
- [x] Update About page to explain Radiant, DropFrame, Grindline
- [x] Update Manifesto with Radiant Protocol principles

#### 2.3 Migrate radiant-manual

**Route structure:**
```
apps/web/src/app/manual/
├── layout.tsx                    # Manual layout (dark theme)
├── build-order/page.tsx
├── retrospective/page.tsx
├── evaluation/page.tsx
└── billables/page.tsx
```

**Tasks:**
- [x] Create `apps/web/src/app/manual/` directory
- [x] Migrate `ManualViewer.tsx` → manual layout
- [x] Migrate section views to individual pages
- [x] Copy JSON data to `apps/web/public/data/manual/`
- [x] Update data loaders to use `@radiant/data`
- [x] Preserve dark theme styling
- [x] Add breadcrumb navigation

#### 2.4 Migrate StudioTriptych

**Route:**
```
apps/web/src/app/studios/triptych/page.tsx
```

**Tasks:**
- [x] Convert inline styles to TailwindCSS classes
- [x] Split into reusable components (StudioCard, etc.)
- [x] Replace placeholder images with real assets
- [x] Add to main navigation
- [x] Link to individual studio pages

#### 2.5 Add Documentation Routes

**Route structure:**
```
apps/web/src/app/(docs)/
├── protocol/page.tsx             # Radiant Protocol overview
├── architecture/page.tsx         # Architecture.md
├── getting-started/page.tsx      # Quick start
└── api-reference/page.tsx        # Message contracts
```

**Tasks:**
- [x] Create MDX components for documentation
- [x] Convert `docs/*.md` to MDX pages
- [x] Add syntax highlighting (rehype-pretty-code)
- [x] Add table of contents
- [x] Add "Edit on GitHub" links

#### 2.6 Implement Unified Features

- [x] Create shared Header with navigation to all sections
- [x] Create shared Footer with links
- [x] Add dark/light theme toggle (next-themes)
- [x] Set up TanStack Query provider
- [ ] Configure Supabase client (if needed)
- [ ] Add SEO meta tags (next-seo)
- [ ] Add Google Analytics (or privacy-respecting alternative)

### Deliverables
- ✅ Next.js app with all routes
- ✅ Content migrated and aligned with doctrine
- ✅ Dark/light theme toggle
- ✅ Consistent Header/Footer

### Success Criteria
```bash
pnpm --filter @radiant/web dev  # App runs locally
pnpm --filter @radiant/web build  # Production build succeeds
```

All pages accessible:
- `/` (Home)
- `/about`
- `/manifesto`
- `/case-studies`
- `/learn`
- `/protocol`
- `/architecture`
- `/manual/build-order`
- `/manual/retrospective`
- `/manual/evaluation`
- `/manual/billables`
- `/studios/triptych`

---

## Phase 3: Enhancement (Week 4+)

### Goals
- Tests written
- Core orchestrator implemented
- Documentation complete
- Production deployment

### Tasks

#### 3.1 Testing Infrastructure

**Unit tests:**
- [ ] Add Vitest to `apps/web/`
- [ ] Add Testing Library (@testing-library/react)
- [ ] Write component tests for `@radiant/ui` components
- [ ] Write page tests for critical routes
- [ ] Target: 70% coverage

**E2E tests:**
- [ ] Add Playwright
- [ ] Write E2E tests for:
  - Homepage navigation
  - Manual section switching
  - Theme toggle
  - Search functionality (if added)
- [ ] Run in CI pipeline

**Commands:**
```bash
pnpm --filter @radiant/web test        # Unit tests
pnpm --filter @radiant/web test:e2e    # E2E tests
pnpm turbo test                         # All tests
```

#### 3.2 Feature Enhancements

**Search:**
- [ ] Add Algolia or Fuse.js
- [ ] Index all documentation pages
- [ ] Add search UI (Cmd+K shortcut)
- [ ] Add search results page

**Syntax highlighting:**
- [ ] Add react-syntax-highlighter or Shiki
- [ ] Style code blocks consistently
- [ ] Add language badges

**Copy-to-clipboard:**
- [ ] Add copy button to all code blocks
- [ ] Add toast notification on copy
- [ ] Keyboard shortcut support

**Accessibility:**
- [ ] Add ARIA labels to interactive elements
- [ ] Test keyboard navigation
- [ ] Verify focus management
- [ ] Run Lighthouse accessibility audit (target: >90)
- [ ] Add skip-to-content link

#### 3.3 Implement Core Orchestrator

**`core/orchestrator.js`:**
- [ ] Intent parser (parse INTENT messages)
- [ ] Module dispatcher (route to DropFrame/Grindline)
- [ ] Response aggregator
- [ ] State management (track active requests)
- [ ] Error handling with retry logic

**`core/radiant-config.js`:**
- [ ] Default pipeline configurations
- [ ] Module endpoint definitions
- [ ] Timeout settings
- [ ] Story framework registry
- [ ] Environment-specific overrides

**Adapters:**
- [ ] Complete `core/adapters/dropframe-adapter.js`:
  - HTTP transport layer
  - Message validation (Zod)
  - Error recovery
- [ ] Complete `core/adapters/grindline-adapter.js`:
  - HTTP transport layer
  - Message validation
  - Error recovery
- [ ] Add unit tests for adapters

**Integration:**
- [ ] Add adapter endpoints to `apps/web/src/app/api/`
- [ ] Create demo workflow page showing protocol in action
- [ ] Add RDX logging integration

#### 3.4 Complete Documentation

**Missing docs files:**
- [ ] Write `/docs/overview.md` (high-level summary, quick start)
- [ ] Write `/docs/story-os.md` (Story OS concept, examples)
- [ ] Write `/docs/modules.md` (module responsibilities, patterns)
- [ ] Write `/docs/philosophy.md` (design principles, rationale)
- [ ] Write `/docs/collaboration-model.md` (human+AI workflows)
- [ ] Write `/specs/data-shapes.md` (type definitions, validation)
- [ ] Write `/specs/message-contracts.md` (request-response pairs, sequences)
- [ ] Write `/examples/pipeline-example.md` (multi-variant batch)
- [ ] Write `/examples/story-transform-flow.md` (intent → transform → output)
- [ ] Write `/examples/writing-system-demo.md` (real workflow)

**Additional docs:**
- [ ] Create `CONTRIBUTING.md`
- [ ] Create `ARCHITECTURE.md` (ADRs)
- [ ] Create deployment runbook
- [ ] Create developer onboarding guide

#### 3.5 CI/CD Pipeline

**GitHub Actions workflow:**
- [ ] Create `.github/workflows/ci.yml`
- [ ] Add jobs:
  - Lint (ESLint)
  - Type check (TypeScript)
  - Test (Vitest + Playwright)
  - Build (Turborepo)
  - Lighthouse CI
- [ ] Add PR checks (require passing tests)
- [ ] Add automatic dependency updates (Renovate or Dependabot)

**Deployment:**
- [ ] Set up Vercel project (or alternative)
- [ ] Configure environment variables
- [ ] Add preview deployments for PRs
- [ ] Set up production deployment on merge to `main`
- [ ] Configure custom domain

#### 3.6 Performance Optimization

- [ ] Add route-based code splitting
- [ ] Implement lazy loading for heavy components
- [ ] Optimize images (next/image)
- [ ] Add performance budgets (Lighthouse CI)
- [ ] Set up Core Web Vitals monitoring
- [ ] Add error tracking (Sentry or similar)

### Deliverables
- ✅ 70%+ test coverage
- ✅ E2E tests passing
- ✅ Search, syntax highlighting, copy-to-clipboard
- ✅ Core orchestrator implemented
- ✅ All documentation complete
- ✅ CI/CD pipeline running
- ✅ Production deployment live

### Success Criteria

**Tests:**
```bash
pnpm turbo test  # All tests pass, >70% coverage
```

**Accessibility:**
- Lighthouse accessibility score >90
- Keyboard navigation works on all pages
- Screen reader compatible

**Performance:**
- Lighthouse performance score >90
- First Contentful Paint <1.5s
- Time to Interactive <3.5s

**Documentation:**
- All 10 empty `.md` files filled
- API reference complete
- Developer onboarding guide published

**Deployment:**
- Production site live
- CI/CD pipeline green
- Zero critical bugs

---

## Phase 4: Cleanup (Week 5)

### Tasks

- [ ] Archive old apps:
  - Move `radiant_systems/` to `_archive/radiant_systems_deprecated/`
  - Move `2025-12-31_0447_build-doc/radiant-manual/` to `_archive/`
  - Move `2025-12-31_0447_build-doc/StudioTriptych/` to `_archive/`
- [ ] Update README.md with new structure
- [ ] Update `.github/copilot-instructions.md` with monorepo paths
- [ ] Remove old dependencies from root `package.json`
- [ ] Run final security audit: `pnpm audit`
- [ ] Tag release: `git tag v1.0.0-consolidated`

---

## Rollback Plan

If consolidation fails, revert to original structure:

1. Restore from git: `git checkout main`
2. Delete `apps/` and `packages/` directories
3. Reinstall dependencies in each app: `cd radiant_systems && pnpm install`
4. Document blockers in `RDX/reports/consolidation-blockers.md`

---

## Success Metrics

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| **Apps consolidated** | 1 | 3 | 🔴 |
| **Test coverage** | >70% | 0% | 🔴 |
| **Lighthouse score** | >90 | Unknown | 🟡 |
| **Documentation completeness** | 100% | 50% | 🟡 |
| **Core orchestrator** | Implemented | Empty stubs | 🔴 |
| **Content alignment** | 100% | 20% | 🔴 |
| **CI/CD pipeline** | Green | None | 🔴 |

---

## Quick Wins (Before Starting Phases)

See `RDX/plans/quick-wins.md` for low-effort, high-impact tasks that can be completed immediately.

---

**Next Step:** Review this roadmap, then begin Phase 1 Task 1.1 (Initialize Monorepo).
