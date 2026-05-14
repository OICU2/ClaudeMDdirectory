---
name: shift-utilization-gap-report
description: >
  Analyzes scheduled versus actual shift hours to identify underutilization patterns and recommend staffing adjustments. Use when someone says "we're overstaffed on certain shifts," asks about shift efficiency or labor utilization, wants to find gaps between planned and actual hours worked, needs to optimize their shift scheduling, or is reviewing workforce productivity metrics.
category: operations
tags: [staffing, scheduling, workforce, utilization, labor-analytics]
author: community
---

# Shift Utilization Gap Report

This skill generates a structured analysis of scheduled versus actual shift hours, surfaces underutilization patterns by role, shift, or time period, and produces concrete staffing adjustment recommendations.

## Analysis Workflow

1. **Collect input data** — Request or confirm availability of: scheduled hours per shift (by role/team/location), actual hours worked (clock-in/out records), date range, and any known exceptions (holidays, special events, unplanned absences).

2. **Calculate utilization rate** — For each shift segment, compute:
   - Utilization % = (Actual Hours / Scheduled Hours) × 100
   - Gap Hours = Scheduled Hours − Actual Hours
   - Flag any shift with utilization below 75% as underutilized; below 50% as critically underutilized.

3. **Segment the data** — Break down gaps by:
   - Day of week and time block (morning/afternoon/evening/overnight)
   - Role or department
   - Location (if multi-site)
   - Recurring vs. one-off gaps (patterns appearing in ≥3 consecutive weeks are recurring)

4. **Identify root causes** — For each significant gap cluster, assess likely causes from available data:
   - Chronic overscheduling for low-demand periods
   - High no-show or early-departure rates
   - Seasonal or cyclical demand misalignment
   - Role-specific attrition or availability constraints

5. **Generate recommendations** — For each identified pattern, produce a specific, actionable adjustment:
   - Reduce scheduled headcount by X for the identified shift window
   - Convert full shifts to on-call or split shifts for low-utilization blocks
   - Shift headcount from underutilized windows to high-demand periods
   - Flag roles needing revised availability agreements

6. **Quantify impact** — Estimate potential savings or efficiency gains per recommendation:
   - Hours recovered per week/month
   - Labor cost impact (if hourly rates are provided)
   - Coverage risk level for each proposed reduction (Low / Medium / High)

## Output Format

Produce a report with the following sections:

**Summary Block** (3–5 bullet points)
- Overall utilization rate across the analysis period
- Number of shifts flagged as underutilized / critically underutilized
- Top 2–3 gap patterns identified
- Estimated total gap hours per week

**Gap Table**
A markdown table with columns: Shift Segment | Role/Dept | Scheduled Hrs | Actual Hrs | Utilization % | Gap Hrs | Pattern (Recurring/One-off)

**Root Cause Notes**
Short paragraph (2–4 sentences) per major gap cluster explaining likely drivers.

**Recommendations Table**
A markdown table with columns: Shift Segment | Recommended Action | Estimated Weekly Hours Saved | Coverage Risk | Priority (High/Med/Low)

**Caveats & Data Gaps**
Bullet list of any missing data, assumptions made, or factors that could affect accuracy (e.g., incomplete clock-out records, excluded roles).

Report length: concise — no narrative padding. Tables preferred over prose wherever data is structured.
