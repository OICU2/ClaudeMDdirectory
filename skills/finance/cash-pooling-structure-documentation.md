---
name: cash-pooling-structure-documentation
description: >
  Documents notional or physical cash pooling arrangements across legal entities, capturing header account structure, sweep logic, and intercompany interest implications. Use when someone asks about setting up a cash pool, wants to document their treasury sweeping structure, needs to explain intercompany lending within a pooling arrangement, or is mapping out zero-balance account hierarchies. Also activates when someone needs to audit or describe an existing notional or physical pooling setup for compliance or reporting purposes.
category: finance
tags: [cash-pooling, treasury, intercompany, liquidity-management, zero-balance-accounts]
author: community
---

# Cash Pooling Structure Documentation

This skill produces structured documentation of notional or physical cash pooling arrangements, capturing entity relationships, account hierarchies, sweep mechanics, and intercompany interest treatment for treasury, legal, and accounting audiences.

## Documentation Workflow

1. **Identify Pool Type**
   - Confirm whether the arrangement is **notional** (balances remain in participant accounts; interest calculated on net position) or **physical** (funds physically swept to/from header account)
   - Note if hybrid structures exist (e.g., notional pool with physical zero-balance accounts feeding it)

2. **Map the Header Account Structure**
   - Identify the pool leader entity and the jurisdiction/bank where the header account is held
   - List all participating entities, their legal names, jurisdictions, and account numbers
   - Document currency denomination for each account and whether cross-currency pooling applies
   - Clarify which entity holds the master/header account and whether it is a treasury center or operating subsidiary

3. **Define Sweep Logic**
   - For physical pools: document sweep direction (upward to header, downward from header, or bilateral), sweep frequency (end-of-day, intraday, real-time), and threshold triggers if any
   - For notional pools: document how the bank calculates the net notional position and applies interest offset
   - Capture any target balance rules, minimum balance floors, or overdraft limits per participant
   - Note whether sweeps are automated by the bank or manually initiated

4. **Document Intercompany Implications**
   - Record the intercompany loan or deposit relationship created by each sweep (creditor/debtor entity pairs)
   - Confirm whether intercompany agreements (ICA) or cash pooling agreements are in place and governed by which law
   - Document the arm's-length interest rate applied to intercompany balances (e.g., EURIBOR + spread, internal transfer pricing rate)
   - Note frequency of intercompany interest settlement (monthly, quarterly, annually) and how it is booked

5. **Capture Regulatory and Tax Considerations**
   - Flag thin capitalization or interest deductibility limitations in relevant jurisdictions
   - Note any central bank reporting requirements for cross-border cash pools
   - Identify withholding tax obligations on intercompany interest payments
   - Document whether the arrangement has been reviewed by local tax counsel or transfer pricing teams

6. **Confirm Accounting Treatment**
   - State whether participant balances are presented gross or net on each entity's balance sheet
   - Document the offsetting rights (legal right of offset) for notional pools, relevant for IFRS/US GAAP netting
   - Note how intercompany receivables/payables from physical sweeps are classified (short-term loans, intercompany current accounts)

## Output Format

Produce a structured document with the following sections, using headers, tables, and bullet points:

**Section 1 — Pool Overview Table**
| Field | Detail |
|---|---|
| Pool Type | Notional / Physical / Hybrid |
| Pool Leader Entity | [Name, Jurisdiction] |
| Bank / Platform | [Bank name, system] |
| Base Currency | [Currency] |
| Number of Participants | [Count] |

**Section 2 — Participant Account Register**
A table listing: Entity Name | Jurisdiction | Account Number | Currency | Role (Header / Participant) | Sweep Direction

**Section 3 — Sweep Mechanics Summary**
Bullet-point description of sweep rules, frequency, thresholds, and automation method.

**Section 4 — Intercompany Structure Summary**
Narrative (3–6 sentences) describing the intercompany loan relationships created, the governing agreements, and the interest rate methodology, followed by a simple diagram in text format showing entity relationships (e.g., `ParentCo [Header] ← SubA
