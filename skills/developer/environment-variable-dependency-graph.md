---
name: environment-variable-dependency-graph
description: >
  Traces which services, modules, and files depend on each environment variable to reveal the full blast radius of any configuration change. Use when someone says "what uses this env var," asks about the impact of changing a config value, wants to audit environment variable dependencies, needs to find all references to a specific variable, or is trying to safely rename or remove a configuration key.
category: developer
tags: [environment-variables, dependency-analysis, configuration, impact-analysis, refactoring]
author: community
---

# Environment Variable Dependency Graph

This skill scans codebases to build a complete dependency map of every environment variable, showing exactly which services, modules, and code paths consume each variable so engineers can confidently assess change impact.

## Analysis Workflow

1. **Identify the scope** — Determine if the request targets a single variable, a set of variables, or the entire codebase. Confirm the root directory to scan.

2. **Locate all variable definitions** — Search for `.env`, `.env.*`, `docker-compose.yml`, `Dockerfile`, CI/CD configs (`.github/workflows`, `Jenkinsfile`, `.gitlab-ci.yml`), Kubernetes manifests, and any shell scripts that export or define variables.

3. **Scan for all references** — Search across all source files for each variable name using patterns:
   - `process.env.VAR_NAME` (Node.js)
   - `os.environ.get('VAR_NAME')` / `os.getenv('VAR_NAME')` (Python)
   - `ENV['VAR_NAME']` / `ENV.fetch('VAR_NAME')` (Ruby)
   - `getenv('VAR_NAME')` (PHP/C)
   - `System.getenv("VAR_NAME")` (Java)
   - Shell: `$VAR_NAME`, `${VAR_NAME}`
   - Direct string matches in config files, templates, and manifests

4. **Classify each dependency** — For every reference found, record:
   - **File path** and line number
   - **Service or module name** (derived from directory structure or package name)
   - **Usage type**: read-only, conditional branch, default fallback, required/fatal if missing, or passed downstream
   - **Chained dependencies**: if the variable is forwarded to another service or embedded in a composed value

5. **Detect risk factors** — Flag variables that:
   - Are used in more than 3 services (high blast radius)
   - Drive conditional logic (changing value changes behavior)
   - Lack a default fallback (removal would crash the app)
   - Appear in startup/init code (change requires restart)
   - Are referenced inside loops or hot paths (performance-sensitive)

6. **Identify orphaned variables** — List variables defined in `.env` or CI configs that have zero references in source code.

7. **Map cross-service propagation** — If a variable is passed via environment injection (Docker, Kubernetes `envFrom`, Helm values), trace it to the consuming containers and note the injection chain.

## Output Format

Produce a structured report with these sections:

```
## Environment Variable Dependency Graph

### Summary
- Total variables found: N
- Total reference sites: N
- High blast-radius variables (>3 services): [list]
- Orphaned variables: [list]
- Missing-default risk variables: [list]

---

### Variable: VAR_NAME
**Defined in:** `path/to/.env`, `docker-compose.yml:12`
**Blast radius:** 3 services, 7 files
**Risk level:** HIGH | MEDIUM | LOW

| File | Line | Service/Module | Usage Type | Notes |
|------|------|----------------|------------|-------|
| `src/db/connect.js` | 42 | api-service | required read | App crashes if missing |
| `workers/job.py` | 18 | worker-service | conditional | Controls retry behavior |
| `config/base.yml` | 5 | shared-config | forwarded | Injected into 2 child services |

**Chained to:** `CHILD_VAR_NAME` in `compose.yml`

**Safe to change?** No — used in startup logic in api-service; requires coordinated deploy.

---
[Repeat for each variable]

### Orphaned Variables
Variables
