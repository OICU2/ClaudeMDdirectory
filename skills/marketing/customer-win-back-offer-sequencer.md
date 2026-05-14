---
name: customer-win-back-offer-sequencer
description: >
  Designs a tiered offer sequence to re-engage lapsed customers by analyzing time since churn and previous purchase behavior. Use when someone says "we're losing customers and want them back," asks about re-engagement campaigns for churned users, or wants to build a win-back email or offer strategy. Also activates when someone needs to recover lapsed buyers, reduce churn impact, or sequence discounts for inactive customers.
category: marketing
tags: [retention, churn, email-marketing, customer-lifecycle, offers]
author: community
---

# Customer Win-Back Offer Sequencer

This skill builds a structured, tiered offer sequence to re-engage lapsed customers, calibrated by how long they've been inactive and what they previously purchased.

## Win-Back Sequencing Workflow

### Step 1: Gather Inputs
Collect the following before building the sequence:
- **Churn segments**: time bands since last purchase (e.g., 30–60 days, 61–120 days, 121–180 days, 180+ days)
- **Customer value tiers**: high-value (top 20% by LTV), mid-value, low-value
- **Previous purchase categories**: what product lines or services they bought
- **Available offer levers**: discounts, free shipping, loyalty points, free trial, exclusive access, product bundles
- **Channel**: email, SMS, paid retargeting, or direct mail

### Step 2: Map Churn Duration to Offer Intensity
Use escalating urgency and value as time since churn increases:

| Time Since Last Purchase | Offer Intensity | Rationale |
|--------------------------|-----------------|-----------|
| 30–60 days               | Soft re-engagement (no discount) | Still warm; lead with value, new arrivals, or content |
| 61–120 days              | Low incentive (5–10% off or free shipping) | Signal you noticed their absence |
| 121–180 days             | Mid incentive (15–20% off or bonus gift) | Risk of permanent churn is rising |
| 181–365 days             | High incentive (25–30% off or bundle deal) | Last viable re-engagement window |
| 365+ days                | Final attempt or sunset (maximum offer or unsubscribe) | Win back or cleanly close the loop |

### Step 3: Layer in Purchase Behavior
Personalize offer type based on what they bought before:
- **Category repeat**: Lead with offers in their previously purchased category
- **High-AOV customers**: Prioritize premium bundles or VIP access over flat discounts
- **Subscription lapsers**: Offer a free trial restart or reduced reactivation rate
- **One-time buyers**: Focus on introducing complementary products to build habit

### Step 4: Build the Touch Sequence Per Segment
For each churn segment, define:
1. **Touch 1 (Day 0 of campaign)** — Re-introduction: no offer, just value reminder or product update
2. **Touch 2 (Day 3–5)** — Soft offer introduced with personalized product recommendation
3. **Touch 3 (Day 7–10)** — Offer amplified with urgency (expiry date, limited stock, or increased discount)
4. **Touch 4 (Day 14)** — Final push: maximum offer for segment + clear CTA
5. **Touch 5 (Day 17–21, optional)** — Sunset message: "We'll miss you" + unsubscribe option or suppress from future campaigns

### Step 5: Set Suppression and Graduation Rules
- **Suppress** any customer who makes a purchase mid-sequence immediately
- **Graduate** re-engaged customers to the active customer nurture track, not back to win-back
- **Sunset** unresponsive 365+ day customers after the final touch to protect deliverability
- Do not stack win-back campaigns with active promotional campaigns simultaneously

## Output Format

Produce the following for each churn segment requested:

**Segment Summary Block** (repeat per segment):
```
Segment: [Time band + value tier, e.g., "61–120 days / High-Value"]
Offer: [Specific incentive and type]
Personalization hook: [Purchase behavior angle]

Touch Sequence:
- Touch 1 | Day 0 | [Subject line
