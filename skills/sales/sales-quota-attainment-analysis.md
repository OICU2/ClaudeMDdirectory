---
name: sales-quota-attainment-analysis
description: >
  Aggregates individual and team pipeline data to produce a clear quota attainment report showing pacing, risk, and gap-closing deals. Use when someone says "how are we tracking against quota," asks about "quota attainment" or "pacing to goal," or wants to understand "what deals we need to close" or "pipeline coverage and risk." Activates when a rep or manager needs to assess whether the team will hit their number.
category: sales
tags: [quota, pipeline, attainment, forecasting, sales-ops]
author: community
---

# Sales Quota Attainment Analysis

This skill analyzes pipeline and closed data to calculate current attainment, project end-of-period performance, and identify the specific deals required to close any gap to quota.

## Analysis Workflow

1. **Collect inputs** — Gather the following before proceeding; ask if missing:
   - Quota for the period (individual or team)
   - Closed/won revenue to date
   - Current date and period end date
   - Open pipeline: deal names, amounts, stages, and close dates
   - Stage-to-close win rates (use defaults if not provided: Stage 1=10%, Stage 2=25%, Stage 3=50%, Stage 4=75%, Stage 5=90%)

2. **Calculate attainment metrics**
   - **Attainment %** = Closed Won ÷ Quota × 100
   - **Remaining gap** = Quota − Closed Won
   - **Days elapsed / Days remaining** in the period
   - **Pacing %** = (Attainment % ÷ % of period elapsed) × 100 — values below 100% indicate behind pace

3. **Score pipeline by risk tier**
   - Apply win rates to each open deal to calculate weighted pipeline value
   - **Low risk**: Stage 4–5, close date within period, amount ≥ gap — flag as gap-closing candidates
   - **Medium risk**: Stage 2–3, close date within period — contributing but uncertain
   - **High risk**: Stage 1, late-stage deals with close dates beyond period end, or stalled deals (no activity >14 days)

4. **Identify gap-closing scenarios**
   - List the minimum combination of open deals (by name and amount) needed to reach 100% attainment
   - Rank by highest probability first
   - Flag if weighted pipeline is insufficient to cover the gap (pipeline coverage ratio < 2x)

5. **Assess coverage ratio**
   - **Pipeline Coverage** = Total open pipeline value ÷ Remaining gap
   - Healthy = 3x+, Moderate = 2–3x, At Risk = below 2x

6. **Produce recommendations**
   - State clearly: on track, at risk, or off track
   - List 2–3 specific actions (e.g., accelerate specific deals, prospect to fill gap, escalate stalled opportunities)

## Output Format

Produce a structured attainment report with the following sections:

---

**Quota Attainment Summary — [Period] | [Rep/Team Name]**

| Metric | Value |
|---|---|
| Quota | $X |
| Closed Won | $X |
| Attainment % | X% |
| Pacing % | X% (Behind / On Track / Ahead) |
| Remaining Gap | $X |
| Days Remaining | X |
| Pipeline Coverage | Xx (At Risk / Moderate / Healthy) |

**Pipeline Risk Breakdown**
- 🟢 Low Risk: $X across N deals — [deal names]
- 🟡 Medium Risk: $X across N deals — [deal names]
- 🔴 High Risk: $X across N deals — [deal names]

**Gap-Closing Deals Needed**
List the specific deals (name, stage, amount, close date) that, if closed, would reach 100% attainment. State the probability-weighted likelihood of hitting quota.

**Verdict**
One sentence: current trajectory and whether quota is achievable this period.

**Recommended Actions**
1. [Specific action]
2. [Specific action]
3. [Specific action]

---

Keep the report scannable and executive-ready. Flag assumptions (e.g., default win rates used) in
