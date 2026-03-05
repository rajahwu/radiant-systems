# Radiant System Comprehensive Audit

**Agent:** Gemini
**Date:** 2026-01-01
**Status:** Complete

## Executive Summary

The `radiant-system` repository currently houses three distinct applications with overlapping purposes but divergent technology stacks. `radiant_systems` serves as the primary marketing interface using React 18/Vite. `radiant-manual` provides documentation and specific operational tools using Next.js 16/React 19. `StudioTriptych` is a smaller visualization tool using React 19/Vite.

Key findings indicate significant fragmentation in dependencies (React 18 vs 19), styling (Tailwind variants), and build systems. `radiant-manual` references workspace dependencies that are not present in the current file structure, posing a critical build risk.

The recommended path forward is a consolidation into a single Next.js monorepo or unified application structure (likely preserving the Next.js foundation of `radiant-manual` as the shell), standardizing on React 19 and Tailwind 4 where possible, or falling back to stable versions if necessary.

## Repository Structure

```
radiant-system/
├── radiant_systems/          # Marketing Site (React 18, Vite, Shadcn UI)
│   ├── src/
│   │   ├── components/       # Extensive Shadcn UI library
│   │   └── pages/            # Marketing pages (Home, About, etc.)
├── 2025-12-31_0447_build-doc/
│   ├── radiant-manual/       # Documentation & Apps (Next.js 16, React 19)
│   │   └── src/app/          # Multiple sub-apps (clearline-7, dashboard, etc.)
│   └── StudioTriptych/       # Visualization (React 19, Vite)
└── core/, docs/, RDX/        # Shared documentation and configs
```

## Application Analysis

### 1. radiant_systems
- **Purpose:** Public-facing marketing and information.
- **Health:** 🟡 Moderate. functional but isolated.
- **Tech Stack:** React 18.3, Vite 5, Tailwind 3.
- **Key Findings:**
  - Rich component library (shadcn/ui).
  - Standard Vite SPA structure.
  - duplicate logic likely with manual's components.
- **Recommendations:** Extract UI components to a shared package. Migrate pages to Next.js routes.

### 2. radiant-manual
- **Purpose:** Internal documentation, build orders, and operational dashboards.
- **Health:** 🟔 Critical Risk (Missing workspace dependencies).
- **Tech Stack:** Next.js 16, React 19, Tailwind 4.
- **Key Findings:**
  - References `@clearline7/*` workspace packages that are missing.
  - Contains multiple "mini-apps" in `src/app` (clearline-7, grindhouse, etc.).
  - Uses bleeding-edge versions (Next.js 16, React 19).
- **Recommendations:** Resolve missing dependencies immediately. Serve as the host for the consolidated application.

### 3. StudioTriptych
- **Purpose:** Visualization of three studios.
- **Health:** 🟢 Good (Simple).
- **Tech Stack:** React 19, Vite 7.
- **Key Findings:**
  - Very lightweight.
  - Simple visualization logic.
- **Recommendations:** Convert to a component within the main application.

## Code Quality Assessment

### Strengths
- Strong use of TypeScript across all projects.
- Modern tooling (Vite, Next.js).
- `radiant_systems` has a comprehensive UI kit.

### Areas for Improvement
- **Version Mismatch:** React 18 vs 19 causes incompatibility if merged directly.
- **Dependency Hell:** Missing workspace packages in `radiant-manual`.
- **Styling Divergence:** Tailwind 3 vs 4.

### Critical Issues
- `radiant-manual` cannot build without `@clearline7` packages.

## Content Assessment
- Marketing content in `radiant_systems` is well-structured but static.
- Manual content in `radiant-manual` seems data-driven (`public/data/manual`) which is good for maintainability.

## Integration Opportunities

### Shared Components
- The `radiant_systems` `components/ui` folder is a prime candidate for a shared `@radiant/ui` package.

### Data Layer
- Consolidate `public/data` approaches.
- Unified API routes in Next.js for serving both marketing and manual content.

### Routing
- Unified Next.js router can handle:
  - `/` -> Marketing (from `radiant_systems`)
  - `/manual` -> Documentation (from `radiant-manual`)
  - `/triptych` -> Visualization (from `StudioTriptych`)

## Technical Debt

| Category | Severity | Effort | Impact |
|----------|----------|--------|--------|
| Missing Dependencies (`radiant-manual`) | Critical | Medium | High |
| React Version Mismatch | High | Medium | High |
| Tailwind Version Mismatch | Medium | Low | Medium |
| Duplicate UI Components | Medium | Medium | Medium |

## Recommendations

1.  **Immediate:** Fix `radiant-manual` dependencies. Locate or recreate `@clearline7` packages or inline them.
2.  **Short-term:** Create a monorepo structure (pnpm workspace).
3.  **Mid-term:** Migrate `radiant_systems` pages to `radiant-manual` (renamed to `web` or `app`) as routes.
4.  **Mid-term:** Port `StudioTriptych` as a component.
5.  **Long-term:** Standardize on React 19 and Tailwind 4.

## Risk Assessment

- **High:** React 19 is still new (or was recently stable); library compatibility might be an issue for `radiant_systems` components.
- **High:** Missing source code for `@clearline7` components could mean significant rewrite work.
