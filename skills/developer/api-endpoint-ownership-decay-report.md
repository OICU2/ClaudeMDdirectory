---
name: api-endpoint-ownership-decay-report
description: >
  Identifies API endpoints that have lost clear ownership over time by cross-referencing commit history, team assignments, and documentation gaps. Use when someone says "nobody knows who owns this endpoint," asks about orphaned or abandoned APIs, or wants to find endpoints with unclear ownership. Also triggers when someone mentions ownership decay, asks who is responsible for legacy routes, or wants to audit API accountability across teams.
category: developer
tags: [api, ownership, technical-debt, audit, git-history]
author: community
---

# API Endpoint Ownership Decay Report

This skill analyzes a codebase's API endpoints to surface routes that have lost clear ownership through contributor churn, stale documentation, or missing team assignments, producing a prioritized decay report.

## Analysis Workflow

1. **Enumerate all endpoints** — Scan route definition files (e.g., `routes/`, `controllers/`, OpenAPI specs, Express/FastAPI/Rails router files) and list every endpoint with its HTTP method, path, and source file location.

2. **Pull commit history per endpoint** — For each endpoint's source file, run `git log --follow --since="18 months ago" -- <file>` to extract: last commit date, number of distinct authors in the past 12 months, and whether the last committer is still an active contributor (cross-reference against current team roster if provided).

3. **Check documentation coverage** — For each endpoint, verify whether it appears in API docs (OpenAPI/Swagger, README, Confluence links, inline docstrings). Flag any endpoint with zero documentation entries as a documentation gap.

4. **Check ownership metadata** — Look for CODEOWNERS files, annotations like `@owner`, `@team`, or `@maintainer` in comments or config. Flag endpoints with no ownership annotation.

5. **Score decay severity** — Assign each endpoint a decay score (0–10) using this rubric:
   - Last commit > 12 months ago: +3
   - Last commit > 6 months ago: +1
   - Zero active contributors in past 6 months: +2
   - No documentation: +2
   - No ownership annotation: +2
   - Last committer no longer on team: +1

6. **Identify high-risk clusters** — Group endpoints by file or domain prefix (e.g., `/payments/`, `/auth/`) and flag any cluster where >50% of endpoints score ≥6.

7. **Generate remediation candidates** — For each endpoint scoring ≥6, suggest the most likely current owner based on: nearest CODEOWNERS entry, team that last touched adjacent files, or service name matching internal team registry.

## Output Format

Produce a structured Markdown report with the following sections:

```
# API Endpoint Ownership Decay Report
Generated: <date>
Endpoints Scanned: <N>
High-Decay Endpoints (score ≥6): <N>

## Summary Table
| Method | Path | File | Last Commit | Active Contributors (6mo) | Docs | Owner Annotation | Decay Score |
|--------|------|------|-------------|--------------------------|------|-----------------|-------------|
| ...    | ...  | ...  | ...         | ...                      | ✅/❌ | ✅/❌            | 0–10        |

## High-Decay Endpoints (Score ≥ 6)
### [METHOD] /path/to/endpoint — Score: X
- **File:** `src/routes/example.ts`
- **Last Commit:** 2023-01-14 by @former-engineer
- **Active Contributors (6mo):** 0
- **Documentation:** Missing
- **Owner Annotation:** Missing
- **Suggested Owner:** Team Payments (owns `/payments/*` per CODEOWNERS)
- **Recommended Action:** [Assign owner | Archive | Deprecate | Request team review]

## High-Risk Domain Clusters
- `/legacy-api/*` — 8/10 endpoints score ≥6

## Remediation Priority Queue
1. [METHOD] /path — Score 9 — Action: Immediate owner assignment
2. ...

## Next Steps
- [ ] Review top 5 high-decay endpoints with engineering leads
- [ ] Update CODEOWNERS for all unowned endpoints
- [ ] Schedule deprecation review for endpoints with 0 active contributors
```

Keep the summary table sorted by decay score descending.
