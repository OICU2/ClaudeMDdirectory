---
name: writing-style-fingerprint-builder
description: >
  Analyzes a writer's existing work to extract and document their distinctive voice, sentence patterns, vocabulary habits, and structural tendencies for consistent replication. Use when someone says "write like me," asks to "match my writing style," wants to "capture my voice," shares samples and says "use this as a reference," or needs to "clone my tone" for future content. Produces a structured style guide that can be referenced for any subsequent writing task.
category: writing
tags: [style-analysis, voice, writing-patterns, content-creation, brand-voice]
author: community
---

# Writing Style Fingerprint Builder

This skill analyzes a corpus of a writer's existing work to extract and document their distinctive patterns, producing a reusable style fingerprint Claude can reference to replicate their voice consistently.

## Analysis Workflow

### Step 1: Collect the Corpus
- Request at least 3–5 writing samples from the user (blog posts, emails, essays, social posts, etc.)
- If samples span different formats, note which format each belongs to
- Minimum viable corpus: ~500 words total; ideal: 1,500+ words

### Step 2: Extract Sentence-Level Patterns
- Calculate average sentence length (short/medium/long dominant?)
- Identify sentence openers: does the writer favor conjunctions (But, And, So), adverbs, questions, or declaratives?
- Note punctuation habits: em-dashes, ellipses, semicolons, colons, parenthetical asides
- Flag sentence rhythm: does the writer use lists of three, abrupt stops, or flowing compound structures?

### Step 3: Extract Vocabulary & Diction Patterns
- Identify recurring power words or signature phrases (exact quotes)
- Note formality level: contractions, slang, jargon, technical terms, colloquialisms
- Flag words the writer avoids (if detectable through consistent absence)
- Record any industry-specific or idiosyncratic vocabulary

### Step 4: Extract Structural & Compositional Habits
- Paragraph length preference: one-liners, dense blocks, or mixed?
- Opening strategy: anecdote, bold claim, question, statistic, or scene-setting?
- Closing strategy: call to action, reflection, punchy final line, or open question?
- Use of subheadings, bullet points, numbered lists, or continuous prose
- Transition style: explicit connectors, white space, or abrupt cuts?

### Step 5: Extract Voice & Tone Markers
- Identify the dominant tone: authoritative, conversational, irreverent, empathetic, urgent, etc.
- Note use of first person (I/we), second person (you), or third person
- Flag humor markers: self-deprecation, sarcasm, wit, or none
- Identify emotional register: does the writer lean intellectual, passionate, neutral, or vulnerable?

### Step 6: Identify Exceptions & Variations
- Note if tone shifts between formats (e.g., casual on social, formal in long-form)
- Flag any inconsistencies that appear intentional (stylistic rule-breaking)

## Output Format

Produce a structured **Style Fingerprint Document** with the following sections:

---

**STYLE FINGERPRINT: [Writer Name or "Your Style"]**

**Voice Summary** *(2–3 sentences capturing the overall feel of this writer's voice)*

**Sentence Patterns**
- Average length: [short / medium / long]
- Opener preference: [examples]
- Rhythm notes: [observations]
- Punctuation habits: [list specific marks and how they're used]

**Vocabulary Profile**
- Formality level: [scale: casual → formal]
- Signature phrases: ["exact quote", "exact quote", "exact quote"]
- Recurring word choices: [list]
- Words/tones to avoid: [list]

**Structure Habits**
- Paragraph style: [description]
- Openings: [pattern]
- Closings: [pattern]
- Formatting preferences: [bullets / prose / headers / etc.]

**Tone & Persona**
- Primary tone: [label + 1-sentence description]
- POV default: [first / second / third person]
- Humor style: [description or "none"]
- Emotional register: [description]

**Format Variations** *(if applicable)*
- [Format type]: [
