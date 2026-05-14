---
name: sales-qualified-opportunity-scoring
description: >
  Builds a weighted scoring model to evaluate inbound and pipeline opportunities against predefined fit criteria and buying signals for prioritization. Use when someone says "help me prioritize my pipeline," asks about qualifying a lead or opportunity, wants to score deals based on fit, needs to figure out which opportunities to focus on, or is trying to rank prospects by likelihood to close.
category: sales
tags: [lead-scoring, pipeline-management, opportunity-qualification, sales-prioritization, buying-signals]
author: community
---

# Sales Qualified Opportunity Scoring

This skill builds a structured, weighted scoring model to evaluate sales opportunities against fit criteria and buying signals so Claude can help reps and managers prioritize deals with the highest win probability.

## Scoring Workflow

### Step 1: Gather Opportunity Data
Ask the user for the following inputs (accept partial data and note gaps):
- Company: size, industry, revenue, geography
- Contact: title, seniority, decision-making authority
- Inbound signals: source, intent data, content consumed, demo requested
- Engagement: response rate, meetings held, champion identified
- Timeline: stated urgency, budget cycle, competitive situation
- Fit: use case match, technical requirements, existing stack

### Step 2: Apply the Weighted Scoring Model

Score each dimension 0–10, then multiply by the assigned weight:

| Dimension | Weight | What to Evaluate |
|---|---|---|
| Ideal Customer Profile (ICP) Fit | 25% | Industry, company size, revenue band, geography match |
| Decision-Maker Access | 20% | Economic buyer identified and engaged (not just champion) |
| Budget Confirmed | 20% | Explicit budget, fiscal cycle alignment, or strong proxy signals |
| Urgency / Timeline | 15% | Active initiative, stated deadline, or triggering event |
| Buying Signals | 10% | Demo request, pricing page visits, inbound inquiry, RFP issued |
| Competitive Position | 10% | Incumbent present, sole vendor, or open evaluation |

**Weighted Score = Sum of (Raw Score × Weight) for each dimension**

### Step 3: Classify the Opportunity

| Weighted Score | Tier | Recommended Action |
|---|---|---|
| 8.0 – 10.0 | Tier 1 — Hot | Immediate rep attention, executive sponsor, fast-track deal |
| 6.0 – 7.9 | Tier 2 — Warm | Active nurture, qualify deeper, schedule next meeting |
| 4.0 – 5.9 | Tier 3 — Developing | Low-touch nurture, revisit in 30–60 days |
| 0 – 3.9 | Tier 4 — Disqualify | Remove from active pipeline or send to long-term drip |

### Step 4: Identify Score Gaps and Next Actions
- Flag any dimension scoring below 5 as a risk factor
- For each risk factor, suggest a specific qualification question or action to improve the score
- Note which dimensions have missing data and mark them as assumptions

### Step 5: Handle Multiple Opportunities
If the user provides multiple deals:
- Score all deals using the same model
- Rank them by weighted score
- Highlight the top 3 and explain why they outrank others

## Output Format

Produce a structured scorecard for each opportunity:

---
**Opportunity:** [Company Name / Deal Name]

**Scoring Breakdown:**
| Dimension | Raw Score (0–10) | Weight | Weighted Score |
|---|---|---|---|
| ICP Fit | X | 25% | X |
| Decision-Maker Access | X | 20% | X |
| Budget Confirmed | X | 20% | X |
| Urgency / Timeline | X | 15% | X |
| Buying Signals | X | 10% | X |
| Competitive Position | X | 10% | X |
| **TOTAL** | — | 100% | **X.X / 10** |

**Tier:** [Tier 1 / 2 / 3 / 4] — [Hot / Warm / Developing / Disqualify]

**Top Risk Factors:**
- [Dimension]: [Specific reason for low score]

**Recommended Next Actions:**
1. [Specific
