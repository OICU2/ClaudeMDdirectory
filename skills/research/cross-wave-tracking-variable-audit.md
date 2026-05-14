---
name: cross-wave-tracking-variable-audit
description: >
  Reviews longitudinal survey instruments to confirm that tracked variables remain consistently defined, worded, and scaled across all study waves. Use when someone wants to audit panel survey consistency, asks whether a variable has drifted across waves, needs to verify longitudinal measurement equivalence, is preparing a multi-wave dataset for analysis, or wants to identify question wording changes in a tracking study.
category: research
tags: [longitudinal, survey-methodology, measurement, panel-data, data-quality]
author: community
---

# Cross-Wave Tracking Variable Audit

This skill systematically compares variable definitions, question wording, response scales, and skip logic across multiple survey waves to surface any inconsistencies that could compromise longitudinal validity.

## Audit Workflow

1. **Inventory all waves**: List each wave by name/year and confirm the source documents (questionnaires, codebooks, data dictionaries) are available for each.

2. **Identify tracked variables**: Compile the full list of variables intended to be longitudinally comparable. Flag any variable that appears in some waves but not others.

3. **Compare question wording verbatim**: For each tracked variable, place the exact question text from every wave side by side. Mark any word, phrase, or sentence that differs — including minor changes like punctuation, pronoun shifts, or reordering of clauses.

4. **Compare response scales**: Check that response options (labels, numeric anchors, number of points, order) are identical across waves. Flag changes such as a 5-point scale becoming a 7-point scale, or "Agree/Disagree" becoming "Never/Always."

5. **Compare variable definitions and coding rules**: Review codebooks for changes in how responses are coded, how missing values are handled, and how derived or composite variables are constructed.

6. **Check skip logic and filter conditions**: Confirm that the routing conditions determining who receives each question are identical across waves.

7. **Assess impact severity**: For each discrepancy found, classify severity:
   - **Critical**: Change invalidates direct wave-to-wave comparison (e.g., scale change, construct redefinition)
   - **Moderate**: Change may introduce systematic bias but partial comparability may remain (e.g., minor wording shift)
   - **Minor**: Cosmetic change unlikely to affect measurement (e.g., punctuation, formatting)

8. **Recommend remediation**: For each critical or moderate issue, provide a specific recommendation — such as harmonization, recoding, split-sample testing, or explicit documentation of the break in series.

## Output Format

Produce a structured audit report with the following sections:

**Summary Table** — one row per tracked variable, columns for: Variable Name | Waves Present | Wording Consistent (Y/N) | Scale Consistent (Y/N) | Coding Consistent (Y/N) | Skip Logic Consistent (Y/N) | Severity | Notes

**Discrepancy Detail Log** — for each flagged variable, a block containing:
- Variable name and label
- Wave-by-wave comparison (quoted text for wording; explicit scale descriptions)
- Severity classification with justification
- Recommended remediation action

**Overall Risk Assessment** — 2–4 sentences summarizing the proportion of variables affected, dominant issue types, and the general fitness of the instrument for longitudinal analysis.

Report length scales with the number of variables and waves; prioritize completeness over brevity. Use plain text tables or markdown tables depending on rendering context.
