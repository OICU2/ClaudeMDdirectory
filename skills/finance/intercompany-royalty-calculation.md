---
name: intercompany-royalty-calculation
description: >
  Calculates and documents intercompany royalty charges based on IP ownership structures, applicable rates, and transfer pricing compliance requirements. Use when someone says "calculate royalty charges between entities," asks about "intercompany IP licensing fees," wants to "set up a royalty arrangement between subsidiaries," needs to "document transfer pricing for intellectual property," or is working on "arm's length royalty rate determination."
category: finance
tags: [transfer-pricing, intercompany, royalties, ip-licensing, tax-compliance]
author: community
---

# Intercompany Royalty Calculation

This skill calculates, structures, and documents intercompany royalty charges for IP licensing arrangements between related entities, ensuring transfer pricing compliance and arm's length standards.

## Royalty Calculation Workflow

### 1. Gather IP and Entity Information
- Identify the IP owner (licensor) and licensee entities, including jurisdictions for each
- Confirm IP type: patent, trademark, software, trade secret, know-how, or mixed bundle
- Establish the royalty base: net sales, gross revenue, units sold, or operating profit
- Collect historical financials for both entities (minimum 3 years where available)

### 2. Determine the Appropriate Transfer Pricing Method
Apply the best method rule by evaluating:
- **Comparable Uncontrolled Transaction (CUT)**: use if external comparable licenses exist for the same IP type
- **Comparable Profits Method (CPM)**: compare licensee's operating margin to uncontrolled comparables
- **Profit Split**: use for unique, high-value intangibles where both parties make significant contributions
- **Residual Profit Split**: separate routine returns from residual IP-related returns
Document why the selected method is the best method; reject alternatives with written rationale.

### 3. Benchmark the Royalty Rate
- Search royalty databases (RoyaltyStat, ktMINE, SEC filings) for comparable licenses
- Filter comparables by: industry, IP type, exclusivity, geographic scope, contract term, and licensee size
- Calculate the interquartile range (IQR) of comparable rates
- Set the proposed rate within the arm's length range; document any adjustments for comparability differences

### 4. Calculate the Royalty Charge
```
Royalty Charge = Royalty Base × Applicable Rate
```
- Apply rate to the agreed base (e.g., net sales net of returns, discounts, and indirect taxes)
- If tiered rates apply, break the base into tiers and calculate each tranche separately
- Adjust for sublicensing arrangements, cross-licenses, or cost-sharing buy-ins if present
- Convert to functional currency of each entity using the appropriate exchange rate (spot or average period rate per policy)

### 5. Assess Tax and Withholding Implications
- Identify applicable withholding tax rates between the two jurisdictions
- Check applicable tax treaty for reduced withholding rates and beneficial ownership requirements
- Calculate net after-tax royalty received by licensor
- Flag DEMPE (Development, Enhancement, Maintenance, Protection, Exploitation) function alignment — the entity bearing economic risk and performing key functions must receive commensurate returns

### 6. Document the Arrangement
- Draft or reference the intercompany license agreement covering: IP description, territory, exclusivity, term, rate, base, payment timing, and audit rights
- Prepare a transfer pricing memo (local file standard per OECD BEPS Action 13): functional analysis, comparables search, method selection, and conclusion
- Note any annual true-up mechanism if actual results deviate from projected royalty base

## Output Format

Produce a structured royalty calculation report with these sections:

**1. Transaction Summary**
- Licensor and licensee entities (name, country, tax ID if provided)
- IP type and description
- License term and territory

**2. Rate Determination**
- Transfer pricing method selected and rationale for rejection of alternatives
- Comparable set summary (3–10 comparables with source, rate range, and IQR)
- Selected rate with any comparability adjustments noted

**3. Royalty Calculation Table**
| Period | Royalty Base | Rate | Gross Royalty | Withholding Tax | Net to Licensor |
|--------|-------------|------|---------------|-----------------|-----------------|
| [Q/Year] | $X | X% | $X | $X
