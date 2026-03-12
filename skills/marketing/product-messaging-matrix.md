---
name: product-messaging-matrix
description: >
  Creates a structured matrix mapping product features to customer pain points and
  corresponding benefit-driven messages for each target segment. Use when someone
  says "help me write messaging for my product," asks about "how to position features
  for different audiences," wants to "map pain points to benefits," needs to "create
  segment-specific messaging," or is trying to "turn features into customer value."
category: marketing
tags: [messaging, positioning, segmentation, copywriting, go-to-market]
author: community
---

# Product Messaging Matrix

Builds a structured feature-to-benefit messaging matrix across customer segments so every audience receives pain-point-specific, value-driven copy.

## Workflow

1. **Gather inputs** — Ask the user for: (a) product name and one-line description, (b) list of key features (3–8), (c) target customer segments (2–4), and (d) known pain points per segment. If any are missing, ask before proceeding.
2. **Map features to pain points** — For each feature, identify which pain point(s) it directly addresses for each segment. Discard feature-segment pairings with no meaningful pain point match.
3. **Write benefit-driven messages** — For each valid feature-segment pairing, translate the feature into a customer-outcome statement using this formula: *[Feature] means [target segment] can [outcome], so they no longer [pain point].*
4. **Apply message hierarchy** — Mark each message as Primary (highest emotional/business impact) or Secondary (supporting detail). Each segment should have exactly one Primary message per feature row.
5. **Check for differentiation** — Ensure messages across segments are meaningfully distinct in language, framing, or emphasis. If two segments share identical copy, rewrite one.
6. **Add proof hooks** — Append a short evidence suggestion (stat, testimonial type, or demo moment) to each Primary message.

## Output Format

Produce a markdown table followed by a segment summary block.

**Matrix Table** — one row per feature, columns: Feature | Pain Point Addressed | [Segment 1] Message | [Segment 2] Message | [Segment N] Message. Mark primary messages with **(P)** and secondary with **(S)**.

**Segment Summary Block** — after the table, one paragraph per segment (3–5 sentences) synthesizing that segment's primary messages into a cohesive value narrative suitable for a landing page hero section or sales one-pager intro.

**Proof Hook List** — bulleted list pairing each Primary message with its recommended evidence type (e.g., "Segment 1 / Feature A → Customer ROI case study").

Total output length: 400–800 words depending on matrix size. Use plain markdown only — no HTML, no nested tables.
