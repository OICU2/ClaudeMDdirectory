---
name: cross-project-insight-reuse-mapper
description: >
  Scans findings from prior research projects and identifies insights that remain valid and transferable to a current research brief. Use when someone says "we've researched this before," asks about reusing past findings, wants to avoid duplicating prior work, needs to surface relevant historical insights, or is starting a new research project and wants to leverage existing knowledge assets.
category: research
tags: [research, knowledge-reuse, insight-mapping, cross-project, synthesis]
author: community
---

# Cross-Project Insight Reuse Mapper

Maps validated findings from previous research projects onto a current research brief, surfacing transferable insights and flagging what can be skipped, reused, or revisited.

## Insight Extraction and Mapping Workflow

1. **Parse the current research brief** — Identify the core research questions, target audience, key themes, and success criteria. Extract 5–10 discrete knowledge needs the brief is trying to satisfy.

2. **Index prior project findings** — For each prior project provided, extract: (a) the original research question, (b) key findings or conclusions, (c) the date or recency of the research, (d) methodology used, and (e) the population or context studied.

3. **Run a relevance match** — Compare each prior finding against each current knowledge need. Score relevance on three axes:
   - **Topical overlap**: Does the finding address the same subject matter?
   - **Audience/context fit**: Was the original research conducted on a comparable audience or market?
   - **Temporal validity**: Is the finding still likely to hold given time elapsed and market changes?

4. **Classify each matched insight into one of four categories:**
   - ✅ **Direct Reuse** — Finding is directly applicable with no additional validation needed.
   - 🔄 **Reuse with Caveat** — Finding is likely still valid but should be noted as older or context-shifted.
   - 🔍 **Needs Validation** — Finding is relevant but conditions have changed enough to warrant a quick verification pass.
   - ❌ **Do Not Reuse** — Finding is outdated, context-mismatched, or contradicted by more recent data.

5. **Identify coverage gaps** — List knowledge needs from the current brief that have no usable prior findings. These become the recommended new research focus areas.

6. **Flag redundancy risks** — Note any areas where the team risks re-researching something already well-established, wasting time or budget.

## Output Format

Produce a structured Insight Reuse Report with the following sections:

**Header**
- Current research brief title and date
- Number of prior projects scanned
- Summary line: X insights reusable, Y need validation, Z gaps remain

**Insight Mapping Table**
A markdown table with columns:
`| Knowledge Need | Prior Project | Finding Summary | Classification | Rationale |`
One row per matched insight. Sort by classification (Direct Reuse first).

**Coverage Gap List**
Bulleted list of knowledge needs with zero usable prior coverage. Each item should include a one-line explanation of why no prior work applies.

**Recommended Research Scope**
A concise paragraph (3–5 sentences) summarizing what new primary research is actually needed, given what can be reused. This becomes the de-duped research brief.

**Caveats and Risk Flags**
Bulleted list of any findings marked "Reuse with Caveat" or "Needs Validation," with specific reasons (e.g., "conducted 3 years ago in a pre-pandemic context" or "sample was B2B, current brief targets B2C").

Keep the full report scannable and decision-ready. Aim for clarity over comprehensiveness — a researcher should be able to act on this in under 10 minutes.
