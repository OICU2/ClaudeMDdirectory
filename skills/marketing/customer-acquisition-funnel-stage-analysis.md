---
name: customer-acquisition-funnel-stage-analysis
description: >
  Analyzes drop-off rates at each funnel stage and identifies which transitions carry the highest revenue impact for prioritized optimization. Use when someone says "my funnel is leaking," asks about conversion bottlenecks, wants to know where customers are dropping off, needs to prioritize funnel improvements, or is trying to understand which funnel stage to fix first.
category: marketing
tags: [funnel-analysis, conversion-optimization, revenue-impact, drop-off, customer-acquisition]
author: community
---

# Customer Acquisition Funnel Stage Analysis

This skill diagnoses conversion losses across each funnel stage, quantifies the revenue impact of each drop-off point, and ranks optimization opportunities by expected return so teams know exactly where to focus first.

## Analysis Workflow

### 1. Collect Funnel Data
Request or identify the following for each stage:
- Stage name (e.g., Awareness → Interest → Consideration → Intent → Purchase)
- Volume entering each stage (visitors, leads, MQLs, SQLs, trials, conversions)
- Time period covered
- Average revenue per converted customer (or LTV if available)

If data is not provided, ask the user for it directly. Do not proceed with fabricated numbers.

### 2. Calculate Stage-Level Metrics
For each consecutive stage transition, compute:
- **Drop-off count**: volume_in − volume_out
- **Drop-off rate**: (drop-off count / volume_in) × 100
- **Pass-through rate**: (volume_out / volume_in) × 100

### 3. Quantify Revenue Impact Per Stage
For each drop-off point:
- **Lost revenue potential** = drop-off count × downstream conversion rate to purchase × average order value (or LTV)
- If full downstream rates are unavailable, use the overall funnel conversion rate as a proxy and flag this assumption explicitly.

### 4. Rank by Revenue Impact
Sort all transitions from highest to lowest lost revenue potential. This becomes the prioritization order for optimization efforts.

### 5. Identify Root Cause Hypotheses
For each of the top 3 highest-impact transitions, generate 2–3 specific, testable hypotheses about why users drop off. Base these on:
- Stage type (paid traffic → landing page = messaging mismatch, landing page → signup = friction or trust gap, trial → paid = value realization failure, etc.)
- Any context the user provides about their product, channel, or audience

### 6. Recommend Interventions
For each top-priority transition, suggest 1–2 concrete optimization actions tied directly to the root cause hypotheses (e.g., A/B test headline, add social proof, reduce form fields, improve onboarding email sequence).

## Output Format

Produce a structured report with the following sections:

**Funnel Summary Table**
| Stage | Volume In | Volume Out | Drop-off # | Drop-off % | Lost Revenue Potential |
|-------|-----------|------------|------------|------------|------------------------|
(one row per transition)

**Priority Ranking**
Numbered list of transitions ordered by lost revenue potential, highest first. Include the dollar figure and drop-off rate for each.

**Top 3 Optimization Opportunities**
For each:
- Transition name
- Lost revenue potential
- Root cause hypotheses (2–3 bullets)
- Recommended actions (1–2 bullets)

**Assumptions & Data Gaps**
Bullet list of any proxies used, missing data points, and what the user should track to improve future analyses.

Total length: 400–700 words depending on funnel complexity. Use tables and bullets — no prose paragraphs in the analysis sections.
