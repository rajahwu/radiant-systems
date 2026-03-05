Radiant Architecture Overview — v0.1

Radiant is the orchestrator and OS for the creative system consisting of:

Radiant (Core)

DropFrame (Transformation Engine)

Grindline (Production Engine)

Radiant defines schemas, protocols, and coordination rules.

1. System Diagram
User Intent
    ↓
Radiant OS (Orchestrator)
    ↓
DropFrame (Transform)
    ↓
Grindline (Produce)
    ↓
Final Output

2. Module Responsibilities
Radiant (Core)

interprets user intent

selects schemas

routes work to modules

enforces story rules and structure

DropFrame (Transformation)

refactors raw text

restructures into scenes, beats, documents

applies tone, style, clarity passes

Grindline (Production)

batch generation

multi-pass pipelines

output formatting

artifact assembly

3. Data Flows

Intent → Radiant

Radiant → DropFrame (Transformation)

DropFrame → Radiant (Structured Asset)

Radiant → Grindline (Production)

Grindline → Radiant (Output Package)

4. Expansion Model

Radiant supports modular narrative frameworks:

Save the Cat

Hero’s Journey

Seven-Point Structure

Three-Act Structure

Custom frameworks

Each resides in:

docs/story-frameworks/

5. Why Radiant Exists

Radiant is designed to solve:

story drift

structural inconsistency

over-generation

lack of cohesion

AI-model refusal patterns

fragmentation in multi-agent workflows

Radiant establishes a single source of truth.
