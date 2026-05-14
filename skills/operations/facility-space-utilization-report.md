---
name: facility-space-utilization-report
description: >
  Analyzes workspace occupancy data to identify underutilized areas, peak usage patterns, and layout optimization opportunities. Use when someone says "our office space isn't being used efficiently," asks about space utilization or occupancy rates, wants to understand which rooms or desks go unused, needs to justify real estate decisions, or is looking to optimize their floor plan or seating capacity.
category: operations
tags: [facilities, space-planning, occupancy, real-estate, workplace]
author: community
---

# Facility Space Utilization Report

This skill generates a structured analysis of workspace occupancy data to surface underused areas, peak demand windows, and actionable recommendations for layout or capacity changes.

## Analysis Workflow

1. **Gather input data** — Ask the user to provide one or more of the following: badge/access log exports, desk booking system reports, sensor data CSVs, calendar/room reservation data, or manual headcount observations. Accept raw numbers if formal data is unavailable.

2. **Define scope** — Clarify the facility scope (full building, single floor, specific zones), the time range (daily, weekly, monthly, quarterly), and the target occupancy benchmark (industry standard is 70–80% for offices).

3. **Calculate utilization metrics** — For each space type (open desks, private offices, conference rooms, collaboration zones, amenity spaces):
   - Average occupancy rate = (actual occupancy / total capacity) × 100
   - Peak occupancy window (day of week + time of day)
   - Low utilization periods (below 40% threshold)
   - Vacancy hours per week

4. **Identify patterns** — Flag spaces consistently below 40% utilization, detect days or shifts with demand spikes above 90%, compare zone-by-zone performance, and note mismatches between space type availability and actual usage behavior (e.g., high conference room demand vs. low desk usage).

5. **Segment findings** — Group spaces into three tiers:
   - **Critical underuse** (< 40% average utilization)
   - **Acceptable use** (40–70%)
   - **At or over capacity** (> 70%, or consistently queued)

6. **Generate recommendations** — For each underused area, propose at least one concrete action: repurpose, consolidate, sublease, convert to different space type, or adjust booking policy. For over-capacity areas, propose expansion, hot-desking policies, staggered scheduling, or overflow zones.

## Output Format

Produce a report with the following sections:

**Executive Summary** (3–5 sentences): Overall utilization rate, biggest inefficiency, top recommendation.

**Utilization Summary Table**:
| Space | Capacity | Avg Occupancy | Peak Window | Utilization % | Tier |
|-------|----------|---------------|-------------|----------------|------|

**Key Findings** (bullet list, 4–8 items): Specific patterns, anomalies, and underperforming zones with supporting numbers.

**Peak Usage Analysis** (1 short paragraph per space type): Describe when demand is highest and whether supply meets it.

**Optimization Recommendations** (numbered list): Each item includes the target space, the problem, the proposed action, and the estimated capacity or cost impact where calculable.

**Quick Wins vs. Long-Term Changes**: Split recommendations into actions achievable within 30 days vs. those requiring capital investment or lease decisions.

Report length: 400–800 words plus the summary table. Use plain language suitable for both facilities managers and executive stakeholders.
