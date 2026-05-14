---
name: labor-efficiency-ratio-analysis
description: >
  Calculates the ratio of productive labor hours to total paid hours across teams or shifts to identify staffing inefficiencies. Use when someone asks about labor efficiency, wants to analyze workforce productivity ratios, needs to find staffing waste or overstaffing, is reviewing shift performance metrics, or wants to compare team productivity across departments.
category: operations
tags: [labor, workforce, efficiency, staffing, productivity]
author: community
---

# Labor Efficiency Ratio Analysis

This skill computes labor efficiency ratios (productive hours ÷ total paid hours) by team or shift and surfaces specific staffing inefficiencies with actionable recommendations.

## Analysis Workflow

1. **Collect required inputs** — Ask for: total paid hours per team/shift, productive hours (time on direct tasks), period of analysis, and team or shift identifiers. If data is partial, calculate what is possible and flag gaps.

2. **Calculate Labor Efficiency Ratio (LER)** for each unit:
   - Formula: `LER = Productive Hours ÷ Total Paid Hours × 100`
   - Productive hours = hours spent on direct, value-adding work
   - Total paid hours = all clocked hours including breaks, downtime, admin, wait time

3. **Benchmark each ratio** against these thresholds:
   - ≥ 85%: Efficient
   - 70–84%: Acceptable with room for improvement
   - 55–69%: Inefficient — investigate causes
   - < 55%: Critical — immediate review required

4. **Identify inefficiency patterns** — Cross-compare ratios across teams and shifts to detect:
   - Consistent low performers (systemic issue vs. one-off)
   - Shift-specific drops (scheduling or handoff problems)
   - Time-period trends (degradation over weeks/months)

5. **Diagnose root causes** using ratio gaps — flag likely causes such as overstaffing during low-demand windows, excessive admin burden, idle time from poor scheduling, or unclear task assignments.

6. **Rank inefficiencies by impact** — Multiply the efficiency gap (%) by total paid hours to calculate wasted hours per period per unit.

## Output Format

Produce a structured report with the following sections:

**Summary Table**
| Team/Shift | Total Paid Hrs | Productive Hrs | LER (%) | Status |
|---|---|---|---|---|
| [name] | [hrs] | [hrs] | [%] | Efficient / Acceptable / Inefficient / Critical |

**Top Inefficiencies (ranked by wasted hours)**
- List each underperforming unit with: LER%, wasted hours per period, and most likely root cause (1 sentence each)

**Recommendations**
- 3–5 specific, prioritized actions tied directly to the identified gaps (e.g., "Reduce overnight shift headcount by 2 on Tuesdays based on 48% LER and low demand data")

**Data Gaps (if any)**
- List any missing inputs and how they limit the analysis

Keep the report concise — no more than one page equivalent. Use plain numbers, no jargon beyond standard operations terminology.
