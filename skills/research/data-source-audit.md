---
name: data-source-audit
description: >
  Systematically reviews all data sources in a research project to identify outdated, low-credibility, or conflicting references that weaken analytical validity. Use when someone says "check my sources," asks about the reliability of their references, or wants to audit citations in a research document. Also activates when someone needs to verify source quality, flag contradictory data, or strengthen the evidentiary foundation of an analysis.
category: research
tags: [sources, citations, credibility, research-quality, fact-checking]
author: community
---

# Data Source Audit

This skill systematically evaluates every data source in a research project for recency, credibility, and internal consistency, producing a structured report that identifies weaknesses and recommends remediation.

## Audit Workflow

1. **Extract all sources** — Catalog every cited source: URLs, publications, datasets, reports, statistics, and anecdotal references. Number each one sequentially.

2. **Assess recency** — Flag any source older than the domain-appropriate threshold (e.g., 2 years for tech/market data, 5 years for policy, 10+ years acceptable for foundational academic theory). Mark as `STALE`, `DATED`, or `CURRENT`.

3. **Evaluate credibility** — Score each source on:
   - **Publisher type**: peer-reviewed journal, government agency, established news outlet, industry report, blog, unknown (assign tier: Primary / Secondary / Unreliable)
   - **Author credentials**: named expert, institutional author, anonymous (flag if anonymous or unverifiable)
   - **Methodology transparency**: does the source explain how data was collected?

4. **Check for conflicts** — Compare claims across sources. Where two or more sources contradict each other on the same data point, log the conflict with both source numbers and the specific disagreement.

5. **Identify coverage gaps** — Note any major claims in the research that lack citation entirely or rely on a single unverified source.

6. **Prioritize by severity** — Classify each issue as:
   - 🔴 **Critical**: Unreliable or fabricated source, direct factual conflict, unsupported central claim
   - 🟡 **Moderate**: Stale data, secondary-tier source for a key claim, thin sourcing
   - 🟢 **Minor**: Style inconsistency, redundant citation, marginally outdated supporting detail

## Output Format

Produce a structured audit report with the following sections:

---

**Source Audit Report**

**Summary**
- Total sources reviewed: N
- Critical issues: N | Moderate: N | Minor: N
- Overall source health: Strong / Acceptable / Needs Revision / Unreliable

---

**Source Inventory Table**

| # | Source | Type | Tier | Date | Status | Issues |
|---|--------|------|------|------|--------|--------|
| 1 | ... | ... | ... | ... | CURRENT/STALE | None / See below |

---

**Issue Log**

For each flagged issue:
- **Issue [severity emoji]**: Brief label
- **Source(s) affected**: #N
- **Problem**: One sentence describing the specific issue
- **Recommendation**: Exact corrective action (replace with X type of source, remove, corroborate with Y)

---

**Conflicts Detected**

List each contradiction:
- **Claim**: The specific data point in dispute
- **Source A (#N)**: States X
- **Source B (#N)**: States Y
- **Recommendation**: Which to prioritize and why, or how to resolve

---

**Top 3 Remediation Priorities**

Numbered list of the highest-impact fixes to credibility, in order of urgency.
