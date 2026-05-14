---
name: ops-vendor-sla-scorecard
description: >
  Builds a structured scorecard to track vendor adherence to contracted service levels, flagging breaches and triggering penalty or renegotiation workflows. Use when someone says "our vendor is missing targets," asks about tracking supplier performance, wants to evaluate whether a vendor is meeting their SLA, needs to document service level breaches, or is preparing for a vendor contract review or renegotiation meeting.
category: operations
tags: [vendor-management, sla, scorecard, compliance, procurement]
author: community
---

# Vendor SLA Scorecard

This skill builds a structured, actionable SLA scorecard that tracks vendor performance against contracted service levels, identifies breaches, calculates penalty exposure, and recommends next steps including penalties or renegotiation triggers.

## Scorecard Construction Workflow

1. **Gather SLA Baseline Data**
   - Collect vendor name, contract start/end date, and contract value
   - List all contracted SLA metrics (e.g., uptime %, response time, resolution time, delivery accuracy, defect rate)
   - Record the contracted target threshold for each metric
   - Note penalty clauses: penalty type (credit, fee, termination right), trigger condition, and penalty amount or percentage

2. **Collect Actual Performance Data**
   - For each SLA metric, record the actual measured value for the current period (weekly, monthly, or quarterly)
   - Source data from monitoring tools, incident logs, delivery reports, or vendor-submitted reports
   - Note the measurement period and data source for audit traceability

3. **Calculate Performance Status Per Metric**
   - Compare actual vs. contracted threshold for each metric
   - Assign a status:
     - ✅ **Met** — actual meets or exceeds target
     - ⚠️ **At Risk** — actual is within 10% of breach threshold
     - ❌ **Breach** — actual falls below contracted threshold
   - Calculate variance: `(Actual - Target) / Target × 100` expressed as a percentage

4. **Flag Breach Severity**
   - **Minor Breach**: single period, variance < 15% below target → log and notify vendor
   - **Moderate Breach**: 2 consecutive periods or variance 15–30% below target → issue formal breach notice, initiate penalty calculation
   - **Critical Breach**: 3+ consecutive periods or variance > 30% below target → escalate to renegotiation or termination review

5. **Calculate Penalty Exposure**
   - For each breached metric with a penalty clause, calculate the applicable penalty value
   - Sum total penalty exposure across all breached metrics for the period
   - Flag any metrics where cumulative breaches trigger contract termination rights

6. **Determine Recommended Action**
   - Met all SLAs → document and archive; no action required
   - At-Risk metrics → issue early warning notice to vendor with improvement deadline
   - Minor/Moderate breaches → issue formal breach notice, apply credits, schedule performance review call
   - Critical breaches → escalate to procurement or legal; prepare renegotiation brief or termination notice

## Output Format

Produce a scorecard in the following structure:

---

**VENDOR SLA SCORECARD**
**Vendor:** [Name] | **Period:** [Month/Quarter/Year] | **Contract Value:** [Amount]

---

**PERFORMANCE SUMMARY TABLE**

| Metric | Target | Actual | Variance | Status | Penalty Clause | Penalty Exposure |
|---|---|---|---|---|---|---|
| [Metric 1] | [Target] | [Actual] | [+/- %] | ✅/⚠️/❌ | Yes/No | [$amount or N/A] |
| [Metric N] | ... | ... | ... | ... | ... | ... |

---

**BREACH SUMMARY**
- Total Metrics Tracked: [N]
- Met: [N] | At Risk: [N] | Breached: [N]
- Total Penalty Exposure This Period: [$amount]
- Cumulative Penalty Exposure (Contract to Date): [$amount]
- Termination Right Triggered: Yes / No

**BREACH DETAILS**
For each breached metric:
- Metric: [Name]
- Severity: Minor / Moderate / Critical
- Consecutive Periods in Breach: [N]
