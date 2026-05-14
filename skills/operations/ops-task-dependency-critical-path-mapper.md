---
name: ops-task-dependency-critical-path-mapper
description: >
  Analyzes task dependencies within an operational workflow to identify the critical path and surface blocking steps. Use when someone says "map out task dependencies," asks "what's blocking this workflow," wants to "find the critical path," needs to "identify bottlenecks in our process," or asks "which tasks depend on each other." Produces a structured dependency map with critical path highlighted and blocker tasks called out explicitly.
category: operations
tags: [critical-path, dependencies, workflow, bottlenecks, scheduling]
author: community
---

# Task Dependency & Critical Path Mapper

Maps task dependencies across an operational workflow to identify the critical path and highlight steps that block downstream execution, helping teams prioritize work and unblock progress.

## Mapping Workflow

1. **Extract all tasks** — List every task mentioned or implied in the workflow. Assign each a short ID (T1, T2, etc.) and a name.

2. **Identify dependencies** — For each task, determine which tasks must complete before it can start. Record as: `T3 depends on T1, T2`.

3. **Estimate durations** — If durations are provided, use them. If not, ask the user or assign relative weights (short / medium / long) and note the assumption.

4. **Build the dependency graph** — Represent the workflow as a directed acyclic graph (DAG). Group tasks into parallel tracks where no dependency exists between them.

5. **Calculate the critical path** — Trace the longest chain of dependent tasks from start to finish. This is the minimum time the workflow can complete. Mark every task on this path as **CRITICAL**.

6. **Identify blockers** — Flag any task that:
   - Has more than one downstream dependent (high fan-out)
   - Sits on the critical path
   - Has no parallel alternative if it stalls
   Label these as **BLOCKER**.

7. **Surface risks** — Note tasks with unclear owners, missing inputs, or external dependencies that could introduce delay.

## Output Format

Produce the following sections in order:

**Task Inventory**
A table with columns: ID | Task Name | Duration | Depends On | Status (Critical / Blocker / Normal)

**Dependency Map (Text DAG)**
ASCII or plain-text representation of the dependency graph showing parallel tracks and sequential chains. Example:
```
T1 → T3 → T5 → T7 (END)
T2 → T4 ↗
```

**Critical Path**
Single line listing the critical path sequence and total duration:
`Critical Path: T1 → T3 → T5 → T7 | Total Duration: 14 days`

**Blockers & Risk Summary**
Bullet list of blocker tasks with a one-line explanation of what they block and why they are at risk. Maximum 5 bullets; prioritize by impact.

**Recommended Actions**
Up to 3 concrete next steps to reduce critical path length or de-risk blockers (e.g., parallelize a task, assign an owner, pre-stage a dependency).
