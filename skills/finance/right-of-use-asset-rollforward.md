---
name: right-of-use-asset-rollforward
description: >
  Produces a period-by-period rollforward of right-of-use (ROU) asset balances capturing additions, amortization, modifications, and terminations for lease accounting compliance under ASC 842 or IFRS 16. Use when someone asks to track ROU asset changes, needs a lease asset rollforward schedule, wants to reconcile beginning and ending ROU balances, is preparing lease disclosures, or needs to document right-of-use asset activity for an audit.
category: finance
tags: [lease-accounting, asc-842, ifrs-16, rou-asset, rollforward]
author: community
---

# ROU Asset Rollforward

This skill builds a structured period-by-period rollforward of right-of-use asset balances, capturing every movement category required for ASC 842 or IFRS 16 lease accounting compliance.

## Rollforward Workflow

1. **Gather inputs**: Collect beginning ROU asset balance (gross and accumulated amortization), reporting period, applicable standard (ASC 842 or IFRS 16), and currency.

2. **Identify movement categories** for the period:
   - **New additions**: New lease commencements — record initial ROU asset at present value of lease liability plus initial direct costs and prepaid lease payments.
   - **Lease modifications**: Remeasurements due to option exercises, scope changes, or rate revisions — adjust ROU asset by the difference in remeasured lease liability.
   - **Lease terminations / early exits**: Remove gross ROU asset and accumulated amortization for terminated leases; record any gain or loss.
   - **Impairments**: Record any impairment charges reducing the carrying value per ASC 360 or IAS 36.
   - **Amortization expense**: Straight-line amortization for operating leases (ASC 842) or front-loaded for finance leases / all leases under IFRS 16.
   - **Foreign currency translation**: Apply period-end exchange rate adjustments for leases denominated in foreign currencies.

3. **Calculate ending balance**:
   - Ending Gross ROU = Beginning Gross + Additions + Modification Adjustments − Terminations
   - Ending Accumulated Amortization = Beginning Accum. Amort. + Current Period Amortization + Impairments − Amortization Removed on Terminations
   - Net Carrying Value = Ending Gross − Ending Accumulated Amortization

4. **Reconcile**: Confirm ending net carrying value ties to the lease accounting subledger or supporting schedules.

5. **Flag anomalies**: Note any leases with unusual activity — negative balances, fully amortized assets still active, or modification amounts exceeding original asset value.

6. **Apply standard-specific rules**:
   - ASC 842: Separate operating vs. finance lease ROU assets; operating lease amortization is implied (plug to straight-line rent expense).
   - IFRS 16: All leases treated as finance leases; present amortization and interest separately.

## Output Format

Produce the following:

**1. ROU Asset Rollforward Table** (columnar, one row per movement type):

| Movement Category | Gross ROU Asset | Accumulated Amortization | Net Carrying Value |
|---|---|---|---|
| Beginning Balance | $X | $(X) | $X |
| + New Lease Additions | $X | — | $X |
| + Modification Adjustments | $X / $(X) | — | $X / $(X) |
| − Terminations (Gross) | $(X) | $X | $(X) |
| − Current Period Amortization | — | $(X) | $(X) |
| − Impairments | — | $(X) | $(X) |
| ± FX Translation | $X / $(X) | $X / $(X) | $X / $(X) |
| **Ending Balance** | **$X** | **$(X)** | **$X** |

**2. Lease-Level Detail Schedule** (if multiple leases): One sub-row per lease showing lease ID, commencement date, lease term, and each movement amount.

**3. Footnotes**: Note the accounting standard applied, discount rates used for new additions, and any significant judgments (e.
