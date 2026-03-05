# Application Tasks

**Status:** In Progress  
**Owner:** TBD  
**Last Updated:** 2025-12-31

## radiant-manual App

### Current State
- [x] Next.js app initialized
- [x] Build Order view working
- [x] Retrospective view working
- [x] Evaluation view working
- [x] Billables view working
- [x] Section tabs navigation
- [x] Type-safe data loading

### Enhancements Needed
- [ ] Add search functionality
- [ ] Add section cross-linking
- [ ] Add code syntax highlighting
- [ ] Add copy-to-clipboard for code blocks
- [ ] Add dark/light theme toggle
- [ ] Mobile responsive improvements
- [ ] Add print stylesheet

### New Features
- [ ] Session logging UI (for RDX)
- [ ] Live build status dashboard
- [ ] Integration diagram viewer
- [ ] Dependency graph visualization

## radiant_systems App (To be migrated to apps/web)

### Quick Wins (Do First)
- [ ] Wire missing routes in `App.tsx` (Manifesto, About, CaseStudies, LearnHub)
- [ ] Enable TypeScript strict mode incrementally
- [ ] Align Index page content with Radiant Protocol doctrine
- [ ] Write first component test (Button or similar)

### Phase 2: Migration to Next.js
- [ ] Migrate to `apps/web/src/app/(marketing)/`
- [ ] Convert HashRouter routes to Next.js App Router
- [ ] Rewrite marketing content to reflect Story OS philosophy
- [ ] Add protocol documentation routes
- [ ] Integrate with `@radiant/ui` shared components

### Content Rewrite
- [ ] Index: Replace "Transforming Ideas" with "Story OS for Creative Workflows"
- [ ] Features: Replace with "Protocol-First", "Coordination Not Generation", "Modular Frameworks"
- [ ] About: Add explanation of Radiant, DropFrame, Grindline
- [ ] Manifesto: Align with Radiant Protocol principles
- [ ] Case Studies: Show real story transformation workflows
- [ ] Learn Hub: Teach Radiant Protocol, message contracts
