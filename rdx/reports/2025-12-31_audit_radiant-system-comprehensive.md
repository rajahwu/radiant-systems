# Radiant System Comprehensive Audit

**Agent:** GitHub Copilot (Claude Sonnet 4.5)  
**Date:** 2025-12-31  
**Duration:** ~45 minutes  
**Status:** Complete

## Executive Summary

The Radiant System repository contains a well-documented **dual-codebase architecture** consisting of:
1. **Core orchestrator** (`/core`, `/docs`, `/specs`) — protocol definitions and adapter stubs (Node.js)
2. **Web UI** (`/radiant_systems`) — marketing/demo site (React + Vite + shadcn/ui)
3. **Build documentation apps** in `/2025-12-31_0447_build-doc/`:
   - `radiant-manual` — Next.js 16 build order documentation viewer
   - `StudioTriptych/app` — React 19 + Vite visualization of three studios

**Key Findings:**
- ✅ **Excellent documentation**: Protocol, architecture, and integration specs are thorough and production-ready
- ⚠️ **Implementation gap**: Core orchestrator files are empty stubs; protocol is documented but not implemented
- ⚠️ **Three separate apps**: No shared component library, duplicated UI patterns, independent build systems
- ✅ **Modern tech stack**: React 18/19, TypeScript, Vite 5/7, Next.js 16, shadcn/ui
- ❌ **No tests**: Zero test coverage across all applications
- ⚠️ **Content misalignment**: `radiant_systems` marketing site has generic tech company messaging, doesn't reflect Radiant Protocol doctrine (Story OS, coordination not generation)

**Recommendation:** Consolidate into a unified Next.js monorepo with shared component library, implement core orchestrator, align marketing content with protocol documentation, and establish testing infrastructure.

## Repository Structure

```
radiant-system/
├── .github/
│   └── copilot-instructions.md           # ✅ AI agent guidance (recently updated)
├── core/                                  # ⚠️ Orchestrator stubs (empty implementations)
│   ├── orchestrator.js                   # 🔴 EMPTY (critical)
│   ├── radiant-config.js                 # 🔴 EMPTY (critical)
│   └── adapters/
│       ├── dropframe-adapter.js          # ⚠️ Stubs only (lines 44-50)
│       └── grindline-adapter.js          # ⚠️ Stubs only (lines 44-50)
├── docs/                                  # ✅ Comprehensive documentation
│   ├── architecture.md                   # ✅ Complete
│   ├── radiant-protocol.md              # ✅ Complete (311 lines)
│   ├── overview.md                       # 🔴 EMPTY
│   ├── story-os.md                       # 🔴 EMPTY
│   ├── modules.md                        # 🔴 EMPTY
│   ├── philosophy.md                     # 🔴 EMPTY
│   └── collaboration-model.md            # 🔴 EMPTY
├── specs/                                 # ✅ Protocol definitions complete
│   ├── radiant-schema.json              # ✅ Complete (146 lines)
│   ├── dropframe-integration.md         # ✅ Present
│   ├── grindline-integration.md         # ✅ Present
│   ├── data-shapes.md                   # 🔴 EMPTY
│   └── message-contracts.md             # 🔴 EMPTY
├── examples/                              # ⚠️ Partially complete
│   ├── pipeline-example.md              # 🔴 EMPTY
│   ├── story-transform-flow.md          # 🔴 EMPTY
│   └── writing-system-demo.md           # 🔴 EMPTY
├── radiant_systems/                       # ✅ Functional React + Vite app
│   ├── package.json                     # React 18.3.1, Vite 5.4.1
│   ├── src/
│   │   ├── pages/                       # 6 pages (Index, About, CaseStudies, LearnHub, Manifesto, NotFound)
│   │   ├── components/                  # 6 custom + 60+ shadcn/ui components
│   │   └── lib/                         # utils, hooks, router proxy
│   └── vite.config.ts                   # Custom CDN image plugin
├── 2025-12-31_0447_build-doc/
│   ├── radiant-manual/                   # ✅ Next.js 16 build docs viewer
│   │   ├── package.json                 # Next 16.1.1, React 19.2.3
│   │   ├── src/
│   │   │   ├── app/                     # Next.js app router
│   │   │   ├── components/manual/       # 13 components (ManualViewer, Navigation, tabs, etc.)
│   │   │   └── types/                   # TypeScript types for manual data
│   │   └── public/data/manual/          # 5 JSON files (sections, retrospective, evaluation, billables)
│   └── StudioTriptych/app/              # ✅ React 19 + Vite 7 visualization
│       ├── package.json                 # React 19.2.0, Vite 7.2.4
│       └── src/pages/                   # Single-page triptych visualization
└── RDX/                                   # ✅ Operational planning layer
    ├── plans/
    │   ├── 2025-12-31_audit-directive.md  # This audit directive
    │   └── (consolidation-roadmap.md)     # To be created
    ├── reports/                            # (this report)
    └── todos/                              # Task tracking files
        ├── app-tasks.md
        ├── component-migration.md
        ├── data-layer-db.md
        └── infrastructure.md
```

