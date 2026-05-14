---
name: content-attribution-chain-builder
category: writing
description: >
  Traces every factual claim in a draft document back to its original source and generates a structured attribution chain for editorial review. Use when someone says "check my sources," asks to "verify the claims in this article," wants to "audit citations before publishing," needs to "map where each fact came from," or requests a "source review of this draft."
tags: [attribution, fact-checking, citations, editorial, sourcing]
author: community
---

# Content Attribution Chain Builder

This skill systematically identifies every factual claim in a piece of writing, traces each claim to its stated or implied source, and produces a structured attribution chain that editors can review, approve, or flag for additional sourcing.

## Attribution Chain Workflow

1. **Scan for factual claims** — Read the entire draft and extract every statement that presents a fact, statistic, date, quote, named event, causal relationship, or attributed opinion. Ignore purely stylistic or transitional sentences.

2. **Classify each claim** by type:
   - `STATISTIC` — numerical data or percentages
   - `QUOTE` — direct or paraphrased speech attributed to a person
   - `EVENT` — specific named occurrences with dates or locations
   - `CAUSAL` — claims that X caused or led to Y
   - `CONSENSUS` — assertions about what experts or groups believe
   - `DEFINITION` — statements about what something is or means

3. **Identify the source status** for each claim:
   - `CITED` — a source is explicitly named inline or in footnotes
   - `IMPLIED` — a source is strongly suggested but not named (e.g., "studies show")
   - `UNSOURCED` — no source is present or implied

4. **Resolve source details** — For cited or implied sources, extract: author or organization, publication or platform, date if available, and URL or reference string if present.

5. **Assess source quality** using these flags:
   - `PRIMARY` — original research, official records, direct interviews
   - `SECONDARY` — journalism, summaries, or analysis of primary sources
   - `TERTIARY` — encyclopedias, aggregators, or uncredited summaries
   - `UNKNOWN` — cannot be determined from available information

6. **Flag risks** — Mark any claim that is unsourced, relies on a tertiary source for a critical fact, uses hedging language ("reportedly," "some say") without a source, or cites a source older than five years for a rapidly changing topic.

7. **Build the chain** — Link each claim to its source entry and any upstream sources if a chain exists (e.g., article cites a report that cites a study).

## Output Format

Produce a structured attribution chain report with two sections:

**Section 1 — Claim Inventory Table**

| # | Claim (verbatim or paraphrased) | Type | Source Status | Source Name | Source Quality | Risk Flags |
|---|---|---|---|---|---|---|

Include every identified claim as a numbered row. Use exact claim language where possible.

**Section 2 — Attribution Chain Details**

For each claim marked `CITED` or `IMPLIED`, produce a nested block:

```
Claim #[N]: "[claim text]"
  └─ Source: [Author/Org] — [Title or URL] ([Date])
       └─ Source type: [PRIMARY / SECONDARY / TERTIARY / UNKNOWN]
       └─ Upstream source (if known): [details or "none identified"]
  └─ Risk flags: [list flags or "none"]
  └─ Editorial note: [one sentence recommendation — verify, update, replace, or approve]
```

For `UNSOURCED` claims, produce:

```
Claim #[N]: "[claim text]"
  └─ Source: MISSING
  └─ Risk flags: UNSOURCED — requires sourcing before publication
  └─ Editorial note: [suggest what type of source would satisfy this claim]
```

**Section 3 — Summary**

- Total claims identified: N
- Cited: N | Implied: N | Unsourced: N
- High-risk claims requiring immediate attention: list claim numbers
- Overall source health: `STRONG` / `MODERATE` / `WEAK` with one sentence rationale
