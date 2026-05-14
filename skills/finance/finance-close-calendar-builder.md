---
name: finance-close-calendar-builder
description: >
  Generates a detailed monthly and quarterly financial close calendar with task owners, deadlines, and dependency sequencing for the accounting team. Use when someone says "help me build a close calendar," asks about "financial close schedule," wants to "plan month-end tasks," needs to "organize quarter-end close activities," or is trying to "map out accounting deadlines." Produces a structured calendar with role assignments, dependencies, and buffer days.
category: finance
tags: [financial-close, accounting, calendar, month-end, quarter-end]
author: community
---

# Finance Close Calendar Builder

This skill generates a complete monthly and quarterly financial close calendar with sequenced tasks, assigned owners, deadlines relative to period-end, and dependency chains for the accounting team.

## Close Calendar Workflow

1. **Establish the close period baseline**
   - Ask: Is this for a monthly close, quarterly close, or both?
   - Ask: What is the period-end date (e.g., last calendar day of the month)?
   - Ask: How many business days is the target hard close (e.g., Day 5)?
   - Ask: What ERP or accounting system is in use (optional, affects task naming)?

2. **Identify the accounting team structure**
   - Ask for roles involved: AP, AR, GL, Payroll, FP&A, Controller, CFO, External Auditors
   - If unknown, default to standard roles: AP Clerk, AR Clerk, GL Accountant, Senior Accountant, Controller, FP&A Analyst

3. **Build the pre-close task sequence (Days -5 to Day 0)**
   - Cutoff reminders sent to all departments: Day -5, Owner: Controller
   - Final vendor invoices submitted to AP: Day -3, Owner: AP Clerk
   - Expense reports submitted by all employees: Day -3, Owner: All Staff
   - Final billing and revenue recognition entries prepared: Day -2, Owner: AR Clerk
   - Payroll final run confirmed and posted: Day -1, Owner: Payroll Manager
   - Intercompany transaction confirmations exchanged: Day -1, Owner: GL Accountant

4. **Build the core close task sequence (Day 1 to Hard Close)**
   - Day 1: Bank statement download and cash reconciliation — Owner: GL Accountant — Dependency: None
   - Day 1: AP subledger closed, final accruals posted — Owner: AP Clerk — Dependency: Vendor invoice cutoff
   - Day 2: AR subledger closed, bad debt reserve reviewed — Owner: AR Clerk — Dependency: Final billing complete
   - Day 2: Payroll journal entry posted to GL — Owner: Payroll Manager — Dependency: Payroll run confirmed
   - Day 2: Fixed asset depreciation run and posted — Owner: GL Accountant — Dependency: None
   - Day 3: Prepaid and accrual schedules updated — Owner: Senior Accountant — Dependency: AP close
   - Day 3: Intercompany eliminations posted — Owner: GL Accountant — Dependency: Intercompany confirmations
   - Day 4: Balance sheet reconciliations completed — Owner: Senior Accountant — Dependency: All subledgers closed
   - Day 4: P&L flux analysis completed — Owner: FP&A Analyst — Dependency: Trial balance available
   - Day 5: Controller review of trial balance — Owner: Controller — Dependency: All recs complete
   - Day 5: Hard close executed, period locked in ERP — Owner: Controller — Dependency: Controller review signed off

5. **Add quarterly close extensions (Q-close only, Days 6–15)**
   - Day 6: Inventory count reconciliation finalized — Owner: GL Accountant
   - Day 7: Tax provision calculated and posted — Owner: Senior Accountant / Tax Advisor
   - Day 8: Board reporting package draft prepared — Owner: FP&A Analyst — Dependency: Hard close complete
   - Day 10: External auditor PBC (prepared by client) list submitted — Owner: Controller
   - Day 12: Auditor fieldwork window opens — Owner: External Auditors
   - Day 15: Quarterly financials reviewed and approved by CFO — Owner: CFO — Dependency: Auditor clearance

6. **Flag dependencies and risk points**
   - Mark
