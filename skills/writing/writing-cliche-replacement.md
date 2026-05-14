---
name: writing-cliche-replacement
description: >
  Detects overused phrases and clichés in a draft and generates fresher, more specific alternatives for each instance. Use when someone says "my writing feels stale," asks to "freshen up this text," wants to "remove clichés from a draft," says "this sounds too generic," or needs to "make my writing more original."
category: writing
tags: [editing, style, clarity, originality, proofreading]
author: community
---

# Cliché Detection and Replacement

This skill scans a piece of writing for overused expressions and clichés, then proposes specific, context-aware alternatives that preserve the author's meaning while adding freshness and precision.

## Detection and Replacement Workflow

1. **Scan for clichés**: Read the full draft and identify every overused phrase, dead metaphor, filler expression, or tired idiom (e.g., "at the end of the day," "think outside the box," "move the needle," "low-hanging fruit," "hit the ground running," "in today's fast-paced world").

2. **Tag each instance**: Note the exact phrase, its location (sentence or paragraph), and the underlying meaning the author is trying to convey.

3. **Generate alternatives**: For each flagged phrase, produce 2–3 replacement options that are:
   - Specific to the context and subject matter
   - Concrete rather than abstract
   - Varied in tone so the author can choose the best fit
   - Free of other clichés

4. **Explain the reasoning**: For each replacement, briefly state why the original was weak and how the alternative improves clarity or impact.

5. **Preserve voice**: Do not alter sentence structure, tone, or meaning beyond replacing the flagged phrase. Keep the author's style intact.

6. **Flag borderline cases**: If a phrase is common but not yet exhausted, mark it as a soft flag and leave the decision to the author.

## Output Format

Produce a numbered list, one entry per detected cliché:

```
[#]. Original phrase: "[exact phrase as it appears]"
     Context: [one-sentence summary of its role in the passage]
     Why it's weak: [one sentence]
     Replacements:
       a) [Option 1]
       b) [Option 2]
       c) [Option 3]
```

After the full list, include a **Summary** section with:
- Total clichés found (hard flags vs. soft flags)
- One sentence of overall guidance on the draft's most recurring weakness (e.g., over-reliance on business jargon, sports metaphors, or vague intensifiers)

Keep each entry concise. Do not rewrite full paragraphs unless explicitly asked.
