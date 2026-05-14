---
name: service-response-time-percentile-report
description: >
  Calculates p50, p90, and p99 response time percentiles from service logs or metrics data to surface tail-latency problems and inform SLA definitions. Use when someone says "analyze our response times," asks about "latency distribution," wants to "find slow requests," needs to "set SLA thresholds," or asks "what are our p99 numbers."
category: operations
tags: [latency, performance, sla, percentiles, observability]
author: community
---

# Service Response Time Percentile Report

This skill ingests raw response time data and produces a structured percentile breakdown (p50, p90, p99) that reveals tail-latency outliers and provides a data-driven basis for SLA threshold decisions.

## Analysis Workflow

1. **Ingest data**: Accept response times as a list/array of millisecond values, a CSV/TSV snippet, a log excerpt with timestamps and durations, or an aggregated histogram. Ask for clarification if the format is ambiguous.

2. **Parse and clean**: Strip non-numeric characters, convert units to a consistent base (milliseconds), and flag or exclude clearly invalid values (negatives, null, extreme outliers >3 standard deviations — note them, do not silently drop).

3. **Sort and compute percentiles**:
   - Sort all values ascending.
   - p50 = value at index `floor(0.50 × n)`
   - p90 = value at index `floor(0.90 × n)`
   - p99 = value at index `floor(0.99 × n)`
   - Also compute: min, max, mean, standard deviation, and sample count.

4. **Identify tail-latency signals**:
   - Flag if p99/p50 ratio > 5× (severe tail problem).
   - Flag if p90/p50 ratio > 3× (moderate tail problem).
   - Note whether the distribution appears bimodal by checking for a large gap between p50 and p90.

5. **SLA threshold recommendations**:
   - Recommend p90 as the primary SLA target for typical user-facing services.
   - Suggest p99 as a secondary "not to exceed" threshold.
   - If p99 exceeds 2000ms, flag as likely user-impacting.

6. **Segment if possible**: If data includes service name, endpoint, region, or time-of-day fields, break down percentiles per segment and highlight which segment has the worst tail latency.

## Output Format

Produce a structured report with these sections:

```
## Response Time Percentile Report

**Data Summary**
- Sample count: N
- Time range: [if available]
- Excluded/flagged values: N (reason)

**Percentile Breakdown**
| Metric | Value (ms) |
|--------|-----------|
| Min    | X         |
| p50    | X         |
| p90    | X         |
| p99    | X         |
| Max    | X         |
| Mean   | X         |
| StdDev | X         |

**Tail-Latency Assessment**
- p99/p50 ratio: X× — [Healthy / Moderate concern / Severe]
- p90/p50 ratio: X× — [Healthy / Moderate concern]
- Distribution shape: [Normal / Right-skewed / Bimodal]

**SLA Recommendations**
- Suggested p90 SLA target: Xms
- Suggested p99 ceiling: Xms
- [Any flags if thresholds exceed common limits]

**Segments** (if applicable)
| Endpoint/Service | p50 | p90 | p99 |
|-----------------|-----|-----|-----|

**Action Items**
- [2-4 specific, prioritized recommendations based on findings]
```

Keep the report concise — no more than one page. Use plain numbers with units. Do not pad with generic advice unrelated to the actual data.
