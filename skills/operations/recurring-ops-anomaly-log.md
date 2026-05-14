---
name: recurring-ops-anomaly-log
description: >
  Standardizes the capture, classification, and frequency tracking of operational anomalies to surface patterns requiring systemic intervention. Use when someone says "we keep seeing this issue," asks about tracking repeated incidents, or wants to log an operational problem that has happened before. Also triggers when someone mentions "this isn't the first time," wants to identify root cause patterns, or needs to decide whether a recurring issue warrants a permanent fix.
category: operations
tags: [anomaly-tracking, incident-management, pattern-detection, operations, reliability]
author: community
---

# Recurring Ops Anomaly Log

This skill captures and classifies operational anomalies in a structured format, tracks their recurrence, and surfaces frequency-based signals that indicate when a pattern has escalated from noise to a systemic problem requiring intervention.

## Anomaly Capture Workflow

1. **Identify the anomaly** — Ask for or extract: what happened, when it happened, what system or process was affected, and what the immediate impact was. If the user is vague, prompt for specifics before proceeding.

2. **Classify the anomaly type** — Assign one of these categories:
   - `INFRA` — Infrastructure or environment failure
   - `DATA` — Data quality, pipeline, or integrity issue
   - `PROCESS` — Human or workflow process breakdown
   - `CONFIG` — Misconfiguration or drift
   - `DEPENDENCY` — Third-party or upstream service failure
   - `UNKNOWN` — Cause not yet determined

3. **Assign a severity tier** — Based on impact:
   - `P1` — Service down or data loss
   - `P2` — Degraded functionality, workaround required
   - `P3` — Minor disruption, no workaround needed

4. **Check for recurrence** — Ask: "Has this or something similar happened before?" If yes, note the previous occurrence date(s) and whether it was resolved or just mitigated. If a log already exists for this anomaly, increment the occurrence count.

5. **Record the mitigation taken** — Document exactly what was done to resolve or work around the issue. Distinguish between a permanent fix and a temporary patch.

6. **Evaluate escalation threshold** — Apply these rules:
   - 2 occurrences within 30 days → flag as `WATCH`
   - 3+ occurrences within 60 days → flag as `ESCALATE` and recommend a systemic fix
   - Any P1 with a prior occurrence → immediately flag as `ESCALATE`

7. **Generate or update the log entry** — Produce a structured entry (see Output Format).

## Output Format

Produce a structured anomaly log entry in this exact format:

```
## Anomaly Log Entry

**ID:** [ANOMALY-YYYY-MM-DD-###]
**Date/Time:** [ISO 8601 timestamp or best available]
**Reported By:** [Name or role, if provided]

**Summary:** [One sentence describing what happened]

**System/Process Affected:** [Specific system, service, or workflow]
**Anomaly Type:** [INFRA | DATA | PROCESS | CONFIG | DEPENDENCY | UNKNOWN]
**Severity:** [P1 | P2 | P3]

**Detail:**
[2–5 sentences describing the anomaly, observed symptoms, and immediate impact]

**Mitigation Taken:**
[What was done to resolve or work around the issue. Specify if this is a permanent fix or temporary patch.]

**Recurrence History:**
| Occurrence | Date       | Severity | Resolution Type |
|------------|------------|----------|-----------------|
| 1          | YYYY-MM-DD | Px       | Permanent/Patch |
| 2          | YYYY-MM-DD | Px       | Permanent/Patch |

**Occurrence Count:** [N]
**Escalation Status:** [WATCH | ESCALATE | MONITOR]

**Recommended Action:**
[Specific next step — e.g., "Open a backlog ticket to refactor the retry logic in service X," or "Schedule a root cause analysis with the data engineering team." If escalation status is MONITOR, state what would trigger escalation.]
```

If multiple anomalies are being logged in one session, produce one entry block per anomaly, separated by a horizontal rule (`---`).
