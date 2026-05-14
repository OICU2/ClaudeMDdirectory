---
name: sales-tax-filing-calendar-builder
description: >
  Generates a jurisdiction-specific sales tax filing deadline calendar based on the user's nexus states and assigned filing frequencies. Use when someone says "I need to know when my sales tax is due," asks about building a sales tax calendar, wants to track filing deadlines across multiple states, needs to organize their sales tax obligations by quarter or month, or is trying to figure out when to file in states where they have nexus.
category: finance
tags: [sales-tax, tax-calendar, nexus, filing-deadlines, compliance]
author: community
---

# Sales Tax Filing Calendar Builder

This skill generates a structured, jurisdiction-specific sales tax filing deadline calendar when a user needs to track and organize their multi-state sales tax obligations by nexus state and filing frequency.

## Workflow

1. **Gather nexus states**: Ask the user to list all states where they have sales tax nexus (economic or physical). If they don't know, prompt them to list states where they have employees, warehouses, significant revenue thresholds, or registered business activity.

2. **Determine filing frequency per state**: For each nexus state, ask the user their assigned filing frequency (monthly, quarterly, or annual). If unknown, apply common defaults: monthly for high-volume filers (>$100K annual liability in state), quarterly for mid-volume, annual for low-volume. Flag these as estimates.

3. **Map deadlines by state and frequency**: Apply the following deadline rules per state:
   - Most states: due 20th of the month following the filing period
   - Notable exceptions to apply:
     - California: due last day of the month following the period
     - Texas: due 20th of the month following the period (monthly/quarterly)
     - New York: quarterly returns due last day of the month following the period
     - Florida: due 1st of the second month following the period, delinquent after 20th
     - Washington: due by the 25th for monthly filers
   - For annual filers, most states align with the calendar year end (due January 20 or January 31 of the following year)

4. **Build the calendar structure**: Organize deadlines chronologically across a 12-month period (current calendar year or rolling 12 months from today, based on user preference). Group by month, listing each state deadline due that month.

5. **Flag high-risk periods**: Identify months with 3 or more simultaneous deadlines and mark them as "high-volume filing months" requiring advance preparation.

6. **Note penalties and grace periods**: For each state listed, append a one-line note on the standard late-filing penalty (e.g., "CA: 10% penalty on tax due + interest after due date") if the information is known. Flag any states where grace periods apply.

7. **Identify zero-return requirements**: Note which states require a zero-return filing even when no tax was collected during the period. Common examples: Texas, California, New York, Illinois require zero returns; flag these explicitly.

## Output Format

Produce the following sections in order:

**Header**: Nexus state count, date range covered, date generated.

**Monthly Calendar Table**: A table with columns — Month | Due Date | State | Filing Period | Frequency | Notes. Sort rows within each month by due date ascending.

**High-Volume Months Summary**: Bulleted list of months with 3+ deadlines, with the count and states listed.

**Zero-Return States**: Bulleted list of the user's nexus states that require zero returns, with a one-line explanation.

**Penalty Reference Table**: Table with columns — State | Late Filing Penalty | Late Payment Penalty | Grace Period.

**Reminders Checklist**: A short checklist (5–8 items) of tasks to complete 2 weeks before each high-volume month (e.g., reconcile sales data, confirm exemption certificates, verify rate changes).

Length: As long as necessary to cover all nexus states completely. Do not truncate. Use markdown tables throughout.
