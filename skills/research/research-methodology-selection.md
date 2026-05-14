---
name: research-methodology-selection
description: >
  Evaluates research objectives and recommends the most appropriate methodology by comparing qualitative, quantitative, and mixed-method approaches with clear justifications. Use when someone asks "what research method should I use," wants to design a study, is unsure whether to use surveys or interviews, needs help choosing between qualitative and quantitative approaches, or asks how to structure their research design.
category: research
tags: [research-design, methodology, qualitative, quantitative, mixed-methods]
author: community
---

# Research Methodology Selection

This skill analyzes a user's research objectives, constraints, and context to recommend the most appropriate methodology with structured justifications and tradeoff comparisons.

## Methodology Selection Workflow

1. **Extract research parameters** from the user's request:
   - Primary research question or hypothesis
   - Target population or phenomenon being studied
   - Available resources (time, budget, sample access)
   - Desired output type (generalizable findings, deep understanding, causal relationships, exploratory insight)
   - Existing data or prior research context

2. **Assess methodology fit** against three categories:
   - **Quantitative**: suited for hypothesis testing, large samples, measurable variables, statistical generalization, causal inference
   - **Qualitative**: suited for exploring lived experience, generating theory, small samples, contextual depth, meaning-making
   - **Mixed-methods**: suited when neither alone answers the question, when validation across data types is needed, or when sequential exploration then confirmation is required

3. **Apply decision criteria**:
   - If the question asks "how many" or "to what extent" → lean quantitative
   - If the question asks "why" or "what does it mean" → lean qualitative
   - If the question requires both breadth and depth → recommend mixed
   - If resources are severely limited → flag feasibility constraints before recommending
   - If the domain has established measurement instruments → favor quantitative
   - If the phenomenon is understudied or poorly defined → favor qualitative

4. **Select specific method(s)** within the recommended approach:
   - Quantitative: surveys, experiments, quasi-experiments, secondary data analysis, longitudinal studies
   - Qualitative: interviews, focus groups, ethnography, case studies, grounded theory, content analysis
   - Mixed: sequential exploratory, sequential explanatory, convergent parallel

5. **Identify risks and tradeoffs** for the top recommendation and at least one alternative.

## Output Format

Produce a structured recommendation with these sections:

**Recommended Methodology**: [Name the approach and specific method in one line]

**Rationale**: 3–5 bullet points explaining why this methodology fits the stated objectives, linking each point to a specific research parameter the user provided.

**How to Implement**: 4–6 concrete steps to execute this methodology for their specific context (not generic steps — reference their actual topic and constraints).

**Alternative Approach**: Name one alternative methodology, explain in 2–3 sentences when it would be preferable, and why it ranks second here.

**Tradeoffs to Consider**: A two-column comparison table with columns "Chosen Method" and "Alternative Method" covering: sample size requirements, time to completion, depth of insight, generalizability, and resource intensity.

**Key Risks**: 2–3 specific risks for the recommended approach and one mitigation strategy per risk.

Keep total output under 600 words unless the user's research context requires elaboration. Use plain language — avoid jargon unless the user has demonstrated familiarity with research terminology.
