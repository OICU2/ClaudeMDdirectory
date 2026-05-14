---
name: capitalized-software-cost-tracker
description: >
  Tracks internal software development costs eligible for capitalization under ASC 350-40,
  organized by project phase, employee time allocation, and amortization start date. Use when
  someone asks about capitalizing software development costs, wants to track internal-use software
  expenses, needs to determine which development phases qualify for capitalization, or is preparing
  for an ASC 350-40 audit or review.
category: finance
tags: [capitalization, ASC-350-40, software-development, internal-use-software, amortization]
author: community
---

# Capitalized Software Cost Tracker (ASC 350-40)

This skill captures, classifies, and summarizes internal software development costs eligible for capitalization under ASC 350-40, helping finance and accounting teams maintain audit-ready records by phase, employee, and amortization timeline.

## Phase Classification Rules

Apply these ASC 350-40 phases to every cost entry:

1. **Preliminary Project Stage** — Costs here are EXPENSED, not capitalized. Includes: vendor evaluation, feasibility studies, conceptual design, project team selection.
2. **Application Development Stage** — Costs here ARE capitalized. Includes: coding, testing (excluding post-implementation testing), data conversion directly enabling functionality, purchased software integrated into the project.
3. **Post-Implementation / Operations Stage** — Costs here are EXPENSED. Includes: training, maintenance, minor bug fixes, ongoing operations.

**Capitalization start trigger:** Begin capitalizing when management authorizes the project AND it is probable the project will be completed and the software will function as intended.

**Capitalization stop trigger:** When the software is substantially complete and ready for its intended use (amortization start date).

## Cost Entry Workflow

For each cost entry, capture the following fields:

1. **Project Name / ID** — Unique identifier for the software project.
2. **Employee Name & Role** — Who performed the work (developer, architect, QA engineer, etc.).
3. **Date(s) of Work** — Specific date or date range.
4. **Hours Worked** — Total hours attributable to this entry.
5. **Hourly Fully-Loaded Rate** — Salary + benefits + payroll taxes divided by annual hours (2,080 standard).
6. **Calculated Cost** — Hours × Fully-loaded rate.
7. **Project Phase** — Preliminary / Application Development / Post-Implementation.
8. **Capitalization Eligible?** — Yes (Application Development) or No (all other phases).
9. **Supporting Documentation Reference** — Timesheet ID, ticket number, or invoice reference.
10. **Notes** — Any exceptions, split-phase work, or auditor notes.

## Phase Boundary Decisions

When an employee's time spans multiple phases in the same period:

- Split hours by phase based on documented task logs or ticket tracking.
- If tasks cannot be split, apply the predominant phase rule: classify 100% to the phase where >50% of time was spent, and document the rationale.
- Flag any entries where phase classification is ambiguous for controller or auditor review.

## Amortization Tracking

Once a project reaches the Post-Implementation stage:

1. Record the **Amortization Start Date** (date software is substantially complete and ready for use).
2. Record the **Total Capitalized Cost** accumulated during Application Development stage.
3. Apply the company's elected **useful life** (commonly 3–5 years; confirm with policy).
4. Calculate **monthly straight-line amortization**: Total Capitalized Cost ÷ (Useful Life in months).
5. Flag any impairment indicators (project abandonment, scope reduction >50%, technology obsolescence).

## Output Format

Produce the following outputs:

### 1. Project Summary Table
A markdown table with columns:
`Project ID | Project Name | Capitalization Start Date | Amortization Start Date | Total Expensed (Prelim) | Total Capitalized (App Dev) | Total Expensed (Post-Impl) | Monthly Amortization | Useful Life`

### 2. Cost Detail Ledger
A markdown table with columns:
`Entry # | Date | Employee | Role | Hours | Fully-Loaded Rate | Cost | Phase | Capitalizable? | Doc Reference | Notes`

### 3. Phase Summary by Project
A markdown table breaking down
