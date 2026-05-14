---
name: treasury-counterparty-risk-scorecard
description: >
  Evaluates and scores financial institution counterparties across credit quality, exposure
  concentration, and contract terms to identify relationships that exceed acceptable treasury
  risk thresholds. Use when someone asks about counterparty risk assessment, wants to review
  bank relationship exposure, needs to score a financial institution partner, is concerned
  about treasury concentration risk, or wants to flag risky counterparty agreements.
category: finance
tags: [treasury, counterparty-risk, credit-risk, financial-institutions, risk-scoring]
author: community
---

# Treasury Counterparty Risk Scorecard

This skill evaluates financial institution counterparties against credit, concentration, and contractual risk criteria and produces a scored risk assessment that flags relationships breaching acceptable treasury thresholds.

## Scoring Workflow

### 1. Gather Counterparty Data
Collect or prompt the user for:
- Institution name and type (bank, broker-dealer, custodian, swap counterparty)
- Credit ratings from S&P, Moody's, and Fitch (long-term issuer or senior unsecured)
- Current gross and net exposure (notional, mark-to-market, or deposited balances)
- Total counterparty exposure as a percentage of portfolio or cash under management
- Contract type (ISDA, ISDAs with CSA, repo, deposit, custody agreement)
- Collateral terms: thresholds, minimum transfer amounts, eligible collateral
- Jurisdiction and governing law
- Days since last credit review

### 2. Score Each Risk Dimension (0–25 points each, 100-point total)

**A. Credit Quality (25 pts)**
- AAA/Aaa/AAA = 25 | AA/Aa = 22 | A = 17 | BBB/Baa = 10 | BB/Ba or below = 0
- Split-rated: use the middle rating; if only two ratings, use the lower
- Negative outlook or CreditWatch: deduct 3 points
- No public rating: score 5

**B. Exposure Concentration (25 pts)**
- < 5% of total exposure = 25
- 5–10% = 20
- 10–15% = 13
- 15–20% = 6
- > 20% = 0
- If a single counterparty represents the only relationship in a product category, deduct 5

**C. Contract and Collateral Terms (25 pts)**
- ISDA with CSA (two-way, cash collateral, threshold ≤ $1M) = 25
- ISDA with CSA (one-way or non-cash collateral) = 17
- ISDA without CSA = 10
- Deposit or custody agreement with standard terms = 15
- Deposit or custody with no termination rights or auto-rollover = 5
- No formal agreement or undocumented = 0

**D. Operational and Review Currency (25 pts)**
- Credit review within 90 days = 10
- KYC/onboarding refreshed within 12 months = 8
- Legal review of contract within 24 months = 7
- Deduct 5 if any of the above are overdue

### 3. Classify Overall Score
- **80–100**: Acceptable — relationship within policy
- **60–79**: Watch — schedule review within 30 days, consider exposure reduction
- **40–59**: Elevated Risk — require senior treasury approval for new transactions, initiate remediation plan
- **0–39**: Breach — suspend new transactions, escalate to CFO and Risk Committee immediately

### 4. Apply Automatic Flags (override score classification if triggered)
- Rating below investment grade (BB+/Ba1 or lower): automatic Breach regardless of score
- Exposure > 25% of total portfolio: automatic Breach
- No executed legal agreement: automatic Elevated Risk minimum
- Credit review > 180 days overdue: automatic Watch minimum

## Output Format

Produce a structured scorecard with the following sections:

**Counterparty Risk Scorecard — [Institution Name]**
- Date of Assessment
- Institution Type

**Score Summary Table**
| Dimension | Score | Max | Notes |
|---|---|---|---|
| Credit Quality | X | 25 | [Rating, outlook] |
|
