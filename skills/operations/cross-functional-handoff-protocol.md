---
name: cross-functional-handoff-protocol
description: >
  Defines the required inputs, outputs, owners, and acceptance criteria for work handoffs between
  operational teams to eliminate dropped tasks and miscommunication. Use when someone says "we need
  to hand this off," asks about transferring work between teams, wants to document a handoff process,
  needs to reduce dropped tasks at team boundaries, or is setting up a cross-team workflow.
category: operations
tags: [handoff, operations, workflow, cross-functional, accountability]
author: community
---

# Cross-Functional Handoff Protocol

This skill generates a structured handoff document that captures all required context, ownership, and acceptance criteria when work transitions between operational teams, preventing tasks from falling through the cracks.

## Handoff Protocol Workflow

### Step 1: Gather Handoff Context
Ask for or extract the following if not provided:
- **Sending team**: Who currently owns the work
- **Receiving team**: Who will take ownership
- **Work item**: Name, ID, or description of what is being handed off
- **Current state**: What has been completed so far
- **Deadline or SLA**: When the work must be completed or responded to

### Step 2: Define the Handoff Package
Structure the handoff around five required elements:

1. **Inputs** — What the receiving team needs to begin:
   - Files, data, credentials, or artifacts
   - Prior decisions and their rationale
   - Relevant stakeholder context or history

2. **Expected Outputs** — What the receiving team must produce:
   - Deliverable name and format
   - Destination (where to send it, who to notify)
   - Quality standards or templates to follow

3. **Owner Assignment** — Explicit accountability:
   - Named individual on receiving team (not just team name)
   - Backup owner if primary is unavailable
   - Escalation contact on sending team

4. **Acceptance Criteria** — How both teams confirm successful handoff:
   - Checklist of conditions that must be true before handoff is "accepted"
   - Confirmation method (reply, ticket status change, signed doc, etc.)
   - Deadline for receiving team to acknowledge receipt

5. **Open Items / Risks** — What is unresolved:
   - Blockers the receiving team may encounter
   - Decisions still pending
   - Dependencies on third parties

### Step 3: Apply Handoff Rules
- No handoff is complete until the receiving owner explicitly acknowledges receipt
- Any missing input must be flagged before handoff closes, not after
- Acceptance criteria must be binary (met / not met), not subjective
- If a named individual cannot be identified, escalate before proceeding
- Include a hard expiry: if no acknowledgment within X hours, sending team re-engages

### Step 4: Log the Handoff
Specify where this document lives (ticket, wiki, email thread, shared doc) and who is responsible for archiving it.

## Output Format

Produce a structured handoff document using the following template:

---

**HANDOFF DOCUMENT**

| Field | Details |
|---|---|
| Date | [Date] |
| Sending Team | [Team name + contact name] |
| Receiving Team | [Team name + contact name] |
| Work Item | [Name / ID / description] |
| Handoff Deadline | [Date/time] |
| Acknowledgment Due | [Date/time + method] |

**Current State**
[2–4 sentences describing what has been done and where things stand]

**Inputs Provided**
- [ ] [Artifact or information 1]
- [ ] [Artifact or information 2]
- [ ] [Artifact or information 3]

**Expected Outputs**
- [ ] [Deliverable 1 — format — destination]
- [ ] [Deliverable 2 — format — destination]

**Owner Assignment**
- Primary: [Full name, role]
- Backup: [Full name, role]
- Escalation: [Full name, role, contact]

**Acceptance Criteria**
- [ ] [Condition 1]
- [ ] [Condition 2]
- [ ] [Condition 3]

**Open Items / Risks**
- [Item 1 — owner — target resolution date]
- [Item 2 — owner — target resolution date]

**Archived At**
[Link
