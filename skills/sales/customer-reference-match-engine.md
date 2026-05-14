---
name: customer-reference-match-engine
description: >
  Analyzes an active prospect's profile and matches them to the most persuasive existing customer reference from your portfolio. Use when someone says "who else have you worked with in our space," asks about customer proof points, wants to find a reference for a stalled deal, needs to overcome a specific objection with a real example, or is preparing for a late-stage sales conversation and needs social proof.
category: sales
tags: [references, customer-proof, objection-handling, social-proof, deal-acceleration]
author: community
---

# Customer Reference Match Engine

This skill identifies the single most persuasive customer reference for a given prospect by scoring candidates across industry, company size, use case alignment, and objection history, then produces a ready-to-use reference brief.

## Matching Workflow

### Step 1: Extract Prospect Profile
Collect or infer these attributes from the conversation or CRM data provided:
- **Industry / vertical** (e.g., fintech, healthcare SaaS, logistics)
- **Company size** (headcount + ARR band if known)
- **Primary use case** (what problem they're solving)
- **Stage of deal** (discovery, evaluation, procurement, stalled)
- **Active objections** (price, security, implementation complexity, executive buy-in, etc.)
- **Buyer persona** (economic buyer, champion, IT decision-maker)

### Step 2: Score Reference Candidates
For each customer reference in the provided list (or ask the user to paste their reference roster), score 1–5 on:

| Dimension | Weight |
|---|---|
| Industry match | 30% |
| Company size proximity | 20% |
| Use case similarity | 25% |
| Objection overcome (documented) | 15% |
| Buyer persona match | 10% |

Calculate a weighted total. Surface the **top 3** candidates ranked by score.

### Step 3: Validate Reference Usability
Before recommending, flag any disqualifiers:
- Reference is a direct competitor of the prospect
- Reference NDA prohibits use as a public reference
- Reference relationship is marked inactive or churned
- Last contact with reference is >6 months ago (flag as "verify availability")

### Step 4: Build the Reference Brief
For the **#1 match**, construct the full reference brief (see Output Format).
For **#2 and #3**, provide a one-line summary with their score and the primary reason they ranked lower.

### Step 5: Suggest Activation Path
Recommend how to deploy the reference:
- **Call/intro**: Draft a two-sentence ask to send the reference contact
- **Case study**: Link or summarize the existing written asset
- **On-site visit or panel**: Flag if the reference has agreed to host visits
- **Peer-to-peer cold intro**: Draft a warm introduction email the AE can forward

---

## Matching Rules

- Never recommend a reference with an unresolved churn risk or active support escalation
- Prioritize objection match over industry match when the deal is stalled specifically on that objection
- If no reference scores above 60%, tell the user explicitly: "No strong match exists — consider building a new reference in this segment"
- When the prospect is enterprise (>1,000 employees), default to enterprise-tier references even if a mid-market reference has higher use case alignment
- Ask clarifying questions if industry or use case is ambiguous rather than guessing

---

## Output Format

Produce the following structure:

---

**🎯 Top Reference Match: [Customer Name or Anonymized Label]**

**Match Score:** [X/100] | **Recommended Use:** [call / case study / intro / visit]

**Why This Match**
- Industry: [one sentence on alignment]
- Company Size: [prospect size vs. reference size]
- Use Case: [specific overlap]
- Objection Overcome: [what objection this reference faced and how they resolved it — quote or paraphrase from notes if available]
- Buyer Persona: [who at the reference is willing to speak and their role]

**Reference Story (60-second version)**
[3–5 sentences the AE can say out loud: before state, solution deployed, measurable outcome, timeline to value]

**Suggested Ask (copy-paste ready)**
> [Email or Slack message the AE sends to the reference contact to request participation]

**Warm
