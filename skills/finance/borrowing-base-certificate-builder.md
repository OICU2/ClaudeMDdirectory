---
name: borrowing-base-certificate-builder
category: finance
description: >
  Compiles eligible receivables, inventory, and other collateral values against lender-defined advance rates to calculate the available borrowing base and generate a formal certificate. Use when someone says "build our borrowing base certificate," asks about "how much we can draw on our credit facility," or wants to "calculate eligible collateral for our ABL line." Also triggers when someone needs to "submit our BBC to the lender" or asks "what's our availability under the revolver."
tags: [borrowing-base, asset-based-lending, credit-facility, receivables, collateral]
author: community
---

# Borrowing Base Certificate Builder

This skill calculates the available borrowing base by applying advance rates to eligible collateral categories and produces a lender-ready certificate whenever a user needs to determine draw availability or satisfy a reporting covenant.

## Workflow

### 1. Collect Collateral Inputs
Request or accept the following data points:
- **Accounts Receivable aging schedule**: gross AR balance by aging bucket (current, 31–60, 61–90, 90+)
- **Inventory values**: raw materials, WIP, finished goods — at cost or NOLV as specified
- **Other eligible collateral**: machinery, real estate, or other lender-approved assets
- **Ineligible receivables**: concentrations exceeding lender threshold (commonly 20–25% of total AR), cross-aged accounts, government receivables, foreign receivables, contra accounts, and accounts past the lender's cutoff (commonly 90 days from invoice date)

### 2. Apply Ineligibility Screens
Systematically exclude:
- AR aged beyond the lender's eligibility window (default: 90 days from invoice date)
- Any single debtor balance exceeding the concentration limit
- Affiliate and intercompany receivables
- Disputed, credit-held, or chargebacked balances
- WIP inventory unless lender has approved its inclusion

### 3. Calculate Eligible Collateral
For each category:
```
Eligible AR = Gross AR − Ineligible AR
Eligible Inventory = Gross Inventory − Ineligible Inventory
Eligible Other Collateral = Appraised Value × Lender-Approved %
```

### 4. Apply Advance Rates
Multiply each eligible collateral balance by the applicable advance rate from the credit agreement (typical defaults if not provided):
- Eligible AR: 85%
- Eligible Finished Goods Inventory: 50–65%
- Eligible Raw Materials: 50%
- Machinery & Equipment: 75–85% of NOLV

Flag any rates that deviate from the defaults and ask the user to confirm against their credit agreement.

### 5. Compute Borrowing Base and Availability
```
Gross Borrowing Base = Sum of all advance-rate-adjusted collateral values
Less: Reserves (landlord, ERISA, environmental, other lender-imposed)
Net Borrowing Base = Gross Borrowing Base − Total Reserves
Revolving Credit Commitment = [from credit agreement]
Lesser of: Net Borrowing Base OR Revolving Commitment = Line Cap
Less: Outstanding Revolver Balance
Less: Outstanding Letters of Credit
Net Availability = Line Cap − Outstandings
```

### 6. Validate and Flag Issues
Before generating the certificate, check for:
- Net availability below any minimum availability covenant — flag as a potential event of default
- Any single collateral category comprising more than 75% of the borrowing base — flag concentration risk
- Missing or estimated inputs — label clearly as estimates requiring CFO sign-off
- Borrowing base certificate frequency requirement (daily, weekly, monthly) — note when next submission is due

## Output Format

Produce a structured certificate in the following format:

---

**BORROWING BASE CERTIFICATE**
**Borrower:** [Company Name]
**Lender:** [Lender Name]
**Certificate Date:** [Date]
**Reporting Period:** [Period End Date]

---

**SECTION I — ACCOUNTS RECEIVABLE**

| Line | Description | Amount |
|------|-------------|--------|
| 1 | Gross Accounts Receivable | $X |
| 2 | Less: Ineligible AR — Aged >90 Days | $(X) |
| 3 | Less: Ineligible AR — Concentration
