---
name: influencer-performance-scorecard
description: >
  Evaluates influencer campaign results by tracking reach, engagement rate, conversions, and cost-per-result against industry benchmarks. Use when someone says "how did our influencer campaign perform," asks about analyzing influencer ROI, wants to score or grade an influencer partnership, needs to compare campaign results to benchmarks, or is deciding whether to renew an influencer contract.
category: marketing
tags: [influencer-marketing, campaign-analytics, performance-measurement, ROI, social-media]
author: community
---

# Influencer Performance Scorecard

This skill produces a structured performance scorecard for influencer campaigns by evaluating key metrics against benchmarks and delivering a clear, actionable grade with recommendations.

## Evaluation Workflow

1. **Collect campaign inputs** — Ask for or extract: platform(s), influencer tier (nano/micro/macro/mega), total spend, impressions/reach, engagements (likes, comments, shares, saves), clicks, conversions, and campaign goal (awareness, engagement, or conversion).

2. **Calculate core metrics**
   - Engagement Rate (ER) = (Total Engagements / Reach) × 100
   - Cost Per Engagement (CPE) = Total Spend / Total Engagements
   - Cost Per Click (CPC) = Total Spend / Clicks (if applicable)
   - Cost Per Conversion (CPA) = Total Spend / Conversions (if applicable)
   - Conversion Rate = (Conversions / Clicks) × 100 (if applicable)
   - Earned Media Value (EMV) = Impressions × $0.02 (use platform-adjusted CPM if provided)

3. **Benchmark each metric by tier and platform**

   | Metric | Nano (<10K) | Micro (10K–100K) | Macro (100K–1M) | Mega (1M+) |
   |---|---|---|---|---|
   | ER (Instagram) | ≥5% | ≥3% | ≥1.5% | ≥1% |
   | ER (TikTok) | ≥9% | ≥6% | ≥3% | ≥2% |
   | ER (YouTube) | ≥4% | ≥2.5% | ≥1.5% | ≥1% |
   | CPE | <$0.10 | <$0.20 | <$0.50 | <$1.00 |
   | CPA | <$15 | <$25 | <$40 | <$60 |

4. **Score each metric** on a 1–5 scale:
   - 5 = Exceeds benchmark by >50%
   - 4 = Exceeds benchmark by 10–50%
   - 3 = Meets benchmark (within ±10%)
   - 2 = Below benchmark by 10–30%
   - 1 = Below benchmark by >30%

5. **Weight scores by campaign goal**
   - Awareness: Reach (30%), ER (25%), EMV (25%), CPE (20%)
   - Engagement: ER (40%), CPE (30%), Reach (20%), EMV (10%)
   - Conversion: CPA (40%), Conversion Rate (30%), ER (20%), Reach (10%)

6. **Calculate weighted total score** (out of 5) and assign letter grade:
   - A: 4.5–5.0 | B: 3.5–4.4 | C: 2.5–3.4 | D: 1.5–2.4 | F: <1.5

7. **Flag red flags automatically** if any of these are true:
   - ER is less than half the benchmark for that tier/platform
   - CPA exceeds benchmark by more than 2×
   - Follower-to-engagement ratio suggests bot activity (ER <0.3% on any platform)
   - Spend exceeded EMV (negative ROI on earned media)

8. **Generate renewal recommendation**: Renew (A/B), Renegotiate (C), Do Not Renew (D/F), with one-line rationale.

## Output Format

Produce a scorecard
