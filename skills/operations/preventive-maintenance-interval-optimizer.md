---
name: preventive-maintenance-interval-optimizer
description: >
  Analyzes equipment failure history and usage data to recommend optimal preventive maintenance
  schedules that minimize unplanned downtime. Use when someone says "our equipment keeps breaking
  down unexpectedly," asks about optimizing maintenance intervals, wants to reduce unplanned
  downtime, needs to review their PM schedule, or is trying to balance maintenance costs against
  failure risk.
category: operations
tags: [maintenance, reliability, equipment, scheduling, downtime]
author: community
---

# Preventive Maintenance Interval Optimizer

This skill analyzes equipment failure patterns, usage metrics, and maintenance history to produce data-driven PM interval recommendations that reduce unplanned downtime and optimize maintenance spend.

## Analysis Workflow

### 1. Collect Input Data
Request the following from the user if not provided:
- Equipment name, type, and criticality (production-critical, safety-critical, non-critical)
- Failure history: dates, failure modes, downtime duration, repair costs
- Current PM interval and last maintenance date
- Usage metrics: hours run, cycles, production volume since last PM
- Mean Time Between Failures (MTBF) if known; otherwise calculate from failure history
- Mean Time To Repair (MTTR) for each failure type
- Cost of planned PM vs. cost of unplanned failure (parts + labor + lost production)

### 2. Calculate Key Reliability Metrics
Perform or request the following calculations:
- **MTBF** = Total operating time ÷ Number of failures
- **Failure Rate (λ)** = 1 ÷ MTBF
- **Current PM efficiency** = (Failures prevented by PM) ÷ (Total PM events)
- **Downtime ratio** = Unplanned downtime hours ÷ Total available hours
- **Cost ratio** = Annual unplanned failure cost ÷ Annual planned PM cost

### 3. Identify Failure Patterns
Examine the data for:
- Time-based degradation (failures cluster at consistent age/hours — suggests fixed-interval PM)
- Random failures (no time pattern — suggests condition-based monitoring instead)
- Infant mortality (failures shortly after PM — suggests PM interval is too frequent or procedure is flawed)
- Wearout patterns (failure rate increases over time — Weibull analysis applies)
- Seasonal or load-driven patterns

### 4. Determine Optimal Interval Strategy
Apply the appropriate model based on failure pattern:

**Fixed-interval PM** (time/usage-based degradation detected):
- Set interval at 70–80% of average MTBF to catch failures before they occur
- Adjust downward if failure consequences are safety-critical or extremely costly
- Adjust upward if PM itself causes failures (infant mortality pattern)

**Condition-based maintenance trigger** (random failure pattern):
- Recommend sensors or inspection checks instead of fixed intervals
- Define specific condition thresholds that trigger maintenance action

**Run-to-failure** (non-critical, low failure cost, random pattern):
- Confirm cost of failure is lower than cost of PM
- Recommend periodic monitoring only

### 5. Validate with Cost-Benefit Analysis
For each recommended interval, calculate:
- Expected annual PM cost = (Cost per PM event) × (Operating hours ÷ Proposed interval)
- Expected annual failure cost = Failure rate at proposed interval × (Repair cost + Downtime cost)
- Total cost of ownership at proposed interval vs. current interval
- Break-even interval where PM cost equals failure cost

### 6. Adjust for Constraints
Factor in:
- Regulatory or OEM minimum requirements (never recommend below these)
- Spare parts lead times (interval must not be shorter than parts procurement time)
- Crew availability windows and production schedules
- Grouping opportunities (align intervals with related equipment to reduce labor)

## Output Format

Produce a structured recommendation report with these sections:

**Equipment Summary**
- Equipment ID/name, criticality level, current interval, analysis period covered

**Failure Pattern Finding**
- 2–3 sentences describing the observed failure pattern and what it indicates

**Key Metrics Table**
| Metric | Value |
|---|---|
| MTBF (calculated) | X hours/days |
| Current PM interval | X hours/days |
| Unplanned downtime rate | X% |
| PM-to-failure cost ratio |
