---
name: developer-changelog-communication-plan
description: >
  Creates a structured communication plan for announcing breaking changes, new features, and deprecations to developer audiences. Use when someone says "we need to communicate API changes," asks about "how to announce a deprecation," or wants to "plan a changelog rollout," "notify developers about breaking changes," or "create a release communication strategy."
category: developer
tags: [changelog, communication, api, deprecation, developer-relations]
author: community
---

# Developer Changelog Communication Plan

This skill generates a structured, audience-aware communication plan for announcing platform changes — breaking changes, new features, and deprecations — to internal and external developer consumers.

## Workflow

### 1. Gather Change Inventory
Ask the user to provide or confirm:
- **Change type**: breaking change, new feature, deprecation, or combination
- **Affected surface**: API endpoints, SDKs, auth flows, data models, rate limits, etc.
- **Affected audiences**: internal teams, external partners, public developers, or all three
- **Timeline**: when changes go live, and any migration deadlines
- **Migration path**: what developers must do, if anything, to adapt

### 2. Classify Changes by Severity
Categorize each change:
- 🔴 **Breaking**: removes or alters existing behavior; requires developer action
- 🟡 **Deprecation**: still works but will break in the future; action required before deadline
- 🟢 **Additive**: new capability; no action required but awareness is valuable

### 3. Define Communication Channels by Audience
Map each audience to appropriate channels:
- **Internal teams**: Slack announcements, internal docs, engineering all-hands, direct Jira/Linear tickets
- **External partners**: direct email, partner portal, dedicated Slack channels, account manager outreach
- **Public developers**: changelog page, developer blog post, API docs banner, email newsletter, GitHub release notes, status page

### 4. Build the Communication Timeline
Structure the rollout in phases:
- **T-30 days** (or appropriate lead time): Initial announcement, migration guide published, sandbox/preview access available
- **T-14 days**: Reminder with deadline emphasis, updated docs, FAQ published
- **T-7 days**: Final warning, highlight impact for non-compliant consumers
- **T-0 (launch day)**: Change goes live, final announcement, monitoring escalation path communicated
- **T+7 days**: Post-launch check-in, deprecation tracking report (if applicable)

### 5. Draft Core Message Components
For each change, produce:
- **What changed**: precise, jargon-appropriate description
- **Why it changed**: business or technical rationale (builds trust)
- **Who is affected**: specific developer segments or use cases
- **What action is required**: exact steps with code examples or doc links
- **Migration deadline**: hard date if applicable
- **Support path**: where to ask questions (forum, Slack, support ticket)

### 6. Tailor Tone by Audience
- **Internal**: direct, technical, assumes context, link to tickets
- **External partners**: professional, empathetic, emphasize support availability
- **Public developers**: clear, scannable, assume no prior context, link to full docs

### 7. Define Success Metrics
Identify how to measure communication effectiveness:
- Open/click rates on email announcements
- Developer adoption rate of new version or migration path
- Support ticket volume related to the change
- Traffic to migration guide docs

## Output Format

Produce a complete communication plan document with the following sections:

```
# [Platform Name] — [Release/Change Name] Communication Plan

## Change Summary
| Change | Type | Severity | Affected Audience | Action Required | Deadline |
|--------|------|----------|-------------------|-----------------|----------|
| ...    | ...  | ...      | ...               | ...             | ...      |

## Audience Matrix
[For each audience: channels, tone, key message emphasis]

## Communication Timeline
[Phase-by-phase schedule with dates, owners, and channel per action]

## Message Templates

### Breaking Change Announcement (External)
[Ready-to-send draft]

### Deprecation Notice (Email)
[Ready-to-send draft]

### Internal Slack Announcement
[Ready-to-post draft]

### Changelog Entry
[Formatted for public changelog page]

### Migration Guide Summary
[3–5 bullet action items with links]

## FAQ
