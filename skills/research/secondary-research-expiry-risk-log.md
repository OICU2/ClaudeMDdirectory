---
name: secondary-research-expiry-risk-log
description: >
  Catalogs all secondary data sources used in a research study, recording publication dates and flagging sources that exceed a defined age threshold as potentially outdated. Use when someone says "check how old my sources are," asks about "data currency risks in my research," or wants to "audit secondary sources for expiry," "flag outdated references in my study," or "build a source freshness log."
category: research
tags: [secondary-research, data-quality, source-audit, expiry-risk, research-governance]
author: community
---

# Secondary Research Expiry Risk Log

This skill systematically catalogs all secondary data sources in a study, records their publication dates, and flags those exceeding a user-defined age threshold as expiry risks, producing a structured risk log for review.

## Workflow

1. **Collect source inventory**: Ask the user to provide all secondary sources (reports, studies, statistics, datasets, articles) referenced in their research. Accept them as a list, pasted text, or bibliography.

2. **Define the threshold**: Ask the user for their acceptable age threshold (e.g., 2 years, 5 years). If not provided, default to **3 years** and note this assumption.

3. **Extract key fields for each source**:
   - Source name / title
   - Author or organization
   - Publication date (year, or year + month if available)
   - Source type (government report, industry survey, academic paper, database, news article, etc.)
   - Topic area or metric it supports in the research

4. **Calculate age**: Compute the age of each source relative to today's date.

5. **Apply expiry flag**:
   - `✅ Current` — within threshold
   - `⚠️ Approaching Expiry` — within 20% beyond threshold (e.g., 3.0–3.6 years on a 3-year threshold)
   - `🔴 Outdated` — exceeds threshold

6. **Assess risk level per flagged source**:
   - **High risk**: Source underpins a key claim, market size figure, regulatory data, or trend conclusion
   - **Medium risk**: Supporting context or background that could have shifted
   - **Low risk**: Historical reference where age is not a validity concern

7. **Recommend remediation** for each flagged source: suggest finding a newer version, replacing with an updated dataset, or explicitly acknowledging the limitation in the research.

## Output Format

Produce a structured log in this format:

---

**Secondary Research Expiry Risk Log**
**Threshold applied:** [X years] | **Date of audit:** [today's date] | **Total sources reviewed:** [N]

| # | Source Title | Author / Org | Type | Publication Date | Age | Status | Risk Level | Recommendation |
|---|---|---|---|---|---|---|---|---|
| 1 | [Title] | [Author] | [Type] | [Date] | [X.X yrs] | ✅ / ⚠️ / 🔴 | High / Medium / Low / N/A | [Action or "No action needed"] |

---

**Summary**
- Total current sources: [N]
- Sources approaching expiry: [N]
- Outdated sources: [N]
- High-risk outdated sources requiring immediate replacement: [N]

**Priority Actions**
List only flagged sources with High or Medium risk, each with a one-line recommended next step.

---

Keep the table concise. Use "Unknown" for missing dates and flag those as ⚠️ by default. Do not pad with generalizations — every row must reflect a real source provided by the user.
