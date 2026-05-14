---
name: ops-policy-exception-log-builder
description: >
  Builds a structured, auditable log entry for approved deviations from standard operating procedures. Use when someone says "we need to document a policy exception," asks about "logging an SOP deviation," wants to "record an approved workaround," needs to "track a compliance exception," or is "documenting a process bypass." Captures all required fields including justification, approver chain, risk level, and automatic expiry.
category: operations
tags: [compliance, audit, exceptions, sop, governance]
author: community
---

# Policy Exception Log Builder

This skill generates a complete, structured exception log entry for approved deviations from standard operating procedures, ensuring all audit-critical fields are captured consistently.

## Exception Log Workflow

1. **Collect core exception details** — Ask for or extract from context:
   - Exception title (short, descriptive label)
   - Affected policy or SOP (name, ID, or section reference)
   - Date of exception request
   - Requestor name and role

2. **Document the deviation** — Capture precisely:
   - What standard behavior is being bypassed or modified
   - The specific scope (systems, teams, processes, or geographies affected)
   - Duration (one-time event, temporary window, or recurring)

3. **Record justification** — Require a clear, specific business reason. Do not accept vague entries like "business need." Prompt for:
   - Root cause or triggering circumstance
   - Why the standard policy cannot be followed
   - What alternatives were considered and rejected

4. **Capture approval chain** — Log each approver with:
   - Full name and title
   - Approval date
   - Approval method (email, ticket, verbal + witness)

5. **Assess and log risk** — Assign a risk tier (Low / Medium / High / Critical) and document:
   - Primary risk introduced by the exception
   - Compensating controls in place to mitigate that risk

6. **Set expiry and review date** — Every exception must have:
   - A hard expiry date (no open-ended exceptions)
   - A mandatory review date before expiry
   - The owner responsible for renewal or closure

7. **Generate a unique exception ID** — Format: `EXC-[YYYY]-[MM]-[4-digit sequential or random number]` (e.g., `EXC-2025-01-0042`)

## Output Format

Produce a formatted exception log entry using the following structure:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
POLICY EXCEPTION LOG ENTRY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Exception ID:        EXC-[YYYY]-[MM]-[XXXX]
Title:               [Short descriptive title]
Status:              APPROVED / PENDING / DENIED
Created:             [Date]

POLICY REFERENCE
----------------
Policy/SOP Name:     [Name and ID]
Section(s):          [Specific section(s) affected]
Normal Requirement:  [What the policy normally mandates]

EXCEPTION DETAILS
-----------------
Requestor:           [Name, Role]
Scope:               [Systems / teams / processes affected]
Duration:            [One-time / Temporary / Recurring]
Start Date:          [Date]
Expiry Date:         [Date — required]
Review Date:         [Date before expiry]
Exception Owner:     [Name, Role]

JUSTIFICATION
-------------
Triggering Circumstance:
[Specific reason the standard policy cannot be followed]

Alternatives Considered:
[What was evaluated and why it was rejected]

APPROVAL CHAIN
--------------
1. [Name, Title] — Approved [Date] via [Method]
2. [Name, Title] — Approved [Date] via [Method]

RISK ASSESSMENT
---------------
Risk Tier:           [Low / Medium / High / Critical]
Risk Introduced:     [Primary risk created by this exception]
Compensating Controls:
- [Control 1]
- [Control 2]

CLOSURE
-------
Closed By:           [Name, Role]
Closure Date:        [
