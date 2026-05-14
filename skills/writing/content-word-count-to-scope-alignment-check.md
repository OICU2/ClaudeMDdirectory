---
name: content-word-count-to-scope-alignment-check
category: writing
description: >
  Compares the actual word count and depth of a delivered piece against the original brief's scope requirements and surfaces gaps. Use when someone says "check if this meets the brief," asks whether a draft is long enough or too short, or wants to verify that a piece covers everything it was supposed to. Also activates when someone shares a deliverable alongside a creative brief or content spec and wants to know if it hits the mark.
tags: [writing, content-review, scope, word-count, quality-check]
author: community
---

# Content Word Count to Scope Alignment Check

This skill audits a delivered piece of content against its original brief to identify word count gaps, missing sections, depth mismatches, and scope drift, then delivers a structured alignment report.

## Alignment Check Workflow

1. **Extract brief requirements**: Parse the original brief or content spec for stated word count targets, required sections or headings, specified depth (introductory, intermediate, expert), mandatory topics or keywords, and any format constraints (listicle, long-form, etc.).

2. **Measure the delivered piece**: Count the actual word count of the submitted draft. Identify every section, heading, and topic covered. Note depth indicators (number of examples, data points, sub-topics explored).

3. **Run the gap analysis across four dimensions**:
   - **Word count**: Calculate the delta between target and actual. Flag if actual is more than 10% below or 20% above the target.
   - **Section coverage**: List every required section from the brief. Mark each as Present, Partial, or Missing in the delivered piece.
   - **Depth parity**: Compare the required depth level to what was delivered. Note sections that are underdeveloped (thin explanation, no examples, no data) or over-engineered relative to brief scope.
   - **Scope drift**: Identify topics covered in the piece that were not in the brief. Flag additions that dilute focus or inflate word count artificially.

4. **Assign a scope alignment score**: Rate overall alignment on a 1–5 scale where 5 = fully meets scope, 3 = meets core requirements with notable gaps, 1 = significant rework needed.

5. **Generate actionable remediation steps**: For every gap found, produce a specific instruction for what to add, cut, expand, or restructure.

## Output Format

Produce a structured report with these exact sections:

**Scope Alignment Report**

- **Word Count**: Target → Actual → Delta → Status (On Target / Under / Over)
- **Section Coverage Table**: Two-column table listing each required section and its status (Present / Partial / Missing), with a one-line note on what is missing or thin.
- **Depth Assessment**: One paragraph describing whether the piece achieves the specified depth level, with two or three specific examples from the text to support the judgment.
- **Scope Drift Flags**: Bulleted list of any off-brief topics found; include the line or heading where they appear and a recommendation to cut or reframe.
- **Alignment Score**: X/5 with a one-sentence rationale.
- **Remediation Checklist**: Numbered list of specific edits ordered by impact — each item must name the section, describe the exact change, and estimate the word count impact (e.g., "Expand 'Benefits' section with two concrete examples: +150 words").
