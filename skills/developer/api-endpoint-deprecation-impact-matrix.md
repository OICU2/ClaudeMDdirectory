---
name: api-endpoint-deprecation-impact-matrix
description: >
  Maps every internal and external consumer of a deprecated API endpoint to assess migration effort and risk before sunset. Use when someone says "we need to deprecate this endpoint," asks about the impact of removing an API, or wants to understand who is using a legacy route before sunsetting it. Also triggers when someone needs to plan an API migration, evaluate breaking change risk, or build a deprecation timeline.
category: developer
tags: [api, deprecation, impact-analysis, migration, risk-assessment]
author: community
---

# API Endpoint Deprecation Impact Matrix

This skill systematically identifies all consumers of a deprecated API endpoint, scores migration complexity and risk, and produces a prioritized impact matrix to guide safe endpoint sunset.

## Discovery & Analysis Workflow

1. **Identify the target endpoint**: Capture the full route, HTTP method, API version, and service owner. Note the proposed sunset date if provided.

2. **Enumerate internal consumers**: Search the codebase for references to the endpoint path, SDK method calls, generated client code, CI/CD pipeline calls, and infrastructure scripts (cron jobs, health checks, data pipelines). Use grep patterns, AST search, or code search tools to find all callsites.

3. **Enumerate external consumers**: Check API gateway logs, developer portal registered apps, API key usage analytics, webhook configurations, partner integration docs, and public SDK versions that reference the endpoint.

4. **For each consumer, collect**:
   - Consumer name and type (internal service / external partner / public client / internal tooling)
   - Owner/team and contact
   - Call volume (daily avg, peak)
   - Criticality (revenue-impacting, user-facing, internal only, monitoring)
   - Current version of the API they call
   - Availability of a migration path (replacement endpoint exists, partial, none)
   - Estimated migration effort (hours/days/weeks)
   - Blockers or dependencies (auth changes, payload schema differences, rate limit differences)

5. **Score each consumer**:
   - **Risk score (1–5)**: Based on call volume × criticality
   - **Effort score (1–5)**: Based on migration complexity and blockers
   - **Priority tier**: High (must migrate before sunset), Medium (needs coordination), Low (self-service migration)

6. **Identify sunset blockers**: Flag any consumer with Risk ≥ 4 or no available migration path as a hard blocker. Do not recommend a sunset date until blockers are resolved or formally accepted.

7. **Recommend migration sequencing**: Order consumers by Priority tier, then by effort (low-effort, high-risk first). Suggest parallel workstreams where consumers are independent.

## Output Format

Produce a structured markdown report with the following sections:

**Header**: Endpoint being deprecated, proposed sunset date, report date, total consumer count.

**Summary Table** (one row per consumer):
| Consumer | Type | Owner | Daily Calls | Criticality | Migration Path | Effort | Risk | Priority |
|---|---|---|---|---|---|---|---|---|

**Sunset Blockers**: Bulleted list of consumers blocking sunset with reason and required action.

**Migration Sequencing Plan**: Ordered list of consumer groups with recommended migration window, owner contact, and replacement endpoint or workaround.

**Recommended Sunset Timeline**: Proposed phases (deprecation notice → migration window → hard cutoff) with dates, contingent on blockers being resolved.

**Open Questions**: Any missing data (unknown owners, no analytics access, undocumented consumers) that must be resolved before the matrix is considered complete.

Length: as long as needed to cover all discovered consumers. Use tables for the matrix, prose for recommendations.
