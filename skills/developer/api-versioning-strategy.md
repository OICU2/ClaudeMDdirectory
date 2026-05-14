---
name: api-versioning-strategy
category: developer
description: >
  Designs a complete, backward-compatible API versioning scheme with URL structure, deprecation timelines, and consumer migration guides. Use when someone says "we need to version our API", asks about breaking API changes, wants to deprecate endpoints, needs to support multiple API versions simultaneously, or is planning a major API redesign.
tags: [api, versioning, rest, deprecation, migration]
author: community
---

# API Versioning Strategy

Generates a structured API versioning plan covering scheme selection, URL design, deprecation policy, and migration guidance when planning or evolving an API.

## Versioning Workflow

### 1. Assess Current State
- Identify existing consumers (internal, external, public)
- Catalog all current endpoints, request/response shapes, and auth mechanisms
- Flag which changes are breaking vs. additive (breaking = removed fields, changed types, altered behavior; additive = new optional fields, new endpoints)

### 2. Select Versioning Scheme
Choose one based on context:
- **URL path versioning** (`/v1/users`) — explicit, cacheable, easiest to route; recommended for public APIs
- **Header versioning** (`API-Version: 2024-01`) — cleaner URLs, harder to test in browser; preferred for internal/partner APIs
- **Query parameter** (`?version=2`) — avoid for new designs; only if retrofitting legacy systems
- Default recommendation: URL path versioning with semantic major versions (`v1`, `v2`)

### 3. Define Version Scope Rules
- Increment major version only on breaking changes
- Non-breaking additions go into the current version without a new version
- Enumerate what counts as breaking: removed fields, renamed fields, changed data types, removed endpoints, changed auth requirements, altered pagination behavior
- Enumerate what is non-breaking: new optional request fields, new response fields, new endpoints, new optional headers

### 4. Design URL and Header Structure
Produce concrete examples:
```
Base: https://api.example.com/v{N}/resource
Example: https://api.example.com/v2/users/{id}
Sunset header on deprecated routes: Sunset: Sat, 31 Dec 2025 23:59:59 GMT
Deprecation header: Deprecation: true
Link header: Link: <https://docs.example.com/migration/v1-to-v2>; rel="deprecation"
```

### 5. Set Deprecation Timeline
Apply this standard lifecycle unless requirements differ:
- **Announcement**: notify consumers 6 months before deprecation (12 months for public/external APIs)
- **Deprecation period**: deprecated version remains fully functional for the announced window
- **Sunset date**: hard cutoff date after which the version returns `410 Gone`
- Minimum supported versions in parallel: 2 (current + previous)
- Add `Deprecation` and `Sunset` response headers to all deprecated version responses immediately upon deprecation announcement

### 6. Build the Migration Guide Structure
For each breaking version change, produce:
- **What changed**: diff of request/response schemas
- **Why it changed**: rationale
- **Before/after code examples** in at least one language (match consumer's stack if known)
- **Step-by-step migration steps** numbered sequentially
- **Automated detection**: how consumers can identify if they are using deprecated behavior (log patterns, response header checks)
- **Rollback plan**: how to revert to the old version during migration window

### 7. Implement Version Routing
Specify:
- How the API gateway or router selects version handlers
- Whether older versions are frozen code branches or thin compatibility shims over new logic (recommend shims to reduce maintenance surface)
- Error response for unsupported versions: `HTTP 400` with body `{"error": "unsupported_version", "supported": ["v1","v2"], "docs": "<url>"}`

### 8. Communicate to Consumers
Checklist:
- [ ] Changelog entry with breaking change list
- [ ] Email/Slack notification to registered API consumers
- [ ] In-API deprecation headers active
- [ ] Migration guide published at stable URL
- [ ] SDK/client library updated with deprecation warnings

## Output Format

Produce a structured versioning strategy document with these sections:

**1. Recommended Scheme** — one paragraph naming the chosen approach and justification

**2. URL / Header