## Application Analysis

### 1. radiant_systems (Marketing Site)

**Purpose:** Marketing and demo site for Radiant Systems  
**Health:** 🟡 Functional but misaligned with core doctrine  
**Tech Stack:** React 18.3.1 + Vite 5.4.1 + TypeScript + shadcn/ui + TailwindCSS  
**Port:** 8080 (via `pnpm dev`)

#### Key Findings

**Strengths:**
- ✅ Modern React + Vite setup with fast HMR
- ✅ Comprehensive shadcn/ui component library (60+ components)
- ✅ TypeScript configured with path aliases (`@/*`)
- ✅ HashRouter for client-side routing
- ✅ TanStack Query for data fetching
- ✅ Supabase integration (@supabase/supabase-js)
- ✅ Custom `cdnPrefixImages` Vite plugin for CDN-hosted images
- ✅ React Router proxy layer (`src/lib/react-router-dom-proxy.tsx`) for route messaging
- ✅ Environment flag `VITE_ENABLE_ROUTE_MESSAGING` for debug logging

**Critical Issues:**
- 🔴 **Content misalignment**: Marketing copy is generic tech consultancy messaging ("Transforming Ideas Into Digital Reality", "Lightning-Fast Development", "Enterprise-Grade Security")
- 🔴 **Missing doctrine**: No mention of Story OS, Radiant Protocol, DropFrame, Grindline, or "coordination not generation" philosophy
- 🔴 **Routes not wired**: `App.tsx` only has root route (`/`) and catch-all; Manifesto, About, CaseStudies, LearnHub pages exist but not routed
- 🔴 **No tests**: Zero test files
- ⚠️ **TypeScript strictness disabled**: `noImplicitAny: false`, `strictNullChecks: false`, `noUnusedLocals: false` in `tsconfig.json`

**Pages:**
1. **Index** (270 lines): Hero, features, services overview — generic tech company landing page
2. **Manifesto** (199 lines): "Innovation First", "Human-Centered Design" — aspirational but not Radiant-specific
3. **About** (230 lines): Mission/vision statements — doesn't mention protocol or Story OS
4. **CaseStudies** — exists but content unclear
5. **LearnHub** — exists but content unclear
6. **NotFound** — 404 page

**Components:**
- Custom: `CaseStudyCard`, `Footer`, `Header`, `SystemsMap`, `TrainingBlockCard`, `ValueProp`
- shadcn/ui: 60+ components (accordion, alert-dialog, button, card, dialog, etc.)

**Recommendations:**
1. Align all marketing content with Radiant Protocol doctrine (Story OS, coordination, DropFrame/Grindline)
2. Wire routes in `App.tsx` (add Manifesto, About, CaseStudies, LearnHub routes before catch-all)
3. Enable TypeScript strict mode incrementally
4. Create `radiant_systems.test.tsx` with Vitest
5. Replace generic tech messaging with protocol-specific value props

---

### 2. radiant-manual (Build Order Documentation)

**Purpose:** Internal documentation viewer for build order, retrospective, evaluation, and billables  
**Health:** 🟢 Functional and complete  
**Tech Stack:** Next.js 16.1.1 + React 19.2.3 + TypeScript + TailwindCSS 4  
**Port:** 3000 (via `pnpm dev`)

#### Key Findings

**Strengths:**
- ✅ Next.js 16 with React 19 (latest versions)
- ✅ App Router architecture (`src/app/`)
- ✅ Four complete sections: Build Order, Retrospective, Evaluation, Billables
- ✅ Type-safe data loading (`src/lib/loaders/json-loader.ts`)
- ✅ TypeScript strict mode enabled
- ✅ Component architecture: `ManualViewer`, `SectionTabs`, section-specific views
- ✅ JSON data source (`public/data/manual/*.json`)
- ✅ Dark theme UI (slate-950 gradient background)
- ✅ Client component with loading/error states
- ✅ Workspace references (`@clearline7/components`, `@clearline7/set-definitions`, `@clearline7/theme`) — suggests monorepo intent

**Areas for Improvement:**
- ⚠️ No search functionality
- ⚠️ No section cross-linking
- ⚠️ No syntax highlighting for code blocks
- ⚠️ No copy-to-clipboard
- ⚠️ No theme toggle (dark only)
- ⚠️ Mobile responsiveness unclear
- ⚠️ No print stylesheet
- ❌ No tests

