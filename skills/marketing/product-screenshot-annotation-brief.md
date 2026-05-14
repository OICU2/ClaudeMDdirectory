---
name: product-screenshot-annotation-brief
category: marketing
description: >
  Generates a structured brief for annotating product screenshots used in marketing materials,
  specifying which UI features to highlight, what callout labels to apply, and how to sequence
  visual emphasis for maximum clarity. Use when someone says "I need to annotate my product
  screenshots," asks about highlighting features in a UI screenshot, wants to create a visual
  guide for a product walkthrough, needs callout copy for a landing page screenshot, or wants
  to document which parts of a screenshot to emphasize for an ad or tutorial.
tags: [screenshots, annotation, visual-marketing, product-ui, callouts]
author: community
---

# Product Screenshot Annotation Brief

This skill produces a ready-to-hand-off brief that tells a designer or marketer exactly what to annotate on each product screenshot, including which elements to highlight, what text to place in callouts, and the intended audience focus.

## Annotation Brief Workflow

1. **Identify the screenshot context** — Determine the product area shown (onboarding, dashboard, checkout, settings, etc.), the marketing channel it will appear in (landing page, email, ad, help doc), and the target audience (new users, power users, prospects).

2. **Extract key features to highlight** — List every UI element in the screenshot that supports the marketing message. Prioritize by audience pain point, not visual prominence. Limit to 3–6 annotations per screenshot to avoid clutter.

3. **Assign annotation type to each element** — Choose from:
   - **Callout bubble** — for explaining a specific button, field, or icon
   - **Arrow + label** — for pointing to a small or non-obvious element
   - **Highlight box** — for framing an entire panel or section
   - **Step number badge** — for sequential workflows

4. **Write callout copy** — For each annotation, write:
   - A label (2–5 words, title case)
   - A supporting caption (1 sentence, benefit-focused, under 15 words)
   - The exact UI element name or coordinates/region description for the designer

5. **Define visual hierarchy** — Rank annotations 1–N to indicate which should be visually dominant. The top-ranked annotation should align with the primary marketing claim.

6. **Add designer notes** — Specify brand color to use for annotation elements, whether dark or light mode screenshot is required, and any areas to blur or redact (e.g., sensitive data, competitor content).

## Output Format

Produce a brief with the following structure for each screenshot:

---

**Screenshot Brief: [Screenshot Name or ID]**

- **Channel:** [Landing page / Email / Ad / Help doc]
- **Target Audience:** [One sentence describing who will see this]
- **Primary Marketing Message:** [One sentence — the core claim this screenshot supports]

**Annotations:**

| # | Element | Region/Coordinates | Annotation Type | Label | Caption |
|---|---------|-------------------|-----------------|-------|---------|
| 1 | [UI element name] | [Top-left area / Button in nav / etc.] | [Callout bubble / Arrow / Highlight box / Step badge] | [Short Label] | [Benefit-focused sentence under 15 words.] |
| 2 | ... | ... | ... | ... | ... |

**Visual Hierarchy Note:** Annotation #[N] should be most prominent. Use [brand color] for all annotation elements.

**Designer Notes:**
- Screenshot mode: [Light / Dark]
- Redact: [Any sensitive fields — e.g., email addresses, billing info]
- Aspect ratio required: [e.g., 16:9, 1:1, 4:5]

---

If multiple screenshots are provided, repeat this block for each one. End with a one-paragraph **Usage Summary** stating how all annotated screenshots work together to support the campaign or page narrative.
