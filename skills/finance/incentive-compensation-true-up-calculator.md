---
name: incentive-compensation-true-up-calculator
description: >
  Reconciles actual performance metrics against pre-set targets at period end to determine whether employees or teams are owed additional bonus payments or subject to clawback adjustments. Use when someone says "calculate our bonus true-up," asks about reconciling incentive compensation, wants to figure out clawback amounts, needs to close out a commission period, or is trying to determine final payout adjustments after actuals come in.
category: finance
tags: [compensation, bonus, clawback, true-up, incentive-pay, commission, reconciliation]
author: community
---

# Incentive Compensation True-Up Calculator

This skill reconciles actual performance results against target thresholds at period end to compute bonus true-up payments owed or clawback amounts to be recovered, producing a clear adjustment summary per participant.

## True-Up Calculation Workflow

### 1. Collect Required Inputs
Gather the following for each participant or cohort:
- **Target metric(s):** quota, revenue goal, margin target, or KPI threshold
- **Actual metric(s):** verified end-of-period results
- **Plan structure:** payout curve (linear, tiered, accelerator/decelerator breakpoints)
- **Interim payments already made:** draws, advances, mid-period payouts
- **Clawback provisions:** lookback period, recovery percentage, qualifying conditions
- **Currency and effective date**

### 2. Calculate Attainment
```
Attainment % = (Actual Result / Target) × 100
```
Apply plan-specific rounding rules (e.g., cap attainment at 200%, floor at 0%).

### 3. Determine Earned Incentive
Apply the payout curve to attainment:
- **Below threshold (e.g., <50% attainment):** $0 earned
- **At target (100%):** target incentive amount
- **Above target:** apply accelerator multiplier per plan tier

```
Earned Incentive = Target Incentive Amount × Payout Rate(Attainment %)
```

For tiered plans, calculate each band separately and sum:
```
Earned = (Band1_Units × Rate1) + (Band2_Units × Rate2) + ...
```

### 4. Compute True-Up Adjustment
```
True-Up Amount = Earned Incentive − Interim Payments Already Made
```
- **Positive result:** additional payment owed to participant
- **Negative result:** clawback amount owed back to company

### 5. Apply Clawback Rules
If clawback is triggered:
- Confirm the event qualifies per plan terms (e.g., customer churn, deal reversal, employment status)
- Apply recovery percentage: `Clawback = Negative True-Up × Recovery Rate`
- Check statute of limitations on lookback window
- Flag if legal or HR review is required before recovery

### 6. Validate and Sanity-Check
- Cross-reference actuals against source system (CRM, ERP, payroll)
- Confirm no duplicate payments in interim payout history
- Verify plan version in effect for the period
- Flag discrepancies > 5% for manual review

## Output Format

Produce a **True-Up Summary Table** with one row per participant, followed by an **Adjustment Register**:

**True-Up Summary Table**

| Participant | Period | Target | Actual | Attainment % | Earned Incentive | Interim Paid | True-Up Adj. | Direction |
|---|---|---|---|---|---|---|---|---|
| Jane Smith | Q4 2024 | $1,000,000 | $1,150,000 | 115% | $17,250 | $15,000 | +$2,250 | PAY |
| Tom Reed | Q4 2024 | $800,000 | $620,000 | 77.5% | $7,750 | $10,000 | −$2,250 | CLAWBACK |

**Adjustment Register** (narrative block below the table):
- List each clawback case with qualifying condition, recovery rate, and net recovery amount
- List each additional payment with recommended pay date and payroll coding
- Surface any participants requiring HR/legal review with reason
- Provide **period total**: sum of all outflows (payments) and
