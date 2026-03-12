---
name: operational-bottleneck-identification
category: operations
description: >
  Analyzes process flow data and throughput metrics to identify and prioritize workflow stages causing delays, waste, or capacity constraints. Use when someone says their pipeline is backed up, asks why a process is slow, wants to find where work is getting stuck, needs to reduce cycle time, or is trying to improve throughput in a system or workflow.
tags: [operations, process-improvement, bottleneck-analysis, throughput, lean]
author: community
---

# Operational Bottleneck Identification

This skill systematically analyzes process flow data and throughput metrics to pinpoint, rank, and explain the specific stages causing delays, waste, or capacity constraints in a workflow.

## Analysis Workflow

1. **Collect process context**: Ask for (or extract from provided data) the full list of workflow stages in sequence, along with any available metrics per stage — cycle time, wait time, queue length, throughput rate, error rate, rework frequency, and resource utilization.

2. **Identify constraint indicators**: For each stage, flag signals of bottlenecking:
   - Queue buildup (work items waiting to enter this stage)
   - Cycle time significantly above average for that stage type
   - Utilization near or at 100% (people, machines, or services)
   - High rework or defect rates causing re-entry into the stage
   - Downstream starvation (next stage is idle waiting for output)

3. **Apply Theory of Constraints logic**: Identify the single stage with the lowest throughput rate or longest average wait time — this is the primary constraint. All other inefficiencies are secondary until this constraint is resolved.

4. **Quantify impact**: For each bottleneck candidate, calculate or estimate:
   - Time added to total cycle time (absolute and percentage)
   - Work items blocked per day/week
   - Capacity gap (demand vs. capacity at that stage)

5. **Diagnose root causes**: For each bottleneck, determine whether the cause is:
   - **Resource-based**: understaffing, equipment limits, tool capacity
   - **Process-based**: unnecessary steps, poor sequencing, handoff delays
   - **Dependency-based**: waiting on external inputs, approvals, or systems
   - **Variability-based**: inconsistent inputs causing unpredictable processing time

6. **Prioritize by leverage**: Rank bottlenecks using: (impact on total cycle time × frequency of occurrence) ÷ estimated effort to fix.

7. **Recommend targeted interventions**: For the top 1–3 bottlenecks, suggest specific, actionable improvements — not generic advice. Examples: add parallel processing at stage X, reduce batch size entering stage Y, automate the approval step at stage Z.

## Output Format

Produce a structured bottleneck report with the following sections:

**Process Overview**
- List all stages in sequence with key metrics in a table (stage name, avg cycle time, queue depth, utilization %, bottleneck flag)

**Primary Bottleneck**
- Stage name, evidence summary, quantified impact (e.g., "adds 4.2 hours to average cycle time, blocking ~30 items/day")
- Root cause classification and 2–3 sentence diagnosis

**Secondary Bottlenecks** (if present)
- Same format as primary, condensed to 3–5 lines each

**Priority Ranking Table**
- Columns: Rank | Stage | Impact Score | Ease of Fix | Recommended Action

**Top Recommendations**
- Numbered list of 3–5 specific interventions, each with: what to do, which stage it targets, and expected outcome

Keep the full report under 600 words unless data complexity requires more detail. Use tables wherever comparative data is presented. Avoid vague suggestions like "improve communication" — every recommendation must name a specific stage and specific change.
