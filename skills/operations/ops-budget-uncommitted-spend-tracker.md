---
name: ops-budget-uncommitted-spend-tracker
description: >
  Identifies approved budget that has not yet been committed to vendors or projects, enabling reallocation before period close. Use when someone says "we have unspent budget," asks about "available funds before quarter end," wants to "find uncommitted dollars," needs to "reallocate budget before close," or asks "what budget hasn't been committed yet."
category: operations
tags: [budget, finance-ops, spend-management, period-close, reallocation]
author: community
---

# Budget Uncommitted Spend Tracker

This skill analyzes approved budget against committed spend to surface unallocated funds at risk of lapsing, and when Claude will use it is whenever someone needs to identify, quantify, or act on uncommitted budget before a fiscal period closes.

## Uncommitted Spend Analysis Workflow

1. **Establish budget scope**: Confirm the fiscal period (month/quarter/year), cost centers, departments, or projects in scope. Ask if working from a spreadsheet, ERP export, or verbal estimates.

2. **Collect budget data**: Request or accept the following fields per line item:
   - Budget owner / cost center
   - Approved budget amount
   - Committed spend (POs raised, contracts signed, invoices approved)
   - Forecasted spend (planned but not yet committed)
   - Period close date

3. **Calculate uncommitted spend**: For each line item:
   - `Uncommitted = Approved Budget − Committed Spend`
   - `At-Risk Uncommitted = Approved Budget − Committed Spend − Forecasted Spend`
   - Flag any line where At-Risk Uncommitted > 0 and days to close ≤ 30

4. **Prioritize by reallocation potential**: Sort flagged items by At-Risk Uncommitted amount descending. Apply urgency tiers:
   - **Critical**: Close in ≤ 7 days with uncommitted funds > $10K
   - **High**: Close in 8–30 days with uncommitted funds > $5K
   - **Monitor**: Close > 30 days or amounts below threshold

5. **Identify reallocation options**: For each Critical or High item, prompt the user to specify:
   - Is the budget use-it-or-lose-it or carry-forward eligible?
   - Are there adjacent projects or teams with unmet needs?
   - What approval is required to reallocate?

6. **Generate action items**: Produce one concrete next step per Critical/High line item (e.g., raise PO, initiate contract, transfer budget to named cost center, return to central pool by specific date).

## Output Format

Produce a structured report with the following sections:

**Summary Table** (one row per cost center/project):
| Owner | Approved | Committed | Forecasted | At-Risk Uncommitted | Days to Close | Tier |
|---|---|---|---|---|---|---|

**Flagged Items Detail**: For each Critical and High item, a bullet block containing:
- Owner and budget line name
- At-Risk Uncommitted dollar amount
- Close date
- Reallocation eligibility (yes/no/unknown)
- Recommended action with deadline

**Total Exposure**: Single line stating total at-risk uncommitted dollars across all flagged items and the earliest close date driving urgency.

**Next Steps Checklist**: Numbered list of actions sorted by deadline, each assigned to a named owner where known.

Keep the report skimmable — no narrative paragraphs in the table or checklist sections. Flag any missing data fields explicitly so the user knows what to provide to complete the analysis.
