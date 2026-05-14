---
name: sales-email-follow-up-gap-analyzer
description: >
  Analyzes active sales deals to identify follow-up timing gaps, cold opportunities, and at-risk accounts based on email communication patterns. Use when someone says "which deals have gone quiet," asks about "opportunities we haven't heard back from," or wants to "find deals that need follow-up." Also triggers when someone asks "what's fallen through the cracks" or wants to "audit our pipeline for cold leads."
category: sales
tags: [sales, email, follow-up, pipeline, crm]
author: community
---

# Sales Email Follow-Up Gap Analyzer

This skill scans active deal communication history to surface opportunities where follow-up has lapsed, response cadence has broken down, or prospects have gone silent — so reps can re-engage before deals die.

## Analysis Workflow

1. **Collect deal data**: Ask for the active deal list, including deal name, stage, owner, last outbound email date, last inbound response date, and deal value. Accept input as pasted text, CSV, or a described CRM export.

2. **Calculate follow-up gaps**: For each deal, compute:
   - Days since last outbound email sent
   - Days since last inbound response received
   - Number of unanswered follow-ups sent (outbound streak with no reply)

3. **Apply risk thresholds**:
   - 🔴 **Critical**: No response in 14+ days AND 2+ unanswered follow-ups sent
   - 🟠 **At-Risk**: No response in 7–13 days OR last outbound sent 10+ days ago with no follow-up
   - 🟡 **Watch**: Last contact 5–6 days ago with no scheduled next step
   - 🟢 **Active**: Response within 4 days or follow-up sent within 3 days

4. **Identify patterns**: Flag systemic issues such as:
   - Multiple deals owned by the same rep with gaps (rep behavior pattern)
   - High-value deals (top 25% by deal size) that are Critical or At-Risk
   - Deals in late stages (Proposal/Negotiation) with any gap over 5 days

5. **Generate re-engagement recommendations**: For each Critical or At-Risk deal, suggest a specific next action (e.g., "Call instead of email," "Loop in a second contact," "Send value-add content to restart conversation").

## Output Format

Produce a structured report with four sections:

**Summary Line**
One sentence: total deals reviewed, count per risk tier, total pipeline value at risk (Critical + At-Risk combined).

**Risk-Tiered Deal Table**
Grouped by risk level (Critical first), each row containing:
`Deal Name | Owner | Stage | Deal Value | Last Outbound | Last Response | Gap (days) | Unanswered Follow-Ups | Recommended Action`

**Pattern Alerts**
Bullet list of any systemic patterns detected (rep-level gaps, late-stage neglect, high-value deal risk). Skip this section if no patterns found.

**Top 3 Immediate Actions**
Numbered list of the three highest-priority moves to make today, ranked by deal value × urgency. Each action should be one specific sentence.

Keep the report scannable. Use plain text tables or markdown tables depending on context. No filler commentary — every line should drive a decision.