**Data Structure:**
- `sections.json` — Section metadata
- `document.json` — Main document structure
- `retrospective.json` — Retrospective data
- `evaluation.json` — Evaluation criteria
- `billables.json` — Billable items

**Components (13 files):**
- `ManualViewer.tsx` — Main orchestrator component
- `Header.tsx`, `Footer.tsx` — Layout
- `SectionTabs.tsx` — Tab navigation
- `BuildOrderView.tsx`, `RetrospectiveView.tsx`, `EvaluationView.tsx`, `BillablesView.tsx` — Section views
- `Navigation.tsx` — Internal navigation

**Recommendations:**
1. Add Algolia/Fuse.js search
2. Implement anchor links for section cross-references
3. Add `react-syntax-highlighter` for code blocks
4. Add `react-hot-toast` + clipboard API for copy functionality
5. Add theme toggle (next-themes)
6. Test mobile breakpoints
7. Add Vitest + Testing Library

---

### 3. StudioTriptych (Visualization)

**Purpose:** Visual representation of three studios (DropFrame, Grindline, VSM School)  
**Health:** 🟡 Standalone visualization, unclear integration value  
**Tech Stack:** React 19.2.0 + Vite 7.2.4 + TypeScript  
**Port:** Unspecified

#### Key Findings

**Strengths:**
- ✅ React 19 + Vite 7 (latest versions)
- ✅ Single-page component (`StudioTriptych.tsx`, 300 lines)
- ✅ Inline CSS-in-JS styling
- ✅ Hero section with triptych background
- ✅ Three studio cards: DropFrame, Grindline, VSM School
- ✅ Hover effects and animations

**Critical Issues:**
- 🔴 **No unique functionality**: This is a static marketing page, not an interactive tool
- 🔴 **Duplication**: Content overlaps with what should be in `radiant_systems` marketing site
- ❌ **No TypeScript strict mode**
- ❌ **No routing** (single page only)
- ❌ **No tests**
- ⚠️ **Placeholder images** (`/api/placeholder/1920/1080`)
- ⚠️ **Inline styles** instead of CSS modules or Tailwind

**Content:**
- DropFrame Studio: "Research & Analysis Hub"
- Grindline Studio: "Production & Execution Engine"
- VSM School: "Training & Development Center"

**Recommendations:**
1. **Merge into `radiant_systems`**: This should be a route (`/studios` or `/triptych`) in the main marketing app, not a standalone Vite app
2. Convert inline styles to TailwindCSS classes
3. Replace placeholder images with real studio visuals
4. Add interactive features (studio comparison, feature matrix) to justify standalone existence, OR
5. **Deprecate**: Consolidate content into `radiant_systems` About/Services pages

---

## Code Quality Assessment

### Strengths

1. **Modern Tech Stack**
   - React 18/19, TypeScript, Vite 5/7, Next.js 16
   - Latest stable versions across all apps
   - Consistent use of pnpm package manager

2. **Component Architecture**
   - Well-structured component hierarchies
   - Separation of concerns (pages, components, lib, hooks)
   - shadcn/ui provides consistent design system foundation

3. **TypeScript Usage**
   - Path aliases configured (`@/*`)
   - Type definitions for manual data structures
   - Gradual TypeScript adoption in progress

4. **Build Configuration**
   - Vite for fast HMR and optimized production builds
   - Custom plugins (e.g., `cdnPrefixImages`) demonstrate advanced understanding
   - ESLint configured across all apps

### Areas for Improvement

1. **TypeScript Strictness**
   - `radiant_systems`: Strict mode disabled (`noImplicitAny: false`, `strictNullChecks: false`)
   - `StudioTriptych`: No strict mode configuration
   - `radiant-manual`: ✅ Strict mode enabled (best practice)

2. **State Management**
   - `radiant_systems`: TanStack Query for server state, but no global client state pattern visible
   - No Zustand, Redux, or Context API usage detected
   - Each app manages state independently

3. **Styling Consistency**
   - `radiant_systems` + `radiant-manual`: TailwindCSS (✅ consistent)
   - `StudioTriptych`: Inline CSS-in-JS (❌ inconsistent, harder to maintain)
   - No shared Tailwind config across apps

4. **Code Duplication**
   - Header/Footer components in both `radiant_systems` and `radiant-manual`
   - No shared component library
   - Duplicate utility functions likely (not verified)

### Critical Issues

