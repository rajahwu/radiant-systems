# DropFrame Integration Specification
Radiant System — v0.1

DropFrame is the Transformation Engine of the Radiant architecture.  
Its responsibility is to convert raw inputs into structured, elevated, coherent outputs.

This integration document defines:
- responsibilities of DropFrame
- data contracts
- communication protocols
- expected transformations
- how Radiant orchestrates DropFrame requests

---

## 1. Module Role

DropFrame performs:
- Rewriting
- Reframing
- Structural transformations
- Scene/beat extraction
- Formatting to Radiant schemas

DropFrame does **not** generate content.  
It **transforms** content Radiant has already selected or directed.

---

## 2. Radiant → DropFrame Request Contract

Radiant sends DropFrame a structured request:

```json
{
  "type": "transform",
  "mode": "scene" | "beat" | "structure" | "rewrite",
  "input": "<raw text>",
  "constraints": {
    "tone": "optional",
    "style": "optional",
    "format": "optional"
  },
  "metadata": {
    "project": "string",
    "context": "string"
  }
}
3. DropFrame → Radiant Response Contract
DropFrame returns:

json
Copy code
{
  "status": "ok",
  "output": "<transformed text>",
  "structure": {
    "nodes": [...],
    "schema": "radiant-v0.1"
  },
  "notes": []
}
If transformation fails:

json
Copy code
{
  "status": "error",
  "error": "string"
}
4. Supported Transform Modes
scene → Extract or rewrite into scene format

beat → Extract narrative beats

structure → Apply Radiant schema shape

rewrite → Refactor for clarity, style, or coherence

5. Radiant Orchestration Flow
scss
Copy code
User Intent
   ↓
Radiant Selector
   ↓
DropFrame (Transform)
   ↓
Grindline (Produce)
Radiant controls when DropFrame is invoked and what schema is used.

6. Integration Status
Phase 1 (Current):

Formalizing schemas

Defining contracts

Creating UI shells in DropFrame repo

Phase 2:

Implement orchestrator stubs

Connect DropFrame UI to Radiant schemas

Phase 3:

Dynamic runtime pipeline between Radiant ↔ DropFrame

yaml
Copy code

---

# 📄 **specs/grindline-integration.md**
