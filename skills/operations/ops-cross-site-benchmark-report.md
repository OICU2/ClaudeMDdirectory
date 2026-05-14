---
name: ops-cross-site-benchmark-report
description: >
  Compares operational performance metrics across multiple locations or business units to identify underperforming sites and surface improvement opportunities. Use when someone says "compare our sites," asks about "which location is underperforming," wants to "benchmark across regions," needs a "cross-site performance report," or is trying to "identify our worst performing units." Produces a structured comparative analysis with ranked sites, gap analysis, and prioritized recommendations.
category: operations
tags: [benchmarking, multi-site, performance-analysis, operations, reporting]
author: community
---

# Cross-Site Benchmark Report

This skill generates a structured comparative performance report across multiple locations or business units, ranking sites against each other and against a benchmark to surface underperformers and actionable improvement priorities.

## Workflow

1. **Gather inputs** — Collect the following before proceeding:
   - List of sites/locations/business units to compare
   - Key performance metrics (e.g., throughput, cost per unit, uptime, defect rate, cycle time, revenue per headcount)
   - Time period for the analysis (e.g., Q3 2024, last 12 months)
   - Benchmark target (internal best performer, industry standard, corporate target, or average)
   - If data is not provided, ask the user to supply it as a table, CSV paste, or bullet list before continuing

2. **Normalize metrics** — For each metric, express performance as both raw value and percentage deviation from the benchmark. Flag direction (higher = better vs. lower = better) per metric.

3. **Score and rank sites** — Assign each site a composite score:
   - Weight metrics equally unless the user specifies priorities
   - Rank sites from best to worst overall
   - Identify the top quartile (leaders), middle two quartiles (average), and bottom quartile (laggards)

4. **Identify performance gaps** — For each underperforming site:
   - Calculate the absolute and percentage gap vs. the benchmark on each metric
   - Flag metrics where the gap exceeds 15% as critical gaps
   - Note if any site is an outlier (>2 standard deviations from the mean) on any metric

5. **Root cause prompts** — For each critical gap, list 2–3 likely operational drivers to investigate (e.g., staffing ratios, equipment age, process adherence, shift patterns). Do not assert causes as confirmed — frame as hypotheses.

6. **Prioritize recommendations** — Rank improvement actions by estimated impact × feasibility:
   - High impact, high feasibility → immediate action
   - High impact, low feasibility → strategic initiative
   - Low impact, high feasibility → quick win
   - Low impact, low feasibility → deprioritize

## Output Format

Produce the report in the following structure:

---

**Cross-Site Benchmark Report**
*Period: [time period] | Benchmark: [benchmark source] | Sites analyzed: [N]*

---

### Executive Summary
3–5 bullet points covering: top performer, worst performer, most common gap, and the single highest-priority action.

---

### Site Performance Scorecard
A markdown table with columns:
`Site | [Metric 1] | [Metric 2] | ... | Composite Score | Rank | Tier (Leader/Average/Laggard)`

---

### Gap Analysis
For each site in the Laggard tier, a sub-section:
- **[Site Name]** — Composite score: X | Rank: N of N
  - Critical gaps: [metric]: [value] vs benchmark [value] ([gap]%)
  - Hypothesized drivers: [2–3 bullet points]

---

### Prioritized Recommendations
Numbered list, highest priority first:
1. **[Action]** — Target site(s): [X] | Expected impact: [metric + magnitude] | Effort: Low/Medium/High

---

### Methodology Notes
- Benchmark used
- Metrics included and weighting
- Data limitations or caveats flagged by the user

---

Length: Concise enough for an operations leader to review in 5 minutes. Avoid narrative padding; use tables and bullets throughout.
