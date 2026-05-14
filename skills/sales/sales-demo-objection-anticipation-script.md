---
name: sales-demo-objection-anticipation-script
description: >
  Generates a pre-demo preparation script that maps a prospect's known pain points and company context to likely objections and prepared responses. Use when someone says "I have a demo coming up," asks about "how to handle tough questions in a sales call," or wants to "prepare for objections before a product demo." Also activates when someone mentions "prepping for a prospect meeting" or needs to "anticipate pushback from a potential client."
category: sales
tags: [sales, demo-prep, objection-handling, prospect-research, b2b]
author: community
---

# Pre-Demo Objection Anticipation Script

This skill generates a structured preparation script that connects a prospect's specific context — industry, pain points, company size, and deal stage — to the most likely objections they will raise, with ready-to-use responses for each.

## Workflow

1. **Collect prospect context** — Ask for or extract the following before generating the script:
   - Company name, industry, and size (headcount or revenue)
   - Known pain points or problems they've expressed
   - Current solution or competitor they're using (if known)
   - Deal stage and who will be in the demo (roles/titles)
   - Any known budget concerns, timeline pressures, or internal politics

2. **Map context to objection categories** — Use the prospect details to identify which objection types are most likely:
   - **Price/ROI**: Triggered by tight budgets, procurement involvement, or cost-focused roles (CFO, Finance)
   - **Timing**: Triggered by active competing initiatives, fiscal year constraints, or recent org changes
   - **Status quo bias**: Triggered by long tenure with current solution or low urgency signals
   - **Technical fit**: Triggered by complex environments, IT/security stakeholders, or niche requirements
   - **Trust/credibility**: Triggered by early-stage relationship, unknown vendor, or past bad experiences
   - **Internal buy-in**: Triggered by multiple stakeholders, committee decisions, or missing champion

3. **Generate 4–7 specific objections** — For each objection:
   - Write the objection as the prospect would actually say it (first person, natural language)
   - Identify the underlying fear or concern driving the objection
   - Write a 2–4 sentence response that acknowledges, reframes, and advances
   - Add one follow-up question to re-engage the prospect after the response

4. **Add a demo flow note** — Based on the objections identified, flag 1–2 moments in a standard demo flow where these objections are most likely to surface, so the rep can preemptively address them.

5. **Include a "landmine watch" section** — List 2–3 topics or questions to avoid raising unprompted, based on the prospect context (e.g., don't mention a competitor feature gap if the prospect currently relies on it).

## Output Format

Produce a structured markdown document with the following sections:

**Prospect Snapshot** — 3–5 bullet summary of the key context used to generate the script.

**Likely Objections** — Numbered list of 4–7 objections, each formatted as:
- **Objection**: (verbatim as prospect might say it)
- **Underlying concern**: (one sentence)
- **Response**: (2–4 sentences, conversational tone)
- **Follow-up question**: (one question to re-engage)

**Demo Flow Alerts** — 2 bullet points noting where in the demo these objections are most likely to emerge.

**Landmine Watch** — 2–3 bullets of topics to avoid raising unprompted.

Total length: 400–700 words. Tone should be practical and direct — written for a sales rep to read 10 minutes before a call, not for a training manual.
