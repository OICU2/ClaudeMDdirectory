---
name: cash-conversion-cycle-analysis
category: finance
description: >
  Calculates and diagnoses the cash conversion cycle (CCC) by breaking down days inventory outstanding (DIO), days sales outstanding (DSO), and days payable outstanding (DPO). Use when someone asks about working capital efficiency, wants to understand how long cash is tied up in operations, needs to analyze liquidity from financial statements, is comparing CCC across companies or periods, or wants to identify bottlenecks in the order-to-cash or procure-to-pay process.
tags: [working-capital, liquidity, financial-analysis, cash-flow, operations]
author: community
---

# Cash Conversion Cycle Analysis

This skill calculates CCC components from financial data and diagnoses what the results mean for operational efficiency and liquidity management.

## Analysis Workflow

### 1. Collect Required Inputs
Request or extract these values from financial statements:
- **Revenue** (Income Statement)
- **Cost of Goods Sold / COGS** (Income Statement)
- **Average Accounts Receivable** = (Beginning AR + Ending AR) / 2
- **Average Inventory** = (Beginning Inventory + Ending Inventory) / 2
- **Average Accounts Payable** = (Beginning AP + Ending AP) / 2
- **Number of days in period** (365 for annual, 90 for quarterly)

If only single-period balances are available, use them directly and note the limitation.

### 2. Calculate Each Component

**Days Sales Outstanding (DSO)**
```
DSO = (Average Accounts Receivable / Revenue) × Days in Period
```
*How long it takes to collect cash after a sale.*

**Days Inventory Outstanding (DIO)**
```
DIO = (Average Inventory / COGS) × Days in Period
```
*How long inventory sits before being sold.*

**Days Payable Outstanding (DPO)**
```
DPO = (Average Accounts Payable / COGS) × Days in Period
```
*How long the company takes to pay its suppliers.*

**Cash Conversion Cycle (CCC)**
```
CCC = DSO + DIO − DPO
```

### 3. Interpret the Results

Apply these diagnostic rules:

| CCC Value | Interpretation |
|-----------|---------------|
| Negative CCC | Company collects cash before paying suppliers — strong liquidity position (e.g., Amazon, Walmart) |
| CCC near zero | Balanced working capital cycle |
| Low positive CCC (< 30 days) | Efficient operations, minimal cash tied up |
| High positive CCC (> 60 days) | Significant cash locked in working capital; investigate components |
| Rising CCC over time | Deteriorating efficiency; flag which component is driving the increase |

**Component-level diagnosis:**
- High DSO → customers are slow to pay; review credit policy or collections
- High DIO → inventory is moving slowly; review demand forecasting, obsolescence, or procurement
- Low DPO → paying suppliers too quickly; renegotiate payment terms
- DPO > DSO + DIO → company is using supplier financing to fund operations (can be a risk flag)

### 4. Benchmark and Contextualize
- Compare CCC to prior periods (trend analysis)
- Compare to industry peers if data is available
- Note that capital-intensive manufacturing typically has higher CCC than retail or SaaS
- Flag any outlier components that deviate significantly from industry norms

### 5. Provide Recommendations
Based on the diagnosis, recommend 1–3 specific actions targeting the weakest component (e.g., tighten credit terms, reduce safety stock, extend supplier payment terms).

## Output Format

Produce a structured analysis with the following sections:

**1. Input Summary**
A table listing the raw inputs used and their source (if provided).

**2. Calculation Results**
A clearly labeled table showing:
| Metric | Formula | Value |
|--------|---------|-------|
| DSO | AR / Revenue × Days | X days |
| DIO | Inventory / COGS × Days | X days |
| DPO | AP / COGS × Days | X days |
| **CCC** | DSO + DIO − DPO | **X days** |

**3. Component Diagnosis**
2–4 sentences interpreting each component's value and what it signals
