---
name: physical-asset-audit-checklist
description: >
  Generates a structured checklist for auditing physical assets by location, condition, ownership, and depreciation status. Use when someone says "I need to audit our assets," asks about tracking physical inventory or equipment, wants to conduct a facility or property audit, needs to verify asset ownership and condition, or is preparing for a financial or compliance audit involving physical items.
category: operations
tags: [asset-management, audit, inventory, compliance, depreciation]
author: community
---

# Physical Asset Audit Checklist

This skill generates a structured, ready-to-use checklist for auditing physical assets across location, condition, ownership, and depreciation dimensions, activated whenever a user needs to verify, inspect, or document physical asset inventory.

## Audit Checklist Workflow

1. **Identify Scope First**
   - Ask or infer the asset types in scope (IT equipment, furniture, machinery, vehicles, real estate, tools)
   - Confirm the audit context: internal review, financial audit, insurance, compliance, or asset disposal
   - Determine the location scope: single site, multi-site, or remote/field assets

2. **Build the Checklist in Five Sections**

   **Section 1 — Asset Identification**
   - Asset ID / serial number recorded
   - Asset name and description documented
   - Asset category assigned (hardware, furniture, vehicle, equipment, etc.)
   - Date of acquisition noted
   - Purchase order or procurement reference attached

   **Section 2 — Location Verification**
   - Physical location confirmed (building, floor, room, bay)
   - Asset is present at recorded location (yes/no)
   - If not found: flag as missing, transferred, or disposed
   - Location label or tag affixed and legible
   - Multi-site assets: confirm site code and custodian site

   **Section 3 — Physical Condition Assessment**
   - Condition rated: Excellent / Good / Fair / Poor / Unserviceable
   - Visible damage documented (scratches, cracks, missing parts)
   - Functional test performed where applicable (yes/no/N/A)
   - Maintenance history reviewed
   - Safety or compliance issues flagged (yes/no — if yes, describe)

   **Section 4 — Ownership and Custody**
   - Assigned owner/department confirmed
   - Custodian name and contact recorded
   - Ownership matches asset register (yes/no — if no, note discrepancy)
   - Leased vs. owned status verified
   - Assets under warranty: warranty expiry date noted

   **Section 5 — Depreciation and Financial Status**
   - Original purchase value recorded
   - Current book value per asset register noted
   - Depreciation method confirmed (straight-line, declining balance, etc.)
   - Useful life remaining estimated
   - Flag assets fully depreciated but still in active use
   - Flag assets with book value but confirmed disposed or missing

3. **Flag and Escalate**
   - Mark each asset as: ✅ Verified | ⚠️ Discrepancy | ❌ Missing | 🔁 Needs Follow-up
   - Generate a discrepancy summary listing all flagged items with reason codes
   - Recommend actions: update register, write-off, dispose, repair, reassign

4. **Customize for Context**
   - For IT audits: add software license and end-of-life fields
   - For vehicles: add registration, insurance, and mileage fields
   - For real estate: add lease terms, zoning, and inspection certificate fields
   - For regulated industries: add compliance certification and inspection date fields

## Output Format

Produce a **structured markdown checklist** with:

- A header block showing: Audit Date, Location/Scope, Auditor Name (placeholder), Asset Types in Scope
- Five clearly labeled sections matching the workflow above, each as a checkbox list (`- [ ] item`)
- A **Discrepancy Log table** at the end with columns: Asset ID | Issue Type | Description | Recommended Action
- A **Summary block** with counts: Total Assets Audited, Verified, Discrepancies Found, Missing, Flagged for Write-off
- Length scales with scope — single asset type produces 1–2 pages; multi-site full audit produces a comprehensive multi-section document
- All checklist items use `- [ ]` format so the output is immediately usable in any
