---
name: product-demo-video-script-builder
description: >
  Creates a structured, scene-by-scene script for product demonstration videos, including narration, screen action cues, and benefit-focused talking points. Use when someone says "help me script a product demo," asks about "how to create a demo video for my product," or wants to "write a walkthrough video script." Also activates when someone needs to "show off their software features on video" or wants to "plan a product demonstration recording."
category: marketing
tags: [video-script, product-demo, marketing, sales-enablement, content-creation]
author: community
---

# Product Demo Video Script Builder

This skill generates a complete, production-ready script for a product demonstration video, organizing content into numbered scenes with synchronized narration, on-screen action directions, and benefit-driven talking points that Claude will use whenever someone needs to plan or write a demo video.

## Script Building Workflow

1. **Gather product context** — Before writing, identify: product name, target audience, primary use case, top 3 features to highlight, desired video length (default: 3–5 minutes), and any call-to-action goal (trial signup, book a demo, purchase).

2. **Define the narrative arc** — Structure every script around this flow:
   - Hook (0–20 sec): State the problem the audience faces, not the product name
   - Solution reveal (20–45 sec): Introduce the product as the answer
   - Feature walkthrough (bulk of runtime): 2–4 feature scenes, each with a clear "before/after" framing
   - Proof moment: One social proof line (stat, customer quote, or outcome metric)
   - Call to action: Single, specific next step

3. **Write each scene using the three-column structure:**
   - **Narration**: Conversational, benefit-first language. Avoid feature dumps. Use "you" language directed at the viewer.
   - **Screen Action Cue**: Precise instruction for the person recording (e.g., "Click Settings > Integrations, pause 2 seconds on the API key field").
   - **Benefit Callout**: One-sentence overlay text or spoken emphasis summarizing the viewer's gain from this feature.

4. **Apply demo video writing rules:**
   - Every feature shown must answer "so what?" within the same scene
   - Narration sentences stay under 20 words for voiceover pacing
   - Include explicit pause/transition cues between scenes
   - Flag any moment requiring B-roll, zoom, or annotation with `[EDIT NOTE]`
   - End each feature scene with a micro-summary before moving on

5. **Close with production notes** — List any assets needed (sample data, dummy accounts, screen resolution recommendation) and suggest optimal background music tempo (e.g., upbeat 110–120 BPM for SaaS tools).

## Output Format

Produce a complete script with the following structure:

```
## VIDEO OVERVIEW
- Product: [name]
- Audience: [persona]
- Goal: [CTA outcome]
- Estimated Runtime: [X minutes]

---

## SCENE 1: HOOK
**Duration:** 0:00–0:20
**Narration:** [Spoken lines]
**Screen Action:** [Exact UI or visual instruction]
**Benefit Callout:** [Overlay text or emphasis line]

## SCENE 2: SOLUTION REVEAL
...

## SCENE 3: FEATURE — [Feature Name]
...

[Repeat for each feature scene]

## SCENE [N]: CALL TO ACTION
...

---

## PRODUCTION NOTES
- Assets needed: [list]
- Edit flags: [list of [EDIT NOTE] items]
- Music recommendation: [tempo/mood]
```

Each scene block must be fully written — no placeholders. Total script length should reflect the target runtime at approximately 130 words per minute of narration.
