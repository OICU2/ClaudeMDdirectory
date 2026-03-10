---
name: margin-calculation
description: >
  Calculates gross, operating, and net profit margins from financial data to assess business profitability and health. Use when someone says "analyze my margins," asks about profit margins or business profitability, wants to understand how efficient their business is, needs to compare margins against industry benchmarks, or asks why their revenue doesn't translate to profit.
category: finance
tags: [margins, profitability, financial-analysis, business-health, accounting]
author: community
---

# Margin Calculation

This skill calculates and interprets gross, operating, and net profit margins from provided financial figures, giving a clear picture of where a business gains or loses value.

## Calculation Workflow

1. **Collect inputs** — Identify revenue, COGS, operating expenses, interest, taxes, and net income. Ask for missing values before proceeding.
2. **Calculate gross margin** — `(Revenue - COGS) / Revenue × 100`. This shows production efficiency.
3. **Calculate operating margin** — `(Revenue - COGS - Operating Expenses) / Revenue × 100`. This shows operational efficiency before financing costs.
4. **Calculate net margin** — `Net Income / Revenue × 100`. This shows overall profitability after all costs.
5. **Flag anomalies** — Negative margins, margins below 5%, or gross-to-net margin compression greater than 50% warrant explicit callout.
6. **Benchmark context** — Compare results to typical industry ranges where identifiable (e.g., SaaS: gross 60–80%, retail: gross 20–40%).
7. **Identify the biggest margin drain** — Pinpoint whether the largest spread between gross and net comes from operating costs, interest, or taxes.

## Output Format

Produce a structured summary with the following sections:

**Margin Summary Table**
| Metric | Value | Formula Used |
|---|---|---|
| Gross Margin | XX.X% | (Rev - COGS) / Rev |
| Operating Margin | XX.X% | (Rev - COGS - OpEx) / Rev |
| Net Margin | XX.X% | Net Income / Rev |

**Interpretation** (3–5 sentences): Plain-language explanation of what the numbers mean for business health, where value is being created or destroyed, and whether the margins are strong or concerning.

**Key Observations** (bullet list, max 4 items): Specific issues or strengths — e.g., high COGS relative to revenue, large gap between operating and net margin, or healthy gross margin undermined by overhead.

**Recommended Actions** (bullet list, max 3 items): Concrete next steps tied directly to the numbers, such as renegotiating supplier costs, reviewing fixed overhead, or restructuring debt.