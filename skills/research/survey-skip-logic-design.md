---
name: survey-skip-logic-design
description: >
  Designs conditional branching rules for surveys so respondents only see questions relevant to their prior answers. Use when someone wants to add skip logic to a survey, needs to map out branching paths for questionnaire questions, asks how to route respondents based on their responses, wants to reduce survey fatigue by hiding irrelevant items, or needs to document conditional display rules for a survey tool. Produces a structured skip logic map with clear if/then routing rules for each conditional question.
category: research
tags: [survey-design, branching-logic, questionnaire, conditional-routing, research-methods]
author: community
---

# Survey Skip Logic Design

This skill maps conditional branching rules for survey questions, ensuring respondents only encounter items relevant to their previous answers, and produces a structured logic document ready for implementation in survey tools.

## Skip Logic Design Workflow

### 1. Inventory All Questions
- List every question with a short ID (Q1, Q2, Q3…) and its response options
- Flag each question as **always shown**, **conditionally shown**, or **termination point**
- Note the question type: single-select, multi-select, scale, open-text

### 2. Identify Branch Points
- Find every question whose answer should alter the subsequent path
- For each branch point, define:
  - The triggering condition (e.g., "Q3 = 'No'")
  - The target action: **skip to**, **show**, **hide**, or **end survey**
- Avoid chaining more than 3 levels of nested logic without a reset anchor question

### 3. Write If/Then Rules
For every conditional question, write explicit rules in this form:
```
IF [Question ID] = [Response Value]
THEN [Action: Show Q_X | Skip to Q_X | End survey]
ELSE [Default action]
```
- Cover every response option — no orphan paths
- Where multiple conditions converge, add an OR/AND operator explicitly
- Flag mutually exclusive branches

### 4. Draw the Flow Map
- Sequence questions in a linear list with indentation showing conditional children
- Use arrows or indentation to show skip destinations
- Mark the default (non-skip) path clearly

### 5. Validate the Logic
- Trace every possible respondent path from start to finish
- Confirm no path skips a required question or loops infinitely
- Check that all paths reach a defined endpoint (submit or terminate)

### 6. Add Implementation Notes
- Note the survey platform (Qualtrics, SurveyMonkey, Typeform, etc.) if specified
- Flag any logic the platform may not natively support
- List display conditions vs. skip conditions where the tool distinguishes them

## Output Format

Produce three sections:

**1. Question Inventory Table**
| ID | Question Text (abbreviated) | Type | Always/Conditional |
|----|------------------------------|------|--------------------|
| Q1 | … | Single-select | Always |

**2. Skip Logic Rules Block**
Plain-language if/then rules for every conditional question, one rule per line, grouped by branch point question ID.

**3. Flow Map**
An indented or ASCII-arrow text diagram showing the full respondent journey, all branches, and convergence points. Example:
```
Q1 → Q2
  Q2 = "Yes" → Q3 → Q4 → END
  Q2 = "No"  → Q5 → END
```

Keep the output concise enough to hand directly to a survey developer or import into a logic-mapping tool. Flag any ambiguities or missing information that would prevent complete logic coverage.
