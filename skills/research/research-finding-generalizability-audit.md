---
name: research-finding-generalizability-audit
description: >
  Evaluates whether a study's sample characteristics, methodology, and context
  justify the scope of claims made in its findings. Use when someone asks whether
  a study applies to their situation, wonders if research findings hold up outside
  the original study context, questions whether results can be extended to a
  different population, or wants to know if a paper's conclusions are overstated.
  Also activates when someone says "does this research apply to me" or "can we
  generalize from this study."
category: research
tags: [research, methodology, critical-analysis, statistics, study-design]
author: community
---

# Research Finding Generalizability Audit

This skill systematically assesses the match between a study's actual sample, design, and context and the breadth of conclusions drawn from it, flagging where generalization is warranted, overstated, or unclear.

## Audit Workflow

1. **Extract the claimed generalization scope**
   - Identify the explicit conclusion language: does the study claim results apply to "all adults," "clinical populations," "Western consumers," or something more bounded?
   - Note hedging language (e.g., "may suggest," "in this sample") vs. universalizing language ("demonstrates," "proves," "people tend to").

2. **Profile the actual sample**
   - Record: sample size, recruitment method (convenience, random, clinical referral, online panel, etc.), demographic breakdown (age, gender, geography, socioeconomic status), inclusion/exclusion criteria, and response or attrition rates.
   - Flag WEIRD bias (Western, Educated, Industrialized, Rich, Democratic) if demographic information is narrow or unreported.

3. **Assess methodological constraints on generalizability**
   - **Internal vs. external validity trade-offs**: highly controlled lab conditions reduce noise but limit real-world applicability.
   - **Measurement tools**: self-report scales, behavioral tasks, physiological measures — each carries different generalizability assumptions.
   - **Time and context**: single time point vs. longitudinal; specific historical or cultural moment.
   - **Effect size and replication status**: small effects in unreplicated studies warrant narrower claims.

4. **Identify the target population of interest**
   - If the user has a specific application in mind (e.g., "does this apply to elderly patients in rural areas?"), explicitly compare that target population against the study sample on the dimensions above.

5. **Rate generalizability across four dimensions**
   - **Population generalizability**: How closely does the sample match the population the finding is claimed to describe?
   - **Ecological generalizability**: Do study conditions resemble real-world settings?
   - **Temporal generalizability**: Are findings likely stable over time, or context-specific?
   - **Construct generalizability**: Do the operationalizations of key variables map onto how those concepts function outside the study?

6. **Identify gaps and red flags**
   - Undisclosed or homogeneous samples presented as universal.
   - Single-site or single-country studies claiming cross-cultural relevance.
   - Statistically significant but practically small effects used to justify broad policy or behavioral claims.
   - Absence of replication or independent validation.

7. **State what the evidence actually supports**
   - Write a precise, scoped version of the finding that matches the evidence.
   - Specify what additional studies would be needed to justify a broader claim.

## Output Format

Produce a structured audit with the following sections:

**Claimed Generalization:** One sentence summarizing what the study asserts applies broadly.

**Sample Profile:** Bulleted list of key sample characteristics (size, demographics, recruitment, setting).

**Generalizability Ratings:** A 2-column table with the four dimensions (Population, Ecological, Temporal, Construct) and a rating for each: Strong / Moderate / Weak / Insufficient Information, with a one-sentence justification per row.

**Red Flags:** Bulleted list of specific overgeneralization risks identified, or "None identified" if clean.

**What the Evidence Actually Supports:** 2–4 sentences stating the appropriately scoped conclusion.

**To Justify a Broader Claim:** Bulleted list of specific study designs, sample expansions, or replications that would be needed.

Total length: 350–600 words. Use plain language; avoid jargon unless the user's question is technical.
