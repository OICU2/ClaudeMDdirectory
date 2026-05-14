---
name: payroll-tax-deposit-calendar
description: >
  Builds a compliance calendar mapping payroll tax deposit deadlines, amounts, and filing frequencies based on payroll size and jurisdiction rules. Use when someone says "I need to know when payroll taxes are due," asks about deposit schedules for federal or state withholding, wants to track payroll tax filing deadlines, needs to understand semiweekly versus monthly deposit rules, or is setting up a payroll compliance calendar for their business.
category: finance
tags: [payroll, tax-compliance, deadlines, withholding, calendar]
author: community
---

# Payroll Tax Deposit Calendar

This skill generates a structured compliance calendar mapping payroll tax deposit deadlines, required amounts, and filing frequencies based on the employer's payroll size, deposit schedule classification, and applicable jurisdictions.

## Deposit Schedule Classification

1. **Determine federal deposit schedule** by asking for or using prior lookback period total tax liability:
   - Lookback period = July 1–June 30 of two years prior
   - ≤ $50,000 total tax → Monthly depositor (deposits due by the 15th of the following month)
   - > $50,000 total tax → Semiweekly depositor (deposits due Wednesday for payrolls on Sat–Tue; Friday for payrolls on Wed–Fri)
   - < $2,500 in a quarter → Can pay with quarterly return (Form 941), no separate deposit required
   - $100,000+ accumulated on any single day → Next-day deposit rule applies regardless of schedule

2. **Identify applicable taxes** to track:
   - Federal income tax withholding (FIT)
   - Social Security: 6.2% employee + 6.2% employer (on first $168,600 for 2024)
   - Medicare: 1.45% employee + 1.45% employer; additional 0.9% employee-only above $200,000
   - Federal Unemployment Tax (FUTA): 6.0% (net 0.6% after state credit) on first $7,000 per employee
   - State income tax withholding (varies by state)
   - State Unemployment Insurance (SUI): rate and wage base vary by state and experience rating
   - Local taxes if applicable (city, county, school district)

3. **Collect required inputs**:
   - Employer state(s) of operation
   - Number of employees and pay frequency (weekly, biweekly, semimonthly, monthly)
   - Approximate gross payroll per period
   - Current lookback period tax liability
   - Year-to-date wage totals per employee (for wage base tracking)

## Calendar Construction Rules

4. **Map federal deposit deadlines** for each pay date in the calendar period:
   - For each payroll date, calculate total 941 tax liability (FIT + FICA)
   - Apply semiweekly or monthly rule to assign the exact deposit due date
   - Flag any payroll period where cumulative liability hits $100,000 (next-day rule)
   - FUTA deposits: due by last day of first month after quarter end if liability exceeds $500; otherwise carry forward

5. **Map state deposit deadlines** using the following common frameworks:
   - Most states mirror federal schedule (monthly/semiweekly) — confirm state-specific rules
   - California: quarterly, monthly, semi-weekly, or next-day based on prior year withholding
   - New York: quarterly, monthly, semi-weekly based on withholding amounts
   - Texas: no state income tax; track SUI only (quarterly)
   - Note: always verify current state agency rules as thresholds change annually

6. **Track wage base ceilings** per employee per tax:
   - Mark the estimated payroll date when each employee crosses Social Security, FUTA, and SUI wage bases
   - After crossing, reduce that tax line to $0 in subsequent periods

7. **Identify key annual and quarterly filing deadlines**:
   - Form 941 (quarterly): April 30, July 31, October 31, January 31
   - Form 940 (annual FUTA): January 31
   - W-2/W-3: January 31 to SSA and employees
   - State reconciliation filings: varies (typically quarterly or annual)
   - ACA reporting (Forms 1094-C
