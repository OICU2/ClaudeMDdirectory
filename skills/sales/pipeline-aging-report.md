---
name: pipeline-aging-report
description: >
  Analyzes CRM pipeline data to identify deals that have exceeded expected stage durations and surfaces prioritized action recommendations. Use when someone says "my pipeline feels stale," asks about deals that haven't moved, wants to know which opportunities are stuck, needs to clean up the pipeline before a forecast review, or is trying to figure out which reps need coaching on deal progression.
category: sales
tags: [pipeline, reporting, deal-management, forecasting, crm]
author: community
---

# Pipeline Aging Report

This skill generates a structured aging report that flags stalled deals by comparing each deal's time-in-stage against expected benchmarks, then recommends re-engagement or disqualification actions so reps and managers can act immediately.

## Workflow

1. **Collect pipeline data** — Ask the user to provide deal data in any available format: CRM export (CSV/Excel), a pasted table, or a verbal description of deals. Required fields: deal name, account name, current stage, date entered current stage, deal value, and owner. Optional but useful: last activity date, next step, close date.

2. **Establish stage duration benchmarks** — If the user has defined SLAs or expected stage durations, use those. If not, apply these defaults and confirm with the user before proceeding:
   - Prospecting / Discovery: 14 days
   - Qualification: 10 days
   - Demo / Evaluation: 21 days
   - Proposal / Negotiation: 14 days
   - Closing: 7 days

3. **Calculate aging for each deal** — For every deal, compute:
   - Days in current stage = today's date minus date entered stage
   - Overage = days in stage minus benchmark for that stage
   - Flag status: **On Track** (0–100% of benchmark), **At Risk** (101–150%), **Stalled** (151–200%), **Critical** (>200%)

4. **Identify contributing factors** — For each flagged deal (At Risk or worse), note any available signals: no logged activity in X days, missing next step, close date already passed, no contact engagement recorded.

5. **Assign action recommendations** — Map flag status to a default action, which the user can override:
   - At Risk → Schedule immediate follow-up; confirm next step exists
   - Stalled → Executive outreach or re-qualification call within 48 hours
   - Critical → Disqualification review; move to nurture or close-lost unless rep can justify continued pursuit within 5 business days

6. **Rank by priority score** — Sort the final report by: (flag severity × deal value). Critical high-value deals appear first.

7. **Summarize pipeline health** — Calculate and display: total deals reviewed, count and % in each flag category, total ARR/revenue at risk (At Risk + Stalled + Critical), and average days of overage across stalled deals.

## Output Format

Produce the following sections in order:

---

**Pipeline Aging Report — [Date]**

**Summary**
- Total deals reviewed: N
- On Track: N (N%) | At Risk: N (N%) | Stalled: N (N%) | Critical: N (N%)
- Total revenue at risk: $X
- Average overage on flagged deals: X days

---

**Flagged Deals — Action Required**

| Priority | Deal Name | Account | Owner | Stage | Days in Stage | Benchmark | Overage | Status | Value | Recommended Action |
|----------|-----------|---------|-------|-------|--------------|-----------|---------|--------|-------|-------------------|
| 1 | ... | ... | ... | ... | ... | ... | ... | 🔴 Critical | $X | ... |
| 2 | ... | ... | ... | ... | ... | ... | ... | 🟠 Stalled | $X | ... |
| 3 | ... | ... | ... | ... | ... | ... | ... | 🟡 At Risk | $X | ... |

---

**On-Track Deals** *(condensed list, no action required)*

| Deal Name | Account | Stage | Days in Stage | Status |
|-----------|---------|-------|--------------|--------|
| ... | ... | ... | ... | 🟢 On Track |

---

**Coaching Notes for Managers** *(optional, include if rep names are present)*
-
