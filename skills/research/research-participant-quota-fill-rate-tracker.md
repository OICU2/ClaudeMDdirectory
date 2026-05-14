---
name: research-participant-quota-fill-rate-tracker
description: >
  Monitors recruitment progress across defined quota cells and projects completion likelihood within the active fieldwork window. Use when someone asks about quota fill rates, wants to check if recruitment targets will be met, is tracking participant recruitment progress, needs to see which demographic cells are behind schedule, or wants to forecast whether fieldwork will close on time.
category: research
tags: [recruitment, quotas, fieldwork, tracking, projections]
author: community
---

# Quota Fill Rate Tracker

Calculates fill rates per quota cell, flags at-risk segments, and projects whether all targets will be met before the fieldwork deadline.

## Quota Tracking Workflow

1. **Collect quota inputs**: Gather the quota plan — each cell's target n, demographic definition (age, gender, region, etc.), fieldwork start date, fieldwork end date, and current completes per cell.

2. **Calculate fill rate per cell**: For each cell, compute:
   - Fill rate % = (current completes / target n) × 100
   - Days elapsed = today − fieldwork start date
   - Days remaining = fieldwork end date − today
   - Daily completion rate = current completes / days elapsed

3. **Project final completes**: For each cell:
   - Projected total = current completes + (daily completion rate × days remaining)
   - Projected fill rate % = (projected total / target n) × 100

4. **Flag risk status per cell**:
   - 🟢 On Track: projected fill rate ≥ 100%
   - 🟡 At Risk: projected fill rate 75–99%
   - 🔴 Off Track: projected fill rate < 75%
   - ✅ Complete: current completes ≥ target n

5. **Identify bottlenecks**: Sort cells by projected fill rate ascending. Note which cells are furthest from target and calculate how many additional daily completes are needed to close the gap.

6. **Overall project status**: Compute total completes vs. total target across all cells. Flag if any single cell's failure would break overall quota requirements.

7. **Recommend actions**: For each at-risk or off-track cell, suggest concrete next steps — boost incentives, expand screener criteria, add recruitment channels, extend fieldwork, or reallocate budget.

## Output Format

Produce a structured report with these sections:

**Quota Fill Rate Summary Table**
| Cell | Definition | Target n | Completes | Fill Rate % | Projected Final | Projected % | Status |
Include one row per quota cell, sorted by status (Off Track → At Risk → On Track → Complete).

**Overall Project Status**
- Total target, total completes, overall fill rate, projected overall fill rate, fieldwork days remaining
- Single-line verdict: whether the project is on track to close on time

**At-Risk & Off-Track Cells — Action Plan**
Bulleted list per flagged cell: what's needed daily, how many more completes required, and 2–3 specific recruitment actions.

**Assumptions & Caveats**
Note any cells with fewer than 3 days of data (projections unreliable), weekend effects, or missing inputs.

Keep the report scannable. Use the emoji status indicators consistently. If data is missing for any cell, state what is needed before projections can be made.
