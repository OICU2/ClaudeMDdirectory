---
name: service-dependency-version-skew-report
description: >
  Scans a codebase to detect version mismatches between shared libraries or internal services
  and ranks findings by breaking-change risk. Use when someone says "our services are using
  different versions of the same library," asks about dependency drift across microservices,
  wants to audit version consistency in a monorepo, notices runtime errors that might be caused
  by incompatible package versions, or needs to identify which dependency skews are most dangerous.
category: developer
tags: [dependencies, versioning, microservices, audit, risk-analysis]
author: community
---

# Service Dependency Version Skew Report

Scans all discoverable package manifests and service configs across a codebase to surface version
mismatches for shared dependencies, then ranks each mismatch by breaking-change risk so engineers
know where to act first.

## Analysis Workflow

### 1. Discover Manifests
Locate all dependency declaration files across the repo:
- `package.json`, `package-lock.json`, `yarn.lock`, `pnpm-lock.yaml` (Node)
- `requirements.txt`, `pyproject.toml`, `Pipfile`, `poetry.lock` (Python)
- `go.mod`, `go.sum` (Go)
- `pom.xml`, `build.gradle`, `build.gradle.kts` (JVM)
- `Gemfile`, `Gemfile.lock` (Ruby)
- `Cargo.toml`, `Cargo.lock` (Rust)
- Docker base image tags in `Dockerfile` and `docker-compose.yml`
- Internal service version pins in any config files (`.env`, `helm/values.yaml`, `k8s/` manifests)

### 2. Extract and Normalize Versions
For each discovered manifest:
- Parse the dependency name and pinned version (or version range)
- Resolve ranges to their effective constraint (e.g., `^1.2.3` → `>=1.2.3 <2.0.0`)
- Record the service/module name and file path alongside each entry
- Group entries by dependency name across all services

### 3. Identify Skews
A skew exists when the same dependency appears with:
- Different major versions across services (highest severity)
- Different minor versions (medium severity)
- Different patch versions or lock-file resolved versions (low severity)
- Range vs. pinned conflicts where ranges don't overlap (high severity)

### 4. Rank by Breaking-Change Risk
Score each skew using these criteria (higher = more risky):

| Factor | Points |
|---|---|
| Major version difference | +40 per major gap |
| Dependency is a shared internal library | +30 |
| Dependency exposes a public API or SDK | +20 |
| Minor version difference ≥ 5 | +15 |
| Used in 4+ services | +10 |
| Patch-only difference | +5 |

Add contextual flags:
- `BREAKING` — major version gap exists
- `OVERLAP_RISK` — version ranges do not intersect
- `INTERNAL` — identified as an org-internal package
- `STALE` — lowest version is more than 12 months behind latest (if determinable)

### 5. Recommend Resolution
For each skew, recommend one of:
- **Upgrade all to latest stable** — when the highest version is stable and widely adopted
- **Pin to agreed minimum** — when some services can't upgrade yet
- **Investigate before upgrading** — when a major bump has known breaking changes relevant to usage
- **Deprecate older service** — when the lagging service is itself outdated

## Output Format

Produce a structured report with three sections:

---

### Summary
- Total manifests scanned: N
- Total unique dependencies with skew: N
- Critical skews (BREAKING or OVERLAP_RISK): N
- Services most affected: [list top 3 by skew count]

---

### Skew Inventory (sorted by risk score, descending)

For each skewed dependency:

```
[RISK SCORE] dependency-name                         [FLAGS]
  Services using this dependency:
    service-a (path/to/manifest)  →  v1.4.2
    service-b (path/to/
