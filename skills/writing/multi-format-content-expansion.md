---
name: multi-format-content-expansion
description: >
  Transforms a single piece of writing into structurally adapted versions across multiple
  target formats without changing the core message or ideas. Use when someone says "repurpose
  this content," asks to "expand this into multiple formats," wants to "turn this into a thread
  and email," needs to "adapt this for different channels," or says "get more mileage out of
  this piece." Supports email, Twitter/X thread, LinkedIn post, slide deck outline, newsletter
  section, short-form post, and blog summary formats.
category: writing
tags: [content-repurposing, multi-format, writing, adaptation, content-strategy]
author: community
---

# Multi-Format Content Expansion

Takes one core piece of writing and produces structurally adapted versions for each requested
format, preserving the original message while matching the conventions and constraints of each
target medium.

## Expansion Workflow

1. **Extract the core** — Identify the central claim, key supporting points, and intended
   audience from the source content. Note the tone (formal, casual, technical, inspirational).

2. **Clarify target formats** — If the user has not specified formats, ask which of the
   following they want: email, Twitter/X thread, LinkedIn post, slide deck outline, newsletter
   section, short-form post (under 280 characters), or blog summary. Accept multiple formats
   in one request.

3. **Map content to format constraints** — Apply these rules per format before writing:
   - **Email**: Subject line + greeting + 2–4 short paragraphs + clear CTA + sign-off.
     Tone matches relationship context (cold, warm, internal).
   - **Twitter/X thread**: Hook tweet → 4–8 numbered tweets → summary/CTA tweet.
     Each tweet ≤ 280 characters. No filler tweets.
   - **LinkedIn post**: Strong opening line (no "I'm excited to share"), 3–5 short
     paragraphs or punchy line-breaks, optional bullet list, closing question or CTA.
     500–1200 words max.
   - **Slide deck outline**: Title slide → problem/context → 3–6 content slides with
     one headline claim each → summary slide. Bullet points are speaker notes, not prose.
   - **Newsletter section**: Subheading + 2–3 paragraphs + one takeaway or link block.
     Conversational but substantive.
   - **Short-form post**: Single punchy statement or question. ≤ 280 characters.
     Standalone and scroll-stopping.
   - **Blog summary**: 100–150 word abstract covering the what, why, and key insight.

4. **Adapt structure, not substance** — Do not add new claims, invent statistics, or
   contradict the source. Cut, compress, and reorder; never fabricate.

5. **Preserve voice** — Match the tone of the original unless the user explicitly asks
   for a tone shift (e.g., "make the email more formal").

6. **Flag gaps** — If the source content is too thin to produce a specific format
   (e.g., a slide deck needs more distinct points), note what additional input would
   help rather than padding with filler.

## Output Format

Produce each requested format as a clearly labeled section using a level-2 markdown
heading (e.g., `## Email Version`, `## Twitter/X Thread`). Within each section:

- Show the complete, ready-to-use draft — not a description of what it would say.
- For threads, number each tweet and show character count in brackets (e.g., `[247/280]`).
- For slide decks, use a numbered list where each item is `Slide N — [Headline]: [bullet notes]`.
- Do not include meta-commentary like "here's your email" inside the section body.
- End the full response with a `## Adaptation Notes` section that lists any content
  decisions made (cuts, tone adjustments, structural changes) in 3–6 bullet points.
