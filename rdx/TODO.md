# Radiant System — TODO

**Generated:** 2025-12-16  
**Agent:** GitHub Copilot (Claude Sonnet 4.5)  
**Last Updated:** 2025-12-16

---

## 🔴 Critical Priority

### Core Orchestrator Implementation

- [ ] **Implement `/core/orchestrator.js`** (currently empty)
  - Intent parser to route incoming INTENT messages
  - Module dispatcher for DropFrame/Grindline
  - Response aggregator and state management
  - Error handling and retry logic
  - Reference: [docs/radiant-protocol.md](docs/radiant-protocol.md) sections 3.1-3.6

- [ ] **Implement `/core/radiant-config.js`** (currently empty)
  - Default pipeline configurations
  - Module endpoint definitions
  - Timeout and retry settings
  - Story framework registry
  - Environment-specific overrides

- [ ] **Complete adapter implementations**
  - `/core/adapters/dropframe-adapter.js` — has stub validators (lines 44-50), needs full implementation
  - `/core/adapters/grindline-adapter.js` — has stub validators (lines 44-50), needs full implementation
  - Add real HTTP/IPC transport layer
  - Implement error recovery patterns

### Documentation Gaps

- [ ] **Write `/docs/overview.md`** (empty)
  - High-level system summary
  - Quick start guide
  - Key concepts for new contributors

- [ ] **Write `/docs/story-os.md`** (empty)
  - Story OS concept explanation
  - How narrative structures map to schemas
  - Examples of story node transformations

- [ ] **Write `/docs/modules.md`** (empty)
  - Detailed module responsibilities
  - Communication patterns between modules
  - How to extend with new modules

- [ ] **Write `/docs/philosophy.md`** (empty)
  - Design principles behind Radiant
  - Why coordination over generation
  - Decision rationale for protocol choices

- [ ] **Write `/docs/collaboration-model.md`** (empty)
  - Human + AI workflow patterns
  - When to use each message type
  - Best practices for intent formation

---

## 🟡 High Priority

### Schema & Spec Completions

- [ ] **Write `/specs/data-shapes.md`** (empty)
  - Detailed type definitions for all payload shapes
  - Validation rules and constraints
  - Examples of valid/invalid structures

- [ ] **Write `/specs/message-contracts.md`** (empty)
  - Request-response pairs with examples
  - Sequence diagrams for common flows
  - Error scenarios and recovery patterns

- [ ] **Enhance `/specs/dropframe-integration.md`**
  - Add concrete examples of transform modes (scene, beat, structure, rewrite)
  - Document edge cases and failure modes
  - Include sample request-response pairs

- [ ] **Enhance `/specs/grindline-integration.md`**
  - Define specific pipeline configurations
  - Document batch size limits and performance characteristics
  - Add multi-pass pipeline examples

### Example Content

- [ ] **Write `/examples/story-transform-flow.md`** (empty)
  - End-to-end example of intent → transform → output
  - Show actual message payloads at each step
  - Include different story framework examples

- [ ] **Write `/examples/pipeline-example.md`** (empty)
  - Multi-variant batch production example
  - Show pipeline configuration options
  - Demonstrate output formatting choices

- [ ] **Write `/examples/writing-system-demo.md`** (empty)
  - Real-world writing workflow
  - Integration of all three modules
  - Sample project structure

### Core Module Package

- [ ] **Create `/core/package.json`**
  - Define Node.js dependencies (if any)
  - Set up module exports
  - Add test scripts
  - Define entry point

- [ ] **Add `/core/index.js`**
  - Export orchestrator, adapters, config
  - Provide simple initialization API

---

## 🟢 Medium Priority

### Story Frameworks

- [ ] **Create `/docs/story-frameworks/` directory**
  - Add Save the Cat beat sheet definition
  - Add Hero's Journey structure
  - Add Seven-Point structure
  - Add Three-Act structure
  - Create template for custom frameworks

- [ ] **Update schema to support framework extensions**
  - Allow framework-specific metadata
  - Define slot naming conventions
  - Create framework validation rules

### Testing Infrastructure

- [ ] **Add core orchestrator tests**
  - Unit tests for message routing
  - Integration tests for adapter communication
  - Mock DropFrame/Grindline responses
  - Error handling scenarios

- [ ] **Add schema validation tests**
  - JSON Schema validation for all message types
  - Test invalid message handling
  - Verify backward compatibility

- [ ] **Add web UI tests** (in `/radiant_systems`)
  - Component unit tests
  - Route navigation tests
  - API integration tests (if applicable)

