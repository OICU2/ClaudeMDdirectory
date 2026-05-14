---
name: research-timeline-builder
description: >
  Generates a phased research project timeline with milestones, dependencies, and buffer periods
  based on scope, team size, and delivery deadline. Use when someone says "help me plan my research
  project," asks about "how long will this study take," wants to "map out research phases," needs to
  "build a timeline for my thesis or study," or is trying to "schedule a research project from start
  to finish."
category: research
tags: [timeline, planning, milestones, project-management, research-phases]
author: community
---

# Research Timeline Builder

Constructs a structured, phased research project timeline with dependencies and buffer periods when a user needs to plan and schedule a research effort end-to-end.

## Workflow

1. **Gather inputs** — Before building the timeline, confirm you have:
   - Research scope (topic area, breadth, and depth expected)
   - Team size and roles (solo researcher, small team, large team with PIs, RAs, etc.)
   - Hard delivery deadline (final report, thesis defense, publication submission, etc.)
   - Any known constraints (data access delays, IRB approval, funding cycles, conference deadlines)

2. **Identify research phases** — Break the project into standard phases appropriate to the domain:
   - Literature review & background research
   - Hypothesis formation or research question refinement
   - Study design / methodology planning
   - Data collection or experiment execution
   - Data analysis and interpretation
   - Writing and drafting
   - Review, revision, and finalization
   - Submission or presentation

3. **Estimate phase durations** — Apply these heuristics scaled to scope and team size:
   - Solo researcher: multiply baseline phase durations by 1.5×
   - Small team (2–4): use baseline durations
   - Large team (5+): reduce by 20% but add coordination overhead (10% of total)
   - Narrow scope: compress literature review and design phases
   - Broad/novel scope: expand analysis and writing phases

4. **Map dependencies** — Explicitly note which phases cannot start until a prior phase completes (e.g., data collection cannot begin before IRB approval or study design is finalized).

5. **Insert buffer periods** — Add buffer after each high-risk phase:
   - 10% buffer after data collection (delays are common)
   - 15% buffer before the final deadline (for unexpected revisions)
   - Flag external dependency blocks (IRB, partner data, participant recruitment) as variable-length with a minimum and maximum estimate

6. **Assign milestone markers** — Place named milestones at:
   - End of literature review
   - Approval of methodology
   - Data collection complete
   - First full draft complete
   - Final submission/delivery

7. **Validate against deadline** — Work backward from the delivery deadline to confirm the timeline fits. If it does not fit, surface trade-off options (reduce scope, increase team, defer non-critical phases).

## Output Format

Produce the following sections in order:

**Project Summary**
- One-line summary: scope, team size, deadline

**Phase Timeline Table**
A markdown table with columns:
| Phase | Start | End | Duration | Dependencies | Buffer | Owner |

Populate every row. Use relative week numbers (Week 1, Week 2, etc.) if no calendar start date is provided, or calendar dates if a start date is given.

**Milestone List**
A numbered list of milestones with target dates and a one-sentence success criterion for each.

**Dependency Map**
A plain-text or markdown list showing phase → phase dependencies (e.g., "Data Collection → requires: IRB Approval, Study Design finalized").

**Risk & Buffer Notes**
A short bulleted list (3–6 items) calling out the highest-risk phases, the rationale for each buffer period, and any external dependencies that could shift the entire timeline.

**Trade-off Options** (only if timeline does not fit within deadline)
A brief list of 2–3 concrete adjustments the researcher could make to bring the project within scope.

Length: Medium (typically 300–600 words of output plus the table). Use markdown throughout.
