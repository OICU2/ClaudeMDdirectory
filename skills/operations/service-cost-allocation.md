---
name: service-cost-allocation
description: >
  Maps shared operational costs across departments, projects, or cost centers using configurable allocation rules to produce accurate per-unit or per-service cost visibility. Use when someone says "allocate costs to teams," asks about "shared infrastructure cost splits," wants to "figure out what each department owes," needs to "distribute overhead fairly," or is trying to "calculate true cost per service." Supports headcount-based, usage-based, fixed-percentage, and tiered allocation methods.
category: operations
tags: [cost-allocation, finops, cost-management, chargeback, showback]
author: community
---

# Service Cost Allocation

This skill calculates and distributes shared operational costs across departments, projects, or cost centers using defined allocation rules, and when activated produces an itemized allocation report with per-unit cost visibility.

## Allocation Workflow

### 1. Gather Cost Pool Inputs
Collect the following before allocating:
- Total shared cost amount and currency
- Cost period (monthly, quarterly, annual)
- Cost category (infrastructure, SaaS, support, facilities, platform)
- Whether tax and overhead should be included

### 2. Identify Allocation Dimensions
Ask the user to specify the target dimension:
- **Departments** (e.g., Engineering, Sales, HR)
- **Projects or products** (e.g., mobile app, data pipeline)
- **Cost centers** (e.g., CC-101, CC-204)
- **Environments** (e.g., prod, staging, dev)

### 3. Select Allocation Method
Apply exactly one method per cost pool:

| Method | When to Use | Driver |
|---|---|---|
| **Headcount-based** | Shared people costs, HR tools, office space | % of total employees per unit |
| **Usage-based** | Compute, storage, bandwidth | Actual consumption metrics |
| **Fixed percentage** | Pre-negotiated splits, contractual shares | Static % agreed upon |
| **Equal split** | No usage data available, fairness default | 1/N per unit |
| **Tiered** | Volume discounts or graduated pricing | Consumption bands |

### 4. Apply Allocation Rules
For each cost center or department:

```
Allocated Cost = Total Pool Cost × (Unit Driver / Sum of All Drivers)
```

For tiered allocation:
1. Sort units by consumption descending
2. Apply band rates sequentially
3. Distribute remaining balance proportionally

### 5. Handle Unallocated Remainder
- If rounding creates a remainder, assign it to the largest consumer
- If a cost center is excluded, redistribute its share proportionally among remaining units
- Flag any unit with zero driver value as "unallocatable" and escalate for manual assignment

### 6. Validate the Allocation
Before finalizing:
- Sum of all allocated amounts must equal total pool cost (±$0.01 rounding tolerance)
- No unit should receive a negative allocation
- Percentages must sum to 100%

## Output Format

Produce a structured allocation report with these sections:

**Header**
- Cost pool name, total amount, period, allocation method used

**Allocation Table**
| Department / Cost Center | Driver Value | Driver % | Allocated Cost | Cost per Unit (if applicable) |
|---|---|---|---|---|

- One row per allocation target
- Totals row at the bottom
- Highlight any unit flagged as unallocatable

**Summary Block**
- Total allocated (must match input)
- Number of units receiving allocation
- Allocation method used
- Any assumptions made (e.g., headcount source date, usage data period)

**Per-Unit Cost Card** (if unit metric provided)
- Cost per user, cost per API call, cost per GB, etc.
- Comparison to prior period if prior data was provided

**Caveats Section**
- List any missing data, manual overrides, or approximations used

Format as Markdown. Use tables for all numeric data. Keep narrative prose to under 3 sentences per section. If data is missing, state exactly what is needed before proceeding.
