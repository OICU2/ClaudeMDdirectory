---
name: repository-structure-design
category: developer
description: >
  Designs a scalable repository folder structure, naming conventions, and module boundaries tailored to a project's tech stack and team size. Use when someone says "help me organize my project", asks about folder structure or directory layout, wants to set up a monorepo, needs to define module boundaries, or is starting a new codebase and wants to get the structure right.
tags: [architecture, project-structure, monorepo, conventions, scaffolding]
author: community
---

# Repository Structure Design

This skill produces a concrete, opinionated folder structure with naming conventions and module boundaries based on the project's tech stack, scale, and team size.

## Discovery Phase

Before designing, identify the following from context or by asking:

1. **Tech stack** — language(s), framework(s), build tools (e.g., Next.js, Go, Python/FastAPI, Nx, Turborepo)
2. **Project type** — monorepo, polyrepo, single app, library, CLI, full-stack, microservices
3. **Team size** — solo, small (2–5), medium (6–20), large (20+)
4. **Scale expectations** — MVP, long-term product, open-source library
5. **Existing constraints** — any current structure, CI/CD tooling, deployment targets

If the user provides insufficient detail, ask for the top 2–3 unknowns before proceeding.

## Design Rules

Apply these principles when generating the structure:

1. **Separate concerns by domain, not by type** — prefer `features/auth/` over splitting into `controllers/`, `services/`, `models/` at the root.
2. **Co-locate tests** — place test files next to source files unless the stack convention demands otherwise (e.g., Go's `_test.go` files).
3. **Explicit public boundaries** — define which modules/packages are internal vs. exported; use `internal/`, `lib/`, or `shared/` conventions appropriate to the language.
4. **Scale naming with team size**:
   - Solo/small: flat structure, minimal nesting
   - Medium: feature-based grouping, clear shared layer
   - Large: domain-driven with explicit ownership boundaries (e.g., `packages/` in monorepos)
5. **Config and tooling at root** — all config files (`.env.example`, `tsconfig.json`, `Makefile`, `docker-compose.yml`) live at the repository root.
6. **Avoid catch-all folders** — no `utils/`, `helpers/`, or `misc/` directories; force proper categorization.
7. **Match idiomatic conventions** — Go uses `cmd/`, `pkg/`, `internal/`; Python uses `src/` layout or flat package; Node uses `src/` with barrel exports; respect these norms.

## Module Boundary Rules

- Define which directories represent **hard boundaries** (cannot import from each other freely)
- Specify **shared/common layers** and what is allowed to live there (types, utilities, constants — no business logic)
- Note **dependency direction**: features → shared, never shared → features
- For monorepos, specify which packages are **publishable** vs. **internal-only**

## Output Format

Produce the following in order:

### 1. Annotated Directory Tree
A full ASCII tree with inline comments explaining the purpose of each directory. Include representative filenames where helpful.

```
project-root/
├── src/
│   ├── features/          # Domain-specific feature modules
│   │   └── auth/          # Self-contained: routes, logic, types
│   └── shared/            # Cross-feature utilities and types only
├── tests/                 # Integration/e2e tests only
└── ...
```

### 2. Naming Conventions Table
A markdown table with columns: **Artifact**, **Convention**, **Example**.
Cover: files, folders, components, modules, environment variables, test files.

### 3. Module Boundary Diagram
A simple text-based dependency diagram showing allowed import directions between layers.

### 4. Rationale (3–5 bullet points)
Explain the key decisions made and why, tied to the specific stack and team size provided.

### 5. What to Avoid
2–4 anti-patterns specific to this stack/scale that the structure is designed to prevent.

Keep the output dense
