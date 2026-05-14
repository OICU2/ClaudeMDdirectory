---
name: persona-pain-point-message-matrix
description: >
  Creates a structured matrix mapping each target persona's core pain points to tailored messaging angles and supporting proof points. Use when someone says "we need messaging for different audiences," asks about "how to speak to each buyer persona," or wants to "align our copy to customer pain points." Also triggered when a user needs to "build a messaging framework" or wants to "map pain points to value propositions."
category: marketing
tags: [messaging, personas, positioning, copywriting, go-to-market]
author: community
---

# Persona Pain Point Message Matrix

This skill builds a structured matrix that connects each target persona to their specific pain points, resonant messaging angles, and concrete proof points so marketing and sales teams can communicate with precision.

## Workflow

1. **Gather inputs** — Ask the user for: (a) list of target personas (job titles, roles, or segments), (b) product or service being marketed, and (c) any known pain points, customer quotes, or research. If none provided, infer common personas from the product category and flag assumptions.

2. **Define personas** — For each persona, establish: role context, primary goals, and the lens through which they evaluate solutions (e.g., ROI, risk reduction, time savings, status).

3. **Identify pain points** — For each persona, list 3–5 specific, concrete pain points. Avoid generic language ("wastes time"). Use precise, emotional framing ("spends 6+ hours weekly manually reconciling data that should be automated").

4. **Develop messaging angles** — For each pain point, write one focused messaging angle (1–2 sentences) that speaks directly to that persona's language, priorities, and emotional state. The angle must position the product as the natural resolution.

5. **Add proof points** — For each messaging angle, provide 1–2 supporting proof points: statistics, customer outcomes, case study results, feature specifics, or third-party validation. If the user hasn't provided real data, flag placeholders clearly with `[INSERT: ...]`.

6. **Check for overlap and gaps** — Review the completed matrix to flag: (a) messaging angles that sound identical across personas (differentiate them), (b) personas with weak or missing proof points, (c) pain points that aren't actually addressed by the product.

## Output Format

Produce one table per persona, followed by a summary section.

**Per-persona table:**

### Persona: [Title / Segment]
*Context: [1-sentence description of their role and mindset]*

| Pain Point | Messaging Angle | Proof Points |
|---|---|---|
| [Specific pain point 1] | [Resonant message targeting this pain] | [Stat, outcome, or feature evidence] |
| [Specific pain point 2] | [Resonant message targeting this pain] | [Stat, outcome, or feature evidence] |
| [Specific pain point 3] | [Resonant message targeting this pain] | [Stat, outcome, or feature evidence] |

**After all persona tables, include:**

### Matrix Summary
- **Shared themes across personas:** [Common pain points or angles that appear across multiple personas]
- **Differentiators per persona:** [What makes each persona's messaging distinct]
- **Proof point gaps:** [List any placeholders that need real data]
- **Recommended priority persona:** [Which persona the messaging is strongest for and why]

Length: As long as needed to cover all personas thoroughly. Do not truncate. Use markdown tables throughout.
