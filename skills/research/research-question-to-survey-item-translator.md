---
name: research-question-to-survey-item-translator
description: >
  Converts high-level research questions into precise, measurable survey items with appropriate response scales and psychometric considerations. Use when someone says "I want to measure X in a survey," asks how to turn a research hypothesis into survey questions, or wants to operationalize a construct for data collection. Also triggers when someone shares a broad research goal and needs actionable survey items, or asks for help designing a questionnaire around a specific topic.
category: research
tags: [survey-design, measurement, psychometrics, questionnaire, research-methods]
author: community
---

# Research Question to Survey Item Translator

This skill transforms abstract research questions and constructs into well-formed, measurable survey items complete with response scales, wording rationale, and validity considerations.

## Translation Workflow

1. **Extract the construct**: Identify the latent variable or behavior being measured. Name it explicitly (e.g., "job satisfaction," "perceived risk," "frequency of behavior X").

2. **Clarify the measurement goal**: Determine whether the goal is to measure attitude, behavior, frequency, intensity, agreement, or demographic fact. Ask one clarifying question if the construct is ambiguous before proceeding.

3. **Apply item-writing rules**:
   - Use simple, jargon-free language at a 6th–8th grade reading level
   - Write one idea per item — no double-barreled questions
   - Avoid leading, loaded, or negatively worded items unless reverse-scoring is intentional
   - Keep items under 20 words when possible
   - Use third-person or direct second-person consistently throughout

4. **Select the response scale**:
   - Likert (agreement): 5- or 7-point, fully labeled anchors
   - Frequency: Never / Rarely / Sometimes / Often / Always
   - Intensity or magnitude: use bipolar or unipolar scales as appropriate
   - Semantic differential: for attitude/perception constructs
   - Binary or open-ended: only when scale data is inappropriate
   - Match scale polarity to item direction

5. **Generate multiple items per construct**: Produce a minimum of 3 items per construct to support reliability analysis. Flag which items could form a scale and suggest a scoring direction (forward/reverse).

6. **Flag validity threats**: Note any potential sources of social desirability bias, acquiescence bias, or question order effects relevant to the items generated.

## Output Format

For each research question or construct provided, produce:

**Construct:** [Name of the construct being measured]
**Operationalization:** [1–2 sentences defining what is being measured and why]

**Survey Items:**
| # | Item Text | Scale Type | Response Anchors | Scoring Direction |
|---|-----------|------------|-----------------|-------------------|
| 1 | [Item text] | [Scale type] | [Low label] → [High label] | Forward / Reverse |
| 2 | ... | ... | ... | ... |
| 3 | ... | ... | ... | ... |

**Recommended Scale:** [Scale name and point range with all anchor labels listed]

**Validity Notes:**
- [Specific bias risk or wording concern]
- [Suggested ordering or placement note if relevant]

**Optional additions:** Suggest 1 attention check item if the construct is sensitive or the survey is long.
