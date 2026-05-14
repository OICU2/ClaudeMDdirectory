---
name: capital-lease-vs-operating-lease-classifier
description: >
  Applies IFRS 16 or ASC 842 criteria to classify lease agreements and determine
  their balance sheet impact. Use when someone shares a lease agreement for review,
  asks whether a lease should be capitalized, wants to know how a lease affects
  their financial statements, or needs to determine if an arrangement qualifies as
  a lease under accounting standards.
category: finance
tags: [ifrs-16, asc-842, lease-accounting, balance-sheet, financial-reporting]
author: community
---

# Capital vs. Operating Lease Classifier

Analyzes lease agreements against IFRS 16 and ASC 842 criteria to produce a definitive classification, journal entry treatment, and balance sheet impact summary.

## Classification Workflow

### Step 1: Identify the Applicable Standard
- Ask or determine whether the entity reports under IFRS or US GAAP (ASC 842).
- Note the entity type: lessee or lessor (classification rules differ).

### Step 2: Confirm the Arrangement Is a Lease
Apply the control test:
- Is there an **identified asset** (explicitly or implicitly specified, not substitutable by the supplier)?
- Does the customer have the **right to obtain substantially all economic benefits** from use?
- Does the customer have the **right to direct how and for what purpose** the asset is used?
- If all three: the arrangement contains a lease. If not, treat as a service contract and stop.

### Step 3: Apply Lessee Classification Tests

**Under ASC 842 (US GAAP) — Finance Lease if ANY of the following are met:**
1. Ownership transfers to lessee by end of lease term.
2. Lessee has a purchase option they are reasonably certain to exercise.
3. Lease term is for the **major part** of the asset's remaining economic life (bright line: ≥75%).
4. Present value of lease payments equals or exceeds **substantially all** of the asset's fair value (bright line: ≥90%).
5. Asset is specialized with no alternative use to the lessor at end of term.
- If none apply → **Operating Lease**.

**Under IFRS 16 — All leases are recognized on balance sheet (right-of-use asset + liability).** Distinguish only for income statement presentation:
- **Finance lease indicators** (per IAS 17 legacy / IFRS 16 disclosure context): ownership transfer, bargain purchase option, lease term covers major part of asset life, PV of payments ≈ fair value, specialized asset.
- **Operating lease**: short-term (≤12 months) or low-value asset exemptions allow off-balance-sheet treatment.

### Step 4: Calculate Balance Sheet Impact
- **Lease liability** = PV of future lease payments discounted at the implicit rate (or incremental borrowing rate if implicit rate not determinable).
- **Right-of-use (ROU) asset** = Lease liability + initial direct costs + prepaid payments − lease incentives received.
- Identify lease term: include optional renewal periods if reasonably certain to exercise.
- Separate lease and non-lease components (e.g., maintenance) unless practical expedient applied.

### Step 5: Determine Income Statement Treatment

| Classification | Expense Recognition |
|---|---|
| ASC 842 Finance / IFRS 16 (standard) | Amortization of ROU asset (straight-line) + interest on liability (front-loaded) |
| ASC 842 Operating | Single straight-line lease expense (no split) |
| IFRS 16 Short-term / Low-value | Straight-line expense, off balance sheet |

### Step 6: Flag Key Judgment Areas
- Variable lease payments (include only if based on index/rate).
- Residual value guarantees included in lease payments.
- Lease modifications (reassess classification at modification date).
- Sale-and-leaseback arrangements (check if sale qualifies under IFRS 15 / ASC 606).

## Output Format

Produce a structured report with the following sections:

**1. Standard Applied:** IFRS 16 or ASC 842, with entity type.

**2. Lease Identification Result:** Confirmed lease / Not a lease, with one-line rationale.

**3. Classification:** Finance Lease / Operating Lease /
