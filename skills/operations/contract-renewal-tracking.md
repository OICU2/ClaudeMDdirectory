---
name: contract-renewal-tracking
description: >
  Builds a centralized system to track vendor and client contract renewal dates, flag upcoming expirations, and document renegotiation terms. Use when someone says they need to manage contract renewals, asks about tracking vendor agreements, wants to avoid missing contract deadlines, needs to organize expiring contracts, or is looking to set up a contract management workflow.
category: operations
tags: [contracts, vendor-management, renewals, alerts, compliance]
author: community
---

# Contract Renewal Tracking

This skill creates a structured contract renewal tracking system that centralizes expiration dates, generates alerts for upcoming renewals, and maintains renegotiation term records.

## Workflow

### 1. Gather Contract Inventory
- Collect all existing contracts: vendor agreements, client contracts, SLAs, NDAs, subscriptions
- For each contract capture: contract name, counterparty, contract type, start date, end date/renewal date, auto-renewal clause (yes/no), notice period required (days), contract value, owner/responsible party, and current status

### 2. Build the Tracking Register
Create a master register with these fields per contract:
- **ID**: Unique identifier (e.g., CONT-001)
- **Contract Name**: Descriptive label
- **Counterparty**: Vendor or client name
- **Type**: Vendor / Client / SLA / NDA / Subscription / Other
- **Start Date**: Original effective date
- **Expiration Date**: Hard expiration or renewal date
- **Auto-Renew**: Yes/No + terms if applicable
- **Notice Period**: Days required before expiration to act
- **Action Deadline**: Expiration date minus notice period (calculated)
- **Annual Value**: Contract dollar value
- **Owner**: Internal responsible person
- **Status**: Active / Expiring Soon / Expired / Renewed / Cancelled / Under Negotiation
- **Renegotiation Notes**: Key terms, changes from prior period, open issues

### 3. Generate Expiration Alerts
Classify contracts into urgency tiers based on action deadline:
- 🔴 **Critical (0–30 days)**: Immediate action required — list contract, owner, exact deadline, and next step
- 🟡 **Warning (31–60 days)**: Begin renewal or cancellation process — list contract and recommended action
- 🟢 **Upcoming (61–90 days)**: Start internal review — flag for owner awareness
- ⚪ **Monitor (90+ days)**: No immediate action — included for visibility

### 4. Document Renegotiation Terms
For each contract in active negotiation or recently renewed, record:
- Prior terms vs. proposed/agreed terms
- Key changes (price, scope, duration, SLAs, termination clauses)
- Outstanding issues or open items
- Next negotiation meeting date
- Decision maker on counterparty side

### 5. Define Maintenance Process
- Specify how often the register is reviewed (weekly recommended)
- Name the owner responsible for updates
- Identify how new contracts enter the system
- Note integration points (e.g., calendar alerts, Slack notifications, email reminders)

## Output Format

Produce the following artifacts:

**1. Contract Register Table**
A markdown table with all contracts, sorted by action deadline (soonest first), including all fields from Step 2.

**2. Alert Summary**
A tiered list grouped by urgency (Critical → Warning → Upcoming → Monitor), each entry showing: Contract ID, name, counterparty, action deadline, owner, and recommended immediate action.

**3. Renegotiation Log**
A structured list of contracts currently being renegotiated or recently renewed, with a before/after terms comparison and open items checklist.

**4. Maintenance Checklist**
A short bulleted process (5–8 steps) the team should follow weekly to keep the tracker current, including how to update statuses, add new contracts, and escalate critical items.

All output in clean markdown. Tables for structured data. Bold labels for scannability. No filler text.
