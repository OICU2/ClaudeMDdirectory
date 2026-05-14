---
name: writing-action-item-extraction
description: >
  Parses long-form documents such as meeting summaries, reports, or transcripts to extract and format explicit action items with assigned owners and deadlines. Use when someone says "pull out the action items from this," asks to "find what needs to be done," or wants to "summarize next steps from a document." Also triggers when someone shares a meeting summary and asks "who owns what" or needs to "turn this into a task list."
category: writing
tags: [action-items, meetings, task-extraction, productivity, document-parsing]
author: community
---

# Action Item Extraction

Scans a provided document and produces a structured, scannable list of action items with responsible owners and due dates, ready to paste into a project tracker or meeting follow-up email.

## Extraction Workflow

1. **Read the full document** before extracting anything — context in later sections often clarifies ownership or deadlines mentioned earlier.
2. **Identify action signals** — look for language like "will," "should," "needs to," "responsible for," "by [date]," "action item," "follow up," "take ownership," "assigned to," and imperative verbs.
3. **Extract only committed actions** — ignore vague intentions, hypotheticals, or discussion points that produced no clear next step.
4. **Assign an owner** — use the name or role explicitly stated. If ownership is ambiguous, flag it with `[Owner TBD]`.
5. **Assign a deadline** — use the date or timeframe explicitly stated. If none exists, flag it with `[Deadline TBD]`.
6. **Write each action item as a clear, standalone task** — start with an action verb, keep it to one sentence, and include enough context so it makes sense without reading the source document.
7. **Group by owner** if three or more distinct owners appear; otherwise present as a flat list sorted by deadline.
8. **Flag blockers or dependencies** inline if the document mentions them.

## Output Format

Produce a titled block followed by a formatted task table or grouped list:

---

**Action Items — [Document Title or "Extracted [Date]"]**

| # | Action Item | Owner | Deadline | Notes / Blockers |
|---|-------------|-------|----------|------------------|
| 1 | [Verb + task description] | [Name / Role] | [Date or TBD] | [Optional] |
| 2 | ... | ... | ... | ... |

**Summary:** [X] action items extracted. [Y] items have no assigned owner. [Z] items have no deadline.

---

- If no action items are found, state: "No explicit action items identified. Possible next steps worth clarifying: [list ambiguous items]."
- Keep each action item description under 20 words.
- Do not invent owners or deadlines — flag gaps explicitly rather than guessing.
