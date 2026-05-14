---
name: financial-statement-flux-commentary-generator
category: finance
description: >
  Produces period-over-period variance explanations for income statement and balance sheet line items
  by analyzing actual versus prior period financial data. Use when someone says "explain the variances
  in our financials," asks about "why did this line item change," wants to "write flux commentary,"
  needs to "document the drivers of period-over-period changes," or is preparing "management commentary
  on financial results."
tags: [finance, variance-analysis, financial-reporting, commentary, flux-analysis]
author: community
---

# Financial Statement Flux Commentary Generator

This skill analyzes period-over-period changes in income statement and balance sheet line items and produces clear, concise variance explanations suitable for management reporting, audit support, or investor communications.

## Workflow

### 1. Gather Required Inputs
Request the following if not already provided:
- **Current period actuals** (revenue, expenses, assets, liabilities, etc.)
- **Prior period comparatives** (same period last year, prior quarter, or prior month — specify which)
- **Currency and units** (thousands, millions, etc.)
- **Reporting context** (monthly close, quarterly earnings, annual audit, board deck)
- **Any known business events** (acquisitions, divestitures, headcount changes, pricing actions, one-time items)

### 2. Calculate Variances
For each line item provided:
- Compute **absolute variance**: Current − Prior
- Compute **percentage variance**: (Current − Prior) / |Prior| × 100
- Flag **material variances**: items exceeding ±5% or a user-specified threshold
- Identify direction: favorable (F) or unfavorable (U) relative to the reporting entity's perspective (e.g., revenue increase = F, expense increase = U)

### 3. Classify Variance Drivers
Categorize each material variance into one or more driver types:
- **Volume**: changes in units sold, headcount, transactions, or activity levels
- **Price/Rate**: changes in selling price, wage rates, interest rates, or exchange rates
- **Mix**: shifts in product, customer, or channel composition
- **Timing**: revenue recognition timing, accrual timing, or payment timing shifts
- **One-time / Non-recurring**: restructuring charges, write-offs, settlements, gains on sale
- **Structural**: acquisitions, divestitures, new business lines, discontinued operations

### 4. Draft Commentary
For each material line item:
- State the **variance amount and direction** in the opening clause
- Identify the **primary driver** (use classification from Step 3)
- Reference **specific business context** when provided (e.g., "reflecting the February acquisition of XYZ Corp")
- Note **secondary drivers** if they meaningfully contribute
- Flag items that **require further investigation** if no explanation is available

### 5. Apply Tone and Precision Rules
- Use neutral, professional language — no euphemisms for unfavorable variances
- Avoid vague qualifiers ("slightly," "somewhat") — use actual numbers
- Keep each line item explanation to **1–3 sentences**
- Do not repeat the same driver explanation verbatim across multiple line items — vary phrasing
- If a variance is immaterial, state "No material change" rather than omitting it

## Output Format

Produce a structured flux commentary table followed by a narrative summary section.

**Section 1 — Variance Table**
| Line Item | Current Period | Prior Period | $ Change | % Change | F / U |
|-----------|---------------|-------------|----------|----------|-------|
| [item]    | [value]       | [value]     | [value]  | [value]  | [F/U] |

**Section 2 — Line Item Commentary**
For each material line item, use this format:

> **[Line Item Name]** — [$ variance, direction]: [1–3 sentence explanation citing specific drivers and business context.]

Example:
> **Gross Profit** — $2.4M unfavorable (−8.3%): Decline driven primarily by a 120 bps compression in gross margin resulting from elevated raw material costs in the plastics category, partially offset by a 4% increase in unit volume. An additional $0.3M unfavorable impact reflects inventory write-downs taken in March related to the product line discontinuation announced in Q1.

**Section 3 — Executive Summary**
