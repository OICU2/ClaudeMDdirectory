---
name: environment-parity-gap-audit
category: developer
description: >
  Compares development, staging, and production environment configurations to surface inconsistencies that cause deployment failures, unexpected behavior, or security gaps. Use when someone says "it works on my machine but fails in prod," asks why staging and production behave differently, wants to audit environment variables across deployments, needs to find config drift between environments, or is debugging a release that broke after a seemingly clean staging test.
tags: [environments, devops, configuration, deployment, debugging]
author: community
---

# Environment Parity Gap Audit

This skill systematically compares dev, staging, and production environment configurations to identify inconsistencies before they cause deployment failures or silent bugs.

## Audit Workflow

1. **Collect configuration surfaces** — Gather all environment-specific config from: environment variables, `.env` files, secrets managers (Vault, AWS SSM, etc.), infrastructure-as-code (Terraform, CloudFormation), Docker/Compose files, CI/CD pipeline configs, feature flags, and dependency versions.

2. **Normalize for comparison** — Strip secret values but preserve key names and structural shape. Convert all configs to a comparable format (flat key-value maps per environment).

3. **Run diff analysis across three axes:**
   - **Missing keys** — Variables present in production but absent in dev/staging (or vice versa)
   - **Value type mismatches** — Same key, different value types (e.g., `DEBUG=true` vs `DEBUG=1` vs missing)
   - **Structural differences** — Different service URLs, database connection strings, replica counts, memory limits, or timeouts

4. **Classify each gap by risk:**
   - 🔴 **Critical** — Missing required keys, auth/TLS mismatches, database pointing to wrong environment
   - 🟠 **High** — Feature flags differing, different service versions, cache TTL mismatches
   - 🟡 **Medium** — Log levels, debug flags, non-critical timeouts
   - 🟢 **Low** — Cosmetic differences, documentation-only fields

5. **Trace root cause** — For each gap, identify whether it's intentional (by design), accidental (config drift), or unknown (needs owner review).

6. **Generate remediation steps** — For each unintentional gap, produce the specific change needed (exact key, target value, which environment to update).

## Output Format

Produce a structured audit report with these sections:

```
## Environment Parity Audit Report

### Summary
- Environments compared: [dev | staging | prod]
- Total gaps found: N (Critical: X, High: Y, Medium: Z, Low: W)
- Audit date: [date]

### Gap Table
| Key | Dev | Staging | Prod | Risk | Intentional? | Remediation |
|-----|-----|---------|------|------|--------------|-------------|
| DATABASE_URL | localhost | staging-db | prod-db | 🟢 Low | Yes | None |
| REDIS_TLS | missing | false | true | 🔴 Critical | No | Add to dev/staging |
...

### Critical & High Gaps — Detail
For each 🔴/🟠 item:
- **Key:** NAME
- **Gap:** What differs
- **Impact:** What breaks or behaves differently
- **Fix:** Exact change with target environment

### Recommended Actions
Ordered by priority. Each action is a single concrete change.

### Intentional Differences (Approved Parity Exceptions)
List gaps confirmed as by-design with rationale.
```

Report length scales with number of gaps. Always end with a prioritized action list of no more than 10 items.
