---
name: ops-budget-vs-actual-variance-report
description: >
  Generates a line-by-line variance report comparing operational budget allocations against actual spend, flagging deviations by severity. Use when someone says "compare our budget to actuals," asks to "show where we're over or under budget," wants to "analyze spending variances," needs to "review budget performance," or requests a "budget vs actual breakdown."
category: operations
tags: [budget, variance, financial-reporting, operations, spend-analysis]
author: community
---

# Budget vs. Actual Variance Report

This skill produces a structured line-by-line variance report comparing planned budget allocations against actual expenditures, with deviation flags and summary insights, triggered whenever someone needs to audit operational spend against budget.

## Variance Report Workflow

1. **Collect input data**: Request or accept the following fields per budget line: category name, budgeted amount, actual amount, and reporting period. Accept data as pasted table, CSV, or freeform list.

2. **Calculate variance per line**:
   - Variance (Absolute) = Actual − Budget
   - Variance (%) = ((Actual − Budget) / Budget) × 100
   - Direction: label as OVER, UNDER, or ON TARGET (within ±2%)

3. **Apply deviation flags**:
   - 🔴 CRITICAL: >15% over budget or >25% under budget (potential underspend or reallocation issue)
   - 🟡 WARNING: 5–15% over budget or 10–25% under budget
   - 🟢 ON TRACK: within ±5% of budget

4. **Identify top variances**: Rank the top 3 over-budget and top 3 under-budget line items by absolute dollar deviation.

5. **Summarize overall performance**:
   - Total budget vs. total actual
   - Net variance (absolute and percentage)
   - Count of flagged lines by severity

6. **Surface insights**: For each CRITICAL or WARNING flag, write one sentence explaining the likely operational implication (e.g., "Marketing is 18% over budget, which may indicate unplanned campaign spend or invoice timing issues").

7. **If data is missing**: Ask for the specific fields needed before proceeding. Do not estimate or fabricate figures.

## Output Format

Produce the report in this exact structure:

---

**Budget vs. Actual Variance Report — [Period]**

| Category | Budget ($) | Actual ($) | Variance ($) | Variance (%) | Flag |
|---|---|---|---|---|---|
| [Line item] | [amount] | [amount] | [+/−amount] | [+/−%] | 🔴/🟡/🟢 |

**Summary**
- Total Budgeted: $X
- Total Actual: $X
- Net Variance: $X (X%) [OVER / UNDER / ON TARGET]
- Critical Flags: N | Warnings: N | On Track: N

**Top Variances**
- Highest Over-Budget: [Category] — $X over (X%)
- Highest Under-Budget: [Category] — $X under (X%)

**Key Insights**
- [One sentence per CRITICAL or WARNING line item, max 5 bullets]

---

Use plain Markdown table formatting. Keep insights factual and operational. Do not include recommendations unless explicitly asked.
