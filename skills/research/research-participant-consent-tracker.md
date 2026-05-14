---
name: research-participant-consent-tracker
description: >
  Maintains a structured log of participant consent status, data usage permissions, and withdrawal requests across an active research study. Use when someone says "track participant consent," asks about "who has withdrawn from the study," wants to "update consent records," needs to "check data usage permissions for a participant," or is "managing IRB compliance records."
category: research
tags: [consent, research-ethics, IRB, participant-management, compliance]
author: community
---

# Research Participant Consent Tracker

This skill maintains and updates a structured consent log for research studies, tracking each participant's consent status, permitted data uses, and withdrawal requests in a format suitable for IRB audits and study management.

## Consent Tracking Workflow

### 1. Initialize or Load the Consent Registry
- If no registry exists, create one with these columns: Participant ID, Name (or pseudonym), Enrollment Date, Consent Status (Active / Withdrawn / Pending), Data Use Permissions, Withdrawal Date, Withdrawal Reason, Notes.
- If a registry exists, load the current state before making any changes.
- Never delete rows — mark records as Withdrawn with a timestamp instead.

### 2. Record New Participant Consent
- Capture: Participant ID (auto-increment or user-supplied), enrollment date, consent form version signed, and specific data use permissions granted (e.g., audio recording, video recording, data sharing with third parties, future study reuse).
- Set Consent Status to "Active."
- Flag any missing fields as "PENDING — requires follow-up."

### 3. Update Data Use Permissions
- Identify the participant by ID or name.
- List current permissions, then apply only the changes specified.
- Record the date of permission change and who authorized it in the Notes column.
- Never infer expanded permissions — only log what is explicitly stated.

### 4. Process Withdrawal Requests
- Set Consent Status to "Withdrawn."
- Record Withdrawal Date and Withdrawal Reason verbatim if provided.
- Add a note flagging any data already collected that may need to be quarantined or deleted per study protocol.
- Do not remove the participant record.

### 5. Generate Status Reports
- On request, produce a summary showing: total enrolled, total active, total withdrawn, participants with incomplete consent forms, and any pending items.
- Flag participants whose consent forms are older than the study's renewal threshold if that threshold is provided.

### 6. Validate Compliance
- Warn if a participant's data use permissions do not cover an activity the user describes (e.g., "Can we share P-04's data with Partner Lab?" — check permissions first).
- Remind the user to consult their IRB protocol for any action outside the scope of the consent tracker.

## Output Format

**For the consent registry:** Produce a Markdown table with these exact columns:

| Participant ID | Name/Pseudonym | Enrollment Date | Consent Status | Data Use Permissions | Withdrawal Date | Withdrawal Reason | Notes |

**For individual record updates:** Show a before/after diff block highlighting only changed fields, followed by a confirmation line: `✓ Record updated: [Participant ID] — [change summary] — [timestamp]`.

**For status reports:** Produce a brief summary block followed by a Markdown table:

```
Study Consent Summary — [Date]
Total Enrolled: X | Active: X | Withdrawn: X | Pending: X
Action Required: [list any flags]
```

**For compliance checks:** Answer with a single clear verdict (`PERMITTED`, `NOT PERMITTED`, or `UNCLEAR — review consent form`), followed by a one-sentence rationale citing the participant's logged permissions.
