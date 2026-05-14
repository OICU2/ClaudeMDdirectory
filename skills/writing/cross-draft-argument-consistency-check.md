---
name: cross-draft-argument-consistency-check
category: writing
description: >
  Compares two versions of the same document to surface contradictions, shifted positions, altered statistics, and changed conclusions. Use when someone says "I revised my article and want to check for inconsistencies," asks about "conflicts between my two drafts," or wants to "make sure my argument didn't change between versions." Also triggers when someone shares two drafts and asks "did I contradict myself" or wants to "reconcile differences across revisions."
tags: [writing, editing, consistency, revision, fact-checking]
author: community
---

# Cross-Draft Argument Consistency Check

This skill systematically compares two drafts of the same document to identify contradictory claims, changed statistics, shifted conclusions, and any logical inconsistencies introduced between versions.

## Comparison Workflow

1. **Parse each draft's core structure**: Identify the central thesis, supporting arguments, key statistics or data points, and stated conclusions in both drafts independently before comparing.

2. **Align parallel sections**: Match corresponding sections, paragraphs, or arguments across drafts by topic and position. Note any sections that appear in one draft but not the other.

3. **Check thesis and conclusion alignment**: Compare the opening thesis statement and final conclusion in both drafts. Flag if the overarching position has shifted, softened, strengthened, or reversed.

4. **Audit all quantitative claims**: Extract every number, percentage, date, statistic, and citation from both drafts. Flag any value that differs between versions, even minor changes (e.g., "40%" changed to "nearly half").

5. **Trace argument-level contradictions**: For each supporting argument in Draft 1, find its counterpart in Draft 2. Flag if the argument has been reversed, qualified differently, or contradicted by new material added in Draft 2.

6. **Check causal and logical chains**: Identify any if/then reasoning, causal claims, or logical dependencies. Flag cases where a premise was changed in Draft 2 but the conclusion derived from it was not updated accordingly.

7. **Flag tonal and stance shifts**: Note changes in hedging language (e.g., "research proves" changed to "research suggests") that alter the certainty or position being expressed.

## Output Format

Produce a structured consistency report with these sections:

**Thesis & Conclusion Consistency**
One paragraph summarizing whether the core argument held across drafts, with direct quotes from both versions if a shift occurred.

**Contradictions Found** (table format)
| # | Draft 1 Claim | Draft 2 Claim | Section | Severity |
List each contradiction with the conflicting text from each draft, the section where it appears, and severity rated as Critical / Moderate / Minor.

**Changed Statistics & Data Points** (table format)
| # | Data Point | Draft 1 Value | Draft 2 Value | Section |

**Unresolved Logic Gaps**
Bullet list of any cases where a changed premise was not reconciled with its dependent conclusion.

**Recommendations**
Numbered list of specific edits needed to make the drafts consistent, or to confirm which version of each claim is intentional.

If no contradictions are found in a category, state "None detected" rather than omitting the section.
