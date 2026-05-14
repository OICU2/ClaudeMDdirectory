---
name: expert-consensus-mapping
description: >
  Aggregates and compares positions from multiple expert interviews, papers, or sources to identify where experts agree, disagree, or leave questions unresolved on a research topic. Use when someone says "what do experts think about," asks to "compare expert views on," wants to "map the debate around," needs to "find consensus on," or is trying to "understand where experts diverge" on a topic.
category: research
tags: [consensus, expert-analysis, comparative-research, synthesis, debate-mapping]
author: community
---

# Expert Consensus Mapping

This skill synthesizes positions from multiple expert sources to produce a structured map of agreement, disagreement, and open questions on a given research topic.

## Workflow

1. **Identify the research topic and scope**: Clarify the specific question or domain being mapped. If the user hasn't defined boundaries (e.g., time period, field, geography), ask before proceeding.

2. **Collect expert positions**: Gather positions from the provided sources (interviews, papers, reports, quotes). If no sources are provided, draw on known expert literature and flag that user-supplied sources would improve accuracy.

3. **Extract discrete claims**: For each source, extract the specific, falsifiable or arguable claims the expert makes. Strip hedging language to get to the core position. Note any caveats the expert explicitly states.

4. **Categorize each claim by type**:
   - Empirical (what is true)
   - Causal (why it happens)
   - Prescriptive (what should be done)
   - Predictive (what will happen)

5. **Map positions across experts**: For each claim or sub-topic, record which experts agree, disagree, or are silent. Distinguish between:
   - **Strong consensus**: Most or all experts hold the same position
   - **Majority view with dissent**: One or two outliers diverge with reasoning
   - **Active debate**: Experts hold meaningfully different positions with competing evidence
   - **Unresolved / no expert position**: The question exists but experts haven't addressed it

6. **Identify the nature of disagreements**: For each divergence, determine whether experts disagree on facts, methodology, values, definitions, or interpretation of the same evidence.

7. **Flag unresolved questions**: Note gaps where experts acknowledge uncertainty or where no clear position has emerged in the literature.

## Output Format

Produce the following structure:

---

**Topic**: [Stated research question]
**Sources analyzed**: [List of experts/sources with brief identifier]

---

### Consensus Areas
- [Claim]: Agreed upon by [Expert A, B, C]. Brief rationale shared across sources.

### Majority Views with Notable Dissent
- [Claim]: Held by [A, B, C]. Dissented by [D] because [specific reason].

### Active Debates
- [Sub-topic]: [Expert A] argues [position] based on [reasoning]. [Expert B] counters with [position] based on [reasoning]. Nature of disagreement: [factual / methodological / values-based / definitional].

### Unresolved Questions
- [Question]: Not yet addressed or acknowledged as uncertain by [experts]. Why it matters: [brief note].

### Synthesis Note
[2–4 sentences summarizing the overall state of expert opinion: where the field is settled, where it is live, and what the most consequential open question is.]

---

Length scales with the number of sources and claims. For 3–5 sources, expect 400–700 words. For 10+ sources, expect 800–1,400 words. Use bullet points within each section; do not use dense paragraphs.
