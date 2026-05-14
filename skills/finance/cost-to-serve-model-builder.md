---
name: cost-to-serve-model-builder
description: >
  Allocates direct and indirect costs across customer segments or product lines to calculate the true fully loaded cost of delivering each service or product. Use when someone says "I need to know what it actually costs to serve each customer," asks about true profitability by segment, wants to build a cost allocation model, needs to understand which customers or products are losing money, or is trying to identify hidden cost drivers in their business.
category: finance
tags: [cost-allocation, profitability, unit-economics, activity-based-costing, margin-analysis]
author: community
---

# Cost-to-Serve Model Builder

This skill constructs a fully loaded cost-to-serve model by systematically allocating direct and indirect costs across customer segments or product lines, revealing true profitability at the unit level.

## Model Building Workflow

### Step 1: Gather Cost Inputs
Ask the user to provide or estimate:
- **Direct costs**: materials, direct labor, packaging, shipping per unit/order
- **Indirect costs**: overhead, support, account management, billing, warehouse, IT
- **Revenue data**: price or revenue per unit/order by segment or product
- **Volume data**: transactions, orders, or units per segment/product per period

If data is incomplete, prompt for the most critical missing pieces or offer to use placeholder assumptions clearly labeled as such.

### Step 2: Define Cost Pools
Organize costs into logical pools:
- Order fulfillment costs (picking, packing, shipping)
- Customer acquisition and retention costs
- Account servicing costs (support tickets, calls, account management time)
- Returns and exceptions handling
- Overhead allocation (finance, IT, facilities — allocated by revenue share, headcount, or usage)

### Step 3: Choose Allocation Drivers
For each indirect cost pool, assign the most appropriate driver:
- Order volume → fulfillment costs
- Support ticket count → customer service costs
- Revenue percentage → corporate overhead
- Headcount served → HR and facilities
- Data usage or transactions → IT costs

Document every driver choice and flag where assumptions are weakest.

### Step 4: Calculate Fully Loaded Cost Per Segment
For each customer segment or product line:
1. Sum all directly assigned costs
2. Allocate each indirect cost pool using its driver and the segment's share of that driver
3. Total direct + allocated indirect = fully loaded cost
4. Subtract from segment revenue to get **true segment profit** and **profit margin %**

### Step 5: Identify Insights and Anomalies
- Flag any segment where cost-to-serve exceeds or nearly equals revenue
- Identify the largest cost drivers per segment
- Compare cost-to-serve ratios across segments (cost as % of revenue)
- Surface cross-subsidization: which profitable segments are covering losses elsewhere

## Output Format

Produce the following structured outputs:

**1. Cost Pool Summary Table**
| Cost Pool | Total Cost | Driver | Driver Logic |
|---|---|---|---|

**2. Segment Cost-to-Serve Table**
| Segment / Product | Revenue | Direct Costs | Allocated Indirect | Total CTS | Gross Profit | Margin % |
|---|---|---|---|---|---|---|

**3. Key Findings (3–5 bullet points)**
- Most and least profitable segments by absolute profit and margin %
- Largest cost driver per segment
- Any segment where CTS > 80% of revenue (at-risk flag)
- Cross-subsidization summary if present

**4. Assumption Log**
List every assumption made, labeled by certainty (confirmed, estimated, placeholder). Include recommended data to collect to improve model accuracy.

**5. Recommended Actions (optional, if patterns are clear)**
Suggest 2–3 concrete business actions: pricing adjustments, segment de-prioritization, cost reduction levers, or minimum order thresholds.

Deliver all tables in markdown format. Keep the assumption log separate and clearly marked. Flag speculative conclusions explicitly.
