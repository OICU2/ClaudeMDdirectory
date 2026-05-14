---
name: research-question-dependency-chain-mapper
category: research
description: >
  Analyzes a set of research questions or sub-questions and maps the logical dependencies between them so researchers know which questions must be answered before others can be addressed. Use when someone says "I'm not sure what order to tackle these questions," asks about sequencing their research, wants to identify which analyses are prerequisites, needs to structure a research plan, or is figuring out what data to collect first.
tags: [research, planning, dependencies, methodology, sequencing]
author: community
---

# Research Question Dependency Chain Mapper

This skill takes a list of research questions or sub-questions and produces a sequenced dependency map so researchers can collect data and run analyses in the correct logical order without blocking themselves.

## Dependency Mapping Workflow

1. **Collect all questions**: Ask the researcher to list every sub-question, hypothesis, or analysis task they need to address. If they provide a broad research goal, decompose it into concrete, answerable sub-questions first.

2. **Classify each question by type**:
   - *Descriptive*: What exists? What is the baseline?
   - *Relational*: How do X and Y relate?
   - *Causal/Explanatory*: Why does X happen? What drives Y?
   - *Predictive/Applied*: What will happen? What should be done?

3. **Identify logical dependencies**: For each question, ask: "Can this be answered without first answering another question on the list?" Mark explicit dependencies:
   - Data dependencies (Question B requires data produced by answering Question A)
   - Conceptual dependencies (Question B's framing assumes the answer to Question A)
   - Methodological dependencies (Question B's analysis requires outputs from Question A)

4. **Detect circular dependencies**: Flag any cases where Question A depends on B and B depends on A. Propose how to break the cycle (e.g., use a proxy, assume a value, or reframe one question).

5. **Assign dependency tiers**:
   - **Tier 1 (Foundation)**: No dependencies — answer these first
   - **Tier 2 (Conditional)**: Depend only on Tier 1 questions
   - **Tier 3 (Synthesis)**: Depend on Tier 2 or multiple prior questions
   - **Tier 4+ (Integrative)**: Depend on answers across multiple tiers

6. **Flag parallel opportunities**: Identify questions within the same tier that have no dependency on each other and can be researched simultaneously.

7. **Validate with the researcher**: Present the map and ask if any dependencies were missed or if any assumed dependencies do not actually hold in their domain.

## Output Format

Produce three sections:

**1. Question Registry**
A numbered list of all questions with their assigned tier and type label.
Example:
```
Q1 [Tier 1 | Descriptive] — What is the current adoption rate of X?
Q2 [Tier 1 | Descriptive] — What demographic groups use X most?
Q3 [Tier 2 | Relational] — How does adoption rate vary by demographic? (depends on Q1, Q2)
Q4 [Tier 3 | Causal] — Why do certain demographics adopt X less? (depends on Q3)
```

**2. Dependency Chain Diagram (text-based)**
A plain-text directed graph showing arrows from prerequisite to dependent question:
```
Q1 ──┐
     ├──► Q3 ──► Q4 ──► Q6
Q2 ──┘
Q5 (independent) ──► Q7
```

**3. Sequenced Research Plan**
A prioritized action list grouped by tier, with parallel tracks labeled where applicable:
- **Phase 1 (run in parallel):** Q1, Q2, Q5
- **Phase 2 (after Phase 1):** Q3, Q7
- **Phase 3 (after Phase 2):** Q4
- **Phase 4 (final synthesis):** Q6

Include a one-sentence note on any circular dependencies found and how they were resolved. Keep the total output scannable — use tables or lists, not paragraphs.
