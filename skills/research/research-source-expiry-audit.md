---
name: research-source-expiry-audit
description: >
  Scans research documents, reports, or bibliographies to identify sources and cited data points that have exceeded a defined recency threshold, then recommends updated replacement sources. Use when someone says "check if my sources are still current," asks about "outdated references in my research," or wants to "audit citations for freshness." Also triggers when a user asks to "flag stale data" or "find expired sources" in any document.
category: research
tags: [citations, source-validation, research-quality, data-freshness, bibliography]
author: community
---

# Research Source Expiry Audit

This skill systematically reviews cited sources and data points against a recency threshold, flags anything that has aged out, and suggests fresher replacement sources or search strategies.

## Audit Workflow

1. **Establish the recency threshold**: Ask the user for their cutoff (e.g., 2 years, 5 years). If not provided, default to 3 years for general research and 1 year for fast-moving fields (AI, finance, medicine, policy).

2. **Extract all cited sources**: Identify every reference, inline citation, hyperlink, statistic, or data point with an associated date or publication year. List them in a structured inventory.

3. **Classify each source by age**:
   - ✅ **Current**: Within threshold
   - ⚠️ **Approaching expiry**: Within 6 months of threshold
   - ❌ **Expired**: Exceeds threshold

4. **Assess expiry risk by source type**: Apply stricter scrutiny to statistics, regulatory data, market figures, clinical guidelines, and technology benchmarks. Flag these even if borderline.

5. **Generate replacement recommendations**: For each expired or at-risk source, provide:
   - The specific reason it is considered stale
   - 2–3 suggested replacement source types or databases to search (e.g., PubMed, Statista, official government portals, institutional reports)
   - A recommended search query to locate the updated version

6. **Identify undated sources**: Flag any source with no publication date as automatically suspect and recommend verification or replacement.

## Output Format

Produce a structured audit report with the following sections:

**Summary Block**
- Total sources reviewed
- Count of current / approaching expiry / expired / undated
- Recency threshold applied
- Field classification used

**Source Inventory Table**
| # | Source/Citation | Year | Status | Reason | Recommended Action |
|---|----------------|------|--------|--------|--------------------|

**Replacement Recommendations**
For each ❌ Expired or undated source, provide a numbered block:
```
Source: [original citation]
Problem: [why it is stale or unreliable]
Search target: [database or publisher to check]
Suggested query: "[example search string]"
```

**Priority Flags**
A short bullet list of the highest-risk expired sources that could materially affect the accuracy or credibility of the research, ranked by impact.

Keep the tone factual and neutral. Do not speculate about content accuracy beyond recency. If the user has not provided a document, prompt them to paste citations or upload the file before proceeding.
