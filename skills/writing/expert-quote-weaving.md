---
name: expert-quote-weaving
description: >
  Integrates raw expert quotes or interview excerpts smoothly into existing article drafts with proper attribution and contextual framing. Use when someone says "I have quotes from an interview," asks to "add expert voices to my draft," or wants to "weave in this source material" or "incorporate what the expert said" or "embed these quotes into my article."
category: writing
tags: [quotes, attribution, editing, interviews, journalism]
author: community
---

# Expert Quote Weaving

This skill takes raw expert quotes or interview excerpts and embeds them naturally into existing article drafts with contextual setup, attribution, and smooth prose transitions.

## Integration Workflow

1. **Audit the draft first** — Identify 3–5 natural anchor points where expert perspective would strengthen the argument, fill an evidence gap, or add credibility to a claim already present in the text.

2. **Assess each quote** — For every quote provided, determine:
   - The core claim or insight the quote supports
   - Whether it needs trimming (use ellipsis for omissions), paraphrasing, or can run verbatim
   - The appropriate quote length: punchy quotes (under 30 words) run inline; longer quotes (30+ words) become block quotes

3. **Write contextual lead-ins** — Before each quote, write 1–2 sentences that:
   - Establish why this voice matters (credential + relevance, e.g., "Dr. Yuen, who spent a decade studying urban heat islands, argues...")
   - Signal what the reader should take from the quote
   - Connect logically to the paragraph before it

4. **Format attribution consistently** — Use the author's preferred citation style if specified; otherwise default to inline attribution: Name, Title, Organization. Never drop attribution to the end of a long quote block.

5. **Write exit sentences** — After each embedded quote, add 1 sentence that interprets, extends, or pivots from the quote back into the article's main argument. Do not let quotes be the last word in a paragraph.

6. **Check flow across the full draft** — After all quotes are placed, read for quote density. Flag if more than two quotes appear within 200 words of each other and suggest reordering.

## Output Format

Return the complete revised article draft with quotes woven in. Use this structure:

- **Full revised draft** with quotes integrated inline (no separate "before/after" sections unless requested)
- **Block quotes** formatted with `>` markdown for any quote exceeding 30 words
- **Attribution** bolded on first mention of each expert: **Jane Doe, Senior Researcher, MIT Media Lab**
- **Inline comments** (in brackets, italics) immediately after each newly inserted passage, e.g., *[Quote added here — supports claim about retention rates in paragraph 3]*
- At the end, a short **Integration Notes** section (bullet list, max 5 items) flagging any quotes that were too vague to place confidently, any attribution details that were missing, and any sections of the draft that still lack expert support
