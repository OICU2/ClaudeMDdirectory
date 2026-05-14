---
name: content-moral-panic-language-detector
description: >
  Scans written drafts for sensationalist, alarmist, or emotionally manipulative language and replaces flagged passages with neutral, evidence-grounded alternatives. Use when someone says "check my article for bias," asks to "make this less sensational," or wants to "tone down the fear-mongering in this draft." Also activates when someone asks to "review this for loaded language" or needs to "make this more objective before publishing."
category: writing
tags: [editing, bias-detection, neutral-language, journalism, content-review]
author: community
---

# Moral Panic Language Detector

This skill scans drafts for sensationalist, alarmist, or emotionally manipulative phrasing and produces flagged passages paired with neutral, evidence-grounded rewrites.

## Detection and Rewrite Workflow

1. **Read the full draft before flagging.** Understand context, topic, and intended audience before marking anything.

2. **Identify flagged language using these categories:**
   - **Catastrophizing:** Words like "destroy," "epidemic," "crisis," "plague," "nightmare" applied to non-emergency topics
   - **Vague threat amplifiers:** "Everyone knows," "experts warn," "many are saying," "people are terrified" without attribution
   - **Loaded emotional triggers:** "innocent children," "devastating consequences," "alarming rise," "shocking new study"
   - **False urgency:** "You must act now," "before it's too late," "the clock is ticking"
   - **Slippery slope language:** "If this continues, society will collapse," "this is just the beginning"
   - **Dehumanizing or othering framing:** Language that frames groups as threats or social contaminants

3. **For each flagged passage:**
   - Quote the exact original phrase or sentence
   - Name the specific manipulation category it falls into
   - Explain in one sentence why it is problematic (what distortion it creates)
   - Write a concrete neutral rewrite using specific data, qualified claims, or plain description

4. **Apply rewrite principles:**
   - Replace vague quantifiers with actual figures where available, or flag that data is missing
   - Replace emotionally charged adjectives with descriptive ones ("alarming rise" → "a 12% increase over three years")
   - Replace anonymous authority ("experts say") with named sources or acknowledge the absence of citation
   - Preserve the author's core argument — only neutralize the framing, not the substance

5. **After individual flags, assess overall tone.** Note if the piece relies structurally on fear as its primary persuasive mechanism, and suggest a one-paragraph structural revision approach if needed.

## Output Format

Produce a structured report with the following sections:

**Summary Line**
One sentence stating how many passages were flagged and the dominant manipulation category found.

**Flagged Passages** (one block per flag)
```
ORIGINAL: "[exact quoted text]"
CATEGORY: [manipulation type]
PROBLEM: [one sentence explanation]
REWRITE: "[revised text]"
```

**Overall Tone Assessment**
2–4 sentences on whether the piece's structure depends on emotional manipulation and what the writer should address at the macro level.

**Clean Rewrite Option** *(only if 5 or more passages are flagged)*
Offer to produce a full clean version of the draft with all rewrites applied inline.
