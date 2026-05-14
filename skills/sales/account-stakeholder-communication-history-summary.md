---
name: account-stakeholder-communication-history-summary
category: sales
description: >
  Synthesizes all recorded touchpoints with an account into a concise stakeholder communication timeline to prepare sales reps for renewal or expansion conversations. Use when someone says "help me prep for my renewal call," asks about "what's happened with this account," wants to "summarize our history with a customer," needs to "catch up on stakeholder interactions," or is "getting ready for an expansion conversation." Produces a structured timeline with sentiment signals, key themes, and recommended talking points.
tags: [account-management, renewal, expansion, stakeholder-mapping, call-prep]
author: community
---

# Account Stakeholder Communication History Summary

This skill ingests raw communication data—emails, call notes, support tickets, meeting logs—and produces a structured stakeholder timeline that prepares reps for high-stakes renewal or expansion conversations.

## Workflow

1. **Collect inputs**: Ask the rep to paste or upload all available communication records for the account. Accepted formats: email threads, CRM notes, call transcripts, Slack exports, support ticket summaries, QBR notes.

2. **Extract touchpoints**: Identify each discrete interaction and capture:
   - Date
   - Channel (email, call, meeting, ticket, etc.)
   - Participants and their roles/titles
   - Topic or purpose of the interaction
   - Outcome or next steps agreed upon

3. **Map stakeholders**: Build a stakeholder index from the extracted data including:
   - Name and role
   - Frequency of engagement
   - Topics they've been involved in
   - Last known sentiment (positive, neutral, negative, unknown)

4. **Identify themes and signals**: Scan across all touchpoints to surface:
   - Recurring pain points or complaints
   - Features or outcomes they've praised
   - Unresolved issues or open commitments
   - Changes in tone or engagement frequency over time
   - Any risk signals (escalations, churn language, executive disengagement)

5. **Flag open commitments**: List any promises made by the rep or company that have not been confirmed as resolved (e.g., "will follow up with product team," "sending revised pricing by EOQ").

6. **Generate talking points**: Based on themes and sentiment, produce 3–5 recommended talking points tailored to the renewal or expansion context.

## Output Format

Produce a structured summary with the following sections:

---

**Account:** [Account Name]
**Prep Date:** [Today's Date]
**Conversation Type:** [Renewal / Expansion / QBR / Other]

---

### Stakeholder Map
| Name | Role | Last Contact | Engagement Level | Sentiment |
|------|------|-------------|-----------------|-----------|
| ... | ... | ... | High/Med/Low | Positive/Neutral/Negative/Unknown |

---

### Communication Timeline
List entries chronologically, oldest to newest:

- **[Date]** — [Channel] — [Participants] — [Summary: 1–2 sentences on topic and outcome]

---

### Key Themes
- [Theme 1]: Brief description with supporting evidence (reference specific touchpoints)
- [Theme 2]: ...
- [Theme 3]: ...

---

### Open Commitments
- [Owner] committed to [action] on [date] — Status: [Resolved / Unresolved / Unknown]

---

### Risk Signals
- [Signal description] — First observed: [date] — Frequency: [once / recurring]

---

### Recommended Talking Points
1. [Talking point tied to a specific theme or stakeholder concern]
2. ...
3. ...

---

**Tone guidance:** Keep the summary factual and neutral. Flag gaps explicitly (e.g., "No contact recorded with economic buyer in 90+ days") rather than omitting them. If data is missing or ambiguous, note it rather than infer.
