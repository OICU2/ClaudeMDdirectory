---
name: monthly-recurring-revenue-bridge-builder
description: >
  Builds a month-over-month MRR bridge that decomposes revenue changes into their component movements. Use when someone says "show me what drove MRR change," asks about "MRR waterfall," or wants to "break down subscription revenue movement." Also triggers when someone needs to "reconcile MRR between two months" or wants to "understand churn vs expansion impact."
category: finance
tags: [mrr, saas, subscription, revenue, churn, expansion]
author: community
---

# MRR Bridge Builder

This skill constructs a month-over-month MRR bridge by decomposing net revenue change into five standard SaaS components: new business, expansion, contraction, churn, and reactivation.

## MRR Bridge Workflow

### 1. Collect Required Inputs
Ask the user to provide (or extract from provided data):
- Starting MRR (prior month closing balance)
- Ending MRR (current month closing balance)
- Customer-level or cohort-level subscription data with change type labels, OR raw change amounts per category

If data is not pre-labeled, prompt for:
- New customers who started paying this month → **New Business MRR**
- Existing customers who upgraded or added seats/volume → **Expansion MRR**
- Existing customers who downgraded → **Contraction MRR** (record as negative)
- Customers who canceled entirely → **Churned MRR** (record as negative)
- Previously churned customers who resubscribed → **Reactivation MRR**

### 2. Validate the Bridge
Apply the fundamental MRR bridge identity:

```
Ending MRR = Starting MRR
           + New Business MRR
           + Expansion MRR
           - Contraction MRR
           - Churned MRR
           + Reactivation MRR
```

- Calculate Net New MRR: `Ending MRR - Starting MRR`
- Calculate Bridge Sum: `New + Expansion - Contraction - Churn + Reactivation`
- If Bridge Sum ≠ Net New MRR, flag the discrepancy and ask the user to reconcile before proceeding

### 3. Compute Derived Metrics
Calculate and include:
- **Net New MRR**: Total month-over-month change
- **Gross New MRR**: New Business + Reactivation
- **Gross Churn MRR**: Churned + Contraction (total revenue at risk lost)
- **Net Expansion MRR**: Expansion - Contraction (expansion from existing base)
- **MoM Growth Rate**: `(Ending MRR - Starting MRR) / Starting MRR × 100`
- **Gross Churn Rate**: `(Churned MRR / Starting MRR) × 100`
- **Net Revenue Retention (NRR)**: `(Starting MRR - Churn + Expansion - Contraction) / Starting MRR × 100`

### 4. Identify Narrative Signals
Automatically surface:
- Whether growth is acquisition-led (New > Expansion) or expansion-led (Expansion > New)
- Whether churn or contraction is the larger drag
- Whether reactivation is material (>5% of gross new MRR is a signal worth noting)
- If NRR > 100%, flag as net negative churn (positive signal)
- If gross churn rate exceeds 2% MoM, flag as elevated

## Output Format

Produce the following in order:

**1. MRR Bridge Table**
```
MRR Bridge: [Month A] → [Month B]
─────────────────────────────────────────
Starting MRR                  $XX,XXX
+ New Business                $XX,XXX
+ Expansion                   $XX,XXX
- Contraction                ($XX,XXX)
- Churn                      ($XX,XXX)
+ Reactivation                $XX,XXX
─────────────────────────────────────────
Ending MRR                    $XX,XXX
Net New MRR                   $XX,XXX  (+X.X%)
```

**2. Key Metrics Summary** (inline table)
|
