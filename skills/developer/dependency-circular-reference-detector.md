---
name: dependency-circular-reference-detector
category: developer
description: >
  Scans module and package dependency graphs to identify circular references and produces a prioritized refactoring plan to resolve them. Use when someone says their app has circular imports, asks why modules are creating dependency loops, wants to find cyclic dependencies in their codebase, notices that their bundler is warning about circular references, or needs to untangle tightly coupled packages before a refactor.
tags: [dependencies, refactoring, architecture, modules, static-analysis]
author: community
---

# Dependency Circular Reference Detector

This skill analyzes a codebase's import and dependency graph to find all circular references, rank them by severity, and produce a concrete refactoring plan to break each cycle.

## Detection Workflow

1. **Identify the dependency system** — Determine whether the project uses Node.js `require`/`import`, Python imports, Java/Maven packages, Go modules, or another system. Adjust scanning strategy accordingly.

2. **Build the dependency graph** — Read relevant files (`package.json`, `pyproject.toml`, `go.mod`, source files with import statements) to map every module-to-module or package-to-package edge. List each edge as `A → B`.

3. **Find all cycles** — Apply depth-first search (DFS) logic to the graph. List every cycle found using the format:
   ```
   CYCLE: ModuleA → ModuleB → ModuleC → ModuleA
   ```

4. **Classify each cycle by severity**:
   - **Critical** — Cycle involves entry points, core utilities, or shared infrastructure used app-wide.
   - **High** — Cycle spans multiple feature domains or affects frequently imported modules.
   - **Medium** — Cycle is contained within a single feature or layer.
   - **Low** — Cycle involves leaf modules with narrow usage.

5. **Diagnose the root cause** for each cycle. Common causes:
   - Shared type/interface definitions co-located with implementation
   - God modules that import from too many layers
   - Bidirectional event or callback wiring
   - Missing abstraction layer between two subsystems

6. **Generate a refactoring action** for each cycle. Choose the appropriate pattern:
   - **Extract shared types** into a dedicated `types.ts` / `models.py` / equivalent file with no downstream imports
   - **Introduce an interface or abstract base** that both modules depend on instead of each other
   - **Invert dependency direction** using dependency injection or an event bus
   - **Merge modules** if the cycle exists only because one module was split arbitrarily
   - **Move the dependency** to a higher-level orchestrator that imports both

7. **Order the refactoring plan** — Resolve Critical cycles first. Within the same severity, resolve cycles that are prerequisites for others before dependent ones.

## Output Format

Produce a structured report with the following sections:

### Summary
- Total cycles found: N
- Breakdown by severity: X Critical, X High, X Medium, X Low
- Most affected modules (list top 3–5 by cycle membership count)

### Cycle Inventory
For each cycle, provide a numbered entry:
```
[#] SEVERITY: Critical | High | Medium | Low
    Cycle:    ModuleA → ModuleB → ModuleC → ModuleA
    Files:    src/moduleA.ts, src/moduleB.ts, src/moduleC.ts
    Cause:    [1-sentence diagnosis]
    Fix:      [1-sentence action with specific file or pattern to use]
```

### Prioritized Refactoring Plan
A numbered step-by-step list in resolution order. Each step must name:
- Which cycle it resolves (by number)
- The exact action to take (create file, move export, replace import, etc.)
- Which file(s) to modify or create

### Quick Wins
List any cycles that can be resolved in a single file change or import reorganization, separately flagged for immediate action.
