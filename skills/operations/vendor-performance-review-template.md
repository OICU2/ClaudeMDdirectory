---
name: vendor-performance-review-template
category: operations
description: >
  Creates a structured quarterly vendor performance review document that scores suppliers across delivery, quality, responsiveness, and cost compliance against agreed benchmarks. Use when someone says "review our vendor performance," asks about "how our suppliers are doing this quarter," wants to "score a vendor against their SLA," needs to "prepare a supplier review meeting," or requests a "vendor scorecard."
tags: [vendor-management, procurement, performance-review, supplier-scorecard, operations]
author: community
---

# Vendor Performance Review Template

This skill generates a structured quarterly performance review document for a vendor, scoring them across four key dimensions against pre-agreed benchmarks, and is triggered when someone needs to evaluate supplier performance or prepare for a vendor review meeting.

## Review Generation Workflow

1. **Gather vendor context** — Ask for the vendor name, review period (quarter/year), contract type, and the user's role if not provided. If benchmarks are not supplied, use common industry defaults (e.g., ≥98% on-time delivery, ≤2% defect rate) and flag them clearly for confirmation.

2. **Collect performance data** — Request or prompt for raw data across four dimensions:
   - **Delivery**: On-time delivery rate (%), average lead time vs. contracted lead time
   - **Quality**: Defect/return rate (%), compliance incidents, audit findings
   - **Responsiveness**: Average response time to issues (hours/days), escalation resolution rate (%)
   - **Cost Compliance**: Invoiced vs. contracted price variance (%), unauthorized charges, discount adherence

3. **Score each dimension** — Apply a 1–5 scale per category:
   - 5 = Exceeds benchmark by >10%
   - 4 = Meets or slightly exceeds benchmark (0–10% above)
   - 3 = Within acceptable tolerance (up to 5% below benchmark)
   - 2 = Underperforming (5–15% below benchmark)
   - 1 = Critical failure (>15% below benchmark or policy breach)

4. **Calculate composite score** — Apply equal weighting (25% each) unless the user specifies custom weights. Compute a weighted average out of 5.0.

5. **Identify trends and flags** — Compare to prior quarter if data is available. Flag any dimension scoring 1 or 2 as a required action item.

6. **Draft recommendations** — Generate one concrete recommendation per underperforming dimension. For overall scores ≥4.5, include a note on preferred-vendor status eligibility.

## Output Format

Produce a structured Markdown document with the following sections:

```
# Vendor Performance Review — [Vendor Name]
**Review Period:** Q[X] [Year]
**Prepared By:** [Role/Name]
**Review Date:** [Date]

---

## Executive Summary
[3–4 sentences: overall score, strongest area, weakest area, and top recommended action]

---

## Scorecard

| Dimension        | Benchmark | Actual | Score (1–5) | Notes |
|------------------|-----------|--------|-------------|-------|
| Delivery         |           |        |             |       |
| Quality          |           |        |             |       |
| Responsiveness   |           |        |             |       |
| Cost Compliance  |           |        |             |       |
| **Composite**    |           |        | **X.X / 5** |       |

---

## Performance Details

### Delivery
[2–3 sentences of context, trend vs. prior quarter if available]

### Quality
[2–3 sentences of context, any incidents or audit results]

### Responsiveness
[2–3 sentences, notable escalations or wins]

### Cost Compliance
[2–3 sentences, invoice variance summary]

---

## Required Actions
[Bulleted list — only for dimensions scoring 1 or 2. Each item: issue, owner, due date placeholder]

## Recommendations
[Bulleted list — one per underperforming area, plus overall relationship recommendation]

---

## Appendix: Data Sources
[List the data inputs used and flag any estimated or missing values]
```

- Length: typically 400–700 words of narrative plus the scorecard table
- Tone: professional, factual, audit-ready
- Placeholders in brackets must be filled with actual data or marked `
