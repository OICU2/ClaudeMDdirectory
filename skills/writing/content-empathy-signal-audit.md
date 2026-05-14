---
name: content-empathy-signal-audit
description: >
  Evaluates whether a draft sufficiently acknowledges the reader's pain points, goals, or objections
  before presenting solutions or recommendations. Use when someone says "my content feels too salesy,"
  asks whether their article "actually connects with readers," wants to know if their draft "addresses
  objections," wonders if their copy "sounds tone-deaf," or needs feedback on whether their piece
  "earns the right to make recommendations."
category: writing
tags: [empathy, content-review, copywriting, reader-psychology, objection-handling]
author: community
---

# Content Empathy Signal Audit

This skill scans a draft for empathy signals — explicit acknowledgments of reader pain, goals, fears, or objections — and identifies where the content skips ahead to solutions before earning reader trust.

## Empathy Signal Audit Process

### 1. Identify the Reader Profile
Before scoring, extract from the draft (or ask if unclear):
- Who is the intended reader?
- What is the reader's most likely pain point or goal?
- What objection would a skeptical reader raise before reading?

### 2. Scan for Empathy Signals
Read the draft and tag each empathy signal found. Valid signal types:

| Signal Type | What It Looks Like |
|---|---|
| **Pain acknowledgment** | Names a specific frustration, struggle, or cost the reader experiences |
| **Goal mirroring** | Reflects the reader's desired outcome back to them in their own language |
| **Objection surfacing** | Raises a likely doubt or counterargument before the reader has to |
| **Situation framing** | Describes the reader's current context in a way that shows understanding |
| **Validation** | Confirms the reader's feelings or past experience are reasonable |

### 3. Check Signal Placement
Order matters. Flag when:
- Recommendations appear in the first 20% of the draft with no preceding empathy signal
- A solution section is longer than the problem acknowledgment section (ratio check)
- Objections are raised only after recommendations are made
- The draft opens with brand/product framing instead of reader-situation framing

### 4. Score Empathy Coverage
Rate each of the three core dimensions on a 1–3 scale:

- **Pain/Goal Clarity** (1 = vague or absent, 2 = mentioned but generic, 3 = specific and resonant)
- **Objection Handling** (1 = ignored, 2 = briefly addressed, 3 = anticipated and disarmed)
- **Signal Timing** (1 = empathy appears after recommendations, 2 = mixed placement, 3 = empathy precedes all major recommendations)

### 5. Generate Targeted Rewrites
For each gap identified, produce a concrete rewrite suggestion — not a general note.

## Output Format

Return a structured audit with these four sections:

---

**EMPATHY SIGNAL AUDIT**

**Reader Profile Assumed:** [1 sentence identifying reader, their pain, and their likely objection]

**Signals Found:**
- [Quote or paraphrase from draft] → [Signal type]
- *(repeat for each signal, or state "None found" if absent)*

**Gaps Identified:**
- [Specific location in draft, e.g., "Opening paragraph"] — [What's missing and why it matters to this reader]
- *(repeat for each gap)*

**Scores:**
- Pain/Goal Clarity: [1–3] — [one-line rationale]
- Objection Handling: [1–3] — [one-line rationale]
- Signal Timing: [1–3] — [one-line rationale]
- **Overall Empathy Score: [sum]/9**

**Rewrite Suggestions:**
- [Gap reference] → Replace: "[original text]" / With: "[rewritten text that adds the missing signal]"
- *(one suggestion per identified gap)*

---

Keep the audit scannable. Do not summarize the draft back to the writer. Every line should be diagnostic or actionable.
