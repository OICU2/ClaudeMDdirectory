---
name: bank-debt-term-sheet-analyzer
description: >
  Extracts, structures, and compares key economic and restrictive terms across multiple bank debt term sheets to identify the most favorable financing structure. Use when someone says "compare these term sheets," asks about "which bank offer is better," or wants to "analyze debt terms," "review loan proposals," or "evaluate financing options from lenders."
category: finance
tags: [debt, term-sheets, lending, credit-analysis, structured-finance]
author: community
---

# Bank Debt Term Sheet Analyzer

This skill systematically extracts and compares economic and restrictive covenants across multiple bank debt term sheets, producing a side-by-side analysis that highlights the most favorable financing structure for the borrower.

## Analysis Workflow

### Step 1: Extract Key Economic Terms from Each Term Sheet
For every term sheet provided, pull the following data points:
- **Facility type and size** (revolver, term loan A/B, delayed draw, etc.)
- **Pricing**: base rate (SOFR/Prime), spread/margin, PIK vs. cash pay
- **Pricing grid**: leverage-based or rating-based step-downs/ups
- **Upfront fees**: arrangement, commitment, OID
- **Ongoing fees**: unused commitment fee, agency fee, letter of credit fee
- **Maturity and amortization schedule**: annual % amortization, bullet at maturity
- **Prepayment terms**: soft call, hard call, make-whole, free prepayment windows

### Step 2: Extract Key Restrictive and Structural Terms
- **Financial maintenance covenants**: leverage ratio, interest coverage, fixed charge coverage, minimum liquidity — include thresholds and testing frequency
- **Negative covenants**: restricted payments basket, investment basket, debt incurrence, asset sale proceeds sweep %, acquisition permissions
- **Reporting requirements**: frequency, cure rights, equity cure mechanics
- **Change of control provisions**: definition, trigger, put right or repricing
- **Collateral and guarantee package**: scope of security, excluded assets, guarantor coverage threshold
- **Conditions precedent**: key closing conditions, MAC definition

### Step 3: Normalize for Direct Comparison
- Convert all-in costs to a single comparable metric (e.g., approximate all-in yield or total cost of capital over term)
- Flag any non-standard or aggressive lender-friendly language
- Note missing terms that should be present but are absent (treat absence as a red flag)
- Identify terms where one lender is materially more restrictive than peers

### Step 4: Score and Rank Each Term Sheet
Score each term sheet across three dimensions (1–5 scale, 5 = most borrower-friendly):
1. **Economic cost** (pricing, fees, amortization burden)
2. **Operational flexibility** (covenant headroom, basket sizes, restricted payments)
3. **Structural protections** (prepayment flexibility, cure rights, collateral scope)

Calculate a weighted composite score (suggest default weights: 40% economic, 40% flexibility, 20% structural, but flag if user has different priorities).

### Step 5: Identify the Recommended Structure
- Name the single best overall term sheet and explain why
- Identify if a hybrid approach (e.g., pricing from Lender A, covenant package from Lender B) is worth negotiating
- List the top 3–5 specific terms the borrower should push back on in the leading offer

## Output Format

Produce the following sections in order:

**1. Term Sheet Summary Table**
A markdown table with one column per lender and one row per key term (economic terms first, then restrictive terms). Use "N/A" for missing terms and bold any term that is the best among all lenders for that row.

**2. All-In Cost Comparison**
A short table showing estimated all-in cost (spread + fees amortized over expected hold period) for each facility.

**3. Covenant Headroom Analysis**
For each financial covenant across all term sheets, show the stated threshold and — if the borrower's current financials are provided — the implied headroom as a percentage.

**4. Scorecard**
A table showing each lender's score on Economic Cost, Operational Flexibility, and Structural Protections, plus the weighted composite score and rank.

**5. Recommendation Memo (200–300 words)**
Plain-language narrative naming the recommended term sheet, explaining the key reasons, flagging the 
