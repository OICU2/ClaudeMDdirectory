---
name: ops-vendor-performance-trend-analysis
category: operations
description: >
  Analyzes vendor delivery timelines, quality scores, and SLA compliance data over time to surface performance trends and flag risks. Use when someone says "how is our vendor performing," asks about contract renewal decisions, wants to review supplier reliability, needs to track SLA breaches over time, or is evaluating whether to continue with a vendor.
tags: [vendor-management, sla, operations, procurement, performance-tracking]
author: community
---

# Vendor Performance Trend Analysis

This skill collects and analyzes vendor metrics across delivery, quality, and SLA dimensions to produce trend summaries that directly inform renewal, renegotiation, or termination decisions.

## Analysis Workflow

1. **Identify the vendor and time scope** — Confirm vendor name and the analysis window (e.g., last 6 months, last 4 quarters). If not provided, ask before proceeding.

2. **Collect or prompt for core metric categories:**
   - **Delivery performance:** On-time delivery rate, average days late, frequency of partial shipments or missed deadlines
   - **Quality metrics:** Defect rate, return/rejection rate, quality incident count, improvement or degradation over time
   - **SLA compliance:** SLA breach count and severity, resolution time for incidents, uptime or availability if applicable
   - **Responsiveness:** Average response time to issues, escalation frequency, communication reliability

3. **Identify trends, not just snapshots** — For each metric category, determine:
   - Direction of change (improving, declining, flat)
   - Rate of change (gradual drift vs. sharp drop)
   - Whether recent performance differs meaningfully from baseline or contract terms

4. **Flag contract-relevant signals:**
   - Persistent SLA breaches (3+ consecutive periods)
   - Quality degradation exceeding contract thresholds
   - Delivery reliability below agreed service levels
   - Positive trends worth leveraging in renewal negotiations

5. **Apply a risk rating** — Assign Low / Medium / High risk for contract continuation based on trend severity and business impact.

6. **Generate renewal recommendation** — Based on trends and risk rating, recommend one of: Renew as-is, Renew with renegotiated terms, Place on performance improvement plan (PIP), or Do not renew.

## Output Format

Produce a structured vendor performance report with these sections:

---

**Vendor Performance Trend Report**
**Vendor:** [Name] | **Period:** [Date range] | **Risk Rating:** Low / Medium / High

**Metric Summary Table**

| Metric | Baseline | Recent | Trend | Status |
|--------|----------|--------|-------|--------|
| On-time delivery rate | % | % | ↑ / ↓ / → | On track / At risk / Breach |
| Defect / rejection rate | % | % | ↑ / ↓ / → | On track / At risk / Breach |
| SLA compliance rate | % | % | ↑ / ↓ / → | On track / At risk / Breach |
| Avg. issue response time | days | days | ↑ / ↓ / → | On track / At risk / Breach |

**Trend Narrative** (3–5 sentences summarizing what the data shows and why it matters)

**Key Flags**
- [Bullet list of specific breaches, anomalies, or standout positives]

**Renewal Recommendation**
[One of: Renew as-is / Renew with renegotiated terms / Performance improvement plan / Do not renew]
[2–3 sentence justification tied directly to the trend data]

**Suggested Next Steps**
- [2–4 concrete actions, e.g., schedule vendor review meeting, define PIP milestones, benchmark alternatives]

---

Report length should be concise but complete — typically one page. If data is incomplete, note gaps explicitly and state which missing metrics would change the confidence level of the recommendation.
