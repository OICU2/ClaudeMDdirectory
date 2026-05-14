---
name: cycle-time-reduction-plan
description: >
  Analyzes each step in a core operational process to identify where time is lost and generates a ranked action plan to reduce overall cycle time. Use when someone says "our process is too slow," asks about reducing lead time or turnaround time, or wants to find bottlenecks in a workflow. Also triggers when someone mentions delays in production, fulfillment, onboarding, or any repeatable business process.
category: operations
tags: [cycle-time, process-optimization, bottlenecks, workflow, efficiency]
author: community
---

# Cycle Time Reduction Plan

This skill maps every step of an operational process, identifies where time is being lost, and produces a prioritized action plan to reduce total cycle time.

## Analysis Workflow

1. **Define the process scope**: Ask the user to name the process and its start and end points (e.g., "order placed" to "order delivered"). If they haven't provided this, request it before proceeding.

2. **Extract process steps**: List every discrete step in the process in sequence. If the user hasn't provided them, prompt for a description of the workflow, then infer steps from their description. Label each step with an ID (S1, S2, etc.).

3. **Estimate time per step**: For each step, record the reported or estimated duration. Separate *active time* (work actually being done) from *wait time* (idle time before or after the step). If data is unavailable, flag the step for measurement.

4. **Identify time loss categories**: For each step, classify the primary source of delay:
   - **Handoff lag** — time lost transferring between people, teams, or systems
   - **Queue buildup** — work waiting because of upstream overload
   - **Rework loops** — time spent correcting errors or re-approvals
   - **Manual bottleneck** — a single person or tool creating a throughput limit
   - **Process redundancy** — steps that duplicate effort or approvals
   - **External dependency** — delays caused by vendors, customers, or third parties

5. **Score each step**: Rate each step on two dimensions, 1–5:
   - **Time impact**: How much does this step contribute to total cycle time?
   - **Improvement feasibility**: How easy is it to reduce time here (considering cost, complexity, risk)?
   - Compute a **Priority Score** = Time Impact × Improvement Feasibility

6. **Generate ranked action plan**: Sort steps by Priority Score (highest first). For each, write one specific, actionable improvement recommendation. Tag each recommendation with effort level: Quick Win (days), Short-Term (weeks), or Strategic (months).

7. **Estimate cycle time reduction**: For each recommended action, provide a conservative estimate of time saved (absolute or percentage). Sum the potential total reduction.

## Output Format

Produce the following structured output:

---

**Process:** [Name and scope — start to end]
**Current Estimated Cycle Time:** [Total, if known]

### Step-by-Step Time Audit

| ID | Step Name | Active Time | Wait Time | Delay Category | Priority Score |
|----|-----------|-------------|-----------|----------------|----------------|
| S1 | ...       | ...         | ...       | ...            | ...            |

### Ranked Action Plan

**#1 — [Step Name] | Priority Score: X | Effort: [Quick Win / Short-Term / Strategic]**
- **Problem:** [One sentence describing the delay]
- **Action:** [Specific change to make — tool, process redesign, ownership reassignment, etc.]
- **Estimated Time Saved:** [X minutes / hours / days or X%]

*(Repeat for each step, ranked by priority score)*

### Summary

- **Steps analyzed:** [N]
- **Highest-impact bottleneck:** [Step name and delay category]
- **Total potential cycle time reduction:** [Conservative estimate]
- **Recommended first action:** [Single most impactful change to make immediately]

---

If process data is incomplete, flag missing information explicitly and provide conditional recommendations based on the most likely scenarios.
