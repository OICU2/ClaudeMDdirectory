---
name: project-cost-completion-forecast
description: >
  Calculates the Estimate at Completion (EAC) for in-progress projects by combining actual costs
  incurred to date with revised forecasts for remaining work. Use when someone says "how much will
  this project end up costing," asks about cost overrun risk, wants to forecast final project spend,
  needs an updated budget projection, or is reviewing whether a project will come in under budget.
category: finance
tags: [project-management, forecasting, earned-value, budget, cost-control]
author: community
---

# Project Cost at Completion Forecaster

Calculates the Estimate at Completion (EAC) for active projects and will activate whenever someone needs a data-driven forecast of total project cost based on current actuals and remaining work estimates.

## Forecasting Workflow

1. **Gather actuals to date**
   - Collect total actual costs incurred (AC) so far
   - Identify the reporting date or completion percentage
   - Note the original budget (Budget at Completion, BAC)

2. **Determine percent complete and earned value**
   - Calculate Earned Value: EV = BAC × (% complete / 100)
   - Calculate Cost Performance Index: CPI = EV / AC
   - Flag if CPI < 0.90 (cost overrun territory) or > 1.10 (unusually efficient — verify data)

3. **Collect or estimate Estimate to Complete (ETC)**
   - Ask whether the user has a revised bottom-up estimate for remaining work
   - If yes: use that figure directly as ETC
   - If no: calculate using one of three methods and present all three:
     - **Optimistic (reset):** ETC = BAC − EV (assumes remaining work performed at budget)
     - **Realistic (CPI-adjusted):** ETC = (BAC − EV) / CPI (assumes past efficiency continues)
     - **Pessimistic (blended):** ETC = (BAC − EV) / (CPI × SPI) if schedule data is available

4. **Calculate Estimate at Completion (EAC)**
   - EAC = AC + ETC (for each scenario)
   - Calculate Variance at Completion: VAC = BAC − EAC
   - Calculate To-Complete Performance Index: TCPI = (BAC − EV) / (BAC − AC)
   - Flag if TCPI > 1.10 — the remaining work must be significantly more efficient to hit budget

5. **Assess risk and provide interpretation**
   - Classify variance severity: <5% = minor, 5–15% = moderate, >15% = significant
   - Note whether the trend is recoverable based on TCPI feasibility
   - Highlight any assumptions made when data was missing or estimated

## Output Format

Produce a structured forecast report with the following sections:

**Project Cost Forecast Summary**
- Project name / identifier (if provided)
- Reporting date / % complete

**Key Inputs Table**
| Metric | Value |
|---|---|
| Budget at Completion (BAC) | $X |
| Actual Cost to Date (AC) | $X |
| Earned Value (EV) | $X |
| Cost Performance Index (CPI) | X.XX |

**EAC Scenarios Table**
| Scenario | ETC | EAC | Variance (VAC) | Over/Under Budget |
|---|---|---|---|---|
| Optimistic | $X | $X | $X | X% |
| Realistic (CPI-based) | $X | $X | $X | X% |
| Pessimistic | $X | $X | $X | X% |

**Performance Indicators**
- TCPI to meet original budget: X.XX — [Feasible / Challenging / Unlikely]
- Cost trend: [Improving / Stable / Deteriorating]

**Interpretation (3–5 bullet points)**
- Plain-language summary of what the numbers mean
- Whether the project is recoverable within budget
- Recommended action (rebaseline, corrective action, continue monitoring)
- Any data gaps or assumptions that affect forecast reliability

Keep the report concise enough to fit one page. If critical inputs are missing, ask for them before producing output rather than defaulting silently.
