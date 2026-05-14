---
name: research-scope-creep-log
description: >
  Tracks deviations from the original research scope by comparing current objectives, sample definitions, and methods against the approved research protocol to flag unauthorized expansions. Use when someone says "we added a few extra questions to the survey," asks about whether a new subgroup analysis was planned, or wants to include additional variables that weren't in the original protocol. Also activates when someone mentions the study "evolved" during data collection or wonders if a new outcome measure is acceptable to report.
category: research
tags: [research-integrity, protocol-compliance, scope-management]
author: community
---

# Research Scope Creep Log

This skill audits active research projects for deviations from the approved protocol by systematically comparing current practices against the original scope and producing a documented log of flagged discrepancies.

## Scope Deviation Detection Workflow

1. **Establish the baseline protocol** — Ask the user to provide or summarize the approved research protocol, including: original research questions, primary and secondary outcomes, sample inclusion/exclusion criteria, data collection instruments, and approved analysis plan.

2. **Capture current state** — Prompt the user to describe what is actually happening now: questions being asked, populations being sampled, variables being collected, and analyses being run or planned.

3. **Compare across four dimensions:**
   - **Objectives:** Has the research question shifted, narrowed, or expanded beyond what was approved?
   - **Sample:** Are participants being included or excluded in ways not specified in the protocol? Has the target population changed?
   - **Measures/Instruments:** Were new items, scales, or data sources added after approval? Were any removed?
   - **Analysis Plan:** Are post-hoc subgroup analyses, unplanned outcomes, or exploratory analyses being reported as confirmatory?

4. **Classify each deviation by type:**
   - `EXPANSION` — scope has grown beyond what was approved
   - `SUBSTITUTION` — an approved element was replaced with something different
   - `OMISSION` — an approved element was dropped without documentation
   - `AMBIGUOUS` — deviation is unclear and requires clarification

5. **Assess risk level for each deviation:**
   - `HIGH` — affects primary outcomes, sample integrity, or requires IRB/ethics re-review
   - `MEDIUM` — affects secondary outcomes or analytical rigor
   - `LOW` — minor wording or procedural variation unlikely to affect validity

6. **Recommend remediation** — For each flagged item, specify one of: (a) submit a protocol amendment, (b) document as a deviation in the study record, (c) remove the unapproved element, or (d) consult IRB/ethics board before proceeding.

## Output Format

Produce a structured **Scope Creep Log** with the following sections:

```
## Scope Creep Log — [Study Name or Identifier]
Date Reviewed: [date]
Protocol Version Referenced: [version or date of original protocol]

---

### Summary
- Total deviations flagged: [N]
- HIGH risk: [N] | MEDIUM risk: [N] | LOW risk: [N]
- Immediate action required: [Yes/No]

---

### Deviation Entries

**DEV-001**
- Dimension: [Objectives / Sample / Measures / Analysis]
- Type: [EXPANSION / SUBSTITUTION / OMISSION / AMBIGUOUS]
- Risk Level: [HIGH / MEDIUM / LOW]
- Description: [What changed, when it was introduced, and how it differs from the protocol]
- Protocol Reference: [Quote or cite the relevant approved protocol section]
- Recommended Action: [Specific next step]

[Repeat for each deviation]

---

### Items Reviewed with No Deviation
- [List protocol elements confirmed to be unchanged]
```

Each deviation entry must be concrete and cite a specific protocol element. Do not flag normal iterative decisions made before protocol approval. Only flag changes introduced after the protocol was finalized and approved.
