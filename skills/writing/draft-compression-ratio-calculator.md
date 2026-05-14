---
name: draft-compression-ratio-calculator
category: writing
description: >
  Tracks word count reductions across multiple revision rounds and calculates the compression ratio for each editing pass. Use when someone says "how much did I cut from my draft," asks about their editing progress across versions, or wants to measure how tight their revision process has been. Also activates when someone shares multiple draft versions and wants to see reduction percentages per round.
tags: [editing, revision, word-count, metrics, writing-process]
author: community
---

# Draft Compression Ratio Calculator

Calculates word count reduction and compression ratios across revision rounds, giving writers a precise view of how aggressively each editing pass trimmed their work.

## Calculation Workflow

1. **Collect word counts** — Ask the user to provide word counts (or raw text) for each draft version in chronological order: Draft 1, Draft 2, Draft 3, etc. If raw text is provided, count words directly.

2. **Calculate per-pass compression ratio** — For each consecutive pair of drafts, apply:
   - Words removed = previous draft count − current draft count
   - Compression ratio = current draft count ÷ previous draft count (expressed as a decimal, e.g. 0.72)
   - Reduction percentage = (1 − compression ratio) × 100

3. **Calculate cumulative compression** — Compare every draft back to Draft 1:
   - Cumulative ratio = current draft count ÷ Draft 1 word count
   - Cumulative reduction = (1 − cumulative ratio) × 100

4. **Flag notable patterns** — Identify:
   - Any pass where reduction exceeded 25% (aggressive cut)
   - Any pass where word count increased (expansion round)
   - The single most efficient editing pass (highest reduction %)

5. **Handle edge cases** — If word count increased between rounds, label it as an expansion pass and report a negative reduction percentage. Do not skip it from the table.

## Output Format

Produce a markdown table followed by a brief summary:

```
## Compression Ratio Report

| Pass        | Word Count | Words Removed | Reduction % | Compression Ratio |
|-------------|------------|---------------|-------------|-------------------|
| Draft 1     | 2,400      | —             | —           | —                 |
| Draft 2     | 1,850      | 550           | 22.9%       | 0.771             |
| Draft 3     | 1,620      | 230           | 12.4%       | 0.876             |
| **Final**   | **1,200**  | **420**       | **25.9%**   | **0.741**         |

**Cumulative reduction from Draft 1:** 50.0% (2,400 → 1,200 words)
**Most aggressive pass:** Draft 3 → Final (25.9% cut)
**Total passes:** 3
```

After the table, add 2–3 sentences of plain-language interpretation: what the compression pattern suggests about the writer's revision process (e.g., front-loaded cutting, gradual tightening, late-stage restructuring).
