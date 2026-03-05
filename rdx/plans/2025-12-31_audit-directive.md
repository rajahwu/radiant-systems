## Audit Scope

**Target Repository:** `~/core_projects/radiant-system/`

**Applications to Audit:**
1. `radiant_systems/` - Marketing site (localhost:8080)
2. `2025-12-31_0447_build-doc/radiant-manual/` - Build order manual (Next.js)
3. `2025-12-31_0447_build-doc/StudioTriptych/app/` - Triptych visualization (Vite)

**Objective:** Consolidate into unified Radiant Seven ecosystem with RDX foundation

---

## Audit Agent Instructions

Create this file for the audit agent:

**`~/core_projects/radiant-system/RDX/plans/2025-12-31_audit-directive.md`:**

```markdown
# Radiant System Audit Directive

**Agent:** [Name]  
**Date:** 2025-12-31  
**Objective:** Comprehensive repository audit and consolidation plan

## Audit Tasks

### 1. Repository Structure Analysis
- [ ] Map complete directory structure
- [ ] Identify all applications and their purposes
- [ ] Document dependencies and build systems
- [ ] List all configuration files
- [ ] Identify duplicated functionality
- [ ] Map cross-app dependencies

### 2. Application Inventory

#### radiant_systems (Marketing Site)
- **Tech Stack:** React + Vite
- **Port:** 8080
- **Pages:** Home, About, Case Studies, Learn Hub, Manifesto
- **Components:** Header, Footer, ValueProp, SystemsMap, TrainingBlockCard, CaseStudyCard
- **Audit Focus:**
  - [ ] Review all page content
  - [ ] Assess component reusability
  - [ ] Check alignment with Radiant Seven doctrine
  - [ ] Identify outdated content
  - [ ] Review UI/UX patterns

#### radiant-manual (Build Order Documentation)
- **Tech Stack:** Next.js 14
- **Port:** 3000
- **Sections:** Build Order, Retrospective, Evaluation, Billables
- **Data Source:** JSON files in `/public/data/manual/`
- **Audit Focus:**
  - [ ] Verify all four sections render correctly
  - [ ] Check data integrity
  - [ ] Review component architecture
  - [ ] Assess mobile responsiveness
  - [ ] Identify enhancement opportunities

#### StudioTriptych (Visualization)
- **Tech Stack:** React + Vite
- **Purpose:** Visual representation of three studios
- **Audit Focus:**
  - [ ] Assess standalone vs integration value
  - [ ] Check for unique functionality
  - [ ] Determine merge or embed strategy

### 3. Code Quality Assessment
- [ ] TypeScript usage and type coverage
- [ ] Component structure and patterns
- [ ] State management approaches
- [ ] Styling consistency (Tailwind usage)
- [ ] Code duplication across apps
- [ ] Build configuration alignment

### 4. Content Audit
- [ ] Marketing messaging alignment with doctrine
- [ ] Technical documentation completeness
- [ ] Case studies relevance
- [ ] Training content accuracy
- [ ] Manifesto vs doctrine alignment

### 5. Integration Opportunities
- [ ] Shared component library potential
- [ ] Common data layer needs
- [ ] Unified routing structure
- [ ] Shared utilities and helpers
- [ ] Common design system

### 6. Technical Debt
- [ ] Outdated dependencies
- [ ] Deprecated patterns
- [ ] Missing tests
- [ ] Documentation gaps
- [ ] Performance issues
- [ ] Accessibility issues

### 7. Consolidation Plan
- [ ] Recommend unified app structure
- [ ] Define shared component library
- [ ] Plan data layer architecture
- [ ] Design routing strategy
- [ ] Establish build and deploy pipeline

## Deliverables

### 1. Audit Report
**File:** `RDX/reports/2025-12-31_[agent]_audit_radiant-system-comprehensive.md`

**Sections:**
- Executive Summary
- Repository Structure Map
- Application Analysis (each app)
- Code Quality Findings
- Content Assessment
- Integration Opportunities
- Technical Debt Inventory
- Risk Assessment
- Recommendations

### 2. Consolidation Roadmap
**File:** `RDX/plans/consolidation-roadmap.md`

**Content:**
- Unified application architecture
- Migration phases
- Component library design
- Data layer strategy
- Build system unification
- Deployment strategy

### 3. Updated TODO Lists
**Files:**
- `RDX/todos/component-migration.md`
- `RDX/todos/data-layer-db.md`
- `RDX/todos/app-tasks.md`
- `RDX/todos/infrastructure.md`

### 4. Quick Wins List
**File:** `RDX/plans/quick-wins.md`

Low-effort, high-impact improvements that can be implemented immediately.

## Report Template

```markdown
# Radiant System Comprehensive Audit

**Agent:** [Your Name]  
**Date:** 2025-12-31  
**Duration:** [Time spent]  
**Status:** Complete

## Executive Summary

[3-5 paragraph overview of findings and key recommendations]

## Repository Structure

[Tree view with annotations]

## Application Analysis

### radiant_systems
- **Purpose:** [...]
- **Health:** 🟢/🟡/🟔
- **Key Findings:** [...]
- **Recommendations:** [...]

### radiant-manual
[Same format]

### StudioTriptych
[Same format]

## Code Quality Assessment

### Strengths
- [...]

### Areas for Improvement
- [...]

### Critical Issues
- [...]

## Content Assessment

[Evaluate messaging, doctrine alignment, completeness]

## Integration Opportunities

### Shared Components
- [List components that could be shared]

### Data Layer
- [Unified data strategy]

### Routing
- [Unified navigation]

## Technical Debt

| Category | Severity | Effort | Impact |
|----------|----------|--------|--------|
| [...]    | High/Med/Low | S/M/L | High/Med/Low |

## Consolidation Recommendations

### Proposed Architecture

```
radiant-system/
├── apps/
│   ├── web/              # Unified Next.js app
│   ├── docs/             # Documentation (could be route in web)
│   └── admin/            # Future admin panel
├── packages/
│   ├── ui/               # Shared component library
│   ├── config/           # Shared configs
│   └── types/            # Shared TypeScript types
├── RDX/                  # Operational layer
└── public/               # Static assets
```

### Migration Phases

**Phase 1: Foundation (Week 1)**
- Create monorepo structure
- Extract shared components
- Unify build system

**Phase 2: Integration (Week 2-3)**
- Merge applications
- Implement unified routing
- Migrate content

**Phase 3: Enhancement (Week 4+)**
- Add new features
- Implement RDX logging
- Performance optimization

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| [...]| High/Med/Low | High/Med/Low | [...] |

## Next Steps

1. [Immediate action]
2. [Next priority]
3. [Following task]

## Appendices

### A. Dependency Matrix
[Cross-app dependency map]

### B. Component Inventory
[Complete list of all components]

### C. Content Map
[All pages, routes, content blocks]
```

## Guidelines

1. **Be thorough but practical** - Don't just list problems, suggest solutions
2. **Prioritize ruthlessly** - Mark items as Critical/High/Medium/Low
3. **Think consolidation** - Look for merge opportunities
4. **Consider RDX** - How does each piece integrate with RDX logging?
5. **Align with doctrine** - Does content match the Source philosophy?
6. **Think production** - What's needed for real deployment?

## Questions to Answer

- Can these three apps become one unified Next.js app with multiple routes?
- Which components are truly unique vs duplicated?
- What's the best data architecture for the manual + marketing content?
- Should StudioTriptych be a standalone app or an embedded component?
- What's missing for production readiness?
- How does RDX logging integrate with the UI?

## Success Criteria

- Clear architectural recommendation
- Actionable consolidation plan
- Prioritized task list

