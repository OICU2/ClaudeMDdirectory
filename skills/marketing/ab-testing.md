---
name: ab-testing
description: >
  Designs statistically rigorous A/B tests and analyzes results to improve conversion rates, engagement, and revenue. Use when someone wants to test a hypothesis about their product or marketing, asks how to compare two versions of a page or campaign, needs to know if a result is statistically significant, or wants to improve a metric through experimentation.
category: marketing
tags: [ab-testing, experimentation, statistics, conversion-optimization, analytics]
author: community
---

# A/B Testing Design and Analysis

This skill designs complete A/B test plans and interprets results with statistical rigor, activating whenever a user wants to run an experiment, compare variants, or validate a performance hypothesis.

## Test Design Workflow

1. **Define the hypothesis** — State it as: "Changing [X] will increase [metric] because [reason]." Reject vague goals like "make it better."

2. **Identify the primary metric** — One north-star metric per test (e.g., click-through rate, checkout completion, email open rate). Add 1-2 guardrail metrics to watch for negative side effects.

3. **Calculate sample size** — Use these inputs:
   - Baseline conversion rate (current performance)
   - Minimum detectable effect (MDE) — smallest improvement worth acting on
   - Statistical power: 80% (standard) or 90% (high-stakes)
   - Significance level: α = 0.05 (two-tailed)
   - Formula reference: n = 16σ²/δ² per variant (simplified for proportions)
   - Flag if the required sample size is unrealistic given traffic volume.

4. **Determine test duration** — Minimum 1-2 full business cycles (usually 2 weeks). Never stop early due to exciting early results. Account for day-of-week effects.

5. **Assign variants correctly** — Random assignment at the user level (not session). Confirm no overlap with other active experiments on the same element.

6. **Define stopping rules upfront** — Set the end date before launch. Only analyze results after hitting the pre-determined sample size.

## Result Analysis Workflow

1. **Check for data quality issues first** — Sample ratio mismatch (SRM), cookie churn, bot traffic, or instrumentation errors invalidate results.

2. **Calculate statistical significance** — Use a two-proportion z-test or chi-squared test for conversion rates. Report the p-value and confidence interval, not just "significant/not significant."

3. **Interpret the confidence interval** — Report as: "We are 95% confident the true effect is between [lower] and [upper] percentage points." A wide CI means the test was underpowered.

4. **Segment results** — Break down by device type, traffic source, and user segment. A winning overall result may lose for mobile users.

5. **Make a decision** — Apply this decision tree:
   - p < 0.05 AND positive effect AND no guardrail metric damage → Ship the winner
   - p < 0.05 AND negative effect → Kill the variant, investigate why
   - p ≥ 0.05 → Declare inconclusive, do not ship based on this test alone
   - Close result with large CI → Rerun with larger sample size

6. **Document learnings** — Record hypothesis, result, effect size, and next experiment regardless of outcome.

## Output Format

Produce one of two structured outputs depending on context:

**Test Design Plan:**
```
HYPOTHESIS: [If we change X, then Y will increase by Z% because...]
PRIMARY METRIC: [metric name + current baseline]
GUARDRAIL METRICS: [list]
VARIANTS: Control (describe) vs. Variant A (describe change)
REQUIRED SAMPLE SIZE: [n per variant] — based on [baseline]% baseline, [MDE]% MDE, 80% power
ESTIMATED DURATION: [X weeks] at [Y visitors/week]
RANDOMIZATION UNIT: [user/session/account]
```

**Results Analysis:**
```
TEST: [name]
RESULT: [Winner / No significant difference / Inconclusive]
CONTROL: [X]% conversion (n=[sample])
VARIANT: [X]% conversion (n=[sample])
OBSERVED LIFT: +[X]% relative / +[X]pp absolute
95% CONFIDENCE INTERVAL: [lower]pp to [upper]pp