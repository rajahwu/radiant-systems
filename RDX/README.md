# RDX — Radiant Dexterity

**Status:** Initializing  
**Version:** 0.1.0  
**Last Updated:** 2025-12-31

## Purpose

RDX is the operational logging and coordination layer for the Radiant Seven ecosystem. It provides:

- **Session Tracking**: Immutable append-only logs across all agents and projects
- **Migration Audit**: Systematic tracking of system evolution
- **Task Coordination**: Categorized TODO management with clear ownership
- **Report Archive**: Timestamped progress reports with standardized naming

## Directory Structure
```
RDX/
├── README.md           # This file
├── readiness.md        # Status tracking and conventions
├── reports/            # Audit reports (timestamped)
├── plans/              # Strategic plans and migrations
└── todos/              # Categorized task lists
```

## Report Naming Convention

All reports follow this format:
```
YYYY-MM-DD_HHMM_[agent-name]_[report-type]_[subject].md
```

**Example:**
```
2025-12-31_0447_claude_migration_rdx-init.md
```

**Report Types:**
- `audit` - System audits and reviews
- `migration` - Migration progress reports
- `status` - Status updates
- `analysis` - Deep-dive analysis
- `integration` - Integration reports

## Integration Points

- **Grindhouse**: RDX logs feed Dropframe analysis
- **Content Factor**: Session logs tracked for content pipelines
- **Lattice Sync**: Provides session state for agent coordination

## Next Steps

1. Migrate existing `TODO.md` into categorized files
2. Audit current `docs/` directory
3. Establish baseline report
4. Begin session logging for build order implementation
