---
name: revenue-concentration-risk-analysis
category: finance
description: >
  Calculates customer and segment revenue concentration percentages and flags accounts representing material dependency risk above defined thresholds. Use when someone wants to analyze customer revenue concentration, asks about revenue dependency risk, needs to identify top customer exposure, wants to flag single-customer revenue risk, or is preparing a customer concentration analysis for investors or auditors.
tags: [revenue, risk-analysis, customer-concentration, financial-analysis, dependency-risk]
author: community
---

# Revenue Concentration Risk Analysis

This skill calculates what percentage of total revenue each customer or segment represents, compares results against defined materiality thresholds, and flags accounts that create dangerous dependency risk.

## Analysis Workflow

1. **Collect revenue data**: Request or ingest a list of customers/segments with their associated revenue figures and a total revenue baseline (TTM or period-specific).

2. **Calculate concentration percentages**: For each customer or segment, divide individual revenue by total revenue and express as a percentage. Sort results descending by concentration percentage.

3. **Apply cumulative analysis**: Calculate cumulative revenue percentage as you move down the ranked list to identify how many customers account for 50%, 80%, and 90% of total revenue (Pareto tiers).

4. **Apply materiality thresholds**:
   - **Critical risk**: Any single customer or segment ≥10% of total revenue
   - **Elevated risk**: Any single customer or segment ≥5% and <10%
   - **Watch list**: Top 3 customers collectively represent ≥50% of total revenue
   - If the user specifies custom thresholds, override these defaults and use theirs

5. **Flag at-risk accounts**: Tag each flagged customer with its risk tier, exact concentration percentage, and the revenue amount at stake if that customer churns or contracts significantly.

6. **Assess portfolio health**: Calculate the Herfindahl-Hirschman Index (HHI) for revenue concentration by summing the squares of all customer concentration percentages. Score interpretation:
   - HHI < 1,500: Diversified (low risk)
   - HHI 1,500–2,500: Moderately concentrated
   - HHI > 2,500: Highly concentrated (high risk)

7. **Identify risk drivers**: Note any industry, geography, or contract-type clustering among flagged accounts that compounds the dependency risk.

## Output Format

Produce a structured report with the following sections:

**Executive Summary** (3–5 sentences): Overall concentration risk level, number of flagged accounts, HHI score and interpretation, and top-line recommendation.

**Concentration Table** (ranked list):
| Rank | Customer/Segment | Revenue | % of Total | Cumulative % | Risk Tier |
|------|-----------------|---------|------------|--------------|-----------|
Include all customers; highlight flagged rows with risk tier labels (Critical / Elevated / Watch).

**Flagged Accounts Detail**: For each flagged customer, provide:
- Customer name, revenue, concentration %, risk tier
- Revenue at risk if lost (100% churn scenario)
- Any compounding risk factors (same industry, single contract, etc.)

**Pareto Analysis**: State how many customers account for 50%, 80%, and 90% of revenue.

**HHI Score**: Numeric score with risk band label.

**Recommendations** (bullet list): 3–5 specific, actionable steps to reduce concentration risk (e.g., diversification targets, contract structure changes, pipeline focus areas).

Keep the report concise — prioritize flagged accounts. If data covers more than 50 customers, summarize the tail (unflagged customers below 2% concentration) as an aggregate row.
