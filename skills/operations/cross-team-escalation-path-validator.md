---
name: cross-team-escalation-path-validator
description: >
  Audits existing escalation workflows across teams to identify gaps where issues lack a defined owner or resolution path. Use when someone says "we don't know who owns this problem," asks about gaps in our escalation process, or wants to review whether incidents have clear resolution paths. Also triggers when someone needs to map escalation coverage across multiple teams or find orphaned issue types with no assigned escalation owner.
category: operations
tags: [escalation, incident-management, workflows, operations, ownership]
author: community
---

# Cross-Team Escalation Path Validator

This skill audits escalation workflows across teams to surface gaps, ownership ambiguities, and missing resolution paths so every issue type has a clear path to resolution.

## Validation Workflow

1. **Collect escalation inputs** — Ask the user to provide existing escalation documentation: runbooks, on-call rotations, RACI matrices, ticketing system categories, or a plain description of how issues currently get escalated. If none exists, proceed with a structured interview.

2. **Structured interview (if needed)** — Ask these specific questions:
   - What teams or services are in scope?
   - What categories of issues can occur (e.g., security, infra, data loss, customer-facing bugs)?
   - For each issue category: Who is the first responder? Who is the escalation target if unresolved after X time? What is the resolution SLA?
   - Are there any issue types that cross team boundaries?

3. **Map escalation coverage** — For each issue type or category identified, build a coverage map with these fields:
   - Issue type
   - Primary owner (team or role)
   - Escalation path (L1 → L2 → L3 or equivalent)
   - SLA or time threshold per tier
   - Resolution authority (who can close or declare resolved)
   - Gap flag: YES / NO

4. **Identify gaps** — Flag any of the following as a gap:
   - No primary owner defined
   - Escalation path ends without a resolution authority
   - Two teams both claim or both disclaim ownership (ownership conflict)
   - SLA is undefined at any tier
   - Cross-team issues with no designated coordinator
   - Issue types not covered by any existing path

5. **Prioritize gaps** — Rank gaps by severity:
   - **Critical**: No owner exists and issue type has customer impact or compliance relevance
   - **High**: Owner exists but escalation path is incomplete or SLA is missing
   - **Medium**: Ownership is ambiguous or shared without a tiebreaker
   - **Low**: Documentation gap only — process exists informally but is unwritten

6. **Generate recommendations** — For each critical or high gap, provide a specific corrective action: assign a provisional owner, define a cross-team DRI (directly responsible individual), set a default SLA, or create a bridging escalation step.

## Output Format

Produce a structured audit report with the following sections:

**Section 1 — Coverage Map Table**
A markdown table with columns: `Issue Type | Primary Owner | L1 Escalation | L2 Escalation | Resolution Authority | SLA Defined? | Gap?`

**Section 2 — Gap Summary**
A bulleted list of all identified gaps, each formatted as:
- `[SEVERITY] Issue type: [name] — Gap: [description of what is missing]`

**Section 3 — Prioritized Recommendations**
Numbered list ordered by severity (Critical first). Each recommendation includes:
- The specific gap being addressed
- The recommended fix (who should own it, what should be defined, or what process step to add)
- A suggested owner for implementing the fix

**Section 4 — Coverage Score**
A simple metric: `X of Y issue types have complete escalation paths (Z%)` with a one-line assessment (e.g., "Coverage is insufficient — 3 critical gaps require immediate remediation").

Total length: concise enough to act on — aim for completeness over brevity, but do not pad with background or caveats.
