---
name: cross-functional-meeting-output-tracker
description: >
  Standardizes the capture of decisions, action items, and owners from cross-functional meetings into a searchable, auditable log. Use when someone says "let's document what came out of that meeting," asks to "turn these meeting notes into action items," wants to "log the decisions from today's sync," needs to "track who owns what from the meeting," or requests to "create a meeting summary with owners and deadlines."
category: operations
tags: [meetings, action-items, decisions, accountability, documentation]
author: community
---

# Cross-Functional Meeting Output Tracker

Parses raw meeting notes or transcripts and produces a structured, auditable log of decisions made, action items assigned, owners identified, and deadlines committed to — activated whenever someone needs to convert meeting content into a trackable record.

## Extraction Workflow

1. **Identify meeting metadata** from the input: meeting name, date, attendees, and facilitator. If missing, flag as unknown rather than omitting the field.

2. **Extract decisions** — any statement that represents a concluded choice, policy change, or agreed direction. Look for language like "we decided," "agreed to," "going with," "confirmed," or "approved." Each decision gets a unique ID (D-001, D-002...).

3. **Extract action items** — any task, follow-up, or commitment tied to a person. Look for "will," "needs to," "is responsible for," "by [date]," "before next," or names followed by verbs. Each action item gets a unique ID (A-001, A-002...).

4. **Assign owners** — every action item must have exactly one named owner. If ownership is ambiguous, flag it explicitly with `[OWNER UNCLEAR]`. Never assign group ownership like "the team."

5. **Extract deadlines** — pull any stated date or relative timeframe ("by Friday," "next sprint," "EOQ"). If no deadline is stated, mark as `[NO DEADLINE SET]`.

6. **Identify open questions** — unresolved topics, deferred decisions, or items that need follow-up before a decision can be made. Tag with OQ-001, OQ-002...

7. **Flag risks or blockers** mentioned during the meeting that could affect action item completion.

## Output Format

Produce a structured log with these exact sections:

```
## Meeting: [Name]
**Date:** [Date] | **Facilitator:** [Name] | **Attendees:** [List]

---

### DECISIONS LOG
| ID    | Decision                        | Made By        | Effective Date |
|-------|---------------------------------|----------------|----------------|
| D-001 | [Clear statement of decision]   | [Name or group]| [Date or TBD]  |

---

### ACTION ITEMS
| ID    | Task                            | Owner          | Deadline       | Status  |
|-------|---------------------------------|----------------|----------------|---------|
| A-001 | [Specific, verb-led task]       | [Single owner] | [Date]         | Open    |

---

### OPEN QUESTIONS
| ID    | Question                        | Assigned To    | Due For Answer |
|-------|---------------------------------|----------------|----------------|
| OQ-001| [Unresolved question]           | [Name]         | [Date or TBD]  |

---

### RISKS & BLOCKERS
- [Risk or blocker description] — affects: [A-ID or D-ID]

---

### MISSING INFORMATION
- [List any fields that could not be populated and what is needed to resolve them]
```

- Use plain Markdown tables for all structured sections
- Keep decision and task descriptions to one clear sentence each
- Never omit a section — use "None identified" if a section has no entries
- Append a one-paragraph **Meeting Health Note** at the end flagging: decision-to-action ratio, unowned items count, and any meetings that should be scheduled as follow-ups
