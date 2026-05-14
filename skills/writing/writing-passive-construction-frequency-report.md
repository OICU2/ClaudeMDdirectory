---
name: writing-passive-construction-frequency-report
description: >
  Scans a document and produces a ranked frequency report of passive voice constructions to guide targeted revision. Use when someone says "how much passive voice is in this," asks to audit passive constructions, wants to see which passive patterns appear most often, needs a passive voice breakdown before editing, or asks to analyze sentence structure for voice distribution.
category: writing
tags: [passive-voice, writing-analysis, revision, frequency-report, style-audit]
author: community
---

# Passive Construction Frequency Report

This skill scans any provided text, identifies every passive construction, tallies them by pattern type, and returns a ranked report so writers know exactly where to focus revision effort.

## Analysis Workflow

1. **Extract all passive constructions** — Identify every instance of `be`-verb + past participle (e.g., "was written," "is being reviewed," "had been completed"). Include truncated passives missing an agent (e.g., "Mistakes were made") and progressive passives.

2. **Classify each instance by pattern type** — Group constructions into categories:
   - Simple past passive: *was/were + past participle*
   - Present passive: *is/are + past participle*
   - Perfect passive: *has/have/had been + past participle*
   - Progressive passive: *is/are/was/were being + past participle*
   - Modal passive: *will/would/can/could/should be + past participle*
   - Agentless passive (no "by" phrase present)

3. **Count and rank** — Tally frequency of each pattern type across the full document. Rank from most to least frequent.

4. **Flag high-density zones** — Identify paragraphs or sections where passive constructions cluster (3 or more in a short span).

5. **Calculate overall passive rate** — Divide total passive constructions by total sentences and express as a percentage.

6. **Sample the top patterns** — Pull 2–3 verbatim example sentences for each of the top 3 most frequent pattern types.

## Output Format

Produce a structured report with these sections:

**Summary Line**
> "Found [X] passive constructions across [Y] sentences ([Z]% passive rate)."

**Ranked Frequency Table**
| Rank | Pattern Type | Count | % of All Passives |
|------|-------------|-------|-------------------|
| 1 | Agentless past passive | 14 | 40% |
| 2 | Simple past passive | 9 | 26% |
| … | … | … | … |

**Top Pattern Examples** (for ranks 1–3)
- Pattern name
- 2–3 quoted sentences from the text

**High-Density Zones**
- List paragraph numbers or opening phrases of sections with passive clusters
- Note count per zone

**Revision Priority**
- One or two sentences identifying which pattern type, if revised, would most reduce overall passive rate

Total length: concise — the table and examples are the substance; no padding.
