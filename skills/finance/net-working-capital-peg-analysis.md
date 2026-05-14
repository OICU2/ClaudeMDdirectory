---
name: net-working-capital-peg-analysis
description: >
  Computes the target net working capital (NWC) peg for M&A transactions and quantifies
  purchase price adjustments based on closing balance sheet deviations. Use when someone
  asks about working capital pegs in a deal, wants to calculate the NWC target for an
  acquisition, needs to determine a purchase price adjustment from closing balance sheet
  data, or is analyzing working capital true-up mechanics in an M&A transaction.
category: finance
tags: [m&a, working-capital, purchase-price-adjustment, due-diligence, transaction-analysis]
author: community
---

# Net Working Capital Peg Analysis

This skill computes the normalized NWC peg and calculates dollar-for-dollar purchase price adjustments when closing NWC deviates from the agreed target in M&A transactions.

## NWC Peg Analysis Workflow

### Step 1: Define NWC Components
Identify and agree on which line items are included:
- **Current Assets (typically included):** Accounts receivable, inventory, prepaid expenses, other current assets
- **Current Liabilities (typically included):** Accounts payable, accrued liabilities, deferred revenue (deal-specific), accrued compensation
- **Exclude from NWC:** Cash and cash equivalents, short-term debt, current portion of long-term debt, income tax payable/receivable (unless deal-specific), transaction-related accruals

### Step 2: Build the Historical NWC Dataset
- Pull monthly or trailing-twelve-month (TTM) balance sheet data (minimum 12 months, ideally 24–36 months)
- Calculate NWC for each period: `NWC = Included Current Assets − Included Current Liabilities`
- Flag and normalize anomalies: seasonal spikes, one-time items, acquisition-related distortions, stub periods

### Step 3: Compute the NWC Peg (Target)
Apply one or more of the following methods:
- **TTM Average:** Average monthly NWC over the trailing 12 months (most common)
- **TTM Median:** Median of monthly NWC (preferred when outliers exist)
- **Seasonally Adjusted Average:** Weight months by revenue seasonality factor
- **Negotiated Peg:** Buyer proposes based on normalized average; seller counters; final peg is agreed in the purchase agreement

Document the selected methodology and the resulting peg value with full workings.

### Step 4: Identify Normalization Adjustments
For each historical period, adjust for:
- Non-recurring items (litigation settlements, one-time vendor payments)
- Timing manipulations (accelerated collections, delayed payables near measurement date)
- Accounting policy changes between periods
- Intercompany balances that will be eliminated at close
- Deferred revenue treatment (SaaS/subscription businesses require special handling)

Restate historical NWC on a normalized basis before computing the peg.

### Step 5: Calculate the Closing NWC
- Obtain the estimated or actual closing balance sheet
- Apply the same NWC definition used to compute the peg
- Calculate Closing NWC: `Closing NWC = Closing Current Assets − Closing Current Liabilities`

### Step 6: Compute the Purchase Price Adjustment
```
NWC Adjustment = Closing NWC − Target NWC Peg

If Closing NWC > Peg → Buyer pays Seller the difference (upward adjustment)
If Closing NWC < Peg → Seller pays Buyer the difference (downward adjustment)
If Closing NWC = Peg → No adjustment
```

Apply any collar or threshold provisions specified in the purchase agreement (e.g., adjustments only triggered if deviation exceeds $X or X%).

### Step 7: Sensitivity Analysis
- Model ±10%, ±20% NWC deviations from peg
- Identify which line items carry the most variability (typically AR and inventory)
- Flag disputed items that may require post-close arbitration

## Output Format

Produce a structured analysis with the following sections:

**1. NWC Definition Table**
List every included and excluded balance sheet line item with rationale for treatment.

**2. Historical NWC Summary Table**
| Period | Current Assets | Current Liabilities | Raw NW
