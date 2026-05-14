---
name: api-endpoint-coverage-matrix
description: >
  Maps all API endpoints against test coverage, authentication requirements, and documentation status to identify gaps. Use when someone says "audit my API endpoints," asks about "what endpoints are missing tests," wants to "check API documentation coverage," needs to "review endpoint security," or asks to "find gaps in my API."
category: developer
tags: [api, testing, documentation, security, coverage]
author: community
---

# API Endpoint Coverage Matrix

This skill scans all API endpoints in a codebase and produces a structured matrix showing test coverage, authentication requirements, and documentation status so gaps are immediately visible.

## Discovery Workflow

1. **Locate endpoint definitions** — Search for route registrations in framework-specific patterns (Express `router.get/post`, FastAPI decorators, Rails routes.rb, Django urls.py, Spring `@RequestMapping`, etc.). List every HTTP method + path combination.

2. **Check test coverage** — For each endpoint, search test files for references to the path or handler function. Mark as: `covered` (direct test exists), `partial` (tested indirectly or missing edge cases), or `none` (no test found).

3. **Identify authentication requirements** — Inspect middleware, decorators, or guards on each route. Classify as: `public` (no auth), `authenticated` (requires valid session/token), `role-based` (specific role/permission required), or `unknown` (cannot determine from static analysis).

4. **Verify documentation status** — Check for OpenAPI/Swagger annotations, JSDoc, docstrings, or entries in a docs file. Mark as: `documented` (schema + description present), `partial` (exists but missing request/response schema), or `missing` (no documentation found).

5. **Flag critical gaps** — Prioritize findings: unauthenticated write endpoints (`POST/PUT/PATCH/DELETE` with `public` auth), untested authenticated endpoints, and undocumented public-facing endpoints.

6. **Count and summarize** — Tally totals per category and calculate coverage percentages.

## Output Format

Produce a Markdown table followed by a summary section:

```
## API Endpoint Coverage Matrix

| Method | Path | Auth Required | Test Coverage | Docs Status | Gaps |
|--------|------|---------------|---------------|-------------|------|
| GET    | /users | authenticated | covered | partial | missing response schema |
| POST   | /users | authenticated | none | missing | no tests, no docs |
| DELETE | /users/:id | unknown | none | missing | ⚠️ auth unclear |

## Summary

- **Total endpoints:** N
- **Test coverage:** X% (N covered, N partial, N none)
- **Documentation coverage:** X% (N documented, N partial, N missing)
- **Auth gaps:** N endpoints with unknown or missing authentication

## Critical Issues (fix first)
1. [List unauthenticated write endpoints]
2. [List untested endpoints handling sensitive data]
3. [List undocumented public endpoints]
```

If the codebase is large, group the table by resource (e.g., `/users`, `/orders`) with subtotals per group.
