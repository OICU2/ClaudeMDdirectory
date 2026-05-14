---
name: interview-transcript-to-quotes-shortlist
description: >
  Parses a raw interview transcript and extracts the strongest quotable passages ranked by impact, specificity, and relevance to a given topic. Use when someone shares an interview transcript and wants to find the best quotes, asks which parts of an interview are worth publishing, or needs to pull standout moments from a conversation. Also activates when someone wants to turn interview notes into a usable quotes bank or says they need to shortlist quotes for an article or feature.
category: writing
tags: [interviews, quotes, journalism, content-editing, extraction]
author: community
---

# Interview Transcript to Quotes Shortlist

This skill analyzes a raw interview transcript and surfaces the most quotable passages, ranked and annotated so writers and editors can quickly identify the strongest material for articles, features, or reports.

## Extraction and Ranking Workflow

1. **Read the full transcript first** before selecting anything. Note the overall arc, key themes, and any moments of surprising candor, specificity, or emotion.

2. **Identify candidate quotes** by scanning for:
   - Concrete details, numbers, or named examples (specificity)
   - Strong opinions, admissions, or counterintuitive claims (impact)
   - Phrases that could serve as a headline or section anchor (pull-quote potential)
   - Moments of vulnerability, humor, or unexpected honesty (human texture)
   - Clear, self-contained statements that require minimal context to land (usability)

3. **Discard weak candidates**: remove filler, repetition, quotes that need heavy editing to make sense, or passages that are only meaningful with two paragraphs of surrounding context.

4. **Apply topic filter**: if the user specified a topic or angle, re-score all candidates against that focus. Promote quotes that speak directly to it; demote off-topic material even if it is otherwise strong.

5. **Rank the shortlist** using this priority order:
   - Tier 1 (Must use): Highly specific + emotionally resonant + on-topic
   - Tier 2 (Strong option): Two of the three above criteria met
   - Tier 3 (Backup): One criterion met, useful for context or filler

6. **Trim each quote** to its tightest form. Use ellipses to cut intervening filler only where meaning is fully preserved. Flag any quote that required cuts with a note.

7. **Do not paraphrase**. Every entry must use the speaker's exact words, punctuated as spoken.

## Output Format

Produce a numbered shortlist with the following structure for each entry:

---
**[#]. Tier [1/2/3] — [3–5 word label summarizing the quote's theme]**

> "[Exact quote text, trimmed if needed]"

- **Why it works**: One sentence explaining impact, specificity, or relevance.
- **Best use**: Suggested placement (e.g., lede, pull quote, closing line, supporting detail).
- **Edits made**: Note any ellipses or cuts, or write "None."
---

- Aim for 8–15 quotes on the shortlist (more for long transcripts, fewer for short ones).
- List Tier 1 quotes first, then Tier 2, then Tier 3.
- After the shortlist, add a **"Themes Surfaced"** section: a 3–5 bullet summary of the dominant topics and angles the transcript supports, useful for shaping the final piece.
