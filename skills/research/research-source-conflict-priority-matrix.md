---
name: research-source-conflict-priority-matrix
description: >
  Evaluates conflicting findings across multiple research sources and produces a ranked priority matrix indicating which sources should take precedence. Use when someone says "these studies contradict each other," asks "which source should I trust more," or wants to resolve disagreements between research papers, reports, or data sets. Also activates when a user needs to reconcile conflicting statistics, compare study methodologies, or determine which findings are most credible.
category: research
tags: [research, source-evaluation, methodology, conflict-resolution, evidence-ranking]
author: community
---

# Research Source Conflict Priority Matrix

Analyzes conflicting findings from multiple research sources and generates a ranked matrix showing which sources take precedence, based on methodology quality, recency, and sample size.

## Conflict Evaluation Workflow

**Step 1: Extract Source Metadata**
For each conflicting source, collect:
- Publication year and venue (peer-reviewed, gray literature, industry report, etc.)
- Study design (RCT, meta-analysis, observational, survey, case study, expert opinion)
- Sample size (N=)
- Funding source and potential conflicts of interest
- Geographic and demographic scope

**Step 2: Score Each Source on Three Dimensions**

Score each dimension 1–5:

| Dimension | 1 (Weakest) | 3 (Moderate) | 5 (Strongest) |
|---|---|---|---|
| **Methodology Quality** | Anecdote/opinion | Cross-sectional survey | RCT or meta-analysis |
| **Recency** | >10 years old | 5–10 years old | <3 years old |
| **Sample Size** | N<30 | N=100–999 | N>10,000 |

Apply weighting: Methodology (50%) + Recency (25%) + Sample Size (25%) = Weighted Score

**Step 3: Flag Disqualifying Factors**
Automatically downgrade any source by 2 points if:
- Funding source has direct financial interest in the outcome
- Study was retracted or received major criticism
- Sample is non-representative for the claim being made
- Findings have not been replicated

**Step 4: Build the Priority Matrix**
Rank sources from highest to lowest weighted score. Identify:
- **Primary source**: highest score — findings should anchor conclusions
- **Supporting sources**: within 1.5 points of primary — use to corroborate
- **Conflicting outliers**: >1.5 points below primary — note disagreement, do not weight equally
- **Disqualified sources**: flag but exclude from synthesis

**Step 5: Synthesize the Conflict**
State explicitly why sources conflict: differing populations, time periods, outcome definitions, or methodologies. Do not average findings — defer to the ranked hierarchy.

## Output Format

Produce a structured response with these sections:

**Conflict Summary** (2–3 sentences): What the core disagreement is and why it matters.

**Priority Matrix Table**:
| Rank | Source | Methodology Score | Recency Score | Sample Size Score | Weighted Total | Status |
|---|---|---|---|---|---|---|
| 1 | [Author, Year] | X/5 | X/5 | X/5 | X.X | Primary |
| 2 | ... | | | | | Supporting |

**Conflict Explanation** (3–5 sentences): Why scores diverged and what methodological or contextual differences drive the contradiction.

**Recommended Conclusion**: One clear statement of which findings to use and under what conditions a lower-ranked source might still be relevant.

**Caveats**: Any limitations in the ranking itself (e.g., insufficient metadata, rapidly evolving field).

Length: concise — full output should fit within 400–600 words excluding the table.
