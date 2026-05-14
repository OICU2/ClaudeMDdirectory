---
name: ops-shift-overlap-cost-analysis
description: >
  Calculates the labor cost of overlapping shifts across teams and identifies opportunities to reduce redundant coverage hours. Use when someone says "our shifts are overlapping," asks about "redundant coverage costs," wants to "analyze shift scheduling inefficiencies," mentions "wasted labor hours between shifts," or needs to "find savings in our staffing schedule."
category: operations
tags: [scheduling, labor-cost, workforce, shifts, optimization]
author: community
---

# Shift Overlap Cost Analysis

This skill analyzes overlapping shift data to calculate redundant labor costs and surface specific scheduling changes that would reduce wasted coverage hours.

## Analysis Workflow

1. **Collect shift data** — Request team name, role/position, shift start time, shift end time, hourly rate, and headcount for each shift. Accept input as a table, CSV, or plain text list.

2. **Identify overlaps** — For each pair of consecutive or concurrent shifts within the same team or coverage area, calculate the overlap window in minutes and convert to decimal hours.

3. **Calculate overlap cost per pair** — Multiply overlap hours by the combined hourly rate of all staff present during the overlap window. Formula: `overlap_hours × (team_A_headcount × rate_A + team_B_headcount × rate_B)`.

4. **Aggregate totals** — Sum overlap costs across all shift pairs. Project to weekly and monthly totals using the shift frequency (daily, weekdays only, etc.).

5. **Rank by cost impact** — Sort all overlap instances from highest to lowest redundant cost.

6. **Flag optimization opportunities** — For each overlap exceeding 15 minutes or $50/day, generate a specific recommendation: stagger start times, reduce handoff headcount, shorten one shift, or consolidate roles.

7. **Apply constraints** — Before finalizing recommendations, ask if there are regulatory minimums, union rules, or safety requirements that mandate overlap. Exclude protected overlaps from savings projections.

## Output Format

Produce a structured report with the following sections:

**Summary Block**
- Total daily overlap cost (all teams combined)
- Projected weekly and monthly redundant labor cost
- Number of overlap instances found
- Estimated achievable savings (after removing protected overlaps)

**Overlap Detail Table**
| Team | Shift A | Shift B | Overlap Duration | Daily Overlap Cost | Frequency |
|------|---------|---------|------------------|--------------------|-----------|
One row per overlap pair, sorted highest cost first.

**Top Optimization Opportunities**
Numbered list of up to 5 specific recommendations, each including:
- Which shifts to adjust and by how much
- Estimated daily and monthly savings from that change
- Any tradeoffs or risks to flag

**Assumptions & Data Gaps**
Bullet list of any missing inputs assumed, rates estimated, or constraints not yet confirmed that could affect accuracy.

Keep the report concise — no padding. If input data is incomplete, ask targeted clarifying questions before proceeding rather than producing estimates with low confidence.
