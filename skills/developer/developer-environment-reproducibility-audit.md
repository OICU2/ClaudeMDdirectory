---
name: developer-environment-reproducibility-audit
category: developer
description: >
  Audits the gaps between local development environments and production systems that cause inconsistent behavior, flaky tests, or bugs that only appear in certain environments. Use when someone says "it works on my machine," asks why their code behaves differently in production, or wants to find environment parity issues. Also triggers when someone reports hard-to-reproduce bugs, asks about environment drift, or needs to standardize dev environments across a team.
tags: [environment, reproducibility, debugging, devops, configuration]
author: community
---

# Developer Environment Reproducibility Audit

Systematically compares local development and production environments to identify configuration gaps, dependency mismatches, and environmental assumptions that cause inconsistent or hard-to-reproduce bugs.

## Audit Workflow

### 1. Collect Environment Snapshots
Gather the following from both local and production environments:
- Runtime versions (language, runtime, VM — e.g., Node 18.2 vs 20.1)
- Dependency lockfiles (`package-lock.json`, `Gemfile.lock`, `poetry.lock`, `go.sum`)
- Environment variables (names only if values are sensitive)
- OS and architecture (e.g., macOS ARM64 vs Linux x86_64)
- Containerization status (Docker image tags, base images, layer differences)
- Service versions (databases, caches, queues — e.g., Postgres 14 vs 15)

### 2. Identify Gap Categories
Check each of these categories explicitly:

**Dependency Gaps**
- Lockfile present in repo but not used in production builds
- Peer dependencies resolved differently across platforms
- Native modules compiled for wrong architecture
- Unpinned versions with `^` or `~` ranges that resolved to different versions

**Runtime & OS Gaps**
- OS-specific path separators, line endings (`CRLF` vs `LF`), or filesystem case sensitivity
- CPU architecture differences causing native addon miscompilation
- Timezone or locale differences (`TZ`, `LANG`, `LC_ALL`)
- File permission or symlink behavior differences

**Configuration & Secrets Gaps**
- Environment variables present locally but missing in production (or vice versa)
- Feature flags or config files not committed or not deployed
- Hardcoded localhost references or dev-only defaults

**Service & Infrastructure Gaps**
- Local stubs/mocks replacing real services (queues, email, payment APIs)
- Database seed data or schema migrations out of sync
- Network topology differences (DNS resolution, internal hostnames, TLS termination)
- Clock skew or time synchronization issues

**Build & Tooling Gaps**
- Build tool versions differ (`make`, `cmake`, `webpack`, `gradle`)
- CI pipeline skips steps that matter locally (linting, type checks, migrations)
- Hot-reload or watch mode code paths active in production

### 3. Reproduce the Gap
For each identified gap:
- State what the local value is vs the production value
- Explain the mechanism by which the gap causes the observed behavior
- Assign a severity: **Critical** (causes failures), **High** (causes wrong results), **Medium** (causes degraded behavior), **Low** (cosmetic or unlikely)

### 4. Generate Remediation Steps
For each gap, provide a concrete fix:
- Exact configuration change, pinned version, or missing env var
- Whether it requires a code change, infra change, or both
- Whether it can be validated locally before deploying

## Output Format

Produce a structured audit report with these sections:

```
## Environment Reproducibility Audit Report

### Summary
- Environments compared: [local | staging | production | CI]
- Gaps found: [N total — X critical, Y high, Z medium, W low]
- Root cause of reported issue: [identified gap or "undetermined"]

### Gap Inventory

| # | Category | Local Value | Production Value | Severity | Impact |
|---|----------|------------|-----------------|----------|--------|
| 1 | Runtime  | Node 18.2  | Node 20.1       | High     | async behavior differences |
| 2 | Config   | TZ=local   | TZ=UTC          | Critical | timestamp bugs |

### Detailed Findings

**Gap #N — [Short Title]**
- Category: [Dependency | Runtime | Config | Service | Build]
- Local: `[value
