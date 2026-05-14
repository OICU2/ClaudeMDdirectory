---
name: referral-program-incentive-design
category: marketing
description: >
  Designs referral program incentive structures by modeling reward types, trigger conditions, and payout timing to maximize participation and viral coefficient. Use when someone wants to build a referral program, asks how to incentivize word-of-mouth growth, needs to choose between referral reward structures, or wants to improve an existing referral program's conversion rate. Also activates when someone asks about reducing customer acquisition cost through referrals.
tags: [referral-programs, growth-marketing, incentive-design, viral-coefficient, customer-acquisition]
author: community
---

# Referral Program Incentive Design

This skill models and recommends referral program incentive structures — covering reward types, trigger conditions, and payout timing — to maximize referrer participation and viral coefficient for a given business model.

## Incentive Design Workflow

### 1. Gather Business Context
Collect these inputs before designing (ask if not provided):
- Product type (SaaS, e-commerce, marketplace, fintech, consumer app)
- Average order value or LTV
- Current CAC and target CAC
- Existing referral mechanics (if any)
- Regulatory constraints (financial products, healthcare)

### 2. Define the Reward Architecture

**Reward Types — pick based on margin and psychology:**
- **Cash / Account Credit**: Highest motivation, highest cost. Best for fintech, high-LTV SaaS.
- **Discount on Next Purchase**: Drives retention but only works for repeat-purchase products.
- **Free Product / Tier Upgrade**: Low marginal cost for digital goods; strong for SaaS.
- **Dual-sided reward** (both referrer + referee get value): Maximizes conversion; use when CAC budget allows.
- **Points / Status**: Best for loyalty-heavy models (airlines, gaming, retail).

**Reward Sizing Rule:**
- Max reward value ≤ 30% of first-order gross margin or ≤ 20% of LTV (whichever is lower).
- For viral growth priority: start at 15–20% of LTV, test down.

### 3. Set Trigger Conditions

Define exactly what action unlocks the reward:
- **Soft trigger**: Referee signs up → referrer gets small reward immediately. Good for top-of-funnel volume.
- **Hard trigger**: Referee completes a qualifying action (first purchase, first payment, 30-day retention) → referrer gets full reward. Best for quality referrals.
- **Tiered trigger**: Referrer earns escalating rewards as they hit referral milestones (1, 5, 10 referrals). Drives power users.

**Recommendation matrix:**
| Business Type | Trigger |
|---|---|
| E-commerce | First completed purchase |
| SaaS | First paid month / plan upgrade |
| Marketplace | First transaction on both sides |
| Consumer app | Day-7 or Day-30 retention |
| Fintech | Account funded + first transaction |

### 4. Design Payout Timing

- **Immediate payout** (on trigger): Maximizes referrer satisfaction and social sharing but increases fraud risk.
- **Delayed payout** (7–30 days after trigger): Allows for refund/chargeback window; use for e-commerce.
- **Milestone payout**: Rewards unlock at thresholds; best for SaaS annual plans or marketplace supply-side.

Fraud mitigation rules to include:
- Require unique email + device fingerprint per referee
- Flag self-referrals via payment method matching
- Set a minimum qualifying spend or usage threshold

### 5. Model the Viral Coefficient

Calculate expected K-factor:
```
K = (avg invites sent per user) × (conversion rate of invitee)
```
- K > 1: program is self-sustaining
- K 0.5–1: program meaningfully reduces CAC
- K < 0.5: redesign incentive or reduce friction

Levers to improve K:
- Increase invite frequency: reduce friction in sharing (pre-filled messages, one-click share)
- Increase invitee conversion: strengthen referee reward (dual-sided)
- Target the right referrers: trigger referral ask at peak satisfaction (post-purchase, post-upgrade)

### 6. Identify Anti-Patterns to Avoid
