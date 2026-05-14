---
name: ops-critical-path-dependency-log
description: >
  Documents sequential task dependencies in operational workflows to identify which steps constrain overall delivery timelines. Use when someone says "map out our dependencies," asks about "what's blocking delivery," or wants to "find the critical path" in a project or process. Also activates when someone needs to "identify bottlenecks in our workflow" or asks "which tasks can't start until another finishes."
category: operations
tags: [critical-path, dependencies, workflow, operations, project-management]
author: community
---

# Critical Path Dependency Log

This skill maps sequential task dependencies in operational workflows and identifies which steps constrain overall delivery timelines, activating whenever someone needs to understand task ordering, blockers, or delivery constraints.

## Dependency Mapping Workflow

1. **Collect all tasks** — List every task, step, or milestone in the workflow. Ask the user to provide them if not already stated. Capture task name, owner, and estimated duration.

2. **Identify dependency relationships** — For each task, determine:
   - Predecessors: tasks that must complete before this one can start (Finish-to-Start)
   - Hard blockers vs. soft preferences (note the difference explicitly)
   - External dependencies (third-party, approvals, data handoffs)

3. **Build the dependency chain** — Sequence tasks into a directed chain from start to finish. Group parallel tracks separately. Flag any circular dependencies as errors requiring resolution.

4. **Calculate path durations** — Sum durations along each sequential chain from start to end. Identify the longest chain — this is the critical path.

5. **Flag critical path tasks** — Mark every task on the longest chain as CRITICAL. Any delay to these tasks delays the entire delivery.

6. **Identify float/slack** — For non-critical tasks, calculate how much delay they can absorb without affecting the end date. Label tasks as HIGH FLOAT, LOW FLOAT, or ZERO FLOAT (critical).

7. **Surface risks** — Call out tasks with:
   - Single points of failure (one owner, no backup)
   - External dependencies with no SLA
   - Long duration with no checkpoints

## Output Format

Produce a structured dependency log with these sections:

**CRITICAL PATH SUMMARY**
- Total critical path duration: [X days/hours]
- Number of critical tasks: [N]
- Projected delivery date (if start date known): [date]

**TASK DEPENDENCY TABLE**
| Task | Owner | Duration | Predecessors | Float | Status |
|------|-------|----------|--------------|-------|--------|
| [Task name] | [Owner] | [Xd] | [Task A, Task B] | [ZERO/LOW/HIGH] | [CRITICAL / parallel] |

**CRITICAL PATH SEQUENCE**
Step-by-step ordered list of only the critical tasks:
1. [Task A] → 2. [Task B] → 3. [Task C] → ... → [Final Deliverable]

**RISK FLAGS**
- [Task name]: [specific risk reason and recommended mitigation]

**PARALLEL TRACKS** (if applicable)
List non-critical tracks that run alongside the critical path, with their own duration and float window.

Keep the output scannable. Use plain language for task names. If duration data is missing, note it explicitly rather than estimating silently.
