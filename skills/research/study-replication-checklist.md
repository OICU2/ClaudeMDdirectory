---
name: study-replication-checklist
description: >
  Produces a comprehensive step-by-step checklist documenting all conditions, tools, sample criteria,
  and procedures required to accurately replicate an existing study. Use when someone wants to replicate
  a study, asks how to reproduce research findings, needs to verify experimental conditions, wants to
  recreate a methodology from a paper, or is checking whether a study can be reproduced.
category: research
tags: [replication, methodology, research-design, reproducibility, checklist]
author: community
---

# Study Replication Checklist

This skill generates a structured, actionable replication checklist from a study description or paper, covering every condition, tool, sample requirement, and procedural step needed to reproduce the research accurately.

## Replication Checklist Workflow

1. **Extract Study Identity**
   - Record full citation (authors, year, title, journal/venue, DOI)
   - Note the primary hypothesis or research question being tested
   - Identify the study design type (RCT, observational, survey, lab experiment, etc.)

2. **Document Participant / Sample Criteria**
   - List all inclusion criteria exactly as specified
   - List all exclusion criteria exactly as specified
   - Record required sample size and any power analysis parameters
   - Note recruitment method, setting, and population source
   - Capture any stratification, matching, or randomization procedures

3. **Catalog Materials and Tools**
   - List every instrument, scale, or questionnaire with version numbers
   - Identify all software, packages, or platforms used (include version numbers)
   - Document hardware or lab equipment with model/specification details
   - Note any proprietary or licensed materials and how to obtain them
   - Flag any materials that have been updated since the original study

4. **Specify Environmental and Contextual Conditions**
   - Record physical setting requirements (lab, field, online, clinical)
   - Note timing constraints (time of day, duration, session intervals)
   - Document blinding procedures (single-blind, double-blind, open-label)
   - Capture any confederate roles or experimenter training requirements

5. **Map the Procedure Step by Step**
   - Break the procedure into numbered, sequential steps
   - Include exact timing, instructions read to participants, and stimulus presentation order
   - Note counterbalancing or randomization schemes per condition
   - Document any manipulation checks and when they occur
   - Record debriefing or follow-up procedures

6. **Define Variables and Measurements**
   - List all independent variables with operationalized levels
   - List all dependent variables with measurement units and instruments
   - Identify covariates and confounds the original study controlled for
   - Note any composite scores, transformations, or derived measures

7. **Detail the Analysis Plan**
   - Specify statistical tests used for each hypothesis
   - Record significance thresholds, correction methods (e.g., Bonferroni), and effect size metrics
   - Note data cleaning rules (outlier criteria, missing data handling)
   - Identify any pre-registration or analysis scripts available

8. **Flag Replication Risk Factors**
   - Identify any steps that are underspecified in the original paper
   - Note materials or conditions that may have changed since publication
   - Highlight any context-dependent factors (cultural, temporal, geographic)
   - List items that require direct author contact to clarify

## Output Format

Produce a numbered markdown checklist organized into the following labeled sections:

- **Study Identity** — citation block and research question
- **Sample Criteria** — bulleted inclusion/exclusion list with sample size target
- **Materials & Tools** — table with columns: Item | Version/Model | Source/Availability
- **Conditions & Setting** — bulleted environmental requirements
- **Procedure** — numbered sequential steps, each under 2 sentences
- **Variables & Measures** — two-column table: Variable | Operationalization
- **Analysis Plan** — bulleted list of tests, thresholds, and scripts
- **Replication Risk Notes** — flagged items in ⚠️ callout blocks

Length: as long as necessary to be complete; do not truncate for brevity. Each checklist item must be actionable (start with a verb) and specific enough that a researcher unfamiliar with the original study could execute it independently.
