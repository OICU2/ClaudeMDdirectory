---
name: insight-to-action-bridge-builder
description: >
  Translates raw research findings into structured, decision-ready recommendations by mapping each insight to a specific stakeholder action or business implication. Use when someone says "here's what the research found," asks "what should we do with these findings," or wants to turn data into decisions. Also activates when a user shares survey results, user interview notes, market analysis, or usability findings and needs to know next steps.
category: research
tags: [research, strategy, decision-making, recommendations, stakeholders]
author: community
---

# Insight-to-Action Bridge Builder

This skill converts raw research insights into concrete, prioritized recommendations by explicitly linking each finding to a stakeholder-facing action or business implication, so research never sits unused.

## Workflow

1. **Extract discrete insights**: Parse the input and identify each distinct finding. Separate observations ("users struggle with checkout") from interpretations already embedded in the text. List each insight as a standalone statement.

2. **Classify by type**: Label each insight as one of: Behavioral (what users/customers do), Attitudinal (what they think or feel), Structural (system or process gap), or Market (competitive or environmental signal). This determines how the action is framed.

3. **Identify the decision owner**: For each insight, name the stakeholder role most responsible for acting — Product, Engineering, Marketing, Leadership, Operations, UX/Design, or Sales. If ambiguous, flag it explicitly.

4. **Bridge to action**: Write one specific, verb-led action per insight. Actions must name what to do, who does it, and what outcome is expected. Avoid vague directives like "improve" or "consider." Use: "Redesign the checkout confirmation screen (Product + UX) to reduce drop-off at the payment step, targeting a 15% reduction in cart abandonment."

5. **Assign priority**: Rate each action as P1 (blocks a critical outcome), P2 (high value, near-term), or P3 (worth doing, not urgent). Base priority on impact to user or business outcome, not research recency.

6. **Flag dependencies and risks**: Note any action that requires another team, budget approval, or prior action to complete. Call out insights where the data is insufficient to act confidently and recommend a follow-up research step instead.

## Output Format

Produce a structured **Insight-to-Action Brief** with the following sections:

---

**Summary** (2–3 sentences): What the research revealed overall and the highest-leverage opportunity.

**Insight → Action Table**:

| # | Insight | Type | Owner | Recommended Action | Priority |
|---|---------|------|-------|--------------------|----------|
| 1 | [Finding] | [Type] | [Role] | [Specific action with outcome] | P1/P2/P3 |

**Dependencies & Risks** (bullet list): Any blockers, data gaps, or cross-team needs.

**Immediate Next Step**: One sentence naming the single highest-priority action to take this week.

---

Length scales with input: 3–5 insights should produce a one-page brief; 10+ insights may warrant grouping by theme before tabling. Always keep the table as the centerpiece.
