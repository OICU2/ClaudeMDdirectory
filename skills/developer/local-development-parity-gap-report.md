---
name: local-development-parity-gap-report
description: >
  Compares local development environment configuration against production settings to identify hidden parity gaps that cause "works on my machine" failures. Use when someone says their code works locally but fails in production, asks why deployments break unexpectedly, or wants to audit environment consistency. Also triggers when someone mentions mysterious staging failures, environment-specific bugs, or wants to validate their local setup matches production.
category: developer
tags: [environment, debugging, devops, configuration, parity]
author: community
---

# Local Development Parity Gap Report

Analyzes and compares local vs. production environment configurations to surface hidden discrepancies that cause environment-specific failures, and is triggered when developers encounter works-on-my-machine problems or want to proactively audit their setup.

## Parity Gap Analysis Workflow

### 1. Collect Environment Snapshots
Request or inspect the following from both local and production environments:
- Runtime versions (Node, Python, Ruby, Java, etc.) — exact patch versions matter
- Package/dependency versions (`package.json` lock files, `requirements.txt`, `Gemfile.lock`, `go.sum`)
- Environment variables (names only, not values — flag any present in one but missing in the other)
- Infrastructure config: OS, container base image, CPU architecture (x86 vs ARM)
- Database versions, engines, and collation settings
- Build tool versions (webpack, vite, gradle, maven)
- Memory limits, ulimits, and file descriptor caps
- Network topology: DNS, proxies, service discovery, TLS termination

### 2. Identify Gap Categories
Classify every discrepancy into one of these severity tiers:

**Critical (breaks silently or causes data loss)**
- Different major/minor runtime versions
- Missing environment variables in local that exist in production
- Architecture mismatch (ARM local vs x86 prod)
- Different database engines (SQLite local vs Postgres prod)

**High (causes intermittent or hard-to-reproduce failures)**
- Different dependency lock file states or missing lockfile commits
- Environment variables present locally but absent in production
- Different timezone or locale settings
- HTTP vs HTTPS locally when prod enforces HTTPS

**Medium (causes behavioral differences)**
- Different log levels masking errors locally
- Stub/mock services locally vs real services in production
- Different cache configurations or TTLs
- File path case sensitivity (macOS case-insensitive vs Linux)

**Low (cosmetic or unlikely to cause failures)**
- Different shell environments
- Editor/tooling version differences
- Minor patch version differences with no known breaking changes

### 3. Trace the Reported Failure
If a specific failure is described:
- Map the failure symptom to the most likely gap category
- Identify which single discrepancy is the highest-probability root cause
- State what assumption the code is making that only holds locally

### 4. Generate Remediation Steps
For each Critical and High gap, produce a concrete fix:
- Exact version pin to add
- Env var to add to `.env.example` or secrets manager
- Docker base image change
- CI pipeline enforcement step (e.g., `engines` field in `package.json`, `.nvmrc`, `.python-version`)

## Output Format

Produce a structured report with these exact sections:

```
## Environment Parity Gap Report

### Environment Snapshot Comparison
| Dimension         | Local Value | Production Value | Gap? |
|-------------------|-------------|-----------------|------|
| Runtime version   | ...         | ...             | ✅/⚠️/❌ |
| [additional rows] |             |                 |      |

### Gap Summary
- Critical gaps: N
- High gaps: N
- Medium gaps: N
- Low gaps: N

### Critical & High Gaps (Action Required)
**[Gap Name]**
- Local: [value]
- Production: [value]
- Risk: [one sentence on what this breaks]
- Fix: [exact command or config change]

### Root Cause Assessment (if failure reported)
Most likely cause of [described failure]: [specific gap]
Confidence: High / Medium / Low
Reasoning: [2-3 sentences]

### Prevention Checklist
- [ ] [Specific guardrail to add to prevent this class of gap recurring]
- [ ] [e.g., Add .nvmrc and enforce in CI]
- [ ] [e.g., Use
