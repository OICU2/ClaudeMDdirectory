---
name: supplier-scorecard-development
description: >
  Creates structured vendor performance scorecards that track delivery reliability, quality rates, pricing consistency, and responsiveness metrics over time. Use when someone says "evaluate our suppliers," asks about vendor performance tracking, wants to build a supplier rating system, needs to compare vendor reliability, or is looking to formalize procurement assessments.
category: operations
tags: [procurement, vendor-management, performance-tracking, scorecards, supply-chain]
author: community
---

# Supplier Scorecard Development

This skill builds comprehensive vendor performance scorecards with weighted metrics across delivery, quality, pricing, and responsiveness dimensions, used whenever supplier evaluation or procurement performance tracking is needed.

## Scorecard Development Workflow

1. **Identify supplier context** — Ask for supplier name/category, industry, contract type (spot vs. ongoing), and the primary pain points driving the evaluation need.

2. **Define metric categories** — Build the scorecard around these four core pillars:
   - **Delivery Reliability**: On-time delivery rate, lead time accuracy, order fill rate, advance notice on delays
   - **Quality Performance**: Defect/rejection rate, return rate, compliance with specs, corrective action response time
   - **Pricing Consistency**: Invoice accuracy, price variance vs. quoted, hidden fee frequency, cost trend over time
   - **Responsiveness**: Average response time to inquiries, issue resolution speed, proactive communication score, account manager availability

3. **Assign weights** — Default weighting is Delivery 30%, Quality 30%, Pricing 20%, Responsiveness 20%. Adjust if the user specifies their business priorities (e.g., manufacturing may weight quality higher).

4. **Define scoring scale** — Use a 1–5 scale per metric:
   - 5 = Exceeds expectations (define threshold, e.g., >98% on-time)
   - 4 = Meets expectations (e.g., 95–97%)
   - 3 = Acceptable but needs monitoring (e.g., 90–94%)
   - 2 = Below standard, improvement plan required (e.g., 85–89%)
   - 1 = Unacceptable, at risk of replacement (<85%)

5. **Build time-tracking structure** — Include columns for monthly or quarterly data entry so trends can be tracked across at least 4 periods.

6. **Add action trigger rules** — Specify automatic review triggers:
   - Overall score <3.0 → Formal improvement plan required
   - Any single pillar score <2.5 → Escalation to procurement manager
   - Two consecutive periods below 3.0 → Supplier replacement review

7. **Include a notes and evidence field** — Each metric should have a companion field for supporting data (e.g., invoice numbers, delivery logs, email timestamps).

## Output Format

Produce the following deliverables:

**1. Scorecard Table (Markdown)**
A fully populated template with columns: Metric | Pillar | Weight | Period 1 Score | Period 2 Score | Period 3 Score | Period 4 Score | Average | Notes. Include all metrics listed above plus any user-specified additions.

**2. Weighted Score Calculator**
A formula block showing how to calculate the composite score:
`Composite Score = (Delivery Avg × 0.30) + (Quality Avg × 0.30) + (Pricing Avg × 0.20) + (Responsiveness Avg × 0.20)`

**3. Scoring Rubric**
A reference table defining exactly what earns each score (1–5) for each metric, using specific thresholds (percentages, days, dollar amounts where applicable).

**4. Action Plan Template**
A short structured section with fields: Supplier Name | Review Date | Composite Score | Flags Triggered | Required Actions | Owner | Deadline.

**5. Implementation Notes**
3–5 bullet points on how to collect each data type (e.g., pull delivery dates from ERP, use invoice comparison logs for pricing variance).

Total output length: 400–700 words of structured content plus tables. Use Markdown formatting throughout for easy paste into documentation tools or spreadsheets.
