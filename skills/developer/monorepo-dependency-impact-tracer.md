---
name: monorepo-dependency-impact-tracer
description: >
  Analyzes a monorepo to identify all packages and services affected by changes to a shared internal library or module. Use when someone says "what breaks if I change this package", asks about ripple effects of a library update, wants to know which services depend on a shared module, needs to assess the blast radius of a refactor, or is trying to scope the testing required for an internal dependency change.
category: developer
tags: [monorepo, dependencies, impact-analysis, refactoring, testing]
author: community
---

# Monorepo Dependency Impact Tracer

This skill traces the full dependency graph of a changed internal library across a monorepo and produces a prioritized impact report showing every affected package, service, and test surface.

## Dependency Impact Analysis Workflow

### 1. Identify the Changed Package
- Confirm the exact package name and path (e.g., `packages/ui-components`, `libs/auth-utils`)
- Note whether the change is a breaking API change, a non-breaking addition, or an internal refactor
- Ask the user to clarify if the change type is ambiguous — it affects severity scoring

### 2. Locate Dependency Manifests
- Scan all `package.json`, `pyproject.toml`, `go.mod`, `Cargo.toml`, or equivalent manifest files across the repo
- Look for workspace configurations: `pnpm-workspace.yaml`, `nx.json`, `turbo.json`, `lerna.json`, `rush.json`
- Identify the workspace package name (not the folder path) used in dependency declarations

### 3. Build the Direct Dependency List
- Search all manifests for references to the changed package under `dependencies`, `devDependencies`, `peerDependencies`, or equivalent fields
- Record each dependent package's name, path, and dependency type (runtime vs dev vs peer)
- Flag any packages that pin an exact version vs. use a range — pinned packages may be intentionally isolated

### 4. Traverse Transitive Dependencies
- For each direct dependent, repeat the manifest scan to find packages that depend on *them*
- Build a directed acyclic graph (DAG) of the full impact chain
- Cap traversal depth at 5 levels unless the user requests deeper analysis
- Mark cycles or circular dependencies explicitly if found

### 5. Classify Each Affected Package
Assign one of three impact tiers:

- **Critical** — Runtime services, deployed applications, or packages with no abstraction layer between them and the changed code
- **High** — Libraries that re-export or wrap the changed package and have their own dependents
- **Low** — Packages that use the changed package only in tests, build scripts, or dev tooling

### 6. Identify Test Surface
- List all test files (unit, integration, e2e) within affected packages that import from the changed library
- Note packages that have no tests — these are unverified risk areas
- Identify any shared test fixtures or mocks that reference the changed package

### 7. Check for Configuration or Contract Dependencies
- Look for references to the changed package in CI/CD configs (`.github/workflows`, `Dockerfile`, `ci.yml`)
- Check for shared TypeScript path aliases, module federation configs, or import maps
- Flag any documentation, changelog, or versioning tooling that references the package

## Output Format

Produce a structured Markdown report with the following sections:

```
## Impact Report: `[package-name]`

**Change Type:** [Breaking / Non-breaking / Internal refactor]
**Direct Dependents:** [count]
**Total Affected Packages:** [count across all levels]

---

### Critical Impact
| Package | Path | Dependency Type | Notes |
|---------|------|-----------------|-------|
| ...     | ...  | ...             | ...   |

### High Impact
| Package | Path | Dependency Type | Notes |
|---------|------|-----------------|-------|

### Low Impact
| Package | Path | Dependency Type | Notes |
|---------|------|-----------------|-------|

---

### Test Surface Summary
- Packages with tests covering the changed module: [list]
- Packages with NO tests (unverified risk): [list]
- Shared fixtures/mocks to update: [list]

---

### Recommended Testing Order
1. [Package] — reason
2. [Package] — reason
...

### Warnings
- [Any circular dependencies, missing
