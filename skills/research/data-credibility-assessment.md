---
name: data-credibility-assessment
category: research
description: >
  Evaluates the reliability, validity, and trustworthiness of data sources before they are used in analysis or decision-making. Use when someone says "can I trust this data", asks about verifying a source, wants to check if statistics are reliable, needs to assess research quality, or is unsure whether data is credible enough to cite.
tags: [research, data-quality, source-verification, fact-checking, validation]
author: community
---

# Data Credibility Assessment

This skill systematically evaluates data sources across key credibility dimensions and produces a structured reliability verdict with actionable guidance.

## Assessment Workflow

1. **Identify the source type** — Determine whether the data comes from a primary source (original study, government database, sensor data), secondary source (news article, summary report), or tertiary source (Wikipedia, aggregator sites).

2. **Check provenance and authorship**
   - Who collected the data? Are credentials verifiable?
   - Is the methodology documented and transparent?
   - Is there a conflict of interest (funding source, political affiliation, commercial motive)?

3. **Evaluate publication and peer review**
   - Was the data published in a peer-reviewed journal, official report, or grey literature?
   - Has it been independently replicated or corroborated by other sources?
   - Check for retractions or corrections using Retraction Watch, PubMed, or DOI lookup.

4. **Assess recency and relevance**
   - When was the data collected vs. published? Is it current enough for the use case?
   - Does the sample population or geographic scope match the claim being made?

5. **Inspect statistical validity**
   - Is the sample size reported and adequate?
   - Are confidence intervals, margins of error, or p-values provided?
   - Look for cherry-picked timeframes, misleading axes, or percentages without base rates.

6. **Cross-reference independently**
   - Find at least two independent sources that confirm the core finding.
   - Note where sources diverge and flag unresolved discrepancies.

7. **Assign a credibility tier**
   - **High**: Primary source, transparent methodology, peer-reviewed, no conflicts, corroborated
   - **Medium**: Secondary source, partial methodology, some corroboration, minor concerns
   - **Low**: Unknown origin, no methodology, single source, potential bias, outdated
   - **Unreliable**: Anonymous, contradicted by multiple credible sources, retracted, or fabricated indicators present

## Output Format

Produce a structured credibility report with these sections:

**Source:** [Name/URL/citation]
**Source Type:** [Primary / Secondary / Tertiary]
**Credibility Tier:** [High / Medium / Low / Unreliable]

**Dimension Scores:**
| Dimension | Assessment | Notes |
|---|---|---|
| Authorship & Credentials | Pass / Concern / Fail | |
| Methodology Transparency | Pass / Concern / Fail | |
| Conflict of Interest | Pass / Concern / Fail | |
| Peer Review / Validation | Pass / Concern / Fail | |
| Recency & Relevance | Pass / Concern / Fail | |
| Statistical Validity | Pass / Concern / Fail | |
| Independent Corroboration | Pass / Concern / Fail | |

**Key Concerns:** [Bullet list of specific red flags or gaps, or "None identified"]

**Recommendation:** One of:
- ✅ Safe to cite — state any conditions or caveats
- ⚠️ Use with caution — specify what to verify first
- ❌ Do not use — explain the disqualifying issue

**Suggested Alternatives:** [List 1–3 stronger sources if the original scores Low or Unreliable]

Keep the report concise — aim for under 400 words unless the source complexity warrants more detail.