---
name: demo-script-builder
category: sales
description: >
  Creates structured product demonstration scripts tailored to specific buyer personas, highlighting features that address their known pain points. Use when someone says "help me build a demo script," asks about "how to present this product to a specific buyer," or wants to "tailor a demo for a persona." Also activates when someone needs to "prepare for a product walkthrough" or says "I have a sales demo coming up."
tags: [sales, demos, personas, scripts, presentations]
author: community
---

# Demo Script Builder

This skill generates complete, persona-specific product demonstration scripts that map product features directly to buyer pain points, giving sales reps a ready-to-use narrative for any audience.

## Script Building Workflow

1. **Gather persona details** — Ask for the buyer's role, industry, company size, and any known pain points or objections. If the user provides partial info, infer reasonable defaults and state your assumptions.
2. **Identify top pain points** — Extract or derive 3–5 pain points most relevant to this persona. Rank them by urgency from the buyer's perspective.
3. **Map features to pain points** — For each pain point, select the product feature or workflow that most directly resolves it. Avoid listing features without a corresponding problem.
4. **Structure the narrative arc** — Organize the demo in this sequence:
   - **Hook (30 sec):** Open with a pain point statement that makes the buyer say "that's exactly our problem."
   - **Context setting (1–2 min):** Briefly confirm the buyer's world before showing the product.
   - **Feature walkthroughs (3–5 segments):** One segment per pain point. Each segment: state the problem → show the feature → quantify the benefit.
   - **Objection inoculation (1 min):** Briefly surface and neutralize the top anticipated objection.
   - **Call to action (30 sec):** Specific next step tied to the buyer's decision timeline.
5. **Write speaker notes** — For each segment, include a short note on tone, what to watch for in the buyer's reaction, and a transition line to the next segment.
6. **Flag customization gaps** — Clearly mark any placeholder text (e.g., `[INSERT CUSTOMER METRIC]`) where the seller needs to add real data before using the script.

## Output Format

Produce a single structured demo script with these sections, in order:

```
## Demo Script: [Product Name] for [Persona Title]
**Estimated Runtime:** X minutes
**Persona:** [Role, Industry, Company Size]
**Core Pain Points Addressed:** [Bulleted list of 3–5]

---

### Hook
[Script line(s)] | *Speaker note: ...*

### Context Setting
[Script line(s)] | *Speaker note: ...*

### Segment 1: [Pain Point Label]
- **Problem framing:** [Script line]
- **Feature shown:** [Feature name + one-line description]
- **Benefit statement:** [Quantified or concrete outcome]
- **Transition:** [Line bridging to next segment]
*Speaker note: ...*

[Repeat Segment structure for each pain point]

### Objection Inoculation
**Likely objection:** [State it]
**Response:** [Script line]

### Call to Action
[Script line(s)]

---
**Customization Checklist:**
- [ ] [Placeholder 1 and where it appears]
- [ ] [Placeholder 2 and where it appears]
```

Length: 400–800 words of script content. Speaker notes are brief (1–2 sentences each). Every feature mentioned must connect to a named pain point — no orphan features.
