---
name: zero-based-budget-builder
description: >
  Constructs a zero-based budget template where every expense line must be justified
  from scratch, independent of prior period spending. Use when someone says "I need
  to build a budget from zero," asks about justifying every expense, wants to create
  a budget without relying on last year's numbers, needs to eliminate unjustified
  spending, or wants to build a budget where every dollar is accounted for.
category: finance
tags: [budgeting, zero-based-budget, expense-justification, financial-planning, cost-control]
author: community
---

# Zero-Based Budget Builder

Guides users through constructing a zero-based budget where every expense line is justified from first principles, ensuring total income minus total allocated expenses equals zero.

## Zero-Based Budget Workflow

### 1. Gather Income Baseline
- Ask for all confirmed income sources with exact monthly amounts (salary, freelance, rental, dividends)
- Distinguish between guaranteed income and variable income
- Use conservative estimates for variable income (e.g., lowest of last 3 months)
- Set total income as the fixed ceiling — every dollar must be assigned

### 2. Identify Expense Categories
Prompt the user to list expenses across these standard buckets:
- **Fixed Necessities**: Rent/mortgage, insurance, loan minimums, utilities
- **Variable Necessities**: Groceries, gas, medical, household supplies
- **Debt Repayment**: Credit cards, student loans, auto loans (beyond minimums)
- **Savings & Investments**: Emergency fund, retirement, specific savings goals
- **Discretionary**: Dining, entertainment, subscriptions, clothing, hobbies
- **Irregular/Annual**: Car registration, taxes, gifts, vacations (divide by 12)

### 3. Justify Each Line Item from Scratch
For every expense, require the user to answer:
- **Why is this necessary?** (Not "we spent it last year")
- **What is the minimum required amount?**
- **What happens if this is reduced or eliminated?**
- **Is there a cheaper alternative?**

Flag any line that is justified only by "that's what we usually spend" — force a specific, current justification.

### 4. Balance to Zero
- Running total: Income − Assigned Expenses = Remaining Balance
- If remaining balance > 0: assign surplus to savings, debt payoff, or investment — never leave it unassigned
- If remaining balance < 0: require the user to reduce or eliminate specific line items until the deficit is closed
- Do not allow the budget to finalize with a non-zero balance

### 5. Stress-Test the Budget
- Identify the top 3 variable categories most likely to overspend
- Suggest a buffer allocation (typically 3–5% of income) labeled "Buffer/Miscellaneous"
- Ask: "If your income dropped 15%, which lines would you cut first?" — rank discretionary items by priority

## Output Format

Produce a structured budget document with the following sections:

**Header**
- Monthly income total (broken down by source)
- Budget period (month/year)

**Budget Table** (Markdown table with columns):
| Category | Line Item | Justification | Monthly Amount |
|----------|-----------|---------------|----------------|

Group rows by the six category buckets above. Include a subtotal row per category.

**Summary Block**
```
Total Income:          $X,XXX
Total Allocated:       $X,XXX
Remaining Balance:     $0
```

**Unjustified/Flagged Items List**
- Bullet list of any expense lines that lacked a clear justification, with a prompt for the user to revisit

**Recommendations**
- 3–5 specific, actionable suggestions based on the user's actual numbers (e.g., "Your subscription total of $187/month exceeds your stated entertainment priority — consider auditing these 4 items")

Length: As long as the budget requires — do not truncate line items. Use tables for all financial data, not prose.
