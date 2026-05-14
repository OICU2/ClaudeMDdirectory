---
name: content-scannability-audit
description: >
  Analyzes a document's visual reading flow by evaluating header frequency, bullet usage, paragraph length, and white space distribution against scannability best practices. Use when someone says "is this easy to read," asks about improving document flow, wants to check if content is scannable, needs feedback on text density, or wonders why readers aren't engaging with their content.
category: writing
tags: [readability, content-audit, document-structure, ux-writing, formatting]
author: community
---

# Content Scannability Audit

This skill audits a document's visual structure and reading flow, then delivers a scored assessment with specific fixes when someone needs to know whether their content can be quickly scanned by readers.

## Audit Process

1. **Header Frequency Check**
   - Count words between each header or subheader
   - Flag any section exceeding 300 words without a header
   - Note missing H2/H3 hierarchy (jumping from H1 to H4, etc.)

2. **Paragraph Length Analysis**
   - Identify paragraphs exceeding 5 lines or 75 words
   - Flag walls of text (3+ consecutive long paragraphs)
   - Note single-sentence paragraphs as a positive signal

3. **Bullet and List Usage**
   - Check for prose listing 3+ items that should be bulleted
   - Flag bullet lists exceeding 7 items without grouping
   - Identify nested bullets deeper than 2 levels as a complexity risk

4. **White Space Distribution**
   - Assess line breaks between sections and paragraphs
   - Flag missing spacing after headers
   - Note dense blocks with no visual breathing room

5. **Opening Line Audit**
   - Check whether each section's first sentence conveys the core point
   - Flag sections that bury the lead past line 3

6. **Score Each Dimension**
   - Rate each of the 5 areas: Pass / Needs Work / Failing
   - Calculate an overall scannability grade: High / Medium / Low

## Output Format

Produce a structured audit report with these sections:

**Scannability Audit Report**

- **Overall Grade**: High / Medium / Low with one-sentence rationale
- **Dimension Scores**: A table or list showing each of the 5 dimensions with Pass / Needs Work / Failing
- **Top Issues**: Numbered list of the 3–5 most impactful problems, each including the specific location in the document and why it hurts scannability
- **Quick Fixes**: Bulleted list of concrete rewrites or structural changes, one per issue, written as direct instructions (e.g., "Break paragraph 3 in Section 2 into two bullets listing the three steps")
- **Strengths**: 1–3 things the document already does well for scannability

Keep the report under 400 words. Use the same formatting standards being evaluated — headers, bullets, short paragraphs.
