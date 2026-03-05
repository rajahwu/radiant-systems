# Radiant System Quick Wins

**Created:** 2025-12-31  
**Goal:** Low-effort, high-impact improvements that can be implemented immediately (before Phase 1)

These tasks require <1 day of effort each and provide immediate value.

---

## Quick Win #1: Wire Missing Routes in radiant_systems

**Effort:** 🟢 Small (<30 minutes)  
**Impact:** 🟢 High (makes existing pages accessible)  
**Status:** Not started

### Problem
`radiant_systems/src/App.tsx` only defines root route (`/`) and catch-all (`*`). Five pages exist but aren't routed: Manifesto, About, CaseStudies, LearnHub.

### Solution
Add routes before the catch-all route.

**File:** `radiant_systems/src/App.tsx`

```tsx
<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/manifesto" element={<Manifesto />} />
  <Route path="/about" element={<About />} />
  <Route path="/case-studies" element={<CaseStudies />} />
  <Route path="/learn" element={<LearnHub />} />
  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
  <Route path="*" element={<NotFound />} />
</Routes>
```

### Test
```bash
cd radiant_systems
pnpm dev
```

Navigate to:
- http://localhost:8080/#/manifesto
- http://localhost:8080/#/about
- http://localhost:8080/#/case-studies
- http://localhost:8080/#/learn

### Value
- ✅ All existing pages immediately accessible
- ✅ No broken navigation
- ✅ Demonstrates functional app

---

## Quick Win #2: Enable TypeScript Strict Mode in radiant_systems

**Effort:** 🟡 Medium (1-2 hours to fix errors)  
**Impact:** 🟢 High (prevents runtime errors)  
**Status:** Not started

### Problem
`radiant_systems/tsconfig.json` has strict mode disabled:
- `noImplicitAny: false`
- `strictNullChecks: false`
- `noUnusedLocals: false`

This allows type errors to slip through.

### Solution (Incremental)

**Step 1:** Enable one strict flag at a time

**File:** `radiant_systems/tsconfig.json`

```jsonc
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    "noImplicitAny": true,        // Start here
    "noUnusedParameters": false,
    "skipLibCheck": true,
    "allowJs": true,
    "noUnusedLocals": false,
    "strictNullChecks": false     // Enable next
  }
}
```

**Step 2:** Fix errors
```bash
cd radiant_systems
pnpm tsc --noEmit
```

Fix any `implicit any` errors by adding type annotations.

**Step 3:** Enable `strictNullChecks` and repeat

### Value
- ✅ Catch bugs at compile-time
- ✅ Better IDE autocomplete
- ✅ Easier refactoring

---

## Quick Win #3: Write First Component Test

**Effort:** 🟢 Small (30 minutes)  
**Impact:** 🟡 Medium (establishes testing pattern)  
**Status:** Not started

### Problem
Zero test coverage across entire repo.

### Solution
Add Vitest and write one test for `@radiant/ui/button` (or similar).

**Setup:**
```bash
cd radiant_systems
pnpm add -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

**File:** `radiant_systems/vitest.config.ts`
```typescript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

**File:** `radiant_systems/src/test/setup.ts`
```typescript
import '@testing-library/jest-dom';
```

**File:** `radiant_systems/src/components/ui/button.test.tsx`
```typescript
import { render, screen } from '@testing-library/react';
import { Button } from './button';
import { describe, it, expect } from 'vitest';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies variant classes', () => {
    render(<Button variant="destructive">Delete</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-destructive');
  });
});
```

**Add to package.json:**
```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}
```

**Run:**
```bash
pnpm test
```

### Value
- ✅ Testing infrastructure set up
- ✅ Pattern established for more tests
- ✅ CI/CD can require passing tests

---

## Quick Win #4: Align Index Page Content with Protocol

**Effort:** 🟡 Medium (1-2 hours)  
**Impact:** 🔴 Critical (fixes content misalignment)  
**Status:** Not started

### Problem
`radiant_systems/src/pages/Index.tsx` has generic tech consultancy messaging that doesn't reflect Radiant Protocol doctrine.

