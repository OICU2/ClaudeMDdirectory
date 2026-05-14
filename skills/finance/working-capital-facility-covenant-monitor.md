---
name: working-capital-facility-covenant-monitor
description: >
  Monitors revolving credit facility borrowing base calculations and financial covenants against
  current balance sheet data to flag compliance risks ahead of lender reporting deadlines. Use when
  someone says "check our borrowing base availability," asks about covenant compliance status, wants
  to review credit facility headroom, needs to prepare for a lender certificate submission, or is
  concerned about triggering a covenant breach.
category: finance
tags: [credit-facilities, covenants, borrowing-base, working-capital, compliance]
author: community
---

# Working Capital Facility Covenant Monitor

This skill analyzes revolving credit facility borrowing base components and financial covenant metrics against provided balance sheet data to identify compliance risks and flag issues before lender reporting deadlines.

## Covenant Monitoring Workflow

### Step 1: Gather Facility Terms
Collect or prompt the user for:
- Facility limit and maturity date
- Next borrowing base certificate due date and lender reporting frequency
- Eligible collateral definitions (e.g., eligible receivables age cutoff, concentration limits, inventory advance rates)
- All financial covenants with their thresholds: Fixed Charge Coverage Ratio (FCCR), Total Leverage Ratio, Minimum Liquidity, Minimum EBITDA, etc.
- Any cure rights, equity cure provisions, or covenant step-downs scheduled

### Step 2: Calculate Borrowing Base Availability
Using provided balance sheet data, compute:
1. **Gross Eligible Receivables**: Start with total AR, subtract ineligible buckets (>90 days, cross-aged, contra, government, foreign if excluded)
2. **Apply Advance Rate**: Multiply eligible AR by the contractual advance rate (typically 85%)
3. **Gross Eligible Inventory** (if applicable): Apply inventory sublimit and advance rate (typically 50–65%)
4. **Reserves**: Subtract all lender-required reserves (dilution reserve, rent reserve, PACA, etc.)
5. **Borrowing Base**: Sum of eligible AR availability + eligible inventory availability − reserves
6. **Net Availability**: Lesser of borrowing base or facility commitment, minus current outstanding balance and LCs
7. **Flag**: If net availability is below 10% of facility size or below any minimum availability covenant, mark as **CRITICAL**

### Step 3: Test Financial Covenants
For each covenant in the credit agreement:
1. Calculate the current metric using trailing twelve months (TTM) or period-end data as specified
2. Compare against the required threshold
3. Calculate headroom in absolute terms and as a percentage cushion
4. Determine the trend direction (improving/deteriorating) if prior period data is available
5. Estimate how much EBITDA, cash, or other driver would need to change to breach the covenant
6. Flag covenants with cushion below 15% as **WARNING** and below 5% as **CRITICAL**

### Step 4: Assess Reporting Deadlines
- Calculate days remaining until the next borrowing base certificate deadline
- Calculate days remaining until any compliance certificate or lender call is due
- If a deadline is within 14 days, escalate all items to immediate action priority
- Note any material adverse change (MAC) triggers or springing covenant thresholds that may activate based on availability levels

### Step 5: Identify Risk Factors
Check for:
- Concentration limit breaches (single debtor exceeding 20–25% of eligible AR)
- Rapid AR aging deterioration that will reduce future borrowing base
- Seasonal inventory buildups approaching sublimit caps
- Pending litigation, audits, or field exams that could affect collateral eligibility
- Any recent amendments or waivers that changed baseline thresholds

## Output Format

Produce a structured Covenant Compliance Summary with the following sections:

---

**FACILITY SNAPSHOT**
- Facility: [Name, Lender, Commitment Amount]
- Maturity: [Date]
- Outstanding Balance: [$X] | Letters of Credit: [$X]
- Next Certificate Due: [Date — X days away]

**BORROWING BASE AVAILABILITY**
| Component | Gross | Ineligible | Eligible | Advance Rate | Availability |
|---|---|---|---|---|---|
| Accounts Receivable | $X | $X | $X | 85% | $X |
| Inventory | $X | $X
