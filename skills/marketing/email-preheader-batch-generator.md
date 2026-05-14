---
name: email-preheader-batch-generator
category: marketing
description: >
  Generates multiple preheader text variants for a batch of email campaigns, ensuring each preheader complements its subject line without repeating it and stays within 85–140 character limits. Use when someone says "I need preheaders for my email campaigns," asks about writing preview text for a series of emails, or wants to create preheader variations for A/B testing. Also activates when someone shares a list of subject lines and needs matching preview copy, or wants to optimize email open rates with better preheader text.
tags: [email-marketing, copywriting, preheader, campaign, batch]
author: community
---

# Email Preheader Batch Generator

This skill generates multiple preheader text variants for each email subject line in a batch, complementing (never repeating) the subject line while staying within inbox preview character limits.

## Workflow

1. **Collect inputs** — Ask the user to provide:
   - A list of email subject lines (numbered or bulleted)
   - Target character limit (default: 85–140 characters if not specified)
   - Brand tone (e.g., professional, playful, urgent, conversational)
   - Number of variants per subject line (default: 3)
   - Optional: campaign context, audience segment, or CTA goal

2. **Analyze each subject line** — Identify:
   - The core message or hook already conveyed
   - What information is missing that would add curiosity or value
   - Emotional angle, urgency, or benefit that can be extended

3. **Write preheader variants** — For each subject line, generate the requested number of variants following these rules:
   - **Never repeat words or phrases** already in the subject line
   - **Extend the story** — add a benefit, detail, question, or emotional pull the subject line left open
   - **Stay within character limit** — count characters and flag any that exceed the limit
   - **Avoid filler openers** like "In this email..." or "Click here to..."
   - **Front-load value** — strongest words go first in case text is cut off
   - **Each variant must use a different angle**: e.g., benefit-led, curiosity-driven, urgency-based, social proof, or question-format

4. **Flag edge cases** — Note any subject lines that are already long or self-contained, and explain the preheader strategy chosen to avoid redundancy.

5. **Offer iteration** — After delivering the batch, ask if the user wants to swap angles, adjust tone, shorten/lengthen variants, or test a specific variant against a different subject line.

## Output Format

Deliver results as a structured list, one block per campaign email:

---
**Email [#]: [Subject Line]**

- Variant A ([angle, e.g., benefit-led], [X chars]): [Preheader text]
- Variant B ([angle, e.g., curiosity], [X chars]): [Preheader text]
- Variant C ([angle, e.g., urgency], [X chars]): [Preheader text]

---

After all emails are processed, include a short **Batch Notes** section (3–5 bullets) summarizing:
- Angles used most frequently and why
- Any subject lines that were difficult to complement and the strategy applied
- Recommendations for A/B testing priority
