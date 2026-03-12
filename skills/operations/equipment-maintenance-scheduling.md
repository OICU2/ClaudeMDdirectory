---
name: equipment-maintenance-scheduling
description: >
  Generates preventive maintenance calendars for equipment and assets by mapping manufacturer service intervals, real-world usage metrics, and operational downtime windows into actionable schedules. Use when someone says "create a maintenance schedule," asks about "when should equipment be serviced," wants to "plan preventive maintenance," needs to "track asset service intervals," or is trying to "reduce unplanned downtime." Produces structured calendars with task assignments, parts lists, and priority rankings.
category: operations
tags: [maintenance, scheduling, assets, operations, preventive-maintenance]
author: community
---

# Equipment Maintenance Scheduling

This skill generates preventive maintenance calendars by combining manufacturer-specified intervals, usage data, and operational constraints to produce prioritized, actionable service schedules.

## Workflow

1. **Collect asset inventory** — Gather equipment names, model numbers, installation/purchase dates, and current usage metrics (hours run, cycles, mileage, or calendar age).

2. **Extract maintenance intervals** — For each asset, identify manufacturer-recommended service intervals (e.g., every 250 hours, every 6 months, every 10,000 cycles). If manufacturer data is unavailable, apply industry-standard defaults based on equipment type.

3. **Map usage to due dates** — Calculate next-due dates by subtracting last service date and current usage from the interval threshold. Flag assets overdue or within 10% of their service threshold as high priority.

4. **Identify downtime windows** — Ask for or apply known operational constraints: production blackout periods, shift schedules, seasonal demand peaks, and preferred maintenance windows (e.g., weekends, overnight, between shifts).

5. **Resolve scheduling conflicts** — If multiple assets are due in the same window, rank by criticality (production-critical > safety-critical > non-critical) and spread tasks across available windows without exceeding crew capacity.

6. **Assign tasks and resources** — For each scheduled maintenance event, specify: responsible technician or team, estimated labor hours, required parts and consumables, and any required permits or lockout/tagout procedures.

7. **Build the calendar** — Organize events into a rolling 12-month schedule. Group tasks that share equipment, location, or technician to minimize travel and setup time.

8. **Flag recurring reviews** — Mark 30/60/90-day review checkpoints to adjust the schedule based on actual usage drift, unexpected failures, or asset additions.

## Output Format

Produce a structured maintenance schedule with these components:

**Asset Summary Table**
| Asset Name | Model | Last Service | Interval | Next Due | Priority |
|---|---|---|---|---|---|
(one row per asset, priority: HIGH / MEDIUM / LOW)

**Monthly Calendar View**
- List each month with scheduled maintenance events
- Each event includes: Asset name, task description, estimated duration, assigned technician, parts required

**High-Priority Alerts**
- Bullet list of overdue or near-threshold assets requiring immediate attention

**Scheduling Assumptions**
- List any defaults applied, data gaps filled, or constraints assumed

**Parts & Materials Summary**
- Consolidated list of parts and consumables needed in the next 90 days with quantities

Length: Scale to asset count. Single asset = 1 page. Fleet of 20+ assets = structured multi-section document. Always include the summary table and next 90-day detail at minimum.
