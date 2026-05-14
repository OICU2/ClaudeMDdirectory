---
name: ops-third-party-dependency-downtime-log
description: >
  Tracks and categorizes downtime events caused by third-party vendors, external APIs, or
  infrastructure tools to surface concentration risks and SLA breach patterns over time.
  Use when someone says "a vendor went down," asks about third-party outage history, wants
  to log an external dependency failure, needs to review SLA compliance for a vendor, or
  is trying to identify which third-party tools cause the most disruption.
category: operations
tags: [operations, vendor-management, incident-tracking, sla, downtime]
author: community
---

# Third-Party Dependency Downtime Log

This skill captures, categorizes, and analyzes downtime events caused by external vendors or tools so Claude can maintain a structured log and surface concentration risks and SLA breach patterns.

## Logging a New Downtime Event

When a new event is reported, collect and record the following fields:

1. **Event ID** — Auto-increment or accept a provided identifier (e.g., `TDD-0042`).
2. **Vendor / Tool Name** — The specific third-party service affected (e.g., Stripe, AWS us-east-1, PagerDuty).
3. **Dependency Category** — Classify as one of: `payment`, `infrastructure`, `auth`, `monitoring`, `communication`, `data/storage`, `cdn`, `other`.
4. **Start Time** — ISO 8601 format (UTC). Ask if not provided.
5. **End Time / Duration** — Resolved time or "ongoing." Calculate duration in minutes if both times are known.
6. **Impact Severity** — `P1 (critical / full outage)`, `P2 (major degradation)`, `P3 (partial / minor)`.
7. **Affected Internal Systems** — List which internal services or teams were impacted.
8. **Customer Impact** — `yes / no / unknown`, with brief description if yes.
9. **Vendor-Acknowledged** — Did the vendor issue a status page update or incident report? `yes / no`.
10. **SLA Breach** — Did this event violate a contracted SLA? `yes / no / unknown`. If yes, note the SLA target (e.g., 99.9% monthly uptime).
11. **Root Cause (if known)** — Brief description from vendor postmortem or internal finding.
12. **Mitigation Taken** — Steps taken to reduce impact (e.g., failover to backup, manual processing, feature disabled).
13. **Follow-Up Actions** — Any open tickets, vendor escalations, or contract reviews triggered.

## Analyzing the Log

When asked to review history or identify patterns, perform the following:

1. **Concentration Risk Report** — Count events per vendor and per dependency category. Flag any vendor or category with ≥ 3 events in a rolling 90-day window as a concentration risk.
2. **SLA Breach Summary** — List all events marked `SLA Breach: yes`, grouped by vendor, with cumulative downtime and breach count.
3. **MTTR by Vendor** — Calculate mean time to resolution per vendor where duration data exists.
4. **Severity Distribution** — Break down P1/P2/P3 counts overall and per vendor.
5. **Trend Identification** — Highlight any vendor with increasing incident frequency or a cluster of events within a 30-day period.
6. **Recommendation Triggers** — If a vendor has 2+ P1s or 3+ SLA breaches in 90 days, flag for contract review or architectural redundancy assessment.

## Output Format

### New Event Entry
Produce a structured log entry in this format:

```
EVENT: TDD-####
Date/Time: YYYY-MM-DDTHH:MM:SSZ → YYYY-MM-DDTHH:MM:SSZ (XX min)
Vendor: [Name]
Category: [Category]
Severity: [P1/P2/P3]
Affected Systems: [list]
Customer Impact: [yes/no/unknown] — [brief note]
Vendor Acknowledged: [yes/no]
SLA Breach: [yes/no/unknown] — [SLA target if applicable]
Root Cause: [description or "pending"]
Mitigation: [steps taken]
Follow-Up: [actions or "
