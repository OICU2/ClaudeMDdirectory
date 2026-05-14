---
name: error-message-catalog-design
description: >
  Designs a consistent, user-facing error message catalog that maps application exception types to
  structured error codes, human-readable descriptions, and actionable remediation hints. Use when
  someone says "we need better error messages," asks about standardizing error codes, or wants to
  create a user-friendly error catalog. Also activates when someone needs to map exceptions to
  error responses or wants to improve how errors are communicated to end users.
category: developer
tags: [error-handling, ux, api-design, documentation, developer-experience]
author: community
---

# Error Message Catalog Design

This skill produces a structured error message catalog that maps internal exception types to consistent, user-facing error codes, descriptions, and remediation guidance.

## Workflow

1. **Gather exception inventory** — Ask the user to list known exception types, HTTP status codes used, or error categories (validation, auth, network, business logic, system). If unavailable, infer common ones from their tech stack.

2. **Define catalog structure** — Establish the fields each entry must include:
   - `error_code`: Namespaced alphanumeric identifier (e.g., `AUTH_001`, `VAL_042`)
   - `http_status`: Applicable HTTP status code if relevant
   - `exception_type`: Internal class or exception name (e.g., `InvalidTokenException`)
   - `user_message`: Plain-language, non-technical description safe to expose to end users
   - `developer_message`: More detailed explanation for logs or API consumers
   - `remediation`: Specific steps the user or developer can take to resolve the issue
   - `severity`: `fatal` | `error` | `warning` | `info`
   - `docs_link`: Placeholder or real URL to extended documentation

3. **Apply naming conventions** — Group codes by domain prefix (e.g., `AUTH_`, `VAL_`, `DB_`, `NET_`, `SYS_`, `BIZ_`). Use zero-padded 3-digit suffixes. Reserve ranges (e.g., `001–099` for auth, `100–199` for validation).

4. **Write user messages** — Follow these rules:
   - Never expose stack traces, internal class names, or raw database errors
   - Use second person ("Your session has expired")
   - State what happened, not what went wrong internally
   - Keep under 120 characters
   - Avoid jargon; write at a 8th-grade reading level

5. **Write remediation hints** — Be specific and actionable:
   - BAD: "Please try again"
   - GOOD: "Log out and log back in to refresh your session, then retry the request"
   - Include links or next steps where applicable

6. **Map exceptions to catalog entries** — Produce a mapping table showing which internal exception or error condition resolves to which catalog entry.

7. **Flag gaps** — Identify exception types that have no catalog entry and recommend entries for them.

## Output Format

Produce three artifacts:

**1. Error Catalog Table (Markdown)**
A full table with columns: `Error Code | HTTP Status | Exception Type | User Message | Developer Message | Remediation | Severity`

Include a minimum of 10–15 entries covering the domains discussed, with realistic examples filled in.

**2. Namespace Registry (Markdown)**
A short table listing each domain prefix, its numeric range, and the category it covers.

Example:
| Prefix | Range | Category |
|--------|-------|----------|
| AUTH | 001–099 | Authentication & authorization |
| VAL | 100–199 | Input validation |
| DB | 200–299 | Database & persistence |

**3. Implementation Notes (Bullet List)**
- How to wire the catalog to the application's exception handler
- Recommended storage format (JSON, YAML, database table)
- Localization/i18n considerations
- Versioning strategy for catalog entries
- Any gaps or exceptions that still need entries

Total output length: 400–800 lines depending on catalog size. Use fenced code blocks for JSON/YAML examples if the user requests a machine-readable format.
