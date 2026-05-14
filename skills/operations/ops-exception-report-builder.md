---
name: ops-exception-report-builder
description: >
  Automates the generation of structured exception reports that surface outlier events, threshold breaches, and anomalies in daily operational metrics for immediate review. Use when someone says "build me an exception report," asks to "flag anything outside normal range," wants to "summarize what went wrong today," needs to "identify threshold breaches in our metrics," or requests to "surface anomalies in operational data." Produces actionable, prioritized reports that highlight only what requires human attention.
category: operations
tags: [reporting, anomaly-detection, operations, metrics, alerting]
author: community
---

# Exception Report Builder

This skill analyzes operational metrics data and generates a prioritized exception report that surfaces outliers, threshold breaches, and anomalies requiring immediate review.

## Workflow

1. **Collect inputs** — Ask the user to provide: (a) the metrics data or dataset (pasted, uploaded, or described), (b) any known thresholds or acceptable ranges per metric, and (c) the reporting period (hourly, daily, weekly). If thresholds are not provided, infer reasonable statistical baselines using mean ± 2 standard deviations or flag values that deviate >20% from prior period.

2. **Classify each exception by severity**:
   - **CRITICAL** — Breach exceeds threshold by >50% or represents a complete failure (zero values, null spikes, system downtime)
   - **WARNING** — Breach is 20–50% outside expected range or shows a consistent directional trend over 3+ periods
   - **WATCH** — Breach is <20% outside range but notable given context or recency

3. **Identify root cause candidates** — For each flagged exception, note correlated metrics that moved simultaneously, time of onset, and whether the breach is isolated or systemic.

4. **Filter noise** — Exclude known scheduled events (maintenance windows, batch jobs) if the user identifies them. Do not flag values that are unusual but within stated acceptable variance.

5. **Rank exceptions** — Order by: (1) severity tier, (2) business impact area, (3) duration of breach.

6. **Draft recommended actions** — For each exception, provide one concrete next step (e.g., "Escalate to on-call engineer," "Review upstream data feed," "Confirm if scheduled job completed").

## Output Format

Produce a structured exception report with the following sections:

---

**EXCEPTION REPORT — [Reporting Period] | Generated [Date/Time]**

**Summary**
- Total metrics reviewed: [N]
- Exceptions flagged: [N] (Critical: N | Warning: N | Watch: N)
- Immediate action required: [Yes/No]

---

**CRITICAL EXCEPTIONS**
| # | Metric | Current Value | Expected Range | % Deviation | Onset Time | Recommended Action |
|---|--------|--------------|----------------|-------------|------------|--------------------|
| 1 | ...    | ...          | ...            | ...         | ...        | ...                |

**WARNING EXCEPTIONS**
[Same table format]

**WATCH ITEMS**
[Same table format]

---

**Correlated Patterns**
[2–4 bullet points noting metrics that moved together, suggesting a shared root cause]

**Excluded / Acknowledged**
[List any anomalies intentionally excluded and the reason]

---

Report length scales with data volume. For fewer than 10 metrics, the full report should fit on one page. For large datasets (50+ metrics), include an executive summary of the top 3 critical exceptions before the full tables.
