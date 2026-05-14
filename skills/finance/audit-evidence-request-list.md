---
name: audit-evidence-request-list
description: >
  Generates a structured prepared-by-client (PBC) document request list organized by financial statement area to support external audit fieldwork preparation. Use when someone says "we have auditors coming," asks about preparing for an external audit, wants to build a PBC list, needs to organize audit support documents, or is getting ready for audit fieldwork season.
category: finance
tags: [audit, PBC, financial-statements, compliance, documentation]
author: community
---

# Audit Evidence Request List

This skill generates a comprehensive, organized prepared-by-client (PBC) document request list grouped by financial statement area, used when preparing for external audit fieldwork.

## Workflow

1. **Gather context** — Ask the user for: company type (public/private), fiscal year end, industry, and which financial statement areas are in scope (or assume all if not specified).

2. **Identify audit areas** — Cover these standard areas unless told otherwise:
   - Cash and Cash Equivalents
   - Accounts Receivable and Revenue
   - Inventory
   - Fixed Assets / PP&E
   - Accounts Payable and Accrued Liabilities
   - Debt and Financing
   - Equity
   - Payroll and Benefits
   - Income Taxes
   - Financial Statement Close and Consolidation

3. **Build request items per area** — For each area, list 4–8 specific document requests. Each item must include:
   - A clear document name or type
   - The time period or as-of date required
   - The responsible preparer role (e.g., Controller, AP Manager)
   - A status column placeholder (Not Started / In Progress / Complete)

4. **Apply company context** — If the user mentions specific transactions, subsidiaries, debt instruments, or industry-specific items (e.g., work-in-progress for manufacturers, deferred revenue for SaaS), add tailored requests for those items.

5. **Flag high-risk or common audit focus areas** — Mark items typically subject to heightened auditor scrutiny with a `[HIGH PRIORITY]` tag (e.g., revenue cutoff, related-party transactions, significant estimates).

6. **Include general requests** — Always append a General / Entity-Level section with: trial balance, prior year financials, board minutes, organizational chart, and significant accounting policy documentation.

## Output Format

Produce a structured markdown table for each financial statement area in this format:

```
## [Area Name]

| # | Document / Evidence Requested | Period / As-Of Date | Responsible Party | Status |
|---|-------------------------------|---------------------|-------------------|--------|
| 1 | [Specific document name]       | [e.g., FY2024 / 12/31/24] | [Role] | Not Started |
```

- Each section header uses `##` with the area name
- Include 4–8 line items per section
- Mark high-priority items with `[HIGH PRIORITY]` in the document name cell
- End with a **Summary Table** showing total request count per area
- Total document requests across all areas should range from 40–80 items for a full-scope audit
- Deliver as a single continuous markdown document suitable for export or pasting into a tracking spreadsheet
