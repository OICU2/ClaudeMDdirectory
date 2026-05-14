---
name: ops-meeting-action-item-accountability-tracker
description: >
  Captures, assigns, and tracks action items from recurring operational meetings to ensure follow-through and reduce repeated agenda items. Use when someone says "we keep revisiting this in every meeting," shares meeting notes and wants action items extracted, asks who owns a task from last week's standup, wants to build a follow-up list from a sync, or needs to know what's still open from a previous ops meeting.
category: operations
tags: [meetings, action-items, accountability, operations, tracking]
author: community
---

# Ops Meeting Action Item Accountability Tracker

This skill extracts, assigns, and formats trackable action items from meeting notes or transcripts, and surfaces overdue or recurring items when Claude is given follow-up context.

## Workflow

### Step 1: Identify Input Type
Determine what the user has provided:
- **Raw meeting notes or transcript** → extract action items
- **Previous action item list + update** → reconcile and show status
- **Verbal description of a meeting** → prompt for owner, deadline, and outcome before proceeding

### Step 2: Extract Action Items
For each action item found, capture:
- **Task**: one clear sentence describing the deliverable (not the discussion)
- **Owner**: the person responsible (first and last name or role if unnamed)
- **Due Date**: specific date or relative deadline (e.g., "before next Monday sync")
- **Priority**: High / Medium / Low based on urgency language in the source
- **Blocked By**: any dependency mentioned (leave blank if none)

If any of these fields are missing from the source material, flag them explicitly with `[MISSING — needs clarification]`.

### Step 3: Flag Recurring Items
If the user indicates this is a recurring meeting or provides prior action item lists:
- Compare new items against previous ones
- Mark any item that has appeared in two or more consecutive meetings as `🔁 RECURRING`
- Add a note: "This item has appeared in [N] meetings without resolution."

### Step 4: Organize by Priority and Owner
- Sort items: High → Medium → Low
- Within each priority level, group by owner
- Surface unowned items in a separate section labeled "Needs Owner"

### Step 5: Generate Follow-Up Reminders (Optional)
If the user asks for follow-up messaging:
- Draft one short Slack/email message per owner listing only their tasks
- Keep each message under 5 sentences
- Include the meeting name, date, and a clear ask to confirm or update status

## Output Format

Produce a structured action item table followed by any flagged sections:

---

**Meeting:** [Name or description]
**Date:** [Meeting date]
**Extracted by:** Claude | **Reviewed by:** [Owner if provided]

---

### 🔴 High Priority

| # | Task | Owner | Due Date | Blocked By | Status |
|---|------|-------|----------|------------|--------|
| 1 | [Task] | [Owner] | [Date] | [Dependency or —] | Open |

### 🟡 Medium Priority

| # | Task | Owner | Due Date | Blocked By | Status |
|---|------|-------|----------|------------|--------|

### 🟢 Low Priority

| # | Task | Owner | Due Date | Blocked By | Status |
|---|------|-------|----------|------------|--------|

---

### ⚠️ Needs Owner
[List any tasks with no assigned owner]

### 🔁 Recurring Items
[List any items flagged as appearing across multiple meetings, with recurrence count]

### ❓ Missing Information
[List any fields that could not be determined from source material]

---

**Total Action Items:** [N] | **Unowned:** [N] | **Recurring:** [N]

---

Keep the table concise — task descriptions max 15 words. Do not summarize discussion, only outcomes and commitments. If no action items are found, state that explicitly and suggest what clarifying questions to ask the meeting organizer.
