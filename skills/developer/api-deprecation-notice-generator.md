---
name: api-deprecation-notice-generator
category: developer
description: >
  Generates structured deprecation notices, migration guides, and sunset timelines for API endpoints being retired or changed. Use when someone says an API is being deprecated, asks how to notify developers about endpoint removal, wants to write a migration guide for an old API version, needs to communicate breaking changes to consumers, or is planning to sunset a legacy service.
tags: [api, deprecation, documentation, migration, versioning]
author: community
---

# API Deprecation Notice Generator

Produces complete deprecation documentation including versioned warnings, step-by-step migration guides, and sunset timelines whenever an API endpoint or service is being retired or replaced.

## Workflow

1. **Gather deprecation context** — Identify the deprecated endpoint/resource, the replacement (if any), the API version affected, and key dates (announcement date, sunset date).

2. **Define the timeline** — Structure a sunset timeline with at least three phases:
   - **Announcement phase**: Deprecation declared, old endpoint still fully functional
   - **Warning phase**: Requests return deprecation headers/warnings, migration window open
   - **Sunset phase**: Endpoint disabled or returns 410 Gone

3. **Write the deprecation notice** — Include:
   - Deprecated endpoint (method + path + version)
   - Replacement endpoint or alternative approach
   - Exact sunset date in ISO 8601 format
   - HTTP deprecation header example (`Deprecation: <date>`, `Sunset: <date>`, `Link: <docs>; rel="successor-version"`)
   - Changelog entry snippet

4. **Write the migration guide** — Include:
   - Side-by-side comparison of old vs. new request/response shapes
   - Code examples in at least two languages (default: curl + one language relevant to context)
   - Any required authentication, parameter, or behavior changes
   - Common migration pitfalls and how to avoid them

5. **Write developer-facing communication** — Draft a concise email/changelog announcement covering: what is changing, why, when, and what action is required.

6. **Add versioning metadata** — Specify which API versions are affected, which versions remain supported, and the support end-of-life table if multiple versions are involved.

## Output Format

Produce the following sections in order, using Markdown:

```
## Deprecation Summary
- Deprecated: [METHOD /path] (API vX.Y)
- Replacement: [METHOD /path] (API vA.B) or [alternative]
- Announced: YYYY-MM-DD
- Warning Headers Active: YYYY-MM-DD
- Sunset Date: YYYY-MM-DD

## HTTP Headers
[Code block showing Deprecation, Sunset, and Link headers]

## Sunset Timeline
[Table or numbered phases with dates and behavior at each phase]

## Migration Guide
### What Changed
[Bulleted diff of parameters, response shape, auth, behavior]

### Before / After Examples
[Side-by-side code blocks]

### Migration Steps
[Numbered steps]

### Common Pitfalls
[Bulleted list]

## Developer Announcement
[Short email/changelog draft, ~150 words]

## Version Support Matrix
[Table of API versions, status, and EOL dates]
```

Length: Comprehensive but scannable. Use tables and code blocks liberally. Omit sections only if explicitly not applicable (e.g., no replacement exists — note that clearly).
