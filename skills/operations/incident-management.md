---
name: incident-management
description: >
  Guides structured detection, response, and post-incident review for operational outages and failures.
  Use when someone says "we have an outage," asks about "incident response," wants to "declare an incident,"
  needs to "write a postmortem," or is dealing with "service degradation" or "on-call escalation."
category: operations
tags: [incidents, on-call, postmortem, reliability, sre]
author: community
---

# Incident Management

Provides a structured workflow for detecting, triaging, communicating, resolving, and learning from operational incidents.

## Incident Response Workflow

### 1. Declare and Classify
- Assign a severity level immediately:
  - **SEV1**: Complete outage, data loss risk, or revenue impact
  - **SEV2**: Major feature broken, significant user impact
  - **SEV3**: Partial degradation, workaround exists
  - **SEV4**: Minor issue, cosmetic or edge-case impact
- Create an incident channel (e.g., `#inc-YYYYMMDD-short-description`)
- Assign an Incident Commander (IC), Communications Lead, and Technical Lead

### 2. Assess Impact
- Identify: What is broken? Who is affected? Since when?
- Quantify: % of users impacted, error rate, affected regions or services
- Establish a timeline of first symptoms vs. detection time

### 3. Communicate Status
- Post an initial status update within 5 minutes of declaration:
  ```
  INCIDENT DECLARED — [SEV Level]
  Summary: [1-sentence description]
  Impact: [Who/what is affected]
  Status: Investigating
  IC: [Name]
  Next update: [time]
  ```
- Update stakeholders every 15 minutes (SEV1/2) or 30 minutes (SEV3/4)
- Use a public status page if customer-facing

### 4. Investigate and Mitigate
- Gather signals: logs, metrics, traces, recent deploys, config changes
- Form hypotheses ranked by likelihood — test the most probable first
- Apply mitigation before full root cause is known if it reduces impact (rollback, feature flag, redirect traffic)
- Document every action taken with timestamp and actor in the incident log

### 5. Resolve
- Confirm resolution with metrics returning to baseline, not just anecdotal reports
- Post an all-clear message:
  ```
  INCIDENT RESOLVED — [SEV Level]
  Duration: [start] → [end]
  Root cause (preliminary): [1 sentence]
  Action taken: [mitigation summary]
  Follow-up items: [ticket links or TBD]
  ```
- Schedule a postmortem within 48 hours for SEV1/2

### 6. Postmortem
- Use a blameless format. Focus on systems, not individuals.
- Required sections:
  1. **Incident summary** — severity, duration, impact scope
  2. **Timeline** — key events with timestamps
  3. **Root cause** — the actual technical failure, not the trigger
  4. **Contributing factors** — what made detection or recovery harder
  5. **What went well** — practices that helped
  6. **Action items** — each with owner, due date, and ticket ID
- Distribute the postmortem document within 5 business days

## Output Format

**During active incident:** Produce structured status updates using the templates above. Keep each update under 150 words. Use bullet points for impact and actions taken.

**For postmortem:** Produce a complete document with all six required sections. Timeline entries use format `HH:MM UTC — [event]`. Action items use format `[ ] [Action] — Owner: [Name] — Due: [Date] — Ticket: [ID]`. Total length: 400–800 words depending on incident complexity.

**For triage help:** Produce a ranked hypothesis list with supporting evidence columns: Hypothesis | Evidence For | Evidence Against | Next Test Step.