1. **Zero Test Coverage**
   - No `.test.*` or `.spec.*` files in any application
   - No Vitest, Jest, or Testing Library configuration
   - No CI/CD test pipeline

2. **Missing Documentation**
   - No component Storybook or documentation
   - No API documentation for utilities
   - No developer onboarding guide

3. **Performance**
   - No lazy loading or code splitting visible in `radiant_systems`
   - No performance budgets or monitoring
   - No accessibility audit trail

---

## Content Assessment

### radiant_systems Marketing Site

**Messaging Analysis:**

| Page | Current Message | Alignment with Doctrine | Recommendation |
|------|----------------|------------------------|----------------|
| **Index** | "Transforming Ideas Into Digital Reality" | ❌ Generic tech consultancy | Replace with "Story OS for Creative Workflows" |
| **Index** | "Lightning-Fast Development, Enterprise Security, Collaborative Partnership" | ❌ Generic value props | Replace with "Coordination not Generation, Protocol-First, Modular Frameworks" |
| **Manifesto** | "Innovation First, Human-Centered Design, Sustainable Progress" | ⚠️ Aspirational but not Radiant-specific | Align with Radiant Protocol principles (Story OS, Intent→Transform→Produce) |
| **About** | "Empower businesses through cutting-edge technology" | ❌ Corporate boilerplate | Explain Radiant as orchestrator, DropFrame as transformer, Grindline as producer |
| **CaseStudies** | Unknown (not analyzed) | ❓ | Show real story transformation workflows, not generic client projects |
| **LearnHub** | Unknown (not analyzed) | ❓ | Teach Radiant Protocol, message contracts, story frameworks |

**Doctrine Alignment Score:** 🔴 **2/10**

