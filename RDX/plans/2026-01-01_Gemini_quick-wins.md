# Quick Wins

**Agent:** Gemini
**Date:** 2026-01-01

Low-effort, high-impact tasks to improve the repository state immediately.

## Infrastructure
- [ ] **Initialize Gitignore:** Ensure root `.gitignore` covers all sub-project artifacts (`.next`, `dist`, `node_modules`).
- [ ] **Workspace Setup:** Create `pnpm-workspace.yaml` at root to link the projects mentally, even if physically separate for now.

## Code Quality
- [ ] **Fix Type Errors:** Run `tsc` on `radiant_systems` and fix low-hanging fruit.
- [ ] **Standardize Formatting:** Add a root `.prettierrc` to enforce consistent style across all three apps.

## Documentation
- [ ] **Update README:** Create a root `README.md` that links to the three sub-projects and explains how to run them.
- [ ] **Document Ports:** Clearly list the default ports (3000, 8080, etc.) in the main README.

## Cleanup
- [ ] **Remove unused files:** Scan for and remove any `tmp` directories or obviously abandoned test files.
