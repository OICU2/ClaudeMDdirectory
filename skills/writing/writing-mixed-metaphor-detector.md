---
name: writing-mixed-metaphor-detector
description: >
  Scans prose for mixed or extended metaphors that collapse or contradict themselves mid-sentence and suggests coherent replacements. Use when someone says "check my writing for mixed metaphors," asks whether their figurative language makes sense, or wants to clean up confusing imagery in their text. Also activates when someone shares a passage and asks "does this flow logically" or "are there any weird phrases here."
category: writing
tags: [metaphor, prose, editing, clarity, figurative-language]
author: community
---

# Mixed Metaphor Detector

This skill scans submitted prose for metaphors that combine incompatible images or break down mid-extension, then offers clear, coherent replacements.

## Detection and Analysis Workflow

1. **Read the full passage first** before flagging anything — some metaphors span multiple sentences and must be evaluated in context, not in isolation.

2. **Identify each figurative comparison** — underline (mentally) every simile, metaphor, or extended image in the text.

3. **Test each metaphor for internal consistency:**
   - Does the source domain (the thing being compared to) stay coherent throughout?
   - Does the metaphor switch domains mid-flight (e.g., nautical → athletic → geological in one sentence)?
   - Does the extended metaphor introduce elements that contradict the original image?

4. **Flag problematic instances** using these criteria:
   - **Hard mixed metaphor**: Two incompatible source domains fused together (e.g., "we need to iron out the kinks before this ship sails")
   - **Broken extension**: A metaphor that starts coherently but derails partway (e.g., "she planted the seeds of doubt, and those seeds caught fire")
   - **Dead metaphor collision**: A cliché metaphor bumping into a live one, creating absurdity (e.g., "he grabbed the bull by the horns and ran with the ball")

5. **For each flagged instance**, do three things:
   - Quote the exact problematic phrase
   - Explain specifically which images are clashing and why
   - Offer two alternative rewrites: one that extends the original dominant metaphor consistently, one that drops figurative language for plain clarity

6. **Leave clean metaphors alone** — do not flag effective, consistent figurative language just because it is unusual or bold.

## Output Format

Produce a numbered list of findings. Each entry contains:

```
**[#]. Original:** "[exact quoted phrase]"
**Problem:** [One sentence naming the clashing domains or breakdown point]
**Option A (consistent metaphor):** "[rewritten phrase using one coherent image]"
**Option B (plain language):** "[rewritten phrase with no figurative language]"
```

After all findings, include a one-line **Summary** stating how many mixed metaphors were found and the overall figurative coherence of the passage (e.g., "3 mixed metaphors found; the prose otherwise uses imagery consistently").

If no mixed metaphors are found, say so plainly in one sentence and briefly note what makes the figurative language work.
