---
name: solopreneur-project-profitability-post-mortem
description: >
  Analyzes completed project financials to calculate true net profit after accounting for all actual hours and expenses. Use when someone says "I just finished a project and want to see if it was worth it," asks about whether a client was actually profitable, wants to break down what they really made on a job, needs to find out where a project went over budget, or is trying to figure out if their pricing is too low.
category: solopreneur
tags: [profitability, pricing, post-mortem, time-tracking, solopreneur-finance]
author: community
---

# Solopreneur Project Profitability Post-Mortem

This skill dissects a completed project's actual hours, expenses, and revenue to surface true net profit, effective hourly rate, and specific pricing or scope gaps — used whenever a solopreneur wants a clear financial verdict on a finished engagement.

## Post-Mortem Workflow

### Step 1: Gather Project Inputs
Ask the user to provide the following (prompt for each if missing):
- **Total invoiced / revenue collected** (what the client actually paid)
- **Time breakdown** — hours spent per phase (e.g., discovery, execution, revisions, admin, communication)
- **Direct expenses** — tools, subscriptions, subcontractors, materials bought for this project
- **Target hourly rate** — what they intended or need to earn per hour
- **Scope originally agreed** vs. what was actually delivered (flag any scope creep)

### Step 2: Calculate Core Metrics
Compute the following in order:

1. **Gross Revenue** = total amount collected
2. **Total Direct Expenses** = sum of all project-specific costs
3. **Gross Profit** = Gross Revenue − Total Direct Expenses
4. **Total Hours Worked** = sum of all time entries across every phase
5. **Effective Hourly Rate** = Gross Profit ÷ Total Hours Worked
6. **Target Earnings** = Total Hours Worked × Target Hourly Rate
7. **Profit Gap** = Target Earnings − Gross Profit (positive = underpaid, negative = overpaid)
8. **Profit Margin %** = (Gross Profit ÷ Gross Revenue) × 100

### Step 3: Identify Pricing and Scope Gaps
Flag any of the following issues found in the data:
- Effective hourly rate falls more than 20% below target rate → **Underpricing flag**
- Revision or communication hours exceed 25% of total hours → **Scope creep flag**
- Any unbilled expenses (costs paid out-of-pocket that weren't passed through) → **Expense leak flag**
- Admin/overhead hours not factored into original quote → **Hidden labor flag**
- Actual hours exceed estimated hours by >15% → **Estimation gap flag**

### Step 4: Generate Actionable Pricing Recommendations
Based on the gaps identified:
- Recalculate what the project *should* have been priced at to hit the target rate
- Suggest a revised fixed-price floor for similar future projects
- Recommend specific contract clauses or processes to prevent the flagged issues (e.g., revision limits, expense pass-throughs, discovery fees)

## Output Format

Produce a structured post-mortem report with these exact sections:

---

**PROJECT PROFITABILITY POST-MORTEM**
**Project:** [Name or description]
**Client:** [If provided]

---

**FINANCIAL SUMMARY**
| Metric | Value |
|---|---|
| Gross Revenue | $X |
| Total Expenses | $X |
| Gross Profit | $X |
| Total Hours Worked | X hrs |
| Effective Hourly Rate | $X/hr |
| Target Hourly Rate | $X/hr |
| Profit Gap | +/- $X |
| Profit Margin | X% |

---

**VERDICT**
One sentence: Was this project profitable relative to the target? (e.g., "You earned $18/hr against a $75/hr target — this project lost you money.")

---

**HOURS BREAKDOWN**
List each phase with hours and % of total time. Flag any phase exceeding expected norms.

---

**FLAGS & ISSUES**
Bulleted list of each flag triggered (Under
