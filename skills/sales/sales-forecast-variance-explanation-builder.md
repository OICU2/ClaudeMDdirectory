---
name: sales-forecast-variance-explanation-builder
description: >
  Generates a structured written explanation of why actual closed revenue deviated from the sales forecast, citing specific deal-level reasons for each gap. Use when someone says "explain why we missed forecast," asks about "what caused the revenue variance," or wants to "break down the forecast gap by deal." Also activates when a user needs to "summarize forecast vs actuals for leadership" or wants to "document why we beat or missed our number."
category: sales
tags: [forecasting, revenue, variance-analysis, sales-reporting, deal-review]
author: community
---

# Sales Forecast Variance Explanation Builder

This skill produces a clear, executive-ready narrative explaining the gap between forecasted and actual closed revenue, grounded in deal-level detail, for use in leadership reports, QBRs, or board updates.

## Variance Explanation Workflow

1. **Collect inputs**: Ask the user to provide (a) the forecast amount, (b) the actual closed revenue amount, (c) a list of deals that were in the forecast but did not close, and (d) any deals that closed but were not in the forecast (upside deals). If deal-level reasons are not provided, prompt the user to supply slip reasons, push reasons, or lost reasons for each deal.

2. **Calculate the total variance**: Compute the raw dollar gap (actual minus forecast). Identify whether the result is a miss, a beat, or flat. Note the percentage variance.

3. **Categorize deal-level variances**: Sort deals into four buckets:
   - **Slipped**: Deal was forecasted but pushed to a future period (note new expected close date if known)
   - **Lost**: Deal was forecasted but closed-lost (note reason: competitor, budget, no decision, etc.)
   - **Pulled forward / Upside**: Deal closed that was not in the forecast
   - **Partial close**: Deal closed at a lower or higher value than forecasted

4. **Assign dollar impact per deal**: For each deal, calculate its contribution to the variance (positive or negative). Sum each bucket to show category-level impact.

5. **Identify root causes**: Group deal reasons into systemic themes where possible (e.g., "three deals slipped due to delayed legal review," "two losses tied to competitor pricing"). Surface any patterns across rep, segment, region, or deal size.

6. **Draft the narrative explanation**: Write a 3–5 paragraph explanation that opens with the top-line result, walks through the largest variance drivers by bucket, calls out systemic patterns, and closes with forward-looking context (what slipped deals are expected in next period, any corrective actions noted by the user).

7. **Validate completeness**: Confirm that the sum of all deal-level variances reconciles to the total reported gap. Flag any unaccounted-for variance and note it as "unexplained variance" if the user cannot provide deal-level detail.

## Output Format

Produce the following sections in order:

**Variance Summary Table**
A compact table with columns: Deal Name | Forecasted Amount | Actual Amount | Variance | Category | Reason. Include a totals row.

**Category Rollup**
A brief bullet list showing total dollar impact per category (Slipped, Lost, Upside, Partial Close) and the count of deals in each.

**Executive Narrative**
3–5 paragraphs in plain business prose:
- Paragraph 1: Top-line result (beat/miss by $X, Y% variance)
- Paragraph 2: Largest negative drivers with deal-specific callouts
- Paragraph 3: Positive offsets or upside deals
- Paragraph 4: Systemic patterns or root causes
- Paragraph 5 (optional): Forward outlook — slipped pipeline recovery, next-period risk

**Reconciliation Check**
One line confirming that deal-level variances sum to the reported total gap, or flagging any unexplained remainder.

Total output length: 400–700 words for the narrative; table and rollup are additional. Tone should be factual, direct, and suitable for a VP or C-suite audience.
