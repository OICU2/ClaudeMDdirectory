---
name: lease-accounting-schedule
description: >
  Generates ASC 842 or IFRS 16 compliant lease amortization schedules with right-of-use asset and liability balances for every reporting period. Use when someone says "create a lease amortization table," asks about "right-of-use asset schedule," wants to "calculate lease liability," needs to "model an operating or finance lease," or asks to "build an ASC 842 or IFRS 16 schedule."
category: finance
tags: [lease-accounting, asc-842, ifrs-16, amortization, right-of-use]
author: community
---

# Lease Accounting Schedule

Builds a period-by-period lease amortization table compliant with ASC 842 or IFRS 16, including right-of-use (ROU) asset and lease liability balances, and will activate whenever a user needs to model, calculate, or document a lease under either standard.

## Workflow

1. **Collect lease inputs** — If not provided, ask for:
   - Lease standard (ASC 842 or IFRS 16)
   - Lease classification (operating vs. finance/lessee)
   - Commencement date
   - Lease term (months or years)
   - Payment amount and frequency (monthly, quarterly, annually)
   - Payment timing (in advance or in arrears)
   - Incremental borrowing rate (IBR) or implicit rate
   - Initial direct costs (IDCs), if any
   - Lease incentives received, if any
   - Residual value guarantee, if any
   - Reporting period frequency (monthly, quarterly, annually)

2. **Calculate initial recognition values**
   - Present value of future lease payments using the provided discount rate, discounted at payment frequency intervals
   - Initial lease liability = PV of lease payments
   - ROU asset = Initial lease liability + IDCs + prepaid lease payments − lease incentives received

3. **Build the amortization table** with these columns per period:
   - Period number and date
   - Beginning lease liability balance
   - Interest expense (liability × periodic rate)
   - Lease payment
   - Ending lease liability balance
   - Beginning ROU asset balance
   - ROU asset amortization (straight-line over lease term for operating; straight-line for finance unless another method is specified)
   - Ending ROU asset balance
   - For **operating leases (ASC 842)**: single straight-line lease cost and plug interest/amortization split
   - For **finance leases**: separate interest expense and amortization expense

4. **Apply standard-specific rules**
   - ASC 842 operating: total lease cost is straight-line; interest on liability uses effective interest method; ROU asset amortization is the plug
   - ASC 842 finance / IFRS 16: interest expense via effective interest method; ROU asset amortized straight-line separately
   - Adjust final period to eliminate rounding residuals and zero out both balances

5. **Provide a summary section** with:
   - Total undiscounted payments
   - Total interest/finance charge
   - Total lease cost
   - Day-1 journal entry (Dr ROU Asset / Cr Lease Liability)
   - Key disclosure figures (weighted-average remaining term, weighted-average discount rate)

## Output Format

Produce the following in order:

**1. Input Summary** — Bulleted list confirming all lease parameters used.

**2. Day-1 Recognition** — Two-line journal entry and initial ROU asset and lease liability amounts.

**3. Amortization Schedule** — Formatted table (Markdown or plain text columns) with one row per reporting period. Columns:
`Period | Date | Beg. Liability | Interest | Payment | End. Liability | Beg. ROU Asset | Amortization | End. ROU Asset | Lease Cost`

**4. Summary Totals** — Single table showing total payments, total interest, total amortization, and total lease cost.

**5. Notes** — Flag any assumptions made (e.g., payments in arrears assumed, straight-line amortization used), rounding approach, and any period-end disclosure figures required under the applicable standard.

Length: as many rows as needed to cover the full lease term; no truncation unless the term exceeds 120 periods, in which case show annual summaries and offer to
