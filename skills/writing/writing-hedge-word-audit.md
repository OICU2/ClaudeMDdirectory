---
name: writing-hedge-word-audit
description: >
  Scans a piece of writing for overused hedging language and identifies where direct, confident claims would strengthen the work. Use when someone says "my writing feels too wishy-washy," asks "why does my draft sound uncertain," or wants to make their argument more assertive. Also activates when a writer wonders "am I hedging too much" or needs to "tighten up weak language" before submitting.
category: writing
tags: [editing, clarity, tone, style, revision]
author: community
---

# Hedge Word Audit

This skill scans a draft for excessive hedging language, flags problematic instances, and suggests direct replacements so the writing sounds confident and authoritative.

## Audit Workflow

1. **Identify hedge words and phrases** — Search the text for the following categories:
   - Probability hedges: *perhaps, maybe, might, could, possibly, probably, likely*
   - Perception hedges: *seems, appears, looks like, would suggest*
   - Qualification hedges: *somewhat, rather, fairly, quite, a bit, kind of, sort of*
   - Epistemic hedges: *I think, I believe, I feel like, it seems to me, in my opinion* (when used defensively rather than intentionally)
   - Distancing phrases: *one might argue, it could be said, there is a possibility that*

2. **Assess each instance** — Not all hedges are bad. Apply this filter:
   - **Flag it** if the hedge weakens a claim that evidence or context supports as fact
   - **Flag it** if the same hedge word appears more than twice in close proximity
   - **Keep it** if genuine uncertainty exists (e.g., forecasting, speculation, contested data)
   - **Keep it** if the hedge is intentional for diplomatic or legal reasons

3. **Count and categorize** — Tally flagged hedges by type and calculate hedge density (flagged hedges per 100 words).

4. **Suggest replacements** — For each flagged instance, provide a direct rewrite:
   - Replace *"This might improve results"* → *"This improves results"*
   - Replace *"It seems the data suggests"* → *"The data shows"*
   - Replace *"Perhaps the best approach is"* → *"The best approach is"*

5. **Identify root cause patterns** — Note if the hedging clusters in a specific section (intro, conclusions, arguments), which signals where the writer lacks confidence or evidence.

## Output Format

Produce a structured report with these sections:

**Hedge Audit Summary**
- Total flagged hedges: [number]
- Hedge density: [number] per 100 words
- Most overused hedge: [word/phrase]
- Sections most affected: [list]

**Flagged Instances**
Present as a numbered list:
> [Line or sentence containing hedge] → **Suggested rewrite:** [direct version] *(Reason: [one phrase explaining why this hedge weakens the writing])*

**Patterns Observed**
2–4 sentences describing where and why the hedging clusters, and what it signals about the draft's confidence or evidence gaps.

**Action Priority**
A short ranked list (high/medium/low) of the most impactful fixes to make first.

Keep the full report under 500 words unless the draft is very long. Use plain language. Do not rewrite the entire draft unprompted.
