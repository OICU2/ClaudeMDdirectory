---
name: hero-image-alt-text-batch-generator
description: >
  Generates SEO-optimized, accessibility-compliant alt text for batches of marketing images by analyzing image context, surrounding copy, and target keyword priorities. Use when someone says "write alt text for these images," asks about making their image library accessible, wants to optimize hero images for search, needs to process multiple product or campaign images at once, or says "generate alt descriptions for our marketing assets."
category: marketing
tags: [seo, accessibility, alt-text, images, marketing, wcag, batch-processing]
author: community
---

# Hero Image Alt Text Batch Generator

This skill produces SEO-optimized, WCAG-compliant alt text for batches of marketing images by combining image descriptions, surrounding page copy, and keyword priorities into concise, purposeful attribute strings.

## Workflow

### 1. Collect Inputs Before Writing
Ask for the following if not already provided:
- Image filenames or URLs (or descriptions if images cannot be shared)
- Page context: headline, body copy, or page URL where each image lives
- Target keywords or SEO priorities (primary + secondary, if available)
- Brand voice notes (e.g., formal, playful, technical)
- Any existing alt text to improve (optional)

### 2. Analyze Each Image
For every image in the batch:
- Identify the **primary subject** (person, product, scene, concept)
- Identify **marketing intent** (inspire, convert, inform, build trust)
- Note **visible text or logos** that must be included in alt text
- Flag decorative images that should receive `alt=""` instead of descriptive text

### 3. Apply Alt Text Rules
Write each alt text string following these constraints:
- **Length:** 50–160 characters (aim for 100–125 as the sweet spot)
- **Lead with the subject**, not "image of" or "photo of" — screen readers announce images automatically
- **Embed the primary keyword naturally** — never force-fit; skip it if it reads awkwardly
- **Describe function over appearance** for CTA or button images (e.g., "Download the 2024 Marketing Report" not "blue button with arrow")
- **Include brand name** only when it adds meaningful context (product shots, logos, team photos)
- **Avoid keyword stuffing** — one keyword per alt string maximum
- **Use sentence case**, no trailing periods unless the text is a full sentence
- **For decorative dividers, backgrounds, or abstract textures:** output `alt=""`

### 4. Quality Check Each Entry
Before finalizing, verify:
- [ ] No alt text starts with "image," "photo," "graphic," or "picture"
- [ ] Character count is within 50–160
- [ ] Primary keyword appears in at least 60% of non-decorative images
- [ ] Decorative images are correctly marked `alt=""`
- [ ] Alt text makes sense read aloud in isolation (screen reader test)
- [ ] No duplicate alt text across the batch

### 5. Flag Edge Cases
Explicitly call out:
- Images that are ambiguous without more context (request clarification)
- Images containing text that cannot be fully captured in 160 characters (recommend a `longdesc` or visible caption)
- Images where the keyword would create unnatural language (note why it was omitted)

## Output Format

Produce a structured table followed by implementation-ready HTML snippets.

**Table (one row per image):**

| # | Filename / ID | Alt Text | Char Count | Keyword Used | Notes |
|---|--------------|----------|------------|--------------|-------|
| 1 | hero-banner-spring.jpg | Spring skincare collection displayed on a marble surface | 57 | skincare collection | — |
| 2 | cta-button-download.png | Download the free email marketing guide | 40 | email marketing | Functional image |
| 3 | bg-texture-linen.jpg | | 0 | N/A | Decorative — alt="" |

**HTML Snippets block** (after the table):

```html
<!-- Image 1: hero-banner-spring.jpg -->
<img src="hero-banner-spring.jpg" alt="Spring skincare collection displayed on a marble surface">

<!-- Image 2: cta-button-download.png -->
<img src="cta-button-download.png" alt="Download the free
