---
name: foreign-currency-revaluation-schedule
description: >
  Generates period-end revaluation journal entries for foreign currency denominated balances using closing exchange rates and calculates resulting translation gains or losses. Use when someone says "revalue our foreign currency balances," asks about "period-end FX revaluation," wants to "calculate translation gain or loss," needs to "mark foreign accounts to market rate," or is preparing "month-end currency adjustments" for monetary assets and liabilities.
category: finance
tags: [foreign-currency, revaluation, translation, exchange-rates, period-end]
author: community
---

# Foreign Currency Revaluation Schedule

This skill generates a complete period-end revaluation schedule that restates foreign currency monetary balances at closing exchange rates and produces the corresponding journal entries and translation gain/loss summary.

## Revaluation Workflow

### Step 1 — Gather Required Inputs
Collect the following before proceeding:
- List of foreign currency monetary accounts (cash, receivables, payables, loans) with account codes and names
- Functional currency of the reporting entity
- Original recorded balance for each account (in both foreign currency and functional currency)
- Historical exchange rate used at original recording (booking rate)
- Closing exchange rate as of the revaluation date (period-end spot rate)
- Revaluation date and accounting period

If any inputs are missing, prompt the user explicitly for each missing item before continuing.

### Step 2 — Calculate Revalued Balances
For each account:
1. **Revalued balance (functional currency)** = Foreign currency balance × Closing rate
2. **Book balance (functional currency)** = Foreign currency balance × Booking rate
3. **Translation difference** = Revalued balance − Book balance
   - Positive difference on an asset = unrealized gain
   - Negative difference on an asset = unrealized loss
   - Reverse logic for liabilities

### Step 3 — Classify Gains and Losses
- Sum all positive translation differences → **Total Unrealized Translation Gain**
- Sum all negative translation differences → **Total Unrealized Translation Loss**
- Net the two → **Net Translation Gain (Loss)**
- Identify the P&L account to be used (e.g., "Foreign Exchange Gain/Loss" or "Other Income/Expense") and the balance sheet offset account (e.g., unrealized FX adjustment)

### Step 4 — Build Journal Entries
Generate one consolidated or per-account journal entry in standard debit/credit format:
- **To record gains:** Dr. Foreign Currency Account (restated) / Cr. FX Translation Gain
- **To record losses:** Dr. FX Translation Loss / Cr. Foreign Currency Account (restated)
- Ensure debits = credits for each entry
- Include reversal entry dated first day of next period if the policy requires reversals

### Step 5 — Apply Accounting Standards (if specified)
- **IFRS (IAS 21):** Monetary items translated at closing rate; differences recognized in profit or loss
- **US GAAP (ASC 830):** Transaction gains/losses on monetary items recognized in net income; translation adjustments for foreign operations go to OCI
- Flag if the entity has a net investment in a foreign operation (OCI treatment may apply)
- If standard is unspecified, default to IFRS and note the assumption

## Output Format

Produce the following four clearly labeled sections:

**1. Revaluation Detail Table**
A table with columns: Account Code | Account Name | Currency | FC Balance | Booking Rate | Book Balance (FC) | Closing Rate | Revalued Balance (FC) | Translation Difference | Gain/Loss

**2. Summary of Translation Gains and Losses**
- Total Unrealized Gain: [amount]
- Total Unrealized Loss: [amount]
- Net Translation Gain/(Loss): [amount]
- Functional Currency: [currency]
- Revaluation Date: [date]

**3. Journal Entry**
Standard two-column debit/credit format with date, account names, account codes, amounts, and a narration line (e.g., "Period-end FX revaluation at closing rate of [date]").

**4. Notes and Assumptions**
- Exchange rates used and source (if provided)
- Accounting standard applied
- Reversal policy applied or recommended
- Any accounts excluded and reason (e.g., non-monetary items
