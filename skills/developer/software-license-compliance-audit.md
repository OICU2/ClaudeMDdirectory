---
name: software-license-compliance-audit
description: >
  Scans a project's dependency tree to catalog all open-source licenses in use, identifies licenses incompatible with the project's distribution model, and produces a prioritized remediation action list. Use when someone says "audit our licenses," asks about open-source compliance, wants to check if dependencies are legally safe to ship, needs to identify copyleft risks, or is preparing for a legal or IP review.
category: developer
tags: [licensing, compliance, open-source, dependencies, legal]
author: community
---

# Software License Compliance Audit

This skill performs a structured audit of all open-source licenses in a project's dependency tree, flags incompatibilities with the project's distribution model, and generates a remediation plan with prioritized actions.

## Audit Workflow

### 1. Determine Distribution Model
Before scanning, establish the project's distribution context:
- **Proprietary/Commercial SaaS**: Copyleft licenses (GPL, AGPL) are high risk
- **Open-Source (MIT/Apache)**: Incompatible copyleft licenses still matter
- **Internal tooling only**: Network distribution clauses (AGPL) may not apply
- Ask the user to confirm if not stated explicitly

### 2. Scan Dependency Files
Identify and parse all relevant dependency manifests:
- `package.json` / `package-lock.json` / `yarn.lock` → Node.js
- `requirements.txt` / `Pipfile` / `pyproject.toml` → Python
- `pom.xml` / `build.gradle` → Java/JVM
- `Gemfile` / `Gemfile.lock` → Ruby
- `go.mod` / `go.sum` → Go
- `Cargo.toml` / `Cargo.lock` → Rust
- `*.csproj` / `packages.config` → .NET

For each ecosystem, list direct AND transitive dependencies where detectable.

### 3. Catalog Licenses
For each dependency, record:
- Package name and version
- Declared license (SPDX identifier preferred: MIT, Apache-2.0, GPL-3.0, etc.)
- License category (see below)
- Whether it is a direct or transitive dependency

**License Category Definitions:**
| Category | Examples | Risk Level |
|---|---|---|
| Permissive | MIT, BSD-2, BSD-3, ISC, Apache-2.0 | Low |
| Weak Copyleft | LGPL-2.1, LGPL-3.0, MPL-2.0, EPL-2.0 | Medium |
| Strong Copyleft | GPL-2.0, GPL-3.0 | High (if distributing) |
| Network Copyleft | AGPL-3.0, SSPL | Critical (if SaaS) |
| Proprietary/Unknown | Unlicensed, custom, missing | Critical |
| Public Domain | CC0, Unlicense | Low |

### 4. Flag Incompatibilities
Apply these rules based on the project's distribution model:

**For proprietary/commercial software:**
- 🔴 CRITICAL: AGPL, SSPL, or any unknown/missing license
- 🟠 HIGH: GPL-2.0, GPL-3.0 (linked or distributed)
- 🟡 MEDIUM: LGPL (verify dynamic vs. static linking), MPL, EPL
- 🟢 LOW: MIT, Apache-2.0, BSD variants, ISC

**For open-source projects (MIT/Apache-2.0 licensed):**
- 🔴 CRITICAL: GPL dependencies that force license change, unknown licenses
- 🟡 MEDIUM: LGPL, copyleft in dependencies that conflict with declared license
- 🟢 LOW: Permissive licenses compatible with the project license

**Additional checks:**
- Flag any dependency with no license file or SPDX identifier
- Flag dependencies with dual-licensing where the chosen license is unclear
- Note any patent clauses (Apache-2.0 has explicit patent grants; GPL-2.0 does not)

### 5. Generate Remediation Actions
For each flagged dependency, produce one of these recommended actions:
- **Replace**: Suggest an alternative package with a compatible license
- **Isolate**:
