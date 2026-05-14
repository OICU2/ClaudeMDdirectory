---
name: cross-functional-bottleneck-heat-map
description: >
  Aggregates task queue depths and wait times across departments to produce a visual heat map identifying where cross-team throughput is consistently blocked. Use when someone says "where are we getting stuck across teams," asks about cross-departmental bottlenecks, wants to visualize workflow congestion, needs to find where handoffs are failing, or wants to map throughput blockers across the organization.
category: operations
tags: [bottleneck-analysis, heat-map, throughput, cross-functional, workflow]
author: community
---

# Cross-Functional Bottleneck Heat Map

This skill collects queue depth and wait time data across departments and renders a structured heat map that pinpoints where inter-team handoffs and throughput are consistently degraded.

## Data Collection and Analysis Workflow

1. **Identify departments/teams in scope** — List every team involved in the workflow chain (e.g., Sales → Design → Engineering → QA → Ops → Support). Confirm with the user if the list is incomplete.

2. **Collect queue metrics per team** — For each team, gather:
   - Current queue depth (number of items waiting)
   - Average wait time before pickup (hours or days)
   - Average cycle time once work is started
   - Handoff rejection or rework rate (if available)

3. **Normalize the data** — Convert all metrics to a 1–5 severity score per team using this scale:
   - 1 = No congestion (queue depth low, wait time under SLA)
   - 2 = Minor delay (occasional backlog, within tolerance)
   - 3 = Moderate bottleneck (consistent queue buildup, SLA at risk)
   - 4 = Severe bottleneck (queue growing, SLA breached, work blocked)
   - 5 = Critical blockage (work halted, escalation required)

4. **Identify handoff failure points** — Flag any transition between two teams where the upstream team scores ≥ 3 and the downstream team scores ≥ 3. These are cross-functional friction zones.

5. **Determine root cause categories** — For each bottleneck, classify the likely cause:
   - Capacity (too few people or resources)
   - Dependency (waiting on another team's output)
   - Process (unclear handoff criteria or rework loops)
   - Tooling (system delays, access issues, automation gaps)

6. **Rank bottlenecks by business impact** — Order findings by: (severity score × queue depth × estimated cost of delay).

## Output Format

Produce the following sections in order:

---

### 🗺️ Bottleneck Heat Map

Render a markdown table with teams as columns and metrics as rows. Use emoji indicators for severity: 🟢 (1–2), 🟡 (3), 🔴 (4–5).

```
| Metric            | Sales | Design | Engineering | QA   | Ops  | Support |
|-------------------|-------|--------|-------------|------|------|---------|
| Queue Depth       | 🟢 1  | 🟡 3   | 🔴 5        | 🔴 4 | 🟡 3 | 🟢 2    |
| Avg Wait Time     | 🟢 1  | 🟡 3   | 🔴 5        | 🔴 4 | 🟢 2 | 🟢 1    |
| Handoff Rework    | 🟢 1  | 🟢 2   | 🟡 3        | 🔴 4 | 🟢 2 | 🟢 1    |
| Overall Severity  | 🟢 1  | 🟡 3   | 🔴 5        | 🔴 4 | 🟡 2 | 🟢 1    |
```

---

### 🔥 Top Bottlenecks (Ranked)

For each bottleneck, one concise block:

**#1 — [Team Name] | Severity: 🔴 5**
- Queue depth: [X items]
- Avg wait time: [X days]
- Root cause category: [
