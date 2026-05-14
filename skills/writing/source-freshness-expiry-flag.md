---
name: source-freshness-expiry-flag
description: >
  Audits all citations, references, and sources within a draft to identify any that exceed a defined age threshold and may undermine credibility or factual accuracy. Use when someone says "check my sources are up to date," asks about whether their references are too old, or wants to flag outdated citations before publishing. Also activates when someone needs to review source freshness, audit reference quality, or validate that their bibliography meets recency standards.
category: writing
tags: [citations, fact-checking, research, editing, credibility]
author: community
---

# Source Freshness & Expiry Flag

This skill scans every citation and reference in a provided draft, compares each source's publication date against a defined age threshold, and produces a flagged report identifying stale sources that risk undermining the document's accuracy or credibility.

## Audit Workflow

1. **Identify the threshold**: If the user specifies a cutoff (e.g., "nothing older than 3 years"), use it. If not, default to 5 years for general content, 2 years for technology or medical content, and 1 year for legal or regulatory content.

2. **Extract all sources**: Locate every citation, footnote, hyperlink, inline reference, and bibliography entry in the draft. Number each one sequentially.

3. **Determine publication dates**: For each source, extract or estimate the publication year/date from the citation metadata, URL patterns, or contextual clues within the draft. Flag any source where the date cannot be determined as **UNDATED**.

4. **Calculate age**: Subtract the publication year from the current year. Flag any source whose age meets or exceeds the threshold as **EXPIRED**. Sources within 80% of the threshold (e.g., 4 out of 5 years) get flagged as **APPROACHING EXPIRY**.

5. **Assess impact**: For each flagged source, note whether it supports a factual claim, a statistic, a legal/regulatory point, or background context. Factual claims and statistics backed by expired sources are marked **HIGH RISK**; background context is marked **LOW RISK**.

6. **Suggest remediation**: For each expired or undated source, recommend one of the following: find a newer version of the same source, search for a more recent study or report on the same topic, or remove the citation if the claim is now considered common knowledge.

## Output Format

Produce a structured audit report with the following sections:

**Summary Line**
`X sources audited | Y expired | Z approaching expiry | W undated`

**Flagged Sources Table**

| # | Source Description | Year | Age | Status | Risk Level | Action |
|---|---|---|---|---|---|---|
| 1 | Author, Title (truncated) | 2018 | 7 yrs | EXPIRED | HIGH | Replace with post-2020 study |
| 2 | URL or title | Unknown | — | UNDATED | HIGH | Verify or remove |

**Clean Sources**
List the source numbers that passed with no issues, in a single line (e.g., "Sources 3, 5, 8, 11 are within threshold — no action needed.")

**Remediation Priority Order**
Rank flagged sources from most to least urgent based on risk level and how central the citation is to the document's argument. Present as a numbered list with one action per item.

Keep the report concise. Do not rewrite the draft. Do not speculate about source accuracy beyond age and missing dates.
