---
name: monorepo-structure-design
description: >
  Designs comprehensive monorepo architecture including folder layout, shared package boundaries,
  build tooling configuration, and CI pipeline strategy. Use when someone says "set up a monorepo",
  asks about "organizing multiple apps in one repo", wants to "share code between services",
  needs help "structuring a workspace with multiple packages", or is deciding "how to configure
  Turborepo, Nx, or Lerna" for their project.
category: developer
tags: [monorepo, architecture, build-tooling, ci-cd, workspace]
author: community
---

# Monorepo Structure Design

This skill produces a complete monorepo blueprint — folder layout, package boundary rules, build tool configuration, and CI pipeline strategy — whenever a user needs to organize multiple applications or services in a single repository.

## Monorepo Design Workflow

### 1. Clarify Scope
Before designing, identify:
- **Languages/runtimes**: Node.js, Python, Go, mixed?
- **App types**: frontend apps, backend services, CLIs, libraries?
- **Team size**: single team vs. multi-team ownership?
- **Build tool preference**: Turborepo, Nx, Bazel, or plain npm/yarn/pnpm workspaces?
- **Deployment targets**: separate deploys per app, or unified?

### 2. Define Folder Layout
Produce a concrete directory tree following this pattern:

```
/
├── apps/                    # Deployable applications and services
│   ├── web/                 # Frontend app
│   ├── api/                 # Backend API service
│   └── worker/              # Background job service
├── packages/                # Shared internal packages
│   ├── ui/                  # Shared component library
│   ├── config/              # Shared configs (eslint, tsconfig, etc.)
│   ├── database/            # DB client, migrations, shared models
│   └── utils/               # Shared utility functions
├── infra/                   # Infrastructure-as-code (Terraform, CDK, etc.)
├── scripts/                 # Repo-level automation scripts
├── .github/                 # CI/CD workflows
├── package.json             # Root workspace definition
└── turbo.json / nx.json     # Build orchestration config
```

Adjust depth and names to match the user's actual apps and services.

### 3. Define Package Boundary Rules
State explicit rules for what belongs where:

- **`apps/`**: Contains only deployable units. Apps may depend on `packages/` but never on each other.
- **`packages/`**: Contains shared, reusable code. Packages must not depend on `apps/`. Packages may depend on other packages only if the dependency graph is acyclic.
- **Naming convention**: Internal packages use scoped names (`@myorg/ui`, `@myorg/utils`) to distinguish from npm packages.
- **Ownership**: Each app/package has a clear owning team declared in a `CODEOWNERS` entry.
- **Public API surface**: Each package exports only through its `index.ts` (or equivalent). No deep imports (`@myorg/ui/internal/Button` is forbidden).

### 4. Configure Build Tooling
Provide concrete configuration for the chosen tool:

**Turborepo (`turbo.json`)**:
```json
{
  "$schema": "https://turbo.build/schema.json",
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**"]
    },
    "test": {
      "dependsOn": ["^build"],
      "outputs": ["coverage/**"]
    },
    "lint": {
      "outputs": []
    },
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
```

**Nx (`nx.json`)**: Provide equivalent `targetDefaults` and `affected` configuration if Nx is chosen.

**Workspace definition** (`package.json`):
```json
{
  "workspaces": ["apps/*", "packages/*"],
  "scripts": {
    "build": "turbo run build",
    "test": "turbo run test",
    "lint
