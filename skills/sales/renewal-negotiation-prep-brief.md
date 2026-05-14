---
name: renewal-negotiation-prep-brief
description: >
  Generates a structured pre-negotiation brief for upcoming renewal deals by analyzing account health, usage patterns, expansion history, and likely objection scenarios. Use when someone says "we have a renewal coming up," asks about preparing for a renewal negotiation, or wants to build a negotiation strategy for an existing customer. Also triggers when someone needs to anticipate objections before a renewal call or wants to understand their leverage going into a contract discussion.
category: sales
tags: [renewals, negotiation, account-management, sales-prep, customer-retention]
author: community
---

# Renewal Negotiation Prep Brief

This skill generates a comprehensive pre-negotiation brief for renewal deals, giving account executives and CSMs a clear picture of account health, negotiation leverage, and objection readiness before entering a renewal conversation.

## Workflow

1. **Collect Account Context**
   Ask the user for the following if not already provided:
   - Account name and renewal date
   - Current contract value (ACV/TCV) and any uplift target
   - Product(s) or plan tier in use
   - Key stakeholders and their roles (champion, economic buyer, blocker)
   - Known satisfaction signals (NPS, support ticket volume, QBR feedback)
   - Usage data highlights (adoption rate, active users, feature utilization)
   - Expansion or upsell history since the original close
   - Any known risks, complaints, or competitor activity

2. **Assess Negotiation Posture**
   Based on provided context, classify the account across three dimensions:
   - **Health Signal**: Green / Yellow / Red (based on usage, sentiment, engagement)
   - **Expansion Momentum**: Positive (grew usage/seats/spend) / Flat / Negative (reduced scope)
   - **Risk Level**: Low / Medium / High (based on churn signals, competitor mentions, stakeholder changes)

3. **Identify Leverage Points**
   List concrete reasons the customer should renew and what value has been demonstrated:
   - ROI or outcome metrics the customer has achieved
   - Features or integrations they rely on heavily
   - Switching costs (data, workflows, training investment)
   - Relationship strength and internal champions

4. **Map Likely Objections**
   For each probable objection, generate a response framework:
   - **Price / Budget**: What concessions are acceptable vs. off-limits; value reframe angles
   - **Competitive Alternative**: Known competitors in play; differentiation points
   - **Limited Usage / ROI Doubt**: Usage data counterpoints; success story references
   - **Stakeholder Change**: New buyer education strategy; internal champion activation
   - **Feature Gaps**: Roadmap commitments or workarounds to offer

5. **Define Negotiation Strategy**
   Specify:
   - Ideal outcome (full renewal + uplift amount)
   - Acceptable outcome (flat renewal or minimum acceptable terms)
   - Walk-away conditions or escalation triggers
   - Concessions available to offer (discount ceiling, term flexibility, add-ons)
   - Opening move recommendation (anchor high, lead with value, etc.)

6. **Prepare Discovery Questions**
   List 4–6 questions to ask at the start of the renewal call to surface hidden objections and confirm the champion's internal selling status.

## Output Format

Produce a structured brief with the following sections, using headers and bullet points throughout. Target length: 600–900 words.

```
## Renewal Negotiation Prep Brief — [Account Name]

**Renewal Date:** [Date]
**Current ACV:** [Value] | **Uplift Target:** [Value or %]
**Primary Contact(s):** [Names + Roles]

---

### Account Health Snapshot
- Health Signal: [Green / Yellow / Red]
- Expansion Momentum: [Positive / Flat / Negative]
- Risk Level: [Low / Medium / High]
- Key signals: [2–4 bullet points summarizing usage, sentiment, or engagement data]

---

### Value Delivered (Leverage Points)
- [Bullet: specific outcome or ROI metric]
- [Bullet: heavy-use features or integrations]
- [Bullet: switching cost factors]
- [Bullet: relationship or champion strength]

---

### Objection Scenarios & Responses

**1. Price / Budget Concern**
- Likely form: "[Example objection phrasing]
