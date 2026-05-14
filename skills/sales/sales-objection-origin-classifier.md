---
name: sales-objection-origin-classifier
description: >
  Categorizes recorded or transcribed sales objections by root cause—budget, timing, authority, need, or competition—to identify systemic patterns across the pipeline. Use when someone says "we're hearing a lot of pushback on price," asks about why deals are stalling, or wants to understand what's killing opportunities in their pipeline. Also triggers when someone shares call transcripts, objection logs, or asks "what's the real reason prospects aren't buying."
category: sales
tags: [objection-handling, pipeline-analysis, sales-intelligence, root-cause, BANT]
author: community
---

# Sales Objection Origin Classifier

Analyzes individual or bulk sales objections and classifies each by root cause category to surface systemic pipeline problems and inform coaching or strategy decisions.

## Classification Workflow

1. **Ingest objections** — Accept input as raw transcript snippets, bullet-point lists, CRM notes, or free-form text. If multiple objections are provided, process each one individually.

2. **Strip surface language** — Ignore filler phrases ("we just," "honestly," "not right now") and identify the core concern beneath the stated objection.

3. **Classify into one primary category:**
   - **Budget (B)** — Prospect lacks funds, can't justify ROI, or is anchoring on a lower price point. Signals: "too expensive," "not in budget," "need to reduce costs," "what's the cheapest option."
   - **Timing (T)** — Prospect is interested but not ready to act now. Signals: "check back next quarter," "we're in a freeze," "bad time of year," "too much going on."
   - **Authority (A)** — Decision-maker is not in the room or has not been engaged. Signals: "I need to run this by," "my boss would never approve," "committee decision," "not my call."
   - **Need (N)** — Prospect does not see a problem worth solving or doesn't connect your solution to their pain. Signals: "we're fine with what we have," "not a priority," "doesn't apply to us."
   - **Competition (C)** — Prospect is evaluating or committed to an alternative. Signals: "we're looking at others," "already using X," "our current vendor," "X does this cheaper."

4. **Assign a secondary tag if applicable** — Some objections have a surface category and a hidden one (e.g., "not a priority" stated as Need but driven by Authority). Note both when evidence supports it.

5. **Flag systemic patterns** — If analyzing 3 or more objections, identify which category appears most frequently and note what stage in the pipeline each objection occurred (if provided).

6. **Do not assume good faith deflection** — Treat "timing" objections skeptically; note when they may mask Budget or Need issues based on context clues in the language.

## Output Format

For each objection, produce a structured entry:

```
Objection: "[exact quote or paraphrase]"
Primary Category: [Budget / Timing / Authority / Need / Competition]
Secondary Category (if applicable): [category]
Reasoning: [1–2 sentences explaining the classification based on specific language used]
Recommended Response Angle: [1 sentence on how to address this root cause]
```

If analyzing multiple objections (3+), append a **Pattern Summary** section:

```
## Pattern Summary
- Most common category: [X] — [count] of [total] objections
- Pipeline stage with highest friction: [stage if provided]
- Top systemic risk: [1–2 sentence diagnosis of what this pattern signals about the sales process, messaging, or targeting]
- Recommended action: [specific coaching, messaging, or process change]
```

Keep reasoning concise. Do not restate the objection in the reasoning. Flag any objection where classification confidence is low and explain why.
