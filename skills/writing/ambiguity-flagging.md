---
name: ambiguity-flagging
description: >
  Scans written content for pronouns, vague references, and unclear antecedents that could confuse readers, then flags each instance with a specific revision suggestion. Use when someone says "check this for clarity," asks to "find confusing parts," or wants to "clean up vague references." Also triggers when someone asks to "make this easier to understand" or needs to "tighten up the writing."
category: writing
tags: [clarity, editing, proofreading, revision, readability]
author: community
---

# Ambiguity Flagging

This skill scans written content for pronouns, vague references, and unclear antecedents, then produces a numbered list of flagged issues with specific revision suggestions.

## Ambiguity Detection Workflow

1. **Read the full passage first** before flagging anything — context from later sentences can resolve earlier ambiguity.
2. **Identify pronoun ambiguity**: Flag any pronoun (it, they, this, that, these, those, he, she, we) whose antecedent is unclear or could refer to more than one noun in the surrounding sentences.
3. **Identify vague demonstratives**: Flag uses of "this," "that," "these," and "those" used as standalone nouns without a clear referent (e.g., "This is important" — what is?).
4. **Identify vague nouns and weasel references**: Flag phrases like "some people," "the system," "they say," "the process," "the issue," "the thing," or "the situation" when no specific referent has been established.
5. **Identify dangling or misplaced modifiers**: Flag phrases where it is unclear which noun or subject is being modified.
6. **Identify unclear comparisons**: Flag comparisons missing one side (e.g., "it performs better" — better than what?).
7. **For each flagged item**, note the exact quoted text, explain why it is ambiguous, and provide at least one concrete rewrite suggestion.
8. **Do not flag intentional stylistic choices** that are unambiguous in context — only flag genuine reader confusion risks.

## Output Format

Produce a structured report with the following sections:

**Summary Line**
One sentence stating how many ambiguous instances were found and the most common issue type.

**Flagged Items** (numbered list)
For each issue:
- **Quote**: The exact ambiguous phrase or sentence, in quotation marks
- **Location**: Sentence number or paragraph reference
- **Issue**: One sentence explaining what is ambiguous and why
- **Suggested Revision**: One or more concrete rewrites that resolve the ambiguity

**Clean Passage Count**
State how many sentences or paragraphs were reviewed and found clear, to give the writer a sense of overall clarity ratio.

If no ambiguity is found, state that explicitly with a one-sentence explanation of what was checked.
