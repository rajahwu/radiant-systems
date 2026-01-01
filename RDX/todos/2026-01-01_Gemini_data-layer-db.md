# Data Layer & Database Tasks

**Agent:** Gemini
**Date:** 2026-01-01

## Current State Analysis
- `radiant-manual` uses JSON files in `public/data`.
- `radiant_systems` seems to have some Supabase references (`supabase/edge_function` in file tree, though `package.json` was truncated, dependencies likely exist).

## Tasks
- [ ] Confirm Supabase integration status in `radiant_systems`.
- [ ] Design JSON schema for `manual` content to ensure type safety.
- [ ] Create a "Content Layer" or typed loader for the JSON data.
    - [ ] Typed interfaces for `BuildOrder`, `Retrospective`, `Billable`.
- [ ] Decide on Supabase usage for the unified app:
    - [ ] Authentication?
    - [ ] Dynamic content?
    - [ ] Analytics/Logging (RDX)?
