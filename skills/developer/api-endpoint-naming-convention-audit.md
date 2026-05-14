---
name: api-endpoint-naming-convention-audit
description: >
  Audits all API endpoint names across a codebase and flags inconsistencies against REST naming conventions, returning a prioritized list of renames with suggested replacements. Use when someone says "check my API endpoints," asks about "REST naming consistency," wants to "audit endpoint conventions," needs to "clean up API routes," or mentions "endpoint naming problems."
category: developer
tags: [api, rest, naming-conventions, audit, refactoring]
author: community
---

# API Endpoint Naming Convention Audit

This skill scans all API route definitions across a codebase, evaluates them against REST naming best practices, and produces a prioritized remediation list with exact replacement suggestions.

## Audit Workflow

### 1. Discover Endpoints
- Search for route definitions using common patterns: `app.get`, `app.post`, `router.use`, `@GetMapping`, `@Route`, `path=`, `url=`, FastAPI decorators, Express middleware, Django `urlpatterns`, etc.
- Collect every endpoint path string found, along with its HTTP method, file path, and line number.

### 2. Evaluate Against REST Conventions
Check each endpoint against these rules in order:

**Pluralization**
- Resource nouns must be plural: `/user` → `/users`, `/order` → `/orders`
- Exception: singleton resources (e.g., `/me`, `/status`) are acceptable

**Case Format**
- Use kebab-case for multi-word segments: `/getUserData` → `/get-user-data` → `/users/{id}` (prefer noun-based)
- No camelCase, PascalCase, or snake_case in paths

**Verb Usage**
- No verbs in paths: `/getUsers` → `/users`, `/createOrder` → `POST /orders`, `/deleteItem` → `DELETE /items/{id}`
- HTTP method conveys the action; the path conveys the resource

**Nesting Depth**
- Max 2–3 levels of nesting: `/users/{id}/orders/{orderId}` is acceptable; deeper nesting signals a design problem
- Flag anything beyond 3 levels

**ID Placeholders**
- Use consistent placeholder format: `{id}` or `:id` — flag mixing of styles within the same codebase

**Versioning**
- If versioning exists, flag inconsistency: mixing `/v1/`, `/api/v1/`, and no versioning prefix

**Trailing Slashes**
- Flag inconsistent use of trailing slashes across routes

### 3. Prioritize Findings
Assign each violation a severity:
- **P1 (Critical):** Verbs in paths, wildly inconsistent casing, duplicate routes with different names
- **P2 (High):** Singular nouns for collections, deeply nested routes (>3 levels)
- **P3 (Medium):** Inconsistent ID placeholder style, mixed trailing slash usage
- **P4 (Low):** Versioning inconsistency, minor casing deviations

## Output Format

Produce a structured report in this exact format:

---

## API Endpoint Naming Convention Audit Report

**Summary:** X endpoints scanned | X violations found | X P1 | X P2 | X P3 | X P4

---

### P1 — Critical

| # | Current Endpoint | Method | File | Line | Issue | Suggested Replacement |
|---|-----------------|--------|------|------|-------|-----------------------|
| 1 | `/getUsers` | GET | `src/routes/users.js` | 14 | Verb in path | `GET /users` |

### P2 — High

| # | Current Endpoint | Method | File | Line | Issue | Suggested Replacement |
|---|-----------------|--------|------|------|-------|-----------------------|

### P3 — Medium

| # | Current Endpoint | Method | File | Line | Issue | Suggested Replacement |
|---|-----------------|--------|------|------|-------|-----------------------|

### P4 — Low

| # | Current Endpoint | Method | File | Line | Issue | Suggested Replacement |
|---|-----------------|--------|------|------|-------|-----------------------|

---

### Recommended Fix Order
1. [Top 3–5 highest-impact changes with brief rationale]

### Conventions Detected in Codebase
- ID style