The marketing site does not communicate the core Radiant philosophy:
- ❌ No mention of Story OS
- ❌ No mention of Radiant Protocol
- ❌ No mention of DropFrame or Grindline
- ❌ No explanation of "coordination not generation"
- ❌ No reference to story frameworks (Save the Cat, Hero's Journey, etc.)
- ❌ Generic tech consultancy messaging instead of creative workflow orchestration

**Content Completeness:**

| Asset Type | Status | Notes |
|------------|--------|-------|
| Landing page | ✅ Present | Generic, needs rewrite |
| Product explanation | ❌ Missing | Need "What is Radiant?" section |
| Use cases | ⚠️ Partial | CaseStudies page exists but content unclear |
| Documentation | ❌ Not linked | Should link to `/docs` or embed |
| Getting started guide | ❌ Missing | No onboarding flow for developers |
| API reference | ❌ Missing | Should document protocol message types |

### radiant-manual Documentation

**Content Analysis:**

✅ **Excellent** — Four complete sections with structured data:
1. Build Order — Detailed build sequence
2. Retrospective — Project retrospective
3. Evaluation — Evaluation criteria
4. Billables — Billable items tracking

✅ Type-safe data loading from JSON  
✅ Clear navigation between sections  
✅ Consistent dark theme UI  

⚠️ **Internal-facing only** — Not integrated with public marketing site  
⚠️ **No discoverability** — No link from `radiant_systems` to manual  

### StudioTriptych Content

**Studio Descriptions:**

1. **DropFrame**: "Research & Analysis Hub" ⚠️ (Actually: Transformation Engine)
2. **Grindline**: "Production & Execution Engine" ✅ (Accurate)
3. **VSM School**: "Training & Development Center" ⚠️ (Not mentioned in core docs)

**Alignment:** Partial — descriptions don't match protocol documentation.

---

## Integration Opportunities

### 1. Shared Component Library

**Candidates for extraction:**

| Component | Used In | Consolidation Opportunity |
|-----------|---------|--------------------------|
| **Header** | `radiant_systems`, `radiant-manual` | 🟢 High — navigation component |
| **Footer** | `radiant_systems`, `radiant-manual` | 🟢 High — footer component |
| **Button** | All apps (shadcn/ui) | 🟢 High — already standardized |
| **Card** | All apps | 🟢 High — content container |
| **Navigation/Tabs** | `radiant_systems`, `radiant-manual` | 🟡 Medium — different implementations |
| **Theme toggle** | None (future) | 🟡 Medium — add to shared lib |

**Proposed structure:**
```
packages/
├── ui/                    # Shared component library
│   ├── src/
│   │   ├── components/   # shadcn/ui + custom components
│   │   ├── hooks/        # Shared React hooks
│   │   └── lib/          # Utils (cn, formatters, etc.)
│   ├── tailwind.config.ts
│   └── package.json
├── config/               # Shared configs
│   ├── eslint-config/
│   ├── typescript-config/
│   └── tailwind-config/
└── types/                # Shared TypeScript types
    └── protocol.ts       # Radiant Protocol types
```

### 2. Unified Data Layer

**Current State:**
- `radiant_systems`: TanStack Query + Supabase
- `radiant-manual`: JSON files in `/public/data/`
- `StudioTriptych`: Static content (no data layer)

**Opportunity:**
Create unified data architecture:
```typescript
// packages/data/src/protocol.ts
export interface RadiantProtocolMessage {
  id: string;
  version: 'radiant-protocol-v0.1';
  type: 'INTENT' | 'TRANSFORM_REQUEST' | 'TRANSFORM_RESPONSE' | 'PIPELINE_REQUEST' | 'PIPELINE_RESPONSE' | 'ERROR';
  timestamp: string;
  payload: unknown;
  meta: {
    project?: string;
    user?: string;
    source: 'radiant' | 'dropframe' | 'grindline' | 'other';
    tags?: string[];
  };
}

// packages/data/src/loaders/
export const loadManualData = () => { /* ... */ };
export const loadStudioData = () => { /* ... */ };
```

**Benefits:**
- Single source of truth for Radiant Protocol types
- Reusable data fetching hooks
- Type-safe API clients
- Consistent error handling

### 3. Unified Routing Structure

**Proposed sitemap for consolidated app:**

```
radiant-system/ (Next.js app)
├── /                     # Home (Story OS overview)
├── /protocol             # Radiant Protocol documentation
├── /studios
│   ├── /dropframe       # DropFrame details
│   ├── /grindline       # Grindline details
│   └── /triptych        # Visual comparison (StudioTriptych content)
├── /docs
│   ├── /architecture    # Architecture.md content
│   ├── /getting-started # Quick start guide
│   └── /api-reference   # Message contracts
├── /manual              # Build order manual (current radiant-manual)
│   ├── /build-order
│   ├── /retrospective
│   ├── /evaluation
│   └── /billables
├── /case-studies        # Real workflow examples
├── /learn               # Protocol training
└── /about               # About Radiant System
```

### 4. Shared Utilities & Helpers

**Extraction candidates:**

| Utility | Location | Consolidation |
|---------|----------|---------------|
| `cn()` | `radiant_systems/src/lib/utils.ts` | 🟢 Move to `@radiant/ui` |
| `formatters` | Various | 🟢 Move to `@radiant/utils` |
| `react-router-dom-proxy` | `radiant_systems/src/lib/` | 🟡 App-specific, keep local |
| `json-loader` | `radiant-manual/src/lib/loaders/` | 🟢 Move to `@radiant/data` |
| `manual.types.ts` | `radiant-manual/src/types/` | 🟢 Move to `@radiant/types` |

### 5. Common Design System

**Current state:**
- ✅ `radiant_systems` + `radiant-manual`: TailwindCSS
- ✅ Both use similar color schemes (slate, blue, purple)
- ❌ `StudioTriptych`: Inline styles with different color values
- ❌ No shared Tailwind config

**Proposal:**
```javascript
// packages/config/tailwind-config/index.js
module.exports = {
  theme: {
    extend: {
      colors: {
        radiant: {
          primary: '#4a9eff',    // Blue
          secondary: '#9b59b6',  // Purple
          dark: '#0a0a0a',       // Background
          slate: {
            950: '#020617',      // Consistent dark
          }
        }
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      }
    }
  }
};
```

---

## Technical Debt

| Category | Severity | Effort | Impact | Description |
|----------|----------|--------|--------|-------------|
| **Zero test coverage** | 🔴 High | L | High | No tests in any application; blocks refactoring and prevents regression detection |
| **Unimplemented core orchestrator** | 🔴 Critical | XL | Critical | `/core/orchestrator.js` and `/core/radiant-config.js` are empty; protocol defined but not implemented |
| **Three separate apps** | 🔴 High | L | High | Duplication, inconsistent UX, maintenance burden |
| **TypeScript strictness disabled** | 🟡 Medium | M | Medium | `radiant_systems` has `noImplicitAny: false`, leading to runtime errors |
| **Missing documentation files** | 🟡 Medium | M | Medium | 5 empty `.md` files in `/docs`, 2 in `/specs`, 3 in `/examples` |
| **Content misalignment** | 🔴 High | M | High | Marketing site doesn't communicate Radiant Protocol doctrine |
| **Routes not wired** | 🟡 Medium | S | Medium | `radiant_systems` has 5 pages but only root route defined |
| **No accessibility audit** | 🟡 Medium | M | Medium | No ARIA labels, keyboard navigation unclear, contrast ratios not verified |
| **No performance monitoring** | 🟡 Low | M | Low | No Lighthouse CI, no Core Web Vitals tracking |
| **Outdated dependencies** | 🟢 Low | S | Low | All dependencies are recent (2024-2025) |
| **No CI/CD pipeline** | 🟡 Medium | M | Medium | No automated testing, no deployment automation |
| **Inline styles in StudioTriptych** | 🟡 Low | S | Low | CSS-in-JS instead of TailwindCSS |
| **No error tracking** | 🟡 Low | S | Low | No Sentry or error monitoring service |

**Legend:**
- **Severity:** 🔴 High / 🟡 Medium / 🟢 Low
- **Effort:** S (Small, <1 day) / M (Medium, 1-3 days) / L (Large, 1-2 weeks) / XL (Extra Large, >2 weeks)
- **Impact:** High / Medium / Low

### Deprecated Patterns

1. **Inline CSS-in-JS** (StudioTriptych) — Migrate to TailwindCSS
2. **HashRouter** (radiant_systems) — Migrate to Next.js app router
3. **Client-side-only routing** — Move to Next.js for SSR/SSG benefits

### Missing Tests

- ❌ Unit tests (Vitest + Testing Library)
- ❌ Integration tests (Playwright or Cypress)
- ❌ E2E tests
- ❌ Visual regression tests (Chromatic or Percy)

### Documentation Gaps

- ❌ Component documentation (Storybook)
- ❌ API reference (TypeDoc or similar)
- ❌ Deployment runbook
- ❌ Developer onboarding guide
- ❌ Architecture decision records (ADRs)

### Performance Issues

- ⚠️ No lazy loading in `radiant_systems`
- ⚠️ No route-based code splitting
- ⚠️ Large bundle sizes not measured
- ⚠️ No image optimization strategy (beyond CDN plugin)

### Accessibility Issues

- ⚠️ No ARIA labels detected
- ⚠️ Keyboard navigation not tested
- ⚠️ Focus management unclear
- ⚠️ Color contrast ratios not verified
- ⚠️ Screen reader compatibility unknown

---

## Consolidation Recommendations

### Proposed Architecture

```
radiant-system/
├── apps/
│   ├── web/                       # Unified Next.js app (replaces all 3 apps)
│   │   ├── src/
│   │   │   ├── app/              # Next.js app router
│   │   │   │   ├── (marketing)/  # Public marketing pages
│   │   │   │   ├── (docs)/       # Documentation
│   │   │   │   ├── manual/       # Build order manual
│   │   │   │   └── studios/      # Studio pages
│   │   │   ├── components/       # App-specific components
│   │   │   └── lib/              # App-specific utilities
│   │   ├── public/
│   │   │   └── data/             # JSON data files
│   │   ├── next.config.ts
│   │   └── package.json
│   └── admin/ (future)            # Admin panel for RDX logging
├── packages/
│   ├── ui/                        # Shared component library
│   │   ├── src/
│   │   │   ├── components/       # shadcn/ui + custom
│   │   │   ├── hooks/            # React hooks
│   │   │   └── lib/              # cn(), formatters, etc.
│   │   ├── tailwind.config.ts
│   │   └── package.json
│   ├── config/                    # Shared configs
│   │   ├── eslint-config/
│   │   ├── typescript-config/
│   │   └── tailwind-config/
│   ├── types/                     # Shared TypeScript types
│   │   ├── protocol.ts           # Radiant Protocol types
│   │   ├── manual.ts             # Manual data types
│   │   └── index.ts
│   └── data/                      # Data layer
│       ├── src/
│       │   ├── loaders/          # Data loaders
│       │   ├── validators/       # Zod schemas
│       │   └── clients/          # API clients
│       └── package.json
├── core/                          # Orchestrator implementation (Node.js)
│   ├── orchestrator.js           # TO IMPLEMENT
│   ├── radiant-config.js         # TO IMPLEMENT
│   ├── adapters/
│   │   ├── dropframe-adapter.js  # TO COMPLETE
│   │   └── grindline-adapter.js  # TO COMPLETE
│   └── package.json
├── docs/                          # Documentation (markdown)
├── specs/                         # Specifications (JSON schemas)
├── examples/                      # Example workflows
├── RDX/                           # Operational layer
│   ├── plans/
│   ├── reports/
│   └── todos/
├── turbo.json                     # Turborepo config
├── pnpm-workspace.yaml
└── package.json                   # Root package
```

### Migration Phases

#### **Phase 1: Foundation (Week 1)**

**Goal:** Set up monorepo structure and shared packages

**Tasks:**
1. Initialize Turborepo or Nx monorepo
2. Create `packages/ui/` with shadcn/ui components
3. Create `packages/config/` with shared ESLint, TypeScript, Tailwind configs
4. Create `packages/types/` with Radiant Protocol types (from `specs/radiant-schema.json`)
5. Migrate `cn()` utility to `@radiant/ui`
6. Set up pnpm workspaces
7. Configure build pipeline (Turborepo)

**Deliverables:**
- [ ] Working monorepo structure
- [ ] `@radiant/ui` package with shadcn/ui
- [ ] `@radiant/config` package with ESLint/TS/Tailwind configs
- [ ] `@radiant/types` package with protocol types
- [ ] All packages building successfully

#### **Phase 2: Integration (Week 2-3)**

**Goal:** Create unified Next.js app and migrate content

**Tasks:**
1. Create `apps/web/` Next.js 16 app
2. Migrate `radiant_systems` pages to Next.js app router:
   - `/` (Index)
   - `/about` (About)
   - `/case-studies` (CaseStudies)
   - `/learn` (LearnHub)
   - `/manifesto` (Manifesto)
3. Migrate `radiant-manual` as `/manual` route group:
   - `/manual/build-order`
   - `/manual/retrospective`
   - `/manual/evaluation`
   - `/manual/billables`
4. Integrate `StudioTriptych` as `/studios/triptych` route
5. Rewrite marketing content to align with Radiant Protocol doctrine
6. Implement unified Header/Footer
7. Set up TanStack Query for data fetching
8. Migrate JSON data files to `apps/web/public/data/`
9. Configure Supabase integration (if needed)
10. Set up dark/light theme with next-themes

**Deliverables:**
- [ ] Unified Next.js app with all routes
- [ ] Content aligned with Radiant Protocol
- [ ] Consistent Header/Footer across all pages
- [ ] Dark/light theme toggle
- [ ] All data loading working

#### **Phase 3: Enhancement (Week 4+)**

**Goal:** Add features, tests, and implement core orchestrator

**Tasks:**
1. Add Vitest + Testing Library
2. Write unit tests for components (target: 70% coverage)
3. Add Playwright E2E tests for critical paths
4. Implement search (Algolia or Fuse.js)
5. Add syntax highlighting (react-syntax-highlighter)
6. Add copy-to-clipboard functionality
7. Implement accessibility improvements (ARIA labels, keyboard nav)
8. Set up Lighthouse CI
9. Implement core orchestrator:
   - `/core/orchestrator.js` with intent parser, dispatcher, state management
   - `/core/radiant-config.js` with pipeline configs
   - Complete `/core/adapters/dropframe-adapter.js`
   - Complete `/core/adapters/grindline-adapter.js`
10. Write missing documentation files:
    - `/docs/overview.md`
    - `/docs/story-os.md`
    - `/docs/modules.md`
    - `/docs/philosophy.md`
    - `/docs/collaboration-model.md`
    - `/specs/data-shapes.md`
    - `/specs/message-contracts.md`
    - `/examples/pipeline-example.md`
    - `/examples/story-transform-flow.md`
    - `/examples/writing-system-demo.md`
11. Set up CI/CD pipeline (GitHub Actions)
12. Deploy to production (Vercel or similar)

**Deliverables:**
- [ ] 70%+ test coverage
- [ ] E2E tests passing
- [ ] Search functionality
- [ ] Syntax highlighting + copy-to-clipboard
- [ ] Accessibility score >90
- [ ] Core orchestrator implemented
- [ ] All documentation complete
- [ ] CI/CD pipeline running
- [ ] Production deployment

---

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| **Migration breaks existing features** | High | High | Incremental migration with feature flags; maintain old apps until full parity |
| **Content rewrite takes longer than expected** | Medium | Medium | Prioritize high-traffic pages; use AI assistance for initial drafts |
| **Core orchestrator implementation is complex** | High | Critical | Start with minimal viable implementation; add features iteratively; reference protocol docs |
| **Team bandwidth constraints** | Medium | High | Phase migration over 4+ weeks; automate where possible; use code generation tools |
| **Dependency conflicts in monorepo** | Low | Medium | Use pnpm workspaces strict peer deps; lock versions carefully |
| **Data migration issues** | Low | Medium | Validate JSON schemas before migration; write data migration tests |
| **Performance regression** | Medium | Medium | Establish performance budgets; run Lighthouse CI on every PR |
| **Breaking changes in Next.js 16** | Low | Medium | Pin Next.js version; test thoroughly before upgrading |

---

## Next Steps

### Immediate Actions (This Week)

1. **Create consolidation roadmap** (separate file: `RDX/plans/consolidation-roadmap.md`)
2. **Update TODO lists** in `RDX/todos/`:
   - `component-migration.md` — Extract components to shared library
   - `data-layer-db.md` — Define unified data architecture
   - `app-tasks.md` — Phase 1-3 tasks
   - `infrastructure.md` — Monorepo setup, CI/CD
3. **Create quick wins list** (`RDX/plans/quick-wins.md`):
   - Wire routes in `radiant_systems/src/App.tsx`
   - Enable TypeScript strict mode in `radiant_systems`
   - Write first component test
   - Align Index page content with protocol
4. **Implement one quick win** to validate approach

### Next Week

1. Begin Phase 1 (Foundation) tasks
2. Set up monorepo structure
3. Extract first shared components
4. Write initial test suite

### Next Month

1. Complete Phase 2 (Integration)
2. Unified Next.js app with all content migrated
3. Content aligned with Radiant Protocol
4. 50%+ test coverage

---

## Appendices

### A. Dependency Matrix

| Dependency | radiant_systems | radiant-manual | StudioTriptych | Version | Notes |
|------------|----------------|----------------|----------------|---------|-------|
| React | ✅ | ✅ | ✅ | 18.3.1 / 19.2.0 / 19.2.0 | Version mismatch |
| TypeScript | ✅ | ✅ | ✅ | 5.5.3 / 5.x / 5.9.3 | Consistent |
| Vite | ✅ | ❌ | ✅ | 5.4.1 / - / 7.2.4 | Version mismatch |
| Next.js | ❌ | ✅ | ❌ | - / 16.1.1 / - | Manual only |
| TailwindCSS | ✅ | ✅ | ❌ | 3.4.11 / 4.x / - | Version mismatch |
| shadcn/ui | ✅ | ❌ | ❌ | (Radix UI) | radiant_systems only |
| TanStack Query | ✅ | ❌ | ❌ | 5.56.2 | radiant_systems only |
| Supabase | ✅ | ❌ | ❌ | 2.55.0 | radiant_systems only |
| React Router | ✅ | ❌ | ❌ | 6.26.2 | radiant_systems only |

**Cross-app dependencies:** None (all apps are independent)

### B. Component Inventory

**radiant_systems** (6 custom + 60+ shadcn/ui):
- Custom: `CaseStudyCard`, `Footer`, `Header`, `SystemsMap`, `TrainingBlockCard`, `ValueProp`
- shadcn/ui: accordion, alert-dialog, alert, avatar, badge, breadcrumb, button, calendar, card, carousel, chart, checkbox, collapsible, command, context-menu, dialog, drawer, dropdown-menu, form, hover-card, input-otp, input, label, menubar, navigation-menu, pagination, popover, progress, radio-group, resizable, scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner, switch, table, tabs, textarea, toast, toaster, toggle-group, toggle, tooltip

**radiant-manual** (13 components):
- `ManualViewer`, `Header`, `Footer`, `SectionTabs`, `Navigation`, `BuildOrderView`, `RetrospectiveView`, `EvaluationView`, `BillablesView`

**StudioTriptych** (1 component):
- `StudioTriptych`

### C. Content Map

**radiant_systems:**
- `/` — Home (Index.tsx, 270 lines)
- `/manifesto` — Manifesto (199 lines) — NOT ROUTED
- `/about` — About (230 lines) — NOT ROUTED
- `/case-studies` — CaseStudies — NOT ROUTED
- `/learn` — LearnHub — NOT ROUTED
- `*` — NotFound (404)

**radiant-manual:**
- `/` — ManualViewer (100 lines)
  - Build Order tab
  - Retrospective tab
  - Evaluation tab
  - Billables tab

**StudioTriptych:**
- `/` — StudioTriptych (300 lines, single page)

---

## Conclusion

The Radiant System repository demonstrates excellent documentation and protocol design, but suffers from **implementation gaps** (empty core orchestrator), **content misalignment** (marketing site doesn't reflect doctrine), and **technical fragmentation** (three separate apps).

**Primary Recommendation:**
Consolidate into a **unified Next.js 16 monorepo** with:
1. Shared component library (`@radiant/ui`)
2. Shared types and configs
3. Single marketing/docs/manual app
4. Implemented core orchestrator
5. Test infrastructure (Vitest + Playwright)
6. Content aligned with Radiant Protocol doctrine

**Success Criteria:**
- ✅ All three apps consolidated into one Next.js app
- ✅ 70%+ test coverage
- ✅ Core orchestrator implemented and functional
- ✅ Marketing content reflects Story OS / Radiant Protocol
- ✅ All documentation files complete
- ✅ CI/CD pipeline running
- ✅ Production deployment

**Timeline:** 4-6 weeks for full consolidation and implementation.

---

**End of Report**
