---
name: deferred-compensation-liability-tracker
category: finance
description: >
  Models the growth, vesting, and payout schedule of deferred compensation obligations to ensure accurate balance sheet accrual and cash flow forecasting. Use when someone says "we need to track deferred comp liability," asks about "how much do we owe in deferred compensation," wants to "project deferred comp payouts," needs to "accrue for deferred compensation on the balance sheet," or is trying to "forecast cash outflows from deferred comp plans."
tags: [deferred-compensation, liability-tracking, accruals, cash-flow-forecasting, balance-sheet]
author: community
---

# Deferred Compensation Liability Tracker

This skill models deferred compensation plan obligations — including contribution growth, vesting schedules, and payout timelines — to produce accurate balance sheet accruals and multi-period cash flow forecasts.

## Workflow

### 1. Collect Plan Inputs
Gather the following for each participant or plan cohort:
- **Deferral amount and start date**: Annual or lump-sum deferrals by participant
- **Notional investment return rate**: Fixed rate or index-linked benchmark (e.g., 7% annually)
- **Vesting schedule**: Cliff (e.g., 3-year) or graded (e.g., 20% per year over 5 years)
- **Payout trigger**: Separation from service, retirement age, specific date, or change-in-control
- **Payout structure**: Lump sum, installments (number and frequency), or annuity

### 2. Build the Liability Accrual Model
For each participant, calculate period-by-period:
- **Beginning balance**: Prior period ending liability balance
- **New deferrals**: Amounts deferred in the current period
- **Notional earnings**: Beginning balance × periodic return rate
- **Vested balance**: Apply vesting percentage to total accumulated balance
- **Ending liability**: Beginning balance + new deferrals + notional earnings (use vested balance for balance sheet reporting if plan is not fully vested)
- **Forfeiture adjustments**: Reduce liability for unvested amounts upon termination events

### 3. Project Payout Schedule
- Identify each participant's expected trigger date based on age, tenure, or contract terms
- Calculate the projected account balance at trigger date using compound growth:
  `FV = PV × (1 + r)^n + Σ[Annual Deferral × (1 + r)^(n–t)]`
- Spread payout across installment periods if applicable, applying continued notional growth on remaining balance during distribution phase
- Flag any acceleration clauses (change-in-control, death, disability)

### 4. Reconcile to Balance Sheet
- **Current liability**: Payout amounts due within 12 months of reporting date
- **Long-term liability**: Remaining vested obligation beyond 12 months
- **Unvested balance**: Disclose separately; do not recognize until vesting occurs unless plan terms require immediate recognition
- Tie ending accrual balance to the deferred compensation line on the balance sheet

### 5. Validate and Stress Test
- Run scenarios with alternative return rates (base, upside +2%, downside –2%)
- Model early-termination forfeitures for assumed turnover rates
- Test sensitivity of cash flow timing to changes in assumed retirement age (±2 years)

## Output Format

Produce the following structured outputs:

**1. Participant-Level Accrual Table** (one row per participant per period):
| Participant | Period | Beg. Balance | New Deferrals | Notional Earnings | Forfeitures | End. Balance | Vested % | Vested Liability |

**2. Aggregate Balance Sheet Summary** (by reporting period):
- Current deferred comp liability
- Long-term deferred comp liability
- Total plan liability
- Unvested balance (memo item)

**3. Cash Flow Forecast Table** (annual, 10-year horizon minimum):
| Year | Expected Payouts | Current vs. LT Portion | Cumulative Outflow |

**4. Scenario Comparison** (3-column table):
| Metric | Base Case | High Return (+2%) | Low Return (–2%) |

**5. Key Assumptions Block**:
- List all return rates, vesting schedules, p
