---
name: cost-plus-contract-margin-monitor
description: >
  Monitors actual costs against allowable billing thresholds on cost-plus contracts and flags margin erosion or overbilling risks in real time. Use when someone says "our cost-plus margins are slipping," asks about "allowable vs. actual cost variances," wants to "audit a cost-reimbursable contract," mentions "fee at risk on a CPFF contract," or needs to "check if we're overbilling on a government contract."
category: finance
tags: [cost-plus, contract-management, margin-monitoring, government-contracts, billing-compliance]
author: community
---

# Cost-Plus Contract Margin Monitor

This skill analyzes cost-plus contract data to compare actual incurred costs against allowable billing thresholds, calculates real-time margin and fee positions, and flags overbilling risks or margin erosion before they become compliance or profitability problems.

## Contract Margin Analysis Workflow

### Step 1: Collect Contract Parameters
Gather the following inputs from the user:
- Contract type (CPFF, CPAF, CPIF, T&M, or hybrid)
- Contract ceiling value and funded amount
- Negotiated fee percentage or fixed fee amount
- Performance period start and end dates
- Allowable cost categories and any exclusions (per FAR Part 31 or contract terms)

### Step 2: Ingest Actual Cost Data
Request or parse the following cost data:
- Direct labor: hours billed × loaded rates by labor category
- Direct materials and subcontractor costs
- Other direct costs (ODCs)
- Indirect rates applied (fringe, overhead, G&A) — provisional vs. final rates
- Any unallowable costs already identified (entertainment, lobbying, etc.)

### Step 3: Calculate Billing Position
For each cost category:
- **Allowable Billed Amount** = Actual Cost − Unallowable Costs × Applicable Indirect Rate
- **Fee Earned to Date** = (Costs Billed to Date / Estimated Total Cost) × Total Fee
- **Remaining Fee** = Total Negotiated Fee − Fee Earned to Date
- **Burn Rate** = Costs Incurred to Date / Days Elapsed × Days Remaining
- **Estimated Cost at Completion (EAC)** = Costs to Date + Projected Remaining Costs

### Step 4: Flag Risk Conditions
Automatically evaluate and flag the following:

| Risk Condition | Threshold | Severity |
|---|---|---|
| Cost overrun risk | EAC > 90% of contract ceiling | 🔴 Critical |
| Overbilling risk | Billed > Allowable by any amount | 🔴 Critical |
| Margin erosion | Fee at completion < 50% of negotiated fee | 🟠 High |
| Indirect rate variance | Provisional vs. actual rate gap > 5% | 🟡 Medium |
| Funding exhaustion | Funded amount < 30 days of burn rate | 🟡 Medium |
| Unallowable cost exposure | Unallowable costs > 2% of total billed | 🟡 Medium |
| Schedule pressure | >80% costs incurred with <60% period elapsed | 🟠 High |

### Step 5: Reconcile Allowability
- Cross-reference flagged cost items against FAR 31.205 cost principles (or applicable commercial contract terms)
- Identify costs requiring contracting officer approval before billing
- Note any advance agreements that modify standard allowability rules

### Step 6: Generate Recommendations
Based on flags triggered:
- If overbilling risk: specify exact dollar amount and cost category causing the variance
- If margin erosion: identify whether cause is indirect rate creep, scope growth, or underestimated labor
- If funding gap: calculate days until funding exhaustion and recommended notification date to contracting officer
- If indirect rate variance: estimate final rate adjustment impact on fee and recommend provisional rate update

## Output Format

Produce a structured **Cost-Plus Contract Margin Report** with the following sections:

**Header Block**
- Contract number, type, period of performance, report date
- Contract ceiling, funded amount, negotiated fee ($ and %)

**Financial Snapshot Table**
| Metric | Value | % of Contract |
|---|---|---|
| Costs Incurred to Date | $X |
