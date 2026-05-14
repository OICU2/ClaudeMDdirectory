---
name: sales-tax-nexus-exposure-map
description: >
  Analyzes revenue and transaction data to identify states where economic or physical nexus thresholds have been triggered, flagging unregistered collection obligations. Use when someone asks about sales tax exposure, wants to know which states they owe sales tax in, is worried about nexus risk, needs to assess multi-state tax compliance, or wants to find unregistered sales tax liabilities. Produces a prioritized map of states requiring immediate action.
category: finance
tags: [sales-tax, nexus, compliance, multi-state, tax-risk]
author: community
---

# Sales Tax Nexus Exposure Map

This skill evaluates a business's revenue and transaction data against each state's economic and physical nexus thresholds to produce a prioritized list of states where collection and registration obligations exist or are approaching.

## Nexus Assessment Workflow

### 1. Collect Input Data
Request the following from the user if not already provided:
- Annual gross revenue by state (or total revenue with state breakdown)
- Transaction count by state (last 12 months)
- Physical presence details: offices, employees, warehouses, inventory, contractors
- States where already registered to collect sales tax
- Business type: SaaS, physical goods, services, marketplace

### 2. Apply Economic Nexus Thresholds
Check each state against current thresholds. Standard post-Wayfair baseline is $100,000 revenue OR 200 transactions, but flag these critical exceptions:
- **Kansas**: No transaction threshold — $1 in revenue triggers nexus
- **California**: $500,000 revenue only (no transaction threshold)
- **Texas**: $500,000 revenue only
- **Oklahoma**: $100,000 revenue only (no transaction threshold)
- **Pennsylvania**: $100,000 revenue only
- **New York**: $500,000 AND 100 transactions (both required)
- **Tennessee**: $100,000 revenue only

For each state, compare provided revenue and transaction counts against the applicable threshold.

### 3. Apply Physical Nexus Rules
Flag any state where the business has:
- An employee (including remote workers) → automatic nexus
- A contractor performing ongoing services → likely nexus
- Inventory stored (including FBA/3PL warehouses) → nexus
- An office, showroom, or retail location → nexus
- Delivery vehicles operating regularly → nexus

Physical nexus applies regardless of revenue or transaction volume.

### 4. Classify Each Triggered State
Assign one of three statuses:
- **BREACH — Unregistered**: Threshold exceeded, not currently collecting. Highest priority.
- **BREACH — Registered**: Threshold exceeded and registered. Verify collection is active.
- **APPROACHING**: Within 80% of threshold. Monitor monthly.
- **CLEAR**: Below 50% of threshold. No action needed.

### 5. Estimate Back Liability Risk
For each BREACH — Unregistered state, note:
- Typical look-back period: 3–4 years (varies by state)
- Voluntary Disclosure Agreement (VDA) availability: most states offer reduced penalties via VDA
- States with amnesty programs currently active (flag if known)

### 6. Prioritize Action Order
Rank unregistered breach states by:
1. Estimated uncollected tax liability (highest first)
2. Statute of limitations proximity
3. Audit aggressiveness (flag CA, NY, TX, IL as high-audit states)

## Output Format

Produce a structured report with the following sections:

---

**NEXUS EXPOSURE SUMMARY**
- Total states analyzed: [N]
- Breach — Unregistered: [N states]
- Breach — Registered: [N states]
- Approaching threshold: [N states]
- Clear: [N states]

---

**IMMEDIATE ACTION REQUIRED**
Table format:

| State | Nexus Type | Threshold | Your Activity | Status | Est. Back Liability Risk | VDA Available |
|-------|-----------|-----------|--------------|--------|--------------------------|---------------|
| TX | Economic | $500K rev | $620K rev | BREACH — Unregistered | High (3-yr lookback) | Yes |

List all BREACH — Unregistered states here, sorted by liability risk.

---

**MONITOR — APPROACHING THRESHOLD**
List states within 80% of threshold with current figures and
