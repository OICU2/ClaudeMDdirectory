---
name: service-demand-pattern-heatmap-builder
description: >
  Analyzes service request data to build time-based heatmaps revealing demand patterns across hours, days, and seasons. Use when someone says "when are we busiest," asks about staffing based on demand, wants to visualize request volume patterns, needs to optimize shift scheduling, or is planning capacity around peak periods.
category: operations
tags: [heatmap, demand-forecasting, staffing, capacity-planning, service-operations]
author: community
---

# Service Demand Pattern Heatmap Builder

This skill transforms raw service request data into structured heatmap visualizations and actionable staffing recommendations, activating whenever someone needs to understand temporal demand patterns for operational planning.

## Analysis Workflow

### 1. Data Intake
- Ask for the data source: ticket logs, call records, booking timestamps, or manual counts
- Required fields: timestamp (date + time), request count or event flag, and optionally service type or channel
- Accept CSV, JSON, pasted table data, or described summaries
- Clarify the time range (minimum 4 weeks recommended for weekly patterns; 12 months for seasonal)

### 2. Dimension Selection
- Default heatmap axes: **Hour of Day (0–23) vs. Day of Week (Mon–Sun)**
- Offer secondary views if data supports:
  - Week of Year vs. Day of Week (seasonal patterns)
  - Hour of Day vs. Month (intraday + seasonal overlay)
  - Service type vs. Hour of Day (demand by channel)

### 3. Data Aggregation Rules
- Calculate **average request volume** per cell (not total, to normalize unequal period lengths)
- Flag cells with fewer than 3 data points as low-confidence
- Identify and note anomalies (holidays, outages, campaigns) that skew baselines
- Compute: peak cell, trough cell, peak-to-trough ratio, and top 3 peak windows

### 4. Heatmap Construction
- Represent intensity using a 5-level scale: Very Low / Low / Medium / High / Critical
- Assign thresholds based on percentile breaks: ≤20th, 21–40th, 41–60th, 61–80th, >80th
- Build the grid as a markdown table with emoji or text intensity markers
- Highlight the top 3 highest-demand windows with bold formatting

### 5. Pattern Interpretation
- Identify recurring peak blocks (e.g., Mon–Wed 9–11 AM)
- Detect dead zones (consistently <20th percentile)
- Flag shoulder periods suitable for flexible staffing
- Note any day-of-week asymmetry (e.g., Friday spikes, Monday surges)

### 6. Operational Recommendations
For each identified pattern, generate a specific recommendation across three areas:
- **Staffing**: shift start/end adjustments, overlap windows, on-call triggers
- **Equipment/Resources**: scheduling maintenance during troughs, readiness checks before peaks
- **Capacity Buffers**: recommended headroom percentage above average for peak cells

## Output Format

Produce the following sections in order:

**1. Heatmap Table**
A markdown grid (Day of Week × Hour of Day or selected dimensions) using this intensity legend:
- `░░` = Very Low | `▒▒` = Low | `▓▓` = Medium | `██` = High | `🔴` = Critical

**2. Key Metrics Summary** (bullet list)
- Peak window: day(s), hours, average volume
- Trough window: day(s), hours, average volume
- Peak-to-trough ratio
- Busiest single hour across all days
- Confidence note if data is sparse

**3. Pattern Narrative** (3–5 sentences)
Plain-language description of the dominant demand shape, any anomalies, and reliability of the pattern.

**4. Operational Recommendations Table**
| Area | Finding | Recommendation | Priority |
|------|---------|----------------|----------|
3–6 rows covering staffing, equipment, and capacity decisions, with priority rated High / Medium / Low.

**5. Data Gaps & Next Steps** (bullet list)
List missing data dimensions that would improve accuracy, and suggest a review cadence (e.g., refresh monthly, rerun after campaigns).
