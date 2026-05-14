---
name: api-field-usage-deprecation-plan
description: >
  Audits API response fields across all known consumers and produces a structured deprecation plan with phased timelines and notification drafts. Use when someone says "we need to deprecate an API field", asks about safely removing fields from an API response, or wants to plan a breaking change rollout. Also activates when someone needs to sunset a legacy field, audit who is using a specific response property, or coordinate field removal across multiple teams or services.
category: developer
tags: [api, deprecation, breaking-changes, audit, versioning]
author: community
---

# API Field Usage Deprecation Plan

This skill audits API response field usage across known consumers and generates a phased deprecation timeline with consumer notification drafts when planning the removal of API fields.

## Deprecation Audit & Planning Workflow

### 1. Field Identification
- Confirm the exact field name(s), API endpoint(s), and response schema location (e.g., `user.legacy_id` in `GET /users/:id`)
- Identify the field's current data type, nullability, and any documented behavior
- Confirm whether a replacement field exists or is planned

### 2. Consumer Discovery
- Ask for or infer the list of known consumers: internal services, external partners, SDKs, mobile apps, documentation, and tests
- For each consumer, determine:
  - Whether the field is actively read or just passed through
  - Whether the consumer has a versioning contract or SLA
  - Contact owner or team responsible
- Flag any consumers with no known owner as high-risk

### 3. Usage Classification
Classify each consumer into one of three tiers:
- **Tier 1 — Active & Critical**: Field is read and used in logic; removal breaks functionality
- **Tier 2 — Passive**: Field is consumed but not acted on (e.g., logged, forwarded)
- **Tier 3 — Unknown / Unverified**: No confirmed usage data; assume active

### 4. Phased Deprecation Timeline
Build a timeline based on consumer tier and organizational change velocity:

| Phase | Action | Suggested Duration |
|-------|--------|--------------------|
| Phase 0 | Announce deprecation, add `Deprecated` header/flag to field | Week 1 |
| Phase 1 | Add deprecation warning in API responses and docs | Weeks 2–4 |
| Phase 2 | Monitor field access via logging/metrics; re-audit consumers | Weeks 4–8 |
| Phase 3 | Begin opt-in field removal for Tier 2 and Tier 3 consumers | Weeks 8–12 |
| Phase 4 | Hard removal for all consumers after confirmed migration | Week 12+ |

Adjust timeline based on:
- Number of Tier 1 consumers (more = longer runway)
- Whether external/partner consumers are involved (add 30–90 days minimum)
- Regulatory or contractual constraints

### 5. Notification Drafts
Produce one notification draft per consumer tier:
- **Internal team message** (Slack/email): concise, links to migration guide, includes deadline
- **External partner notice** (formal email): professional tone, explains replacement field, offers support contact
- **Public changelog entry**: neutral, factual, includes before/after field comparison

### 6. Migration Guidance
- Document the replacement field or pattern (e.g., "use `user.uuid` instead of `user.legacy_id`")
- Provide a code snippet showing the before/after usage in the most common consumer language
- Note any data transformation required (e.g., type change, format shift)

### 7. Risk & Rollback Notes
- Identify any field removals that cannot be easily rolled back
- Recommend feature-flag gating for Phase 3 and Phase 4
- Suggest a monitoring alert on field access to catch unregistered consumers

## Output Format

Produce the following sections in order:

1. **Field Summary** — name, endpoint, replacement, owner
2. **Consumer Audit Table** — columns: Consumer Name, Tier, Usage Description, Owner, Migration Status
3. **Deprecation Timeline** — phased table with dates filled in relative to a start date (ask user for start date or default to "Week 1 = today")
4. **Notification Drafts** — one per tier, clearly labeled, in full prose
5. **Migration
