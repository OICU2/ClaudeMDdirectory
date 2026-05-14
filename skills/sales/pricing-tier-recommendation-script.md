---
name: pricing-tier-recommendation-script
description: >
  Generates a structured decision-tree conversation script that helps sales reps identify the right pricing tier for each prospect through targeted discovery questions. Use when someone says "I need help recommending the right plan," asks about "how to qualify prospects for pricing," or wants to "figure out which tier fits a customer." Also activates when a rep says "the customer isn't sure which package they need" or "help me build a pricing conversation flow."
category: sales
tags: [pricing, discovery, decision-tree, qualification, conversation-script]
author: community
---

# Pricing Tier Recommendation Script

This skill builds a branching conversation guide that walks sales reps through budget signals, company size, feature needs, and growth stage to land on a confident, defensible pricing tier recommendation.

## Discovery Workflow

### Step 1: Gather Context Before Generating
Ask the user for the following if not already provided:
- **Tier names and price points** (e.g., Starter $49/mo, Growth $199/mo, Enterprise custom)
- **Key differentiators between tiers** (seat limits, features, SLA, integrations)
- **Typical buyer personas** for each tier
- **Industry or vertical** if the script should be specialized

If the user provides partial info, make reasonable assumptions and label them clearly.

---

### Step 2: Build the Decision Tree

Structure the script across five discovery branches:

**Branch 1 — Company Size & Seat Count**
- "How many people on your team will actively use this?"
- Signal: <10 users → Starter; 10–100 → Growth; 100+ → Enterprise

**Branch 2 — Budget Range**
- "Do you have a monthly or annual budget in mind for this tool?"
- Signal: Hesitant to share → anchor low, then upsell; clear budget → match tier
- Include a reframe line if prospect says "we have no budget": *"Totally fair — what would success look like if cost weren't a factor?"*

**Branch 3 — Feature Priority**
- "Which of these matters most right now: [Feature A], [Feature B], or [Feature C]?"
- Map each feature to the tier that unlocks it
- Flag if a prospect's top feature is only in Enterprise — note this as a buying signal

**Branch 4 — Growth & Timeline**
- "Are you looking to solve this immediately, or planning for the next 6–12 months?"
- Signal: Immediate → recommend current-fit tier; future-focused → recommend one tier up with upgrade path framing

**Branch 5 — Decision Authority**
- "Will you be the one signing off, or does this go through procurement or finance?"
- Signal: Champion without authority → provide ROI talking points; final decision-maker → move to close

---

### Step 3: Recommendation Logic

After each branch, provide the rep with:
- A **tier match** based on combined signals
- A **confidence level** (High / Medium / Low)
- A **next line to say** that transitions naturally into the recommendation

Include a fallback script for mixed signals:
> *"Based on what you've shared, you're right between [Tier A] and [Tier B]. Here's how I'd think about it with you…"*

---

### Step 4: Objection Bridges

For each tier, include one pre-built objection response:
- **Starter objection** ("Can we just try the free version?"): Acknowledge, then highlight the one Starter feature that free lacks
- **Growth objection** ("That's more than we expected"): Reframe around per-seat cost and time-to-value
- **Enterprise objection** ("We need to get legal involved"): Validate, offer mutual action plan, keep momentum

---

## Output Format

Produce the following in order:

1. **Script Header** — One-line summary of the prospect profile this script targets
2. **Discovery Question Tree** — Formatted as a branching flowchart in plain text (use `→` arrows and indentation for branches)
3. **Tier Recommendation Table** — Markdown table with columns: Signal Combination | Recommended Tier | Confidence | Rep's Next Line
4. **Objection Response Cards** — One card per tier, labeled clearly, 2–4 sentences each
5. **Closing Transition Line** — A single sentence the rep can use to move from recommendation into next steps

Total length:
