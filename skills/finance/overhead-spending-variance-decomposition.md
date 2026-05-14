---
name: overhead-spending-variance-decomposition
category: finance
description: >
  Decomposes overhead spending variances into volume, efficiency, and price components to identify the root causes of budget deviations. Use when someone says "our overhead costs are over budget," asks about why overhead spending is higher than expected, wants to understand what's driving a factory overhead variance, needs to break down a spending variance into its components, or is analyzing manufacturing cost overruns.
tags: [overhead, variance-analysis, cost-accounting, budgeting, manufacturing]
author: community
---

# Overhead Spending Variance Decomposition

This skill systematically breaks down an overhead spending variance into volume, efficiency, and price sub-variances so Claude can pinpoint whether the deviation stems from production levels, resource usage, or input cost changes.

## Variance Decomposition Workflow

### Step 1: Gather Required Inputs
Collect the following before proceeding. If any are missing, ask the user:
- **Budgeted overhead rate** (fixed + variable, per unit or per labor/machine hour)
- **Budgeted production volume** (units or hours)
- **Actual production volume** (units or hours)
- **Standard hours allowed** for actual production
- **Actual hours worked**
- **Actual overhead costs incurred** (broken out by fixed and variable if possible)
- **Standard variable overhead rate per hour**
- **Standard fixed overhead rate per hour**

### Step 2: Compute the Three Sub-Variances

**A. Volume Variance (Did we produce as much as planned?)**
```
Volume Variance = (Budgeted Hours – Standard Hours Allowed for Actual Output) × Fixed OH Rate per Hour
```
- Favorable (F): actual output required more standard hours than budgeted
- Unfavorable (U): actual output required fewer standard hours than budgeted

**B. Efficiency Variance (Did we use hours efficiently?)**
```
Efficiency Variance = (Actual Hours – Standard Hours Allowed for Actual Output) × Variable OH Rate per Hour
```
- Favorable (F): fewer actual hours used than standard hours allowed
- Unfavorable (U): more actual hours used than standard hours allowed

**C. Price / Spending Variance (Did we pay more per hour than planned?)**
```
Price Variance = (Actual OH Rate per Actual Hour – Standard OH Rate per Actual Hour) × Actual Hours
```
Or equivalently:
```
Price Variance = Actual OH Costs – (Actual Hours × Standard OH Rate)
```
- Favorable (F): actual spending per hour was less than standard
- Unfavorable (U): actual spending per hour exceeded standard

### Step 3: Reconcile to Total Variance
Verify the three components sum to the total overhead spending variance:
```
Total Variance = Volume Variance + Efficiency Variance + Price Variance
```
If inputs were not split between fixed and variable, note the limitation and provide best available decomposition.

### Step 4: Diagnose Root Causes
Map each unfavorable sub-variance to likely operational causes:
- **Volume**: demand shortfall, downtime, scheduling issues, machine capacity
- **Efficiency**: operator skill, process bottlenecks, rework, material quality
- **Price**: supplier price changes, utility rate increases, unplanned overtime, scope creep in indirect costs

### Step 5: Recommend Actions
For each unfavorable variance above a materiality threshold (suggest 5% of budget unless user specifies), provide one concrete corrective action.

## Output Format

Produce a structured analysis with the following sections:

1. **Summary Table** — single table with columns: Variance Type | Formula Used | $ Amount | F or U | % of Budget
2. **Reconciliation Check** — one line confirming sub-variances sum to total variance
3. **Root Cause Analysis** — bullet list, one to two sentences per sub-variance explaining the likely operational driver
4. **Recommended Actions** — numbered list, one action per material unfavorable variance, owner role suggested (e.g., Plant Manager, Procurement)
5. **Data Gaps** (if any) — flag missing inputs and state assumptions made

Keep the analysis concise. Target 400–600 words excluding tables. Use plain language accessible to operations managers, not only accountants.
