---
name: client-contract-auto-renewal-risk-log
description: >
  Tracks active client contracts by end date and flags those approaching expiry without a renewal conversation initiated, preventing unexpected revenue loss. Use when someone says "I need to check which contracts are expiring soon," asks about "which clients haven't discussed renewal yet," or wants to "audit my contract risk" or "see which retainers might lapse." Also triggers when someone mentions "I don't want to lose a client because I forgot to renew" or needs to "review upcoming contract end dates."
category: solopreneur
tags: [contracts, client-retention, revenue, risk-management, renewals]
author: community
---

# Client Contract Auto-Renewal Risk Log

This skill builds and maintains a prioritized risk log of active client contracts, surfacing those approaching expiry without a renewal conversation on record so no revenue quietly disappears.

## Contract Risk Log Workflow

### Step 1: Collect Contract Data
Ask the user to provide (or paste) the following for each active client:
- Client name
- Contract start date
- Contract end date
- Contract value (monthly or total)
- Renewal conversation status: None / In Progress / Confirmed
- Contract type: Fixed-term / Rolling / Auto-renewing

If the user has a spreadsheet or list, prompt them to paste it directly.

### Step 2: Calculate Risk Flags
For each contract, calculate days until expiry and assign a risk tier:

- 🔴 **Critical** — Expires within 30 days, no renewal conversation initiated
- 🟠 **High** — Expires within 60 days, no renewal conversation initiated
- 🟡 **Medium** — Expires within 90 days, renewal in progress but not confirmed
- 🟢 **Low** — Renewal confirmed OR more than 90 days remaining
- ⚪ **Auto-renewing** — Flag separately; note the opt-out deadline if known

### Step 3: Identify Revenue at Risk
Sum the contract value for all 🔴 and 🟠 flagged contracts. Present this as the **Total Revenue at Risk** figure.

### Step 4: Generate Action Prompts
For each 🔴 or 🟠 contract, produce a specific next action:
- Draft a renewal outreach message (if no conversation started)
- Suggest a follow-up if conversation stalled
- Note the latest date to initiate conversation to avoid a gap in service

### Step 5: Log Updates
After review, ask the user if any statuses have changed and update the log. Prompt the user to re-run this audit monthly or set a calendar reminder.

## Output Format

Produce a structured contract risk log in this exact format:

---

**📋 Contract Auto-Renewal Risk Log**
*Generated: [Date]*

| Client | End Date | Days Left | Value | Status | Risk |
|--------|----------|-----------|-------|--------|------|
| [Name] | [Date]   | [#]       | [$]   | [Status] | [🔴/🟠/🟡/🟢/⚪] |

---

**💸 Total Revenue at Risk (Critical + High):** $[amount]

---

**🚨 Immediate Actions Required**

1. **[Client Name]** — [End date] — [Specific action: e.g., "Send renewal proposal by [date] to avoid gap"]
2. **[Client Name]** — [End date] — [Specific action]

---

**📅 Renewal Conversations in Progress**
- [Client]: [Next step + target close date]

---

**✅ Secured / No Action Needed**
- [Client]: Renewal confirmed / [#] days remaining

---

**⚪ Auto-Renewing Contracts**
- [Client]: Auto-renews [date] — opt-out deadline [date if known]

---

Keep the table sortable by Days Left (ascending). Flag any contract where the opt-out window for auto-renewal is within 30 days even if the client relationship is healthy.
