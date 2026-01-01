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
## Radiant — Copilot / AI Agent Notes

Purpose: help AI coding agents be immediately productive in this repo by summarizing architecture,
workflows, conventions, and key integration points. Keep changes minimal and preserve `core`/`specs` intent.

High-level architecture
- Dual-codebase: `core/` (orchestrator, Node.js stubs + protocol) vs `radiant_systems/` (React + Vite UI). They are independent.
- Protocol envelope: `specs/radiant-schema.json` is the authoritative message schema for `INTENT/TRANSFORM/PIPELINE` flows.

Developer workflows (quick commands)
- UI dev: `cd radiant_systems && pnpm dev` (uses `VITE_ENABLE_ROUTE_MESSAGING=true` for route logs).
- UI checks: `pnpm build`, `pnpm lint`, `pnpm preview:dev` inside `radiant_systems`.
- Edge functions test: `pnpm test:edge-functions` (Supabase / Deno tests in `radiant_systems/supabase`).

Where to implement features
- Orchestrator code belongs in `core/` (e.g. `core/orchestrator.js`, `core/radiant-config.js`).
- `radiant_systems/` is the marketing/demo UI — don't conflate UI changes with protocol implementation.

Repo conventions & patterns
- Follow the Radiant Protocol in `specs/` when wiring adapters; adapters live under `core/adapters/`.
- Use `cn()` from `radiant_systems/src/lib/utils.ts` for class merging and `shadcn/ui` components for UI primitives.
- Routing: `radiant_systems` uses HashRouter; routes are declared in `radiant_systems/src/App.tsx`. Add new routes before the catch-all `path="*"`.
- Image handling: `radiant_systems/vite.config.ts` contains `cdnPrefixImages` plugin — update with care.

 # Radiant System — AI Agent Instructions

This doc gives focused, actionable guidance for AI coding agents working in this repository.

## Quick Summary
- Dual-codebase: `core/` = orchestrator and adapters; `radiant_systems/` = React + Vite demo UI. They are independent.
- Protocol-first: `specs/radiant-schema.json` is the single source of truth for inter-component messages.

## Architecture & Why It Matters
- `core/`: implement orchestrator logic, protocol adapters, and server-side integrations (e.g. `core/orchestrator.js`, `core/radiant-config.js`).
- `core/adapters/`: adapters for DropFrame and Grindline — add new adapters here when wiring external systems.
- `radiant_systems/`: marketing/demo UI (React + TypeScript). UI changes should not implement orchestration logic.

## Important Files / Integration Points
- Message schema: `specs/radiant-schema.json` (validate new message types here).
- Example flows: `examples/pipeline-example.md`, `examples/story-transform-flow.md`.
- Router proxy: `radiant_systems/src/lib/react-router-dom-proxy.tsx` (used across UI routes).
- UI utils: `radiant_systems/src/lib/utils.ts` (includes `cn()` used widely).
- Vite image plugin: `radiant_systems/vite.config.ts` (`cdnPrefixImages`) — update carefully.

## Developer Workflows (practical commands)
Run UI dev server (recommended):
```bash
cd radiant_systems
pnpm install
VITE_ENABLE_ROUTE_MESSAGING=true pnpm dev
```
Build / lint / preview:
```bash
cd radiant_systems
pnpm build
pnpm lint
pnpm preview:dev
```
Edge function tests (Supabase / Deno):
```bash
cd radiant_systems
pnpm test:edge-functions
```

## Project-Specific Conventions
- Core vs UI separation: implement protocol, adapters, and production logic in `core/`. Treat `radiant_systems/` as a demo surface.
- Protocol validation: add or change message shapes only after updating `specs/radiant-schema.json` and relevant examples.
- Do not generate final creative content inside Radiant; implement transformers/adapters that accept/emit the protocol envelope.

## Guidance for Making Changes
- Adding a new adapter:
   - Create `core/adapters/<your>-adapter.js` mirroring `dropframe-adapter.js` and `grindline-adapter.js`.
   - Validate all messages against `specs/radiant-schema.json` before emitting.
- Adding routes/UI elements:
   - Update `radiant_systems/src/App.tsx` before the catch-all route and use `react-router-dom-proxy.tsx` where appropriate.
- Updating message contract:
   - Update `specs/radiant-schema.json`, update `examples/`, and add a small adapter/test in `core/adapters/` to demonstrate the change.

## Short Message Envelope Example
Message envelope (use this when wiring adapters):
```json
{"id":"uuid","version":"radiant-protocol-v0.1","type":"INTENT","timestamp":"2025-12-31T00:00:00Z","payload":{},"meta":{"source":"dropframe"}}
```

## Tips & What Not To Do
- Do: Write small, spec-aligned adapters and unit-tests that validate envelope shapes.
- Don't: Implement orchestration logic in `radiant_systems/` or generate final story content; Radiant coordinates other systems.

## Where to Look First
- Read `docs/architecture.md`, `specs/radiant-schema.json`, and `core/adapters/*` when starting a task.

If any section is unclear or you'd like short examples (adapter scaffold, schema validation snippet, or a sample test), say which one and I'll add it.
