---
name: process-consolidation-opportunity-map
description: >
  Analyzes overlapping workflows across teams or locations to identify redundant processes that can be merged, eliminated, or standardized. Use when someone says "we have duplicate processes," asks about streamlining operations across departments, wants to find redundancies between teams, is dealing with inconsistent workflows across locations, or needs to identify consolidation opportunities before a reorganization or merger.
category: operations
tags: [process-optimization, workflow-analysis, consolidation, operations, efficiency]
author: community
---

# Process Consolidation Opportunity Map

This skill audits workflows across teams or locations to surface redundant, overlapping, or inconsistent processes and produces a prioritized map of consolidation opportunities.

## Analysis Workflow

1. **Inventory collection** — Ask the user to list all teams, departments, or locations involved, then for each: what processes they run, how frequently, who owns them, and what tools or systems they use.

2. **Overlap detection** — Cross-reference the inventory to identify:
   - Identical processes run independently by multiple teams
   - Similar processes with minor variations (candidates for standardization)
   - Processes that feed into each other but are treated as separate workflows
   - Duplicated reporting, approval, or data-entry steps

3. **Root cause classification** — For each overlap, label it as one of:
   - **Redundant**: Same output produced twice; one can be eliminated
   - **Inconsistent**: Same goal, different methods; needs standardization
   - **Fragmented**: One process split across teams that should be unified
   - **Shadow process**: Unofficial workaround replicating a formal process

4. **Impact scoring** — Rate each identified opportunity on two axes (1–5):
   - **Effort to consolidate** (1 = minimal change, 5 = major restructuring)
   - **Value of consolidation** (1 = minor efficiency gain, 5 = significant cost/time savings)

5. **Consolidation action assignment** — For each opportunity, assign one of three actions:
   - **Merge**: Combine into a single unified process
   - **Eliminate**: Remove one or more redundant instances entirely
   - **Standardize**: Keep distributed execution but enforce a common method

6. **Dependency check** — Flag any consolidation that would affect downstream systems, compliance requirements, or cross-team SLAs before finalizing recommendations.

## Output Format

Produce a structured opportunity map with three sections:

**Summary Table**
A markdown table with columns: Process Name | Teams/Locations Affected | Overlap Type | Recommended Action | Effort Score | Value Score | Priority (High/Medium/Low)

**Top 5 Consolidation Opportunities**
For each: a 3–5 sentence narrative explaining the overlap, why it exists, what consolidation action is recommended, expected benefit, and one concrete first step to execute it.

**Quick Wins List**
A bulleted list of any opportunities scoring Effort ≤ 2 and Value ≥ 3 — processes that can be consolidated immediately with minimal disruption.

Total output should be scannable in under 10 minutes and actionable without additional analysis.
