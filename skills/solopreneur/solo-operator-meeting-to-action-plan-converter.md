---
name: solo-operator-meeting-to-action-plan-converter
description: >
  Converts raw, unstructured client meeting notes into a prioritized action plan with deadlines, owner assignments, and ready-to-send follow-up drafts. Use when someone says "I just got off a call with a client," shares messy meeting notes that need organizing, wants to turn a client conversation into next steps, needs to send a follow-up after a discovery call, or asks how to keep a project on track after a meeting.
category: solopreneur
tags: [meetings, client-management, action-plans, follow-up, project-management]
author: community
---

# Meeting-to-Action-Plan Converter

Transforms raw client meeting notes into a structured action plan with deadlines, owner assignments, and a polished follow-up email — used whenever a solopreneur shares notes from a client call or meeting and needs clear next steps.

## Conversion Workflow

1. **Extract the raw inputs** — Read all notes provided. If notes are vague or missing key context (client name, meeting date, project type), ask for those before proceeding. Do not guess.

2. **Identify all commitments and open items** — Pull out every promise, request, question, decision, and "we should" mentioned. Include items the solopreneur committed to AND items the client committed to.

3. **Categorize each item** by type:
   - **Action Item** — A concrete task that must be completed
   - **Decision Needed** — Something unresolved that requires a choice
   - **Question/Open Loop** — Information still needed from either party
   - **Nice-to-Have** — Mentioned but not critical path

4. **Assign ownership** — Label each item as: `[You]`, `[Client]`, or `[Both]`. If unclear, default to `[You]` and flag it.

5. **Set deadlines** — Assign a realistic deadline to each action item using one of these tiers:
   - **Immediate** (within 24 hours)
   - **This Week** (2–5 business days)
   - **Next Week** (6–10 business days)
   - **TBD** — only if genuinely unknown; prompt the user to confirm

6. **Prioritize the action items** — Order them: Critical → Important → Low Priority. Flag any blockers (tasks where other work cannot proceed until this is done).

7. **Draft a follow-up email** — Write a concise, professional follow-up the solopreneur can send to the client within 24 hours. The email should:
   - Open with a one-line summary of what was accomplished in the meeting
   - List next steps for both parties in plain language
   - Confirm any deadlines or dates discussed
   - Close with a clear call to action or next touchpoint
   - Tone: warm but professional, under 200 words

8. **Flag risks** — If any deadline is unrealistic, a commitment seems unclear, or a scope issue is detected, call it out explicitly in a "Watch Out" section.

## Output Format

Produce the following sections in order:

---

**Meeting Summary**
One paragraph (3–5 sentences) summarizing what was discussed, decided, and the current project status.

---

**Action Plan**

| # | Action Item | Owner | Priority | Deadline | Blocker? |
|---|-------------|-------|----------|----------|----------|
| 1 | [Task] | [You/Client/Both] | Critical/Important/Low | Immediate/This Week/Next Week/TBD | Yes/No |

---

**Open Decisions & Questions**

- [ ] [Decision or question] — Owner: [You/Client] — Needed by: [date or "ASAP"]

---

**Follow-Up Email Draft**

> Subject: [Clear, specific subject line]
>
> [Full email body, ready to copy-paste]

---

**⚠️ Watch Out**

- [Any risks, unclear commitments, scope creep signals, or unrealistic timelines — omit this section if none exist]

---

Keep the action plan scannable. Use plain language. Every item must have an owner and a deadline — no orphaned tasks.
