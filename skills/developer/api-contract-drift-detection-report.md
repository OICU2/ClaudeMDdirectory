---
name: api-contract-drift-detection-report
description: >
  Compares live API responses against documented specifications to identify contract violations, undocumented fields, and behavioral drift. Use when someone says their API behavior doesn't match the docs, asks about undocumented changes in an API, or wants to audit whether their service still honors its contract. Also triggers when someone needs to find breaking changes between API versions or suspects their implementation has drifted from its OpenAPI spec.
category: developer
tags: [api, testing, openapi, contract-testing, documentation]
author: community
---

# API Contract Drift Detection Report

This skill analyzes discrepancies between a live API's actual behavior and its documented specification, producing a structured report of violations, undocumented changes, and contract drift.

## Detection Workflow

1. **Gather inputs** — Collect the API specification (OpenAPI/Swagger YAML or JSON, or manual docs) and sample live API responses. If neither is provided, ask the user to supply both before proceeding.

2. **Parse the spec** — Extract for each endpoint: expected request parameters, required/optional fields, response schema (field names, types, nullability), status codes, and headers.

3. **Compare response structure** — For each live response sample, check:
   - Fields present in response but absent from spec (undocumented additions)
   - Fields present in spec but missing from response (missing required fields)
   - Type mismatches (spec says `integer`, response returns `string`)
   - Nullable violations (spec says non-null, response contains null)
   - Enum violations (value not in documented set)

4. **Check behavioral contracts** — Verify:
   - HTTP status codes match documented codes for each scenario
   - Error response shapes match documented error schemas
   - Required headers are present (e.g., `Content-Type`, auth headers)
   - Pagination, rate-limit, or versioning headers match spec

5. **Assess severity** — Classify each violation:
   - **Breaking** — Removes or renames fields, changes types, missing required fields
   - **Non-breaking drift** — Adds undocumented fields, extra headers
   - **Documentation gap** — Behavior is reasonable but unspecified

6. **Identify patterns** — Note if drift is systemic (e.g., all endpoints missing an `updatedAt` field) vs. isolated to one route.

## Output Format

Produce a Markdown report with the following sections:

```
# API Contract Drift Report
**Spec version:** [version or date]
**Endpoints analyzed:** [count]
**Total violations:** [count]

## Summary
One paragraph describing the overall state of drift — is it minor, widespread, or critical?

## Violations by Severity

### 🔴 Breaking Changes
| Endpoint | Field/Behavior | Spec Says | Actual | Impact |
|----------|---------------|-----------|--------|--------|
| ...      | ...           | ...       | ...    | ...    |

### 🟡 Non-Breaking Drift
| Endpoint | Field/Behavior | Spec Says | Actual | Notes |
|----------|---------------|-----------|--------|-------|

### 🔵 Documentation Gaps
| Endpoint | Undocumented Behavior | Recommendation |
|----------|-----------------------|----------------|

## Recommended Actions
Numbered list of prioritized fixes — spec updates, code fixes, or both.

## Notes
Any assumptions made, endpoints skipped, or data limitations.
```

- Keep table rows concise; use code formatting for field names and values.
- If only partial data is available, flag confidence level per section.
- Do not omit breaking changes even if the list is long.
