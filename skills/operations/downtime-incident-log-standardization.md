---
name: downtime-incident-log-standardization
description: >
  Establishes a consistent logging format for capturing downtime events with all critical details needed for trend analysis and post-incident review. Use when someone says "we had an outage," asks how to document a system failure, wants to log a downtime incident, needs to track service disruptions, or is building an incident report template.
category: operations
tags: [incident-management, downtime, logging, reliability, post-mortem]
author: community
---

# Downtime Incident Log Standardization

This skill produces a structured, consistent incident log entry whenever a downtime event needs to be documented, ensuring all critical data points are captured for trend analysis and future prevention.

## Incident Log Workflow

1. **Collect core identifiers first**: Incident ID (format: INC-YYYYMMDD-NNN), date/time of detection, date/time of resolution, and the reporting person or team.

2. **Capture affected systems**: List every impacted service, component, or dependency. Include environment (prod/staging/dev) and severity tier (P1–P4) based on user impact scope.

3. **Record timeline with precision**: Use UTC timestamps for every event milestone — detection, acknowledgment, first response, mitigation start, full resolution. Do not estimate; flag unknown times explicitly.

4. **Document root cause**: State the direct technical cause in one sentence. Then state the contributing factors (config change, capacity limit, dependency failure, human error, etc.) separately. Avoid vague language like "unknown issue."

5. **Log duration and impact metrics**: Total downtime in minutes, number of affected users or systems, data loss (yes/no/partial), and SLA breach (yes/no with tier reference).

6. **Capture resolution steps**: Number each action taken in sequence. Include who performed it, what command or change was made, and the observed outcome. This must be reproducible by someone unfamiliar with the incident.

7. **Assign follow-up actions**: Each action item needs an owner, a due date, and a category tag (monitoring, code-fix, process-change, infrastructure, documentation).

8. **Tag for trend analysis**: Apply consistent labels for cause category (network, application, database, third-party, human-error, capacity), recurrence flag (first-occurrence/repeat), and detection method (alert/user-report/manual-discovery).

## Output Format

Produce the log as a structured document with clearly labeled sections in this order:

```
INCIDENT LOG
============
Incident ID:        INC-YYYYMMDD-NNN
Status:             [Resolved / Ongoing / Monitoring]
Severity:           [P1 / P2 / P3 / P4]
Reported By:        [Name / Team]

TIMELINE (UTC)
--------------
Detected:           YYYY-MM-DD HH:MM
Acknowledged:       YYYY-MM-DD HH:MM
Mitigation Start:   YYYY-MM-DD HH:MM
Resolved:           YYYY-MM-DD HH:MM
Total Duration:     XX minutes

AFFECTED SYSTEMS
----------------
- [System name] | [Environment] | [Impact description]

ROOT CAUSE
----------
Direct Cause:       [One sentence]
Contributing Factors:
  - [Factor 1]
  - [Factor 2]

IMPACT SUMMARY
--------------
Users Affected:     [Number or range]
Data Loss:          [None / Partial / Full]
SLA Breach:         [Yes / No] — [Tier reference if yes]

RESOLUTION STEPS
----------------
1. [HH:MM] [Owner] — [Action taken] → [Result]
2. [HH:MM] [Owner] — [Action taken] → [Result]

FOLLOW-UP ACTIONS
-----------------
| # | Action | Owner | Due Date | Category |
|---|--------|-------|----------|----------|
| 1 | ...    | ...   | ...      | ...      |

TREND TAGS
----------
Cause Category:     [network / application / database / third-party / human-error / capacity]
Recurrence:         [first-occurrence / repeat (link previous INC ID)]
Detection Method:   [alert / user-report / manual-discovery]
```

If any field is unknown at time of logging, write `[PENDING — reason]` rather than leaving it blank. Keep resolution steps to factual actions only
