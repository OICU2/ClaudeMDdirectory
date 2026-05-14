---
name: api-endpoint-deprecation-timeline-builder
category: developer
description: >
  Generates a structured deprecation timeline for legacy API endpoints, including sunset dates, migration guides, and consumer notification schedules. Use when someone needs to retire an API endpoint, asks about API versioning sunset planning, or wants to create a deprecation roadmap for legacy services. Also triggers when someone says "we need to deprecate this endpoint," asks how to notify API consumers of breaking changes, or wants to plan a migration path away from an old API version.
tags: [api, deprecation, versioning, migration, planning]
author: community
---

# API Endpoint Deprecation Timeline Builder

This skill generates a complete, actionable deprecation timeline for legacy API endpoints, including phased sunset dates, consumer communication schedules, and migration guidance — activated whenever someone needs to plan or document an API retirement process.

## Deprecation Timeline Workflow

### 1. Gather Endpoint Context
Collect the following before generating the timeline:
- Endpoint path(s) and HTTP methods being deprecated
- Current API version and replacement version/endpoint
- Known consumers (internal teams, external partners, public developers)
- Any hard constraints (compliance deadlines, infrastructure costs, contract end dates)
- Current traffic volume or usage tier (high/medium/low)

If any critical details are missing, ask before proceeding.

### 2. Determine Deprecation Window
Apply these rules based on consumer type and usage:
- **Public/external APIs with high usage**: Minimum 12-month deprecation window
- **Public/external APIs with low usage**: Minimum 6-month window
- **Internal APIs (cross-team)**: Minimum 3-month window
- **Internal APIs (single team)**: Minimum 4–6 weeks
- Always add buffer time (10–15%) for unexpected blockers

### 3. Build the Phase Structure
Divide the deprecation into exactly four phases:

**Phase 1 — Announcement (Day 0)**
- Publish deprecation notice in API docs, changelogs, and developer portals
- Add `Deprecation` and `Sunset` HTTP response headers to all deprecated endpoints
- Send initial notification to all known consumers
- Open migration support channel (Slack, email alias, GitHub discussion, etc.)

**Phase 2 — Active Migration (Months 1 through N-2)**
- Provide migration guide with side-by-side old vs. new endpoint examples
- Offer migration tooling or codemods where applicable
- Send monthly reminder notifications to consumers still using deprecated endpoint
- Track adoption metrics on new endpoint; report progress at each phase gate

**Phase 3 — Hard Warning (Final 60 days)**
- Escalate notifications to weekly cadence
- Return `Warning` headers with exact sunset timestamp on every deprecated request
- Engage directly with high-volume consumers still on old endpoint
- Freeze new consumer onboarding to deprecated endpoint

**Phase 4 — Sunset (Final date)**
- Return `410 Gone` with a redirect or error body pointing to migration docs
- Remove endpoint from routing after 30-day `410` observation window
- Publish post-deprecation summary to changelog

### 4. Write the Migration Guide Section
For each deprecated endpoint, produce:
- **Old endpoint**: method, path, key request/response fields
- **New endpoint**: method, path, key request/response fields
- **Diff summary**: what changed (renamed fields, auth changes, pagination, etc.)
- **Code example**: before/after in the most relevant language (ask if unknown; default to curl + one SDK language)
- **Common migration pitfalls** (at least 2 specific gotchas)

### 5. Define the Notification Schedule
Produce a concrete calendar of outreach events:
- T+0: Initial deprecation announcement (email + docs)
- T+30: First migration progress check-in
- Monthly: Usage report + reminder to active consumers
- Sunset - 60 days: High-urgency notice, direct outreach to stragglers
- Sunset - 30 days: Final warning, escalate to account managers for external consumers
- Sunset - 7 days: Last-chance notice
- Sunset day: Confirm shutdown, post status page update

---

## Output Format

Produce a structured Markdown document with the following sections in order:

```
# Deprecation Timeline: [ENDPOINT METHOD PATH]

## Summary
- Deprecated endpoint(s):
- Replacement endpoint(s):
- Deprec
