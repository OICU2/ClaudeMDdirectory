---
name: content-offer-ab-variant-matrix
description: >
  Generates a structured matrix of headline, subheadline, and CTA variants for content offers to enable systematic A/B testing. Use when someone says "I need variants for my landing page," asks about testing different messages for a content offer, wants to create A/B test copy for a lead magnet or gated asset, needs multiple headline options for an ebook or whitepaper campaign, or is setting up ad creative testing for a content download.
category: marketing
tags: [ab-testing, copywriting, landing-pages, lead-generation, content-marketing]
author: community
---

# Content Offer A/B Variant Matrix

This skill generates a complete matrix of headline, subheadline, and CTA combinations for a content offer so Claude can support systematic A/B testing across landing pages, paid ads, and email campaigns.

## Variant Generation Workflow

1. **Extract offer details** — Identify the content offer type (ebook, whitepaper, webinar, template, checklist, etc.), target audience, primary pain point, and desired outcome before writing any copy.

2. **Define messaging angles** — Generate 4 distinct angles to test across all variants:
   - Pain/problem-focused (what they're struggling with)
   - Outcome/benefit-focused (what they'll achieve)
   - Curiosity/intrigue-focused (what they don't know yet)
   - Social proof/authority-focused (why this source is credible)

3. **Write headlines for each angle** — Produce 2 headline options per angle (8 total). Headlines must be specific, concrete, and under 12 words. Include numbers or specifics where possible (e.g., "7 Ways," "In 30 Days," "Without X").

4. **Write subheadlines for each angle** — Produce 1 subheadline per angle (4 total) that expands on the headline promise and addresses a specific objection or reinforces the benefit. Keep under 25 words.

5. **Write CTA button variants** — Produce 6 CTA options ranging across:
   - Action-oriented ("Download the Guide")
   - Outcome-oriented ("Start Growing My Pipeline")
   - Low-friction ("Get Instant Access")
   - Personalized ("Send Me the Checklist")

6. **Flag recommended pairings** — Identify 3 high-priority A/B test combinations by pairing a headline + subheadline + CTA that share the same messaging angle for consistency.

7. **Note what each variant tests** — For each recommended pairing, write one sentence explaining the hypothesis (e.g., "Tests whether outcome-focused language outperforms problem-focused language for this audience").

## Output Format

Produce the following structured output:

**OFFER SUMMARY**
- Offer type, target audience, primary pain point, and desired outcome (2–4 bullet points)

**MESSAGING ANGLES**
- List all 4 angles with a one-line description each

**HEADLINE VARIANTS** (table format)
| # | Angle | Headline |
|---|-------|----------|
(8 rows, 2 per angle)

**SUBHEADLINE VARIANTS** (table format)
| # | Angle | Subheadline |
|---|-------|-------------|
(4 rows, 1 per angle)

**CTA VARIANTS** (numbered list)
1–6 CTA options labeled by type

**RECOMMENDED A/B TEST PAIRINGS**
For each of the 3 pairings:
- Pairing label (e.g., "Test A")
- Headline used
- Subheadline used
- CTA used
- Hypothesis (1 sentence)

Total output should be comprehensive but scannable — use tables and clear section headers throughout. Do not include implementation instructions or platform-specific guidance unless explicitly asked.
