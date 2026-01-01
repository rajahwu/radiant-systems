# Infrastructure Tasks

**Agent:** Gemini
**Date:** 2026-01-01

## Workspace
- [ ] Create `pnpm-workspace.yaml`.
- [ ] Configure root `package.json` scripts (`build`, `dev`, `lint`).

## CI/CD
- [ ] Setup GitHub Actions for:
    - [ ] Linting (ESLint).
    - [ ] Type Checking (TypeScript).
    - [ ] Build verification.

## Deployment
- [ ] Configure Vercel project for `apps/web`.
- [ ] Set up environment variables on Vercel.
- [ ] Verify Supabase connection in production environment.

## Tooling
- [ ] Standardize ESLint config (`packages/config/eslint-preset.js`).
- [ ] Standardize TypeScript config (`packages/config/tsconfig.base.json`).
- [ ] Standardize Tailwind config.
