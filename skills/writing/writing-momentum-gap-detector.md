---
name: writing-momentum-gap-detector
description: >
  Analyzes prose for pacing stalls caused by consecutive abstract or expository sentences and flags sections that need concrete grounding. Use when someone says "my writing feels slow," asks why their chapter feels flat or distant, or wants to find where their narrative loses energy. Also triggers when a writer wants to identify telling-not-showing clusters or needs to know where to inject dialogue, sensory detail, or physical action.
category: writing
tags: [pacing, prose-analysis, show-dont-tell, narrative-flow, editing]
author: community
---

# Writing Momentum Gap Detector

Scans submitted prose for consecutive abstract or expository sentences and pinpoints the exact locations where pacing stalls, telling Claude to flag each gap and recommend a specific injection type to restore momentum.

## Detection Workflow

1. **Parse sentence by sentence.** Read each sentence and classify it as one of:
   - **Concrete** — contains sensory detail, physical action, dialogue, or a specific named thing happening in scene
   - **Abstract** — contains generalization, emotion-label, exposition, backstory summary, or thematic statement

2. **Flag momentum gaps.** Mark any run of **3 or more consecutive abstract sentences** as a momentum gap. A run of 2 is a yellow-flag; a run of 4+ is a red-flag.

3. **Identify the gap type.** For each flagged section, diagnose which abstraction pattern is stalling pace:
   - *Emotion labeling* — "She felt overwhelmed" instead of showing physical response
   - *Summary narration* — compressing events into reported past rather than scene
   - *Thematic dwelling* — repeating a theme or idea without advancing action
   - *Exposition block* — background information inserted mid-scene

4. **Recommend a specific injection.** For each gap, prescribe exactly one of:
   - **Dialogue** — if two characters are present or implied and tension exists
   - **Sensory detail** — if the scene needs grounding in place or body
   - **Physical action** — if a character needs to do something to externalize internal state
   - **Micro-scene** — if summary narration is compressing a moment that deserves to breathe

5. **Do not rewrite unless asked.** Flag and recommend only; leave rewriting to the author unless they explicitly request a revision example.

## Output Format

Produce a structured gap report with this layout:

---

**Momentum Gap Report**

**Overall Pacing Health:** [One sentence — e.g., "3 red-flag gaps and 2 yellow-flag gaps found across 5 paragraphs."]

---

**Gap 1** 🔴 / 🟡 [red or yellow]
- **Location:** [Quote the first and last sentence of the abstract run, truncated to ~10 words each]
- **Length:** [X consecutive abstract sentences]
- **Pattern:** [Emotion labeling / Summary narration / Thematic dwelling / Exposition block]
- **Recommended injection:** [Dialogue / Sensory detail / Physical action / Micro-scene]
- **Why:** [1 sentence explaining what is missing and what the injection will restore]

---

[Repeat for each gap in document order]

---

**Quick Summary Table**

| Gap | Severity | Pattern | Injection |
|-----|----------|---------|-----------|
| 1   | 🔴 Red   | Summary narration | Micro-scene |
| 2   | 🟡 Yellow | Emotion labeling | Sensory detail |

---

Keep the report scannable. Use no more than 2 sentences of explanation per gap. Do not editorialize about the writing's quality — only diagnose and prescribe.
