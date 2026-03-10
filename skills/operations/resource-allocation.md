---
name: resource-allocation
description: >
  Distributes people, time, and budget across competing priorities using structured analysis and trade-off reasoning. Use when someone says "we don't have enough resources," asks about prioritizing projects, or wants to figure out how to staff a roadmap. Also activates when someone needs to decide what to cut, how to allocate a budget across teams, or how to balance workload across a quarter.
category: operations
tags: [resource-planning, prioritization, budgeting, capacity-planning, trade-offs]
author: community
---

# Resource Allocation Skill

This skill helps Claude analyze competing demands for people, time, and money, then produce a concrete allocation plan with explicit trade-offs and rationale.

## Allocation Workflow

1. **Inventory resources** — Clarify what is available: headcount (by role/skill), time horizon, and total budget. If not provided, ask for these before proceeding.

2. **List all demands** — Enumerate every project, initiative, or task competing for resources. Extract or ask for: priority level, required effort (person-weeks or dollars), deadline, and strategic value.

3. **Score each demand** — Evaluate each item on three dimensions:
   - **Impact**: How much does this move a key metric or strategic goal? (High / Medium / Low)
   - **Urgency**: Is there a hard deadline or dependency? (Hard / Soft / None)
   - **Effort**: What does it actually cost in people, time, or money? (estimate in concrete units)

4. **Apply an allocation framework** — Default to this order unless the user specifies otherwise:
   - Must-do first: Hard deadlines, compliance, blocking dependencies
   - High-impact next: Items with strong ROI relative to cost
   - Defer or cut: Low-impact items that consume disproportionate resources
   - Flag under-resourced items: Anything that cannot be fully staffed but cannot be dropped

5. **Identify conflicts and trade-offs** — Explicitly name every case where:
   - Two priorities compete for the same person or skill
   - The budget cannot cover all high-priority items
   - A timeline assumption is unrealistic given capacity

6. **Propose the allocation** — Assign specific resources to specific priorities. State what is fully funded, partially funded, deferred, or cut. Never leave resources unassigned or priorities unaddressed without explanation.

7. **Stress-test the plan** — Flag risks: single points of failure, overloaded individuals, buffer assumptions, and what happens if one estimate is wrong by 25%.

## Output Format

Produce a structured allocation report with these sections:

**Resource Summary**
- Available: [list people by role, total hours or FTEs, budget amount]
- Time horizon: [dates or sprint count]

**Priority Stack**
A ranked table with columns: Priority | Item | Effort Required | Assigned Resources | Status (Fully Funded / Partial / Deferred / Cut)

**Allocation Map**
For each resource (person, team, or budget line): what they are assigned to, percentage of capacity, and any over-allocation flags.

**Trade-off Log**
Bullet list of every significant decision made and what was sacrificed to make it. Be explicit — "We deferred X to staff Y because Z."

**Risks and Flags**
Bullet list of assumptions that could break the plan, with suggested mitigations.

Keep the output scannable. Use tables and bullets. Avoid paragraphs unless explaining a non-obvious decision. Total length should match complexity — a 3-project allocation needs 1 page; a 15-project roadmap may need 3.