---
name: intragroup-transfer-pricing-benchmark-report
description: >
  Identifies comparable uncontrolled transactions and documents arm's-length pricing ranges for intercompany service and product charges. Use when someone needs to benchmark intercompany prices, asks about transfer pricing compliance, wants to document arm's-length ranges for related-party transactions, needs a comparability analysis for intragroup charges, or is preparing transfer pricing documentation for a tax audit or regulatory filing.
category: finance
tags: [transfer-pricing, intercompany, tax-compliance, benchmarking, arm's-length]
author: community
---

# Intragroup Transfer Pricing Benchmark Report

This skill produces a structured transfer pricing benchmark report that identifies comparable uncontrolled transactions and establishes defensible arm's-length pricing ranges for intercompany service and product charges.

## Benchmark Analysis Workflow

### 1. Capture Transaction Details
Collect and document the following inputs before proceeding:
- Transaction type (services, tangible goods, intangibles, financial)
- Entities involved (jurisdiction, related-party relationship, ownership structure)
- Transaction value and currency
- Functional profile of each entity (functions performed, assets used, risks assumed)
- Existing intercompany agreement terms, if any

### 2. Select the Transfer Pricing Method
Apply the most appropriate OECD-recognized method based on transaction type:
- **CUP (Comparable Uncontrolled Price):** Use for commodity-like goods or financial transactions with direct market quotes
- **TNMM (Transactional Net Margin Method):** Use for routine service providers or distributors; benchmark net margin indicators (operating margin, Berry ratio)
- **Cost Plus:** Use for contract manufacturers or routine service providers; benchmark cost-plus markups
- **RPM (Resale Price Method):** Use for buy-sell distributors with minimal value-add
- **Profit Split:** Use for integrated transactions or unique contributions from both sides

Justify the method selection and explicitly reject less appropriate methods with reasoning.

### 3. Define the Comparability Search Criteria
Specify the screening criteria for identifying comparables:
- Industry codes (NAICS/SIC/NACE) relevant to the tested party
- Geographic market scope (local, regional, global — with justification)
- Functional similarity filters (single-segment, no related-party revenues >25%, positive equity)
- Revenue range for size comparability (apply interquartile range if needed)
- Time period for financial data (typically 3–5 years weighted average)

### 4. Identify and Screen Comparables
- List candidate comparables with data sources (e.g., Bureau van Dijk Orbis, Compustat, RoyaltyRange, ktMINE)
- Apply quantitative screens: remove loss-making companies in multiple years, remove companies with insufficient data
- Apply qualitative screens: confirm functional and risk comparability
- Document rejected comparables and reasons for rejection
- Final comparable set should contain a minimum of 5 companies; note if fewer and explain

### 5. Compute the Arm's-Length Range
- Calculate the profit level indicator (PLI) for each comparable for each year
- Compute weighted multi-year averages per comparable
- Construct the full range and the interquartile range (IQR: 25th–75th percentile)
- State the median
- Compare the tested party's actual result to the IQR; conclude whether it falls within, below, or above the arm's-length range
- If outside the range, recommend an adjustment to the median

### 6. Document Functional Analysis
For each entity in the transaction, produce a concise FAR matrix:
- **Functions:** Development, manufacturing, distribution, marketing, administrative, management
- **Assets:** Tangible, intangible, financial
- **Risks:** Market, credit, inventory, R&D, financial, regulatory
- Classify each entity as routine or entrepreneur based on FAR profile

### 7. Risk and Compliance Flags
- Identify jurisdiction-specific documentation thresholds (e.g., OECD BEPS Action 13, US §482, EU Code of Conduct)
- Flag transactions subject to mandatory disclosure or Country-by-Country Reporting (CbCR)
- Note any thin-capitalization or interest limitation rules applicable to financial transactions
- Highlight transactions with high audit risk (e.g., intercompany royalties, management fees to low-tax jurisdictions)

## Output Format

Produce
