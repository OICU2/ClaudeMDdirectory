---
name: process-cycle-time-baseline-builder
description: >
  Establishes baseline cycle time measurements for each process step to support future performance benchmarking and improvement tracking. Use when someone says "we need to measure how long our process takes," asks about establishing performance benchmarks, wants to track process efficiency over time, needs to identify bottlenecks in a workflow, or is setting up a continuous improvement program.
category: operations
tags: [cycle-time, benchmarking, process-improvement, operations, performance-metrics]
author: community
---

# Process Cycle Time Baseline Builder

This skill captures and documents baseline cycle time measurements for each step in a process so teams can benchmark current performance and track future improvements.

## Baseline Building Workflow

1. **Identify the process scope** — Ask the user to name the process and define its start and end points. Confirm whether the focus is end-to-end or limited to specific sub-steps.

2. **Enumerate all process steps** — List every discrete step in sequential order. Each step must have a clear handoff point or completion trigger. Push back if steps are too vague (e.g., "review" needs to specify who reviews and what done looks like).

3. **Collect time data per step** — For each step, gather:
   - Minimum observed time
   - Maximum observed time
   - Average or typical time
   - Sample size (how many observations)
   - Data source (direct observation, system logs, team estimates)

4. **Flag data quality issues** — Mark any step where data is estimated rather than measured. Note steps with high variance (max > 3× min) as candidates for root cause investigation.

5. **Calculate aggregate metrics** — Sum step times to produce:
   - Total minimum cycle time
   - Total maximum cycle time
   - Total average cycle time
   - Identify the top 3 longest steps by average duration

6. **Establish the baseline record** — Document the measurement date, process version, team or system observed, and any known anomalies during the measurement period.

7. **Define improvement targets** — For each step flagged as a bottleneck or high-variance, prompt the user to set a target cycle time and a review date.

## Output Format

Produce a structured baseline report with the following sections:

**Process Baseline Summary**
- Process name and scope
- Measurement date and period
- Total cycle time (min / avg / max)

**Step-by-Step Cycle Time Table**
| Step # | Step Name | Min Time | Avg Time | Max Time | Sample Size | Data Source | Notes |
|--------|-----------|----------|----------|----------|-------------|-------------|-------|

**Bottleneck Flags**
- Bulleted list of steps with high variance or longest average durations, with one-line explanation for each

**Data Quality Notes**
- List any steps relying on estimates rather than measured data

**Improvement Targets Table**
| Step # | Step Name | Current Avg | Target Avg | Target Date | Owner |
|--------|-----------|-------------|------------|-------------|-------|

Use plain text tables compatible with Markdown. Keep all time units consistent (minutes or hours — confirm with user upfront). Total length should fit one to two pages.
