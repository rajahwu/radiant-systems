# Infrastructure Tasks

**Status:** Planning  
**Owner:** TBD  
**Last Updated:** 2025-12-31

## Development Environment
- [x] pnpm workspaces
- [ ] **Monorepo structure (Turborepo recommended)**
  - [ ] Install Turborepo: `pnpm add -Dw turbo`
  - [ ] Create `turbo.json` with build/lint/test/dev pipelines
  - [ ] Create `pnpm-workspace.yaml`
  - [ ] Configure caching and remote caching
  - [ ] Set up dependency graph
- [ ] **Shared TypeScript configs**
  - [ ] Create `packages/config/typescript-config/tsconfig.base.json`
  - [ ] Extend in all apps: `"extends": "@radiant/typescript-config/base"`
  - [ ] Enable strict mode globally
- [ ] **Shared ESLint configs**
  - [ ] Create `packages/config/eslint-config/`
  - [ ] Add rules for React, TypeScript, Tailwind
  - [ ] Extend in all apps
- [ ] **Git hooks for quality checks**
  - [ ] Add husky for pre-commit hooks
  - [ ] Add lint-staged for incremental linting
  - [ ] Run tests on pre-push

## Build & Deploy
- [ ] CI/CD pipeline setup
- [ ] Automated testing in CI
- [ ] Preview deployments
- [ ] Production deployment strategy

## Documentation
- [ ] API documentation (if needed)
- [ ] Component library docs
- [ ] Deployment runbook
- [ ] Developer onboarding guide

## Monitoring
- [ ] Error tracking (Sentry?)
- [ ] Analytics (privacy-respecting)
- [ ] Performance monitoring
- [ ] Session logging integration with RDX
