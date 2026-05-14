---
name: bill-of-materials-cost-rollup
description: >
  Aggregates raw material, labor, and overhead costs across multi-level bills of materials to produce a fully loaded unit cost for each finished good or assembly. Use when someone says "roll up my BOM costs," asks about calculating the fully loaded cost of a product, wants to determine the true unit cost of an assembly, needs to analyze cost breakdowns across BOM levels, or is trying to understand how material and labor costs flow through a manufacturing structure.
category: finance
tags: [bom, cost-rollup, manufacturing, unit-cost, overhead]
author: community
---

# BOM Cost Rollup

This skill computes fully loaded unit costs by recursively aggregating raw material, labor, and overhead costs across all levels of a bill of materials, and it activates whenever someone needs to trace or calculate total manufacturing cost through a product structure.

## Cost Rollup Workflow

1. **Capture BOM structure** — Collect each assembly and its components: part number, description, quantity per parent (QPA), and BOM level. Prompt the user if any relationships are ambiguous or if multi-level nesting is unclear.

2. **Gather cost inputs per component** — For each line item collect:
   - **Raw material cost**: purchased price per unit or per unit of measure
   - **Labor cost**: labor hours × labor rate ($/hr) per unit produced
   - **Overhead cost**: either a flat rate per unit or an overhead absorption rate applied to labor cost (e.g., 150% of direct labor)
   - **Scrap/yield factor**: if yield < 100%, gross up the required quantity: `Required Qty = QPA / yield%`

3. **Calculate single-level extended cost** — For each component at each level:
   ```
   Extended Material Cost = Unit Material Cost × Required Qty
   Extended Labor Cost    = Unit Labor Cost    × Required Qty
   Extended Overhead Cost = Unit Overhead Cost × Required Qty
   Single-Level Total     = Extended Material + Extended Labor + Extended Overhead
   ```

4. **Roll up multi-level costs bottom-up** — Start at the lowest BOM level (purchased parts / raw materials). For each subassembly, replace its children's costs with their already-rolled-up unit costs, then apply its own labor and overhead on top:
   ```
   Subassembly Rolled Cost = Sum of (Child Rolled Unit Cost × QPA) + Own Labor + Own Overhead
   ```
   Repeat upward until the finished good level is reached.

5. **Apply purchase vs. make logic** — If a component is bought rather than made, use only its purchase price (no internal labor/overhead). Flag any "make or buy" ambiguities and ask the user to clarify.

6. **Calculate fully loaded unit cost** — At the top level:
   ```
   Fully Loaded Unit Cost = Total Material + Total Labor + Total Overhead
   Cost Breakdown %       = Each element ÷ Fully Loaded Unit Cost × 100
   ```

7. **Validate and flag issues** — Check for circular references, missing costs, zero-yield items, and currency mismatches. Surface all warnings explicitly before presenting results.

## Output Format

Produce a structured cost rollup report with the following sections:

**1. BOM Cost Rollup Summary Table**
| Level | Part Number | Description | QPA | Unit Mat. Cost | Unit Labor Cost | Unit OH Cost | Extended Total |
|-------|-------------|-------------|-----|----------------|-----------------|--------------|----------------|
Include one row per BOM line, indented to show hierarchy. Bold the finished good row.

**2. Fully Loaded Unit Cost Card**
```
Finished Good: [Part Number] — [Description]
─────────────────────────────────────────
Total Material Cost:   $XX.XX  (XX%)
Total Labor Cost:      $XX.XX  (XX%)
Total Overhead Cost:   $XX.XX  (XX%)
─────────────────────────────────────────
FULLY LOADED UNIT COST: $XX.XX
```

**3. Assumptions & Warnings**
- List every assumption made (overhead rate method, yield defaults, currency, etc.)
- List any missing data points that require user confirmation
- Flag circular references or inconsistencies

**4. Sensitivity Notes (if applicable)**
- Identify the top 1–3 cost drivers by dollar impact
- Note which inputs
