---
name: reader-question-anticipation-audit
description: >
  Analyzes a draft document to surface likely reader questions that go unanswered, then inserts
  placeholder prompts at the exact locations where those gaps occur. Use when someone says "what
  questions might readers have," asks to "find gaps in my draft," wants to "anticipate reader
  confusion," says "what am I leaving unexplained," or needs to "stress-test my writing for
  clarity."
category: writing
tags: [writing, editing, clarity, reader-experience, content-audit]
author: community
---

# Reader Question Anticipation Audit

This skill reads a draft from a first-time reader's perspective, identifies questions the text raises but does not answer, and injects labeled placeholder prompts directly into the draft at each gap point.

## Audit Workflow

1. **Read the full draft once** without intervening — understand the intended audience, purpose, and scope before flagging anything.

2. **Identify question-triggering moments** by scanning for these patterns:
   - A claim is made without evidence or sourcing ("this approach is faster")
   - A term or concept is introduced without definition
   - A step or instruction skips assumed prerequisite knowledge
   - A transition jumps topics without explanation
   - A number, statistic, or comparison appears without context
   - A recommendation is given without rationale
   - A consequence or outcome is implied but not explained

3. **For each gap found**, insert a bracketed placeholder directly into the draft text at the exact sentence or paragraph where the question would arise. Do not move questions to a separate list.

4. **Write each placeholder** using this format:
   `[READER QUESTION: {the likely question a reader would ask here} — SUGGESTED FIX: {one concrete action the author should take to resolve it}]`

5. **Limit flagging to genuine gaps** — do not flag stylistic preferences, optional elaboration, or matters of tone. Only flag places where a reasonable reader would be blocked or confused.

6. **After the annotated draft**, append a short summary section listing all inserted placeholders numbered sequentially with their location context (e.g., paragraph number or section heading).

## Output Format

Return two parts:

**Part 1 — Annotated Draft**
The original draft text with `[READER QUESTION: ... — SUGGESTED FIX: ...]` placeholders inserted inline at each gap. Preserve all original wording exactly; add nothing else to the draft body.

**Part 2 — Gap Summary**
A numbered list of every placeholder inserted, formatted as:
```
1. Location: [paragraph # or section heading]
   Question: [the reader question]
   Suggested Fix: [the recommended author action]
```

Total length scales with the draft. A 500-word draft should typically surface 3–8 gaps. Flag every genuine gap found — do not cap artificially.
