---
name: survey-item-response-distribution-audit
description: >
  Analyzes response frequency distributions across survey items to detect floor and ceiling effects that distort interpretation. Use when someone says their survey responses are skewed, asks about why respondents are clustering at one end of a scale, or wants to check whether their Likert items are capturing meaningful variance. Also triggers when someone mentions low response variability, compressed distributions, or needs to evaluate item performance before running statistical analyses.
category: research
tags: [survey, psychometrics, distribution-analysis, likert-scale, data-quality]
author: community
---

# Survey Item Response Distribution Audit

This skill examines frequency distributions for each survey item to identify floor effects (responses piling at the low end), ceiling effects (responses piling at the high end), and other distributional problems that reduce item utility and bias results.

## Audit Workflow

1. **Request the data structure.** Ask for response frequency counts or raw data per item, scale endpoints and labels, total N, and whether any reverse-coded items exist.

2. **Calculate distribution statistics per item.**
   - Compute mean, median, mode, standard deviation, skewness, and kurtosis for each item.
   - Calculate the percentage of responses at each scale point.
   - Flag items where ≥40% of responses fall on a single endpoint (floor or ceiling threshold).

3. **Classify each item by effect type.**
   - **Floor effect:** Mean ≤ 1.5 SD above the scale minimum, or >40% at the lowest response option.
   - **Ceiling effect:** Mean ≥ 1.5 SD below the scale maximum, or >40% at the highest response option.
   - **Bimodal:** Two distinct peaks; check for subgroup heterogeneity.
   - **Healthy variance:** Roughly normal or uniform spread without extreme endpoint clustering.

4. **Diagnose likely causes for flagged items.**
   - Social desirability bias (ceiling on positive traits, floor on negative).
   - Poor item wording (double-barreled, leading, or ambiguous phrasing).
   - Mismatched scale range (scale too narrow or too wide for the construct).
   - True population homogeneity (real absence of variance in the sample).

5. **Assess impact on downstream analyses.**
   - Ceiling/floor items suppress correlations (range restriction); note which analyses are affected.
   - Items with SD < 0.5 on a 5-point scale are typically non-informative and should be flagged for removal or revision.
   - Identify whether problematic items are within a scale that also relies on sum scores or factor analysis.

6. **Generate revision recommendations.**
   - For ceiling effects: suggest extending the positive end of the scale, adding more extreme positive options, or reframing the item negatively.
   - For floor effects: suggest reframing toward the positive pole, adjusting frequency anchors, or removing the item.
   - For bimodal items: recommend splitting analysis by subgroup or revising for clarity.

## Output Format

Produce a structured audit report with the following sections:

**Summary Table** — One row per item with columns: Item ID, Mean, SD, Skewness, % at floor, % at ceiling, Effect Flag (Floor / Ceiling / Bimodal / OK).

**Flagged Items Detail** — For each flagged item: item text, distribution chart (ASCII bar chart or description), effect classification, probable cause, and specific revision recommendation.

**Scale-Level Summary** — For multi-item scales, note what proportion of items are flagged and whether the scale retains sufficient variance for reliable scoring.

**Priority Action List** — Ranked list of items to revise or drop, with rationale ordered by severity of distributional problem.

Keep the report concise and scannable. Use plain language accessible to researchers without advanced psychometrics training. Flag items needing specialist review (e.g., items where true population homogeneity cannot be ruled out without additional data).
