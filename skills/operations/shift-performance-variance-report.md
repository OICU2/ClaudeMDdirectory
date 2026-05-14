---
name: shift-performance-variance-report
category: operations
description: >
  Analyzes and compares operational performance metrics across shifts or time periods to surface gaps, trends, and root causes. Use when someone says "our night shift is underperforming," asks about "differences between shifts," wants to "compare day and evening output," needs to "identify why production varies by shift," or requests a "shift performance breakdown."
tags: [operations, performance, analytics, manufacturing, workforce]
author: community
---

# Shift Performance Variance Report

This skill generates a structured comparative analysis of output quality, volume, and error rates across shifts or time periods, helping operations teams identify where performance gaps exist and why.

## Analysis Workflow

1. **Identify the comparison scope**
   - Clarify which shifts or time periods are being compared (e.g., Day/Swing/Night, Week 1 vs. Week 2, pre/post change)
   - Confirm the date range and whether data is provided or needs to be requested
   - Ask for any known context: staffing changes, equipment issues, policy updates

2. **Collect or interpret the input data**
   - Accept data in any format: tables, pasted CSV, bullet lists, or verbal descriptions
   - Extract or estimate these core metrics per shift: units produced, error/defect rate, rework rate, throughput per hour, downtime incidents
   - Note staffing levels, supervisors, or equipment assignments if available

3. **Calculate variance**
   - Compute absolute and percentage differences for each metric across shifts
   - Flag metrics where variance exceeds 10% as significant
   - Identify which shift is the baseline (highest volume, longest running, or explicitly stated)

4. **Diagnose root causes**
   - Cross-reference performance gaps with shift-specific factors: staffing tenure, time-of-day fatigue patterns, handoff quality, equipment allocation, supervisor coverage
   - Categorize each likely cause as: People, Process, Equipment, or Environment
   - Distinguish between structural causes (chronic) and situational causes (one-time)

5. **Prioritize findings**
   - Rank gaps by operational impact (cost, quality risk, safety implication)
   - Highlight quick wins vs. systemic issues requiring deeper intervention

## Output Format

Produce a structured report with the following sections:

**Summary** (3–5 sentences): Overall finding, which shift underperforms, and the most likely cause category.

**Performance Comparison Table**

| Metric | Shift A | Shift B | Shift C | Variance (High–Low) | Significant? |
|---|---|---|---|---|---|
| Units Produced | | | | | |
| Error Rate (%) | | | | | |
| Rework Rate (%) | | | | | |
| Throughput/hr | | | | | |
| Downtime (min) | | | | | |

**Key Gaps Identified** (bullet list): Each gap stated as: metric → affected shift → magnitude of difference.

**Root Cause Analysis** (grouped by People / Process / Equipment / Environment): 2–4 bullets per relevant category, each linking a specific factor to a specific metric gap.

**Recommended Actions** (numbered list, prioritized):
- State the action, the target shift, the expected metric impact, and effort level (Low/Medium/High)
- Include at least one quick win and one structural recommendation

**Data Gaps or Caveats**: List any missing data that limits confidence in the analysis, and what to collect next time.
