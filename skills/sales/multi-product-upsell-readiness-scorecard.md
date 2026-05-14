---
name: multi-product-upsell-readiness-scorecard
description: >
  Scores existing customer accounts on their readiness for a multi-product upsell conversation using product usage, contract size, and engagement signals. Use when someone says "which accounts should we target for expansion," asks about "upsell opportunities in our book of business," wants to "prioritize accounts for cross-sell conversations," needs to "rank customers for multi-product outreach," or is looking to "identify which customers are ready to buy more." Outputs a ranked scorecard with scores, rationale, and recommended next actions per account.
category: sales
tags: [upsell, account-expansion, customer-success, revenue-growth, cross-sell]
author: community
---

# Multi-Product Upsell Readiness Scorecard

This skill evaluates existing customer accounts across usage, contract, and engagement dimensions to produce a prioritized scorecard that tells reps exactly which accounts to target first for multi-product upsell conversations.

## Scoring Workflow

### Step 1: Collect Account Data
Ask the user to provide (or paste) data for each account across these dimensions. If data is missing for a dimension, note it and score conservatively.

**Required inputs per account:**
- Account name and current products/plan
- Contract value (ACV or MRR) and contract end date
- Product usage metrics (logins, features used, seats filled, API calls, etc.)
- Recent engagement signals (QBRs attended, support tickets, NPS/CSAT score, champion activity)
- Expansion history (prior upsells, add-ons purchased)
- Known pain points or stated interest in other products

### Step 2: Score Each Account on Five Dimensions (0–20 points each, 100 total)

**1. Product Adoption Depth (0–20)**
- 17–20: Power users, >80% of purchased features active, seats near capacity
- 11–16: Moderate usage, 50–79% feature adoption, growing seat count
- 5–10: Light usage, <50% features used, flat or declining logins
- 0–4: Minimal usage, risk of churn, do not prioritize for upsell

**2. Contract Size & Growth Potential (0–20)**
- 17–20: High ACV (top 20% of book), renewal within 6 months, expansion room identified
- 11–16: Mid-tier ACV, renewal within 12 months, some expansion room
- 5–10: Smaller ACV or renewal >12 months out
- 0–4: Very small contract, renewal distant, limited expansion surface

**3. Engagement Quality (0–20)**
- 17–20: Executive sponsor active, attended 2+ QBRs in past year, NPS ≥9
- 11–16: Active champion, attended at least 1 QBR, NPS 7–8
- 5–10: Occasional check-ins, no clear champion, NPS 5–6
- 0–4: Disengaged, support-heavy relationship, NPS <5

**4. Multi-Product Fit (0–20)**
- 17–20: Active use case clearly maps to 2+ additional products, champion has stated interest
- 11–16: Use case maps to 1 additional product, indirect signals of interest
- 5–10: Possible fit but requires discovery to confirm
- 0–4: Current product fully covers their use case; no clear expansion path

**5. Expansion Momentum (0–20)**
- 17–20: Has expanded before, recently added seats or features, asking about roadmap
- 11–16: One prior expansion or add-on, stable relationship
- 5–10: No prior expansion, but no churn signals
- 0–4: Contraction signals (reduced seats, downgrade requests, churn risk flags)

### Step 3: Classify Each Account by Total Score

| Score | Tier | Action |
|-------|------|--------|
| 80–100 | 🟢 Tier 1 – Upsell Now | Prioritize immediately; schedule multi-product conversation within 30 days |
| 60–79 | 🟡 Tier 2 – Nurture to Ready | Address gaps (usage, engagement) before pitching; target within 60–90 days |
| 40
