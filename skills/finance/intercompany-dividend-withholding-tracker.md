---
name: intercompany-dividend-withholding-tracker
description: >
  Models withholding tax obligations on intercompany dividends across jurisdictions and surfaces cash flow timing impacts. Use when someone asks about dividend withholding taxes between subsidiaries, wants to understand cross-border intercompany dividend flows, needs to calculate net cash received after withholding on group dividends, or is planning intercompany distributions and wants to see the tax drag. Also activates when someone mentions treaty rates on dividends or asks why their holding company received less cash than expected.
category: finance
tags: [withholding-tax, intercompany, dividends, cash-flow, transfer-pricing]
author: community
---

# Intercompany Dividend Withholding Tracker

This skill models the withholding tax obligations and net cash impact when dividends flow between related entities across different tax jurisdictions, using applicable treaty or domestic rates.

## Workflow

### 1. Gather Entity and Jurisdiction Details
- Identify the paying entity (subsidiary) country and the receiving entity (parent/holding company) country
- Confirm the ownership percentage between entities (threshold matters for treaty eligibility, e.g., 10%, 25%, 80%+ brackets)
- Ask for the gross dividend amount and proposed payment date

### 2. Determine Applicable Withholding Rate
- Check whether a tax treaty exists between the two jurisdictions
- Apply the treaty reduced rate if ownership threshold is met (e.g., EU Parent-Subsidiary Directive at 0%, US-UK treaty at 5% for 10%+ holdings)
- Fall back to domestic statutory withholding rate if no treaty applies or threshold is unmet
- Flag any anti-avoidance provisions (e.g., LOB clauses, PPT tests, beneficial ownership requirements) that could deny treaty access
- Note if the recipient jurisdiction imposes a secondary withholding layer or participation exemption

### 3. Calculate Net Cash Flow
- Gross dividend declared
- Less: Withholding tax withheld at source (gross × applicable rate)
- Net cash remitted to parent
- Foreign tax credit availability at the parent level (partial or full offset against domestic tax)
- Effective net receipt after all layers

### 4. Surface Timing Impacts
- Withholding tax remittance deadline in the source country (often 15–30 days post-payment)
- Date the net cash is available to the parent for redeployment
- Any reclaim process if over-withheld (timeline, documentation required, typical processing lag)
- Impact on intercompany receivables or cash pooling structures if payment spans a period end

### 5. Flag Structural Risks
- Conduit arrangement risk if an intermediate holding company lacks substance
- CFC or GILTI implications at the ultimate parent level
- Currency exposure window between declaration date and net receipt date

## Output Format

Produce a structured summary with the following sections:

**Transaction Summary**
- Paying entity / jurisdiction
- Receiving entity / jurisdiction
- Ownership % and treaty eligibility status
- Gross dividend amount and payment date

**Withholding Tax Calculation Table**
| Item | Amount |
|---|---|
| Gross Dividend | $X |
| Withholding Rate Applied | X% (treaty / domestic) |
| Tax Withheld at Source | $X |
| Net Cash Remitted | $X |
| Estimated FTC Offset (if applicable) | $X |
| Effective Net Receipt | $X |

**Cash Flow Timeline**
- Bullet list of key dates: declaration, payment, withholding remittance due, net funds available, reclaim window (if any)

**Risk and Action Flags**
- Numbered list of any treaty access risks, substance concerns, reclaim steps, or planning opportunities

Keep the output concise. If jurisdiction data is missing, state the assumption made and prompt the user to confirm before finalizing figures.
