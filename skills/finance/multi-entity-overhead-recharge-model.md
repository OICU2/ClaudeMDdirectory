---
name: multi-entity-overhead-recharge-model
description: >
  Allocates shared overhead costs across multiple legal entities using configurable allocation keys such as headcount, revenue, or floor space. Use when someone asks about intercompany cost allocation, wants to recharge shared services to subsidiaries, needs to split overhead across business units, asks how to distribute central costs fairly, or wants to build a management recharge model. Produces a structured allocation model with driver-based keys, entity-level charge calculations, and a reconciliation summary.
category: finance
tags: [intercompany, cost-allocation, overhead, recharge, management-accounts]
author: community
---

# Multi-Entity Overhead Recharge Model

This skill builds a structured overhead recharge model that distributes shared costs across legal entities or business units using configurable allocation keys, and Claude will use it whenever a user needs to fairly apportion central or shared costs in a multi-entity structure.

## Allocation Model Workflow

1. **Identify cost pools**: Ask the user to list the shared overhead categories to be recharged (e.g. IT, Finance, HR, Facilities, Group Management). If not provided, suggest common pools and ask for confirmation.

2. **Collect total cost per pool**: For each cost pool, capture the total annual (or period) cost to be allocated. Request actuals or budget figures as appropriate.

3. **Define allocation keys**: For each cost pool, assign the most appropriate driver:
   - **Headcount** → HR, Payroll, Facilities
   - **Revenue** → Group Management, Finance, Legal
   - **IT users or devices** → IT, Software licences
   - **Floor space (m²)** → Facilities, Utilities
   - **Equal split** → Board-level or governance costs
   - Allow the user to override any default key.

4. **Collect entity-level driver data**: For each entity, collect the relevant metric for each allocation key (e.g. headcount per entity, revenue per entity). Build a driver table:
   - Rows = entities
   - Columns = each allocation key
   - Final column = allocation percentage per key (entity metric ÷ total metric)

5. **Calculate recharge amounts**: For each cost pool:
   - Multiply total pool cost by each entity's allocation percentage for that key
   - Produce a charge per entity per cost pool

6. **Summarise by entity**: Aggregate all pool charges per entity to show total overhead recharge per entity.

7. **Reconciliation check**: Confirm that the sum of all entity charges equals the total overhead to be allocated (zero variance). Flag any rounding differences.

8. **Handle edge cases**:
   - If an entity has zero in a driver (e.g. no headcount), exclude it from that pool or apply a minimum floor if instructed.
   - If a cost pool should be capped per entity, apply the cap and redistribute the residual.
   - Note any pools excluded from recharge (e.g. entity-specific costs).

9. **Document assumptions**: Record allocation key choices, data sources, period covered, and any manual overrides made.

## Output Format

Produce the following sections in order:

**1. Driver Table**
A markdown table with entities as rows and each allocation key as columns, showing raw metric values and the resulting percentage for each key.

**2. Cost Pool Allocation Table**
A markdown table with cost pools as rows and entities as columns, showing the monetary charge per entity per pool, with a row total and column total.

**3. Entity Summary Table**
A single markdown table showing total overhead recharged to each entity, as both an absolute amount and a percentage of total overhead.

**4. Reconciliation Line**
A one-line check: Total overhead allocated vs. total cost pools — confirm match or flag variance.

**5. Assumptions & Notes**
A bullet list of allocation key choices, data period, currency, rounding method, and any overrides or exclusions.

All monetary values should be formatted consistently (e.g. £000s or $m as specified). Tables must be complete with no blank cells — use 0 where applicable.
