---
name: contract-redline-summary
description: >
  Reads a redlined sales contract and produces a plain-language summary of every proposed change, flagging clauses that deviate from standard deal terms for legal review. Use when someone says "can you summarize these redlines," asks about "what did the customer change in this contract," or wants to "review the markup on this agreement," needs to "understand what legal flagged in this deal," or is trying to "prep for a contract negotiation call."
category: sales
tags: [contracts, legal, redlines, negotiation, deal-review]
author: community
---

# Contract Redline Summary

This skill analyzes redlined sales contracts and produces a plain-language summary of every proposed change, highlighting clauses that deviate from standard deal terms so sales reps and legal teams can quickly assess negotiation risk.

## Redline Analysis Workflow

1. **Ingest the contract**: Accept the redlined document as pasted text, uploaded file, or described changes. If the format is unclear, ask whether additions are marked (e.g., tracked changes, brackets, bold) and what the deletion convention is.

2. **Identify every change**: Scan the full document section by section. List every addition, deletion, and substitution proposed by the counterparty. Do not skip minor edits — small wording changes in legal documents carry material risk.

3. **Translate each change into plain language**: For each redline, write a one- to two-sentence plain-English explanation of what the original clause said, what the proposed change says, and what practical effect the change would have on the deal.

4. **Assess deviation from standard terms**: Flag any change that:
   - Alters payment terms, liability caps, or indemnification obligations
   - Removes or weakens termination-for-convenience rights
   - Modifies auto-renewal, pricing, or SLA language
   - Adds non-standard IP ownership or data rights clauses
   - Introduces jurisdiction, governing law, or arbitration changes
   - Weakens confidentiality or expands permitted disclosure

5. **Assign a risk tier to each flagged clause**:
   - 🔴 **High Risk** — likely requires legal approval before countering
   - 🟡 **Medium Risk** — sales can negotiate with guardrails; flag for deal desk
   - 🟢 **Low Risk** — cosmetic or minor; sales can accept or counter independently

6. **Summarize negotiation posture**: After the clause-by-clause breakdown, provide a 3–5 sentence overall assessment of how aggressive the redlines are, which items are likely dealbreakers, and what concessions the counterparty appears to prioritize.

## Output Format

Produce a structured report with the following sections:

---

**Contract Redline Summary**
*Document:* [Contract name or description]
*Counterparty:* [If identified]
*Total Changes Identified:* [#]
*Changes Requiring Legal Review:* [#]

---

**Clause-by-Clause Breakdown**

| # | Section | Original Language (summary) | Proposed Change (summary) | Plain-Language Impact | Risk Tier |
|---|---------|----------------------------|--------------------------|----------------------|-----------|
| 1 | [e.g., §8.2 Liability Cap] | [What it said] | [What they changed it to] | [What this means in practice] | 🔴 High |

*(Repeat for every identified change)*

---

**Flagged for Legal Review**
Bullet list of only the High and Medium Risk items, with a one-line rationale for each.

---

**Overall Negotiation Assessment**
3–5 sentences covering: aggressiveness of the redlines, likely counterparty priorities, recommended next steps (e.g., escalate to legal, schedule redline review call, accept as-is).

---

Keep language direct and jargon-free. Assume the reader is a sales rep, not a lawyer. If the contract text is ambiguous or a change cannot be clearly interpreted, note the ambiguity explicitly rather than guessing.
