---
name: customer-contract-profitability-model
description: >
  Allocates direct costs, overhead, and sales commissions to individual customer contracts to calculate true contract-level gross margin. Use when someone asks "how profitable is this customer," wants to analyze contract-level margins, needs to allocate shared costs across accounts, or is trying to understand the true cost to serve a specific client. Also activates when someone needs to compare gross margin across contracts or identify unprofitable customer relationships.
category: finance
tags: [profitability, contract-analysis, cost-allocation, gross-margin, customer-economics]
author: community
---

# Customer Contract Profitability Model

This skill builds a structured cost allocation and gross margin model for individual customer contracts, helping identify which clients are truly profitable after all direct, indirect, and commission costs are accounted for.

## Contract Profitability Workflow

### Step 1: Capture Contract Revenue
- Collect total contract value (TCV) and recognized revenue for the period being analyzed
- Note billing cadence (monthly, milestone, annual) and any variable fee components
- Identify upsells, overages, or out-of-scope charges billed separately

### Step 2: Allocate Direct Costs
Direct costs are those exclusively attributable to this contract:
- **Labor**: Hours logged by role × fully-loaded hourly rate (salary + benefits + payroll tax)
- **Subcontractors**: Invoiced amounts directly tied to deliverables
- **Software/tooling**: Licenses purchased specifically for this client
- **Travel and expenses**: Receipts coded to this contract
- **Materials or COGS**: Physical goods or third-party services resold

### Step 3: Allocate Overhead (Indirect Costs)
Choose an allocation driver appropriate to the business:
- **Headcount-based**: Contract's FTE share × total overhead pool
- **Revenue-based**: Contract revenue ÷ total revenue × overhead pool
- **Time-based**: Contract hours ÷ total billable hours × overhead pool

Overhead pools to allocate:
- Facilities and IT infrastructure
- Management and administrative salaries
- Finance, HR, and legal support
- Non-client software licenses (CRM, ERP, etc.)

Document the chosen driver and apply it consistently across all contracts.

### Step 4: Calculate Sales Commission and Customer Acquisition Cost
- Identify commissions paid at deal close and any renewal commissions
- Amortize acquisition commissions over contract term if multi-year
- Include pre-sales engineering time if tracked separately
- Add onboarding costs if treated as a cost of sale

### Step 5: Compute Gross Margin at Contract Level

```
Contract Revenue
- Direct Costs
- Allocated Overhead
- Amortized Commission & CAC
= Contract Gross Profit

Contract Gross Margin % = Contract Gross Profit ÷ Contract Revenue × 100
```

### Step 6: Interpret and Flag
Apply the following thresholds (adjust to industry benchmarks):
- **≥ 60% GM**: Healthy — prioritize retention and expansion
- **30–59% GM**: Acceptable — review overhead allocation and pricing on renewal
- **< 30% GM**: At-risk — escalate for renegotiation or strategic review
- **Negative GM**: Unprofitable — immediate action required; calculate breakeven price

### Step 7: Sensitivity Analysis
Run three scenarios for each contract:
1. **Base case**: Current actuals
2. **Upside**: 10% revenue increase or 10% direct cost reduction
3. **Downside**: Scope creep adding 15% labor hours

## Output Format

Produce a structured contract profitability summary with the following sections:

**Contract Header**
- Customer name, contract ID, term dates, and total contract value

**Revenue & Cost Table** (tabular format)
| Line Item | Amount ($) | % of Revenue |
|---|---|---|
| Contract Revenue | | 100% |
| Direct Labor | | |
| Direct Non-Labor | | |
| Allocated Overhead | | |
| Sales Commission (amortized) | | |
| **Gross Profit** | | |
| **Gross Margin %** | | |

**Allocation Methodology Note** (2–3 sentences explaining which driver was used and why)

**Scenario Summary Table** (base / upside / downside gross margin %)

**Recommendation** (1–3 
