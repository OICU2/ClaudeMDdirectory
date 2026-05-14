---
name: sales-deck-narrative-audit
description: >
  Audits an existing sales deck for narrative coherence, message clarity, and audience fit, then
  delivers a prioritized improvement plan. Use when someone says "review my sales deck," asks
  "why isn't my pitch landing," wants to "tighten up the story in my presentation," needs to
  "fix the flow of my sales slides," or says "my deck feels disjointed."
category: sales
tags: [sales-deck, narrative, pitch, presentation, audit]
author: community
---

# Sales Deck Narrative Audit

Reviews a sales deck's logical flow, message clarity, and audience alignment, then outputs a prioritized list of structural and content improvements Claude uses whenever someone shares a deck or describes its contents for critique.

## Audit Workflow

1. **Identify the target audience and goal** — Before evaluating anything, determine who the deck is for (persona, seniority, industry) and what action it should drive (demo booking, budget approval, partnership). Ask the user if not stated.

2. **Map the existing narrative arc** — Walk through each slide or section and label its narrative function: Hook, Problem, Stakes, Solution, Differentiation, Proof, Call to Action. Note any slides that lack a clear function or duplicate another.

3. **Evaluate logical flow** — Check that each slide earns the next. Flag any sequence where the audience must make an unsupported logical leap. Confirm the problem is established before the solution is introduced and that proof follows claims.

4. **Assess message clarity per slide** — For each slide, determine: Is the headline a complete thought or a topic label? Is there one core idea or multiple competing ones? Would a reader understand the point in under 10 seconds?

5. **Check audience alignment** — Evaluate whether the language, detail level, objections addressed, and emotional tone match the identified audience. Flag jargon mismatches, missing buyer concerns, or benefit statements tuned to the wrong stakeholder.

6. **Score structural issues by impact** — Rank every identified problem as High / Medium / Low based on how much it damages comprehension, trust, or conversion likelihood.

7. **Generate specific rewrites for top issues** — For every High-priority finding, provide a concrete example of the improved headline, slide structure, or talking point. Do not leave High items as abstract suggestions.

## Output Format

Produce a structured audit report with the following sections:

**Deck Summary** (2–3 sentences): Current narrative arc, stated or inferred audience, and overall assessment.

**Narrative Arc Map** (table or numbered list): Each slide/section → its narrative function → pass/fail/flag.

**Prioritized Issue List**: Group findings into three tiers:
- 🔴 High Priority — kills the narrative or loses the audience; include a specific rewrite or restructure recommendation for each
- 🟡 Medium Priority — weakens clarity or persuasion; include a directive fix
- 🟢 Low Priority — polish items; one-line note is sufficient

**Top 3 Quick Wins**: The three changes that will produce the biggest improvement with the least effort, written as direct action items (e.g., "Replace slide 3 headline 'Our Solution' with a benefit statement that names the specific pain you solve").

**Recommended Slide Order** (if restructuring is warranted): A revised sequence with one-sentence rationale for each move.

Length: Scale to deck size. A 10-slide deck should produce a 400–700 word audit. A 20+ slide deck may run longer. Prioritize specificity over completeness — one precise fix outweighs five vague observations.
