# Consolidation Roadmap

**Agent:** Gemini
**Date:** 2026-01-01
**Objective:** Unify `radiant_systems`, `radiant-manual`, and `StudioTriptych` into a cohesive ecosystem.

## Proposed Architecture

We will adopt a **pnpm monorepo** structure to manage dependencies and shared packages efficiently.

```
radiant-system/
├── package.json (root workspace)
├── pnpm-workspace.yaml
├── apps/
│   └── web/              # Primary Next.js App (formerly radiant-manual)
├── packages/
│   ├── ui/               # Shared UI components (extracted from radiant_systems)
│   ├── config/           # Shared Tailwind, TS, ESLint configs
│   └── data/             # Shared data types and fetchers
└── RDX/                  # Operational plans and logs
```

The `web` app will handle all routes:
- `/` (Home), `/about`, etc. -> ported from `radiant_systems`
- `/manual`, `/clearline-7`, etc. -> existing in `radiant-manual`
- `/triptych` -> ported from `StudioTriptych`

## Migration Phases

### Phase 1: Foundation & Recovery (Week 1)
- [ ] Initialize pnpm workspace in root.
- [ ] Audit and resolve missing `@clearline7` dependencies in `radiant-manual`.
    - *Decision point:* If source is lost, inline code into `src/lib` or recreate.
- [ ] Create `packages/ui` and move basic shadcn components from `radiant_systems`.
- [ ] Standardize tooling (TypeScript, ESLint) across root.

### Phase 2: Unification (Week 2)
- [ ] Move `radiant-manual` code to `apps/web`.
- [ ] Update `apps/web` to use `packages/ui`.
- [ ] Port `radiant_systems` pages (`Index.tsx`, `About.tsx`) to `apps/web` Next.js App Router structure.
    - `radiant_systems/src/pages/Index.tsx` -> `apps/web/src/app/page.tsx`
    - `radiant_systems/src/pages/About.tsx` -> `apps/web/src/app/about/page.tsx`
- [ ] Verify Tailwind 4 compatibility for ported components.

### Phase 3: Integration (Week 3)
- [ ] Port `StudioTriptych` as a component to `apps/web/src/components/visualizations/Triptych.tsx` and expose at `/triptych`.
- [ ] Centralize data fetching logic in `packages/data` or `apps/web/lib/data`.
- [ ] Implement RDX logging hook throughout the unified app.

### Phase 4: Polish & Deploy (Week 4)
- [ ] Full responsiveness check.
- [ ] Accessibility audit.
- [ ] Setup production build pipeline.

## Key Technical Decisions
1.  **Framework:** Next.js 16 (from `radiant-manual`) will be the host.
2.  **React Version:** React 19 (aligns with Next.js 16).
3.  **Styling:** Tailwind CSS 4.

## Risks & Mitigation
- **Risk:** Shadcn components from `radiant_systems` (React 18) might break in React 19.
  - *Mitigation:* Test each component individually during migration to `packages/ui`.
- **Risk:** Missing `@clearline7` code.
  - *Mitigation:* High priority search for these files or rapid re-implementation of interfaces.
