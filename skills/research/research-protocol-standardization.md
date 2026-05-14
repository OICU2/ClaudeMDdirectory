---
name: research-protocol-standardization
category: research
description: >
  Generates a standardized research protocol document defining methodology, data collection procedures, quality controls, and analysis steps for a given study. Use when someone says "I need a research protocol," asks about "how to standardize my study procedures," or wants to "document their research methodology," "create a data collection framework," or "define quality controls for a study."
tags: [research, methodology, documentation, data-collection, quality-control]
author: community
---

# Research Protocol Standardization

This skill produces a complete, structured research protocol document that defines all procedural, methodological, and quality standards for a study, activated whenever someone needs to formalize or document their research approach.

## Protocol Generation Workflow

1. **Identify study parameters**: Extract or ask for study title, research questions, hypotheses, study design (RCT, observational, qualitative, etc.), target population, and timeline.

2. **Define scope and objectives**: Write a concise study rationale, list primary and secondary objectives, and specify measurable outcomes with clear operationalized definitions.

3. **Document methodology**:
   - Study design type and justification
   - Sampling strategy (method, sample size, inclusion/exclusion criteria)
   - Recruitment and consent procedures
   - Blinding or randomization procedures if applicable

4. **Specify data collection procedures**:
   - List all instruments, tools, or measures with version numbers
   - Define data collection timeline and frequency
   - Assign roles and responsibilities for each collection step
   - Specify data storage format, location, and access controls

5. **Define quality control measures**:
   - Inter-rater reliability thresholds and calibration procedures
   - Data validation rules and acceptable value ranges
   - Deviation and protocol amendment handling procedures
   - Auditing schedule and responsible parties

6. **Outline analysis plan**:
   - Statistical or qualitative analysis methods mapped to each objective
   - Software tools and versions to be used
   - Missing data handling strategy
   - Pre-specified subgroup or sensitivity analyses

7. **Add compliance and ethics section**:
   - IRB/ethics board requirements
   - Data privacy regulations (HIPAA, GDPR, etc.) that apply
   - Conflict of interest disclosures
   - Adverse event reporting procedures if applicable

8. **Version and approval block**: Include protocol version number, date, author names, reviewer names, and approval signatures block.

## Output Format

Produce a structured Markdown document with the following sections in order:

```
# Research Protocol: [Study Title]
**Version:** X.X | **Date:** YYYY-MM-DD | **Status:** Draft/Final

## 1. Study Overview
## 2. Objectives and Outcomes
## 3. Study Design and Methodology
## 4. Data Collection Procedures
## 5. Quality Control Measures
## 6. Statistical / Analysis Plan
## 7. Ethics and Compliance
## 8. Roles and Responsibilities
## 9. Protocol Version History
## 10. Approval Signatures
```

- Each section must contain numbered sub-items or a table where appropriate
- Quality control and analysis sections must be specific enough to be reproducible by a third party
- Flag any missing information with `[REQUIRED: describe what is needed]` placeholders
- Total length: 600–1500 words depending on study complexity
- Use tables for timelines, roles, and inclusion/exclusion criteria
