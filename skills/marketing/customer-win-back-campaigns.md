---
name: customer-win-back-campaigns
description: >
  Builds re-engagement campaign flows targeting lapsed customers with personalized messaging, incentives, and timing logic based on churn duration and segment value. Use when someone wants to win back lost customers, asks about re-engagement email sequences, needs to recover churned users, wants to create a lapsed customer campaign, or is trying to reduce customer attrition through targeted outreach.
category: marketing
tags: [email-marketing, customer-retention, churn-recovery, lifecycle-marketing, segmentation]
author: community
---

# Customer Win-Back Campaigns

This skill designs structured re-engagement campaign flows with segmented messaging, tiered incentives, and timing cadences to recover lapsed customers based on their churn duration and lifetime value.

## Campaign Design Workflow

### Step 1: Define Lapsed Customer Segments
Classify customers into tiers before writing any copy:
- **Recent lapse**: 30–60 days inactive
- **Mid-term lapse**: 61–180 days inactive
- **Long-term lapse**: 181–365 days inactive
- **At-risk lost**: 365+ days inactive
- **High-value vs. standard**: Split each tier by historical spend (top 20% vs. rest)

### Step 2: Map Incentive Ladder per Segment
Assign incentives proportional to value and lapse depth:
- Recent lapse, standard: Soft nudge, no discount (reminder + social proof)
- Recent lapse, high-value: 10–15% off or free shipping
- Mid-term lapse, standard: 15–20% off or bonus credit
- Mid-term lapse, high-value: 20–25% off + VIP language
- Long-term lapse: 30%+ off or free product/trial + urgency deadline
- At-risk lost: Final "we miss you" offer at maximum discount or gift

### Step 3: Build the Email Sequence per Segment
For each segment, produce a 3–5 email flow:

**Email 1 — Re-introduction (Day 0)**
- Subject: Curiosity or nostalgia angle, no discount mention
- Body: Acknowledge absence without guilt, highlight what's new or improved
- CTA: Browse or explore (low commitment)

**Email 2 — Value Reminder (Day 4–7)**
- Subject: Lead with top benefit or past purchase relevance
- Body: Personalize with product category they bought, include social proof or reviews
- CTA: Return to [specific category]

**Email 3 — Incentive Reveal (Day 10–14)**
- Subject: Explicit offer, time-bound language
- Body: Present incentive clearly, add scarcity ("valid 72 hours")
- CTA: Redeem offer now

**Email 4 — Urgency Bump (Day 16–18, only if no open/click)**
- Subject: "Last chance" or expiry reminder
- Body: One short paragraph, restate offer, hard deadline
- CTA: Single button only

**Email 5 — Breakup Email (Day 21–28, long-term/at-risk only)**
- Subject: "Should we say goodbye?" or "This is our last email"
- Body: Honest, human tone — let them opt down, not just out
- CTA: Stay subscribed OR unsubscribe gracefully

### Step 4: Apply Timing Logic Rules
- Do not send Email 3 if customer converts after Email 1 or 2 — halt sequence on purchase
- Suppress high-value customers from generic batch campaigns while in win-back flow
- Avoid sending on Mondays or Fridays for mid-term and long-term lapsed segments
- Cap win-back sequences at one attempt per 90-day window per customer

### Step 5: Define Success Metrics per Flow
For each campaign output, specify:
- Primary KPI: Re-purchase rate within 30 days of sequence start
- Secondary KPIs: Open rate, click-to-open rate, unsubscribe rate
- Acceptable thresholds: Re-purchase rate ≥ 5% for standard, ≥ 12% for high-value segments

## Output Format

Produce the following for each win-back campaign request:

1. **Segment Map Table** — columns: Segment Name | Lapse Duration | Value Tier | Incent
