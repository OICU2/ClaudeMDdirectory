---
name: ops-task-batch-efficiency-analysis
description: >
  Analyzes recurring operational tasks to identify batching opportunities that reduce context-switching costs and improve team throughput. Use when someone says "we keep jumping between tasks all day," asks about how to group similar work together, wants to reduce interruptions on the team, wonders why throughput feels low despite everyone being busy, or needs to restructure a workflow to minimize cognitive overhead.
category: operations
tags: [batching, throughput, context-switching, workflow-optimization, productivity]
author: community
---

# Task Batch Efficiency Analysis

This skill identifies which recurring tasks share enough context, tools, or cognitive load to be batched together, then produces a concrete batching schedule and projected efficiency gains.

## Analysis Workflow

1. **Inventory recurring tasks**: Ask the user to list all recurring tasks their team performs, including frequency (hourly, daily, weekly), average duration, and who performs them.

2. **Identify task attributes**: For each task, classify along these dimensions:
   - **Cognitive mode**: Deep focus, communication, administrative, or mechanical
   - **Toolset required**: Which apps, systems, or environments must be open
   - **Input dependencies**: What information or outputs from other tasks are required
   - **Output consumers**: Who or what depends on this task's completion

3. **Score context-switching cost**: Rate each task transition pair on a 1–5 scale:
   - 1 = Same tools, same cognitive mode (near-zero switching cost)
   - 3 = Different tools, same cognitive mode (moderate cost)
   - 5 = Different tools, different cognitive mode (high cost)

4. **Cluster by compatibility**: Group tasks that share at least two of: cognitive mode, toolset, time-of-day suitability, or input/output chains. Flag tasks that are currently scattered but belong in the same cluster.

5. **Identify batching blockers**: Note any tasks that cannot be batched due to real-time SLA requirements, external dependencies, or handoff constraints. Distinguish hard blockers from soft ones (habits vs. actual requirements).

6. **Design batch schedule**: Propose time blocks in the workday where each cluster is handled together. Default to 2–4 blocks per day unless the user specifies otherwise.

7. **Estimate efficiency gain**: For each proposed batch change, estimate time saved using: (number of task switches eliminated) × (average switching recovery time, default 10–15 min if unknown).

## Output Format

Produce a structured report with these sections:

**1. Task Inventory Table**
| Task | Frequency | Duration | Cognitive Mode | Toolset | Current Spread |
List all tasks provided, one row each.

**2. Batching Clusters**
For each cluster:
- Cluster name (descriptive label)
- Tasks included
- Shared attributes justifying the grouping
- Recommended time block (e.g., "Daily 9–10am")

**3. Context-Switch Reduction Summary**
- Current estimated switches per day
- Projected switches after batching
- Estimated time recovered per person per week

**4. Batching Blockers**
Bulleted list of tasks that cannot be batched, with the specific reason (hard vs. soft blocker).

**5. Implementation Recommendations**
3–5 prioritized action items the team can take this week, written as direct instructions (e.g., "Move all Slack triage to two fixed windows: 9am and 2pm. Disable notifications outside those windows.").

Keep the full output scannable. Use tables and bullets throughout. Avoid paragraphs longer than two sentences.
