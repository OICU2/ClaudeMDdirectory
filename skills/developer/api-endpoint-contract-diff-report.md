---
name: api-endpoint-contract-diff-report
description: >
  Compares two versions of an API contract (OpenAPI, JSON Schema, or raw endpoint definitions) and produces a structured diff report categorizing breaking changes, additions, and deprecations. Use when someone says "what changed between these API versions", asks to "diff two API specs", wants to "check for breaking changes in an API", needs to "compare API contracts", or requests an "API change report".
category: developer
tags: [api, openapi, diff, breaking-changes, contract-testing]
author: community
---

# API Endpoint Contract Diff Report

This skill analyzes two API contract versions and generates a structured report classifying every difference as a breaking change, non-breaking addition, or deprecation, so teams can assess upgrade risk before releasing or consuming a new API version.

## Diff Analysis Workflow

1. **Ingest both contracts** — Accept v1 (old) and v2 (new) in any format: OpenAPI 2/3 YAML/JSON, plain endpoint lists, or pasted JSON Schema fragments. If only one is provided, prompt for the missing version before proceeding.

2. **Normalize structure** — Mentally map both contracts to a common shape: `{method, path, parameters, request body, response codes, response body, auth, headers}` per endpoint.

3. **Classify every delta** using these exact rules:
   - **BREAKING** — Removed endpoint, removed required field, changed field type, changed auth scheme, removed response code previously documented, renamed path parameter, changed HTTP method.
   - **ADDITION** — New endpoint, new optional field, new response code, new optional header.
   - **DEPRECATION** — Field or endpoint marked deprecated in v2 but still present, or inferred deprecated when a replacement path is added alongside a legacy one.
   - **INTERNAL CHANGE** — Description/example text changes, non-semantic metadata edits (note but do not flag as breaking).

4. **Assess migration effort** — After classification, assign an overall risk level:
   - 🔴 HIGH — Any breaking changes present
   - 🟡 MEDIUM — Deprecations only, no breaking changes
   - 🟢 LOW — Additions only, no breaking changes or deprecations

5. **Flag ambiguous cases** — If a change is context-dependent (e.g., a field made optional that clients may rely on), mark it `⚠️ POSSIBLY BREAKING` and explain the condition.

## Output Format

Produce a Markdown report with this exact structure:

```markdown
# API Contract Diff Report
**Old version:** [label or filename]
**New version:** [label or filename]
**Overall risk:** 🔴 HIGH | 🟡 MEDIUM | 🟢 LOW

---

## 💥 Breaking Changes ([count])
| # | Endpoint | What Changed | Impact |
|---|----------|--------------|--------|
| 1 | DELETE /users/{id} | Endpoint removed | Callers will receive 404 |
| 2 | POST /orders | `amount` field type changed integer→string | Serialization failure |

## ➕ Additions ([count])
| # | Endpoint | What Was Added |
|---|----------|----------------|
| 1 | GET /users/{id}/preferences | New endpoint |

## ⚠️ Deprecations ([count])
| # | Endpoint / Field | Deprecation Note | Suggested Replacement |
|---|-----------------|------------------|-----------------------|
| 1 | GET /v1/items | Marked deprecated | Use GET /v2/items |

## ⚠️ Possibly Breaking ([count])
[List with condition explanation for each ambiguous item]

## 🔵 Internal / Non-Semantic Changes ([count])
[Bullet list — description updates, example changes, etc.]

---

## Migration Checklist
- [ ] [Actionable item per breaking change or deprecation]

## Summary
[2–4 sentences: total delta count, highest-risk items, recommended action before upgrading.]
```

- Omit any section with a count of 0.
- Keep table rows to one line; move long explanations to a sub-bullet below the table if needed.
- Always end with the Migration Checklist and Summary.
