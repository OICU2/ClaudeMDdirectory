---
name: paragraph-topic-sentence-audit
description: >
  Analyzes every paragraph in a draft to verify each opens with a clear, focused topic sentence that signals the paragraph's main point. Use when someone says "check my paragraphs," asks whether their writing is easy to follow, or wants to improve the structure of their draft. Also triggers when someone mentions their writing feels scattered, buried, or hard to skim.
category: writing
tags: [paragraphs, topic-sentences, structure, clarity, editing]
author: community
---

# Paragraph Topic Sentence Audit

This skill reviews each paragraph in a submitted draft, evaluates whether it opens with a clear topic sentence, and flags paragraphs where the main point is buried, missing, or unclear.

## Audit Workflow

1. **Split the draft into paragraphs.** Treat each block of text separated by a line break as a distinct paragraph. Number them sequentially.

2. **Identify the first sentence of each paragraph.** This is the candidate topic sentence.

3. **Evaluate each opening sentence against three criteria:**
   - **Clarity:** Does the sentence make a specific claim or introduce a clear subject?
   - **Relevance:** Does the rest of the paragraph support or develop what that first sentence states?
   - **Position:** Is the main point actually in the first sentence, or does it appear mid-paragraph or at the end?

4. **Assign a status to each paragraph:**
   - ✅ **Clear** — Opens with a strong topic sentence; main point is immediately apparent.
   - ⚠️ **Buried** — The main point exists but appears in the second sentence or later; the opener is too vague, transitional, or scene-setting.
   - ❌ **Missing** — No identifiable topic sentence; the paragraph lacks a central claim or the point is never stated explicitly.

5. **For every ⚠️ or ❌ paragraph, provide:**
   - The current opening sentence (quoted)
   - A one-line diagnosis explaining the problem
   - A suggested revised topic sentence that leads with the main point

6. **Do not rewrite the entire paragraph.** Only propose a new first sentence.

## Output Format

Produce a numbered list, one entry per paragraph, in this structure:

---
**Paragraph [N]** — [✅ Clear / ⚠️ Buried / ❌ Missing]

> "[First sentence of the paragraph as written]"

**Issue:** [One sentence describing the problem, if any. Omit this line for ✅ paragraphs.]

**Suggested topic sentence:** "[Revised opening sentence.]" *(Omit this line for ✅ paragraphs.)*

---

After the full paragraph-by-paragraph list, add a brief **Summary** section (3–5 sentences) that states: total paragraphs reviewed, how many passed, how many were buried, how many were missing, and one overarching observation about the draft's structural pattern.
