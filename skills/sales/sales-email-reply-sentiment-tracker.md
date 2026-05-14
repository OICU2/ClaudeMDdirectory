---
name: sales-email-reply-sentiment-tracker
description: >
  Scores inbound prospect reply emails by sentiment and intent to route follow-up actions
  appropriately. Use when someone says "analyze this reply from a prospect," asks "what's
  the tone of this email response," wants to "score a lead's email reply," needs to "figure
  out if a prospect is interested based on their reply," or says "help me prioritize follow-ups
  from these responses."
category: sales
tags: [sentiment-analysis, email, sales-outreach, lead-scoring, follow-up]
author: community
---

# Sales Email Reply Sentiment Tracker

Analyzes inbound prospect reply emails to assign a sentiment score and intent classification, then recommends a specific follow-up action based on the signals detected.

## Sentiment Scoring Workflow

1. **Extract the raw reply text** — Identify the core message, stripping out signatures, forwarded threads, and boilerplate disclaimers before analysis.

2. **Score sentiment on a 1–5 scale:**
   - **5 – Strongly Positive:** Explicit interest, asks to schedule, mentions budget/timeline, uses words like "excited," "interested," "let's move forward"
   - **4 – Mildly Positive:** Open but cautious, asks clarifying questions, says "could be useful," no objections raised
   - **3 – Neutral:** Acknowledges receipt, defers timing, says "not right now but keep in touch," no clear signal either way
   - **2 – Mildly Negative:** Polite deflection, vague objections, "we're handling this internally," "budget is tight"
   - **1 – Strongly Negative:** Explicit rejection, unsubscribe request, hostile tone, "remove me from your list"

3. **Classify primary intent** — Choose one: `Ready to Engage`, `Needs Nurturing`, `Timing Objection`, `Budget Objection`, `Competitor Mention`, `Hard No`, `Referral Given`, or `Question/Request for Info`.

4. **Flag key signal phrases** — Pull 1–3 direct quotes from the email that drove the score. If the email contains urgency indicators (deadline, fiscal year end, RFP in progress), flag as `URGENCY DETECTED`.

5. **Assign a follow-up action** — Map score to action:
   - Score 4–5: `FAST TRACK — Book meeting within 24 hours`
   - Score 3: `NURTURE — Send value-add content, re-engage in 2 weeks`
   - Score 2: `HOLD — Address objection type, re-engage in 30 days`
   - Score 1: `SUPPRESS — Remove from sequence, log reason`

6. **Check for escalation triggers** — If the reply mentions a competitor by name, a specific pain point, or a buying committee member, flag for immediate rep review regardless of score.

## Output Format

Produce a structured analysis block for each email analyzed:

```
SENTIMENT ANALYSIS REPORT
─────────────────────────────────────
Sentiment Score:     [1–5] — [Label, e.g., "4 – Mildly Positive"]
Intent Class:        [One of the defined intent categories]
Urgency Flag:        [DETECTED / NOT DETECTED]
Escalation Flag:     [YES — reason / NO]

Key Signal Phrases:
  • "[Direct quote 1]"
  • "[Direct quote 2]"
  • "[Direct quote 3 if applicable]"

Recommended Action:  [FAST TRACK / NURTURE / HOLD / SUPPRESS] — [Specific next step]

Notes:               [1–2 sentences on anything unusual, ambiguous tone, or context the rep should know]
─────────────────────────────────────
```

If multiple emails are submitted at once, output one report block per email, then append a **Batch Summary** listing total counts by score tier and a prioritized follow-up queue ordered by score descending.
