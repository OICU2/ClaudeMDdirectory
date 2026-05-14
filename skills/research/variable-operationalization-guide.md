---
name: variable-operationalization-guide
description: >
  Creates a structured operationalization guide that defines exactly how each abstract research variable
  will be measured, coded, and recorded across a study. Use when someone needs to define their research
  variables, asks how to measure a concept consistently, wants to standardize data collection across
  multiple coders, needs to turn theoretical constructs into observable indicators, or is building a
  codebook for a research project.
category: research
tags: [research-design, measurement, codebook, data-collection, variables]
author: community
---

# Variable Operationalization Guide

This skill generates a comprehensive operationalization guide that translates abstract research variables into precise, measurable definitions, coding rules, and recording procedures to ensure consistency across all data collectors and instruments.

## Operationalization Workflow

### 1. Identify and List All Variables
- Extract every variable mentioned (independent, dependent, moderating, mediating, control)
- Classify each as: continuous, ordinal, nominal, or binary
- Flag any variables that are composites or latent constructs requiring multiple indicators

### 2. Define Each Variable Operationally
For every variable, specify:
- **Conceptual definition**: What the variable represents theoretically
- **Operational definition**: Exactly what observable phenomenon will be measured
- **Unit of measurement**: The scale, unit, or category system used (e.g., Likert 1–5, milliseconds, yes/no, count)
- **Source/instrument**: Where the data comes from (survey item, sensor, observation log, archival record)

### 3. Establish Coding Rules
- Write explicit decision rules for every ambiguous case
- Provide inclusion and exclusion criteria with concrete examples
- Define boundary conditions (e.g., what counts as "high" vs. "moderate" vs. "low")
- Specify how missing or ambiguous data should be handled (e.g., code as 99, flag for review)

### 4. Specify Recording Procedures
- Name the exact variable label/column header to use in the dataset
- State the data type (integer, float, string, boolean)
- Define valid value ranges or permitted values
- Note any transformations applied before recording (e.g., log transform, reverse coding)

### 5. Create Anchor Examples
- Provide at least two concrete examples per variable: one clear case and one edge case
- For categorical variables, give one example per category level

### 6. Address Inter-Rater Reliability (if applicable)
- Identify which variables require human judgment
- Specify the reliability metric to use (Cohen's κ, ICC, Krippendorff's α)
- State the minimum acceptable reliability threshold

## Output Format

Produce a structured guide with one section per variable using this template, repeated for every variable:

---
**Variable Name:** `variable_label`
**Type:** [Continuous / Ordinal / Nominal / Binary]
**Conceptual Definition:** One sentence defining the theoretical construct.
**Operational Definition:** One to two sentences stating exactly what is observed or measured.
**Instrument/Source:** Name of the tool, question, sensor, or record.
**Measurement Scale:** Scale name and range (e.g., Likert 1–5; seconds; 0=absent, 1=present).
**Coding Rules:**
- Rule 1
- Rule 2
- Missing data handling: [procedure]

**Valid Values / Range:** [e.g., integers 1–7; strings from controlled vocabulary list]
**Dataset Column Label:** `exact_column_name`
**Data Type:** [integer / float / string / boolean]
**Anchor Examples:**
- Clear case: [example]
- Edge case: [example + coding decision]

**Reliability Notes:** [Required metric and threshold, or "N/A — objective measure"]
---

After all variables, append a **Consistency Checklist** with yes/no items confirming that every variable has a unique column label, valid value range, missing-data rule, and at least one anchor example. Keep language precise and free of jargon; every rule must be actionable by a research assistant with no prior study knowledge.
