---
name: loan-origination-fee-amortization
description: >
  Builds a complete amortization schedule for debt issuance costs and loan origination fees spread over the life of a loan using the effective interest method per ASC 835-30 / IFRS 9. Use when someone asks about amortizing loan fees, wants to spread origination costs over a loan term, needs to calculate the effective interest rate on a loan with fees, or is building a debt issuance cost schedule.
category: finance
tags: [amortization, debt-issuance-costs, effective-interest-method, loan-fees, asc-835]
author: community
---

# Loan Origination Fee Amortization

This skill builds a period-by-period amortization schedule for debt issuance costs and origination fees using the effective interest method, and Claude will use it whenever someone needs to spread loan fees over a borrowing's life for accounting or reporting purposes.

## Effective Interest Method Workflow

### 1. Collect Required Inputs
Ask for or confirm these inputs before proceeding:
- **Face value** of the loan (principal)
- **Stated (coupon) interest rate** and payment frequency (monthly, quarterly, semi-annual, annual)
- **Origination fees / debt issuance costs** paid at closing (e.g., lender fees, underwriting fees, legal costs)
- **Loan term** (in months or years)
- **Loan start date**
- **Unamortized fee treatment**: confirm whether fees reduce the carrying value of the debt (ASC 835-30 / IFRS 9 presentation) or are recorded as a separate asset (older US GAAP)

### 2. Calculate the Effective Interest Rate
- Net proceeds = Face value − Origination fees
- Solve for the periodic effective interest rate (EIR) such that the present value of all future cash flows (principal + stated interest payments) discounted at EIR equals net proceeds
- Use iterative solver logic (Newton-Raphson or goal-seek equivalent): start with the stated rate as the initial guess, then iterate until the NPV of cash flows equals net proceeds within a tolerance of $0.01
- Annualize the periodic EIR: EIR_annual = (1 + EIR_periodic)^periods_per_year − 1
- State clearly: stated rate, effective rate (periodic and annualized), and the difference

### 3. Build the Amortization Schedule
For each payment period generate these columns:

| Period | Date | Opening Carrying Value | Cash Interest Paid | Effective Interest Expense | Fee Amortization | Closing Carrying Value | Cumulative Fee Amortized | Remaining Unamortized Fee |
|--------|------|----------------------|-------------------|--------------------------|-----------------|----------------------|------------------------|--------------------------|

Calculation logic per row:
- **Cash Interest Paid** = Face value × stated periodic rate
- **Effective Interest Expense** = Opening Carrying Value × EIR_periodic
- **Fee Amortization** = Effective Interest Expense − Cash Interest Paid
- **Closing Carrying Value** = Opening Carrying Value + Fee Amortization (carrying value accretes toward face value)
- Final period: adjust for any rounding to ensure closing carrying value equals face value exactly

### 4. Validate the Schedule
- Sum of all Fee Amortization amounts must equal total origination fees paid at closing
- Closing carrying value in the final period must equal face value (±$0.01 rounding tolerance)
- Sum of Effective Interest Expense must equal total cash interest paid + total origination fees
- Flag any discrepancy and show a reconciliation line

### 5. Provide Accounting Entries
Show the journal entries for:
- **Loan origination** (debit Cash/Net Proceeds, debit Debt Issuance Cost or contra-liability, credit Loan Payable)
- **Each period** (debit Interest Expense for effective amount, credit Cash for stated amount, credit Unamortized Fee / debit contra-liability for amortization)
- **Loan maturity** (debit Loan Payable, credit Cash for face value repayment)

## Output Format

Produce the following in order:

1. **Input Summary** — bulleted list confirming all inputs used
2. **Effective Rate Calculation** — show net proceeds formula, EIR solve,
