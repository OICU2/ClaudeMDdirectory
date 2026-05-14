---
name: team-capacity-utilization-tracking
description: >
  Measures and reports on team member workload distribution to surface over-allocation, idle capacity, and bottlenecks in real time. Use when someone says "who has bandwidth right now," asks about "team utilization," wants to "check if anyone is overloaded," needs to "see workload distribution," or is trying to "find capacity for a new project."
category: operations
tags: [capacity-planning, workload, resource-management, team-ops, bottlenecks]
author: community
---

# Team Capacity Utilization Tracking

This skill analyzes and reports on team member workload distribution to identify over-allocation, idle capacity, and bottlenecks, activating whenever someone needs a real-time view of who has bandwidth or where the team is stretched thin.

## Capacity Assessment Workflow

1. **Collect input data** — Gather the following for each team member:
   - Assigned tasks or projects with estimated hours per week
   - Stated or assumed weekly available hours (default: 40h, adjust for part-time)
   - Any flagged blockers, dependencies, or on-hold work
   - Role or function (to identify cross-functional bottlenecks)

2. **Calculate utilization per person** — For each team member:
   - Utilization % = (Assigned Hours / Available Hours) × 100
   - Flag status:
     - **Under-utilized**: < 60% — idle capacity available
     - **Balanced**: 60–85% — healthy load with buffer
     - **At risk**: 86–95% — limited flexibility, monitor closely
     - **Over-allocated**: > 95% — immediate attention required

3. **Identify bottlenecks** — Flag anyone who:
   - Is the sole owner of a blocking dependency
   - Has > 2 projects waiting on their output
   - Is over-allocated AND on the critical path of active work

4. **Surface idle capacity** — List team members under 60% utilization with:
   - Available hours per week
   - Current skill set or role
   - Suggested reallocation opportunities if context is provided

5. **Handle missing data** — If hours are not provided:
   - Ask for task count and rough time estimates per task
   - Or use T-shirt sizing (S=4h, M=8h, L=16h, XL=32h) as a fallback

6. **Flag risks proactively** — Note if:
   - More than 30% of the team is over-allocated (systemic overload)
   - A single person is a bottleneck across 3+ workstreams
   - No one has capacity to absorb a new initiative

## Output Format

Produce a structured report with the following sections:

---

**Team Capacity Report**
*As of: [date or "current snapshot"]*

**Summary**
- Total team members analyzed: X
- Over-allocated: X (list names)
- At risk: X (list names)
- Balanced: X
- Under-utilized: X (list names)
- Available capacity this week: ~Xh across team

**Individual Breakdown**
| Name | Role | Assigned Hours | Available Hours | Utilization % | Status |
|------|------|---------------|-----------------|---------------|--------|
| ... | ... | ... | ... | ...% | 🔴 / 🟡 / 🟢 / ⚪ |

Use: 🔴 Over-allocated, 🟡 At risk, 🟢 Balanced, ⚪ Under-utilized

**Bottlenecks**
- [Name]: [reason — e.g., "sole owner of X, blocking 3 workstreams, 102% utilized"]

**Available Capacity**
- [Name]: ~Xh/week free | Role: [role] | Good fit for: [suggestion if context given]

**Recommendations**
- [1–3 specific, actionable suggestions — e.g., "Reassign task Y from Alice to Bob who has 12h free," or "Defer project Z until Q2 to relieve over-allocation on the backend team"]

---

Keep the report scannable. Use the table for all members, bold critical names, and limit recommendations to the top 3 highest-impact actions.
