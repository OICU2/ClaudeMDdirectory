---
name: ops-cost-per-service-line-analysis
description: >
  Allocates shared operational costs across individual service lines to reveal the true cost and margin of each operational output. Use when someone says "we don't know if this service is actually profitable," asks about true cost per service, or wants to understand which service lines are carrying or dragging margin. Also triggers when someone needs to allocate overhead fairly across departments or wants to stop subsidizing unprofitable operations.
category: operations
tags: [cost-allocation, service-lines, margin-analysis, overhead, profitability]
author: community
---

# Ops Cost Per Service Line Analysis

This skill breaks down shared operational costs and allocates them across individual service lines to surface the true cost, margin, and profitability of each line — used whenever blended financials are masking underperforming or overperforming services.

## Cost Allocation Workflow

### 1. Inventory All Costs
- Collect direct costs per service line (labor, materials, direct tools)
- List all shared/overhead costs: rent, utilities, management salaries, shared software, insurance, admin staff, IT infrastructure
- Flag any costs currently unassigned or pooled under "general overhead"

### 2. Define Service Lines
- List every distinct service line or operational output (e.g., onboarding, support, fulfillment, consulting, maintenance)
- Confirm revenue figures for each line for the same period as cost data
- Identify which lines share resources and which are operationally independent

### 3. Select Allocation Drivers
Assign each shared cost a logical allocation driver:
- **Headcount-based**: management salaries, HR, office space, benefits admin
- **Revenue-based**: executive overhead, finance, legal, compliance
- **Usage-based**: software licenses, IT infrastructure, equipment
- **Time-based**: apply if time-tracking data is available
- **Transaction-based**: billing, support tickets, order volume

Document the driver chosen for each cost category and the justification.

### 4. Calculate Allocation Percentages
For each shared cost pool:
- Sum the total allocation driver across all service lines
- Divide each service line's driver value by the total to get its percentage
- Apply that percentage to the shared cost pool
- Record the allocated dollar amount per service line

### 5. Build Full Cost View Per Service Line
For each service line, sum:
- Direct costs
- Allocated share of each overhead category
- Total fully-loaded cost

Calculate:
- Gross margin (Revenue − Direct Costs)
- Contribution margin (Revenue − Direct Costs − Allocated Overhead)
- Margin % for each

### 6. Sensitivity Check
- Rerun allocation using at least one alternative driver for the largest cost pool
- Note where the profitability ranking of service lines changes under different assumptions
- Flag any service line whose margin flips positive/negative under alternate methods

### 7. Flag and Interpret
- Identify service lines where allocated overhead exceeds direct costs (overhead-heavy)
- Identify cross-subsidization: profitable lines covering losses in others
- Flag any service line with negative contribution margin
- Note if any overhead pools are disproportionately large and warrant investigation

## Output Format

Produce a structured analysis with the following sections:

**1. Cost Inventory Table**
Columns: Cost Category | Type (Direct/Shared) | Total Amount | Allocation Driver | Justification

**2. Allocation Matrix**
Rows = shared cost categories; Columns = service lines + total
Each cell shows allocated dollar amount; final row shows total allocated overhead per service line

**3. Service Line P&L Summary Table**
Columns: Service Line | Revenue | Direct Costs | Allocated Overhead | Total Fully-Loaded Cost | Gross Margin % | Contribution Margin %
Sort by contribution margin % descending

**4. Key Findings (bullet list, 5–8 bullets)**
- Most and least profitable service lines
- Any lines with negative contribution margin
- Cross-subsidization patterns
- Largest overhead drivers
- Sensitivity finding (does ranking hold under alternate allocation?)

**5. Recommended Actions (bullet list, 3–5 items)**
Specific decisions to consider: price adjustments, cost reduction targets, service line candidates for investment or wind-down, overhead reduction opportunities

Length: As long as the data requires — no padding, no truncation of material findings. Tables should be complete, not summarized.
