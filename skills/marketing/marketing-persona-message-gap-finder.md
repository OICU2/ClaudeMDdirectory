---
name: marketing-persona-message-gap-finder
description: >
  Analyzes marketing copy against defined persona profiles to identify messaging gaps, misalignments, and missed opportunities. Use when someone says "our messaging isn't resonating," asks whether copy speaks to a specific audience, or wants to audit marketing materials against buyer personas. Also activates when someone needs to check if content matches their ICP or wants to find blind spots in their marketing communication.
category: marketing
tags: [personas, messaging, copywriting, audience-alignment, content-audit]
author: community
---

# Marketing Persona Message Gap Finder

This skill compares existing marketing copy against defined persona profiles to surface specific messaging gaps, tone misalignments, and unaddressed pain points, then delivers a prioritized gap report with rewrite recommendations.

## Analysis Workflow

### Step 1: Gather Inputs
Request the following if not already provided:
- The marketing copy to audit (landing page, email, ad, etc.)
- One or more persona profiles, including: demographics, job role, goals, pain points, objections, preferred tone, and decision-making criteria
- The intended funnel stage (awareness, consideration, decision)

If personas are not formally documented, prompt the user to describe their target audience in plain language before proceeding.

### Step 2: Map Copy to Persona Dimensions
For each persona, evaluate the submitted copy across these six dimensions:

1. **Pain Point Coverage** — Does the copy address the persona's top pain points? List which are mentioned, which are absent.
2. **Goal Alignment** — Does the copy connect the product/service to what the persona is trying to achieve?
3. **Objection Handling** — Are the persona's known objections acknowledged or preempted?
4. **Tone and Voice Match** — Does the language style (formal/casual, technical/plain) match the persona's communication preferences?
5. **Funnel Stage Fit** — Is the message depth and call-to-action appropriate for where this persona is in their buying journey?
6. **Vocabulary and Terminology** — Does the copy use words and phrases the persona recognizes and uses themselves?

### Step 3: Score Each Dimension
Rate each dimension per persona:
- ✅ Aligned — copy directly addresses this dimension
- ⚠️ Partial — copy touches on it but insufficiently
- ❌ Gap — copy is silent or misaligned on this dimension

### Step 4: Identify Root Causes
For each ❌ or ⚠️ finding, identify whether the gap is caused by:
- Missing content (topic never addressed)
- Wrong framing (topic present but positioned incorrectly)
- Tone mismatch (right message, wrong voice)
- Wrong funnel stage assumption (too early/late in the buyer journey)

### Step 5: Generate Rewrite Suggestions
For each critical gap, produce a concrete rewrite or addition — not generic advice. Show the before (if applicable) and the suggested replacement or insertion.

## Output Format

Produce a structured gap report with the following sections:

---

**Persona:** [Persona name or label]
**Copy Audited:** [Title or description of the material]
**Funnel Stage:** [Awareness / Consideration / Decision]

### Gap Summary Table

| Dimension | Status | Finding |
|---|---|---|
| Pain Point Coverage | ✅/⚠️/❌ | [1-sentence finding] |
| Goal Alignment | ✅/⚠️/❌ | [1-sentence finding] |
| Objection Handling | ✅/⚠️/❌ | [1-sentence finding] |
| Tone and Voice Match | ✅/⚠️/❌ | [1-sentence finding] |
| Funnel Stage Fit | ✅/⚠️/❌ | [1-sentence finding] |
| Vocabulary Match | ✅/⚠️/❌ | [1-sentence finding] |

### Critical Gaps (❌ items)

For each critical gap:
- **Gap:** [What is missing or misaligned]
- **Root Cause:** [Missing content / Wrong framing / Tone mismatch / Wrong funnel stage]
- **Recommended Fix:** [Specific rewrite, new line, or structural change — 1-3 sentences of actual copy or direction]

### Partial Gaps (
