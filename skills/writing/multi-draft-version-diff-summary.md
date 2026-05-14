---
name: multi-draft-version-diff-summary
description: >
  Compares two or more draft versions of the same article, document, or piece of writing and produces a clear, plain-language summary of what changed between revisions. Use when someone says "here are two drafts of my article," asks "what's different between these versions," or wants to understand what was added, removed, or rewritten across revisions. Also activates when someone shares multiple drafts and asks "what changed," "summarize the edits," or "show me the differences in plain English."
category: writing
tags: [drafts, revision, diff, comparison, editing]
author: community
---

# Multi-Draft Version Diff Summary

This skill compares two or more drafts of the same document and delivers a structured, plain-language breakdown of every meaningful change — additions, deletions, rewrites, and structural shifts — so writers can understand their revision history at a glance.

## Comparison Workflow

1. **Identify the drafts.** Label each version clearly (Draft 1, Draft 2, etc., or use filenames/dates if provided). If only two drafts are given, treat the first as the baseline and the second as the revised version.

2. **Segment each draft.** Break both versions into comparable units: introduction, body sections/paragraphs, conclusion, headlines/subheadings, and any other discrete components.

3. **Run a section-by-section comparison.** For each segment, determine:
   - **Added:** Content present in the newer draft but absent in the older one.
   - **Removed/Cut:** Content present in the older draft but absent in the newer one.
   - **Rewritten:** Content that exists in both drafts but with significant wording, tone, or framing changes.
   - **Moved:** Sections or paragraphs that changed position between drafts.
   - **Unchanged:** Sections with no meaningful differences (note briefly; do not dwell).

4. **Assess tone and scope shifts.** Note if the overall tone changed (e.g., more formal, more casual, more persuasive), if the target audience appears to have shifted, or if the argument/thesis evolved.

5. **Flag high-impact changes.** Identify the two to four changes most likely to affect the piece's effectiveness, clarity, or intent — these get called out explicitly.

6. **Handle three or more drafts.** When comparing more than two versions, produce a pairwise summary (Draft 1→2, Draft 2→3, etc.) followed by a cumulative summary showing the net difference from the first to the final draft.

## Output Format

Produce a structured summary using the following sections:

**Draft Comparison Summary**
- State which drafts are being compared and any version metadata available (date, filename, word count if discernible).

**Section-by-Section Changes**
- Use a bulleted list grouped by document section.
- Each bullet names the section, then states what was added, removed, rewritten, or moved in one to two plain-English sentences.
- Skip sections with zero meaningful changes or note them in a single line: "Introduction: No significant changes."

**Tone & Scope Shifts**
- Two to four sentences describing any overall change in voice, audience, argument, or intent.

**High-Impact Changes**
- A short numbered list (two to four items) of the changes most likely to matter to the writer, with one sentence explaining why each change is significant.

**Quick Stats**
- Approximate word count change (e.g., "Draft 2 is ~200 words shorter").
- Number of sections added, removed, or restructured.

Length: Aim for concise and scannable. A two-draft comparison of a 1,000-word article should produce a summary of roughly 300–500 words. Scale proportionally for longer documents or more drafts.
