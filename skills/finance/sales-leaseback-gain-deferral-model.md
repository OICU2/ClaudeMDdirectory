---
name: sales-leaseback-gain-deferral-model
description: >
  Models the recognition timing and deferred gain schedule for sale-leaseback transactions under
  current accounting standards (ASC 842 / IFRS 16). Use when someone asks about sale-leaseback
  accounting treatment, wants to calculate deferred gain amortization on a property sold and leased
  back, needs to structure a sale-leaseback transaction, or is trying to determine how gains are
  recognized over a leaseback period. Also activates when someone mentions failed sale-leaseback
  criteria or financing transaction treatment.
category: finance
tags: [sale-leaseback, ASC-842, IFRS-16, deferred-gain, lease-accounting, real-estate-finance]
author: community
---

# Sale-Leaseback Gain Deferral Model

This skill builds a complete gain recognition schedule for sale-leaseback transactions, applying ASC 842 or IFRS 16 rules to determine whether a sale qualifies, how much gain is recognized immediately, and how the remainder is amortized over the leaseback term.

## Transaction Qualification Check

1. **Confirm sale criteria are met** under ASC 606 / IFRS 15 (control transfer to buyer-lessor).
   - If control does NOT transfer → treat as a **financing transaction**: no sale, no gain; record a financial liability and continue depreciating the asset.
   - If control transfers → proceed to gain calculation.

2. **Identify leaseback classification**:
   - ASC 842: Operating lease or Finance lease back to seller-lessee?
   - IFRS 16: All leasebacks are treated as right-of-use assets; gain adjustment methodology applies.

## Gain Calculation Steps

3. **Calculate total gain**:
   ```
   Total Gain = Sale Price − Net Book Value of Asset
   ```

4. **Determine fair value relationships**:
   - Compare Sale Price vs. Fair Value (FV) of asset.
   - Compare Present Value of leaseback payments (PV_lease) vs. FV.

5. **Apportion gain retained vs. deferred** (ASC 842 approach):
   ```
   Gain Recognized Immediately = Total Gain × (1 − PV_lease / FV)
   Deferred Gain               = Total Gain × (PV_lease / FV)
   ```
   - If Sale Price > FV: excess above FV is a prepaid rent adjustment (not gain).
   - If Sale Price < FV: deficiency below FV is an additional lease incentive (adjust ROU asset).

6. **IFRS 16 adjustment** (if applicable):
   ```
   Gain Recognized = Total Gain × (FV − PV_lease) / FV
   ROU Asset       = NBV × (PV_lease / FV)
   ```

## Deferred Gain Amortization Schedule

7. **Amortize deferred gain** straight-line over the leaseback term:
   ```
   Annual Amortization = Deferred Gain / Leaseback Term (years)
   ```
   - Offset against lease expense each period (reduces ROU asset or recorded as contra-expense).

8. **Build period-by-period schedule** with columns:
   - Period | Beginning Deferred Balance | Amortization | Ending Deferred Balance | Cumulative Recognized Gain

9. **Record journal entries** for:
   - Sale closing date (derecognize asset, record proceeds, split gain/deferred gain)
   - Each reporting period (amortize deferred gain)

## Edge Case Rules

- **Repurchase options**: If seller-lessee holds a repurchase option at below-market price → sale likely fails; treat as financing.
- **Variable lease payments**: Include only fixed payments in PV_lease calculation.
- **Partial leaseback**: Apply gain deferral only to the portion leased back; recognize remaining gain immediately.
- **Sale below NBV (loss)**: Recognize full loss immediately unless transaction is off-market (adjust for below-FV sale price).

## Output Format

Produce the following in sequence:

1. **Qualification Summary** (3–5 bullet points): sale criteria result, leaseback classification, any edge cases flagged.