### Web UI Enhancements

- [ ] **Complete navigation routing** in `/radiant_systems/src/App.tsx`
  - Add routes for all pages (currently has `{/* ADD ALL CUSTOM ROUTES ABOVE */}` comment)
  - Consider: About, Manifesto, LearnHub, CaseStudies routes
  - Ensure proper HashRouter configuration

- [ ] **Add actual page content**
  - `/radiant_systems/src/pages/About.tsx` — needs real about content
  - `/radiant_systems/src/pages/Manifesto.tsx` — needs manifesto content
  - `/radiant_systems/src/pages/LearnHub.tsx` — needs learning resources
  - `/radiant_systems/src/pages/CaseStudies.tsx` — needs case study data

- [ ] **Implement Supabase integration**
  - Complete edge function implementations in `/radiant_systems/supabase/edge_function/`
  - Add authentication if needed
  - Set up database schemas
  - Document environment variables needed

### Developer Experience

- [ ] **Add root `/package.json`** (currently missing)
  - Monorepo management (workspaces?)
  - Root-level scripts
  - Shared dependencies

- [ ] **Create `.env.example` files**
  - Document required environment variables
  - Provide example configurations
  - Note CDN URLs, API endpoints, etc.

- [ ] **Add CI/CD workflows** in `.github/workflows/`
  - Lint checks
  - Test runs
  - Build verification
  - Deploy preview environments

---

## 🔵 Low Priority / Nice-to-Have

### Documentation Polish

- [ ] **Add diagrams to architecture docs**
  - Sequence diagrams for message flows
  - Component interaction diagrams
  - State machine diagrams for orchestrator

- [ ] **Create troubleshooting guide**
  - Common errors and solutions
  - Debugging techniques
  - Performance optimization tips

- [ ] **Add API reference**
  - Auto-generate from JSDoc comments
  - Include all message types
  - Provide interactive examples

### Code Quality

- [ ] **Add ESLint config for `/core`**
  - Set up Node.js linting rules
  - Add pre-commit hooks
  - Configure format-on-save

- [ ] **Add JSDoc comments**
  - Document all public APIs
  - Add type annotations
  - Include usage examples

- [ ] **Clean up Zone.Identifier files** in `/radiant_systems`
  - Multiple `*.Zone.Identifier` files present (Windows WSL artifacts)
  - Add to `.gitignore`
  - Remove from repository

### Future Enhancements

- [ ] **CLI interface** for Radiant orchestrator
  - Command-line tool for intent submission
  - Pipeline execution from terminal
  - Status monitoring

- [ ] **Logging and observability**
  - Structured logging throughout core
  - Trace ID propagation across modules
  - Performance metrics collection

- [ ] **Configuration management**
  - Support multiple environments (dev, staging, prod)
  - Secrets management strategy
  - Feature flags for gradual rollouts

---

## 📊 Implementation Status Summary

| Component | Status | Priority |
|-----------|--------|----------|
| Core Orchestrator | ⚠️ Empty placeholder | 🔴 Critical |
| Adapters | 🟡 Partial implementation | 🔴 Critical |
| Protocol Specs | ✅ Complete | — |
| Schema Definitions | ✅ Complete | — |
| Integration Specs | 🟡 Basic structure | 🟡 High |
| Documentation | ⚠️ Most files empty | 🔴 Critical |
| Examples | ⚠️ All empty | 🟡 High |
| Web UI | ✅ Functional | 🟢 Medium |
| Tests | ❌ None | 🟡 High |
| Story Frameworks | ❌ Not implemented | 🟢 Medium |

---

## 🎯 Recommended Next Steps

1. **Start with core orchestrator** — implement the heart of the system in `/core/orchestrator.js`
2. **Fill documentation gaps** — write overview.md, story-os.md, philosophy.md to establish vision
3. **Complete adapters** — finish DropFrame and Grindline adapter implementations
4. **Add examples** — create working examples that demonstrate the entire flow
5. **Set up testing** — ensure reliability before expanding features

---

## 📝 Notes

- The web UI (`/radiant_systems`) is well-developed but appears to be a marketing site rather than the orchestrator UI
- Consider whether the web UI should interact with the core orchestrator or remain separate
- Many documentation files are placeholders — suggests rapid initial prototyping phase
- Protocol and schema design is solid; implementation is the main gap
- No version control tags or releases yet — consider semantic versioning strategy
- No CONTRIBUTING.md or CODE_OF_CONDUCT.md for open-source collaboration

---

**Review Status:** Open for feedback  
**Next Review:** After core orchestrator implementation
