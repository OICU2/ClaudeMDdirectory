---
name: feature-benefit-translation-matrix
description: >
  Converts a list of product features into audience-specific benefit statements mapped to relevant customer pain points and desired outcomes. Use when someone says "turn our features into benefits," asks how to make product specs more compelling to customers, or wants to explain why features matter to a specific audience. Also activates when someone needs to translate technical capabilities into customer value or wants to build messaging that resonates with a defined buyer persona.
category: marketing
tags: [copywriting, messaging, positioning, personas, conversion]
author: community
---

# Feature-Benefit Translation Matrix

This skill transforms raw product features into structured benefit statements tailored to specific audience segments, mapping each feature to a customer pain point and a desired outcome Claude will use it whenever product messaging needs to shift from what a product does to why it matters.

## Workflow

1. **Collect inputs** — Ask for: (a) the list of features, (b) the target audience or persona (job title, industry, or description), and (c) any known pain points or goals if available. If the user provides all three upfront, skip directly to step 2.

2. **Identify the audience lens** — Define the audience's primary frustrations, pressures, and success metrics based on the persona provided. If no persona is given, infer a primary and secondary audience from context and state your assumptions.

3. **Map each feature to a pain point** — For every feature listed, identify the specific customer problem or friction it eliminates. Be precise: name the pain, not a vague category.

4. **Write the benefit statement** — Translate the feature into a customer-facing statement using this structure: *[Feature] means you can [concrete outcome], so you no longer [pain point].* Adjust tone to match the audience (e.g., executive = ROI-focused, practitioner = efficiency-focused).

5. **Add the desired outcome** — State the positive end state the customer achieves — not just the absence of pain, but the goal they actually reach.

6. **Flag weak or untranslatable features** — If a feature is too vague, too technical without clear user impact, or redundant, flag it with a note explaining what additional context is needed to translate it effectively.

7. **Repeat for multiple personas** — If more than one audience is provided, generate a separate column or section for each persona. Benefits will differ even for the same feature.

## Output Format

Produce a matrix with one row per feature. Use this structure:

| Feature | Customer Pain Point | Benefit Statement | Desired Outcome |
|---|---|---|---|
| [Feature name] | [Specific friction or frustration] | [Feature] means you can [outcome], so you no longer [pain]. | [Positive end state] |

- Include a **Persona** header above each table if multiple audiences are covered
- Add a **⚠ Needs Clarification** row at the bottom for any flagged features, with a one-line explanation
- Length scales with input: one table row per feature, one table section per persona
- Use plain language in benefit statements — avoid jargon unless the audience is explicitly technical
- Do not restate the feature as the benefit; transformation is required for every row
