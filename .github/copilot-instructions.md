# Radiant System — AI Agent Instructions

## Project Overview

Radiant is a **Story OS** and orchestrator, not a content generator. It coordinates:
- **DropFrame** (Transformation Engine) — restructures/refactors existing content
- **Grindline** (Production Engine) — batch production and pipeline execution

The system defines schemas, protocols, and coordination rules for creative workflows following: `Intent → Transform → Produce → Publish`

## Architecture

### Dual-Codebase Structure

This repo contains two independent systems:

1. **Core Orchestrator** (`/core`, `/docs`, `/specs`, `/examples`)
   - Node.js-based (files are placeholders, mostly empty)
   - Defines Radiant Protocol v0.1
   - Contains documentation, schemas, integration specs
   - **Status**: Documentation complete, implementation pending

2. **Web UI** (`/radiant_systems`)
   - React + TypeScript + Vite + shadcn/ui
   - Marketing/demo site, NOT the orchestrator implementation
   - Uses HashRouter, TanStack Query, Supabase integration
   - **Status**: Functional but routes not fully wired

**Critical**: These are independent systems. Changes to the web UI don't affect core orchestration logic.

## Protocol & Data Contracts

All inter-module communication uses the Radiant Protocol envelope ([specs/radiant-schema.json](specs/radiant-schema.json)):

```json
{
  "id": "uuid",
  "version": "radiant-protocol-v0.1",
  "type": "INTENT | TRANSFORM_REQUEST | TRANSFORM_RESPONSE | PIPELINE_REQUEST | PIPELINE_RESPONSE | ERROR",
  "timestamp": "ISO-8601",
  "payload": {},
  "meta": { "source": "radiant | dropframe | grindline | other" }
}
```

### Message Flow Pattern
- **INTENT** → Radiant interprets and routes
- **TRANSFORM_REQUEST** → DropFrame reshapes content
- **TRANSFORM_RESPONSE** → Returns structured nodes (scenes/beats/sections)
- **PIPELINE_REQUEST** → Grindline executes batch operations
- **PIPELINE_RESPONSE** → Returns multiple outputs

**Never generate content directly** — Radiant coordinates systems that do.

## Development Workflows

### Web UI (`/radiant_systems`)

```bash
cd radiant_systems
pnpm dev              # Dev server with VITE_ENABLE_ROUTE_MESSAGING=true
pnpm build            # Production build
pnpm build:dev        # Dev build with sourcemaps
pnpm lint             # ESLint check
pnpm preview:dev      # Build dev + preview
pnpm test:edge-functions  # Test Supabase edge functions (uses Deno)
```

**Route Messaging**: The `VITE_ENABLE_ROUTE_MESSAGING` env var enables route transition logging in dev/debug builds.

### Core Orchestrator
- Currently documentation-driven (implementation pending per [TODO.md](TODO.md))
- Files in `/core` are empty stubs with JSDoc headers
- Focus on `/docs` and `/specs` for protocol design
- When implementing: follow adapter pattern in `core/adapters/`

## Key Conventions

### Story Frameworks
Radiant supports modular narrative structures (Save the Cat, Hero's Journey, etc.). Future implementations go in `docs/story-frameworks/`.

### Schema Nodes
Three core node types ([specs/radiant-schema.json](specs/radiant-schema.json)):
- **scene** — location, time, characters, beat_ref
- **beat** — framework, slot references
- **doc-section** — order metadata

### Integration Specs
- [specs/dropframe-integration.md](specs/dropframe-integration.md) — Transform modes: scene, beat, structure, rewrite
- [specs/grindline-integration.md](specs/grindline-integration.md) — Pipelines: story-batch, content-batch, custom
- [specs/message-contracts.md](specs/message-contracts.md) — Empty (awaiting implementation)
- [specs/data-shapes.md](specs/data-shapes.md) — Node type definitions

## Web UI Patterns

### Routing (⚠️ Known Issue)
Uses HashRouter. Page components exist (Manifesto, LearnHub, CaseStudies, About) but routes aren't registered in [radiant_systems/src/App.tsx](radiant_systems/src/App.tsx).

**To add routes**: Insert between `path="/"` and catch-all `path="*"`:
```tsx
<Route path="/" element={<Index />} />
<Route path="/manifesto" element={<Manifesto />} />
<Route path="/learn" element={<LearnHub />} />
<Route path="/case-studies" element={<CaseStudies />} />
<Route path="/about" element={<About />} />
{/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
<Route path="*" element={<NotFound />} />
```

### Styling
- Tailwind CSS with custom config
- shadcn/ui components in `src/components/ui/` (full suite installed)
- Use `cn()` from [src/lib/utils.ts](radiant_systems/src/lib/utils.ts) for className merging
- React Router proxied through [src/lib/react-router-dom-proxy.tsx](radiant_systems/src/lib/react-router-dom-proxy.tsx)

### Image CDN Plugin
Custom Vite plugin (`cdnPrefixImages`) in [vite.config.ts](radiant_systems/vite.config.ts):
- Scans `public/images/` at build time
- Rewrites references to `CDN_IMG_PREFIX` env var in production
- Handles JSX attributes, string literals, template literals, CSS `url()`
- Uses Babel AST parsing for accurate JS/TS rewriting

## Design Philosophy

From [docs/architecture.md](docs/architecture.md), Radiant solves:
- Story drift and structural inconsistency
- Over-generation and lack of cohesion
- AI model refusal patterns
- Multi-agent workflow fragmentation

**Radiant is the single source of truth** — deliberate, minimal, extensible.

## Current Implementation Status

- ✅ Protocol design (v0.1) complete
- ✅ Schema definitions finalized
- ✅ Web UI functional with marketing pages
- ⚠️ Web UI routes not wired (see Routing section)
- ⚠️ Core orchestrator pending (files exist but are empty)
- ⚠️ DropFrame/Grindline adapters pending (stub validators at lines 44-50)

**Next Priority**: Implement `/core/orchestrator.js`, `/core/radiant-config.js`, and complete adapter HTTP transport layers (see [TODO.md](TODO.md) for full task list).

When adding orchestrator logic, implement in `/core` following the protocol in `/specs`.
