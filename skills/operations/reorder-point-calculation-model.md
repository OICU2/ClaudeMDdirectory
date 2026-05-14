---
name: reorder-point-calculation-model
description: >
  Computes optimal reorder points for consumable supplies or inventory items based on lead times, usage rates, and safety stock requirements. Use when someone asks about when to reorder stock, wants to avoid running out of supplies, needs to calculate safety stock levels, is trying to optimize inventory replenishment timing, or asks how much buffer inventory to keep on hand.
category: operations
tags: [inventory, supply-chain, procurement, reorder-point, safety-stock]
author: community
---

# Reorder Point Calculation Model

This skill calculates the optimal reorder point (ROP) for inventory items so Claude can tell users exactly when to place a new order before stock runs out.

## Calculation Workflow

1. **Gather required inputs** — Ask for or extract from context:
   - Average daily (or weekly) usage rate (units/time period)
   - Lead time (days or weeks from order placement to receipt)
   - Desired service level or stockout tolerance (e.g., 95% service level)
   - Usage variability (standard deviation of daily/weekly demand, if known)
   - Lead time variability (standard deviation of lead time, if known)

2. **Compute average demand during lead time**
   - Formula: `Demand During Lead Time = Average Usage Rate × Lead Time`
   - Use consistent time units throughout (convert if needed)

3. **Calculate safety stock**
   - If variability data is available (preferred):
     `Safety Stock = Z × √(Lead Time × σ_demand² + Average Demand² × σ_lead_time²)`
     where Z = service level z-score (90% → 1.28, 95% → 1.65, 99% → 2.33)
   - If only demand variability is known:
     `Safety Stock = Z × σ_demand × √Lead Time`
   - If no variability data is available (simple method):
     `Safety Stock = Average Usage Rate × (Maximum Lead Time − Average Lead Time)`

4. **Compute reorder point**
   - `ROP = Demand During Lead Time + Safety Stock`

5. **Sanity check** — Flag if:
   - ROP exceeds maximum storage capacity or typical order quantity
   - Safety stock is zero or negative (insufficient variability data)
   - Lead time or usage inputs seem inconsistent with stated context

6. **Recommend review frequency** — Suggest how often the ROP should be recalculated based on demand stability (monthly for stable items, weekly for volatile items).

## Output Format

Produce a structured response with these sections:

**Inputs Used**
- List each input value with units (fill in assumed defaults if user omitted values, and flag assumptions)

**Calculation Breakdown**
- Show each formula with numbers substituted in, one line per step
- State the z-score used and which service level it corresponds to

**Results**
| Metric | Value |
|---|---|
| Average Demand During Lead Time | X units |
| Safety Stock | X units |
| **Reorder Point (ROP)** | **X units** |

**Interpretation**
- One to two plain-language sentences: "Place a new order when your stock falls to X units. This provides approximately Y days of buffer against demand spikes or delivery delays."

**Assumptions & Next Steps**
- Bullet list of any assumed values, data quality notes, or recommendations to refine the model (e.g., track demand variance, negotiate lead time consistency with supplier)
