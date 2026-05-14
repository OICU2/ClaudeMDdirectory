---
name: recurring-ops-cost-variance-root-cause-log
description: >
  Tracks and categorizes the root causes behind recurring budget variances in operational cost lines to support corrective action and future forecasting accuracy. Use when someone says "we keep going over budget on this," asks why certain cost lines keep varying, or wants to understand patterns behind repeated operational overspends. Also activates when someone needs to document variance causes for finance review or wants to improve forecast reliability for recurring cost categories.
category: operations
tags: [cost-management, variance-analysis, root-cause, budgeting, forecasting]
author: community
---

# Recurring Ops Cost Variance Root Cause Log

This skill systematically captures, categorizes, and analyzes the root causes of recurring operational budget variances so teams can take corrective action and build more accurate forecasts.

## Root Cause Log Workflow

1. **Identify the cost line** — Confirm the specific operational cost category experiencing variance (e.g., utilities, contractor labor, maintenance, software licenses, logistics).

2. **Capture variance details** — Record the period, budgeted amount, actual amount, and variance value (absolute and percentage). Flag whether variance is over or under budget.

3. **Classify recurrence pattern** — Determine if the variance is:
   - One-time anomaly
   - Seasonal/cyclical
   - Structurally recurring (systematic mismatch between budget assumptions and reality)
   - Event-triggered (tied to specific operational events)

4. **Identify root cause category** — Assign one or more root cause tags:
   - **Forecast error** — Original budget assumption was flawed (wrong volume, rate, or timing)
   - **Scope creep** — Operational activity expanded beyond what was planned
   - **Vendor/price change** — Supplier rates shifted outside of contract or expectation
   - **Process failure** — Internal process breakdown drove unplanned spend
   - **External factor** — Market condition, regulation, or macro event outside team control
   - **Approval gap** — Spend occurred without proper authorization or visibility

5. **Document contributing factors** — Note 2–4 specific contributing factors with brief explanations (e.g., "headcount ramp faster than forecast," "fuel surcharge added mid-quarter by carrier").

6. **Assign corrective action** — For each root cause, specify:
   - Immediate fix (this period)
   - Process change (next cycle)
   - Forecast adjustment (update budget assumption going forward)

7. **Flag for forecast update** — Mark whether the budget baseline for this cost line needs revision before the next planning cycle.

## Output Format

Produce a structured log entry for each variance instance with the following format:

---
**Cost Line:** [Name]
**Period:** [Month/Quarter/Year]
**Budget:** $[X] | **Actual:** $[X] | **Variance:** $[X] ([+/-]X%)
**Recurrence Pattern:** [One-time / Seasonal / Structural / Event-triggered]

**Root Cause Categories:** [Tag1, Tag2]

**Contributing Factors:**
- [Factor 1 — 1 sentence explanation]
- [Factor 2 — 1 sentence explanation]
- [Factor 3 — 1 sentence explanation]

**Corrective Actions:**
- Immediate: [Action]
- Process change: [Action]
- Forecast adjustment: [Action]

**Forecast Update Required:** [Yes / No — reason]
---

If logging multiple variances, produce one entry block per cost line. Conclude with a summary table listing all cost lines, variance amounts, root cause categories, and whether a forecast update is required. Keep language precise and free of qualifiers — state causes and actions directly.
