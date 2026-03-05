# Data Layer & Database Tasks

**Status:** Planning  
**Owner:** TBD  
**Last Updated:** 2025-12-31

## Current State
- JSON files in `public/data/manual/`
- No database layer yet
- Client-side data loading only

## Migration Path

### Phase 1: File-Based (Current)
- [x] JSON data files working
- [x] Type-safe loaders
- [ ] Validate all data schemas
- [ ] Add data versioning

### Phase 2: Local Database
- [ ] Choose database (SQLite recommended for start)
- [ ] Design schema for manual sections
- [ ] Design schema for RDX sessions
- [ ] Migration scripts from JSON → DB
- [ ] Server-side API routes

### Phase 3: Production Database
- [ ] Evaluate PostgreSQL/Supabase
- [ ] Multi-tenant considerations
- [ ] Backup/restore procedures
- [ ] Performance optimization

## Schema Design

### Tables Needed
- `sessions` - RDX session logs
- `entries` - RDX log entries
- `manual_sections` - Build order documentation
- `agents` - AI agent registry
- `handoffs` - Lattice Sync handoff tracking
