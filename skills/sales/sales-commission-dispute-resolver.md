---
name: sales-commission-dispute-resolver
description: >
  Analyzes CRM deal records, commission plan rules, and payment logs to identify and document the root cause of commission calculation discrepancies. Use when someone says their commission looks wrong, asks why they weren't paid correctly, wants to dispute a commission statement, notices a missing deal in their payout, or needs to reconcile what they earned versus what they received.
category: sales
tags: [commission, sales-ops, crm, payroll, disputes]
author: community
---

# Sales Commission Dispute Resolver

This skill investigates commission calculation discrepancies by cross-referencing CRM deal data, commission plan rules, and payment logs to produce a documented root cause analysis and resolution path.

## Investigation Workflow

1. **Collect the dispute inputs**
   - Rep name, employee ID, and pay period in question
   - Expected commission amount and actual paid amount
   - Specific deal(s) or line items believed to be incorrect

2. **Pull and verify CRM deal records**
   - Confirm deal close date falls within the disputed pay period
   - Check deal stage at time of payout calculation (Closed Won vs. still open)
   - Verify deal amount, product line, and assigned rep ownership
   - Flag any deal splits, co-sells, or overlay credits that may affect payout

3. **Map to the applicable commission plan**
   - Identify which commission plan version was active for that pay period
   - Locate the rate table: quota attainment tier, product category multipliers, accelerators
   - Check for clawback clauses, minimum deal size thresholds, or payment delay rules
   - Confirm whether quota credit and commission credit use the same deal value or differ

4. **Audit the payment log**
   - Match each deal to its corresponding payment log entry
   - Identify any deals present in CRM but absent from the payment run
   - Identify any payment entries with incorrect amounts, wrong rep assignments, or wrong rates applied
   - Check if prior clawbacks or adjustments offset the current period payout

5. **Identify the root cause**
   Categorize the discrepancy into one or more of:
   - **Data error**: Deal amount, close date, or rep assignment incorrect in CRM
   - **Plan misapplication**: Wrong rate, tier, or multiplier applied
   - **Timing issue**: Deal closed after cutoff or payment delayed per contract terms
   - **System sync failure**: CRM record did not export correctly to commission system
   - **Clawback applied**: Prior deal reversed or customer churned triggering recovery
   - **Split/overlay dispute**: Credit allocation between reps is contested

6. **Calculate the correct commission**
   - Show the step-by-step calculation using the correct plan rules
   - State the expected payout amount with formula: `Deal Value × Attainment Rate × Multiplier`
   - Compute the delta: expected minus paid

## Output Format

Produce a structured **Commission Dispute Report** with these sections:

---

**COMMISSION DISPUTE REPORT**

**Rep:** [Name] | **Pay Period:** [Month/Quarter Year] | **Date of Analysis:** [Date]

**Summary of Dispute**
One sentence describing what the rep believes is wrong and the dollar amount in question.

**Deals Under Review**
| Deal Name | CRM Deal ID | Close Date | Deal Amount | Expected Commission | Paid Commission | Delta |
|-----------|-------------|------------|-------------|--------------------|--------------------|-------|

**Root Cause Finding**
Category: [Data Error / Plan Misapplication / Timing Issue / System Sync Failure / Clawback / Split Dispute]
Explanation: 2–4 sentences describing exactly what went wrong and where the breakdown occurred.

**Correct Commission Calculation**
Show the formula and arithmetic for each disputed deal. State the total correct payout.

**Recommended Resolution**
- Specific action required (e.g., "Update CRM deal amount from $48,000 to $52,000 and reprocess")
- Owner responsible for each action (Sales Ops, Payroll, Manager approval)
- Estimated timeline to resolve

**Supporting Evidence Needed**
Bulleted list of any documents or data still required to close the dispute (e.g., signed order form, quota assignment letter, split agreement).

---
