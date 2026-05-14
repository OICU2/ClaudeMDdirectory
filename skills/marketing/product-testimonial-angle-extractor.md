---
name: product-testimonial-angle-extractor
description: >
  Analyzes customer testimonials to surface high-converting benefit angles and emotional triggers for marketing reuse. Use when someone says "I have testimonials I'm not using," asks about turning reviews into ad copy, or wants to repurpose customer feedback into campaigns. Also activates when someone needs to find the emotional core of what customers love or wants to extract winning angles from social proof.
category: marketing
tags: [testimonials, copywriting, ad-copy, conversion, voice-of-customer]
author: community
---

# Product Testimonial Angle Extractor

This skill parses raw customer testimonials to identify reusable benefit angles, emotion triggers, and exact language patterns that can be directly lifted into ads, landing pages, and email campaigns.

## Extraction Workflow

1. **Ingest testimonials** — Accept raw testimonials in any format (pasted text, bullet list, CSV column). If fewer than 5 are provided, note that patterns may be limited.

2. **Tag each testimonial** across four dimensions:
   - **Primary benefit** — the functional outcome the customer mentions (e.g., saved time, lost weight, closed more deals)
   - **Emotion trigger** — the feeling expressed or implied (e.g., relief, pride, surprise, belonging)
   - **Before state** — what problem or frustration existed before the product
   - **Objection dissolved** — any skepticism the customer admits they had before buying

3. **Cluster by angle** — Group testimonials that share the same benefit or emotion. Name each cluster with a short angle label (e.g., "Speed Win," "Skeptic Converted," "Identity Shift").

4. **Extract power phrases** — Pull 1–3 verbatim phrases per testimonial that are emotionally loaded or unusually specific. Flag these as ready-to-use copy fragments.

5. **Score angle frequency** — Count how many testimonials support each angle. Higher frequency = higher confidence for campaign use.

6. **Generate copy applications** — For the top 3 angles by frequency, produce one concrete example of how to use that angle in:
   - A Facebook/Instagram ad headline
   - A landing page subheadline
   - An email subject line

## Output Format

Produce a structured report with these sections:

**Angle Clusters Table**
| Angle Label | Benefit | Emotion Trigger | Testimonial Count |
|-------------|---------|-----------------|-------------------|

**Power Phrases Bank**
Bulleted list of verbatim customer phrases, each tagged with its angle label.

**Before/After Pairs**
Up to 5 strongest before-state → after-state contrasts pulled directly from testimonials.

**Top 3 Angles — Copy Applications**
For each top angle:
- Angle name and frequency
- Facebook/Instagram ad headline
- Landing page subheadline
- Email subject line

**Gaps & Recommendations**
2–4 bullet notes on missing angles, underrepresented emotions, or testimonial types worth collecting to strengthen coverage.

Keep the full output scannable. Use tables and bullets throughout. No paragraph-heavy analysis.
