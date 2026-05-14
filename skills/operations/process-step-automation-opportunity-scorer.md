---
name: process-step-automation-opportunity-scorer
description: >
  Evaluates each step in an operational process and scores its automation feasibility based on frequency, rule-based logic, and error rate. Use when someone says "which parts of this process can we automate," asks about automation opportunities in a workflow, wants to prioritize automation efforts, needs to assess manual steps for automation potential, or is building a business case for process automation.
category: operations
tags: [automation, process-improvement, workflow-analysis, operations, scoring]
author: community
---

# Process Step Automation Opportunity Scorer

This skill analyzes each step in an operational process and produces a scored, ranked assessment of automation feasibility to help teams prioritize where to invest automation effort.

## Scoring Methodology

For each process step identified, evaluate and score across three dimensions on a 1–5 scale:

### 1. Frequency Score (1–5)
- 5 = Multiple times per day
- 4 = Daily
- 3 = Weekly
- 2 = Monthly
- 1 = Rarely / ad hoc

### 2. Rule-Based Logic Score (1–5)
- 5 = Fully deterministic; always follows the same decision tree with no exceptions
- 4 = Mostly rule-based with rare edge cases
- 3 = Has clear rules but requires occasional human judgment
- 2 = Significant judgment required; rules are inconsistently applied
- 1 = Highly contextual or creative; no reliable rules exist

### 3. Error Rate / Rework Score (1–5)
- 5 = Very high error rate or frequent rework when done manually
- 4 = Errors occur regularly and cause downstream impact
- 3 = Occasional errors with moderate impact
- 2 = Rare errors with minor impact
- 1 = Nearly error-free when done manually

### Composite Automation Score
Calculate: **(Frequency × 0.35) + (Rule-Based Logic × 0.40) + (Error Rate × 0.25)**

Multiply result by 4 to normalize to a 100-point scale.

### Automation Tier Classification
- **80–100**: High Priority — Strong automation candidate; pursue immediately
- **60–79**: Medium Priority — Good candidate; assess tooling and ROI
- **40–59**: Low Priority — Possible partial automation or decision-support tooling
- **Below 40**: Not Recommended — Keep manual; automation cost likely exceeds benefit

## Process for Applying the Skill

1. **Extract process steps**: Ask the user to list or describe all steps in the process. If the process is described in paragraph form, parse it into discrete numbered steps before scoring.
2. **Clarify ambiguous steps**: If frequency, logic structure, or error rate are unclear for a step, ask targeted clarifying questions before scoring.
3. **Score each step**: Apply all three dimension scores independently, then calculate the composite score.
4. **Classify each step**: Assign an automation tier based on the composite score.
5. **Identify dependencies**: Note any steps where automation of one step is blocked by or dependent on automating another step.
6. **Recommend automation approach**: For High and Medium Priority steps, suggest a concrete automation method (e.g., RPA, API integration, scheduled script, rule engine, AI-assisted routing).

## Output Format

Produce a structured report with the following sections:

---

**Process Automation Opportunity Report**
*Process Name: [name provided or inferred]*

**Summary Table**

| Step # | Step Description | Frequency | Rule-Based Logic | Error Rate | Composite Score | Tier |
|--------|-----------------|-----------|-----------------|------------|-----------------|------|
| 1 | [description] | X/5 | X/5 | X/5 | XX/100 | High/Medium/Low/Not Recommended |

**Top Automation Opportunities**
List the top 3 steps by composite score with:
- Why it scored high
- Recommended automation approach (specific tool type or method)
- Estimated complexity to implement (Low / Medium / High)

**Dependency Notes**
Call out any sequencing constraints where one step must be automated before another can be.

**Steps to Avoid Automating**
List steps scoring below 40 and briefly explain why manual handling is preferred.

**Recommended Next Steps**
3–5 concrete actions the team should take to move forward on the highest-
