---
name: customer-review-to-ad-headline-extractor
description: >
  Mines customer review text to identify high-performing ad headline candidates by surfacing emotionally resonant phrases and specific benefit claims. Use when someone wants to turn reviews into ad copy, asks for headline ideas from customer feedback, needs to find what customers actually value about a product, wants to extract marketing language from testimonials, or is looking to improve ad performance using voice-of-customer data.
category: marketing
tags: [copywriting, reviews, ad-copy, voice-of-customer, headlines]
author: community
---

# Customer Review to Ad Headline Extractor

This skill analyzes raw customer review text to extract and rank ad headline candidates based on emotional intensity, specificity, and benefit clarity, giving marketers ready-to-test copy grounded in real customer language.

## Extraction Workflow

1. **Ingest reviews**: Accept raw review text in any format — pasted bulk text, numbered lists, CSV-style entries, or single reviews.

2. **Identify high-signal phrases** by scanning for:
   - Specific outcomes with numbers or timeframes ("lost 12 pounds in 3 weeks," "saved 2 hours every morning")
   - Before/after contrasts ("I used to dread Mondays, now I actually look forward to them")
   - Superlatives grounded in specifics ("the only tool that actually synced without crashing")
   - Emotional peak moments ("I actually cried when I saw the results")
   - Skepticism-to-believer arcs ("I was skeptical but now I tell everyone")
   - Vivid sensory or situational details that paint a picture

3. **Discard low-signal phrases**: Ignore generic praise ("great product," "love it," "highly recommend") unless paired with a specific reason.

4. **Rewrite each extracted phrase** into 2–3 headline variants:
   - One direct/literal version preserving the customer's original language
   - One punchy/condensed version under 8 words
   - One question or curiosity-gap version where appropriate

5. **Score each headline** on two axes:
   - **Specificity** (1–5): Does it contain a concrete detail, number, or named outcome?
   - **Emotional pull** (1–5): Does it trigger desire, relief, curiosity, or fear of missing out?

6. **Flag the top 5 headlines** with the highest combined scores for immediate testing priority.

## Output Format

Produce a structured list with the following sections:

**Extracted Phrases (raw)**
- Bullet list of the original customer phrases identified as high-signal, quoted verbatim, with the source review noted if multiple reviews were provided.

**Headline Variants**
For each extracted phrase, output a numbered block:
```
[#]. Source phrase: "[verbatim quote]"
   a. Direct: [headline]
   b. Punchy: [headline]
   c. Curiosity: [headline — only if applicable]
   Specificity: [1–5] | Emotional Pull: [1–5] | Combined: [sum]
```

**Top 5 Picks**
A ranked shortlist of the five highest-scoring headlines, formatted as:
```
1. [Headline] — Score: [X/10] — Why: [one sentence rationale]
```

**Usage Notes**
2–3 sentences on which headlines are best suited for which ad formats (e.g., Facebook primary text, Google responsive search ads, landing page hero copy) based on length and tone.
