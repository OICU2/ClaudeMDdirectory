---
name: purchase-accounting-adjustment-schedule
description: >
  Builds the post-acquisition amortization schedule for fair value step-ups applied to inventory,
  intangibles, and deferred revenue in purchase accounting. Use when someone asks about purchase
  accounting adjustments, needs to model fair value step-ups after an acquisition, wants to build
  an amortization schedule for acquired intangibles, is working through post-acquisition P&L
  impacts, or needs to track deferred revenue haircuts from a deal close.
category: finance
tags: [purchase-accounting, M&A, fair-value, amortization, acquisition]
author: community
---

# Purchase Accounting Adjustment Schedule

This skill builds a structured, period-by-period amortization schedule for purchase accounting fair value adjustments—covering inventory step-ups, intangible asset amortization, and deferred revenue write-downs—and surfaces the P&L impact for each post-acquisition period.

## Workflow

### 1. Collect Inputs
Gather the following before building the schedule:
- **Deal close date** and fiscal year convention (calendar vs. fiscal)
- **Inventory step-up**: fair value premium over book value, expected sell-through period (usually 1–2 quarters)
- **Intangible assets**: list each identified intangible (customer relationships, technology, trade names, backlog, non-competes), assigned fair value, useful life, and amortization method (straight-line is default; accelerated if specified)
- **Deferred revenue haircut**: acquired deferred revenue balance at close, percentage written down to fair value, expected recognition period
- **Tax rate**: for gross vs. net impact disclosure (optional but flag if missing)

### 2. Structure the Schedule
Build a column-per-period layout (quarterly or annual depending on materiality and user preference):
- Periods run from close date through the last period any adjustment is still amortizing
- Label each period as Q1 / Q2 etc. or FY labels, noting partial periods at close if mid-quarter

### 3. Inventory Step-Up Block
- Recognize the full step-up amount as COGS in the period(s) inventory is sold
- If sell-through spans multiple quarters, allocate based on inventory turn assumptions
- Flag: inventory step-up is a one-time hit, not recurring

### 4. Intangible Amortization Block
For each intangible asset:
- Calculate annual amortization = Fair Value ÷ Useful Life (straight-line)
- Pro-rate the first and last periods for partial year
- Accumulate ending net book value each period
- Sum all intangibles into a single "Total Intangible Amortization" row per period

### 5. Deferred Revenue Haircut Block
- Start with acquired deferred revenue balance post-haircut reduction
- Recognize the write-down shortfall as lost revenue in the periods the underlying obligations are fulfilled
- If recognition pattern is unknown, spread ratably over the expected fulfillment period
- Flag total revenue foregone vs. what would have been recognized under legacy accounting

### 6. Total P&L Impact Summary
Add a summary section showing:
- EBITDA impact (intangible amortization is additive back; inventory and deferred revenue are not)
- EBIT impact
- Period-by-period total pre-tax P&L drag
- Cumulative total at each period end

### 7. Tail and Sunset Dates
- Note when each adjustment fully amortizes or burns off
- Flag the first "clean" quarter where no purchase accounting noise remains

## Output Format

Produce two sections:

**Section 1 — Schedule Table**
A period-by-period table (Markdown or plain text grid) with these rows:
```
| Line Item                        | Q1 Close | Q2     | Q3     | ... | Final Period |
|----------------------------------|----------|--------|--------|-----|--------------|
| Inventory Step-Up (COGS)         |          |        |        |     |              |
| [Intangible 1] Amortization      |          |        |        |     |              |
| [Intangible 2] Amortization      |          |        |        |     |              |
| Total Intangible Amortization    |          |        |        |     |              |
| Deferred Revenue Haircut         |          |
