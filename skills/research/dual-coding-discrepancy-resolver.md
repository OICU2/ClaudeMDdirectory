---
name: dual-coding-discrepancy-resolver
description: >
  Compares coding decisions from two independent coders, identifies systematic and random disagreement patterns, and produces a structured reconciliation memo to guide consensus review. Use when someone says "we have disagreements between coders," asks about "resolving inter-rater conflicts," or wants to "reconcile coding discrepancies," "audit dual-coding results," or "prepare a consensus meeting agenda."
category: research
tags: [qualitative-research, inter-rater-reliability, coding, reconciliation, content-analysis]
author: community
---

# Dual-Coding Discrepancy Resolver

This skill analyzes disagreements between two independent coders, classifies conflict types, and generates a reconciliation memo that guides a structured consensus review session.

## Discrepancy Analysis Workflow

1. **Collect coder inputs**: Request both coders' coding sheets or decision logs. Minimally required: item ID, Coder A decision, Coder B decision, and optionally brief rationale from each coder.

2. **Map all disagreements**: Create a complete inventory of every item where Coder A and Coder B differ. Record the exact codes or labels each assigned.

3. **Classify each disagreement** into one of four types:
   - **Boundary disagreement**: Both coders recognized the same construct but drew category lines differently (e.g., "moderate" vs. "high")
   - **Interpretation disagreement**: Coders assigned fundamentally different codes reflecting different readings of the item
   - **Omission disagreement**: One coder assigned a code; the other left the item uncoded or marked it as not applicable
   - **Ambiguity disagreement**: Item wording or data quality is the root cause, not coder judgment

4. **Identify patterns**: Group disagreements by code category, item type, or coder. Flag any coder who shows a consistent directional bias (e.g., Coder A systematically rates items one level higher than Coder B in a specific category).

5. **Calculate a discrepancy rate**: Count total disagreements divided by total coded items. Flag if rate exceeds the project threshold (default: >15% warrants codebook revision discussion).

6. **Prioritize items for consensus review**: Sort disagreements by type — interpretation disagreements first, then boundary, then omission, then ambiguity.

7. **Draft resolution guidance**: For each disagreement type cluster, write one concrete clarifying rule or decision procedure that the consensus meeting should ratify or reject.

## Output Format

Produce a **Reconciliation Memo** with the following sections:

---

**DUAL-CODING RECONCILIATION MEMO**

**Project / Dataset:** [name]
**Coders:** Coder A — [identifier], Coder B — [identifier]
**Total Items Coded:** [n]
**Total Disagreements:** [n] ([x]% discrepancy rate)
**Status:** [Within threshold / Exceeds threshold]

---

**Section 1 — Disagreement Inventory**
A table with columns: Item ID | Coder A Decision | Coder B Decision | Disagreement Type | Notes

---

**Section 2 — Pattern Summary**
- Bullet list of identified systematic patterns, including any directional bias per coder
- Codes or categories with the highest conflict frequency listed in descending order

---

**Section 3 — Consensus Meeting Agenda**
Numbered list of items to resolve, ordered by disagreement type priority, each with:
- The specific item(s) involved
- The nature of the conflict in one sentence
- A proposed resolution rule or clarifying codebook amendment for discussion

---

**Section 4 — Codebook Amendment Flags**
List any code definitions, decision rules, or examples that should be revised based on disagreement patterns. If no amendments are needed, state that explicitly.

---

**Section 5 — Recommended Next Steps**
Three to five concrete action items (e.g., schedule consensus meeting, revise codebook section X, re-code ambiguous items after clarification).

---

Memo length should be proportional to dataset size. For datasets under 50 items, the full memo should fit within two pages. For larger datasets, the inventory table may be attached as an appendix with only flagged high-priority items in the body.
