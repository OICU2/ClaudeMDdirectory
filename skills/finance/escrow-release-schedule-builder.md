---
name: escrow-release-schedule-builder
description: >
  Generates a structured escrow release schedule that maps milestone triggers to disbursement amounts and dates for deal or project funding arrangements. Use when someone says "set up an escrow schedule," asks about "releasing funds when milestones are hit," wants to "structure payments tied to project phases," needs to "define disbursement triggers for a deal," or is trying to "build a funding release timeline." Handles construction draws, M&A earnouts, SaaS contract holdbacks, grant disbursements, and similar arrangements.
category: finance
tags: [escrow, disbursement, milestones, deal-structuring, project-finance]
author: community
---

# Escrow Release Schedule Builder

This skill builds a complete, structured escrow release schedule that ties each disbursement tranche to specific, verifiable milestone triggers, dates, and conditions — used whenever a deal or project requires staged fund releases.

## Workflow

1. **Gather inputs** — Collect the following before building the schedule:
   - Total escrow amount and currency
   - Number of tranches or release events (if known)
   - Milestone definitions (completion percentages, deliverables, regulatory approvals, revenue thresholds, inspection sign-offs, etc.)
   - Target dates or date ranges for each milestone
   - Any holdback amounts, dispute windows, or cure periods
   - Release conditions (single-party approval, dual-party, third-party escrow agent, automatic trigger)
   - Penalty or forfeiture rules if milestones are missed

2. **Identify milestone types** — Classify each trigger as one of:
   - **Date-based**: funds release on a specific calendar date regardless of other conditions
   - **Event-based**: funds release when a defined event is verified (e.g., permit issued, code accepted, KPI met)
   - **Hybrid**: funds release on a date only if the event has occurred; otherwise held or forfeited

3. **Calculate tranche amounts** — For each release event:
   - Assign a fixed dollar/percentage amount
   - Note cumulative total after each release
   - Flag any retainage or final holdback amount withheld until full completion or warranty period

4. **Define verification and approval process** — For each tranche, specify:
   - Who verifies the milestone (buyer, seller, independent inspector, automated system)
   - Documentation required (certificate of completion, signed acceptance, audit report)
   - Approval window (e.g., 5 business days to approve or dispute)
   - Dispute resolution path if milestone is contested

5. **Flag risks and edge cases** — Automatically note:
   - Overlapping or ambiguous milestone definitions
   - Missing dates or undefined triggers
   - Tranches that exceed 30% of total in a single release (concentration risk)
   - No dispute mechanism defined
   - Final holdback below 5% of total (may be insufficient protection)

## Output Format

Produce the schedule as three components:

**1. Summary Table** (Markdown table)

| Tranche | Release Amount | Cumulative Released | Trigger Type | Milestone Description | Trigger Date / Deadline | Verification Party | Approval Window | Notes |
|---------|---------------|--------------------|--------------|-----------------------|------------------------|-------------------|-----------------|-------|
| 1 of N  | $X / X%       | $X                 | Event-based  | [description]         | [date or condition]    | [party]           | X business days | [flags] |

**2. Conditions & Holdback Summary** (bullet list)
- Final holdback amount and release condition
- Dispute resolution mechanism
- Default/forfeiture rules
- Any escrow agent instructions

**3. Risk Flags** (numbered list, only if issues exist)
- Label each flag as [MISSING INFO], [AMBIGUITY], or [RISK]
- State the specific tranche or clause affected
- Provide a one-line recommended fix

If input is incomplete, list exactly which fields are missing before proceeding and ask for them. Do not fabricate milestone details — use placeholder text (e.g., `[INSERT MILESTONE DESCRIPTION]`) where information was not provided.
