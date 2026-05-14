---
name: mixed-methods-integration-protocol
description: >
  Designs a structured protocol for integrating quantitative and qualitative findings within a mixed-methods study. Use when someone needs to combine survey data with interview findings, wants to reconcile conflicting results across methods, asks how to merge statistical and thematic analyses, needs to report mixed-methods findings coherently, or is designing a study that uses both numeric and narrative data sources.
category: research
tags: [mixed-methods, research-design, data-integration, qualitative, quantitative]
author: community
---

# Mixed-Methods Integration Protocol Designer

This skill produces a step-by-step integration protocol that specifies how quantitative and qualitative data streams should be merged, reconciled when they conflict, and reported as a unified set of findings.

## Integration Protocol Workflow

### 1. Map the Study Architecture
- Identify the design type: convergent parallel, explanatory sequential, exploratory sequential, or embedded
- List each data strand (e.g., survey N=400, semi-structured interviews N=20) with its timing (concurrent or phased)
- Clarify the priority weighting: QUAN + qual, QUAL + quan, or equal status (QUAN = QUAL)

### 2. Define the Integration Point(s)
- Specify exactly where integration occurs: at data collection, analysis, interpretation, or reporting
- For sequential designs, state what quantitative results trigger or shape qualitative inquiry (or vice versa)
- For convergent designs, state whether integration happens via joint display, data transformation, or narrative weaving

### 3. Establish Convergence and Divergence Rules
**When findings converge:**
- Use triangulation logic: note which strand confirms which finding and state the combined confidence level
- Report as: "Both the [quantitative finding] and [qualitative theme] indicate X, strengthening confidence in this result"

**When findings diverge or contradict:**
- Do not suppress or average the conflict — treat it as a finding
- Apply the following decision tree:
  1. Check for population mismatch (different subgroups answering differently)
  2. Check for construct mismatch (terms measured differently across strands)
  3. Check for timing mismatch (data collected at different phases)
  4. If none apply, report the contradiction explicitly and generate hypotheses explaining it
- Label divergent findings as "dissonant results" requiring follow-up or theoretical explanation

### 4. Build the Joint Display
- Create a matrix or figure with quantitative results in one column and corresponding qualitative themes in the adjacent column
- Add a third column: "Integration Inference" — one sentence synthesizing what both strands together mean
- Flag each row as: Convergent / Divergent / Expansive (qualitative adds nuance not captured quantitatively)

### 5. Establish Legitimation Checks
- Apply at least two legitimation strategies (Onwuegbuzie & Johnson): sample integration, within-strand, commensurability, conversion, paradigmatic mixing
- Document which threats to mixed-methods validity were mitigated and how

### 6. Set Reporting Structure
- Order findings by research question, not by method
- For each research question: present quantitative result → qualitative theme → integration inference → confidence rating (High / Moderate / Low / Dissonant)
- Place method-specific details (statistics tables, codebooks) in appendices, not the main narrative

## Output Format

Produce a structured protocol document with the following sections:

**Study Architecture Summary** (3–5 bullet points identifying design type, strands, timing, and priority)

**Integration Points Table** (markdown table: Integration Point | Method | Trigger Condition | Output)

**Convergence/Divergence Decision Rules** (numbered decision tree with explicit handling for each scenario)

**Joint Display Template** (markdown table with columns: Research Question | Quantitative Finding | Qualitative Theme | Integration Inference | Status)

**Legitimation Strategy List** (bullet list of 2–4 applied strategies with one-line rationale each)

**Reporting Order Outline** (numbered list showing how findings will be sequenced in the final report)

Total length: 400–700 words. Use markdown headers, tables, and bullet lists throughout. No prose padding — every sentence must carry a decision, rule, or structural element.
