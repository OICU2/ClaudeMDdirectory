---
name: subsidiary-liquidation-tax-impact-model
description: >
  Models the full tax consequences of dissolving a subsidiary, including gain or loss recognition, tax basis recovery, and intercompany loan settlement effects. Use when someone asks about winding down a subsidiary, wants to model the tax impact of a corporate liquidation, needs to analyze Section 332 or Section 337 treatment, or is evaluating the tax cost of dissolving an entity. Also activates when someone asks how intercompany debt affects a liquidation or wants to compare taxable versus tax-free dissolution scenarios.
category: finance
tags: [tax, corporate-restructuring, liquidation, subsidiary, intercompany]
author: community
---

# Subsidiary Liquidation Tax Impact Model

This skill models the tax consequences of dissolving a subsidiary, covering gain/loss recognition, basis recovery, intercompany loan settlement, and applicable IRC provisions, activated when a user needs to analyze or quantify the tax impact of winding down a corporate entity.

## Analysis Workflow

1. **Collect Key Inputs**
   - Parent ownership percentage (determines Section 332 eligibility: must be ≥80%)
   - Subsidiary's tax basis in assets (not book value)
   - Fair market value (FMV) of assets being distributed
   - Outstanding intercompany loans: principal, accrued interest, direction (parent-to-sub or sub-to-parent)
   - Accumulated E&P of the subsidiary
   - Parent's stock basis in the subsidiary
   - State of incorporation and primary operating states (for state tax overlay)
   - Existence of any built-in gain or loss assets (especially if S-corp history or section 382 applies)

2. **Determine Liquidation Type**
   - **Section 332 (Tax-Free):** Parent owns ≥80%, subsidiary distributes all assets in complete liquidation within 12 months of plan adoption → Parent takes carryover basis in assets, no gain/loss recognized by parent on stock, subsidiary recognizes no gain/loss on distributions to parent (Section 337)
   - **Taxable Liquidation:** Ownership <80% or conditions not met → Subsidiary recognizes gain/loss on asset distributions at FMV minus adjusted basis; parent recognizes gain/loss on stock (FMV of assets received minus stock basis)
   - Flag any Section 338 elections that could recast a stock acquisition as an asset purchase

3. **Model Gain/Loss Recognition**
   - For each asset class (cash, receivables, fixed assets, intangibles, goodwill): compute FMV − Adjusted Tax Basis = Recognized Gain (Loss)
   - Classify gains: ordinary (recapture under Sections 1245/1250), Section 1231, or capital
   - Apply applicable tax rates: 21% federal corporate rate for ordinary/1231; 21% for capital gains at corporate level
   - If Section 332 applies, confirm subsidiary gain suppression under Section 337 (exceptions: LIFO recapture, certain tax-exempt assets)

4. **Settle Intercompany Loans**
   - Parent-to-Sub loan: In a Section 332 liquidation, treated as part of the liquidating distribution; parent recovers basis in the debt instrument. If FMV of assets < loan balance, parent may recognize a bad debt loss (Section 166).
   - Sub-to-Parent loan: Forgiveness by subsidiary in liquidation may trigger COD income to parent unless excluded; analyze Section 108 applicability.
   - Accrued interest: Determine whether accrual-basis recognition has already occurred; avoid double-counting.

5. **Compute Parent's Net Tax Position**
   - Taxable liquidation: Net gain = FMV of all assets received − Parent's adjusted basis in subsidiary stock
   - Section 332: No gain/loss on stock; parent inherits subsidiary's carryover asset bases and tax attributes (NOLs, credits) subject to Section 381
   - Adjust for any previously deducted losses on subsidiary stock (Section 1504 consolidated return rules if applicable)

6. **State Tax Overlay**
   - Note states that do not conform to Section 332/337 (e.g., California requires separate-company analysis)
   - Flag states with gross receipts taxes triggered by asset transfers
   - Identify any state-level built-in gain taxes

7. **Sensitivity Analysis**
   - Run scenarios varying FMV assumptions ±10–20%
