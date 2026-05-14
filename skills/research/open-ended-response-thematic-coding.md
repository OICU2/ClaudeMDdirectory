---
name: open-ended-response-thematic-coding
description: >
  Applies a structured thematic coding framework to systematically categorize and count recurring themes across qualitative open-ended survey or interview responses. Use when someone says "code these survey responses," asks to "find themes in open-ended answers," wants to "analyze qualitative feedback," needs to "categorize interview responses," or says "what are people saying in these responses." Produces a coded theme matrix with frequency counts and representative quotes.
category: research
tags: [qualitative-research, thematic-analysis, survey-analysis, content-coding, data-categorization]
author: community
---

# Open-Ended Response Thematic Coding

This skill applies a systematic inductive or deductive coding process to a set of open-ended responses, producing a structured theme summary with counts, definitions, and supporting quotes.

## Coding Workflow

1. **Ingest responses** — Accept the full set of responses as input. Number each response if not already numbered (R1, R2, R3...).

2. **First-pass reading** — Read all responses without coding to identify the range of content before assigning any codes.

3. **Generate initial code list** — Identify 5–15 distinct themes present in the data. Each code must have:
   - A short label (2–4 words, title case)
   - A 1-sentence operational definition that distinguishes it from other codes
   - At least one anchor example

4. **Apply codes to responses** — Assign one or more codes to each response. A single response may receive multiple codes. Record which response IDs map to each code.

5. **Resolve ambiguity** — If a response could fit two codes, apply both and note the overlap. If a response fits no existing code, create a new code or assign "Other / Uncategorized."

6. **Count and rank** — Tally the number of responses (not mentions) per theme. Sort themes from most to least frequent.

7. **Select representative quotes** — For each theme, identify 1–2 verbatim quotes that best illustrate it. Prefer quotes that are concise and unambiguous.

8. **Flag notable patterns** — Note any co-occurring theme pairs that appear together frequently, and any themes that appear only once or twice (potential edge cases or outliers).

## Output Format

Produce the following sections in order:

**Summary Line**
> `N responses analyzed | K themes identified | date (if provided)`

**Theme Table**

| Rank | Theme Label | Definition | Response Count | % of Total |
|------|-------------|------------|---------------|------------|
| 1    | [Label]     | [1 sentence] | [n]         | [xx%]      |
...

**Theme Detail Blocks** (one per theme, in ranked order)

```
## [Theme Label] — n responses (xx%)

Definition: [operational definition]

Representative quotes:
- "..." (R#)
- "..." (R#)

Response IDs: R1, R4, R9...
```

**Co-occurrence Notes**
- List any theme pairs that appear together in 3+ responses.

**Uncategorized Responses**
- List response IDs and text that could not be reliably coded.

**Coding Notes**
- Flag any assumptions made, ambiguous responses, or recommended refinements to the code list if more responses are added later.
