---
name: subscription-upgrade-downgrade-revenue-model
description: >
  Models the net revenue impact of customer tier migrations by tracking upgrade gains and downgrade losses within monthly cohorts. Use when someone asks about tier migration revenue impact, wants to model subscription upgrade and downgrade effects, needs to calculate net expansion revenue from plan changes, or is analyzing cohort-level MRR movement from customer tier shifts. Also activates when someone wants to understand revenue churn versus contraction from downgrades.
category: finance
tags: [subscription, mrr, cohort-analysis, revenue-modeling, saas]
author: community
---

# Subscription Upgrade/Downgrade Revenue Model

This skill calculates net revenue impact from customer tier migrations by separating upgrade revenue gains from downgrade revenue losses within each monthly cohort, producing a structured expansion/contraction MRR analysis.

## Modeling Workflow

1. **Collect inputs** — Gather the following for each cohort month:
   - Starting customer count per tier (e.g., Basic, Pro, Enterprise)
   - Price per tier (monthly or annual normalized to monthly)
   - Number of customers who upgraded (and from/to which tiers)
   - Number of customers who downgraded (and from/to which tiers)
   - Number of customers who churned entirely (exclude from upgrade/downgrade math)

2. **Calculate upgrade revenue** — For each upgrade event:
   - Upgrade Revenue = (New Tier Price − Old Tier Price) × Number of Upgrading Customers
   - Sum all upgrade revenue across all tier-pair combinations for the period

3. **Calculate downgrade revenue loss** — For each downgrade event:
   - Downgrade Loss = (Old Tier Price − New Tier Price) × Number of Downgrading Customers
   - Sum all downgrade losses across all tier-pair combinations for the period

4. **Compute net expansion MRR** — Per cohort:
   - Net Expansion MRR = Total Upgrade Revenue − Total Downgrade Revenue Loss
   - A positive result = net expansion; negative = net contraction

5. **Build cohort table** — Repeat steps 2–4 for each monthly cohort (acquisition month group), tracking how migration behavior evolves over cohort age (Month 1, Month 2, Month 3, etc.)

6. **Identify patterns** — Flag:
   - Cohorts with net contraction (downgrade losses exceed upgrade gains)
   - Tier pairs with highest upgrade frequency (expansion opportunity)
   - Tier pairs with highest downgrade frequency (retention risk)
   - Month-over-month trend in net expansion MRR across all cohorts

7. **Apply to revenue forecast (if requested)** — Project forward by applying historical upgrade/downgrade rates to current customer base per tier.

## Output Format

Produce the following sections in order:

**1. Inputs Summary Table**
| Tier | Price | Starting Customers |
List all tiers with prices and customer counts.

**2. Migration Activity Table** (per period or cohort month)
| From Tier | To Tier | Customer Count | Revenue Impact |
Separate upgrade rows (positive impact) from downgrade rows (negative impact).

**3. Net Expansion MRR Summary**
| Cohort | Upgrade Revenue | Downgrade Loss | Net Expansion MRR | Status |
One row per cohort. Status = Expanding / Contracting / Neutral.

**4. Key Findings** (3–5 bullet points)
- Highest-value upgrade path
- Most damaging downgrade path
- Cohorts at risk of contraction
- Overall net expansion MRR across all cohorts
- Month with strongest/weakest net expansion

**5. Recommendations** (optional, if data supports)
- Specific tier pricing or packaging suggestions based on migration patterns
- Retention interventions for downgrade-prone cohorts

Use plain tables (markdown). Keep numbers to 2 decimal places. Label all currencies. If data is incomplete, state assumptions explicitly before proceeding.
