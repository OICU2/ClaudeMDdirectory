---
name: overhead-absorption-rate-calculator
category: finance
description: >
  Computes predetermined and actual overhead absorption rates by cost center, identifies under- or over-absorbed overhead variances, and generates period-end journal adjustment entries. Use when someone asks about overhead absorption rates, wants to calculate factory overhead recovery, needs to analyze over- or under-absorbed overhead, asks how to set a predetermined overhead rate, or wants to produce period-end overhead adjustment entries.
tags: [overhead, cost-accounting, absorption-costing, manufacturing, variance-analysis]
author: community
---

# Overhead Absorption Rate Calculator

This skill computes predetermined and actual overhead absorption rates by cost center, flags absorption variances, and produces ready-to-post period-end adjustment journal entries.

## Workflow

### 1. Gather Inputs
Collect the following per cost center:
- **Budgeted fixed and variable overhead** (separate if possible)
- **Budgeted activity base** (machine hours, labor hours, units, or direct labor cost)
- **Actual overhead incurred** (fixed + variable, broken out if available)
- **Actual activity base achieved**
- **Accounting period** and **cost center name/code**

If any input is missing, ask the user before proceeding.

### 2. Compute Predetermined Overhead Rate (POAR)
```
POAR = Budgeted Total Overhead ÷ Budgeted Activity Base
```
- Report the rate with units (e.g., $12.50 per machine hour).
- If fixed and variable are provided separately, compute both a fixed rate and a variable rate, then sum for the combined POAR.

### 3. Compute Overhead Absorbed
```
Overhead Absorbed = POAR × Actual Activity Base Achieved
```

### 4. Compute Absorption Variance
```
Variance = Overhead Absorbed − Actual Overhead Incurred
```
- **Positive result → Over-absorbed** (too much overhead charged to production)
- **Negative result → Under-absorbed** (insufficient overhead charged to production)
- Express variance as an absolute dollar amount with a clear over/under label.
- Calculate variance as a percentage of actual overhead:
  ```
  Variance % = (Variance ÷ Actual Overhead Incurred) × 100
  ```

### 5. Root-Cause Note
Flag the primary driver of the variance:
- **Volume variance**: Actual activity ≠ Budgeted activity
- **Expenditure variance**: Actual overhead ≠ Budgeted overhead
- If both exist, split the variance using:
  ```
  Expenditure Variance = Budgeted Overhead − Actual Overhead Incurred
  Volume Variance      = POAR × (Actual Activity − Budgeted Activity)
  ```

### 6. Generate Period-End Adjustment Journal Entry
**Over-absorbed overhead** (debit the overhead control account to clear the credit balance):
```
DR  Manufacturing Overhead Control    $[variance]
    CR  Cost of Goods Sold (or P&L)       $[variance]
```
**Under-absorbed overhead** (credit the overhead control account to clear the debit balance):
```
DR  Cost of Goods Sold (or P&L)      $[variance]
    CR  Manufacturing Overhead Control    $[variance]
```
Include a narration line: *"To write off [over/under]-absorbed overhead for [period] — [cost center name]."*

### 7. Multi-Cost-Center Handling
If multiple cost centers are provided, repeat steps 2–6 for each, then produce a summary table and a single consolidated journal entry.

## Output Format

Produce the following sections in order:

**1. Input Summary Table**
| Field | Value |
|---|---|
| Cost Center | |
| Period | |
| Budgeted Overhead | |
| Budgeted Activity Base | |
| Actual Overhead | |
| Actual Activity Achieved | |

**2. Rate Calculation**
- POAR = [formula shown with numbers]
- Overhead Absorbed = [formula shown with numbers]

**3. Variance Analysis**
- Variance: $[amount] — [Over-absorbed / Under-absorbed]
- Variance %: [x]%
- Expenditure Variance: $[amount]
- Volume Variance
