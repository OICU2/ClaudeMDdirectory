---
name: downtime-prevention-maintenance-plan
category: operations
description: >
  Builds a proactive maintenance schedule for critical operational systems and equipment based on usage patterns, failure history, and vendor recommendations to minimize unplanned downtime. Use when someone says "we keep having unexpected outages," asks about preventing equipment failures, wants to reduce unplanned downtime, needs a maintenance calendar for critical systems, or is trying to build a preventive maintenance program.
tags: [maintenance, operations, reliability, scheduling, uptime]
author: community
---

# Downtime Prevention Maintenance Plan

This skill generates a structured, proactive maintenance schedule for critical systems and equipment by analyzing usage patterns, failure history, and vendor specs to eliminate unplanned outages before they occur.

## Maintenance Plan Workflow

### 1. Inventory Critical Assets
- List every system, machine, or piece of infrastructure that causes operational impact if it fails
- Assign each asset a criticality tier: **Tier 1** (failure halts operations), **Tier 2** (failure degrades operations), **Tier 3** (failure is inconvenient but manageable)
- Note current age, usage hours/cycles, and last known service date for each asset

### 2. Gather Failure and Usage Data
- Ask the user for or analyze: past incident logs, mean time between failures (MTBF), recurring failure patterns, and seasonal stress periods
- Identify the top 3 failure modes per Tier 1 and Tier 2 asset (e.g., overheating, wear, software drift, power issues)
- Note any vendor-specified maintenance intervals from manuals or service agreements

### 3. Build the Maintenance Matrix
For each asset, define:
- **Preventive tasks**: scheduled inspections, part replacements, calibrations, software patches
- **Predictive triggers**: metrics or thresholds that signal imminent failure (temperature spikes, error rates, vibration, latency)
- **Frequency**: daily, weekly, monthly, quarterly, or annual intervals per task
- **Owner**: role or team responsible for each task
- **Estimated duration**: time required to complete each maintenance window

### 4. Sequence and De-conflict the Schedule
- Stagger Tier 1 maintenance windows to avoid simultaneous downtime of interdependent systems
- Schedule high-impact maintenance during lowest-traffic periods (off-peak hours, weekends, slow seasons)
- Build in buffer time between consecutive maintenance windows (minimum 20% of task duration)
- Flag any tasks that require coordinated vendor access or specialty tools and add lead-time reminders

### 5. Define Escalation and Contingency Rules
- Set a threshold for each asset: if a predictive metric crosses X, trigger unscheduled inspection within Y hours
- Identify spare parts or backup systems to have on hand for each Tier 1 asset
- Assign an on-call escalation contact for each asset category

### 6. Establish Review Cadence
- Schedule a quarterly review to update the plan based on new failure data
- Track planned vs. unplanned downtime monthly to measure plan effectiveness
- Retire or revise tasks that have not prevented failures after two full cycles

## Output Format

Produce the following deliverables:

**1. Asset Criticality Register** — a table with columns: Asset Name | Tier | Age/Usage | Last Serviced | Top Failure Modes

**2. Maintenance Task List** — a table with columns: Asset | Task | Type (Preventive/Predictive) | Frequency | Owner | Duration | Notes

**3. 12-Month Maintenance Calendar** — a month-by-month schedule showing which tasks occur when, grouped by asset tier; highlight any high-risk overlap periods

**4. Predictive Trigger Thresholds** — a bulleted list per Tier 1/2 asset showing the specific metric, warning threshold, and required response action

**5. Contingency Readiness Checklist** — spare parts to stock, backup systems to verify, and escalation contacts to confirm before the plan goes live

Total output length: as long as needed to cover all assets provided, but each section should be scannable and table-driven rather than narrative-heavy.
