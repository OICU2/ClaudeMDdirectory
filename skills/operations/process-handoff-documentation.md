---
name: process-handoff-documentation
description: >
  Creates structured handoff guides that capture ownership transitions, dependencies, and acceptance criteria between teams or roles. Use when someone says "we need to hand this off," asks about transitioning ownership of a project, wants to document a team transfer, needs to onboard a new owner, or is preparing for a role change or offboarding.
category: operations
tags: [handoff, documentation, ownership, transitions, onboarding]
author: community
---

# Process Handoff Documentation

This skill generates comprehensive handoff guides that ensure smooth ownership transitions by capturing context, dependencies, responsibilities, and acceptance criteria in a structured format.

## Handoff Documentation Workflow

1. **Identify the transition scope** — Clarify what is being handed off: a project, service, process, codebase, client relationship, or role. Ask if not stated.

2. **Capture outgoing owner context** — Extract or prompt for:
   - What the current owner knows that isn't written down
   - Recent decisions made and their rationale
   - In-progress work and its current state
   - Known risks, technical debt, or landmines

3. **Map all dependencies** — Document:
   - Upstream dependencies (what this work relies on)
   - Downstream dependencies (what relies on this work)
   - Key contacts, stakeholders, and escalation paths
   - External vendors, tools, or access requirements

4. **Define responsibilities** — List specific tasks, recurring duties, SLAs, and on-call or response expectations the incoming owner must fulfill.

5. **Document acceptance criteria** — State clearly what the incoming owner must be able to do independently before the handoff is considered complete. Include verification steps.

6. **Capture operational runbooks** — Include or reference: how to deploy, how to debug common issues, how to escalate, and where documentation lives.

7. **Set transition timeline** — Define the overlap period, shadowing schedule, and hard cutover date.

## Output Format

Produce a Markdown document with the following sections:

```
# Handoff Guide: [Subject]

**From:** [Outgoing owner / team]
**To:** [Incoming owner / team]
**Effective Date:** [Date or TBD]
**Overlap Period:** [Duration]

---

## Overview
[2–4 sentences describing what is being handed off and why.]

## Current State
- Status of active work items
- Recent changes or decisions (last 30–90 days)
- Known issues or risks

## Responsibilities
| Task | Frequency | SLA / Deadline | Notes |
|------|-----------|----------------|-------|
| ...  | ...       | ...            | ...   |

## Dependencies
### Upstream
- [Dependency]: [Owner / Contact]

### Downstream
- [Dependent system/team]: [Impact if broken]

## Key Contacts & Escalation
| Name | Role | Contact | When to Reach Out |
|------|------|---------|-------------------|

## Access & Tools
- [ ] [System/Tool]: [How to request access]

## Operational Runbooks
- **Deploy:** [Steps or link]
- **Common issues:** [Symptoms → Resolution]
- **Escalation path:** [Who → When]

## Acceptance Criteria
The handoff is complete when the incoming owner can:
- [ ] [Specific verifiable task]
- [ ] [Specific verifiable task]

## Transition Timeline
| Milestone | Date |
|-----------|------|
| Shadowing begins | |
| Incoming owner leads with support | |
| Hard cutover | |
| Outgoing owner fully off | |

## Open Questions
- [ ] [Unresolved item]
```

Length scales with complexity: a simple process handoff may be 1–2 pages; a full system or team handoff may be 4–6 pages. Always include the Acceptance Criteria and Transition Timeline sections — these are non-negotiable.
