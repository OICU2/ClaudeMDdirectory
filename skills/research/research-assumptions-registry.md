---
name: research-assumptions-registry
description: >
  Builds and maintains a structured log of explicit assumptions underlying a research project,
  each tagged with confidence level and evidence requirements. Use when someone says "I need to
  track my research assumptions," asks about "what assumptions is my study making," wants to
  "document the foundations of my research," needs to "audit hidden assumptions in my project,"
  or is trying to "figure out what my research depends on being true."
category: research
tags: [research, assumptions, validation, methodology, documentation]
author: community
---

# Research Assumptions Registry

This skill builds and maintains a structured registry of all explicit and implicit assumptions underlying a research project, tagging each with a confidence level and the specific evidence needed to validate or invalidate it.

## Assumption Extraction & Registry Workflow

1. **Surface assumptions across three layers:**
   - *Theoretical*: conceptual frameworks, constructs, and models the research depends on
   - *Methodological*: assumptions about measurement, sampling, controls, and data validity
   - *Contextual*: assumptions about the environment, population, or conditions in which findings hold

2. **For each assumption, capture:**
   - A plain-language statement of what must be true for the research to be valid
   - The layer it belongs to (theoretical / methodological / contextual)
   - Confidence level: `High` (well-supported), `Medium` (plausible but unverified), or `Low` (speculative or untested)
   - Current evidence: what already supports this assumption, if anything
   - Validation path: the specific data, test, citation, or observation that would confirm it
   - Invalidation path: the specific finding or result that would disprove or require revising it
   - Status: `Active`, `Validated`, `Invalidated`, or `Needs Review`

3. **Prioritize ruthlessly:**
   - Flag assumptions where `Low` confidence intersects with high research centrality as **Critical Risks**
   - Flag assumptions that are untested but easily testable as **Quick Wins**

4. **Update iteratively:** When new findings, feedback, or data arrive, revisit the registry, update statuses, and surface newly exposed assumptions.

5. **Check for assumption chains:** Identify where one assumption depends on another being true. Note these dependencies explicitly.

## Output Format

Produce a markdown registry with the following structure:

---

## Research Assumptions Registry
**Project:** [project name or description]
**Last Updated:** [date]

### Critical Risks
| # | Assumption | Layer | Confidence | Validation Path | Invalidation Path | Status |
|---|-----------|-------|------------|-----------------|-------------------|--------|
| 1 | [statement] | Theoretical | Low | [specific evidence needed] | [what would disprove it] | Needs Review |

### Active Assumptions
| # | Assumption | Layer | Confidence | Current Evidence | Validation Path | Invalidation Path | Status |
|---|-----------|-------|------------|-----------------|-----------------|-------------------|--------|
| 2 | [statement] | Methodological | Medium | [existing support] | [confirmation path] | [disproof path] | Active |

### Assumption Chains
- Assumption #3 depends on Assumption #1 being true: [explain dependency]

### Quick Wins (Untested but Easily Testable)
- Assumption #4: [what test or lookup would resolve it]

### Validated / Invalidated
| # | Assumption | Final Status | Evidence |
|---|-----------|-------------|---------|
| 5 | [statement] | Validated | [citation or result] |

---

The registry should be copy-pasteable into a project document and sized to the complexity of the research — a simple project may have 5–10 entries; a complex study may have 20+. Always include at least one entry per layer.
