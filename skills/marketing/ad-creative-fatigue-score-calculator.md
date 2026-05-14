---
name: ad-creative-fatigue-score-calculator
description: >
  Analyzes ad creative performance data to calculate fatigue scores and flag assets requiring immediate replacement. Use when someone says their ads are losing effectiveness, asks about creative burnout or audience saturation, wants to know which ad creatives are underperforming, needs to prioritize which ads to refresh, or is seeing declining CTR or rising CPMs across campaigns.
category: marketing
tags: [advertising, creative-optimization, performance-marketing, ctr, ad-fatigue]
author: community
---

# Ad Creative Fatigue Score Calculator

This skill evaluates frequency, engagement decay, and CTR trends across active ad creatives to produce a fatigue score for each asset and a prioritized replacement action list.

## Fatigue Scoring Workflow

### Step 1: Collect Required Inputs
Ask the user to provide the following per creative asset (accept CSV, table, or freeform):
- Creative ID or name
- Impressions (total and last 7 days)
- Frequency (average times served per unique user)
- CTR at launch vs. current CTR
- Engagement rate at launch vs. current (likes, comments, saves if available)
- CPM trend (flat, rising, or percentage increase)
- Days active / flight duration
- Platform (Meta, Google, TikTok, LinkedIn, etc.)

### Step 2: Calculate Fatigue Score (0–100)
Score each creative using this weighted formula:

| Signal | Weight | How to Score |
|---|---|---|
| Frequency vs. platform benchmark | 30% | Score 0–100: <2x = 0, 2–4x = 40, 4–6x = 70, >6x = 100 |
| CTR decay percentage | 30% | ((launch CTR − current CTR) / launch CTR) × 100, capped at 100 |
| Engagement decay percentage | 20% | Same formula as CTR decay |
| CPM increase percentage | 10% | ((current CPM − baseline CPM) / baseline CPM) × 100, capped at 100 |
| Days active vs. typical lifespan | 10% | Score 0–100: <14 days = 0, 14–30 = 50, >30 = 100 |

**Final Score = (Frequency Score × 0.30) + (CTR Decay × 0.30) + (Engagement Decay × 0.20) + (CPM Increase × 0.10) + (Days Active × 0.10)**

### Step 3: Assign Fatigue Tier
- **0–30 → Healthy** — No action needed, monitor weekly
- **31–55 → Warming** — Schedule refresh within 2 weeks, begin testing new variants
- **56–75 → Fatigued** — Pause or reduce budget immediately, replace within 7 days
- **76–100 → Critical** — Pull from rotation now, replacing will recover performance faster than optimizing

### Step 4: Identify Contributing Factors
For each creative scoring 31+, state the top 1–2 fatigue drivers (e.g., "Frequency is 7.2x — primary driver" or "CTR dropped 62% over 21 days — primary driver").

### Step 5: Generate Replacement Recommendations
Based on tier and platform, suggest:
- What creative format to test next (video vs. static, UGC vs. polished)
- Audience segment to exclude (retarget fatigued users separately)
- Whether to pause vs. reduce spend vs. duplicate with new creative
- Suggested A/B test hypothesis based on the decay pattern

## Output Format

Produce a structured report with these sections:

**1. Fatigue Score Summary Table**
Columns: Creative Name | Fatigue Score | Tier | Top Fatigue Driver | Recommended Action
Sorted from highest to lowest score.

**2. Critical & Fatigued Assets — Action List**
Bullet list of only the creatives scoring 56+, each with:
- Score and tier
- The 1–2 specific reasons it's fatigued
- Exact next step (pause, pull, reduce budget by X%)
- One replacement creative hypothesis

**3. Healthy & Warming Assets — Monitoring Notes**
Brief table: Creative Name | Score | Next Review Date | Watch Signal
