---
name: cross-method-triangulation-matrix
description: >
  Builds a structured matrix mapping each research finding to the multiple methods or data sources that corroborate or contradict it, then surfaces gaps where findings rest on only a single source. Use when someone says "I need to validate my research findings," asks about "triangulating evidence across sources," or wants to "check which conclusions are well-supported vs. weakly supported." Also triggers when someone shares mixed research results and needs to understand which findings are robust.
category: research
tags: [triangulation, research-validation, evidence-mapping, mixed-methods, gap-analysis]
author: community
---

# Cross-Method Triangulation Matrix

Builds a finding-by-method matrix that reveals which research conclusions are multiply corroborated, which are contradicted across sources, and which lack sufficient triangulation — so researchers can prioritize follow-up work.

## Triangulation Matrix Workflow

1. **Extract all findings**: List every distinct claim, result, or conclusion from the provided research. Number them sequentially (F1, F2, F3...).

2. **Inventory all methods and sources**: List every data source, methodology, or evidence type present (e.g., survey data, interview transcripts, observational notes, statistical analysis, literature, case studies). Label them (M1, M2, M3...).

3. **Build the matrix**: Create a table with findings as rows and methods/sources as columns. For each cell, assign one of:
   - ✅ **Supports** — this method corroborates the finding
   - ❌ **Contradicts** — this method conflicts with the finding
   - ⚠️ **Partial** — this method weakly or conditionally supports it
   - — **Not applicable** — this method was not designed to address this finding

4. **Calculate triangulation score**: For each finding, count the number of supporting sources vs. contradicting sources. Flag findings with:
   - Only 1 supporting source and no contradictions as **Under-triangulated**
   - Any contradictions as **Contested — requires resolution**
   - 3+ supporting sources and no contradictions as **Well-triangulated**

5. **Identify critical gaps**: Note which finding–method combinations are blank (—) but *should* have been addressed by that method. Flag these as missed triangulation opportunities.

6. **Prioritize follow-up**: Rank under-triangulated and contested findings by their importance to the overall research conclusions. List the top 3–5 that most urgently need additional evidence collection or reconciliation.

## Output Format

Produce the following sections in order:

**1. Findings Inventory**
Bulleted list: F1, F2... with one-sentence description of each finding.

**2. Methods/Sources Inventory**
Bulleted list: M1, M2... with one-sentence description of each method or source.

**3. Triangulation Matrix**
Markdown table. Rows = findings (F1, F2...). Columns = methods (M1, M2...) plus a final "Triangulation Status" column. Use ✅ ❌ ⚠️ — symbols in cells. Keep finding descriptions short (under 8 words) in the row header.

**4. Gap Analysis**
Prose paragraph (3–6 sentences) describing the most significant gaps: which findings are under-supported, which show cross-method contradiction, and which method–finding combinations represent missed opportunities.

**5. Recommended Next Steps**
Numbered list of 3–5 concrete actions (e.g., "Conduct follow-up interviews to test F3, which is currently supported only by survey data").

Total length: scales with complexity, but matrix + gap analysis should be completable in one response. Use plain markdown throughout.
