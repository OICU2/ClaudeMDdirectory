---
name: sales-commission-payout-verification-model
description: >
  Cross-references closed deal data against commission plan rules to verify payout accuracy and flag discrepancies before payroll processing. Use when someone says "check my commission calculations," asks about verifying sales payouts, wants to audit rep earnings before payroll runs, needs to reconcile deal data against commission plans, or is reviewing quota attainment and compensation accuracy.
category: sales
tags: [commission, payroll, sales-ops, compensation, verification]
author: community
---

# Sales Commission Payout Verification Model

This skill audits closed deal records against defined commission plan rules to produce a verified payout report with flagged discrepancies before payroll is finalized.

## Verification Workflow

### 1. Gather Input Data
Collect the following before proceeding:
- Closed deal list (deal name, rep name, close date, deal value, product line, deal type: new/expansion/renewal)
- Commission plan document or rules (rate tiers, accelerators, caps, splits, clawback windows)
- Payroll period start and end dates
- Any manual adjustments or exceptions already submitted

### 2. Map Deals to Commission Rules
For each closed deal:
- Confirm close date falls within the payroll period
- Identify applicable commission rate based on product line and deal type
- Apply quota attainment tier to determine if accelerators or decelerators apply
- Check for multi-rep splits and validate split percentages sum to 100%
- Flag deals in clawback window from prior periods

### 3. Calculate Expected Payout Per Rep
- Base commission = deal value × applicable rate
- Apply accelerator/decelerator multiplier if quota threshold is crossed mid-period
- Subtract clawback amounts for deals lost or refunded within the clawback window
- Apply commission cap if the plan defines one
- Sum all deals per rep to produce total expected payout

### 4. Compare Against Submitted Payroll Figures
- Diff expected payout against the submitted payroll number for each rep
- Categorize discrepancies as: Overpayment, Underpayment, Missing Deal, Rate Mismatch, Split Error, or Clawback Not Applied
- Flag any rep where variance exceeds ±2% or a defined dollar threshold

### 5. Escalation Rules
- Variance > ±$500 or ±5%: flag as HIGH priority, require manager sign-off before payroll release
- Variance ≤ ±$500 and ≤ ±5%: flag as LOW priority, log for audit trail
- Deals missing from payroll entirely: flag as CRITICAL regardless of amount
- Accelerator boundary deals (quota attainment near a tier threshold): manually verify rate applied

## Output Format

Produce a structured verification report with the following sections:

**Summary Block**
- Payroll period
- Total reps audited
- Total expected payout (calculated)
- Total submitted payout
- Net variance ($ and %)
- Count of discrepancies by severity (CRITICAL / HIGH / LOW)

**Per-Rep Detail Table**
| Rep Name | Expected Payout | Submitted Payout | Variance $ | Variance % | Discrepancy Type | Priority | Notes |

**Discrepancy Detail Section**
For each flagged item, provide:
- Rep name and deal name
- Root cause category (Rate Mismatch, Missing Deal, Split Error, Clawback Not Applied, Cap Error)
- Expected value vs. submitted value
- Recommended correction
- Action owner (Sales Ops, Finance, Manager)

**Clean Records Confirmation**
- List reps with zero discrepancies explicitly to confirm they were audited

Report should be exportable as a table (markdown or CSV-compatible). No narrative filler — every line must be data or a specific action item.
