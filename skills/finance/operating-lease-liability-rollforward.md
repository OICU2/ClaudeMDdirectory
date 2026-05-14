---
name: operating-lease-liability-rollforward
description: >
  Builds a period-by-period rollforward of operating lease liabilities under ASC 842, tracking beginning balances, new lease additions, cash payments, accretion of interest, and remeasurement adjustments through the ending balance. Use when someone says "show me the lease liability rollforward," asks about "how the operating lease balance changed," wants to "reconcile beginning and ending lease liability balances," needs to "track ASC 842 lease liability movements," or is preparing "operating lease footnote disclosures."
category: finance
tags: [asc-842, leases, rollforward, liability, reconciliation]
author: community
---

# Operating Lease Liability Rollforward

This skill constructs a structured, period-by-period rollforward of operating lease liabilities under ASC 842, and Claude will use it whenever a user needs to trace balance changes, prepare footnote disclosures, or validate lease accounting entries.

## Rollforward Construction Workflow

1. **Gather inputs** — Collect the following for each period covered:
   - Beginning lease liability balance (current + long-term)
   - New leases commenced (present value of future payments at commencement date)
   - Lease modifications and remeasurements (recalculated PV at modified discount rate)
   - Lease terminations (derecognize remaining liability balance)
   - Cash payments made during the period (total lease payments, not just principal)
   - Implicit or incremental borrowing rate for each lease

2. **Calculate accretion (interest expense)** — For each lease, multiply the beginning liability balance by the applicable discount rate (pro-rated for partial periods). This is the non-cash interest component that increases the liability.

3. **Compute principal reduction** — Subtract accretion from total cash payments to isolate the principal paydown component. Formula: `Principal Reduction = Cash Payments − Interest Accretion`

4. **Apply remeasurements** — If lease terms changed, a renewal option became reasonably certain, or variable payments were revised, recalculate the liability as the PV of revised future payments and record the adjustment as an increase or decrease.

5. **Construct the rollforward table row by row**:
   - Beginning Balance
   - (+) New Lease Additions
   - (+) Remeasurement Increases
   - (+) Interest Accretion
   - (−) Cash Payments (gross)
   - (−) Remeasurement Decreases / Terminations
   - = **Ending Balance**

6. **Split ending balance** — Classify the ending balance into current (payments due within 12 months, net of accretion) and long-term portions. Reference the maturity analysis to determine current portion.

7. **Validate** — Confirm that ending balance ties to the lease maturity schedule total, discounted at the applicable rates. Flag any unexplained variances exceeding $1,000 or 0.5% of balance.

## Output Format

Produce the following in order:

**1. Rollforward Table** (Markdown table, one column per period reported):

| Line Item | Q1 20XX | Q2 20XX | FY 20XX |
|---|---|---|---|
| Beginning Liability | $X | $X | $X |
| + New Lease Additions | $X | $X | $X |
| + Remeasurement Increases | $X | $X | $X |
| + Interest Accretion | $X | $X | $X |
| − Cash Payments | ($X) | ($X) | ($X) |
| − Terminations / Remeasurement Decreases | ($X) | ($X) | ($X) |
| **Ending Liability** | **$X** | **$X** | **$X** |
| Current Portion | $X | $X | $X |
| Long-Term Portion | $X | $X | $X |

**2. Assumptions & Rates Summary** — Bullet list of discount rates used per lease, payment frequency assumptions, and any remeasurement trigger events noted.

**3. Variance / Validation Note** — One paragraph confirming the ending balance reconciles to the maturity schedule, or flagging specific items requiring investigation.

**4. Footnote Disclosure Draft** (optional, if requested) — ASC 842-compliant language suitable for inclusion in financial statement footn
