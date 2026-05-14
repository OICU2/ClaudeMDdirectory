---
name: cross-team-dependency-tracker
description: >
  Builds and maintains a living registry of inter-team dependencies, owners, and delivery
  timelines to surface blockers before they become critical. Use when someone says "we're
  waiting on another team," asks about tracking cross-team deliverables, wants to map out
  project dependencies, needs to identify who owns what across teams, or is trying to
  coordinate delivery timelines across multiple groups.
category: operations
tags: [dependencies, coordination, project-management, cross-team, blockers]
author: community
---

# Cross-Team Dependency Tracker

Captures, structures, and surfaces inter-team dependencies with owners and timelines so teams can proactively manage blockers and improve delivery coordination.

## Dependency Registry Workflow

1. **Elicit dependency details** — For each dependency, collect:
   - Requesting team and point of contact
   - Providing team and named owner (not just a team name)
   - What is needed (artifact, decision, API, data, approval, etc.)
   - Why it is needed and what it unblocks
   - Due date required by the requesting team
   - Committed delivery date from the providing team
   - Current status: `Not Started` | `In Progress` | `At Risk` | `Blocked` | `Delivered`

2. **Identify gap risk** — Compare required date vs. committed date. Flag any dependency where:
   - No committed date exists → mark `UNCONFIRMED`
   - Committed date is after required date → mark `AT RISK`
   - No named owner on the providing side → mark `UNOWNED`
   - Status is `Blocked` → escalate immediately in the registry

3. **Group and cluster** — Organize dependencies by:
   - Providing team (who owes what to whom)
   - Requesting team (what each team is waiting on)
   - Timeline bucket: `This Sprint` | `Next Sprint` | `30 Days` | `60+ Days`

4. **Assign action items** — For each gap or risk, generate a concrete next action:
   - Who needs to confirm a date or owner
   - Whether escalation is needed and to whom
   - Suggested sync meeting or communication channel

5. **Maintain the registry** — When updating an existing registry:
   - Never delete rows; mark resolved dependencies as `Delivered` with actual delivery date
   - Log status changes with date and who reported the change
   - Highlight any new blockers or date slippages added since last update

## Output Format

Produce a structured dependency registry with three sections:

**Section 1 — Dependency Table**
A markdown table with columns:
`ID | Requesting Team | Contact | Providing Team | Owner | Dependency | Required By | Committed By | Status | Risk Flag`

**Section 2 — Risk Summary**
Bulleted list of all dependencies flagged `AT RISK`, `UNCONFIRMED`, or `UNOWNED`. Each bullet includes the dependency ID, the specific problem, and the recommended next action with a named responsible party.

**Section 3 — Action Items**
Numbered list of concrete next steps, each with: action, owner, and deadline. Ordered by urgency (blockers first, then at-risk, then unconfirmed).

Length: as long as the data requires — no artificial truncation. Use a running `ID` format of `DEP-001`, `DEP-002`, etc. for traceability.
