---
name: marketing-team-capacity-to-campaign-load-matcher
description: >
  Maps planned campaign deliverables against team capacity by role and timeline to surface resource gaps and recommend prioritization or phasing adjustments. Use when someone says "we have too many campaigns running at once," asks about whether the team can handle the upcoming launch schedule, or wants to figure out who is overloaded this quarter. Also activate when someone needs to phase a campaign roadmap, balance workload across roles, or identify which projects need to be delayed or deprioritized due to capacity constraints.
category: marketing
tags: [capacity-planning, campaign-management, resource-allocation, team-operations, prioritization]
author: community
---

# Marketing Team Capacity-to-Campaign Load Matcher

This skill maps campaign deliverable requirements against available team capacity by role and timeline, surfaces resource gaps, and recommends concrete prioritization or phasing adjustments to keep execution realistic.

## Capacity Matching Workflow

### Step 1: Collect Campaign Inventory
Ask the user to provide or confirm the following for each planned campaign:
- Campaign name and type (launch, evergreen, seasonal, etc.)
- Start and end dates
- Key deliverables (e.g., landing page, email sequence, paid ads, social posts, blog articles, design assets)
- Estimated effort per deliverable (hours or T-shirt size: S/M/L/XL)
- Priority tier (P1 = must ship, P2 = high value, P3 = nice to have)

If effort estimates are missing, apply these defaults:
- Landing page: 16h (copy 6h + design 6h + dev 4h)
- Email (single): 6h (copy 3h + design 3h)
- Paid ad set (3 variants): 8h (copy 3h + design 5h)
- Social post set (5 posts): 4h (copy 2h + design 2h)
- Blog post (1,000–1,500 words): 6h (copy 5h + edit 1h)

### Step 2: Collect Team Capacity
For each relevant role, capture:
- Role name (e.g., copywriter, designer, paid media specialist, web developer, marketing manager)
- Number of people in that role
- Weekly available hours per person (default to 32h if not specified, accounting for meetings and overhead)
- Any known time-off, leave, or partial availability in the planning window
- Existing committed hours (ongoing campaigns, BAU tasks, support tickets)

Calculate **net available hours per role per week** = (people × weekly hours) − committed hours − leave adjustments.

### Step 3: Build the Load Map
For each week in the planning window:
1. Sum total required hours per role across all campaigns active that week.
2. Compare required hours against net available hours per role.
3. Flag any week where required hours exceed available hours by role — this is a **capacity gap**.
4. Calculate the **overload percentage**: (required − available) / available × 100.

### Step 4: Identify Bottleneck Roles
Rank roles by cumulative overload hours across the full planning window. The top overloaded roles are the critical path constraints.

### Step 5: Generate Recommendations
Apply these rules in order:

1. **Phase first**: If a P2 or P3 campaign overlaps with a P1 campaign and shares bottleneck roles, recommend pushing the lower-priority campaign's start date by 1–2 weeks until capacity frees up.
2. **Reduce scope second**: If phasing is not possible (hard deadline), recommend cutting specific deliverables (e.g., drop social post set, reduce ad variants from 5 to 3) to bring hours within capacity.
3. **Redistribute third**: If the same deliverable type can be handled by multiple roles (e.g., a marketing manager writing copy instead of a copywriter), flag the option with estimated effort delta.
4. **Hire or contract flag**: If cumulative overload across P1 campaigns alone exceeds 20% for any role over 4+ consecutive weeks, recommend a contractor or freelancer engagement with estimated hours needed.

## Output Format

Produce three sections:

### 1. Capacity Gap Summary Table
A markdown table with columns:
| Week | Role | Required Hours | Available Hours | Gap (hrs) | Overload % | Campaigns Contributing |

Include one row per role per week where a gap
