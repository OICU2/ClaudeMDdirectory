---
name: ops-supplier-lead-time-variance-report
description: >
  Analyzes the gap between contracted and actual supplier lead times to identify unreliable vendors and support procurement decisions. Use when someone asks about supplier lead time performance, wants to find which vendors are missing delivery windows, needs to audit procurement reliability, is reviewing vendor contracts for renegotiation, or wants to understand supply chain delay patterns.
category: operations
tags: [procurement, supplier-management, lead-time, variance-analysis, supply-chain]
author: community
---

# Supplier Lead Time Variance Report

This skill generates a structured variance report comparing contracted versus actual supplier lead times, flags unreliable vendors, and surfaces actionable procurement insights.

## Analysis Workflow

1. **Collect Input Data**
   - Request or confirm access to: purchase orders with contracted lead times, actual delivery dates, supplier names, order quantities, and product categories.
   - If data is pasted directly, parse it into a structured format before proceeding.
   - Clarify the date range for analysis if not specified (default to last 12 months if ambiguous).

2. **Calculate Variance Metrics Per Supplier**
   - Lead Time Variance (days) = Actual Lead Time − Contracted Lead Time
   - Variance % = (Lead Time Variance / Contracted Lead Time) × 100
   - On-Time Rate = (Orders delivered ≤ contracted lead time / Total orders) × 100
   - Average delay for late orders only
   - Total orders, late orders, and early orders count

3. **Classify Supplier Reliability**
   - **Reliable**: On-Time Rate ≥ 90%, average variance within ±1 day
   - **At Risk**: On-Time Rate 70–89% or average delay 2–5 days
   - **Unreliable**: On-Time Rate < 70% or average delay > 5 days
   - **Chronic Offender**: Unreliable status AND variance trending worse over the period

4. **Identify Patterns and Root Causes**
   - Flag suppliers with increasing variance trend (variance worsening quarter-over-quarter)
   - Note if delays cluster around specific months (seasonal patterns)
   - Highlight if specific product categories drive most delays
   - Call out any single-source suppliers in the Unreliable tier (elevated risk)

5. **Generate Procurement Recommendations**
   - For each Unreliable or Chronic Offender supplier: recommend contract renegotiation, dual-sourcing, or safety stock adjustment
   - For At Risk suppliers: recommend performance review meeting or revised contracted lead time buffers
   - Quantify business impact where possible (e.g., estimated days of production delay, number of affected orders)

## Output Format

Produce the report in this structure:

---

**Supplier Lead Time Variance Report**
*Period: [date range] | Total Suppliers Analyzed: [N] | Total Orders: [N]*

---

**Executive Summary**
- 2–4 bullet points: overall on-time rate, number of unreliable suppliers, most impactful delays, top recommendation

---

**Supplier Variance Table**

| Supplier | Orders | On-Time Rate | Avg Variance (days) | Variance % | Classification |
|---|---|---|---|---|---|
| [rows sorted by On-Time Rate ascending] |

---

**Flagged Suppliers — Detail**

For each Unreliable or Chronic Offender supplier:
- Supplier name and classification
- Key stats (on-time rate, avg delay, worst single delay)
- Trend direction (improving / stable / worsening)
- Specific recommendation with rationale

---

**Pattern Observations**
- Seasonal trends, category-specific issues, or systemic flags in 3–6 bullets

---

**Recommended Actions by Priority**

| Priority | Action | Supplier(s) | Owner | Target Date |
|---|---|---|---|---|
| High / Medium / Low | [specific action] | [supplier] | Procurement / Supply Chain | [suggested timeframe] |

---

Keep the report factual and data-driven. Where data is missing or ambiguous, state the assumption made. Do not pad with generic supply chain advice unrelated to the provided data.
