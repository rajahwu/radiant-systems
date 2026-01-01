# Radiant System

Radiant System is a **Story OS** designed to orchestrate creative workflows, blending human intent with AI-driven transformation and production modules.

This repository is a **Monorepo** containing the unified application and shared packages.

## Structure

```
radiant-system/
├── apps/
│   └── web/              # Primary Next.js 16 Application
│       ├── src/app/
│       │   ├── (marketing)/  # Marketing pages (Home, About, etc.)
│       │   ├── (docs)/       # Documentation (MDX)
│       │   ├── manual/       # Build Order Manual
│       │   └── studios/      # Visualizations (Triptych)
├── packages/
│   ├── ui/               # Shared UI Components (Shadcn + Custom)
│   ├── types/            # Shared TypeScript Interfaces
│   ├── config/           # Shared Configurations (ESLint, Tailwind)
│   └── data/             # Data Loaders & Validators
└── core/                 # Core Orchestrator Logic
```

## Quick Start

### Prerequisites
- Node.js 18+
- pnpm (v9 or v10)

### Installation

```bash
pnpm install
```

### Development

To start the unified web application:

```bash
pnpm dev
```
> This runs `apps/web` on [http://localhost:3000](http://localhost:3000).

### Building

To build the entire ecosystem (apps and packages):

```bash
pnpm build
```

## Key Features

- **Unified Interface:** Access Marketing, Manuals, and Visualizations in one app.
- **Radiant Protocol:** Standardized message contracts for Human-AI collaboration.
- **Modular Architecture:** Shared UI and Logic across the system.
- **Documentation First:** Tech specs and protocols rendered natively from MDX.

## Contributing

1. Create a feature branch (`feat/your-feature`).
2. Make changes in `apps/web` or `packages/`.
3. Run `pnpm build` to verify integrity.
4. Submit a PR.