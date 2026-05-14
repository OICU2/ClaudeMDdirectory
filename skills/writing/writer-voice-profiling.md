---
name: writer-voice-profiling
description: >
  Analyzes a corpus of an author's existing writing to produce a structured voice profile documenting tone, sentence patterns, rhythm, and vocabulary tendencies. Use when someone says "profile my writing style," asks to "capture how I write," wants to "document my voice," needs to "clone my writing style," or wants to "teach Claude how I sound." The resulting profile can be saved and reused to generate new content that matches the author's established voice.
category: writing
tags: [voice, style-analysis, writing-profile, tone, authorship]
author: community
---

# Writer Voice Profiling

This skill analyzes a provided corpus of an author's existing work and produces a reusable, structured voice profile that can guide future writing in that author's style.

## Analysis Workflow

1. **Collect the corpus** — Ask the author to paste at least 3–5 samples of their writing (blog posts, emails, essays, social posts). More samples produce more accurate profiles. If samples span different contexts, note the context for each.

2. **Analyze sentence structure** — Identify average sentence length, variance (do they mix long and short?), preferred sentence openings (subject-first, clause-first, fragment openers), and frequency of compound vs. complex vs. simple sentences.

3. **Identify tone markers** — Determine the emotional register (warm, clinical, sardonic, authoritative, conversational, etc.). Flag specific phrases, asides, or rhetorical habits that recur (e.g., em-dash asides, rhetorical questions, direct reader address like "here's the thing").

4. **Catalog vocabulary tendencies** — Note formality level, domain-specific jargon, preferred intensifiers or hedges (e.g., "actually," "frankly," "sort of"), words or constructions they visibly avoid, and any signature phrases.

5. **Detect rhythm and pacing** — Identify whether the author uses paragraph breaks for emphasis, how often they use one-sentence paragraphs, and whether they build to conclusions or lead with them.

6. **Identify structural patterns** — Note how they open and close pieces, how they transition between ideas, and whether they use lists, subheadings, or prose-only formatting.

7. **Synthesize and validate** — After drafting the profile, generate one short paragraph (3–5 sentences) in the detected voice. Ask the author: "Does this sound like you?" Refine based on feedback.

## Output Format

Produce a voice profile document with these clearly labeled sections:

**VOICE PROFILE: [Author Name or "Your Writing Voice"]**

- **Tone & Register:** 2–3 sentences describing the emotional quality and relationship to the reader.
- **Sentence Patterns:** Bullet list of 3–5 specific structural tendencies with examples quoted from the corpus.
- **Vocabulary & Phrasing:** Bullet list of preferred words, avoided words, formality level, and 2–3 signature phrases quoted verbatim.
- **Rhythm & Pacing:** 2–3 sentences on paragraph length, use of white space, and pacing strategy.
- **Structural Habits:** 2–3 sentences on how pieces are opened, closed, and organized.
- **Voice in One Sentence:** A single distilled description usable as a style prompt (e.g., "Write like a former academic who traded jargon for plain speech but kept the precision.").
- **Calibration Sample:** A 3–5 sentence paragraph written in the profiled voice, clearly labeled as a test sample.

The profile should be concrete enough that another person (or Claude in a future session) could use it as a style guide without access to the original corpus.
