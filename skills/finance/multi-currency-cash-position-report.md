---
name: multi-currency-cash-position-report
description: >
  Consolidates bank balances across multiple currencies into a single functional-currency cash position using current spot rates. Use when someone says "show me our cash position," asks about "total liquidity across accounts," wants to "consolidate foreign currency balances," needs a "multi-currency treasury report," or requests to "convert all bank balances to home currency."
category: finance
tags: [treasury, fx, cash-management, reporting, currencies]
author: community
---

# Multi-Currency Cash Position Report

This skill aggregates bank account balances denominated in different currencies, applies current spot exchange rates, and produces a unified cash position statement in the user's functional (home) currency.

## Workflow

1. **Collect inputs** — Ask the user to provide: (a) a list of bank accounts with balances and their currency codes (e.g., USD, EUR, GBP, JPY), (b) the functional/reporting currency, and (c) the spot rates to use (live rates, a specific date's rates, or rates the user supplies). If spot rates are not provided, note that user-supplied or publicly sourced rates must be used since real-time FX feeds are not available.

2. **Validate the data** — Check that every balance has a valid ISO 4217 currency code, all spot rates are expressed as units of foreign currency per 1 unit of functional currency (or confirm the convention with the user), and no accounts are duplicated.

3. **Convert each balance** — For each account:
   - If the account currency equals the functional currency, carry the balance forward unchanged.
   - Otherwise: `Functional Amount = Foreign Balance ÷ Spot Rate` (adjust formula if the rate convention is inverted).
   - Round converted amounts to 2 decimal places.

4. **Aggregate by currency** — Sum all balances within the same currency before conversion to show gross exposure per currency.

5. **Calculate totals** — Sum all converted functional-currency amounts to produce the total consolidated cash position.

6. **Flag risks or anomalies** — Note any: large single-currency concentrations (>40% of total), accounts with zero or negative balances, currencies with potentially stale rates (if dates differ from today), or missing rate entries.

7. **Summarize FX assumptions** — List every spot rate used, its source (user-supplied, stated date, or assumed), and the rate convention applied.

## Output Format

Produce a structured report with the following sections:

**Header**
- Report title: "Multi-Currency Cash Position Report"
- Functional currency and report date

**Account-Level Detail Table**
Columns: `Account Name | Bank | Currency | Foreign Balance | Spot Rate | Functional Amount`
One row per account, sorted by currency then account name.

**Currency Subtotal Table**
Columns: `Currency | Total Foreign Balance | Spot Rate | Total in [Functional Currency]`
One row per currency, sorted descending by functional-currency equivalent.

**Consolidated Position**
- Single bold line: `Total Cash Position: [amount] [functional currency code]`
- Percentage breakdown by currency (pie-chart data if markdown tables suffice, otherwise a ranked list)

**FX Rate Assumptions**
- Bulleted list: `[CCY]/[Functional CCY]: [rate] — Source: [user-supplied / market date: YYYY-MM-DD]`

**Risk & Anomaly Notes**
- Bulleted list of any flags raised in step 6, or "None identified" if clean.

Keep the report concise and table-driven. Use markdown formatting. Do not include narrative filler between sections.
