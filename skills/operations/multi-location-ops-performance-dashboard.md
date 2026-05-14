---
name: multi-location-ops-performance-dashboard
description: >
  Aggregates and normalizes operational KPIs across multiple locations into a single comparative dashboard for leadership review. Use when someone says "compare performance across our locations," asks about "how are our sites doing relative to each other," or wants to "roll up metrics from all our branches," needs a "multi-site operations summary," or requests a "leadership dashboard for all locations."
category: operations
tags: [dashboard, kpi, multi-location, benchmarking, operations]
author: community
---

# Multi-Location Operations Performance Dashboard

This skill collects, normalizes, and formats operational KPIs from multiple locations into a structured comparative dashboard suitable for leadership review.

## Workflow

1. **Gather location inventory** — Ask the user to confirm the full list of locations/sites to include. If already provided, proceed. Clarify any naming inconsistencies (e.g., "Store 12" vs. "Chicago North").

2. **Identify KPI set** — Confirm which metrics to include. Default to these if not specified:
   - Throughput / volume (units, transactions, or orders)
   - Revenue or cost per unit
   - Utilization rate (capacity used vs. available)
   - Quality or error rate (defects, complaints, returns)
   - Staffing efficiency (output per headcount or labor hours)
   - On-time delivery or SLA compliance rate

3. **Collect raw data** — Request data per location per KPI. Accept varied formats (tables, bullet lists, CSV-style text). If data is missing for a location/metric, flag it as `N/A — data not provided` rather than skipping it silently.

4. **Normalize for fair comparison** — Adjust for scale differences where applicable (e.g., per-unit or percentage-based metrics rather than raw totals when locations differ significantly in size). Note any normalization applied.

5. **Calculate benchmarks** — Compute the following across all locations for each KPI:
   - Network average
   - Top performer (highest or lowest depending on metric direction)
   - Bottom performer
   - Variance from average (absolute and percentage) per location

6. **Flag outliers and risks** — Identify any location that is >15% below the network average on two or more KPIs. Label these as **At-Risk**. Identify any location exceeding average on all KPIs as **Top Performer**.

7. **Summarize period and data freshness** — Note the reporting period and whether data sources are consistent across locations. Flag mixed time periods clearly.

## Output Format

Produce the dashboard in three sections:

---

### Section 1: Executive Summary (3–5 bullet points)
- Overall network health in one sentence
- Top-performing location and standout metric
- At-risk location(s) and primary concern
- One cross-network trend or anomaly worth leadership attention

---

### Section 2: Comparative KPI Table
Render a markdown table with:
- Rows = Locations
- Columns = Each KPI + a final "vs. Network Avg" delta column
- Bold the top performer per column
- Mark at-risk cells with ⚠️
- Include a **Network Average** row at the bottom

Example structure:
| Location | Throughput | Utilization % | Error Rate | Labor Efficiency | vs. Avg |
|---|---|---|---|---|---|
| Site A | 4,200 | 87% | 1.2% | 94 units/hr | +8% |
| **Site B** | **5,100** | **92%** | **0.8%** | **110 units/hr** | **+22%** |
| Site C ⚠️ | 2,800 | 61% | 3.4% | 71 units/hr | -18% |
| Network Avg | 4,033 | 80% | 1.8% | 92 units/hr | — |

---

### Section 3: Location Snapshots (one per location)
For each location, provide:
- **Status:** Top Performer / On Track / Watch / At-Risk
- **Strengths:** 1–2 metrics where this location leads
- **Gaps:** 1–2 metrics where this location trails the average
- **Recommended Action:** One specific, actionable next step for leadership (e.g., "Schedule operational audit," "Share
