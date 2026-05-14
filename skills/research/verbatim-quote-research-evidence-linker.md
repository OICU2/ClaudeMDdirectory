---
name: verbatim-quote-research-evidence-linker
description: >
  Links verbatim participant quotes to specific research findings so every claim in a report has a traceable, citable source. Use when someone says "back up these findings with quotes," asks to "match quotes to themes," or wants to "add participant evidence to a report." Also triggers when someone needs to "connect raw quotes to conclusions" or wants to "make findings citable with direct quotations."
category: research
tags: [qualitative-research, evidence-linking, citations, quotes, thematic-analysis]
author: community
---

# Verbatim Quote Research Evidence Linker

This skill matches raw participant quotes to specific research findings or claims, ensuring every assertion in a qualitative report is anchored to a real, traceable, verbatim quotation.

## Evidence Linking Workflow

1. **Ingest findings and quotes separately.** Ask the user to provide (a) the list of research findings, themes, or claims and (b) the raw quote bank (with participant IDs or pseudonyms if available).

2. **Analyze each finding.** For every finding or claim, identify the core assertion being made — the specific behavior, attitude, or pattern it describes.

3. **Score and select quotes.** For each finding, scan the quote bank and select 1–3 quotes that directly support the assertion. Prioritize quotes that:
   - Use language that mirrors or substantiates the finding
   - Come from different participants (avoid over-reliance on one voice)
   - Are self-contained and intelligible without heavy context

4. **Flag weak or missing evidence.** If a finding has no strong supporting quote, flag it explicitly as "Unsupported — no verbatim evidence found" rather than forcing a poor match.

5. **Preserve verbatim accuracy.** Never paraphrase or alter quotes. If a quote needs context, add a bracketed editorial note, e.g., `[referring to onboarding process]`.

6. **Attribute every quote.** Attach participant ID, pseudonym, or label (e.g., `— P4`, `— Participant 7`, `— Interview 3`) to every quote used.

7. **Check for over-citation.** Ensure no single participant's quotes are used to support more than 30% of all findings — flag imbalance if detected.

## Output Format

Produce a structured evidence table followed by a flagged issues list:

**Evidence Table** (one block per finding):

```
Finding: [Exact finding or claim text]
Supporting Quotes:
  1. "[Verbatim quote]" — [Participant ID]
  2. "[Verbatim quote]" — [Participant ID]
Evidence Strength: Strong / Partial / Unsupported
```

**Issues List** (at the end):
- List any findings marked Unsupported
- List any participant over-citation warnings
- List any quotes that were ambiguous matches, with a brief note explaining the uncertainty

Length scales with the number of findings — each finding block should be concise (under 150 words including quotes). Do not summarize or interpret quotes; present them as-is.
