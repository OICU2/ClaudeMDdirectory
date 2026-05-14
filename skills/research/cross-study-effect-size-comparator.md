---
name: cross-study-effect-size-comparator
category: research
description: >
  Extracts and normalizes reported effect sizes across multiple studies onto a common scale so findings can be directly compared. Use when someone wants to compare results across studies, asks how findings stack up against each other, needs to synthesize effect sizes from different papers, wants to know if one intervention works better than another based on published research, or is trying to make sense of conflicting results across the literature.
tags: [meta-analysis, effect-sizes, statistics, research-synthesis, quantitative]
author: community
---

# Cross-Study Effect Size Comparator

This skill extracts effect size metrics from multiple studies, converts them to a common scale (Cohen's d), and produces a structured comparison table so findings can be evaluated side by side.

## Conversion Workflow

### 1. Extract Raw Effect Sizes
For each study provided, identify and record:
- The reported metric (r, d, η², f, OR, RR, β, t, F, χ², or raw means/SDs)
- Sample size(s) per group
- Study label (author, year, or user-supplied name)
- Direction of effect (positive/negative/unspecified)

### 2. Convert All Metrics to Cohen's d
Apply the appropriate conversion formula for each metric type:

| Input Metric | Conversion Formula |
|---|---|
| Pearson r | d = 2r / √(1 − r²) |
| η² (eta-squared) | d = 2√(η² / (1 − η²)) |
| Cohen's f | d = 2f |
| Odds Ratio (OR) | d = ln(OR) × (√3 / π) |
| t-statistic | d = t × √(1/n₁ + 1/n₂) |
| F-statistic (2 groups) | d = √(F × (1/n₁ + 1/n₂)) |
| Raw means/SDs | d = (M₁ − M₂) / SD_pooled |

Preserve the sign of the effect. If conversion is not possible due to missing data, flag the cell as `[insufficient data]`.

### 3. Apply Magnitude Labels
Assign a standardized label to each converted d value using Cohen's conventional benchmarks:

- |d| < 0.20 → Negligible
- 0.20 ≤ |d| < 0.50 → Small
- 0.50 ≤ |d| < 0.80 → Medium
- |d| ≥ 0.80 → Large

### 4. Flag Comparability Issues
After conversion, check for and note:
- **Population mismatch**: Studies used different participant groups
- **Outcome mismatch**: Different instruments measuring nominally the same construct
- **Direction ambiguity**: Positive d means different things across studies
- **Unreported variance**: Conversion was estimated or assumed
- **Extreme sample size disparity**: n < 20 in any cell inflates d

## Output Format

Produce three sections:

**Section 1 — Comparison Table**
A markdown table with columns:
`Study | Original Metric | Original Value | n | Cohen's d | Magnitude | Notes`

**Section 2 — Ranked Summary**
A plain-language ranking from largest to smallest effect, one sentence per study, e.g.:
> "Smith et al. (2021) showed the strongest effect (d = 1.12, Large), followed by Jones & Lee (2019) (d = 0.47, Small)."

**Section 3 — Comparability Assessment**
2–5 bullet points identifying any flags raised in Step 4. If no flags, write "No major comparability concerns identified." Do not omit this section.

Keep total output under 600 words unless more than 6 studies are being compared.
