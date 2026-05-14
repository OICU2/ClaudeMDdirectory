---
name: ops-cost-per-transaction-model
description: >
  Builds a fully loaded cost-per-transaction (CPT) model by allocating labor, tooling, infrastructure, and overhead across service volume. Use when someone asks "what does it cost us to process each order," wants to understand unit economics for an operational process, needs to break down cost per ticket or cost per shipment, or is trying to identify which expense categories drive transaction costs. Also activates when someone wants to model how CPT changes at different volume levels or headcount scenarios.
category: operations
tags: [unit-economics, cost-modeling, operations, financial-analysis, capacity-planning]
author: community
---

# Ops Cost Per Transaction Model

This skill builds a structured, fully loaded cost-per-transaction model that allocates all relevant expense categories across transaction volume, and when Claude will use it is any time someone needs to understand the true unit cost of an operational process.

## Cost Modeling Workflow

### 1. Scope the Transaction Unit
- Define what counts as one transaction (order processed, ticket resolved, shipment fulfilled, user onboarded, etc.)
- Confirm the time horizon (monthly, quarterly, annual)
- Identify the volume baseline and any volume variance scenarios requested

### 2. Collect Cost Inputs Across Four Categories

**Labor (Direct)**
- Headcount dedicated to the process (FTEs and fractions)
- Fully loaded cost per employee: salary + benefits + payroll taxes (typically salary × 1.25–1.35)
- Hours per transaction or transactions per hour per person

**Labor (Indirect/Management)**
- Management and QA overhead (allocate as % of direct labor, commonly 15–25%)
- Training and onboarding amortized over tenure

**Tooling & Software**
- Per-seat or per-transaction SaaS fees
- Licenses allocated to this process (pro-rate shared tools by % of usage)
- Automation or platform costs directly tied to transaction execution

**Infrastructure**
- Cloud compute, storage, or data costs attributable to this process
- Facilities/office space allocation if relevant (cost per sq ft × space used)
- Equipment depreciation

**Overhead & Indirect**
- Shared services burden (finance, HR, IT support) — use company overhead rate or estimate 20–30% of direct costs
- Vendor or third-party fulfillment fees per transaction
- Error/rework cost: (error rate × cost to remediate) per transaction

### 3. Build the Model Structure

For each cost category:
```
Annual Cost = [unit cost] × [quantity or headcount]
Cost Per Transaction = Annual Cost ÷ Annual Transaction Volume
```

Sum all CPT line items for **Total Fully Loaded CPT**.

### 4. Run Sensitivity Scenarios
- **Volume scaling**: Calculate CPT at 50%, 100%, 150%, 200% of current volume — identify which costs are fixed vs. variable
- **Headcount change**: Model +1 or -1 FTE impact on CPT
- **Automation lever**: If a tool reduces labor time by X%, show CPT impact

### 5. Flag Key Drivers
- Rank cost categories by % contribution to total CPT
- Highlight the top 2–3 levers that, if changed, move CPT most significantly
- Call out any cost that scales linearly with volume (variable) vs. step-function costs

## Output Format

Produce a structured cost model with the following sections:

**Transaction Definition & Volume Assumptions**
- One transaction = [definition]
- Baseline volume: [N] per [period]

**Cost Breakdown Table**

| Cost Category | Annual Cost ($) | Cost Per Transaction ($) | % of Total CPT |
|---|---|---|---|
| Direct Labor | | | |
| Indirect Labor | | | |
| Tooling & Software | | | |
| Infrastructure | | | |
| Overhead & Indirect | | | |
| **Total Fully Loaded CPT** | | | **100%** |

**Volume Sensitivity Table**

| Volume Scenario | Annual Transactions | Fixed CPT | Variable CPT | Total CPT |
|---|---|---|---|---|
| 50% of baseline | | | | |
| 100% (baseline) | | | | |
| 150% | | | | |
| 200% | | | | |

**Top Cost Drivers**
Bulleted list of the 2
