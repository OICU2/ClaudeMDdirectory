---
name: code-dead-dependency-removal-plan
description: >
  Identifies unused imported packages and transitive dependencies in a codebase and produces a prioritized, safe removal and testing plan. Use when someone says "we have too many unused dependencies," asks about cleaning up package bloat, wants to audit their dependencies for dead weight, needs to reduce bundle size by removing unused packages, or is looking to find and safely remove dead imports.
category: developer
tags: [dependencies, cleanup, refactoring, package-management, dead-code]
author: community
---

# Dead Dependency Removal Planner

Analyzes a project's declared and transitive dependencies to identify unused packages, then produces a phased removal and verification plan that minimizes breakage risk.

## Dependency Audit Workflow

### 1. Inventory Declared Dependencies
- Read the project's dependency manifest (`package.json`, `requirements.txt`, `Cargo.toml`, `go.mod`, `build.gradle`, `pom.xml`, etc.)
- Separate direct dependencies from dev dependencies and peer dependencies
- Note the package manager and lock file in use

### 2. Scan for Actual Usage
- Search source files for import/require/use statements referencing each declared package
- Check config files, build scripts, test files, and CI configs — not just source code
- Flag packages that appear in the manifest but have zero import references
- Flag packages imported only in files that are themselves dead code

### 3. Classify Each Unused Dependency
Assign each candidate to one of four buckets:
- **Safe to remove**: No references anywhere, no known side-effect-only usage
- **Likely safe**: Only referenced in commented-out code or deprecated files
- **Verify before removing**: Referenced indirectly (e.g., CLI tool, loader, plugin, polyfill)
- **Keep**: Required at runtime or by another retained dependency, even without explicit imports

### 4. Check Transitive Risk
- For each "Safe to remove" or "Likely safe" package, check whether any retained package lists it as a peer dependency
- Identify if removing it would cause version resolution conflicts or break a retained package's optional feature

### 5. Build the Removal Plan
Produce a phased plan:
- **Phase 1**: Remove all "Safe to remove" packages in a single batch
- **Phase 2**: Remove "Likely safe" packages one at a time with a test run between each
- **Phase 3**: Provide investigation steps for "Verify before removing" packages before acting

For each removal, specify:
- Exact command to remove the package (`npm uninstall`, `pip uninstall`, etc.)
- Which test suite or lint command to run afterward
- What a passing result looks like (e.g., "build succeeds," "test suite exits 0," "bundle size decreases")

### 6. Identify Quick Wins
Flag the 3–5 removals that will have the highest impact (largest size, most transitive sub-dependencies pulled in, or longest install time) and surface them at the top of the plan.

## Output Format

Produce a structured Markdown report with these sections:

```
## Dependency Audit Summary
- Total declared dependencies: N
- Unused candidates found: N
- Estimated size reduction: X MB / X KB (if determinable)

## Removal Plan

### Phase 1 — Safe Removals (batch)
| Package | Version | Reason | Remove Command |
|---------|---------|--------|----------------|
| ...     | ...     | ...    | ...            |

Verification step: `<command>`

### Phase 2 — Likely Safe Removals (one at a time)
For each package:
- **Package**: name@version
- **Why flagged**: <reason>
- **Remove command**: `<command>`
- **Verify with**: `<command>`

### Phase 3 — Needs Investigation Before Removal
For each package:
- **Package**: name@version
- **Why uncertain**: <reason>
- **Suggested investigation**: <specific step to confirm safety>

## Packages Confirmed to Keep
Brief list with one-line justification for each retained package that was initially flagged.

## Quick Wins (Top 5 by Impact)
Ordered list with estimated impact per removal.
```

Length: comprehensive but not exhaustive — omit packages with obvious continued use. Prioritize actionability over completeness.
