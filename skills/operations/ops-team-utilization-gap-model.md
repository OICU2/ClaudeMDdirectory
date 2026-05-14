---
name: ops-team-utilization-gap-model
description: >
  Calculates the difference between available team capacity and actual task output to identify underutilization or overload by role. Use when someone asks "how much of our team capacity are we actually using," wants to find out which roles are overloaded or sitting idle, needs to understand why output doesn't match headcount, or is trying to spot staffing gaps before a planning cycle. Also activates when someone says "we have the people but the work isn't getting done" or wants a utilization breakdown by role or department.
category: operations
tags: [capacity-planning, workforce-utilization, operations-analytics, team-management, resource-allocation]
author: community
---

# Team Utilization Gap Model

This skill calculates the gap between theoretical team capacity and actual measured output by role, surfacing overload, underutilization, and misalignment so operations leaders can act on staffing and workload distribution.

## Utilization Gap Calculation Workflow

### Step 1: Collect Capacity Inputs Per Role
Ask the user to provide or confirm the following for each role:
- Number of people in the role
- Standard working hours per week (default: 40)
- Utilization ceiling (percentage of time expected to be productive, e.g., 80%)
- **Formula:** Available Capacity = Headcount × Weekly Hours × Utilization Ceiling

### Step 2: Collect Actual Output Inputs Per Role
Gather actual output data, which may include:
- Hours logged to tasks (from project management tools)
- Tasks completed × average task duration
- Story points, tickets closed, or deliverables shipped with estimated effort
- If none available, prompt user to estimate percentage of time spent on core work
- **Formula:** Actual Output = Total productive hours or effort units consumed per week

### Step 3: Calculate the Utilization Gap Per Role
For each role:
- **Utilization Rate** = (Actual Output / Available Capacity) × 100
- **Gap** = Available Capacity − Actual Output
- Classify each role:
  - **Underutilized:** Utilization Rate < 70% — flag for workload rebalancing or scope expansion
  - **Healthy:** Utilization Rate 70%–90% — no immediate action needed
  - **At Risk:** Utilization Rate 91%–100% — monitor closely, risk of burnout or dropped work
  - **Overloaded:** Utilization Rate > 100% — immediate intervention required

### Step 4: Identify Root Cause Signals
For each gap found, prompt the user to consider:
- Is the gap due to unclear task assignment or ownership?
- Are there bottlenecks upstream blocking this role from consuming their capacity?
- Is the measurement of output incomplete (invisible work, meetings, admin)?
- Has headcount changed recently without corresponding workload adjustment?

### Step 5: Produce Prioritized Recommendations
Based on the gap classification, generate concrete next steps:
- Overloaded roles: redistribute tasks, add headcount, or reduce scope
- Underutilized roles: assign stretch projects, cross-train, or flag for role redesign
- At-risk roles: conduct 1:1 check-ins, audit upcoming deadlines
- Healthy roles: document what's working as a benchmark

## Output Format

Produce a structured utilization gap report with these sections:

**1. Summary Table (Markdown)**
| Role | Headcount | Available Capacity (hrs/wk) | Actual Output (hrs/wk) | Utilization Rate | Gap (hrs/wk) | Status |
|---|---|---|---|---|---|---|
| [Role] | [N] | [X] | [Y] | [Z%] | [±hrs] | [Underutilized / Healthy / At Risk / Overloaded] |

**2. Gap Narrative (3–5 sentences)**
Plain-language summary of which roles have the most critical gaps, whether the team overall is under or over capacity, and the magnitude of the problem.

**3. Root Cause Hypotheses (Bulleted List)**
2–4 likely causes of the gaps based on the data patterns provided.

**4. Recommended Actions (Numbered List)**
3–6 specific, prioritized actions tied to the roles with the largest or most urgent gaps. Each action should name the role, the intervention, and the expected outcome.

**5. Data Confidence Note**
One
