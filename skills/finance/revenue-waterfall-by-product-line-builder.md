---
name: revenue-waterfall-by-product-line-builder
description: >
  Breaks total revenue into new, expansion, contraction, and churn components segmented by product line for a given reporting period. Use when someone says "show me where our revenue moved this quarter," asks about "revenue breakdown by product," wants to "analyze ARR changes across product lines," needs to "build a revenue waterfall," or is trying to "understand growth and churn by segment."
category: finance
tags: [revenue, waterfall, arr, product-line, churn, expansion, finance]
author: community
---

# Revenue Waterfall by Product Line Builder

This skill constructs a structured revenue waterfall analysis segmented by product line, decomposing total revenue change into new, expansion, contraction, and churn components for a specified reporting period.

## Workflow

1. **Gather required inputs** — Collect or prompt for:
   - Reporting period (e.g., Q3 2024, January 2024)
   - Prior period closing revenue by product line
   - Current period closing revenue by product line
   - Customer-level or cohort-level revenue movement data if available (new logos, expansions, contractions, churned accounts)
   - List of product lines to segment (e.g., Core Platform, Add-ons, Professional Services)

2. **Define the four waterfall components** for each product line:
   - **New Revenue**: Revenue from customers who had $0 in the prior period
   - **Expansion Revenue**: Revenue increase from existing customers (upsell, cross-sell, seat growth)
   - **Contraction Revenue**: Revenue decrease from existing customers who are still active (negative value)
   - **Churn Revenue**: Revenue lost from customers who reached $0 (negative value)

3. **Calculate net revenue change** per product line:
   - Net Change = New + Expansion + Contraction + Churn
   - Verify: Prior Period Revenue + Net Change = Current Period Revenue (closing check)

4. **Aggregate across all product lines** to produce total company waterfall figures.

5. **Flag anomalies** — If contraction + churn exceeds new + expansion for any product line, mark that line as "net negative growth" and note it explicitly.

6. **Handle missing data gracefully** — If customer-level data is unavailable, prompt the user to provide at minimum opening balance, closing balance, and any known churn or new logo figures; estimate the split between expansion and contraction using available data and label estimates clearly.

7. **Apply period label consistently** — Label all figures with the exact reporting period provided and note whether figures are MRR, ARR, or total recognized revenue.

## Output Format

Produce the following structured output:

**Header**: Revenue Waterfall — [Product Line Breakdown] — [Reporting Period]

**Table 1: Waterfall by Product Line**
| Component | Product Line A | Product Line B | Product Line N | Total |
|-----------|---------------|---------------|----------------|-------|
| Opening Revenue | $X | $X | $X | $X |
| + New | $X | $X | $X | $X |
| + Expansion | $X | $X | $X | $X |
| − Contraction | ($X) | ($X) | ($X) | ($X) |
| − Churn | ($X) | ($X) | ($X) | ($X) |
| **Closing Revenue** | **$X** | **$X** | **$X** | **$X** |
| Net Change | $X | $X | $X | $X |
| Net Change % | X% | X% | X% | X% |

**Table 2: Growth Efficiency Summary** (one row per product line)
- Gross Revenue Retention (GRR) = (Opening − Churn − Contraction) / Opening × 100
- Net Revenue Retention (NRR) = (Opening + Expansion − Contraction − Churn) / Opening × 100

**Narrative Summary** (3–5 bullet points):
- Which product line drove the most new revenue
- Which product line had the highest churn or contraction
- Overall NRR and GRR at the company level
- Any flagged anomalies or data estimation notes

**Assumptions / Data Notes** section at the bottom listing any estimated values, missing inputs, or methodological decisions made during construction.

Length
