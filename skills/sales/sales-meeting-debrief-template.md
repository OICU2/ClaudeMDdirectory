---
name: sales-meeting-debrief-template
description: >
  Generates a structured post-meeting debrief capturing buyer signals, next steps, open questions, and CRM update requirements from a sales call. Use when someone says "I just got off a sales call," asks to "debrief my meeting," wants to "summarize what happened on my call," needs to "update the CRM after a discovery call," or says "help me capture notes from my prospect meeting."
category: sales
tags: [sales, crm, meeting-notes, discovery, pipeline]
author: community
---

# Sales Meeting Debrief Template

This skill produces a structured post-meeting debrief from a sales call, extracting buyer signals, commitments, risks, and CRM fields so nothing gets lost after the conversation ends.

## Debrief Workflow

1. **Gather raw input** — Ask the user to paste call notes, a transcript, or describe what happened in the meeting. If they provide nothing, prompt: "What happened in the call? Share notes, a transcript, or a quick summary."

2. **Extract buyer signals** — Identify explicit and implicit buying signals (budget mentioned, timeline stated, pain points confirmed, competitors named, enthusiasm or hesitation cues). Flag each as Positive, Neutral, or Negative.

3. **Identify next steps** — Pull out any commitments made by either side (follow-up email, demo scheduled, proposal requested, internal champion to loop in). Assign an owner (rep or prospect) and a due date if mentioned.

4. **Surface open questions** — List anything left unanswered, unresolved objections, or missing information needed to advance the deal (pricing approval process, decision-maker identity, technical requirements, etc.).

5. **Assess deal health** — Based on signals and gaps, give a one-line deal health summary: stage confidence (Strong / Uncertain / At Risk) and one primary reason.

6. **Generate CRM update fields** — Produce ready-to-paste field values for standard CRM records: Contact Name, Company, Meeting Date, Deal Stage, Next Activity, Close Date Estimate, Notes Summary, and any custom fields the user mentions.

7. **Draft follow-up email skeleton** — Write a 3–5 sentence follow-up email the rep can send within 24 hours, referencing specific points from the call to show attentiveness.

## Output Format

Produce the debrief as a clearly labeled document with these sections in order:

---
**Meeting Debrief: [Company / Prospect Name] — [Date]**

**Attendees:** [Names and titles if known]

**Buyer Signals**
| Signal | Type (Positive / Neutral / Negative) | Source Quote or Context |
|--------|--------------------------------------|------------------------|
| ...    | ...                                  | ...                    |

**Next Steps**
| Action Item | Owner | Due Date |
|-------------|-------|----------|
| ...         | ...   | ...      |

**Open Questions & Gaps**
- [Question or missing info]
- [Unresolved objection]

**Deal Health Summary**
Stage Confidence: [Strong / Uncertain / At Risk]
Reason: [One sentence]

**CRM Update Fields**
- Contact Name:
- Company:
- Meeting Date:
- Deal Stage:
- Next Activity:
- Close Date Estimate:
- Notes Summary:

**Follow-Up Email Draft**
Subject: [Subject line]

[Email body — 3–5 sentences]
---

Keep the full output under 500 words excluding the email draft. Use plain language. Flag any section where information was missing from the input so the rep knows what to fill in manually.
