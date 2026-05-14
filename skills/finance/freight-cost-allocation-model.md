---
name: freight-cost-allocation-model
description: >
  Allocates inbound and outbound freight costs across products, customers, or business units using
  weight, revenue, or volume-based allocation drivers. Use when someone asks how to distribute
  freight expenses, wants to allocate shipping costs to products or customers, needs a landed cost
  model, is building a freight cost per unit calculation, or wants to understand which allocation
  driver best fits their freight data.
category: finance
tags: [freight, cost-allocation, landed-cost, logistics, managerial-accounting]
author: community
---

# Freight Cost Allocation Model

This skill builds a structured freight cost allocation model that assigns inbound and/or outbound freight expenses to products, customers, or business units using the most appropriate driver (weight, revenue, volume, or shipment count).

## Allocation Workflow

### 1. Clarify Scope
- Confirm whether freight is inbound (supplier to warehouse), outbound (warehouse to customer), or both.
- Identify the allocation target: products, SKUs, customers, or business units.
- Ask for the total freight cost pool and the time period (monthly, quarterly, annual).

### 2. Select Allocation Driver
Choose the driver that best matches cost behavior:

| Driver | Best Used When |
|---|---|
| Weight (lbs/kg) | Carrier charges are weight-based; heavy goods vary significantly |
| Revenue | Simple approximation; freight is a percentage of sales value |
| Volume (cubic ft/m³) | Dimensional weight pricing; bulky, low-weight items |
| Shipment Count | Flat-rate or per-shipment carrier contracts |
| Hybrid (weight + volume) | Dimensional weight (DIM) carrier pricing applies |

If the user hasn't specified, recommend weight for inbound and revenue or weight for outbound, and explain why.

### 3. Build the Allocation Formula
**Rate calculation:**
```
Allocation Rate = Total Freight Cost Pool ÷ Total Driver Quantity
```

**Per-unit allocation:**
```
Allocated Freight (Product/Customer X) = Allocation Rate × Driver Quantity for X
```

**Landed cost per unit (if applicable):**
```
Landed Cost per Unit = Purchase Cost per Unit + (Allocated Inbound Freight ÷ Units Received)
```

### 4. Apply Step-Down or Layer Logic (if multiple cost pools)
- Split inbound freight by supplier/PO, then allocate to receiving SKUs.
- Split outbound freight by shipment or lane, then allocate to orders or customers.
- If multiple warehouses or distribution centers exist, allocate by facility first, then by product.

### 5. Validate the Model
- Confirm allocated totals reconcile to the freight cost pool (sum of allocations = total freight).
- Flag any products/customers with zero driver quantity that would receive no allocation — decide whether to exclude or assign a minimum.
- Calculate freight as a % of COGS or revenue to sanity-check reasonableness (typical range: 2–8% of revenue for outbound; 1–5% of COGS for inbound).

### 6. Handle Edge Cases
- **Expedited shipments:** Isolate and allocate separately or charge directly to the requesting product/customer.
- **Partial shipments/backorders:** Allocate based on units actually shipped, not ordered.
- **Returns/reverse logistics:** Track separately; do not blend with outbound freight pool unless specifically requested.

## Output Format

Produce the following sections in order:

**1. Allocation Summary Table**
A table with columns: Entity (product/customer/BU), Driver Quantity, Driver %, Allocated Freight ($), Freight per Unit (if applicable).

**2. Rate Card**
State the allocation rate(s) clearly:
- `Inbound freight rate: $X per [lb/unit/cubic ft]`
- `Outbound freight rate: $X per [lb/unit/$ revenue]`

**3. Formula Reference**
Write out the exact formulas used with the user's actual numbers substituted in one example row.

**4. Reconciliation Check**
Single line confirming: `Total allocated freight ($X) = Total freight cost pool ($X) ✓`

**5. Recommendations (optional, 2–3 bullets)**
Flag if the chosen driver seems misaligned with cost behavior, or if a hybrid driver
