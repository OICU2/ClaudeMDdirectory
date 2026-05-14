---
name: research-finding-to-headline-adapter
description: >
  Translates dense academic or technical research findings into clear, accurate headline statements that non-specialist audiences can understand without losing meaning. Use when someone says "make this finding accessible," asks how to summarize a study result for the public, or wants to turn a research abstract into plain language. Also triggers when someone needs to communicate scientific results to a general audience or wants a press-ready summary of technical data.
category: research
tags: [research, science-communication, plain-language, summarization, accuracy]
author: community
---

# Research Finding to Headline Adapter

This skill converts complex research findings into accurate, plain-language headlines and summary statements for non-specialist audiences, preserving scientific integrity while maximizing clarity.

## Adaptation Workflow

1. **Extract the core claim** — Identify the single most important finding. Strip away methodology, caveats, and secondary results to find the central result.

2. **Identify distortion risks** — Flag language that could mislead: correlation vs. causation confusion, overstated effect sizes, missing population scope, or hedged findings stated as certainties.

3. **Translate jargon** — Replace technical terms with plain equivalents. If no plain equivalent exists, use a brief parenthetical explanation on first use.

4. **Preserve honest scope** — Keep qualifiers that matter (e.g., "in mice," "among adults over 60," "in lab conditions"). Drop qualifiers that are standard boilerplate without meaningful content.

5. **Write the headline** — Draft a statement under 15 words that conveys the finding accurately. Avoid sensational verbs (proves, cures, destroys). Prefer precise verbs (suggests, reduces, correlates with).

6. **Write the supporting sentence** — Add one sentence (25–40 words) that captures study scope, population, and key caveat if one significantly limits interpretation.

7. **Self-check for distortion** — Compare the headline back to the original finding. Confirm it does not overstate effect size, imply causation where only correlation exists, or omit a population qualifier that changes meaning.

## Output Format

Produce the following structure for each finding:

**Headline:** [Plain-language statement, ≤15 words]

**Summary sentence:** [1 sentence, 25–40 words, including study scope and primary caveat]

**Accuracy note:** [1–2 sentences flagging any meaning tradeoffs made in simplification, or confirming none were necessary]

If adapting multiple findings, repeat this block for each one. Do not combine findings into a single headline. Do not editorialize beyond what the original finding supports.
