---
name: turnaround-time-benchmark-analysis
description: >
  Measures actual task or order turnaround times against internal targets and industry benchmarks
  to identify performance gaps and improvement opportunities. Use when someone says "our turnaround
  times are too slow," asks about how long tasks are taking to complete, wants to compare processing
  speed against competitors, needs to identify bottlenecks in order fulfillment, or is trying to
  understand why deadlines are being missed.
category: operations
tags: [benchmarking, performance-analysis, operations, turnaround-time, process-improvement]
author: community
---

# Turnaround Time Benchmark Analysis

This skill analyzes actual task or order completion times against internal targets and industry benchmarks to surface specific performance gaps and prioritize corrective actions.

## Analysis Workflow

1. **Collect Turnaround Time Data**
   - Request actual cycle time data: task type, start timestamp, end timestamp, volume handled
   - Identify the unit of measurement (hours, days, business days)
   - Clarify which process stages are included (receipt → acknowledgment → completion → delivery)
   - Ask for data segmentation: by product line, team, region, priority tier, or customer type

2. **Establish Internal Targets**
   - Identify formally documented SLAs or internal KPI targets
   - If targets are informal, ask what leadership considers "acceptable" performance
   - Note whether targets differ by task type, channel, or customer segment
   - Calculate current performance rate: % of tasks completed within target

3. **Source Industry Benchmarks**
   - Apply relevant benchmarks based on the industry and process type:
     - **Order fulfillment (e-commerce):** same-day to 2-day shipping standard; 3-5 days acceptable
     - **Invoice processing:** 3–5 business days industry average; best-in-class under 24 hours
     - **Customer support tickets:** Tier 1 under 4 hours; Tier 2 under 24 hours; Tier 3 under 72 hours
     - **Loan/application processing:** 1–3 business days for standard; 24 hours for fast-track
     - **Manufacturing job orders:** varies by complexity; flag if cycle time exceeds planned hours by >15%
   - Note the benchmark source and date when citing external standards

4. **Calculate the Gap**
   - Compute: `Gap = Actual Average − Target` and `Gap = Actual Average − Benchmark`
   - Calculate gap as a percentage: `((Actual − Target) / Target) × 100`
   - Identify which task types, teams, or time periods show the largest gaps
   - Flag outliers: tasks that took 2× or more than the average

5. **Identify Root Cause Categories**
   - Classify each gap into one or more categories: capacity constraints, process handoff delays, system/tool latency, approval bottlenecks, data quality issues, or demand spikes
   - Use the data to determine whether gaps are consistent (systemic) or sporadic (event-driven)

6. **Prioritize Gaps**
   - Score each gap by: volume impact × time deviation × business criticality
   - Rank top 3–5 gaps for immediate action

## Output Format

Produce a structured analysis report with the following sections:

**Summary Table**
| Task Type | Avg Actual Time | Internal Target | Gap vs Target | Industry Benchmark | Gap vs Benchmark |
|---|---|---|---|---|---|
| [type] | [X days] | [Y days] | [+/- Z days / %] | [W days] | [+/- V days / %] |

**Performance Rate**
- X% of [task type] completed within internal target (past [time period])

**Top Performance Gaps** (ranked list, 3–5 items)
- Gap description, magnitude, affected volume, likely root cause category

**Benchmark Context**
- One paragraph explaining which benchmarks were used, their source, and how the organization compares at a high level

**Recommended Focus Areas** (3 bullet points maximum)
- Each bullet: specific gap → specific action → expected improvement

Length: 400–700 words plus the summary table. Use plain language. Avoid jargon unless the user's domain requires it.
