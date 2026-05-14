---
name: research-brief-stakeholder-version-adapter
description: >
  Rewrites a single research brief into multiple audience-specific versions tailored for different stakeholder groups. Use when someone says "adapt this brief for different audiences," asks to "create stakeholder versions of this research," wants to "tailor this for executives and technical teams," needs to "rewrite this brief for external partners," or requests to "make audience-specific versions of this document."
category: research
tags: [research, stakeholder-communication, audience-adaptation, technical-writing, executive-communication]
author: community
---

# Research Brief Stakeholder Version Adapter

This skill rewrites a single research brief into distinct versions for executive, technical, and external partner audiences, and activates whenever a user wants to adapt research content for different stakeholder groups.

## Adaptation Workflow

1. **Ingest the source brief** — Read the full original research brief and identify: core findings, methodology, data points, recommendations, and technical terminology.

2. **Identify requested audiences** — Default to three versions (Executive, Technical Team, External Partner) unless the user specifies otherwise. Confirm scope before proceeding on long documents.

3. **Apply audience-specific rewrite rules for each version:**

   **Executive Version**
   - Lead with business impact, ROI implications, or strategic decisions enabled by the research
   - Compress methodology to one sentence or remove entirely
   - Keep findings to 3–5 top-line bullets with dollar/time/risk framing where possible
   - Replace all technical jargon with plain business language
   - End with a clear recommended action or decision point

   **Technical Team Version**
   - Preserve full methodology, sample sizes, confidence intervals, and data sources
   - Retain domain-specific terminology and technical qualifiers
   - Include limitations, edge cases, and assumptions
   - Structure findings with granular breakdowns and supporting data
   - Flag open questions or areas requiring further investigation

   **External Partner Version**
   - Remove proprietary data, internal metrics, and sensitive competitive references
   - Reframe findings around mutual value and shared goals
   - Use neutral, non-internal language (avoid org-specific acronyms and internal project names)
   - Include only information safe for external disclosure
   - End with a collaboration-oriented call to action or next step

4. **Preserve factual fidelity** — Never alter findings, statistics, or conclusions across versions. Only change framing, depth, and language.

5. **Flag omissions explicitly** — If content is removed from a version (e.g., proprietary data from the external version), note it with a bracketed comment: `[Omitted: internal cost data]`.

## Output Format

Produce three clearly separated sections in a single response:

```
---
## VERSION 1: Executive Brief
[Title of Original Brief — Executive Summary]

**Key Finding:** [1–2 sentences]
**Business Impact:** [1–2 sentences]
**Recommendations:** [3–5 bullet points]
**Decision Required By:** [if present in source]

---
## VERSION 2: Technical Team Brief
[Title of Original Brief — Technical Reference]

**Objective:** [1 paragraph]
**Methodology:** [full detail]
**Findings:** [structured with headers and data]
**Limitations & Assumptions:** [bulleted]
**Open Questions:** [bulleted]

---
## VERSION 3: External Partner Brief
[Title of Original Brief — Partner Summary]

**Overview:** [1–2 sentences, neutral framing]
**Key Insights:** [3–5 bullets, externally safe]
**Implications for Partnership:** [1 paragraph]
**Suggested Next Steps:** [1–3 bullets]
[Omitted sections noted inline]
```

Each version should be self-contained and readable without reference to the others. Length per version: Executive (~150–250 words), Technical (full length matching source complexity), External Partner (~200–350 words).
