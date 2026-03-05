# 📄 **specs/grindline-integration.md**

Grindline Integration Specification
Radiant System — v0.1

Grindline is the Production Engine of the Radiant architecture.
It handles batch generation, pipelines, and content throughput.

This document defines:

module responsibilities

pipeline contracts

data formats

Radiant orchestration rules

required interfaces

1. Module Role
Grindline performs:

batch generation

iterative passes

pipeline execution

multi-document creation

assembly of output packages

It is optimized for volume and consistency.

2. Radiant → Grindline Request Contract
Grindline expects instructions like:

json
Copy code
{
  "type": "pipeline",
  "pipeline": "story-batch" | "content-batch" | "custom",
  "input": "<structured asset>",
  "config": {
    "passes": 1,
    "variants": 1,
    "format": "markdown" | "json" | "doc"
  },
  "metadata": {
    "project": "string",
    "batch_id": "string"
  }
}
3. Grindline → Radiant Response Contract
json
Copy code
{
  "status": "ok",
  "outputs": [
    "<generated content>"
  ],
  "metadata": {
    "count": 1,
    "pipeline": "string"
  }
}
If pipeline fails:

json
Copy code
{
  "status": "error",
  "error": "string"
}
4. Pipeline Definitions
Grindline supports:

story-batch → multiple scenes, beats, or summaries

content-batch → info articles, components, etc.

custom → bespoke pipelines defined in Radiant

Each pipeline is described in:

bash
Copy code
docs/pipelines/<name>.md
5. Radiant Orchestration Flow
markdown
Copy code
DropFrame Output
    ↓
Grindline Pipeline Selection
    ↓
Batch Production
    ↓
Assembly
    ↓
Final Output
Radiant decides:

which pipeline runs

how many passes

how variants are selected

quality thresholds

Grindline handles:

speed

volume

consistent formatting

6. Integration Status
Phase 1 (Current):

Placeholder UI

Specification definition

Phase 2:

Build pipeline descriptors

Build prompt factories

Connect to Radiant schemas

Phase 3:

Pipeline runtime connecting Radiant ↔ Grindline
