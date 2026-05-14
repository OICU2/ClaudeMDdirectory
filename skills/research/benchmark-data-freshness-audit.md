---
name: benchmark-data-freshness-audit
description: >
  Scans a research report or document for cited benchmarks, statistics, and data points,
  then flags any that exceed a configurable age threshold and recommends updated replacement
  sources. Use when someone says "check if my data is still current," asks whether their
  report's statistics are outdated, wants to audit benchmark freshness before publishing,
  needs to verify their research citations haven't aged out, or is concerned their numbers
  may be stale.
category: research
tags: [benchmarks, data-quality, research-audit, citations, freshness]
author: community
---

# Benchmark Data Freshness Audit

This skill scans a research report's cited benchmarks and statistics, flags any exceeding a defined age threshold, and suggests updated replacement sources so researchers can publish with confidence that their data is current.

## Audit Workflow

1. **Extract all data points**: Identify every statistic, benchmark, percentage, market figure, survey result, or quantitative claim in the provided text, along with its cited source and publication date.

2. **Determine age threshold**: Default to 2 years if the user has not specified one. If the user provides a threshold (e.g., "flag anything older than 18 months"), apply it exactly.

3. **Calculate data age**: For each extracted data point, compute how many months or years have elapsed since its publication or collection date. If no date is present, mark it as **undated — assume stale**.

4. **Classify each item**:
   - ✅ **Fresh**: Within the age threshold
   - ⚠️ **At Risk**: Within 3 months of exceeding the threshold
   - 🔴 **Stale**: Exceeds the threshold
   - ❓ **Undated**: No publication date found; treat as stale

5. **Identify replacement sources**: For every stale or undated data point, suggest 2–3 authoritative sources likely to hold updated figures. Prioritize: official government databases, primary research institutions, industry bodies (Gartner, IDC, Statista, OECD, WHO, etc.), and peer-reviewed journals. Include the suggested source name, URL if known, and the specific report or dataset to search.

6. **Assess overall report health**: Calculate the percentage of data points that are fresh vs. stale and provide a one-line risk rating (Low / Medium / High / Critical).

## Output Format

Produce a structured audit report with the following sections:

---

**Audit Summary**
- Age threshold applied: [X months/years]
- Total data points found: [N]
- Fresh: [N] | At Risk: [N] | Stale: [N] | Undated: [N]
- Overall freshness health: [Low / Medium / High / Critical risk]

---

**Flagged Data Points**

For each stale or undated item, output a block:

> 🔴 **[Brief description of the statistic]**
> - Original claim: "[exact quote or close paraphrase]"
> - Source: [cited source name]
> - Publication date: [date or "not found"]
> - Age: [X months/years old] or [Undated]
> - Why it matters: [1 sentence on how quickly this domain changes]
> - Suggested replacements:
>   1. [Source name] — [URL or search path] — [specific report/dataset]
>   2. [Source name] — [URL or search path] — [specific report/dataset]

---

**Fresh Data Points** *(condensed list)*

List each fresh item as a single line:
- ✅ [Statistic summary] — [Source] — [Date] — [Age]

---

**Recommendations**
- Bullet list of 3–5 prioritized next steps the author should take before publishing.
