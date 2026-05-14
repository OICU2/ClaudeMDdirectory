---
name: research-finding-aging-report
description: >
  Flags research findings that have exceeded a defined freshness threshold and prioritizes which conclusions need updated evidence. Use when someone says their research feels outdated, asks which findings need to be re-verified, or wants to audit how current their evidence base is. Also triggers when someone mentions stale citations, worries about research validity over time, or needs to know what to re-investigate first.
category: research
tags: [research, citations, evidence-quality, freshness, prioritization]
author: community
---

# Research Finding Aging Report

Scans a set of research findings or citations, flags those that have exceeded a freshness threshold, and produces a prioritized list of which conclusions need updated evidence most urgently.

## Aging Assessment Workflow

1. **Collect the findings inventory.** Ask the user to provide their research findings, citations, or claim list. If already supplied, extract each distinct claim and its associated source date (or estimated date if explicit date is missing).

2. **Establish the freshness threshold.** Default to 24 months unless the user specifies otherwise. For fast-moving domains (AI, genomics, crypto, public health policy), suggest 12 months. For stable domains (classical history, foundational mathematics), suggest 60 months.

3. **Calculate age for each finding.** Compute months elapsed from the source date to today. Mark each finding as:
   - **Fresh** — within threshold
   - **Aging** — within 1.5× threshold
   - **Stale** — beyond 1.5× threshold
   - **Undated** — no reliable date found; treat as high-risk

4. **Assess impact weight.** For each stale or aging finding, score its importance to the overall argument or project on a 1–3 scale:
   - **3 (Critical)** — the finding is load-bearing; conclusions collapse without it
   - **2 (Supporting)** — the finding strengthens but does not anchor the argument
   - **1 (Peripheral)** — background context, easily substituted

5. **Compute priority score.** Multiply staleness severity (Stale = 3, Aging = 2, Undated = 3) by impact weight. Higher scores surface first in the report.

6. **Identify replacement search strategy.** For each item scored 4 or above, suggest a concrete re-investigation approach: specific databases, search terms, or authoritative bodies likely to hold updated data.

## Output Format

Produce a structured report with the following sections:

**Summary Block**
- Total findings reviewed
- Count by status (Fresh / Aging / Stale / Undated)
- Overall freshness score (Fresh % of total)

**Priority Action Table**
Sorted by priority score descending. Columns:
`| # | Finding (truncated) | Source Date | Age (months) | Status | Impact | Priority Score | Recommended Action |`

**Re-investigation Queue**
Numbered list of the top findings requiring immediate update, each with:
- One-sentence summary of the original claim
- Why it may be outdated (domain velocity, known field shifts, regulatory changes, etc.)
- Specific search strategy or source to consult

**Findings Cleared as Fresh**
Brief bulleted list of findings that passed the threshold — no action needed.

Length scales with input size. For fewer than 10 findings, the full report fits one screen. For 20+ findings, collapse the Fresh section to a count only.
