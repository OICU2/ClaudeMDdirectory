---
name: sales-email-thread-summary
description: >
  Analyzes and distills a long sales email thread into a structured brief highlighting what matters most for the deal. Use when someone says "summarize this email thread," asks to "catch me up on this prospect conversation," or wants to "pull out the key points from this email chain." Also triggers when someone shares an email thread and asks "what did we commit to" or "what are the next steps we agreed on."
category: sales
tags: [email, summarization, sales, prospects, deal-intelligence]
author: community
---

# Sales Email Thread Summary

This skill parses a full email thread with a prospect and produces a concise deal brief covering commitments made, objections raised, and agreed next steps so a rep can get up to speed instantly.

## Summarization Workflow

1. **Read the full thread chronologically** — identify who sent each message, the date, and the direction (inbound from prospect or outbound from rep).
2. **Extract commitments** — pull any explicit or implied promises made by either party (e.g., "I'll send the proposal by Friday," "We can offer a discount if you sign by EOQ").
3. **Identify objections and concerns** — flag anything the prospect pushed back on, questioned, or expressed hesitation about (price, timing, features, internal approval, competitors mentioned).
4. **Capture agreed next steps** — find any scheduled calls, demos, follow-up actions, or deadlines both parties acknowledged.
5. **Note sentiment and engagement level** — assess whether the prospect is warm, lukewarm, stalling, or going cold based on response time, tone, and message length trends.
6. **Flag unresolved items** — highlight open questions or requests that were never answered by either side.
7. **Do not fabricate** — if something is ambiguous, mark it as unclear rather than inferring a conclusion.

## Output Format

Produce a structured brief using this exact layout:

---

**Thread Summary Brief**

**Prospect:** [Name / Company]
**Thread Date Range:** [First email date] → [Last email date]
**Total Exchanges:** [Number of back-and-forth emails]
**Engagement Sentiment:** [Warm / Lukewarm / Stalling / Cold] — [1-sentence reason]

---

**Key Commitments Made**
- [Rep or Prospect]: [Commitment] *(email date)*
- [Rep or Prospect]: [Commitment] *(email date)*

**Objections & Concerns Raised**
- [Objection or concern] — [Current status: addressed / unresolved]
- [Objection or concern] — [Current status: addressed / unresolved]

**Agreed Next Steps**
- [ ] [Action item] — Owner: [Rep/Prospect] — Due: [Date or "not specified"]
- [ ] [Action item] — Owner: [Rep/Prospect] — Due: [Date or "not specified"]

**Unresolved / Open Items**
- [Question or request that was never answered]
- [Question or request that was never answered]

**Deal Risk Flags** *(if any)*
- [e.g., Prospect mentioned evaluating a competitor, no response in 12 days, budget approval pending]

---

Keep the entire brief under 400 words. Use bullet points only — no paragraphs in the output sections. If the thread is too short to populate a section, write "None identified" rather than omitting the section.
