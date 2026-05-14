---
name: ops-contract-expiry-tracker
description: >
  Builds and maintains a rolling tracker of vendor and service contract expiration dates with automated renewal alert thresholds. Use when someone says "track our contract renewals," asks about "when does our vendor contract expire," wants to "set up contract expiry alerts," needs to "manage service agreement deadlines," or mentions "contract renewal pipeline." Parses contract data, assigns urgency tiers, and outputs a structured tracker with alert logic.
category: operations
tags: [contracts, vendor-management, renewals, alerts, procurement]
author: community
---

# Contract Expiry Tracker

This skill builds a rolling contract expiration tracker with tiered renewal alerts and outputs a structured table plus alert thresholds that Claude updates on demand.

## Workflow

1. **Collect contract data** — Ask the user to provide contract details in any format (paste a list, upload a CSV, or describe verbally). Required fields: vendor/service name, contract start date, contract end date, owner/responsible party, contract value (optional), auto-renewal clause (yes/no).

2. **Normalize dates** — Convert all dates to ISO 8601 format (YYYY-MM-DD). Calculate days remaining from today's date for each contract.

3. **Assign urgency tiers** based on days remaining:
   - 🔴 **CRITICAL** — 0–30 days: immediate action required
   - 🟠 **HIGH** — 31–60 days: renewal decision needed now
   - 🟡 **MEDIUM** — 61–90 days: begin renewal conversations
   - 🟢 **LOW** — 91–180 days: monitor and plan
   - ⚪ **FUTURE** — 180+ days: no action needed yet

4. **Flag auto-renewal risks** — Mark any contract with an auto-renewal clause where the opt-out window falls within the next 60 days as ⚠️ AUTO-RENEW RISK.

5. **Sort the tracker** — Order contracts by days remaining (ascending), so most urgent appear first.

6. **Generate alert thresholds** — For each contract, state the specific dates at which 90-day, 60-day, and 30-day reminders should fire.

7. **Identify gaps** — If any required fields are missing, list them explicitly and ask the user to supply them before finalizing the tracker.

8. **Update on request** — When the user provides new contracts, changes, or a new "as of" date, recalculate all days-remaining values and re-sort.

## Output Format

Produce three sections:

**Section 1 — Contract Tracker Table**
A markdown table with columns: `Vendor/Service | Owner | End Date | Days Remaining | Tier | Auto-Renew | Value | Notes`
Sort by Days Remaining ascending. Emoji tier indicators in the Tier column.

**Section 2 — Alert Schedule**
A list grouped by urgency tier. For each contract in CRITICAL or HIGH, include a one-line recommended action (e.g., "Schedule renewal call by [date]" or "Send non-renewal notice by [date]").

**Section 3 — Summary Stats**
- Total contracts tracked
- Count per urgency tier
- Total contract value at risk in next 90 days (if values provided)
- Number of auto-renewal risks requiring opt-out action

Keep the tracker under one screen when possible. If more than 15 contracts exist, offer to filter by tier or owner.
