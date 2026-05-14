---
name: multi-year-license-revenue-allocation
description: >
  Allocates and schedules revenue recognition for multi-year software or service license agreements across each performance obligation period. Use when someone says "we signed a multi-year license deal," asks about spreading revenue over a contract term, wants to recognize SaaS or software revenue across years, needs to allocate transaction price to performance obligations, or is building a deferred revenue schedule for a license agreement.
category: finance
tags: [revenue-recognition, asc-606, deferred-revenue, saas, license-agreements]
author: community
---

# Multi-Year License Revenue Allocation

This skill builds a complete revenue recognition schedule for multi-year software or service license agreements by identifying performance obligations, allocating the transaction price, and producing a period-by-period recognition table compliant with ASC 606 / IFRS 15.

## Revenue Allocation Workflow

### 1. Gather Contract Inputs
Collect the following before calculating:
- Total contract value (TCV) and currency
- Contract start and end dates (or term in months/years)
- Billing schedule (upfront, annual, monthly, milestone-based)
- List of distinct performance obligations (e.g., software license, implementation, support/maintenance, training, professional services)
- Standalone selling price (SSP) for each obligation, or basis for estimation (cost-plus, adjusted market, residual)
- Variable consideration components, if any (usage fees, renewals, discounts)
- Any material rights or options (e.g., renewal options at a discount)

### 2. Identify and Separate Performance Obligations
- Apply the ASC 606 / IFRS 15 "distinct" test: a good or service is distinct if the customer can benefit from it on its own and it is separately identifiable in the contract.
- Common obligations in software/SaaS deals:
  - **Licenses**: Recognize at a point in time if functional (right to use); over time if symbolic (right to access).
  - **SaaS / Hosted Services**: Recognize ratably over the service period.
  - **Implementation / Setup**: Recognize over time if inseparable; at point in time if distinct.
  - **Support & Maintenance**: Recognize ratably over the support term.
  - **Training / Professional Services**: Recognize as delivered or ratably.

### 3. Allocate Transaction Price
- Sum all SSPs to get the total SSP pool.
- Allocation formula per obligation:
  `Allocated Amount = (SSP of Obligation / Sum of All SSPs) × Total Transaction Price`
- If SSPs are not directly observable, use:
  - Adjusted market assessment approach
  - Expected cost-plus-margin approach
  - Residual approach (only if SSP is highly variable or uncertain)
- Document any variable consideration constraint adjustments.

### 4. Build the Recognition Schedule
- For each performance obligation, determine the recognition pattern (point in time vs. over time).
- For ratable obligations, divide the allocated amount by the number of recognition periods (months or quarters).
- For point-in-time obligations, place the full allocated amount in the period the obligation is satisfied.
- Map recognition against the billing schedule to compute deferred revenue and accounts receivable balances per period.
- Flag any contract modifications, renewals, or true-ups that would require schedule revision.

### 5. Validate
- Total recognized revenue across all periods must equal the total transaction price.
- Deferred revenue balance must equal billed-but-unrecognized amounts at each period end.
- Confirm no revenue is recognized before the contract criteria under ASC 606 Step 1 are met.

## Output Format

Produce the following sections in order:

**1. Contract Summary Table**
| Field | Value |
|---|---|
| Contract Name / ID | |
| TCV | |
| Term | |
| Billing Schedule | |
| Governing Standard | ASC 606 / IFRS 15 |

**2. Performance Obligations & Allocation Table**
| Obligation | SSP | SSP % | Allocated Amount | Recognition Pattern | Recognition Period |
|---|---|---|---|---|---|

**3. Period-by-Period Revenue Recognition Schedule**
Break into months or quarters depending on contract length (use quarters for contracts ≥ 2 years).
| Period | [Obligation 1] | [Obligation 2] | ... | Total Recognized | Cumulative
