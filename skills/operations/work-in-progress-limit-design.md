---
name: work-in-progress-limit-design
description: >
  Calculates and recommends WIP limits for each stage of an operational workflow to reduce multitasking, prevent bottlenecks, and improve throughput. Use when someone says their team is juggling too many tasks at once, asks how to set WIP limits for their kanban board, wants to reduce context switching, is concerned about work piling up at a specific stage, or needs to improve flow efficiency across a process.
category: operations
tags: [wip-limits, kanban, flow, lean, throughput, bottleneck]
author: community
---

# WIP Limit Design

This skill analyzes an operational workflow and calculates evidence-based WIP limits for each stage to improve throughput, reduce multitasking, and surface bottlenecks.

## Workflow Analysis Steps

1. **Gather workflow structure**: Ask for or identify each stage in the workflow (e.g., Backlog → In Analysis → In Development → In Review → Done). If not provided, propose a standard 5-stage workflow for their domain.

2. **Collect team and capacity data**: For each stage, determine:
   - Number of people who work in that stage
   - Average time an item spends in that stage (cycle time per stage)
   - Current number of items typically in that stage at once

3. **Identify the bottleneck stage**: Find the stage with the longest average cycle time or the lowest throughput rate. This is the system constraint.

4. **Calculate baseline WIP limits using Little's Law**: For each stage:
   - WIP Limit = Throughput Rate × Target Cycle Time
   - Start with: WIP Limit = (number of workers in stage) × 1.5, rounded down to nearest integer
   - Never set a WIP limit below 1 per active worker in a stage

5. **Apply bottleneck adjustment**: Set the bottleneck stage WIP limit to exactly match its capacity (workers × 1). Set upstream stages to 1.5× bottleneck WIP limit maximum to avoid starving it. Set downstream stages to match bottleneck output rate.

6. **Add multitasking penalty correction**: If team members report high context switching, reduce all WIP limits by 20% and flag this as a starting point to tighten further.

7. **Generate a phased rollout plan**:
   - Week 1–2: Implement limits at bottleneck stage only
   - Week 3–4: Extend to adjacent upstream/downstream stages
   - Week 5+: Apply to all stages and review metrics

8. **Define review triggers**: Specify the conditions under which WIP limits should be revisited (e.g., throughput drops >15%, a stage is consistently at limit for 3+ days, team size changes).

## Output Format

Produce a structured WIP limit recommendation with the following sections:

**Workflow Map with WIP Limits**
A table with columns: Stage Name | Workers | Avg Cycle Time | Current WIP | Recommended WIP Limit | Reasoning

**Bottleneck Analysis**
2–3 sentences identifying the constraint stage, why it is the bottleneck, and the downstream effect if left unaddressed.

**Recommended WIP Limits Summary**
Bullet list of each stage with its final recommended limit and a one-line rationale.

**Phased Implementation Plan**
Numbered list of 3 phases with specific actions and timelines.

**Leading Indicators to Watch**
Bullet list of 3–5 metrics to track weekly after implementation (e.g., lead time, queue length at bottleneck, blocked item count).

**Suggested Review Cadence**
One paragraph describing when and how the team should revisit and adjust these limits.

Keep the output concise and decision-ready. Use a table for the workflow map. Avoid academic definitions — focus on what the team should do and why.
