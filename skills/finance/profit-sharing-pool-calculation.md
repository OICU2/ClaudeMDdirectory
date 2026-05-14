---
name: profit-sharing-pool-calculation
category: finance
description: >
  Calculates the distributable profit-sharing pool and individual employee allocations based on defined plan rules and compensation inputs. Use when someone asks about distributing company profits to employees, wants to calculate profit-sharing bonuses, needs to determine each employee's share of a profit pool, is setting up or running a profit-sharing plan, or wants to know how much each team member receives from profits.
tags: [profit-sharing, compensation, payroll, bonus-calculation, employee-benefits]
author: community
---

# Profit-Sharing Pool Calculation

This skill calculates the total distributable profit-sharing pool and each employee's individual allocation using company financials, plan rules, and compensation data.

## Calculation Workflow

### Step 1: Establish the Profit-Sharing Pool
1. Collect the required inputs:
   - Pre-tax net income (or operating profit, depending on plan definition)
   - Plan contribution rate or formula (e.g., "10% of pre-tax profit above $500,000")
   - Any caps on total pool size (dollar amount or % of payroll)
   - Eligibility thresholds (minimum profit level before sharing begins)
2. Apply the formula:
   - `Pool = (Eligible Profit - Threshold) × Contribution Rate`
   - Apply any caps: `Final Pool = MIN(Pool, Cap)`
3. State the final distributable pool clearly before moving to allocations.

### Step 2: Identify Eligible Employees
1. Filter by eligibility criteria provided:
   - Minimum tenure (e.g., employed for 1,000 hours or 6 months in the plan year)
   - Employment status (full-time only, or include part-time)
   - Active employment on the distribution date
2. List eligible employees with their compensation figures.

### Step 3: Calculate Individual Allocations
Apply the allocation method specified. Support all standard methods:

**Comp-to-Comp (Pro-Rata by Salary):**
- `Employee Share = (Employee Compensation ÷ Total Eligible Compensation) × Final Pool`

**Equal Share:**
- `Employee Share = Final Pool ÷ Number of Eligible Employees`

**Points/Units System:**
- Assign points based on years of service, salary bands, or role tiers
- `Employee Share = (Employee Points ÷ Total Points) × Final Pool`

**Integrated (Permitted Disparity):**
- Split compensation into base (up to Social Security wage base) and excess
- Apply a higher rate to excess compensation within IRS limits

### Step 4: Apply Vesting and Limits
1. Apply vesting schedule if provided (cliff or graded) to determine the vested portion
2. Check IRS annual addition limit per participant ($69,000 for 2024 or current year limit)
3. Flag any employee whose allocation exceeds regulatory or plan-defined caps
4. Redistribute excess amounts per plan rules (forfeitures or reallocation)

### Step 5: Validate
- Sum of all individual allocations must equal the Final Pool (within rounding tolerance of ±$1)
- Show the reconciliation check explicitly
- Flag any data gaps or assumptions made

## Output Format

Produce a structured report with these sections:

**1. Pool Summary**
| Item | Amount |
|------|--------|
| Eligible Pre-Tax Profit | $X |
| Threshold | $X |
| Contribution Rate | X% |
| Gross Pool | $X |
| Cap Applied (if any) | $X |
| **Final Distributable Pool** | **$X** |

**2. Eligible Employee List**
| Employee | Compensation | Eligibility Status | Notes |
|----------|-------------|-------------------|-------|

**3. Individual Allocations**
| Employee | Base | Points/Weight | Allocation % | Dollar Allocation | Vested Amount |
|----------|------|---------------|-------------|-------------------|---------------|

**4. Validation Check**
- Sum of allocations vs. pool (confirm match)
- Any flagged exceptions (cap breaches, eligibility edge cases)

**5. Assumptions & Notes**
- List every assumption made due to missing inputs
- Note the allocation method used and why if inferred

Use dollar amounts rounded to the nearest cent. Show percentages to two decimal places. If inputs are incomplete, state exactly what is missing and provide
