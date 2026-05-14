---
name: vendor-early-termination-cost-model
description: >
  Calculates the total financial impact of exiting a vendor contract before its expiration date, weighing penalties and transition costs against projected savings. Use when someone asks about breaking a vendor contract, wants to know if it's worth exiting a supplier agreement early, is evaluating whether to switch vendors before a contract ends, or needs to understand the true cost of terminating a software or service deal. Also activates when someone asks "how much will it cost to get out of this contract" or wants to model the break-even point for an early exit.
category: finance
tags: [vendor-management, contract-analysis, cost-modeling, procurement, financial-planning]
author: community
---

# Vendor Early Termination Cost Model

This skill builds a structured financial model to calculate the net cost or savings of exiting a vendor contract early, and Claude will use it whenever someone needs to make or justify that decision with numbers.

## Cost Modeling Workflow

### 1. Gather Contract Termination Costs
Collect all one-time exit costs:
- **Early termination fee (ETF):** Stated penalty in the contract (flat fee, percentage of remaining contract value, or months of fees)
- **Remaining committed spend:** Sum of all payments owed if the contract runs to term
- **Data migration or export fees:** Any vendor-charged fees to extract your data
- **Notice period costs:** Fees incurred during any required notice window before termination is effective

### 2. Gather Transition Costs
Collect all costs to move off the vendor:
- **New vendor setup/implementation fees:** One-time onboarding costs for the replacement
- **Internal labor:** Engineer or staff hours × loaded hourly rate for migration work
- **Parallel running costs:** Period where both old and new vendors are paid simultaneously
- **Retraining costs:** Staff training hours × loaded rate for the new system
- **Productivity loss estimate:** Revenue impact or hours lost during transition period

### 3. Calculate Remaining Contract Value
`Remaining Contract Value = Monthly Fee × Months Remaining`

If there are tiered or variable fees, sum each remaining period individually.

### 4. Calculate New Vendor Cost Over Same Period
`New Vendor Cost (equivalent period) = New Monthly Fee × Months Remaining`

Include any discounts, ramp periods, or annual pricing adjustments.

### 5. Compute Gross Savings
`Gross Savings = Remaining Contract Value − New Vendor Cost (equivalent period)`

### 6. Compute Total Exit Cost
`Total Exit Cost = ETF + Migration Costs + Transition Labor + Parallel Run Costs + Retraining`

### 7. Compute Net Financial Impact
`Net Impact = Gross Savings − Total Exit Cost`

- Positive = net savings from exiting early
- Negative = net cost; staying is cheaper unless there are non-financial reasons to leave

### 8. Compute Break-Even Month
`Break-Even Month = Total Exit Cost ÷ Monthly Savings`

Monthly Savings = (Current Monthly Fee − New Monthly Fee)

This tells the user how many months after exit until they recoup all transition costs.

### 9. Flag Non-Financial Factors
Always note these as outside the model but relevant to the decision:
- Vendor performance issues or SLA breaches (may void ETF)
- Strategic dependency or lock-in risk
- Regulatory or compliance requirements
- Relationship or reputation considerations with the vendor

## Output Format

Produce a structured financial summary with the following sections:

**1. Inputs Summary Table**
| Item | Value |
|---|---|
| Current monthly fee | $X |
| Months remaining | N |
| Early termination fee | $X |
| New vendor monthly fee | $X |
| Total transition costs | $X |

**2. Cost Model Results Table**
| Category | Amount |
|---|---|
| Remaining contract value | $X |
| New vendor cost (same period) | $X |
| Gross savings | $X |
| Total exit costs | $X |
| **Net financial impact** | **$X (savings / cost)** |
| Break-even month | Month N |

**3. Plain-Language Verdict (2–3 sentences)**
State clearly whether exiting early is financially favorable, by how much, and when the break-even occurs. Flag if the decision is marginal (net impact within 10% of total exit cost).

**4