### Solution
Rewrite hero section and features to communicate Story OS concept.

**File:** `radiant_systems/src/pages/Index.tsx`

**Before (lines 39-48):**
```tsx
<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
  Transforming Ideas Into
  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Digital Reality</span>
</h1>
<p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
  We build cutting-edge software solutions that drive innovation, enhance productivity, and create meaningful impact for businesses worldwide.
</p>
```

**After:**
```tsx
<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
  The Story OS for
  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Creative Workflows</span>
</h1>
<p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
  Radiant orchestrates story development, content transformation, and high-throughput production through a protocol-first architecture. We coordinate systems—we don't generate content.
</p>
```

**Features section (replace lines 67-113):**

Replace:
- "Lightning-Fast Development" → "Protocol-First Architecture"
- "Enterprise-Grade Security" → "Coordination Not Generation"
- "Collaborative Partnership" → "Modular Story Frameworks"

Update descriptions to mention:
- Radiant Protocol message envelope
- DropFrame (Transformation Engine)
- Grindline (Production Engine)
- Story frameworks (Save the Cat, Hero's Journey)

### Value
- ✅ Visitors understand what Radiant actually is
- ✅ Content aligns with documentation
- ✅ Clear differentiation from generic tools

---

## Quick Win #5: Add .nvmrc or .node-version File

**Effort:** 🟢 Trivial (<5 minutes)  
**Impact:** 🟡 Medium (prevents Node version issues)  
**Status:** Not started

### Problem
No Node.js version specified; developers may use incompatible versions.

### Solution
Create `.nvmrc` file in repo root.

**File:** `.nvmrc`
```
20.11.0
```

Or check current version:
```bash
node --version > .nvmrc
```

### Value
- ✅ Consistent Node version across team
- ✅ CI/CD uses correct version
- ✅ Prevents "works on my machine" issues

---

## Quick Win #6: Add Prettier Configuration

**Effort:** 🟢 Small (<30 minutes)  
**Impact:** 🟡 Medium (consistent code formatting)  
**Status:** Not started

### Problem
No code formatter configured; inconsistent formatting across files.

### Solution
Add Prettier with standard config.

**Install:**
```bash
pnpm add -Dw prettier
```

**File:** `.prettierrc`
```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

**File:** `.prettierignore`
```
node_modules
dist
build
.next
*.md
pnpm-lock.yaml
```

**Add to root package.json:**
```json
{
  "scripts": {
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

**Run:**
```bash
pnpm format
```

### Value
- ✅ No more formatting debates
- ✅ Auto-format on save (with IDE config)
- ✅ Consistent codebase

---

## Quick Win #7: Document Local Development Setup

**Effort:** 🟢 Small (<30 minutes)  
**Impact:** 🟢 High (helps new contributors)  
**Status:** Not started

### Problem
README.md doesn't have clear "Getting Started" section.

### Solution
Add developer setup instructions to README.

**File:** `README.md` (add after "Purpose" section)

```markdown
## Getting Started

### Prerequisites

- Node.js 20.11+ ([nvm](https://github.com/nvm-sh/nvm) recommended)
- pnpm 9+ (`npm install -g pnpm`)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/radiant-system.git
   cd radiant-system
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Run the marketing site:
   ```bash
   cd radiant_systems
   pnpm dev
   ```
   Open http://localhost:8080

4. Run the build manual:
   ```bash
   cd 2025-12-31_0447_build-doc/radiant-manual
   pnpm dev
   ```
   Open http://localhost:3000

### Project Structure

- `core/` — Orchestrator and adapters (Node.js, empty stubs)
- `docs/` — Architecture and protocol documentation
- `specs/` — JSON schemas and integration specs
- `radiant_systems/` — Marketing/demo site (React + Vite)
- `2025-12-31_0447_build-doc/radiant-manual/` — Build docs (Next.js)
- `RDX/` — Operational planning layer

### Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) (TODO).
```

### Value
- ✅ New developers can start immediately
- ✅ Reduces onboarding questions
- ✅ Professional appearance

---

## Quick Win #8: Create GitHub Issue Templates

**Effort:** 🟢 Small (<20 minutes)  
**Impact:** 🟡 Medium (better issue tracking)  
**Status:** Not started

### Solution

**File:** `.github/ISSUE_TEMPLATE/bug_report.md`
```markdown
---
name: Bug Report
about: Report a bug in the Radiant System
title: '[BUG] '
labels: bug
assignees: ''
---

**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
- App: [radiant_systems / radiant-manual / StudioTriptych]
- Browser: [e.g. Chrome 120]
- OS: [e.g. macOS 14]

**Additional context**
Any other context about the problem.
```

**File:** `.github/ISSUE_TEMPLATE/feature_request.md`
```markdown
---
name: Feature Request
about: Suggest a feature for the Radiant System
title: '[FEATURE] '
labels: enhancement
assignees: ''
---

**Is your feature request related to a problem?**
A clear description of what the problem is.

**Describe the solution you'd like**
A clear description of what you want to happen.

**Describe alternatives you've considered**
Other solutions you've considered.

**Additional context**
Any other context or screenshots.
```

### Value
- ✅ Structured issue reporting
- ✅ Easier triage
- ✅ Better feature tracking

---

## Quick Win #9: Add License File

**Effort:** 🟢 Trivial (<5 minutes)  
**Impact:** 🟡 Medium (legal clarity)  
**Status:** Not started

### Problem
No LICENSE file in repository.

### Solution
Add MIT license (or preferred license).

**File:** `LICENSE`
```
MIT License

Copyright (c) 2025 Radiant System Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

**Update package.json files:**
```json
{
  "license": "MIT"
}
```

### Value
- ✅ Legal protection
- ✅ Open source compliance
- ✅ Clear usage terms

---

## Quick Win #10: Add CHANGELOG.md

**Effort:** 🟢 Small (<15 minutes)  
**Impact:** 🟡 Medium (tracks changes)  
**Status:** Not started

### Solution

**File:** `CHANGELOG.md`
```markdown
# Changelog

All notable changes to the Radiant System will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Initial repository structure
- Radiant Protocol v0.1 specification
- Documentation (architecture, protocol)
- Three applications:
  - radiant_systems (marketing site)
  - radiant-manual (build docs)
  - StudioTriptych (visualization)

### To Do
- Implement core orchestrator
- Consolidate apps into monorepo
- Add test coverage
- Align marketing content with protocol

## [0.1.0] - 2025-12-31

### Added
- Initial release
- Protocol documentation complete
- Architecture documentation complete
```

### Value
- ✅ Change tracking
- ✅ Release notes
- ✅ Version history

---

## Summary

| # | Task | Effort | Impact | Priority |
|---|------|--------|--------|----------|
| 1 | Wire missing routes | 🟢 Small | 🟢 High | 🔴 Critical |
| 2 | Enable TypeScript strict mode | 🟡 Medium | 🟢 High | 🔴 Critical |
| 3 | Write first component test | 🟢 Small | 🟡 Medium | 🟡 High |
| 4 | Align Index page content | 🟡 Medium | 🔴 Critical | 🔴 Critical |
| 5 | Add .nvmrc | 🟢 Trivial | 🟡 Medium | 🟡 High |
| 6 | Add Prettier | 🟢 Small | 🟡 Medium | 🟡 High |
| 7 | Document setup in README | 🟢 Small | 🟢 High | 🟡 High |
| 8 | GitHub issue templates | 🟢 Small | 🟡 Medium | 🟢 Medium |
| 9 | Add LICENSE | 🟢 Trivial | 🟡 Medium | 🟢 Medium |
| 10 | Add CHANGELOG.md | 🟢 Small | 🟡 Medium | 🟢 Medium |

**Recommended order:** #1 → #4 → #2 → #3 → #7 → #5 → #6 → #9 → #10 → #8

**Total time:** 5-8 hours for all quick wins

---

**Next Step:** Pick Quick Win #1 (wire routes) and complete it in <30 minutes.
