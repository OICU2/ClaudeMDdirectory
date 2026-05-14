---
name: expert-source-gap-identification
category: research
description: >
  Analyzes a research topic to identify domains, perspectives, or stakeholder groups that are underrepresented or missing from the current source pool, then recommends specific source types, institutions, or individuals to fill those gaps. Use when someone says "my research feels one-sided," asks about "what perspectives am I missing," wants to "strengthen the credibility of their sources," needs to "find expert voices for a specific angle," or wonders "who else should I be talking to" about a topic.
tags: [research, sources, expert-identification, gap-analysis, credibility]
author: community
---

# Expert Source Gap Identification

This skill audits a research topic or existing source list to surface missing expert perspectives and returns a structured list of recommended source types, disciplines, and specific individuals or institutions to consult.

## Gap Identification Workflow

1. **Extract the research topic and scope** — Identify the central question, the intended audience, and any sources already consulted. If not provided, ask for them before proceeding.

2. **Map the full stakeholder landscape** — List every domain, discipline, or affected group that has a legitimate stake in or knowledge of the topic. Include:
   - Academic disciplines (primary and adjacent)
   - Industry or practitioner perspectives
   - Affected communities or populations
   - Dissenting or contrarian viewpoints
   - Geographic or cultural perspectives that may differ from the dominant narrative
   - Regulatory, legal, or policy angles

3. **Cross-reference against existing sources** — Compare the stakeholder map against sources already consulted. Flag any domain with zero representation or only single-source coverage.

4. **Prioritize gaps by impact** — Rank missing perspectives by how significantly their absence distorts or weakens the research. Mark each gap as Critical, Moderate, or Minor based on its relevance to the core argument.

5. **Generate specific recommendations** — For each gap, provide:
   - The type of expert or institution to seek (e.g., "public health epidemiologist specializing in occupational exposure")
   - 1–3 named examples where possible (specific researchers, organizations, journals, or databases)
   - A suggested search strategy (e.g., PubMed MeSH terms, LinkedIn search filters, specific conference proceedings, government agency publications)

6. **Flag conflicts of interest risks** — Note any domains where available experts are likely to have funding ties, advocacy positions, or institutional biases that require disclosure.

## Output Format

Produce a structured report with the following sections:

**Research Topic:** [One-line restatement of the topic and scope]

**Stakeholder Map:** Bulleted list of all relevant domains/perspectives (covered and uncovered)

**Identified Gaps:**
| Gap | Severity | Why It Matters |
|-----|----------|----------------|
| [Domain/Perspective] | Critical / Moderate / Minor | [1-sentence explanation] |

**Recommended Sources by Gap:**
For each gap listed above:
- **Gap:** [Name]
- **Expert type to seek:** [Specific description]
- **Named examples:** [1–3 names, organizations, or publications]
- **Where to find them:** [Specific search strategy or database]
- **Bias risk:** [Note any likely conflicts of interest or advocacy positions]

**Summary:** 2–3 sentences stating the most critical gaps and the single highest-priority action to take first.

Length: Scale to complexity. Simple topics may yield 300–500 words; multi-domain research may warrant 800–1200 words. Never pad — stop when all gaps are covered.
