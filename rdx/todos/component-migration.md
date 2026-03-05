# Component Migration Tasks

**Status:** Planning  
**Owner:** TBD  
**Last Updated:** 2025-12-31  
**Source:** Consolidation Roadmap Phase 1

## Phase 1: Extract Shared Components to @radiant/ui

### Priority 1: Core UI Components
- [ ] Extract shadcn/ui components from `radiant_systems/src/components/ui/`
- [ ] Create `packages/ui/src/components/` directory
- [ ] Copy all 60+ shadcn/ui components
- [ ] Set up package exports in `packages/ui/package.json`
- [ ] Add TypeScript support with proper types

### Priority 2: Custom Components
- [ ] Extract `Header.tsx` to `@radiant/ui`
- [ ] Extract `Footer.tsx` to `@radiant/ui`
- [ ] Extract `Button` (if not from shadcn/ui)
- [ ] Extract `Card` variants
- [ ] Extract `Navigation/Tabs` components

### Priority 3: Utilities
- [ ] Extract `cn()` from `radiant_systems/src/lib/utils.ts` to `@radiant/ui/lib/utils.ts`
- [ ] Extract formatters and helpers
- [ ] Create shared hooks directory (`@radiant/ui/hooks/`)
- [ ] Port `use-toast`, `use-mobile` hooks

### Testing
- [ ] Add Vitest to `@radiant/ui`
- [ ] Write tests for each extracted component
- [ ] Target: 70% coverage

## Build Order Components

### 1. RDX Session (Foundation)
- [ ] Review build order spec from manual
- [ ] Create file structure (`src/core/`, `src/types/`)
- [ ] Implement SessionManager class
- [ ] Implement EntryLogger class
- [ ] Create TypeScript types (Session, Entry, Agent)
- [ ] Add file-based persistence (LocalStore)
- [ ] Write unit tests
- [ ] Integration test with mock data

### 2. Grindhouse (Execution Layer)
- [ ] Create Dropframe structure
- [ ] Create Grindline structure
- [ ] Implement FrameManager
- [ ] Implement TaskQueue
- [ ] Define integration contracts with RDX
- [ ] Build execution tests

### 3. Content Factor (Pipeline Layer)
- [ ] Design pipeline architecture
- [ ] Implement PipelineOrchestrator
- [ ] Create transform engine
- [ ] Integrate with Clearline7
- [ ] Build content flow tests

### Deferred
- Lattice Sync (awaiting RDX + Grindhouse foundation)
- VSM School (awaiting Content Factor)
- Clearline7 (parallel to VSM)
- RIT/RitOps (final integration layer)
