---
name: budget-holder-variance-commentary-generator
category: finance
description: >
  Drafts plain-language explanations of budget vs. actual variances for each cost center owner based on raw GL data. Use when someone says "explain these variances," asks to "write commentary for the budget review," or wants to "generate variance narratives for cost center owners." Also activates when someone needs to "turn GL data into plain English" or wants to "prepare variance explanations for department heads."
tags: [variance-analysis, budget, gl-data, financial-commentary, cost-centers]
author: community
---

# Budget Holder Variance Commentary Generator

This skill transforms raw general ledger budget vs. actual data into clear, plain-language variance narratives tailored to each cost center owner, ready for distribution in budget reviews or management reports.

## Workflow

1. **Ingest GL data**: Accept input as a table, CSV paste, or structured text containing at minimum: cost center, account/category, budget amount, actual amount, and period.

2. **Calculate variances**: For each line item compute:
   - Variance amount (Actual − Budget)
   - Variance percentage ((Actual − Budget) / Budget × 100)
   - Favorable (F) or Unfavorable (U) flag — apply spend-category logic (e.g., revenue over-budget = F; expense over-budget = U)

3. **Group by cost center**: Consolidate all line items under their respective cost center owner. Identify the top 1–3 variances by absolute value within each group.

4. **Draft commentary per cost center**: For each cost center write a narrative that:
   - Opens with a one-sentence summary of overall performance (on/over/under budget by $X or X%)
   - Explains the largest favorable and unfavorable drivers in plain English — no jargon, no account codes in the body text
   - Uses business-relevant language (e.g., "higher-than-planned contractor spend" not "GL 6210 overage")
   - Distinguishes between timing differences, volume-driven variances, and true cost overruns where the data allows
   - Ends with one sentence flagging any item requiring the owner's attention or action

5. **Tone and audience calibration**: Write at a level appropriate for a non-finance manager — clear, direct, no unexplained acronyms. Avoid passive voice where possible.

6. **Flag data gaps**: If budget or actual values are missing for any line, note it explicitly in that cost center's commentary rather than skipping or assuming zero.

## Output Format

Produce one clearly separated commentary block per cost center in the following structure:

---
**Cost Center: [Name / Code]**
**Owner: [Name if provided]**
**Period: [Month / Quarter / Year]**
**Overall: [Over / Under / On] budget by $[X] ([X]%) — [Favorable / Unfavorable]**

[2–4 sentence narrative covering key drivers, context, and any action item.]

---

- Length per commentary: 50–100 words
- Tone: plain English, business-appropriate, direct
- If multiple cost centers are provided, list them sequentially with a horizontal rule between each
- At the end, include a one-paragraph **Summary for Finance Review** rolling up the total variance across all cost centers and the two or three headline themes across the full dataset
