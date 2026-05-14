---
name: lease-modification-accounting-brief
description: >
  Analyzes lease modification terms and generates the required accounting entries and disclosure language under ASC 842 or IFRS 16. Use when someone says "we modified a lease," asks about accounting for a lease change or extension, or wants to determine whether a lease modification is a separate contract or remeasurement event. Also activates when someone needs journal entries for a lease amendment or asks how to update right-of-use asset and liability balances.
category: finance
tags: [lease-accounting, asc-842, ifrs-16, journal-entries, lease-modifications]
author: community
---

# Lease Modification Accounting Brief

This skill analyzes lease modification terms and produces the required classification determination, remeasurement calculations, journal entries, and disclosure language under ASC 842 or IFRS 16.

## Modification Analysis Workflow

1. **Gather modification inputs** — Collect original lease terms (commencement date, lease term, payments, incremental borrowing rate, carrying balances of ROU asset and lease liability) and modified terms (effective date of modification, new lease term, new payment amounts, any added/removed assets).

2. **Classify the modification** — Apply the two-criteria test:
   - Does the modification add right-of-use of one or more underlying assets not included in the original lease?
   - Is the added scope priced at a standalone price commensurate with its value?
   - If both criteria are met → **Separate contract** (no remeasurement; account as a new lease).
   - If either criterion fails → **Modification to existing lease** (requires remeasurement).

3. **For existing-lease modifications, classify the remeasurement type:**
   - **Type 1** — Modification decreases scope (partial or full termination): reduce ROU asset and lease liability proportionately; recognize gain/loss.
   - **Type 2** — Modification increases scope but is not a separate contract: remeasure liability at revised payments discounted at revised incremental borrowing rate; adjust ROU asset by the same amount.
   - **Type 3** — All other modifications (e.g., rate change only): remeasure liability at revised discount rate; adjust ROU asset.

4. **Remeasure the lease liability** — Discount remaining modified lease payments at the lessee's incremental borrowing rate as of the modification effective date. Show the present value calculation steps.

5. **Adjust the ROU asset** — Apply the remeasurement difference (new liability balance minus old liability balance) to the ROU asset. For scope reductions, derecognize the proportionate share first, then adjust.

6. **Draft journal entries** — Produce debit/credit entries as of the modification effective date covering: (a) scope reduction gain/loss if applicable, (b) lease liability adjustment, (c) ROU asset adjustment.

7. **Generate disclosure language** — Write a short footnote-ready paragraph describing the modification, its nature, effective date, and the resulting financial statement impact, referencing the applicable standard (ASC 842-20-45 or IFRS 16.44–46).

8. **Flag edge cases** — Call out if the modification involves a finance lease vs. operating lease reclassification, a sale-leaseback arrangement, variable lease payments, or lessor accounting, as these require additional analysis.

## Output Format

Produce a structured brief with the following sections:

**1. Modification Classification**
- One sentence stating whether the modification is a separate contract or a modification to an existing lease, with the rationale.

**2. Remeasurement Summary Table**
| Item | Pre-Modification | Post-Modification | Adjustment |
|---|---|---|---|
| Lease Liability | $X | $X | $X |
| ROU Asset | $X | $X | $X |
| Discount Rate Used | X% | X% | — |

**3. Journal Entries**
Present in standard debit/credit format with account names, amounts, and a one-line description of each entry.

**4. Disclosure Language**
2–4 sentence footnote-ready paragraph suitable for inclusion in financial statement notes.

**5. Assumptions & Flags**
Bulleted list of any assumptions made (e.g., incremental borrowing rate source) and any edge cases requiring further review.

Total output length: 400–700 words. Use tables and labeled sections. Do not omit the journal entries or disclosure paragraph.
