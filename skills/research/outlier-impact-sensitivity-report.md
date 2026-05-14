---
name: outlier-impact-sensitivity-report
description: >
  Reruns key analyses with and without identified outliers to quantify how much those data points influence overall findings and conclusions. Use when someone says "how much do outliers affect my results," asks about whether findings hold without extreme values, wants to test the robustness of their conclusions, needs to know if a few data points are driving everything, or wonders if their analysis would change without anomalies.
category: research
tags: [outliers, sensitivity-analysis, data-analysis, robustness, statistics]
author: community
---

# Outlier Impact & Sensitivity Report

This skill reruns analyses with and without outliers to produce a structured sensitivity report showing exactly how much extreme data points influence findings, and Claude will use it whenever someone needs to validate the robustness of statistical results.

## Outlier Sensitivity Workflow

1. **Identify outliers in scope** — Determine which outliers have already been flagged or apply standard detection methods (IQR method, Z-score >3, Cook's distance, DBSCAN isolation) to identify candidates. List each outlier with its value, variable, and detection reason.

2. **Document baseline analysis** — Record the full-inclusion results: key statistics (mean, median, regression coefficients, correlations, p-values, effect sizes), sample size, and primary conclusions before any removal.

3. **Rerun analysis without outliers** — Execute the identical analysis pipeline on the cleaned dataset. Apply the same transformations, models, and statistical tests used in the baseline.

4. **Compute delta metrics** — For each key metric, calculate:
   - Absolute change (cleaned value − baseline value)
   - Percent change: `((cleaned − baseline) / |baseline|) × 100`
   - Direction of change (inflated / deflated / reversed)
   - Statistical significance shift (did p-values cross thresholds?)

5. **Assess conclusion stability** — Classify each primary finding as:
   - **Stable**: Change <5%, conclusions unchanged
   - **Sensitive**: Change 5–20%, conclusions partially affected
   - **Outlier-driven**: Change >20% or conclusions reversed

6. **Run incremental removal** — If multiple outliers exist, remove them one at a time and in groups to identify which specific data points carry the most leverage.

7. **Formulate recommendations** — Based on sensitivity level, recommend whether to report with outliers, without, or both; flag if outliers appear to be data errors vs. legitimate extreme observations.

## Output Format

Produce a structured markdown report with these sections:

**Header**: Dataset name, analysis type, total N, number of outliers tested, date.

**Outlier Inventory Table**:
| ID | Variable | Value | Detection Method | Reason |

**Baseline vs. Cleaned Comparison Table**:
| Metric | Baseline (N=X) | Cleaned (N=Y) | Δ Absolute | Δ % | Sensitivity Level |

**Finding-by-Finding Stability Assessment**: Bullet list of each original conclusion with a STABLE / SENSITIVE / OUTLIER-DRIVEN badge and one sentence explaining the impact.

**Leverage Ranking**: Ordered list of which individual outliers caused the most change when removed alone.

**Recommendation Block**: 2–4 sentences stating whether conclusions are trustworthy as-is, what caveats to add, and how outliers should be handled in the final report.

**Visualization Suggestions**: List 2–3 specific plots (e.g., "scatter plot with outliers highlighted in red," "before/after coefficient plot") that would communicate sensitivity visually.

Total length: 400–800 words depending on dataset complexity. Use tables for all quantitative comparisons.
