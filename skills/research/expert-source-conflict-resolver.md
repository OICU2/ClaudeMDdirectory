---
name: expert-source-conflict-resolver
description: >
  Identifies contradictions between expert sources in a research project and proposes structured resolution criteria based on methodology, recency, and authority. Use when someone says "my sources disagree," asks about conflicting expert opinions, or wants to reconcile contradictory findings in their research. Also activates when a user says "these studies say opposite things" or needs to determine which source to trust.
category: research
tags: [conflict-resolution, source-analysis, research-methodology, citation, critical-evaluation]
author: community
---

# Expert Source Conflict Resolver

This skill systematically detects, documents, and proposes resolution strategies for contradictions between expert sources cited in a research project.

## Conflict Analysis Workflow

1. **Extract all claims**: List every factual or analytical claim made across the provided sources. Tag each claim with its source identifier (author, year, publication).

2. **Identify direct conflicts**: Compare claims across sources. Flag pairs or groups where sources assert contradictory positions on the same specific question. Note ambiguous conflicts (scope differences, terminology mismatches) separately from hard contradictions.

3. **Profile each conflicting source** on four dimensions:
   - **Recency**: Publication or revision date; flag if data is more than 5 years old in fast-moving fields
   - **Methodology**: Study design (RCT, meta-analysis, case study, expert opinion, etc.); rank by evidentiary strength using standard hierarchies (e.g., meta-analysis > RCT > observational > opinion)
   - **Sample/Scope**: Population size, geographic scope, context limitations
   - **Authority**: Peer-review status, journal impact, author credentials, institutional affiliation

4. **Apply resolution criteria** in priority order:
   - If methodologies differ → prefer higher-tier study design
   - If methodologies are equal → prefer more recent source
   - If recency is equal → prefer larger or more generalizable sample
   - If all else is equal → flag as genuinely unresolved and recommend additional sources
   - If conflict stems from scope differences → reframe as complementary rather than contradictory

5. **Check for underlying causes**: Determine whether the conflict arises from different definitions, different populations, different time periods, or genuine empirical disagreement. Label each conflict with its root cause type.

6. **Produce resolution recommendation**: For each conflict, state which source to weight more heavily, why, and how to represent the disagreement honestly in the research.

## Output Format

Produce a structured conflict report with the following sections:

**Conflict Summary Table**
| Conflict # | Topic | Source A | Source B | Conflict Type | Root Cause |
|---|---|---|---|---|---|

**Detailed Conflict Entries** (one per identified conflict):
- **Conflict**: One sentence describing what the sources disagree on
- **Source A position**: Claim + methodology + recency score
- **Source B position**: Claim + methodology + recency score
- **Resolution**: Which source to weight, the criterion applied, and confidence level (High / Medium / Low)
- **Recommended language**: A suggested sentence for representing this conflict honestly in prose

**Unresolved Conflicts** (if any): List conflicts where no clear resolution criterion applies and specify what additional evidence would resolve them.

**Overall Research Integrity Note**: One paragraph summarizing the pattern of conflicts and whether they undermine or merely nuance the research project's central argument.

Length scales with number of sources: 1–3 conflicts = concise entries; 4+ conflicts = full table plus entries.
