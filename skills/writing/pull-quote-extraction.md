---
name: pull-quote-extraction
description: >
  Scans long-form content to identify the most impactful, shareable sentences and formats them as polished pull quotes ready for editorial layout or social distribution. Use when someone says "find the best quotes from this," asks to "pull highlights for our newsletter," or wants to "identify shareable moments in this article." Also triggers when someone needs to "create pull quotes for design" or wants to "surface the most compelling lines" from a piece.
category: writing
tags: [pull-quotes, content-curation, editorial, social-media, layout]
author: community
---

# Pull Quote Extraction

This skill scans long-form content to identify and format the most impactful, self-contained sentences as pull quotes suitable for editorial layouts, social cards, or distribution snippets.

## Extraction Workflow

1. **Read the full content first** — scan for emotional peaks, surprising claims, strong opinions, concrete data points, and memorable phrasing before selecting anything.

2. **Apply the pull quote criteria** — a strong pull quote must meet at least three of these:
   - Stands alone without context from the surrounding text
   - Contains a strong verb, vivid image, or surprising assertion
   - Is between 15–50 words (tight enough to scan, rich enough to resonate)
   - Would make someone stop scrolling or want to read more
   - Captures the piece's core argument or emotional thesis

3. **Reject weak candidates** — eliminate quotes that require surrounding context to make sense, are purely factual without insight, use heavy jargon, or are transitional rather than declarative.

4. **Rank by impact** — order extracted quotes from strongest to weakest based on shareability and emotional resonance. The first quote should be the single best candidate for a hero pull quote.

5. **Note source location** — tag each quote with its approximate location (intro, middle, closing) so designers and editors can reference the original.

6. **Flag intended use if known** — if the request specifies print layout, social card, newsletter, or slideshow, adjust length and tone guidance accordingly.

## Output Format

Produce a numbered list of 3–7 pull quotes in this structure:

---
**Pull Quote [#]** *(location: intro / body / closing)*
> "[Exact quote text as it appears in the source]"

**Why it works:** One sentence explaining the quote's impact — what makes it resonate or shareable.
**Best for:** [print layout / social card / newsletter callout / presentation slide]

---

After all quotes, add a single line:

**Recommended hero quote:** [Quote number] — [One sentence justification.]

- Preserve the author's exact wording; never paraphrase
- If fewer than 3 strong candidates exist, say so explicitly rather than padding with weak quotes
- For social use, flag any quotes over 280 characters with a suggested trim
