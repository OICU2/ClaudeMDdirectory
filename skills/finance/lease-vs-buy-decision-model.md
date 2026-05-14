---
name: lease-vs-buy-decision-model
description: >
  Builds a rigorous side-by-side financial comparison of leasing versus purchasing an asset, incorporating tax treatment, opportunity cost, and net present value analysis. Use when someone says "should I lease or buy," asks whether it makes more sense to finance a purchase or sign a lease, wants to compare the true cost of leasing against ownership, needs to evaluate a capital vs. operating expense decision, or is trying to decide between leasing equipment and buying it outright.
category: finance
tags: [leasing, capital-budgeting, npv, tax-analysis, asset-management]
author: community
---

# Lease vs. Buy Decision Model

This skill constructs a structured financial comparison of leasing versus purchasing an asset, calculating after-tax costs, opportunity cost of capital, and net present value for each option so the user can make a data-driven decision.

## Analysis Workflow

### 1. Gather Required Inputs
Collect or prompt the user for:
- **Asset details**: Purchase price, useful life (years), residual/salvage value
- **Lease terms**: Monthly/annual payment, lease duration, any buyout option at end
- **Financing details (buy scenario)**: Down payment, loan amount, interest rate, loan term
- **Tax profile**: Marginal tax rate, depreciation method (straight-line vs. MACRS), whether the entity can deduct lease payments
- **Opportunity cost**: Discount rate or WACC to use for NPV calculations
- **Other costs**: Maintenance, insurance, fees (specify which scenario bears each cost)

If any critical input is missing, ask for it before proceeding. Do not assume values silently — state any assumptions explicitly.

### 2. Build the Buy Scenario
- Calculate annual loan payments using standard amortization (principal + interest split per year)
- Apply depreciation schedule to the asset and compute annual depreciation tax shield: `Depreciation × Tax Rate`
- Compute after-tax interest cost per year: `Interest Payment × (1 - Tax Rate)`
- Subtract tax shield from gross costs each year
- Account for residual/salvage value as a cash inflow in the final year
- Discount all after-tax cash flows to present value using the discount rate
- Sum to **NPV of Buy Cost**

### 3. Build the Lease Scenario
- List annual lease payments over the lease term
- Compute after-tax lease cost per year: `Lease Payment × (1 - Tax Rate)` (if fully deductible as operating expense)
- Note: if the lease is a capital/finance lease under GAAP/IFRS, treat it similarly to the buy scenario (depreciation + interest)
- Include any upfront costs (security deposit, origination fees)
- Account for end-of-lease options (walk away, buyout, renewal) and their cash flow impact
- Discount all after-tax cash flows to present value
- Sum to **NPV of Lease Cost**

### 4. Calculate Opportunity Cost Adjustment
- For the buy scenario, identify the capital deployed (down payment or full purchase price if cash)
- Compute the opportunity cost: `Capital Deployed × Discount Rate × (1 - Tax Rate)` per year, or use NPV implicitly through discounting
- Ensure the discount rate used consistently reflects the opportunity cost of capital across both scenarios

### 5. Sensitivity Analysis
Run at least two sensitivity checks:
- **Discount rate sensitivity**: Recalculate NPVs at ±2% from base discount rate
- **Residual value sensitivity**: Show how buy NPV changes if salvage value is 0%, 50%, and 100% of estimated value

### 6. Decision Rule
- **Choose Buy** if NPV of Buy Cost < NPV of Lease Cost (lower cost in present value terms)
- **Choose Lease** if NPV of Lease Cost < NPV of Buy Cost
- Flag qualitative factors that could override the numbers (balance sheet impact, flexibility needs, maintenance responsibility, obsolescence risk)

## Output Format

Produce a structured response with the following sections:

**1. Inputs Summary Table**
A compact table listing every input used, with a note on any assumed values.

**2. Buy Scenario — Year-by-Year Cash Flow Table**
| Year | Loan Payment | Interest | Principal | Depreciation | Tax Shield | After-Tax Cost | PV of Cost |
Include a totals row and the final **NPV of Buy
