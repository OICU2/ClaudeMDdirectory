---
name: fact-verification
description: >
  Verifies claims, statistics, and data points against primary and authoritative sources to ensure accuracy before publication or use. Use when someone says "check if this is true," asks about verifying a statistic, wants to confirm a claim before using it, needs to validate research data, or is unsure whether a fact is accurate. Returns a structured verification report with source confidence ratings.
category: research
tags: [fact-checking, verification, accuracy, sources, research]
author: community
---

# Fact Verification Skill

This skill systematically checks claims and data against primary sources and returns a structured accuracy assessment with source citations and confidence ratings.

## Verification Workflow

1. **Extract the claim** — Identify the specific assertion, statistic, or data point to verify. Break compound claims into individual checkable units.

2. **Classify the claim type** — Categorize as: statistical, historical, scientific, legal, biographical, or current-events. This determines which source tier to prioritize.

3. **Identify primary sources** — For each claim type, target the appropriate authoritative sources:
   - Statistical: government databases, peer-reviewed studies, original survey data
   - Historical: official archives, academic publications, contemporaneous records
   - Scientific: peer-reviewed journals (PubMed, Nature, Science), institutional reports
   - Legal: official legal databases, court records, legislation text
   - Biographical: official biographies, institutional records, direct statements
   - Current events: original reporting, official press releases, primary documents

4. **Assess source quality** — Rate each source on:
   - **Primary** (original data/official record) → highest weight
   - **Secondary** (peer-reviewed analysis of primary) → medium weight
   - **Tertiary** (aggregated or summarized) → low weight; requires corroboration

5. **Cross-reference** — Require at least two independent primary or high-quality secondary sources before marking a claim as verified. Flag single-source claims explicitly.

6. **Check for outdated data** — Confirm whether statistics or facts have a publication date and whether more recent data supersedes them.

7. **Identify red flags** — Note if the claim:
   - Uses vague sourcing ("studies show," "experts say")
   - Strips context from original data
   - Conflicts with the majority of primary sources
   - Originates from a source with known bias or conflict of interest

8. **Assign a verdict** — Choose one: `VERIFIED`, `DISPUTED`, `UNVERIFIED`, `FALSE`, or `OUTDATED`.

## Output Format

Produce a structured verification report for each claim:

```
## Fact Verification Report

**Claim:** [Exact claim as stated]

**Verdict:** VERIFIED | DISPUTED | UNVERIFIED | FALSE | OUTDATED

**Confidence:** High / Medium / Low

**Summary:** [2–3 sentences explaining the verdict and what the evidence shows]

**Sources Checked:**
- [Source name] — [URL or citation] — [Primary/Secondary/Tertiary] — [Supports / Contradicts / Neutral]
- [Source name] — [URL or citation] — [Primary/Secondary/Tertiary] — [Supports / Contradicts / Neutral]

**Caveats / Context:** [Any important nuance, date limitations, definitional issues, or missing context that affects the claim's accuracy]

**Recommended Action:** [What the user should do — use as-is, update with current data, reframe with proper context, discard, etc.]
```

If multiple claims are submitted, produce one report block per claim, then append a summary table:

| Claim (truncated) | Verdict | Confidence |
|---|---|---|
| ... | VERIFIED | High |
| ... | FALSE | High |