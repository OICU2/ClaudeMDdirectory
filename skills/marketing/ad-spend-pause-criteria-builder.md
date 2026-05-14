---
name: ad-spend-pause-criteria-builder
description: >
  Defines specific performance thresholds and conditions that should trigger pausing or reallocating
  paid ad spend across channels. Use when someone wants to know when to stop running ads, asks about
  setting rules for pausing campaigns, needs help deciding if underperforming ads should be killed,
  wants to protect budget from wasted spend, or is building guardrails for their paid media strategy.
category: marketing
tags: [paid-ads, budget-optimization, campaign-management, performance-thresholds, ppc]
author: community
---

# Ad Spend Pause Criteria Builder

This skill builds a structured set of channel-specific performance thresholds and conditions that automatically or manually trigger pausing or reallocating paid ad budgets, so teams can protect spend before it bleeds further.

## Pause Criteria Framework

### Step 1: Collect Channel and Goal Context
Ask the user (or infer from context):
- Which channels are in scope (Google Ads, Meta, TikTok, LinkedIn, Programmatic, etc.)
- Primary campaign objective (ROAS, CPA, CPL, CTR, brand awareness)
- Current average KPI benchmarks or targets
- Budget size (daily/monthly) — determines sensitivity of thresholds
- Who owns the pause decision (automated rules, human review, or both)

### Step 2: Define Hard-Stop Thresholds (Immediate Pause)
For each channel, establish non-negotiable cutoffs:
- **ROAS-based**: Pause if 7-day ROAS drops below X (e.g., below 1.0x means losing money)
- **CPA-based**: Pause if CPA exceeds target by more than 50% for 3+ consecutive days
- **CPL-based**: Pause if CPL is 2x the goal with no improvement trend over 5 days
- **CTR collapse**: Pause if CTR drops below 0.3% on display or 1% on search for 7 days
- **Zero conversions**: Pause any ad set spending >3x target CPA with zero conversions
- **Frequency overload**: Pause Meta/TikTok ad sets with frequency >5 and declining CTR

### Step 3: Define Soft-Trigger Thresholds (Review and Reallocate)
These trigger human review before pausing:
- Performance is 20–49% below goal for 3–5 days
- Impression share declining while CPCs rising (indicates auction pressure)
- Landing page bounce rate >80% on paid traffic
- Quality Score on Google below 4 for high-spend keywords
- Engagement rate on social ads drops >30% week-over-week

### Step 4: Set Time Windows and Spend Gates
Avoid pausing too early (statistical noise) or too late (budget already wasted):
- Minimum spend before evaluating: 3x target CPA or $50, whichever is greater
- Minimum time window: 5–7 days for most channels; 3 days for high-volume accounts
- Exception: Immediate pause if daily spend exceeds budget cap due to tracking error

### Step 5: Assign Pause Actions by Severity
- **Red (Hard Stop)**: Pause ad/ad set immediately, flag for audit
- **Yellow (Soft Stop)**: Reduce budget by 50%, escalate to reviewer within 24 hours
- **Green (Monitor)**: Tag for weekly review, no immediate action

### Step 6: Specify Reallocation Rules
Define where paused budget goes:
- Best-performing campaign in the same channel
- Shift to highest-ROAS channel of the week
- Hold in reserve for testing

## Output Format

Produce a structured **Pause Criteria Document** with the following sections:

```
## Ad Spend Pause Criteria — [Company/Campaign Name]
Last Updated: [Date]

### Channel: [e.g., Google Search]
| Metric        | Hard-Stop Threshold | Soft-Trigger Threshold | Time Window | Action         |
|---------------|---------------------|------------------------|-------------|----------------|
| CPA           | >2x target          | >1.5x target           | 5 days      | Pause / Review |
| ROAS          | <1.0x               | <1.5x                  | 7 days      | Pause /
