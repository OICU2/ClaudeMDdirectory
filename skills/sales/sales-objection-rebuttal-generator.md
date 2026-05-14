---
name: sales-objection-rebuttal-generator
description: >
  Analyzes a logged sales objection and generates three ranked rebuttal strategies tailored to the deal context. Use when a rep says "the prospect pushed back on price," reports "they're not sure they need this right now," mentions "the customer said they're happy with their current vendor," wants to "handle a tough objection," or asks "how should I respond to this concern." Surfaces the most situationally appropriate responses based on deal stage, relationship depth, and objection type.
category: sales
tags: [objection-handling, rebuttals, sales-enablement]
author: community
---

# Sales Objection Rebuttal Generator

This skill takes a logged sales objection and deal context, then produces three distinct ranked rebuttal approaches so reps can select the response best matched to their specific situation.

## Objection Analysis Workflow

1. **Extract the core objection** — Identify the objection type from the rep's input: price/budget, timing/urgency, status quo/incumbent, authority/stakeholder, need/fit, or trust/risk.

2. **Gather deal context** — If not provided, prompt the rep for:
   - Deal stage (early discovery, mid-evaluation, late negotiation, renewal)
   - Relationship level with the prospect (cold, warm, established)
   - Any prior context on why this objection surfaced

3. **Classify objection depth** — Determine if the objection is a reflex (automatic pushback), a genuine concern (real barrier), or a negotiating tactic (leverage attempt). Label it explicitly.

4. **Generate three distinct rebuttal approaches** using different tactical angles:
   - **Reframe** — Shift the prospect's frame of reference without directly countering
   - **Validate and redirect** — Acknowledge the concern fully, then redirect to value or evidence
   - **Clarifying question** — Surface the real concern underneath with a pointed question that advances the conversation

5. **Rank the three approaches** by fit to the stated deal context, labeling each as Best Fit, Strong Alternate, or Use If Others Fail.

6. **Flag any deal risk** — If the objection signals a stalled deal, misaligned expectations, or a disqualifying condition, note it clearly before the rebuttals.

## Output Format

Produce a structured response with the following sections:

**Objection Logged:** [Restate the objection in one clean sentence]

**Objection Type:** [Category] | **Depth:** [Reflex / Genuine Concern / Negotiating Tactic]

**Deal Risk Flag:** [Yes/No — if yes, one sentence explaining the risk]

---

**Rebuttal 1 — [Tactic Name] | 🥇 Best Fit**
[2–4 sentence rebuttal written in the rep's voice, ready to deliver. Include one follow-up question to keep the conversation moving.]

**Rebuttal 2 — [Tactic Name] | ✅ Strong Alternate**
[2–4 sentence rebuttal with a different angle. Note when to use this over Rebuttal 1 in one sentence.]

**Rebuttal 3 — [Tactic Name] | ⚠️ Use If Others Fail**
[2–4 sentence rebuttal. Note the tradeoff or risk of using this approach in one sentence.]

---

**Coaching Note:** [One sentence of situational advice — what to listen for in the prospect's response that signals progress or continued resistance.]
