---
name: cross-team-resource-loan-tracking-log
description: >
  Documents temporary transfers of staff, equipment, or assets between teams with full accountability tracking. Use when someone says "we're borrowing someone from another team," asks about tracking a resource loan, wants to document a temporary staff transfer, needs to record cross-team asset sharing, or is setting up cost allocation for a shared resource arrangement.
category: operations
tags: [resource-management, staff-allocation, cost-tracking, asset-transfer, team-operations]
author: community
---

# Cross-Team Resource Loan Tracking Log

This skill creates a structured log entry for any temporary transfer of people or assets between teams, capturing all terms needed for accountability, billing, and clean return handoffs.

## Loan Log Workflow

1. **Identify the loan type** — Determine whether this is a staff loan (named individual, role, FTE percentage), equipment loan (specific asset with serial/ID), or budget/license loan (software seat, budget allocation).

2. **Capture core parties**
   - Lending team: team name, manager/owner, cost center
   - Receiving team: team name, manager/owner, cost center
   - Resource details: name/ID, role or asset description, quantity or FTE %

3. **Define the loan window**
   - Start date and end date (or trigger-based end condition)
   - Review checkpoints if duration exceeds 30 days
   - Extension request deadline (default: 5 business days before end)

4. **Establish cost allocation**
   - Who bears salary/depreciation/license cost during the loan period
   - Split percentage if shared (e.g., 60% receiving team, 40% lending team)
   - Billing method: chargeback, budget transfer, or informal agreement
   - GL/cost center codes for both sides

5. **Set return conditions**
   - State of return: same role, same equipment condition, fully offboarded from receiving team's systems
   - Outstanding deliverables to complete before return
   - Knowledge transfer or handoff requirements
   - Who confirms the return (both managers must sign off)

6. **Flag risks or constraints**
   - Performance review ownership during loan period
   - Leave/PTO coverage responsibility
   - Equipment insurance or liability during transit/use
   - Confidentiality or access restrictions

7. **Assign a loan reference ID** — Format: `LOAN-[YYYY]-[LendingTeamCode]-[ReceivingTeamCode]-[###]` (e.g., `LOAN-2024-ENG-MKT-001`)

## Output Format

Produce a structured loan log entry with these labeled sections:

```
RESOURCE LOAN LOG
═══════════════════════════════════════════
Loan Reference ID:    LOAN-YYYY-XXX-YYY-###
Status:               [Draft / Active / Extended / Closed]
Created:              [Date]
Last Updated:         [Date]

PARTIES
───────────────────────────────────────────
Lending Team:         [Name] | Manager: [Name] | Cost Center: [Code]
Receiving Team:       [Name] | Manager: [Name] | Cost Center: [Code]

RESOURCE DETAILS
───────────────────────────────────────────
Type:                 [Staff / Equipment / Budget / License]
Resource:             [Name or Asset ID]
Description:          [Role title, asset description, or allocation detail]
Quantity / FTE %:     [e.g., 100% FTE / 0.5 FTE / 2 units]

LOAN PERIOD
───────────────────────────────────────────
Start Date:           [Date]
End Date:             [Date or condition]
Review Checkpoint:    [Date if > 30 days]
Extension Deadline:   [Date]

COST ALLOCATION
───────────────────────────────────────────
Cost Bearer:          [Receiving / Lending / Split: XX% / YY%]
Billing Method:       [Chargeback / Budget Transfer / Informal]
Lending GL Code:      [Code]
Receiving GL Code:    [Code]
Estimated Total Cost: [$ amount or "TBD"]

RETURN CONDITIONS
───────────────────────────────────────────
Return State:         [Description of expected state]
Deliverables Due:     [List or "None"]
