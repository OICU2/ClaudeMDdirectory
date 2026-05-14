---
name: solo-operator-service-contract-expiry-dashboard
description: >
  Manages and monitors all active client service contracts for a solopreneur, surfacing upcoming expiry dates and renewal actions before revenue slips away unnoticed. Use when someone says "I need to track my client contracts," asks about "which contracts are expiring soon," wants to "set up a contract renewal system," mentions "I lost a client because I forgot to renew," or needs to "review my active service agreements." Produces a prioritized dashboard view with urgency tiers and specific next actions.
category: solopreneur
tags: [contracts, client-management, revenue-protection, renewals, solopreneur]
author: community
---

# Solo Operator Service Contract Expiry Dashboard

This skill builds and maintains a contract expiry tracking dashboard that flags at-risk renewals by urgency tier so a solopreneur never loses recurring revenue to an overlooked lapse.

## Contract Intake & Data Collection

When setting up or updating the dashboard, collect the following for each contract:

1. **Client name** — the company or individual being served
2. **Service description** — what is being delivered (retainer, project, subscription, maintenance)
3. **Contract start date** — when the agreement began
4. **Contract end / expiry date** — the hard deadline
5. **Contract value** — monthly or total, specify which
6. **Auto-renew status** — yes / no / unknown
7. **Notice period required** — days needed before expiry to cancel or renew (e.g., 30 days)
8. **Renewal action owner** — who initiates: client, you, or mutual
9. **Current status** — active / in negotiation / pending signature / expired

If the user provides a list or paste of contracts in any format (spreadsheet, email, notes), extract these fields automatically and ask only for missing critical fields (end date and value are mandatory).

## Urgency Tier Classification

Assign every contract one of four tiers based on days until expiry, accounting for the notice period:

| Tier | Label | Condition | Action |
|------|-------|-----------|--------|
| 🔴 | **Critical** | Expiry within notice period or already past | Contact client immediately |
| 🟠 | **Urgent** | 1–14 days beyond notice window | Send renewal proposal this week |
| 🟡 | **Upcoming** | 15–45 days beyond notice window | Draft renewal terms, schedule call |
| 🟢 | **Stable** | 46+ days beyond notice window | Monitor, no action needed yet |

Calculate effective action date = expiry date minus notice period. Tier is based on days from today to the effective action date, not the raw expiry date.

## Dashboard Maintenance Rules

- Re-sort contracts by tier every time the dashboard is viewed or updated
- When a user provides today's date or it can be inferred, recalculate all tiers dynamically
- Flag any contract missing an end date as **⚠ Incomplete — expiry unknown** and prompt the user to confirm it
- If auto-renew is "yes," downgrade urgency by one tier but still show the contract with a note
- Mark expired contracts separately in a "Lapsed" section; do not discard them — they represent renewal or win-back opportunities
- When a contract is renewed, update the end date and reset the tier; log the previous end date as history

## Renewal Action Prompts

For each non-Stable contract, generate a specific next action:

- **Critical:** Draft a 3-sentence outreach message the user can send today; include the contract value at stake
- **Urgent:** Suggest a renewal proposal outline with current rate, proposed term length, and one value-add to sweeten the deal
- **Upcoming:** Provide a calendar reminder phrasing and a one-line internal note to add to the client file
- **Lapsed:** Offer a brief win-back message template referencing the previous work done together

## Output Format

Produce the dashboard as a structured report with these sections in order:

---

**CONTRACT EXPIRY DASHBOARD**
*As of: [today's date] | Total Active Contracts: X | Total ARR/MRR at Stake: $X*

---

**🔴 CRITICAL — Immediate Action Required**
[Table: Client | Service | Expiry Date | Value | Notice Period | Action Needed
