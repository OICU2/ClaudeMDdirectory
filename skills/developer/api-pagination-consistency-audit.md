---
name: api-pagination-consistency-audit
category: developer
description: >
  Audits all paginated API endpoints across a codebase to ensure consistent use of cursor-based, offset-based, and limit parameters. Use when someone says "our pagination is inconsistent," asks about standardizing API pagination, wants to audit how endpoints handle paging, needs to find mismatched pagination patterns, or is reviewing API contracts for consistency.
tags: [api, pagination, audit, consistency, rest]
author: community
---

# API Pagination Consistency Audit

This skill scans all API endpoint definitions and implementations to detect inconsistent pagination patterns and produces a structured report with remediation guidance.

## Audit Workflow

1. **Discover endpoint files** — Search for route definitions, controller files, and OpenAPI/Swagger specs using patterns like `router.get`, `@Get`, `paths:`, or framework-specific decorators. Check directories: `routes/`, `controllers/`, `api/`, `src/`, `handlers/`.

2. **Extract pagination parameters** — For each endpoint, identify parameters named or aliased as: `cursor`, `after`, `before`, `page`, `offset`, `limit`, `per_page`, `pageSize`, `take`, `skip`. Note the exact parameter names, types, defaults, and whether they are required or optional.

3. **Classify each endpoint's pagination style**:
   - **Cursor-based**: uses `cursor`, `after`, or `before` fields
   - **Offset-based**: uses `page` + `per_page` or `offset` + `limit`
   - **Keyset**: uses a compound key for ordering
   - **None**: no pagination parameters found but returns a collection
   - **Mixed/ambiguous**: accepts parameters from multiple styles simultaneously

4. **Check for consistency violations**:
   - Same parameter concept named differently across endpoints (e.g., `limit` vs `per_page` vs `pageSize`)
   - Inconsistent defaults for `limit` (e.g., some endpoints default to 10, others to 25)
   - Endpoints returning collections with no pagination at all
   - Cursor endpoints missing `hasNextPage` or equivalent in the response
   - Offset endpoints missing `total` count in the response
   - Inconsistent response envelope fields (`data` vs `items` vs `results`, `meta` vs `pagination`)

5. **Check response shapes** — Inspect response serializers, DTOs, or example responses. Verify that pagination metadata is returned consistently: cursor endpoints should return `nextCursor`/`prevCursor`, offset endpoints should return `total`, `page`, `perPage`, `totalPages`.

6. **Identify the dominant pattern** — Determine which pagination style is used by the majority of endpoints. Flag endpoints that deviate from the dominant pattern as candidates for migration.

7. **Generate remediation suggestions** — For each violation, produce a specific fix: rename the parameter, add a missing default, add missing response metadata, or migrate the pagination style.

## Output Format

Produce a Markdown report with the following sections:

```
# API Pagination Consistency Audit Report

## Summary
- Total endpoints audited: N
- Endpoints with pagination: N
- Endpoints missing pagination: N
- Dominant pagination style: [cursor | offset | none]
- Violations found: N

## Endpoint Inventory

| Endpoint | Method | Style | Parameters | Response Fields | Status |
|----------|--------|-------|------------|-----------------|--------|
| /users   | GET    | offset| page, limit| items, total    | ✅ OK  |
| /orders  | GET    | cursor| after      | data (missing nextCursor) | ❌ Violation |

## Violations

### [VIOLATION-001] Inconsistent limit parameter naming
- **Affected endpoints**: `GET /users` (uses `limit`), `GET /products` (uses `per_page`)
- **Risk**: Medium
- **Fix**: Standardize on `limit` with default `20`. Add `per_page` as a deprecated alias during migration.

[Repeat for each violation]

## Recommended Standard

Define the agreed pagination contract here based on the dominant pattern:
- Parameter names and types
- Default and maximum values
- Required response envelope fields

## Migration Checklist

- [ ] Rename `per_page` → `limit` on `/products`
- [ ] Add `nextCursor` to response of `GET /orders`
- [
