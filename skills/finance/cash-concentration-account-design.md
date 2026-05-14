---
name: cash-concentration-account-design
description: >
  Documents a zero-balance or notional cash pooling account structure to optimize group-wide liquidity and minimize idle cash balances. Use when someone asks about setting up a cash concentration structure, wants to design a treasury pooling arrangement, needs to consolidate subsidiary accounts into a master account, or is looking to reduce borrowing costs through intercompany sweeping. Also activates when someone mentions ZBA accounts, notional pooling, or header/target account configurations.
category: finance
tags: [treasury, cash-management, liquidity, pooling, banking-structure]
author: community
---

# Cash Concentration Account Design

This skill produces a structured design document for zero-balance or notional cash pooling arrangements, activated whenever a user needs to architect or document a group-wide liquidity management solution.

## Design Workflow

1. **Clarify pooling type** — Determine whether the structure is physical (zero-balance, target-balance, or threshold sweeping) or notional (interest offset without actual fund movement). Note regulatory and tax implications for cross-border notional pools.

2. **Map the account hierarchy** — Identify the header/master account (typically held by the treasury entity or parent), all participant accounts (subsidiaries, divisions, currencies), and the owning legal entities for each node.

3. **Define sweep mechanics** — Specify:
   - Sweep direction (one-way vs. two-way)
   - Frequency (intraday, end-of-day, real-time)
   - Target balance or zero-balance threshold per participant account
   - Minimum/maximum balance rules if applicable

4. **Document intercompany funding flows** — For physical pools, define the intercompany loan or cash advance agreements triggered by each sweep, including interest rate basis (e.g., SOFR + spread, internal transfer pricing rate) and repayment terms.

5. **Address bank and counterparty requirements** — Name the lead bank(s), confirm single-bank vs. multi-bank structure, note account mandates, and flag KYC/AML onboarding steps for each entity.

6. **Identify currency and jurisdiction constraints** — List restricted currencies, countries with thin-capitalization rules, withholding tax on intercompany interest, and any central bank reporting thresholds (e.g., FBAR, CRS).

7. **Outline technology and ERP integration** — Specify TMS or ERP modules (SAP In-House Cash, Oracle Treasury, Kyriba, etc.) that will receive sweep confirmations and post intercompany entries automatically.

8. **Define governance and controls** — Include approval authorities for manual overrides, daily reconciliation ownership, exception handling for failed sweeps, and audit trail requirements.

## Output Format

Produce a structured design document with the following sections, using headers and tables where appropriate:

- **Executive Summary** (3–5 sentences): pooling type, participating entities, expected liquidity benefit
- **Account Structure Diagram** (ASCII or table): header account → participant accounts with currency and legal entity labels
- **Sweep Rules Table**: columns for Account Name, Entity, Currency, Sweep Type, Target Balance, Frequency, Direction
- **Intercompany Funding Terms**: rate basis, loan agreement reference, tax treatment
- **Jurisdiction & Regulatory Notes**: bullet list of country-specific constraints
- **Bank & Technology Setup**: named bank(s), platform, integration method
- **Open Items / Assumptions**: numbered list of decisions still required from the client

Length: 400–700 words of prose plus tables. Use plain business English. Flag any item requiring legal or tax counsel with ⚠️.
