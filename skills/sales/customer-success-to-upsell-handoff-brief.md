---
name: customer-success-to-upsell-handoff-brief
description: >
  Produces a structured handoff brief for account executives by extracting expansion signals and health indicators from customer success notes. Use when someone says "prepare a handoff for sales," asks to "summarize CS notes for an upsell opportunity," or wants to "turn customer success updates into an AE brief." Also triggers when someone needs to "identify expansion signals from account notes" or wants to "create an upsell brief from customer health data."
category: sales
tags: [customer-success, upsell, account-management, handoff, expansion-revenue]
author: community
---

# Customer Success to Upsell Handoff Brief

This skill transforms raw customer success notes, health scores, and account activity into a structured handoff brief that equips account executives with the context, signals, and talking points needed to pursue expansion opportunities.

## Extraction and Analysis Workflow

1. **Parse all input materials** — Accept CS notes, health dashboards, support ticket summaries, QBR transcripts, NPS scores, product usage data, or any combination of account information provided.

2. **Identify expansion signals** — Extract explicit and implicit indicators of upsell readiness:
   - Feature requests or capability gaps mentioned by the customer
   - References to team growth, new use cases, or adjacent departments
   - Power user behavior or adoption spikes in specific modules
   - Budget mentions, renewal conversations, or fiscal year timing cues
   - Positive sentiment in recent interactions (promoter scores, praise, referrals)

3. **Assess account health** — Summarize the current state across:
   - Product adoption and engagement trends (improving, stable, declining)
   - Support ticket volume and resolution sentiment
   - Relationship quality with key stakeholders
   - Contract status, renewal date, and current ARR/MRR tier

4. **Flag risks and blockers** — Note any factors that could complicate an upsell conversation:
   - Unresolved support issues or outstanding commitments from your team
   - Stakeholder changes (champion left, new economic buyer, reorg)
   - Budget freezes or negative sentiment signals
   - Competitive mentions or vendor evaluation activity

5. **Map the opportunity** — Identify the most likely expansion path:
   - Specific product or tier upgrade that fits the signals
   - Seat expansion based on usage or team growth cues
   - Cross-sell products aligned to mentioned pain points
   - Estimated deal size range if data supports it

6. **Craft AE talking points** — Write 3–5 specific conversation starters or value anchors the AE can use in their first outreach or meeting, grounded directly in the extracted signals.

7. **Recommend next action and timing** — Suggest whether the account is ready for immediate outreach, needs a CS touchpoint first, or should be monitored for 30–60 days before engaging.

## Output Format

Produce a structured brief with the following sections, using headers and bullet points throughout:

---

**Account:** [Account Name]
**AE Owner:** [If provided]
**CS Owner:** [If provided]
**Brief Prepared:** [Date if provided, otherwise omit]
**Current ARR/Tier:** [If known]
**Renewal Date:** [If known]

---

### Account Health Summary
2–4 bullet points covering adoption, relationship quality, support status, and overall sentiment. Use a one-word health label: 🟢 Healthy / 🟡 At Risk / 🔴 Critical.

### Expansion Signals
Bulleted list of 3–7 specific signals extracted from the notes, each with a one-line explanation of why it indicates expansion potential.

### Likely Opportunity
- **Type:** (Upsell / Cross-sell / Seat expansion / Tier upgrade)
- **Product/Feature:** Specific recommendation
- **Estimated Size:** Range or "insufficient data"
- **Confidence:** High / Medium / Low with one-line rationale

### Risks and Blockers
Bulleted list of anything that could derail or delay the conversation. Include a mitigation note for each if one is apparent.

### AE Talking Points
Numbered list of 3–5 ready-to-use conversation starters or value statements, each directly tied to a named signal from the notes.

### Recommended Next Step
One clear action with suggested timing (e.g., "Schedule discovery call within 2 weeks — champion has signaled
