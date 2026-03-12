---
name: grant-budget-tracking
category: finance
description: >
  Monitors and analyzes spending against grant-specific budget line items to ensure compliance with funding restrictions and reporting requirements. Use when someone says "check our grant spending," asks about budget compliance for a grant, wants to review allowable expenses, needs to prepare a grant financial report, or is concerned about staying within funded categories.
tags: [grants, budget, compliance, nonprofit, reporting]
author: community
---

# Grant Budget Tracking

This skill tracks actual expenditures against approved grant budget line items, flags compliance risks, and formats data for funder reporting requirements.

## Grant Budget Tracking Workflow

### 1. Identify Grant Parameters
- Confirm the grant name, funder, grant period start and end dates
- Collect the approved budget with each line item, its approved amount, and any restrictions (e.g., "no more than 20% for indirect costs," "personnel only," "no equipment over $5,000")
- Note reporting frequency (monthly, quarterly, annual) and the next report due date

### 2. Gather Actuals
- Request actual expenditures per line item to date (or for the reporting period)
- Ask for the reporting period being reviewed if not provided
- Identify which expenses have been invoiced vs. encumbered vs. paid

### 3. Calculate Variance Per Line Item
For each budget line item, compute:
- **Approved Amount**: the funded amount for that line
- **Spent to Date**: actual expenditures
- **Remaining Balance**: Approved − Spent
- **% Utilized**: (Spent / Approved) × 100
- **Expected % Utilized**: (Days Elapsed in Grant Period / Total Grant Days) × 100
- **Variance Status**: flag if utilization is >15 percentage points above or below expected pace

### 4. Check Compliance Rules
- Identify any line items where spending exceeds the approved amount (hard violation)
- Flag expenses that may fall outside the allowable cost categories defined by the funder
- Check if indirect cost or admin spending is within the capped percentage
- Note any line items requiring prior approval for reallocation (common with federal grants: >10% or >$25,000 transfers)
- Flag underspending on restricted lines that cannot be repurposed

### 5. Summarize Risk and Recommended Actions
- Categorize each finding as: **Compliant**, **At Risk**, or **Violation**
- For each At Risk or Violation item, provide a specific recommended action (e.g., "Request no-cost extension," "Submit budget modification request," "Move encumbered funds before period close")

## Output Format

Produce a structured grant budget report with these sections:

**Grant Summary Block**
- Grant name, funder, period, reporting date, total award, total spent, total remaining, overall % utilized

**Line Item Table**
| Line Item | Approved | Spent | Remaining | % Used | Expected % | Status |
|-----------|----------|-------|-----------|--------|------------|--------|
(Include one row per budget category; use ✅ Compliant / ⚠️ At Risk / 🚨 Violation in Status column)

**Compliance Flags**
- Bulleted list of any violations or risks with the specific rule triggered and the dollar amount involved

**Recommended Actions**
- Numbered list of concrete next steps, ordered by urgency, with deadlines where applicable

**Report-Ready Notes** (optional, if funder reporting is mentioned)
- 2–4 sentences suitable for pasting into a funder narrative or financial report attachment explaining budget status

Keep the output concise enough to fit a standard grant report attachment — prioritize flags and actions over raw data repetition.
