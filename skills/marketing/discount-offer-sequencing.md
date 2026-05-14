---
name: discount-offer-sequencing
category: marketing
description: >
  Designs tiered promotional discount sequences that trigger based on customer behavior, purchase history, and funnel stage to maximize conversion without eroding margin. Use when someone wants to build a discount strategy, asks how to sequence promotional offers, needs to convert hesitant buyers without over-discounting, wants to set up behavior-triggered coupon logic, or is trying to recover abandoned carts or stalled deals with targeted incentives.
tags: [discounts, promotions, conversion, email-sequences, pricing]
author: community
---

# Discount Offer Sequencing

This skill builds structured, tiered discount sequences that fire at the right moment based on customer signals — converting fence-sitters while protecting margin.

## Discount Sequence Design Workflow

### Step 1: Establish Baseline Constraints
Before designing any sequence, extract:
- **Margin floor**: Minimum acceptable margin % (no discount should breach this)
- **Maximum discount ceiling**: The deepest discount ever offered (anchor for tier design)
- **Discount types available**: % off, $ off, free shipping, free gift, BOGO, extended trial
- **Offer frequency cap**: How many discount touches a customer can receive before disqualification

### Step 2: Segment by Funnel Stage and Behavior Signal
Map each trigger to a funnel stage:

| Funnel Stage | Trigger Signal | Discount Aggression |
|---|---|---|
| Awareness | First visit, no action | None — educate first |
| Consideration | 2+ product page views, email subscriber | Soft (5–10%) |
| Intent | Cart add, wishlist, pricing page visit | Medium (10–15%) |
| Decision | Cart abandon (1–3 hrs) | Strong (15–20%) |
| Recovery | Cart abandon (24–48 hrs), no purchase after email 1 | Aggressive (20–25% or free shipping) |
| Win-back | Lapsed customer (60–90 days inactive) | Personalized (loyalty reward or highest-tier offer) |

### Step 3: Build the Trigger-Sequence Logic
For each segment, define a sequence with:
1. **Trigger condition** (what behavior fires this sequence)
2. **Delay** (how long after trigger before first offer)
3. **Offer** (specific discount type and value)
4. **Expiry** (urgency window — 24 hrs, 48 hrs, 72 hrs)
5. **Escalation rule** (if no conversion, what fires next and when)
6. **Exit condition** (purchase made, max touches reached, or customer opts out)

### Step 4: Apply Anti-Erosion Rules
Prevent margin bleed and discount dependency:
- Never send the deepest discount first — always escalate
- Cap total discount touches per customer per 90-day window (recommend: 3 max)
- Exclude repeat discount-hunters: flag customers who only purchase on discount (3+ times) and remove from future sequences or offer non-monetary incentives instead
- Rotate offer types — don't always lead with % off; use free shipping or bonus gifts to preserve perceived price integrity
- Suppress sequences for customers who purchased at full price in the last 30 days

### Step 5: Layer Purchase History Logic
Adjust offers based on past behavior:
- **First-time buyer**: Lead with social proof + small welcome discount (10%)
- **One-time purchaser**: Focus on second purchase sequence with loyalty framing ("Come back" offer)
- **Multi-purchaser**: Skip early-stage discounts; offer exclusive or tiered loyalty reward
- **High-LTV customer**: Never send mass discounts — use VIP framing with modest offer or early access instead
- **Discount-only buyer**: Exit discount sequences; test value-based messaging without offers

### Step 6: Define Sequence Variants by Product/Price Point
- **Low AOV products (<$50)**: Free shipping offer often converts better than % off
- **Mid AOV ($50–$200)**: % off with urgency timer (48-hr expiry)
- **High AOV (>$200)**: Dollar-value discount ($30 off feels larger than 10%), payment plan mention, or bonus gift
- **Subscription products**: Emphasize first-month discount or extended trial over one-time % off

## Output Format

Produce a **Discount Sequence Playbook** containing:

1
