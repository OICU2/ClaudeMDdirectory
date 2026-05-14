---
name: deal-age-to-discount-risk-model
description: >
  Analyzes pipeline deal age alongside discount history to identify deals at high risk of excessive concession pressure. Use when someone asks "which deals are likely to get discounted," wants to know if a stalled deal will require price cuts, or is reviewing aging pipeline for negotiation risk. Also activates when a rep is preparing for a deal review and needs to flag discount vulnerability, or when a manager asks why certain deals keep slipping.
category: sales
tags: [pipeline, discounting, deal-risk, forecasting, negotiation]
author: community
---

# Deal Age to Discount Risk Model

This skill scores pipeline deals based on age and discount history to surface which opportunities are most likely to face excessive concession pressure, and why.

## Risk Scoring Workflow

1. **Gather deal inputs** — Collect or request: deal name, days in current stage, total days in pipeline, original deal value, current deal value, number of discount events applied, and average discount percentage per event.

2. **Calculate Age Risk Score (0–40 points)**
   - Days in current stage: <14 days = 0, 14–30 = 10, 31–60 = 20, 61–90 = 30, >90 = 40
   - Add 5 bonus points if the deal has already slipped a close date at least once.

3. **Calculate Discount History Score (0–40 points)**
   - Number of discounts applied: 0 = 0, 1 = 10, 2 = 20, 3+ = 30
   - Average discount depth: <5% = 0, 5–10% = 5, 11–20% = 10, >20% = 10
   - Cap this category at 40 points.

4. **Calculate Stage Mismatch Penalty (0–20 points)**
   - Compare deal age to median stage duration benchmarks (use rep-provided benchmarks or default: Discovery 14d, Demo 21d, Proposal 30d, Negotiation 21d).
   - For each stage exceeded by >50% of benchmark: add 10 points, up to 20.

5. **Compute Total Risk Score**
   - Sum all three components: Age Risk + Discount History + Stage Mismatch.
   - Classify: 0–30 = Low Risk, 31–60 = Medium Risk, 61–80 = High Risk, 81–100 = Critical Risk.

6. **Identify root cause signals** — For each high or critical deal, map the primary driver:
   - Age-driven: deal is stalling, champion may be disengaged
   - Discount-driven: pattern of concessions suggests weak value positioning
   - Mismatch-driven: deal is stuck in wrong stage, process or stakeholder issue

7. **Generate recommended actions** — Assign one primary action per risk tier:
   - Low: monitor, no intervention
   - Medium: schedule executive check-in or ROI reinforcement call
   - High: requalify deal, assess if discount guard rails are needed, escalate to manager
   - Critical: consider deal reset, multi-thread to new stakeholder, or flag for pipeline review meeting

## Output Format

Produce a structured deal risk report with the following sections:

**Deal Risk Summary Table**
| Deal Name | Days in Stage | Total Pipeline Age | Discounts Applied | Avg Discount % | Risk Score | Risk Tier | Primary Driver |
(One row per deal provided)

**Top 3 At-Risk Deals**
For each: deal name, risk score, one-sentence diagnosis, and one specific recommended action.

**Portfolio Discount Pressure Indicator**
A single sentence summarizing overall pipeline health: percentage of deals at Medium risk or above and the most common risk driver across the set.

**Next Steps**
A bulleted list of 3–5 prioritized actions the rep or manager should take in the next 5 business days.

Length: concise — the full output should fit on one page. Avoid narrative padding. Use plain language a sales rep can act on immediately.
