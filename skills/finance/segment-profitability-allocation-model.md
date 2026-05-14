---
name: segment-profitability-allocation-model
description: >
  Allocates shared overhead and indirect costs across business segments using driver-based
  methods to produce fully loaded segment P&L statements. Use when someone wants to allocate
  shared costs to business units, asks about segment profitability analysis, needs to build
  a cost allocation model, wants to understand true segment-level margins, or is trying to
  identify which business lines are actually profitable after overhead.
category: finance
tags: [cost-allocation, segment-reporting, profitability, overhead, management-accounting]
author: community
---

# Segment Profitability Allocation Model

This skill builds a driver-based overhead cost allocation model that produces fully loaded segment P&L statements, and activates whenever someone needs to distribute shared costs across business segments or understand true unit economics by division.

## Allocation Model Workflow

### 1. Gather Inputs
Collect or request the following:
- **Segment revenue and direct costs** (COGS, direct labor, direct materials) for each segment
- **Shared cost pools** to allocate (IT, HR, Finance, Facilities, Legal, Marketing, Corporate overhead)
- **Segment operating data** to use as allocation drivers (headcount, revenue, square footage, transaction volume, CPU usage, etc.)
- **Number of segments** and their names/identifiers

### 2. Define Cost Pools and Allocation Drivers
Map each shared cost pool to the most causally appropriate driver:

| Cost Pool | Recommended Driver |
|---|---|
| HR / People Ops | Headcount |
| IT Infrastructure | Users or compute units |
| Facilities / Real Estate | Square footage occupied |
| Finance / Accounting | Transaction volume or revenue |
| Legal / Compliance | Revenue or FTE count |
| Corporate Leadership | Revenue |
| Marketing (brand) | Revenue |
| Customer Support | Ticket volume or customer count |

If the user has not specified drivers, recommend the defaults above and ask for confirmation before proceeding.

### 3. Calculate Allocation Percentages
For each cost pool:
1. Sum the driver metric across all segments
2. Divide each segment's driver value by the total to get its allocation percentage
3. Apply that percentage to the total cost pool amount

Formula: `Segment Allocation = (Segment Driver Value / Total Driver Value) × Total Cost Pool`

### 4. Handle Exceptions and Edge Cases
- **Zero-driver segments**: If a segment has zero for a driver (e.g., a new segment with no headcount), flag it and either exclude it or apply a minimum floor allocation
- **Multiple drivers per pool**: Support weighted blended drivers (e.g., 50% revenue + 50% headcount) when a single driver is insufficient
- **Unallocated residuals**: Round allocation percentages to ensure they sum to exactly 100%; assign any residual to the largest segment or flag it explicitly
- **Segment-specific exclusions**: Allow certain cost pools to be excluded from specific segments if business logic warrants (document the rationale)

### 5. Build the Fully Loaded Segment P&L
Structure each segment's statement in this order:
1. Revenue
2. Direct COGS → **Gross Profit / Gross Margin %**
3. Direct Operating Expenses (segment-specific)
4. → **Segment Contribution Margin / %**
5. Allocated Overhead (line-by-line by cost pool)
6. → **Fully Loaded Segment EBIT / EBIT Margin %**

### 6. Validate and Reconcile
- Confirm total allocated overhead across all segments equals the total shared cost pool (no leakage or double-counting)
- Reconcile segment-level fully loaded EBIT to consolidated company EBIT
- Flag any segment with negative fully loaded EBIT for management attention

## Output Format

Produce the following in sequence:

**1. Allocation Driver Summary Table**
One table per cost pool showing: Segment Name | Driver Value | Allocation % | Allocated Amount ($)

**2. Consolidated Allocation Summary**
Single table: Segment Name | Total Allocated Overhead | % of Total Overhead Allocated

**3. Fully Loaded Segment P&L Table**
Columns: Metric | Segment A | Segment B | … | Total Company
Rows follow the P&L structure in Step 5, with both dollar amounts and margin percentages

**4. Key Findings (
