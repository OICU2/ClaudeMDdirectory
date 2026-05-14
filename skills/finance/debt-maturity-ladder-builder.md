---
name: debt-maturity-ladder-builder
description: >
  Analyzes and visualizes all outstanding debt obligations organized by maturity date to surface refinancing windows and liquidity pressure points. Use when someone says "show me when our debt comes due," asks about refinancing risk, wants to map their debt maturities, needs to identify liquidity gaps in their debt schedule, or is preparing for a capital markets review. Activates when users share loan schedules, bond issuances, credit facilities, or any structured debt portfolio.
category: finance
tags: [debt-management, refinancing, liquidity, fixed-income, capital-structure]
author: community
---

# Debt Maturity Ladder Builder

This skill ingests a portfolio of debt obligations and constructs a time-bucketed maturity ladder that highlights refinancing concentration risk, liquidity gaps, and optimal refinancing windows.

## Workflow

1. **Collect Debt Data**
   - Request or parse: instrument name, outstanding principal, maturity date, interest rate, rate type (fixed/floating), currency, and lender/counterparty.
   - If data is incomplete, ask for the minimum viable fields: principal, maturity date, and instrument type.
   - Normalize all maturities to calendar quarters (e.g., Q1 2026).

2. **Bucket Maturities**
   - Group obligations into time buckets: 0–6 months, 6–12 months, 1–2 years, 2–3 years, 3–5 years, 5–7 years, 7–10 years, 10+ years.
   - Sum total principal maturing in each bucket.
   - Flag any single bucket where maturities exceed 30% of total debt outstanding as a concentration risk.

3. **Identify Refinancing Windows**
   - Mark the 6–18 month forward period as the primary refinancing action window.
   - Highlight instruments with call dates, extension options, or covenants that affect effective maturity.
   - Note any back-to-back maturities within 90 days of each other as compounding liquidity risk.

4. **Assess Liquidity Gaps**
   - Compare maturing debt in each bucket against stated cash reserves, projected operating cash flow, and available credit facility capacity if provided.
   - Flag gaps where maturing obligations exceed available liquidity sources by more than 20%.

5. **Rate and Currency Risk Layer**
   - Identify floating-rate instruments maturing in a rising-rate environment as elevated refinancing cost risk.
   - Flag any cross-currency maturities requiring FX consideration at rollover.

6. **Generate Recommendations**
   - For each concentration or gap: suggest proactive refinancing timeline (typically 6–12 months ahead of maturity).
   - Recommend staggering maturities if more than 40% of debt falls within a single 12-month window.
   - Flag instruments eligible for liability management exercises (tender offers, exchanges, early calls).

## Output Format

Produce the following sections in order:

**1. Maturity Ladder Table**
| Time Bucket | Instruments | Total Principal | % of Total Debt | Risk Flag |
|---|---|---|---|---|
Populate every bucket; show $0 for empty periods.

**2. Visual Timeline** (ASCII bar chart)
Render a horizontal bar chart where each row is a time bucket and bar width represents principal magnitude. Label each bar with the dollar amount.

**3. Concentration Risk Summary**
Bullet list of buckets exceeding thresholds, with specific instrument names and amounts.

**4. Liquidity Gap Analysis**
Table comparing maturing debt vs. available liquidity sources per bucket. Highlight shortfalls in plain language.

**5. Refinancing Action Calendar**
Ordered list of recommended actions by priority, each with: instrument name, maturity date, recommended action start date, and suggested approach (refinance, extend, repay, liability management).

**6. Key Risks & Assumptions**
3–6 bullet points covering data limitations, rate environment assumptions, and material risks not captured in the ladder.

Total output length: comprehensive but scannable. Use tables and bullets throughout. Avoid prose paragraphs except in the risks section.
