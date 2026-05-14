---
name: minority-interest-calculation-schedule
description: >
  Calculates and reconciles minority interest (non-controlling interest) balances across consolidated subsidiaries for accurate group financial reporting. Use when someone asks about minority interest calculations, needs to reconcile NCI balances in consolidated financials, wants to build a non-controlling interest schedule, is preparing consolidated financial statements with partial ownership, or needs to allocate subsidiary profit/loss to minority shareholders.
category: finance
tags: [consolidation, minority-interest, non-controlling-interest, group-reporting, financial-statements]
author: community
---

# Minority Interest Calculation Schedule

This skill builds a structured minority interest (NCI) schedule that calculates opening balances, period movements, and closing balances for each partially-owned subsidiary in a consolidated group.

## Calculation Workflow

### 1. Gather Inputs Per Subsidiary
For each subsidiary, collect:
- Subsidiary name and NCI ownership percentage (e.g., 30%)
- Opening NCI balance (prior period closing balance)
- Subsidiary's net profit or loss for the period
- Dividends paid by the subsidiary during the period
- Other comprehensive income (OCI) attributable to NCI (e.g., FX translation, revaluation)
- Any acquisition or disposal of NCI during the period (step acquisitions, partial disposals)
- Changes in subsidiary equity not through P&L (e.g., share issuances at subsidiary level)

### 2. Calculate NCI Share of Each Component
Apply the NCI percentage to each movement:
- **NCI share of profit/loss** = Subsidiary net income × NCI %
- **NCI share of OCI** = Subsidiary OCI × NCI %
- **NCI dividends paid** = Subsidiary dividends declared × NCI % (reduces NCI balance)
- **NCI acquired/disposed** = Fair value of NCI acquired or carrying value of NCI disposed

### 3. Build the Roll-Forward Schedule
For each subsidiary, construct the movement table:

```
Opening NCI balance
+ NCI share of profit/(loss)
+ NCI share of OCI
- Dividends paid to NCI
+/- NCI acquired/(disposed)
+/- Other equity movements attributable to NCI
= Closing NCI balance
```

### 4. Consolidate to Group Level
- Sum all subsidiary closing NCI balances for the consolidated balance sheet figure
- Sum all NCI shares of profit/loss for the consolidated income statement line
- Sum all NCI shares of OCI for the consolidated statement of comprehensive income
- Ensure total group equity reconciles: Parent equity + NCI = Total consolidated equity

### 5. Reconciliation Checks
Run the following checks:
- Prior period closing NCI = Current period opening NCI (no unexplained variances)
- NCI balance sheet figure ties to the equity section of the consolidated balance sheet
- NCI profit allocation + parent profit allocation = Total consolidated net income
- Dividends in the NCI schedule match cash flow statement outflows to minority shareholders
- Flag any NCI balance that has gone negative (may indicate guarantee or funding arrangements requiring disclosure)

### 6. Disclosure Notes
Identify items requiring note disclosure:
- Subsidiaries with material NCI (typically >10% of group equity or profit)
- Summarised financial information for material subsidiaries (IFRS 12 / ASC 810 requirements)
- Restrictions on subsidiary assets or cash distributions
- Put/call options over NCI shares

## Output Format

Produce the following structured output:

**1. Summary Table (Group Level)**
| Subsidiary | NCI % | Opening NCI | Profit/(Loss) | OCI | Dividends | Acquisitions/Disposals | Other | Closing NCI |
|---|---|---|---|---|---|---|---|---|
| [Name] | [%] | [£/$/€] | [amount] | [amount] | [amount] | [amount] | [amount] | [amount] |
| **Group Total** | — | [sum] | [sum] | [sum] | [sum] | [sum] | [sum] | [sum] |

**2. Per-Subsidiary Detail Schedules**
One roll-forward block per subsidiary showing each line item with amounts and the NCI percentage applied.

**3. Consolidation Tie-Out**
Three-line check confirming:
- NCI closing balance per schedule = NCI per consolidated balance sheet
- NCI profit per schedule =
