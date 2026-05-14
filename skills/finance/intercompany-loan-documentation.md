---
name: intercompany-loan-documentation
description: >
  Drafts intercompany loan agreement summaries with principal terms, interest rate benchmarking, repayment schedules, and journal entries. Use when someone says "document an intercompany loan," asks about "arm's length interest rates between subsidiaries," wants to "set up a related-party lending arrangement," needs to "record an intercompany borrowing," or is "structuring a loan between group entities."
category: finance
tags: [intercompany, transfer-pricing, loan-documentation, journal-entries, arm's-length]
author: community
---

# Intercompany Loan Documentation

This skill drafts a complete intercompany loan agreement summary including principal terms, arm's length interest rate benchmarking, amortization schedule, and the booking entries required to record the loan in both lender and borrower entities.

## Workflow

### 1. Gather Loan Parameters
Collect or prompt for:
- Lender entity and borrower entity (names, jurisdictions, currencies)
- Principal amount and drawdown date
- Loan purpose (e.g., working capital, acquisition funding, capex)
- Proposed or target interest rate
- Loan tenor and repayment structure (bullet, amortizing, revolving)
- Any collateral or guarantee arrangements

### 2. Benchmark Interest Rate Against Arm's Length Standards
- Identify the borrower's standalone credit rating or proxy (use industry comparables if unavailable)
- Reference applicable benchmark rates: SOFR, EURIBOR, or local risk-free rate as base
- Apply a credit spread appropriate to the borrower's credit risk profile and loan tenor
- Compare proposed rate against publicly available comparable uncontrolled transactions (CUP method) or a yield-curve approach
- Flag if the proposed rate deviates materially (>50bps) from the benchmarked range
- Note OECD Transfer Pricing Guidelines Chapter X applicability and any local thin-cap or interest limitation rules (e.g., EBITDA-based caps under BEPS Action 4)

### 3. Draft Loan Agreement Summary
Structure the summary with these sections:
- **Parties**: Full legal names, jurisdictions, and relationship (parent/subsidiary/sister entity)
- **Principal & Currency**: Amount, currency, and drawdown mechanics
- **Interest Rate**: Rate type (fixed/floating), benchmark, spread, reset frequency, and benchmarking rationale
- **Repayment Schedule**: Payment dates, amounts, and any grace periods
- **Maturity**: Final repayment date and any extension options
- **Default & Acceleration**: Key trigger events
- **Governing Law**: Applicable jurisdiction and dispute resolution
- **Transfer Pricing Documentation Note**: Confirm contemporaneous documentation requirement and master/local file reference

### 4. Build Repayment Schedule
- Generate a period-by-period table: period number, opening balance, interest accrued, principal repaid, closing balance
- Calculate using the agreed rate; show total interest cost over loan life
- Flag any balloon payments or back-loaded structures that may attract regulatory scrutiny

### 5. Produce Booking Entries
**At drawdown (lender books):**
- DR: Intercompany Loan Receivable — [Borrower] (Balance Sheet)
- CR: Cash / Bank Account

**At drawdown (borrower books):**
- DR: Cash / Bank Account
- CR: Intercompany Loan Payable — [Lender] (Balance Sheet)

**At each interest accrual (lender books):**
- DR: Intercompany Interest Receivable
- CR: Interest Income — Intercompany (P&L)

**At each interest accrual (borrower books):**
- DR: Interest Expense — Intercompany (P&L)
- CR: Intercompany Interest Payable

**At principal repayment:**
- DR: Cash (lender) / CR: Intercompany Loan Receivable (lender)
- DR: Intercompany Loan Payable (borrower) / CR: Cash (borrower)

Note any withholding tax obligations on interest payments and whether a gross-up clause applies.

### 6. Compliance Checklist
- [ ] Interest rate is within arm's length range and documented
- [ ] Loan has a written agreement signed before or at drawdown
- [ ] Thin capitalisation / interest limitation rules reviewed
- [ ] Withhol
