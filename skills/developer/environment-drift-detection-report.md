---
name: environment-drift-detection-report
description: >
  Compares configuration files, dependency versions, and environment variables between staging and production environments to surface unintended drift. Use when someone says "check for environment drift," asks about "differences between staging and production," wants to "audit environment consistency," needs to "find config mismatches," or is troubleshooting "works in staging but not in production" issues.
category: developer
tags: [environment, devops, configuration, debugging, deployment]
author: community
---

# Environment Drift Detection Report

This skill systematically compares staging and production environments across dependencies, configuration, and environment variables to produce a structured drift report Claude generates when asked to audit environment consistency or diagnose environment-specific bugs.

## Drift Detection Workflow

1. **Identify available artifacts** — Locate dependency manifests (`package.json`, `requirements.txt`, `Gemfile.lock`, `go.sum`, `pom.xml`, etc.), configuration files (`.env`, `docker-compose.yml`, `k8s manifests`, `nginx.conf`, `Terraform state`), and any exported environment variable lists provided by the user.

2. **Parse staging vs. production values** — For each artifact type, extract key-value pairs or version strings from both environments. If only one environment's data is provided, ask the user to supply the counterpart before proceeding.

3. **Detect dependency drift** — Compare pinned versions side by side. Flag:
   - Version mismatches (same package, different version)
   - Packages present in one environment but absent in the other
   - Unpinned or wildcard versions (`^`, `~`, `*`) that may resolve differently

4. **Detect configuration drift** — Compare all config keys across environments. Flag:
   - Keys present in staging but missing in production (and vice versa)
   - Keys present in both but with different values (redact sensitive values, show that a difference exists)
   - Structural differences in config files (e.g., extra blocks, missing sections)

5. **Detect environment variable drift** — If `.env` files or exported variable lists are provided, compare all variables. Flag missing variables and value differences. Never expose secrets in the report — replace values with `[REDACTED]` for anything resembling a key, token, password, or secret.

6. **Assess risk severity** — For each drift item, assign a severity:
   - **Critical**: Missing env var, missing dependency, or major version gap likely to cause runtime failure
   - **High**: Minor version mismatch in a core dependency or config value that affects behavior
   - **Medium**: Non-critical config difference that may cause subtle behavioral divergence
   - **Low**: Cosmetic or comment-only differences, whitespace, ordering

7. **Identify likely root cause** — For each flagged item, provide a one-line hypothesis about how the drift occurred (e.g., "dependency added to staging during hotfix but not propagated to production lockfile").

8. **Recommend remediation** — For each drift item, provide a concrete action (e.g., exact command to pin a version, the env var to add to production, the config key to align).

## Output Format

Produce a structured markdown report with the following sections:

```
# Environment Drift Detection Report
Generated: [date if available, otherwise omit]
Environments compared: Staging vs. Production

## Summary
- Total drift items found: N
- Critical: N | High: N | Medium: N | Low: N
- Recommendation: [one-sentence overall assessment]

## Dependency Drift
| Package | Staging Version | Production Version | Severity | Recommended Action |
|---------|----------------|-------------------|----------|--------------------|
| ...     | ...            | ...               | ...      | ...                |

## Configuration Drift
| File / Key | Staging Value | Production Value | Severity | Recommended Action |
|------------|--------------|-----------------|----------|--------------------|
| ...        | ...          | [REDACTED] / differs | ...  | ...                |

## Environment Variable Drift
| Variable | Status | Severity | Recommended Action |
|----------|--------|----------|--------------------|
| ...      | Missing in prod / Value differs | ... | ... |

## Risk Analysis
[2–4 sentences summarizing the most critical drift items and their likely production impact]

## Remediation Checklist
- [ ] [Specific action 1]
- [ ] [Specific action 2]
- [ ] ...
