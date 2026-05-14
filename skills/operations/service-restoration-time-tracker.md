---
name: service-restoration-time-tracker
description: >
  Tracks and analyzes mean time to restore service (MTRS) across incident categories, surfacing patterns to reduce future recovery windows. Use when someone says "log an incident resolution," asks about "service recovery trends," wants to "track downtime," needs to "analyze restoration times," or is reviewing "incident response performance."
category: operations
tags: [incidents, mtrs, reliability, observability, postmortem]
author: community
---

# Service Restoration Time Tracker

Logs incident resolution data, calculates mean time to restore service (MTRS) by incident type, and surfaces actionable trends to shrink future recovery windows.

## Workflow

### 1. Log a New Incident Resolution
When given incident details, capture and structure the following fields:
- **Incident ID** — unique identifier or auto-generate one (`INC-YYYYMMDD-NNN`)
- **Incident Type** — category (e.g., database, networking, deployment, authentication, storage, third-party)
- **Severity** — P1 / P2 / P3 / P4
- **Start Time** — when the incident was detected or reported
- **End Time** — when service was fully restored
- **MTRS (minutes)** — calculate as `End Time − Start Time`
- **Root Cause Summary** — one sentence
- **Resolution Action** — what fixed it
- **Responders** — team or individuals involved

If any field is missing, ask for it before logging.

### 2. Maintain the Incident Log
Append each entry to a running structured log (Markdown table or JSON array). Keep entries sorted by start time descending.

### 3. Calculate MTRS Statistics
When asked for trends or summaries, compute:
- **Overall MTRS** — mean across all incidents
- **MTRS by Incident Type** — mean per category
- **MTRS by Severity** — mean per P-level
- **MTRS over Time** — rolling 30-day average to show trajectory (improving / degrading / stable)
- **Longest Incidents** — top 3 by duration
- **Frequency by Type** — count of incidents per category

### 4. Surface Trends and Recommendations
Identify and call out:
- Incident types with MTRS above the overall average (flag as **high-impact**)
- Incident types with increasing MTRS over the last 3 occurrences (flag as **degrading trend**)
- Repeated root causes across incidents of the same type (flag as **systemic issue**)
- For each flagged item, provide one specific, actionable recommendation (e.g., "Database incidents average 94 min — automate failover to reduce manual intervention time")

## Output Format

### Incident Log Entry (on new log)
```
| INC-20240315-001 | Database | P1 | 2024-03-15 02:14 | 2024-03-15 04:02 | 108 min | Primary replica failure | Promoted secondary replica | Platform Team |
```

### MTRS Summary Report
```
## MTRS Summary — [Date Range]

**Overall MTRS:** 47 min (across 23 incidents)

### By Incident Type
| Type           | Count | Avg MTRS | Trend     | Flag         |
|----------------|-------|----------|-----------|--------------|
| Database       | 5     | 94 min   | ↑ +12%    | ⚠ High-Impact |
| Deployment     | 8     | 28 min   | ↓ −8%     | ✓ Improving  |
| Networking     | 4     | 61 min   | → Stable  | ⚠ High-Impact |

### By Severity
| Severity | Count | Avg MTRS |
|----------|-------|----------|
| P1       | 3     | 112 min  |
| P2       | 9     | 54 min   |

### Top 3 Longest Incidents
1. INC-20240315-001 — Database — 108 min
2. INC-20240308-003 — Networking — 97 min
3. INC-20240301-002 — Database — 89 min

### Recommendations
1.
