---
name: writing-second-person-overuse-audit
description: >
  Analyzes a piece of writing for inconsistent or excessive use of second-person ("you," "your," "yourself") that undermines the intended narrative distance or tone. Use when someone says "this feels too preachy," asks about whether their writing is too direct or presumptuous, or wants to check if their use of 'you' is consistent throughout. Also triggers when someone notices their instructional content feels condescending or their essay feels like it's lecturing the reader.
category: writing
tags: [second-person, tone, consistency, narrative-distance, editing]
author: community
---

# Second-Person Overuse Audit

This skill scans submitted text for patterns of second-person address that are excessive, inconsistent, or tonally mismatched, and returns a structured report with flagged passages and concrete revision options.

## Audit Workflow

1. **Identify the intended register**: Determine from context or ask the writer whether the piece is instructional, essayistic, narrative, persuasive, or journalistic. Each has different norms for second-person use.

2. **Establish a baseline expectation**:
   - Instructional/how-to: second-person is expected and appropriate
   - Personal essay: occasional second-person is acceptable; heavy use risks generalizing the author's experience
   - Literary fiction (non-second-person POV): any "you" is a flag
   - Journalism/analysis: second-person should be rare and intentional
   - Academic writing: second-person is typically a register violation

3. **Scan for all second-person instances**: Identify every occurrence of "you," "your," "yourself," and "you're" in the text. Group them by paragraph or section.

4. **Flag these specific patterns**:
   - **Density spikes**: Three or more second-person references within a single paragraph when surrounding paragraphs have none
   - **Assumption overreach**: Sentences that assume the reader's feelings, experiences, or beliefs ("You know how it feels when…", "You've probably thought…")
   - **Tonal inconsistency**: Sections that shift from third-person or first-person voice into second-person without a clear rhetorical reason
   - **Lecturing tone**: Imperative constructions paired with "you" that moralize or prescribe ("You should always…", "You need to understand…")
   - **Universalizing the particular**: Using "you" to convert a specific personal observation into a claim about all readers

5. **Assess each flag**: Determine whether the second-person use is (a) intentional and effective, (b) habitual and unnecessary, or (c) actively damaging to tone or trust with the reader.

6. **Generate revision options** for each flagged instance: offer at least two alternatives — one that removes second-person entirely and one that reframes it more precisely.

## Output Format

Produce a structured audit report with the following sections:

**Register Summary** (2–3 sentences): State the detected genre/register, the appropriate norm for second-person use, and an overall verdict (e.g., "overused," "inconsistent," or "appropriate").

**Flagged Passages** (one entry per flag):
- Quote the flagged sentence or phrase
- Label the pattern type (e.g., "assumption overreach," "density spike")
- Explain in one sentence why it creates a problem
- Provide two revision alternatives

**Density Map** (plain text or markdown table): Show a per-paragraph or per-section count of second-person instances so the writer can see where clustering occurs.

**Summary Recommendation** (3–5 sentences): Advise whether to eliminate, reduce, or reframe second-person use globally, and note any sections where the current usage is working well and should be preserved.
