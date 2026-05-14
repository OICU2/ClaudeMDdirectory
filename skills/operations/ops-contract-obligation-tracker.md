---
name: ops-contract-obligation-tracker
description: >
  Extracts and organizes key obligations, deadlines, and deliverables from operational contracts into a structured compliance tracking list. Use when someone says "review this contract for obligations," asks to "pull out all the deadlines from this agreement," wants to "track what we owe under this contract," needs to "build a compliance checklist from this contract," or says "what are our deliverables in this deal."
category: operations
tags: [contracts, compliance, obligations, deadlines, deliverables]
author: community
---

# Contract Obligation Tracker

This skill parses operational contracts and produces a structured, actionable list of every obligation, deadline, and deliverable so teams can track compliance without re-reading the full document.

## Extraction Workflow

1. **Read the full contract text** provided by the user — do not summarize prematurely; scan every clause, exhibit, and schedule.
2. **Identify all obligation types** across these categories:
   - **Recurring obligations** — actions that repeat on a schedule (monthly reports, quarterly audits, annual renewals)
   - **One-time deliverables** — specific outputs due at a fixed point (signed documents, software builds, training completion)
   - **Conditional obligations** — actions triggered by an event (notice within X days of a breach, payment upon milestone completion)
   - **Prohibitions** — things a party must NOT do (non-compete clauses, data sharing restrictions)
   - **Notification requirements** — who must be told what, by when, and how
3. **Extract the responsible party** for each obligation — label as Party A, Party B, or both using the contract's defined terms.
4. **Capture the exact deadline or trigger** — use verbatim language from the contract, then translate it into a plain-English date or condition.
5. **Note the consequence of non-compliance** if stated — penalties, termination rights, cure periods.
6. **Flag ambiguous or missing information** — obligations with no clear deadline, undefined responsible party, or vague success criteria get a ⚠️ tag.
7. **Sort the final list** by: (1) soonest hard deadline, (2) recurring obligations, (3) conditional obligations, (4) prohibitions.

## Output Format

Produce a markdown table followed by a flagged items section.

**Obligation Tracker Table:**

| # | Obligation Summary | Party Responsible | Deadline / Trigger | Contract Reference | Consequence if Missed | Status |
|---|---|---|---|---|---|---|
| 1 | [Plain-English summary, ≤15 words] | [Party name] | [Date or trigger condition] | [Section/clause number] | [Penalty or cure period] | ☐ Open |

- One row per distinct obligation
- No merging of unrelated obligations into a single row
- Contract reference must cite the specific section number or exhibit

**Flagged Items Section:**

List every ⚠️ item below the table with:
- The obligation as written in the contract
- What information is missing or ambiguous
- A recommended clarification question to send to the counterparty

**Summary Block** (above the table):

```
Contract: [Name or description]
Parties: [Party A] / [Party B]
Effective Date: [Date]
Term: [Duration]
Total Obligations Extracted: [N]
Flagged for Clarification: [N]
Nearest Deadline: [Date — Obligation summary]
```
