---
name: interview-quote-selection
description: >
  Analyzes a raw interview transcript and extracts the strongest, most quotable passages ranked by clarity, specificity, and narrative impact. Use when someone says "pull the best quotes from this interview," asks to find quotable moments in a transcript, wants to identify standout lines from a conversation, needs to surface compelling excerpts for an article or report, or is trying to select interview highlights for publication.
category: writing
tags: [interviews, quotes, transcripts, journalism, content-editing]
author: community
---

# Interview Quote Selection

This skill scans a raw interview transcript, identifies the most powerful and publishable quotes, and returns them ranked by their rhetorical and narrative strength.

## Quote Extraction Workflow

1. **Read the full transcript** before selecting anything — context determines what counts as strong.
2. **Identify candidate quotes** by flagging passages that contain at least one of:
   - A concrete detail, number, or specific example
   - An unexpected or counterintuitive claim
   - Emotional authenticity or vulnerability
   - A crisp summary of a complex idea
   - A turn of phrase that is memorable or distinctive
3. **Exclude weak passages** — filler ("um," "you know," "like"), redundant restatements, hedged non-answers, and throat-clearing preambles.
4. **Clean lightly if needed** — remove false starts and filler words only when doing so does not alter meaning. Flag any edits with [lightly edited].
5. **Score each quote** on three dimensions (1–5 each):
   - **Clarity**: Is it immediately understandable without surrounding context?
   - **Specificity**: Does it contain concrete detail rather than vague generality?
   - **Narrative impact**: Does it advance a story, reveal character, or provoke a reaction?
6. **Rank quotes** by combined score (max 15). Break ties by favoring specificity.
7. **Note placement potential** — label each quote as: *lede*, *supporting*, *closing*, or *standalone caption*.

## Output Format

Produce a numbered list of the top 5–10 quotes (adjust count to transcript length), ordered highest to lowest score. For each quote:

```
## Quote [N] — Score: [X/15]

> "[Exact or lightly edited quote text]"
> — [Speaker name or role, timestamp if available]

- Clarity: [score]/5
- Specificity: [score]/5
- Narrative Impact: [score]/5
- Placement: [lede / supporting / closing / standalone caption]
- Why it works: [1 sentence explaining its strength]
- Edit note: [Only include if text was changed; describe what was removed]
```

After the ranked list, add a one-paragraph **Editorial Summary** (3–5 sentences) describing the overall themes the best quotes reveal and recommending a narrative angle for the piece.
