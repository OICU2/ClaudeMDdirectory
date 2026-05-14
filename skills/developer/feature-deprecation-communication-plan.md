---
name: feature-deprecation-communication-plan
description: >
  Generates a structured timeline and stakeholder communication sequence for safely deprecating an existing API feature or product capability. Use when someone says "we need to deprecate this endpoint," asks about sunsetting a feature, or wants to plan a migration away from a legacy capability. Also activates when someone needs to communicate breaking changes to API consumers or wants to create a deprecation notice strategy.
category: developer
tags: [deprecation, api, communication, planning, migration]
author: community
---

# Feature Deprecation Communication Plan

This skill produces a complete deprecation plan with timeline, stakeholder messaging, and migration guidance whenever a team needs to retire an API endpoint, product feature, or platform capability.

## Deprecation Planning Workflow

### 1. Gather Deprecation Context
Before generating the plan, identify:
- **Feature being deprecated**: name, endpoint path, or capability description
- **Reason for deprecation**: security risk, replacement exists, low usage, architectural change
- **Replacement or migration path**: what users should use instead (if anything)
- **Current usage data**: number of active consumers, call volume, known dependent teams
- **Hard deadline**: is there a forced cutoff date or is it flexible?

If any of these are missing, ask for them before proceeding.

### 2. Define the Deprecation Timeline
Structure the timeline in four phases based on the severity and consumer count:

- **Phase 1 — Announcement (Week 0)**: Publish deprecation notice; add deprecation headers/warnings to API responses; update docs with sunset date
- **Phase 2 — Active Migration Window**: Duration scales with impact — 30 days for internal tooling, 90 days for low-traffic external APIs, 180+ days for high-traffic or broadly consumed features
- **Phase 3 — Final Warning (2–4 weeks before cutoff)**: Direct outreach to any consumers still using deprecated feature; escalation to account managers or team leads if enterprise consumers
- **Phase 4 — Sunset (Hard cutoff date)**: Feature disabled; return 410 Gone or equivalent; remove from docs

### 3. Identify Stakeholder Groups and Tailor Messages
For each group, specify channel, message tone, and required action:

- **Internal engineering teams**: Slack/email, technical detail, migration PR required by date
- **External API consumers (developers)**: Developer portal announcement, changelog entry, deprecation header in API response (`Deprecation: true`, `Sunset: <date>`)
- **Enterprise/key accounts**: Direct email from account manager or technical contact, offer migration support call
- **Product and leadership**: Internal memo summarizing risk, timeline, and rollback plan
- **Support team**: Brief so they can answer inbound questions; provide FAQ

### 4. Draft the Core Communication Artifacts
Produce drafts for:
1. **Deprecation notice** (for docs/changelog): What is deprecated, why, what replaces it, sunset date, migration link
2. **API response header additions**: `Deprecation`, `Sunset`, and `Link` headers with exact format
3. **Direct outreach email template**: Subject line, 3-paragraph body (announcement, migration steps, support offer), CTA
4. **Internal engineering memo**: Impact summary, action items, owner, deadline
5. **FAQ** (3–5 entries): Common questions consumers will have

### 5. Define Success Criteria and Monitoring
- Set a migration adoption target (e.g., 80% of consumers migrated before Phase 3)
- Identify the metric to track: call volume to deprecated endpoint drops to near zero
- Assign an owner for monitoring and for handling stragglers
- Define rollback criteria: conditions under which the sunset date would be extended

## Output Format

Produce the plan as a structured Markdown document with these sections:

```
# Deprecation Plan: [Feature Name]

## Summary
- Feature: ...
- Reason: ...
- Replacement: ...
- Sunset Date: ...
- Owner: ...

## Timeline
| Phase | Date | Action |
|-------|------|--------|
| ...   | ...  | ...    |

## Stakeholder Communication Matrix
| Audience | Channel | Message | Action Required | Owner |
|----------|---------|---------|-----------------|-------|

## Communication Artifacts
### 1. Deprecation Notice (Docs/Changelog)
[draft]

### 2. API Response Headers
[exact header names and values]

### 3.
