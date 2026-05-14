---
name: foreign-subsidiary-translation-schedule
description: >
  Converts foreign subsidiary financial statements to the reporting currency using current and historical exchange rates per ASC 830 or IFRS requirements. Use when someone says "translate foreign subsidiary financials," asks about "currency translation adjustments," wants to "consolidate foreign entity statements," needs to "apply ASC 830 translation rules," or is working on "functional currency remeasurement."
category: finance
tags: [foreign-currency, ASC-830, IFRS, translation, consolidation, CTA]
author: community
---

# Foreign Subsidiary Translation Schedule

This skill produces a complete currency translation schedule converting a foreign subsidiary's financial statements into the parent's reporting currency, applying correct exchange rates to each line item per ASC 830 or IAS 21 and computing the cumulative translation adjustment (CTA).

## Translation Workflow

### Step 1: Establish Key Rate Inputs
- Identify the subsidiary's **functional currency** and the parent's **reporting currency**
- Collect three rate types:
  - **Current rate (CR):** Spot rate at the balance sheet date
  - **Historical rate (HR):** Rate at the date of the original transaction or acquisition
  - **Average rate (AR):** Weighted-average rate for the reporting period (used for income statement items)
- Confirm the accounting standard in use (ASC 830 or IAS 21) as this affects remeasurement vs. translation treatment

### Step 2: Classify Each Financial Statement Line Item
Apply the correct rate per ASC 830 / IAS 21 rules:

**Balance Sheet:**
| Line Item | Rate Applied |
|---|---|
| Cash & monetary assets | Current Rate |
| Accounts receivable / payable | Current Rate |
| Inventory (at cost) | Historical Rate (if remeasuring) or Current Rate (if translating) |
| PP&E, net | Historical Rate (remeasurement) or Current Rate (translation) |
| Equity (common stock, APIC) | Historical Rate |
| Retained earnings | Derived (plug from income statement rollforward) |
| Cumulative Translation Adjustment | Plug to balance |

**Income Statement:**
| Line Item | Rate Applied |
|---|---|
| Revenue, COGS, OpEx | Average Rate |
| Depreciation & amortization | Historical Rate (remeasurement) or Average Rate (translation) |
| Tax expense | Average Rate |

**Dividends declared:** Historical rate at declaration date

### Step 3: Perform the Translation
1. Convert each balance sheet line item using the assigned rate × functional-currency amount
2. Convert each income statement line item using the assigned rate × functional-currency amount
3. Roll forward retained earnings:
   - Beginning retained earnings (translated) + Net income (translated) − Dividends (translated) = Ending retained earnings
4. Compute the **CTA** as the residual amount needed to make total assets equal total liabilities + equity after translation
5. Record CTA in **other comprehensive income (OCI)** — not the income statement — for a translation (ASC 830 / IAS 21)

### Step 4: Remeasurement vs. Translation Check
- If the subsidiary's **functional currency = reporting currency**, apply **remeasurement** (temporal method); gains/losses flow to **net income**
- If the subsidiary's **functional currency ≠ reporting currency**, apply **translation** (current rate method); CTA flows to **OCI**
- Flag any highly inflationary economy designations (≥100% cumulative inflation over 3 years per ASC 830-10-45) requiring remeasurement into the reporting currency

### Step 5: Validate the Schedule
- Confirm translated balance sheet balances (Assets = Liabilities + Equity including CTA)
- Reconcile beginning and ending CTA balances for the period
- Cross-check net income translated figure agrees between income statement and retained earnings rollforward
- Note any intercompany eliminations required before consolidation

## Output Format

Produce the following structured output:

1. **Exchange Rate Summary Table** — list CR, AR, and HR with source dates and values

2. **Translated Balance Sheet** — three-column table:
   - Column A: Functional currency amount
   - Column B: Rate applied (label CR / AR / HR)
   - Column C: Reporting currency amount

3. **Translated Income Statement** — same three-column structure

4. **Retained
