---
name: inter-team-handoff-failure-log
description: >
  Documents and categorizes failed or delayed handoffs between operational teams to surface systemic coordination breakdowns. Use when someone says a handoff fell through, asks why a task got dropped between teams, or wants to track recurring coordination failures. Also activates when someone mentions a team didn't receive critical context, a transition caused a service gap, or they need to log a missed escalation.
category: operations
tags: [handoffs, coordination, incident-tracking, operations, team-communication]
author: community
---

# Inter-Team Handoff Failure Log

This skill captures, categorizes, and structures failed or delayed inter-team handoffs into a standardized log entry that surfaces root causes and systemic patterns.

## Handoff Failure Logging Workflow

1. **Collect core failure details** — Ask for or extract: originating team, receiving team, date/time of expected handoff, date/time failure was discovered, and the task or responsibility being handed off.

2. **Identify the failure type** — Classify into one of these categories:
   - `NO_HANDOFF`: Transfer was never initiated
   - `INCOMPLETE_CONTEXT`: Handoff occurred but critical information was missing
   - `WRONG_RECIPIENT`: Handoff went to the wrong team or person
   - `TIMING_FAILURE`: Handoff was delayed beyond acceptable window
   - `ACKNOWLEDGMENT_FAILURE`: Receiving team never confirmed receipt
   - `TOOL_BREAKDOWN`: Failure caused by a system, ticket, or communication tool

3. **Determine impact** — Rate severity (Low / Medium / High / Critical) based on customer impact, SLA breach, downstream delays, or safety risk. Note the downstream consequence in one sentence.

4. **Identify contributing factors** — Pull out root causes from: unclear ownership, missing runbooks, tool gaps, shift transitions, on-call gaps, unclear escalation paths, or one-off human error.

5. **Flag recurrence potential** — Mark whether this failure type has appeared before. If so, note the pattern (e.g., "Third occurrence of NO_HANDOFF between Infra and SRE during weekend shifts").

6. **Recommend a corrective action** — Provide one specific, actionable recommendation: update a runbook, add a checklist step, change a tool workflow, assign explicit DRI ownership, or schedule a retro.

## Output Format

Produce a structured log entry in the following format:

```
## Handoff Failure Log Entry

**Log ID:** HFL-[YYYYMMDD]-[3-digit sequence, e.g. 001]
**Date Logged:** [date]
**Logged By:** [name or team, if provided]

---

### Handoff Details
- **Originating Team:** [team name]
- **Receiving Team:** [team name]
- **Task / Responsibility:** [brief description]
- **Expected Handoff Time:** [datetime or shift]
- **Failure Discovered:** [datetime or shift]

### Failure Classification
- **Type:** [NO_HANDOFF | INCOMPLETE_CONTEXT | WRONG_RECIPIENT | TIMING_FAILURE | ACKNOWLEDGMENT_FAILURE | TOOL_BREAKDOWN]
- **Severity:** [Low | Medium | High | Critical]
- **Downstream Impact:** [one sentence]

### Root Cause
[2-4 bullet points identifying contributing factors]

### Recurrence
- **Repeat Occurrence:** [Yes / No / Unknown]
- **Pattern Note:** [brief description if Yes, or "None identified" if No]

### Recommended Corrective Action
[One specific, actionable step with a clear owner type and timeline suggestion]
```

Each log entry should be self-contained, scannable in under 60 seconds, and written in plain operational language — no jargon unless it was used in the original report.
