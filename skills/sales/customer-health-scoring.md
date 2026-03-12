---
name: customer-health-scoring
description: >
  Builds a customer health scoring framework using usage, engagement, and support data to identify at-risk accounts and surface expansion opportunities. Use when someone says "we need to track account health," asks about identifying customers likely to churn, or wants to prioritize accounts for customer success outreach. Also activates when someone needs to score their customer base, flag expansion-ready accounts, or build an early warning system for renewals.
category: sales
tags: [customer-success, churn-prevention, account-health, scoring, retention]
author: community
---

# Customer Health Scoring

This skill builds a structured health scoring framework that quantifies account risk and opportunity using product usage, engagement, and support signals — used whenever a team needs to systematically prioritize customers for intervention or growth.

## Health Scoring Framework

### Step 1: Define Scoring Dimensions
Collect the following data categories and assign weight to each based on business model:

| Dimension | Weight | Signals to Capture |
|---|---|---|
| Product Usage | 30% | Login frequency, feature adoption rate, DAU/MAU ratio, time-in-product |
| Engagement | 25% | QBR attendance, email open rates, stakeholder responsiveness, NPS/CSAT scores |
| Commercial | 20% | Contract utilization (seats used vs. purchased), renewal date proximity, billing health |
| Support Activity | 15% | Open ticket count, ticket severity trend, time-to-resolution, escalation history |
| Relationship Depth | 10% | Champion identified, executive sponsor present, number of active contacts |

Adjust weights based on the user's business model (usage-heavy SaaS → increase Usage weight; services-heavy → increase Engagement weight).

### Step 2: Score Each Dimension (0–100)
Apply these scoring rules per dimension:

**Usage Score:**
- 80–100: Usage at or above contracted capacity, frequent logins (daily/weekly)
- 50–79: Moderate usage, some features unused, bi-weekly logins
- 20–49: Low usage, core features only, monthly or less
- 0–19: Near-zero usage, dormant users, login gaps > 30 days

**Engagement Score:**
- 80–100: Responds within 24h, attends all touchpoints, champions internal expansion
- 50–79: Occasionally slow to respond, attends most calls, passive on expansion
- 20–49: Hard to reach, misses QBRs, no internal advocates identified
- 0–19: Non-responsive, ignores outreach, key contact departed

**Commercial Score:**
- 80–100: >80% seat utilization, renewal >90 days out, no payment issues
- 50–79: 50–79% utilization, renewal 31–90 days out, minor billing lag
- 20–49: <50% utilization, renewal <30 days, slow payment history
- 0–19: Downgrade requested, non-payment, active cancellation signal

**Support Score:**
- 80–100: Fewer than 2 tickets/month, no open criticals, CSAT > 4.0
- 50–79: 3–5 tickets/month, 1 open issue, CSAT 3.0–4.0
- 20–49: 6–10 tickets/month, recurring issues, CSAT 2.0–3.0
- 0–19: >10 tickets/month, unresolved escalations, CSAT < 2.0

**Relationship Score:**
- 80–100: Named champion + executive sponsor, 3+ active contacts
- 50–79: Champion identified, no exec sponsor, 2 contacts
- 20–49: Single contact only, no champion confirmed
- 0–19: Contact departed or unreachable, no internal advocate

### Step 3: Calculate Composite Health Score
```
Health Score = (Usage × 0.30) + (Engagement × 0.25) + (Commercial × 0.20) + (Support × 0.15) + (Relationship × 0.10)
```

### Step 4: Assign Health Tier
| Score Range | Tier | Status Label | Recommended Action |
|---|---|---|---|
| 80–100 | Green | Healthy | Monitor quarterly; identify expansion signal |
| 60–79 | Yellow
