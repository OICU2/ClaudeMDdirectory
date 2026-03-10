---
name: budget-creation
description: >
  Builds realistic operating budgets that align spending with business goals and constraints.
  Use when someone says "help me create a budget," asks about "how to plan expenses for next year,"
  or wants to "build a departmental budget," "forecast operating costs," or "allocate resources
  across teams." Produces structured, line-item budgets with assumptions clearly documented.
category: finance
tags: [budgeting, financial-planning, operating-budget, forecasting, expense-management]
author: community
---

# Budget Creation

This skill guides Claude through building a structured, realistic operating budget by gathering business context, applying sound financial assumptions, and producing a line-item budget with clear rationale.

## Budget Creation Workflow

### 1. Gather Context First
Ask the user for these inputs before building anything:
- **Time period**: Monthly, quarterly, or annual budget?
- **Scope**: Company-wide, department, project, or product line?
- **Prior data**: Do they have last year's actuals or a baseline to reference?
- **Business stage**: Startup, growth, or mature operation?
- **Key goals**: Revenue targets, hiring plans, expansion, cost reduction?
- **Constraints**: Hard spending limits, headcount caps, capital restrictions?

### 2. Identify Revenue Assumptions (if applicable)
- Start with revenue projections before expenses when possible
- Establish growth rate assumptions (conservative, base, optimistic)
- Document the logic behind each revenue line (e.g., "Based on 200 units/month at $150 ASP")

### 3. Build Expense Categories
Organize expenses into standard buckets:

**Personnel Costs**
- Salaries by role (fully-loaded: base + benefits + taxes, typically +20–30% above base)
- Planned new hires with start month
- Contractor and freelance spend

**Operating Expenses**
- Rent and facilities
- Software and subscriptions (list by tool)
- Marketing and advertising (break out by channel)
- Travel and entertainment
- Professional services (legal, accounting, consulting)

**Cost of Goods Sold / Delivery Costs** (if product/service business)
- Direct materials or vendor costs
- Fulfillment and logistics

**Capital Expenditures** (separate from OpEx)
- Equipment, hardware, one-time infrastructure

### 4. Apply Realistic Assumptions
- Flag any line item based on estimates rather than known costs
- Apply a 5–15% contingency buffer to uncertain categories
- Use industry benchmarks when the user has no data (state the benchmark source/logic)
- Model one scenario (base case) by default; offer conservative/optimistic variants if requested

### 5. Sanity-Check the Budget
Before finalizing, verify:
- Does total spend align with stated constraints?
- Is the personnel cost ratio appropriate for the business type (e.g., SaaS: 60–70% of OpEx is typical for personnel)?
- Are any categories missing that are common for this business type?
- Does the budget support the stated goals (e.g., hiring plan matches growth target)?

### 6. Document Assumptions Explicitly
Every non-obvious number must have a one-line rationale. Never leave the user guessing why a figure appears.

## Output Format

Produce the budget in three parts:

**Part 1: Budget Summary Table**
A markdown table with columns: Category | Line Item | Monthly | Annual | Notes
Group rows by expense category. Include a totals row. If revenue is in scope, show a net burn or profit row at the bottom.

Example structure:
```
| Category     | Line Item         | Monthly  | Annual    | Notes                          |
|--------------|-------------------|----------|-----------|--------------------------------|
| Personnel    | CEO Salary        | $12,500  | $150,000  | Fully-loaded at 1.25x base     |
| Personnel    | Software Engineer | $10,000  | $120,000  | New hire starting Q2           |
| Marketing    | Paid Ads          | $5,000   | $60,000   | Based on $50 CAC target        |
| **TOTAL**    |                   | **$X**   | **$X**    |                                |
```

**Part 2: Key Assumptions List**
Bullet list of the 5–10 most important assumptions driving the budget (growth rate, headcount plan, pricing, etc.)

**