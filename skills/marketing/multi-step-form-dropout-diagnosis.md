---
name: multi-step-form-dropout-diagnosis
description: >
  Analyzes multi-step lead capture forms to identify friction points and abandonment causes before form submission. Use when someone says their form completion rates are low, asks why users are dropping off mid-form, wants to reduce lead form abandonment, is troubleshooting a multi-step signup flow, or needs to improve form conversion rates.
category: marketing
tags: [conversion-optimization, lead-generation, form-ux, funnel-analysis, cro]
author: community
---

# Multi-Step Form Dropout Diagnosis

This skill audits multi-step lead capture form sequences to pinpoint specific fields, steps, and structural issues causing users to abandon before submitting, then delivers prioritized fixes.

## Diagnosis Workflow

### 1. Gather Form Intelligence
Ask the user to provide:
- The complete field list in order, grouped by step/page
- Available drop-off data (e.g., "60% leave at step 2") — if none, proceed with heuristic analysis
- The form's goal (demo request, newsletter, quote, gated content, etc.)
- Traffic source (paid, organic, referral) if known

### 2. Audit Each Step Against Friction Criteria
Evaluate every step and field using these rules:

**Cognitive Load**
- Flag any step with more than 4 fields
- Flag open-text fields that could be dropdowns or toggles
- Flag ambiguous labels (e.g., "Company size" — employees? revenue?)

**Trust & Commitment Escalation**
- Flag sensitive fields (phone, budget, company revenue) appearing before trust is established
- Flag steps that ask for high-commitment information (credit card, SSN, detailed business info) before value has been communicated
- Flag missing progress indicators or unclear step count

**Premature Qualification**
- Flag fields that serve internal sales scoring but add zero user value (e.g., "How did you hear about us?" on step 1)
- Flag fields that can be collected post-conversion instead

**Sequencing Problems**
- Flag logical misordering (e.g., asking job title before company name)
- Flag topic jumps between steps with no transitional context
- Flag final steps that introduce unexpected new field categories

**Motivation Gaps**
- Flag steps with no value reinforcement (testimonials, microcopy, trust badges)
- Flag CTAs that say "Next" with no indication of what's next or why it matters

### 3. Score Each Step
Rate each step: **Low / Medium / High** friction based on cumulative flags.

### 4. Generate Prioritized Fixes
For each identified issue:
- State the specific field or step
- Name the friction type
- Give a concrete fix (reorder, remove, replace, rewrite, or defer the field)
- Estimate impact: **Quick Win** (easy to implement, high impact) or **Strategic Change** (requires redesign)

---

## Output Format

Produce a structured diagnosis report with these sections:

**Form Dropout Diagnosis Report**

`Form Goal:` [stated purpose]
`Total Steps Reviewed:` [number]
`Overall Friction Level:` Low / Medium / High / Critical

---

**Step-by-Step Friction Breakdown**

For each step:
```
Step [N]: [Step Name or Description]
Friction Level: Low / Medium / High
Issues Found:
  - [Field or element] → [Friction type] → [Fix]
  - [Field or element] → [Friction type] → [Fix]
```

---

**Top 3 Priority Fixes**
Numbered list of the highest-impact changes, each with:
- What to change
- Why it reduces abandonment
- How to implement it

---

**Quick Wins vs. Strategic Changes**
Two-column breakdown separating immediately actionable fixes from larger structural recommendations.

---

**Recommended Field Sequence** *(if reordering is advised)*
Provide a revised step-by-step field order with rationale for the new sequence.

Keep the report scannable. Use bullet points over paragraphs. Limit total length to what's needed — do not pad. If drop-off data was provided, reference it directly in the diagnosis.
