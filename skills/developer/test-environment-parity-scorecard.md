---
name: test-environment-parity-scorecard
description: >
  Compares staging and production environment configurations to identify drift, missing seed data, and service version mismatches. Use when someone says "our staging doesn't match production," asks about environment configuration drift, wants to audit differences between environments, notices bugs that only appear in one environment, or needs a parity report between staging and prod.
category: developer
tags: [environments, devops, configuration, staging, production, drift]
author: community
---

# Test Environment Parity Scorecard

This skill audits staging and production environments side-by-side and produces a scored parity report highlighting configuration drift, version mismatches, and missing data that could cause environment-specific bugs.

## Parity Analysis Workflow

### 1. Gather Environment Inputs
Request or locate the following for both staging and production:
- Environment variable files (`.env`, config maps, secrets manager exports)
- Service dependency manifests (Docker Compose, Kubernetes manifests, Helm values)
- Database seed/migration state (latest migration version, seed scripts run)
- Third-party service versions and API endpoint URLs
- Infrastructure specs (instance types, memory limits, replica counts if relevant to behavior)

### 2. Build the Comparison Matrix
For each configuration category, compare staging vs. production values:

**Categories to check:**
- **Environment Variables** — Identify keys present in prod but missing in staging, and keys with mismatched values (flag secrets separately as `[REDACTED]`)
- **Service Versions** — Compare Docker image tags, package versions, or binary versions for every dependency (databases, caches, queues, runtime versions)
- **External Service Endpoints** — Check that staging points to staging-tier third-party services, not prod endpoints (and vice versa); flag any shared endpoints
- **Database State** — Compare latest applied migration, seeded fixture sets, and row counts on reference tables if accessible
- **Feature Flags** — List flags enabled in prod but disabled in staging and vice versa
- **Infrastructure Limits** — Note memory, CPU, timeout, or concurrency limits that differ and could mask performance bugs

### 3. Score Each Category
Assign a parity score per category:
- **✅ Full Parity (100%)** — No meaningful differences
- **⚠️ Partial Parity (50–99%)** — Minor or intentional differences; low bug risk
- **❌ Drift Detected (0–49%)** — Significant mismatch; likely to cause environment-specific bugs

Weight the overall score: Environment Variables (25%), Service Versions (25%), DB State (20%), External Endpoints (15%), Feature Flags (10%), Infrastructure (5%).

### 4. Classify Each Finding
Tag every discrepancy with:
- **Severity:** `critical` | `warning` | `info`
- **Type:** `missing-key` | `value-mismatch` | `version-drift` | `missing-seed-data` | `endpoint-mismatch` | `flag-divergence`
- **Risk:** Short plain-English sentence explaining what bug or failure this could cause

### 5. Generate Remediation Steps
For each critical and warning finding, provide a concrete fix action:
- Exact variable name to add or update
- Command or PR change to align versions
- Migration or seed script to run
- Who likely owns the fix (infra, backend, data team)

## Output Format

Produce a Markdown report with the following structure:

```
# Environment Parity Scorecard
**Date:** YYYY-MM-DD
**Environments:** Staging vs. Production
**Overall Parity Score:** XX% — [PASSING / NEEDS ATTENTION / FAILING]

---

## Score Summary
| Category             | Score | Status |
|----------------------|-------|--------|
| Environment Variables| XX%   | ✅/⚠️/❌ |
| Service Versions     | XX%   | ✅/⚠️/❌ |
| Database State       | XX%   | ✅/⚠️/❌ |
| External Endpoints   | XX%   | ✅/⚠️/❌ |
| Feature Flags        | XX%   | ✅/⚠️/❌ |
| Infrastructure       | XX%   | ✅/⚠️/❌ |

---

## Findings

### 
