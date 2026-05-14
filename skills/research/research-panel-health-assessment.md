---
name: research-panel-health-assessment
description: >
  Audits a research panel dataset for common data quality issues including speeder responses, straight-lining patterns, demographic imbalances, and duplicate submissions before a study goes to field or during data cleaning. Use when someone says "check my panel data quality," asks about "survey response integrity," wants to "audit panelist behavior," needs to "identify bad actors in survey data," or is trying to "validate panel health before fielding."
category: research
tags: [survey-research, data-quality, panel-management, market-research, data-cleaning]
author: community
---

# Research Panel Health Assessment

This skill audits a research panel dataset for response quality issues — speeders, straight-liners, demographic imbalances, open-end gibberish, and duplicates — and produces a prioritized remediation report before or after fielding.

## Assessment Workflow

### 1. Clarify Inputs
Before running the audit, confirm:
- Dataset format (CSV, SPSS, Excel) and number of responses
- Survey length in minutes (median expected completion time)
- Whether demographic quotas were set and what they were
- Which variables are Likert scales, grids, or open-ends
- Whether a respondent ID or timestamp column exists

### 2. Speeder Detection
- Calculate each respondent's completion time
- Flag anyone completing in less than 30% of the median completion time
- Flag anyone completing in less than 50% of the minimum *reasonable* time (survey length × 0.4 minutes per question)
- Report count and percentage of flagged speeders

### 3. Straight-Lining Detection
- For every grid or multi-item Likert battery, compute the standard deviation of responses per respondent
- Flag respondents with SD = 0 across 3+ consecutive grid rows
- Flag respondents with SD < 0.5 across an entire battery of 5+ items
- Note which specific batteries triggered the flag

### 4. Duplicate & Fraudulent Entry Detection
- Check for exact duplicate respondent IDs
- Check for near-duplicate IP addresses (same IP, multiple completes)
- Check for identical open-end verbatim responses across respondents
- Flag any response submitted within 60 seconds of a previous identical-IP submission

### 5. Demographic Balance Audit
- Cross-tab actual incidence against quota targets for each demographic variable (age, gender, region, etc.)
- Calculate deviation: `(actual % − target %) / target %`
- Flag any cell exceeding ±10% deviation from quota
- Calculate design effect (DEFF) if weighting will be required

### 6. Open-End Quality Screening
- Flag open-ends containing fewer than 3 words
- Flag responses that are keyboard mashing (e.g., "asdfgh", "qqqqq")
- Flag responses that are identical or near-identical to the question text
- Flag non-English responses if English-only panel was specified

### 7. Severity Classification
Classify each identified issue as:
- **Critical** — must remove before analysis (confirmed duplicates, sub-30% speeders, gibberish-only respondents)
- **Moderate** — review and likely remove (straight-liners on 3+ batteries, IP duplicates)
- **Monitor** — flag but retain with note (borderline speeders, minor demographic drift)

## Output Format

Produce a structured Panel Health Report with the following sections:

**Executive Summary** (3–5 bullet points)
- Total N submitted vs. N passing QC
- Overall panel health score (pass rate as a percentage)
- Top 2–3 issues found

**Issue Table**
| Issue Type | Count | % of Total N | Severity | Recommended Action |
|---|---|---|---|---|
| Speeders | X | X% | Critical/Moderate | Remove / Review |
| Straight-liners | X | X% | ... | ... |
| Duplicate IDs | X | X% | ... | ... |
| IP duplicates | X | X% | ... | ... |
| Open-end failures | X | X% | ... | ... |
| Demo imbalance cells | X | X cells | ... | ... |

**Demographic Balance Detail**
- One row per quota variable showing target %, actual %, deviation %, and flag status

**Recommended Clean N**
- State the final recommended sample size after all Critical removals
- State whether
