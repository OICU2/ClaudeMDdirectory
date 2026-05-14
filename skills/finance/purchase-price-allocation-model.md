---
name: purchase-price-allocation-model
description: >
  Builds a structured purchase price allocation (PPA) model that distributes acquisition cost across tangible assets, identifiable intangible assets, and residual goodwill based on fair value inputs. Use when someone says "we just closed an acquisition," asks about allocating purchase price, wants to build a PPA schedule, needs to identify intangible assets post-close, or is preparing ASC 805 accounting entries.
category: finance
tags: [M&A, purchase-price-allocation, goodwill, intangibles, ASC-805]
author: community
---

# Purchase Price Allocation Model

Constructs a complete PPA schedule by stepping through fair value assessments of acquired assets and liabilities, identifying and valuing intangible assets, calculating goodwill, and producing journal entries for post-close accounting under ASC 805.

## PPA Workflow

### 1. Establish Total Purchase Consideration
- Capture all components: cash paid, stock issued (at acquisition-date fair value), earnouts (probability-weighted present value), assumed debt, and transaction costs (expensed separately).
- Formula: `Total Consideration = Cash + Stock FV + Contingent Consideration PV + Assumed Debt FV`

### 2. Identify and Fair-Value Tangible Assets & Liabilities
Collect or estimate fair values for each balance sheet line:
- **Current assets**: Accounts receivable (net of uncollectible estimates), inventory (finished goods at NRV less selling margin; WIP and raw materials step-up as applicable).
- **PP&E**: Replacement cost new less physical/functional/economic depreciation; obtain third-party appraisal inputs where material.
- **Liabilities assumed**: Restate deferred revenue to cost-to-fulfill plus reasonable margin; adjust debt to current market rates.

### 3. Identify and Value Intangible Assets (MEEM / Relief-from-Royalty)
Apply the appropriate valuation method per asset type:

| Intangible Asset | Preferred Method | Key Inputs Needed |
|---|---|---|
| Customer relationships | Multi-period excess earnings (MEEM) | Revenue attrition rate, contributory asset charges, WACC |
| Trade names / brands | Relief from royalty | Royalty rate benchmark, revenue forecast, tax rate |
| Developed technology | Relief from royalty or cost approach | Obsolescence rate, R&D replacement cost |
| Non-compete agreements | With-and-without method | Lost revenue scenario, discount rate |
| Backlog | MEEM (short horizon) | Gross margin on backlog, fulfillment timeline |
| In-process R&D (IPR&D) | Income approach | Probability of completion, milestone cash flows |

For each intangible:
- Assign useful life (finite vs. indefinite).
- Calculate after-tax fair value using provided discount rate or derive WACC from comparable public companies.
- Note amortization period for future D&A impact.

### 4. Calculate Goodwill
```
Goodwill = Total Consideration
         − Fair Value of Net Tangible Assets
         − Fair Value of Identified Intangible Assets
```
- Flag if goodwill exceeds 40% of total consideration — prompt user to verify intangible identification is complete.
- Note goodwill is not amortized (GAAP) but is subject to annual impairment testing.
- For tax: determine if transaction is asset purchase (step-up, deductible) or stock purchase (carryover basis, non-deductible); calculate deferred tax liability on intangibles accordingly.

### 5. Deferred Tax Liability on Intangibles
- For each book intangible with no tax basis: `DTL = Intangible FV × Statutory Tax Rate`
- Add DTL back to goodwill: `Adjusted Goodwill = Initial Goodwill + DTL on Intangibles`
- Re-solve iteratively if needed (goodwill-on-goodwill loop).

### 6. Opening Balance Sheet & Journal Entries
Produce the acquisition journal entry:
```
DR  Tangible Assets (at FV)          $X
DR  Intangible Assets (at FV)        $X
DR  Goodwill                         $X
CR  Liabilities Assumed (at FV)      $X
