---
name: tax-loss-carryforward-utilization-tracker
description: >
  Tracks and analyzes net operating loss (NOL) carryforwards across jurisdictions, expiry timelines, and applicable limitation rules to maximize their offset against future taxable income. Use when someone asks about available tax losses, wants to know how much NOL they can use this year, is planning around Section 382 limitations, needs to see when their carryforwards expire, or wants to optimize loss utilization across multiple entities or states.
category: finance
tags: [tax, nol, carryforward, tax-planning, corporate-finance]
author: community
---

# Tax Loss Carryforward Utilization Tracker

This skill inventories, analyzes, and prioritizes net operating loss carryforwards by jurisdiction, expiry date, and limitation rules so Claude can help users maximize loss utilization against projected taxable income.

## NOL Tracking Workflow

### 1. Collect Loss Inventory Data
Gather the following for each carryforward position:
- Jurisdiction (federal, state/province, country)
- Tax year the loss was generated
- Original NOL amount
- Amount already utilized in prior years
- Remaining balance available
- Expiry date (or "indefinite" for post-TCJA federal NOLs)
- Any applicable limitation type (Section 382, SRLY, ILBF, state-specific caps)
- Limitation amount per year if restricted

### 2. Apply Jurisdiction-Specific Rules
For each jurisdiction, enforce the correct rules:

**U.S. Federal (post-2017 TCJA):**
- Indefinite carryforward, no carryback (unless CARES Act exception applies)
- 80% of taxable income limitation per year
- Section 382 annual limitation if ownership change occurred (calculate: FMV × long-term tax-exempt rate)

**U.S. Federal (pre-2018 losses):**
- 20-year carryforward, 2-year carryback
- No 80% limitation — full offset allowed

**U.S. State:**
- Vary widely: flag states with shorter windows (e.g., some states limit to 5 or 10 years)
- Note states that conform vs. decouple from TCJA 80% rule
- Separate entity vs. combined/consolidated filing rules

**International:**
- Capture country-specific carryforward periods and rate restrictions
- Flag transfer pricing or anti-avoidance rules that restrict cross-border use

### 3. Project Taxable Income
- Obtain projected taxable income by jurisdiction for each future period (1–5 years)
- If not provided, prompt the user: "What is your estimated taxable income for each jurisdiction and year?"

### 4. Prioritize Loss Utilization
Apply this sequencing logic:
1. **Expiring losses first** — use oldest, soonest-to-expire NOLs in each jurisdiction
2. **Highest-rate jurisdictions** — maximize value by utilizing in jurisdictions with higher tax rates
3. **Uncapped before capped** — use unrestricted losses before Section 382 or similar limited amounts
4. **Annual cap compliance** — never schedule utilization exceeding the annual limitation

### 5. Flag Risks and Action Items
- Losses expiring within 12 months with insufficient projected income to absorb them
- Ownership changes that may trigger a Section 382 study
- States where conformity to federal rules is unclear
- Consolidated return SRLY limitations affecting subsidiary NOLs
- Valuation allowance implications if utilization is uncertain (ASC 740)

## Output Format

Produce a structured report with the following sections:

**1. NOL Inventory Summary Table**
| Jurisdiction | Loss Year | Original NOL | Utilized | Remaining | Expiry | Limitation | Annual Cap |
|---|---|---|---|---|---|---|---|
(One row per carryforward tranche)

**2. Projected Utilization Schedule**
| Year | Jurisdiction | Projected Taxable Income | NOL Applied | Tax Savings ($) | Remaining NOL |
|---|---|---|---|---|---|
(Show year-by-year absorption plan for next 3–5 years)

**3. At-Risk Losses**
Bulleted list of NOL tranches at risk of expiring unutilized, with dollar amounts and expiry dates.

**4. Recommendations**
