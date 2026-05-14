---
name: r-and-d-capitalization-tracker
description: >
  Classifies research and development labor and vendor costs as expensed or capitalizable under ASC 350-40, tracking eligible project phases and amortization schedules. Use when someone asks about capitalizing software development costs, wants to know if R&D expenses qualify for capitalization, needs help tracking internal-use software project phases, or is trying to determine amortization schedules for capitalized development work. Also activates when someone mentions ASC 350-40 compliance or distinguishes preliminary versus application development stages.
category: finance
tags: [r-and-d, capitalization, asc-350-40, software-costs, amortization]
author: community
---

# R&D Capitalization Tracker

This skill applies ASC 350-40 rules to classify R&D labor and vendor costs as expensed or capitalizable, assigns costs to the correct project phase, and calculates amortization schedules for eligible capitalized amounts.

## ASC 350-40 Classification Workflow

### Step 1: Identify the Project Phase
Assign each cost to one of three phases:

- **Preliminary Project Stage** — all costs EXPENSED immediately
  - Includes: conceptual formulation, vendor evaluations, technology feasibility studies, final vendor selection
- **Application Development Stage** — costs CAPITALIZABLE
  - Includes: coding, software configuration, installation, testing (excluding post-implementation fixes)
  - Labor: capture hours × fully-loaded rate per employee/contractor role
  - Vendor costs: capitalize invoices tied directly to development deliverables
- **Post-Implementation / Operations Stage** — all costs EXPENSED
  - Includes: training, maintenance, minor bug fixes, data migration prep

### Step 2: Classify Each Cost Line Item
For each cost provided, apply these rules:

| Cost Type | Preliminary | App Development | Post-Implementation |
|---|---|---|---|
| Internal labor (engineering) | Expense | Capitalize | Expense |
| Internal labor (management/admin) | Expense | Expense | Expense |
| External vendor / contractor | Expense | Capitalize | Expense |
| Third-party software licenses | Expense | Capitalize (if integral) | Expense |
| Training costs | Expense | Expense | Expense |
| Data conversion | Expense | Expense | Expense |

**Mixed-phase costs**: If a cost spans phases, require a time/effort split. Apply phase rules proportionally.

### Step 3: Calculate Capitalizable Amount
- Sum all qualifying Application Development Stage costs
- Separate by project for asset tracking
- Note any costs requiring management judgment (document rationale)

### Step 4: Determine Amortization Schedule
Once the asset is ready for its intended use:
- **Method**: Straight-line (default) unless another systematic method better reflects usage
- **Useful life**: Request from user or apply common defaults (3 years for internal-use software, 5 years for ERP platforms)
- **Start date**: Date the asset is placed in service (not capitalization date)
- **Formula**: Monthly amortization = Total capitalized cost ÷ (Useful life in months)
- Flag any impairment triggers (project abandonment, scope reduction >50%, technology obsolescence)

### Step 5: Flag Compliance Issues
Raise warnings for:
- Costs capitalized before technological feasibility is established
- Overhead or G&A costs included in capitalized amounts
- Lack of documentation supporting phase determination
- Capitalization continuing past go-live date without post-implementation reclassification

## Output Format

Produce a structured report with these sections:

**1. Cost Classification Table**
List each cost line with: Description | Amount | Phase Assigned | Treatment (Capitalize / Expense) | Rationale (1 sentence)

**2. Capitalization Summary**
- Total costs reviewed: $X
- Total expensed: $X
- Total capitalized: $X
- Capitalized by project (if multiple projects)

**3. Amortization Schedule**
Table with columns: Month | Beginning Book Value | Amortization Expense | Ending Book Value
Show full schedule or first 12 months plus final year if life >2 years.

**4. Compliance Flags**
Bulleted list of any issues identified. If none, state "No compliance issues identified."

**5. Open Questions**
List any missing inputs needed to finalize the
