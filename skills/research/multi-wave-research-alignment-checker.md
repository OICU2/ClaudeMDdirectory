---
name: multi-wave-research-alignment-checker
description: >
  Analyzes research instruments and variables across multiple study waves to identify inconsistencies that would undermine longitudinal comparability. Use when someone says "check if my survey waves are consistent," asks about "variable alignment across time points," wants to "compare wave 1 and wave 2 instruments," is "merging longitudinal datasets," or needs to "validate panel study comparability."
category: research
tags: [longitudinal, survey-design, data-quality, panel-study, measurement-invariance]
author: community
---

# Multi-Wave Research Alignment Checker

This skill systematically compares research instruments, variables, and coding schemes across study waves to surface inconsistencies that would compromise longitudinal analysis before they contaminate results.

## Alignment Check Workflow

### 1. Collect Wave Documentation
Request from the user:
- Codebooks or data dictionaries for each wave
- Survey instruments or questionnaires per wave
- Variable naming conventions used in each dataset
- Any known protocol changes between waves

### 2. Build a Cross-Wave Variable Inventory
For every variable that appears in more than one wave, record:
- Variable name in each wave (flag name drift, e.g., `income_2019` vs `hh_income`)
- Question wording verbatim (flag any rewording, even minor)
- Response scale (flag changes in points, anchors, or polarity)
- Data type and units (flag numeric-to-categorical conversions or unit changes)
- Skip logic and filter conditions (flag changed eligibility criteria)
- Coding of missing values (flag -99 vs 999 vs NA inconsistencies)

### 3. Classify Each Inconsistency by Severity
Assign one of three severity levels to every flagged issue:

| Level | Label | Criteria |
|-------|-------|----------|
| 🔴 Critical | **Breaks comparability** | Response scale polarity reversed, construct redefined, variable dropped entirely |
| 🟡 Moderate | **Requires harmonization** | Wording changed meaningfully, scale points collapsed or expanded, new response option added |
| 🟢 Minor | **Document and monitor** | Variable renamed, minor punctuation/grammar change, label relabeled without value change |

### 4. Check Structural and Administrative Alignment
Beyond individual variables, verify:
- Sample eligibility criteria are identical across waves
- Reference periods match (e.g., "past 30 days" vs "past month" vs "past 6 months")
- Fieldwork timing and seasonal effects are documented
- Interviewer mode consistency (phone vs. online vs. in-person)
- Branching and module order changes that alter context effects

### 5. Flag Measurement Invariance Risks
Identify variables where invariance testing is required before pooling:
- Likert scales where wording shifted
- Composite indices where component items changed
- Any variable used as a key outcome or control in longitudinal models

### 6. Generate Recommended Remediation Actions
For each critical or moderate issue, specify:
- Whether harmonization is possible (e.g., recoding) or the variable must be wave-flagged
- Exact recode syntax needed (in pseudocode or R/Stata/Python as specified)
- Whether the issue should be disclosed as a study limitation

## Output Format

Produce a structured **Wave Alignment Report** with these sections:

---

**WAVE ALIGNMENT REPORT**
Waves compared: [list]
Variables reviewed: [N]
Issues found: [N critical / N moderate / N minor]

---

**CRITICAL ISSUES** 🔴
For each: Variable name | Wave(s) affected | Description of inconsistency | Recommended action

**MODERATE ISSUES** 🟡
For each: Variable name | Wave(s) affected | Description of inconsistency | Recommended action

**MINOR ISSUES** 🟢
For each: Variable name | Wave(s) affected | Description of inconsistency | Recommended action

**STRUCTURAL FLAGS**
Bullet list of any sample, mode, timing, or skip-logic issues found.

**VARIABLES CLEARED FOR LONGITUDINAL USE**
List of variables confirmed consistent across all waves with no action required.

**NEXT STEPS**
Numbered list of prioritized actions before analysis proceeds.

---

Report length scales with number of waves and variables. For datasets with fewer than 20 variables,
