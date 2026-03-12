---
name: systematic-review-protocol
description: >
  Builds a structured protocol for conducting systematic reviews with inclusion/exclusion criteria, database-specific search strings, and multi-stage screening workflows. Use when someone wants to conduct a systematic review, asks how to search literature systematically, needs to build a PICO framework, wants to design a scoping review, or is trying to eliminate bias from a literature search.
category: research
tags: [systematic-review, literature-search, PICO, evidence-synthesis, screening]
author: community
---

# Systematic Review Protocol Builder

This skill generates a complete, reproducible systematic review protocol including PICO/PICOS framework, Boolean search strings, and a staged screening workflow whenever someone needs to conduct rigorous, bias-controlled literature synthesis.

## Protocol Construction Workflow

### Step 1: Define the Research Question
- Extract or prompt for the PICO(S) components:
  - **P**opulation: who/what is being studied
  - **I**ntervention/Exposure: what is being done or applied
  - **C**omparison: control or alternative condition
  - **O**utcome: what is being measured
  - **S**tudy design (optional): RCT, cohort, case-control, etc.
- Formulate one clear, answerable research question in declarative form

### Step 2: Set Inclusion and Exclusion Criteria
Produce a criteria table covering:
- Study design types (accepted vs. excluded)
- Population characteristics (age range, diagnosis, setting)
- Intervention parameters (dose, duration, delivery method)
- Outcome measures (primary and secondary)
- Publication constraints (date range, language, peer-reviewed only)
- Exclusion flags (grey literature policy, conference abstracts, duplicates)

### Step 3: Build Database Search Strings
- Identify the 3–5 most relevant databases (e.g., PubMed/MEDLINE, Embase, Cochrane, PsycINFO, CINAHL)
- For each database:
  - Map PICO terms to MeSH/Emtree/Thesaurus controlled vocabulary
  - List free-text synonyms and spelling variants
  - Construct full Boolean string using AND/OR/NOT with field tags (e.g., [tiab], [MeSH Terms])
  - Apply filters (date, language, species)
- Include a generic cross-database string as a fallback

### Step 4: Design the Screening Workflow
- **Stage 1 — Title/Abstract Screening**: dual independent reviewers, conflict resolution rule (third reviewer or consensus)
- **Stage 2 — Full-Text Review**: apply inclusion/exclusion criteria checklist, document reasons for exclusion
- **Stage 3 — Data Extraction**: define extraction fields (author, year, sample size, intervention details, outcome data, risk of bias)
- Specify screening tool (Rayyan, Covidence, Distiller SR, or manual spreadsheet template)
- Define inter-rater reliability metric (Cohen's κ target ≥ 0.80)

### Step 5: Risk of Bias Assessment
- Select appropriate tool based on study design:
  - RCTs → Cochrane RoB 2
  - Observational → Newcastle-Ottawa Scale
  - Diagnostic → QUADAS-2
  - Any design → GRADE framework for evidence quality
- Specify who assesses and how disagreements are resolved

### Step 6: PRISMA Flow Diagram Outline
Generate a text-based PRISMA flow showing:
- Records identified per database
- Duplicates removed
- Records screened → excluded at title/abstract
- Full texts assessed → excluded with reasons
- Studies included in synthesis

## Output Format

Produce a structured protocol document with these clearly labeled sections:

1. **Research Question** — one sentence, PICO labeled inline
2. **Inclusion/Exclusion Criteria** — two-column markdown table (Criterion | Decision)
3. **Search Strings** — one code block per database, labeled with database name and date accessed
4. **Screening Workflow** — numbered stages with reviewer roles and conflict rules
5. **Data Extraction Fields** — bulleted list of all fields to capture
6. **Risk of Bias Tool** — tool name, rationale, and assessment procedure
7. **PRISMA Flow Outline** — ASCII or markdown flowchart

Total length: 600–1
