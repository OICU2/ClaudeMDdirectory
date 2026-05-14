---
name: board-financial-presentation-builder
description: >
  Structures and populates a board-ready financial presentation covering actuals, variance commentary, updated forecasts, and key risk flags. Use when someone says "prepare board financials," asks to "build a board deck for this quarter," wants to "present financials to the board," needs to "summarize financial performance for directors," or asks to "put together an executive financial update."
category: finance
tags: [board-reporting, financial-presentation, variance-analysis, forecasting, executive-communication]
author: community
---

# Board Financial Presentation Builder

Assembles a structured, board-ready financial presentation from provided data, including actuals vs. budget, variance explanations, revised forecasts, and prioritized risk flags.

## Presentation Construction Workflow

1. **Gather inputs**: Request the following if not provided — reporting period, actuals (P&L, cash, balance sheet highlights), budget/prior period comparatives, forecast updates, and any known risks or management commentary.

2. **Build the opening summary slide**: Write a 3–5 sentence executive summary covering overall financial health, whether the period was on/under/over budget, and the single most important message for the board.

3. **Structure the actuals section**:
   - Present revenue, gross profit, EBITDA, and net income in a table format with columns: Actual | Budget | Variance ($) | Variance (%)
   - Flag any line item with variance >5% using a ⚠️ marker
   - Add 1–2 sentence commentary per flagged line explaining the driver (volume, price, timing, one-off)

4. **Write variance commentary**: For each material variance, follow this structure — What happened → Why it happened → Whether it is recurring or one-time → Management response if any.

5. **Present the updated forecast**:
   - Show full-year or next-quarter forecast alongside original budget
   - Quantify any forecast revision and state the key assumption change driving it
   - Flag if the revision changes covenant compliance, cash runway, or board-approved targets

6. **Identify and rank risk flags**:
   - List 3–5 risks in a table: Risk | Likelihood (H/M/L) | Financial Impact ($) | Mitigation
   - Elevate any risk with both High likelihood and material dollar impact to a separate "Watch List" callout

7. **Close with recommended actions**: Provide 2–4 specific decisions or approvals the board should make based on the financial picture presented.

## Output Format

Produce a sequenced, slide-by-slide outline using markdown headers for each slide. Each slide includes a title, bullet points or table content, and any required commentary. Approximate length: 8–12 slides.

**Slide structure:**
```
## Slide [N]: [Slide Title]
[Table or bullet content]
**Commentary:** [1–3 sentences]
```

Use tables for all numerical comparisons. Use plain language in commentary — avoid jargon. Flag material items with ⚠️. End with a "Board Actions Required" slide listing decisions needed, each as a single imperative sentence.
