---
name: sales-qbr-action-item-tracker
description: >
  Extracts committed action items from quarterly business review notes and organizes them into a prioritized, owner-assigned follow-up task list. Use when someone says "here are my QBR notes," asks to "pull out the action items from this review," wants to "summarize what was committed in the QBR," needs to "turn these meeting notes into tasks," or says "help me track follow-ups from the quarterly review."
category: sales
tags: [qbr, action-items, sales-ops, meeting-notes, follow-up]
author: community
---

# QBR Action Item Tracker

Parses raw quarterly business review notes to extract, categorize, and prioritize every committed action item into a structured follow-up task list ready for CRM entry or team distribution.

## Extraction and Processing Workflow

1. **Read the full notes first** — scan the entire input before extracting anything to understand context, participants, and overall commitments made.

2. **Identify action items** — flag any sentence or phrase containing:
   - Explicit commitments ("we will," "I'll send," "team will deliver," "committed to")
   - Assigned responsibilities ("owner," "responsible," "point of contact," "accountable")
   - Deadlines or timeframes ("by end of quarter," "next week," "before next QBR," "within 30 days")
   - Implicit follow-ups ("needs to be resolved," "requires follow-up," "to be confirmed")

3. **Assign owners** — map each action item to the person or team named in context. If no owner is explicitly stated, flag it as `[OWNER: UNASSIGNED]`.

4. **Set priority levels** — classify each item:
   - **P1 – Critical**: Revenue-impacting, executive-committed, or deadline within 2 weeks
   - **P2 – High**: Customer-facing deliverables or commitments with a defined date
   - **P3 – Standard**: Internal tasks, research items, or no hard deadline stated

5. **Set due dates** — use explicit dates when given; if relative ("next week"), convert to an approximate calendar date based on today's date. If no date mentioned, mark as `[DUE: TBD]`.

6. **Deduplicate** — merge action items that refer to the same task even if mentioned multiple times across the notes.

7. **Flag risks** — note any action items that are vague, lack an owner, or have no deadline, and mark them as requiring clarification before they can be executed.

## Output Format

Produce the following structure:

---

**QBR Action Item Summary**
*Source: [Meeting title / date if provided]*
*Total Action Items: [N] | P1: [N] | P2: [N] | P3: [N]*

---

**CRITICAL (P1)**

| # | Action Item | Owner | Due Date | Notes |
|---|-------------|-------|----------|-------|
| 1 | [Specific task] | [Name/Team] | [Date] | [Any context or dependencies] |

**HIGH PRIORITY (P2)**

| # | Action Item | Owner | Due Date | Notes |
|---|-------------|-------|----------|-------|

**STANDARD (P3)**

| # | Action Item | Owner | Due Date | Notes |
|---|-------------|-------|----------|-------|

---

**⚠ Items Requiring Clarification**
- [Item]: Missing [owner / deadline / scope] — recommend resolving before next sync.

---

**Suggested Next Steps**
- Send this list to [identified stakeholders] for confirmation
- Log P1 and P2 items into CRM by [suggested date]
- Schedule follow-up check-in for [timeframe based on QBR cadence]

---

Keep the output scannable and copy-paste ready. Do not summarize or paraphrase action items — preserve the original intent and specificity from the notes.
