---
name: literature-saturation-checkpoint
description: >
  Evaluates whether a literature review has reached thematic saturation by tracking how frequently new themes emerge across successive sources reviewed. Use when someone says "I think I've read enough sources," asks "have I covered enough literature," or wants to know if their review is comprehensive. Also triggers when someone says "I keep finding the same ideas" or wants to check if they should keep searching for more papers.
category: research
tags: [literature-review, thematic-saturation, research-methodology, systematic-review]
author: community
---

# Literature Saturation Checkpoint

This skill assesses whether a literature review has reached thematic saturation by analyzing the rate at which new themes appear across successive sources, and tells the researcher whether to stop or continue collecting sources.

## Saturation Assessment Workflow

1. **Collect source log from the user.** Ask them to provide a list of sources reviewed in the order they were encountered, or a summary of themes found per source. If they haven't tracked this, ask them to describe the last 5–10 sources and what new ideas (if any) each one contributed.

2. **Identify and catalog all themes.** Extract every distinct theme, concept, argument, or finding mentioned across the sources. Assign each a short label (e.g., "cost barriers," "user adoption," "regulatory gaps").

3. **Map theme emergence by source.** For each source in sequence, record which themes appeared for the first time. Build a running count: how many new themes did source N introduce versus sources N-5 through N-1?

4. **Calculate the new-theme introduction rate.** Divide the number of new themes in the most recent batch of sources by the total number of sources in that batch. Compare this rate to earlier batches.

5. **Apply saturation thresholds:**
   - **High saturation (stop searching):** Fewer than 1 new theme per 3–5 consecutive sources, and the last 5 sources introduced no themes not already covered.
   - **Moderate saturation (selective searching):** 1–2 new themes per 5 sources; recommend targeted searches on specific gaps only.
   - **Low saturation (continue searching):** 3+ new themes still emerging per 5 sources; the review is not yet comprehensive.

6. **Identify any persistent gaps.** Even at saturation, flag theme clusters that appear only once or twice and may warrant a focused search (e.g., a single source on a subtopic that no other source addressed).

7. **Deliver a verdict with reasoning.** State clearly whether saturation has been reached, the evidence for that conclusion, and specific next steps.

## Output Format

Produce a structured saturation report with the following sections:

**Saturation Status:** One of — `REACHED`, `APPROACHING`, or `NOT YET REACHED` — bolded at the top.

**Theme Inventory:** A numbered list of all identified themes with a count of how many sources addressed each.

**New-Theme Rate Table:**
| Source Batch | Sources Reviewed | New Themes Introduced | Rate |
|---|---|---|---|
| Batch 1 (1–5) | 5 | 8 | 1.6/source |
| Batch 2 (6–10) | 5 | 3 | 0.6/source |
| ... | | | |

**Saturation Verdict:** 2–4 sentences explaining the conclusion based on the rate data.

**Gaps to Address (if any):** A bulleted list of under-covered themes and a suggested search query for each.

**Recommended Next Step:** One concrete action — stop reviewing, run 1–2 targeted searches, or continue broad searching with a revised query.

Keep the report scannable. Use plain language. Avoid academic hedging — give a clear recommendation.
