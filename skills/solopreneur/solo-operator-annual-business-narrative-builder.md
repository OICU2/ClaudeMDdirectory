---
name: solo-operator-annual-business-narrative-builder
category: solopreneur
description: >
  Builds a concise, compelling annual business narrative for solopreneurs that synthesizes revenue milestones, client wins, lessons learned, and strategic priorities into a story usable for marketing, partnerships, or personal reflection. Use when someone says "help me wrap up my business year," asks "what should I highlight from this year," wants to "write my annual business review," needs to "summarize what I accomplished this year," or is trying to "figure out my story for next year."
tags: [annual-review, business-narrative, solopreneur, reflection, strategy]
author: community
---

# Solo Operator Annual Business Narrative Builder

This skill guides Claude to extract and shape a solopreneur's year into a structured, honest, and compelling narrative they can reuse across pitch decks, newsletters, partner conversations, or personal clarity sessions.

## Narrative Building Workflow

### Step 1: Gather Raw Material
Ask the user for the following inputs (accept rough notes, bullet points, or stream of consciousness — do not require polish):
- **Revenue**: Total revenue, growth vs. prior year, best month, worst month
- **Clients**: Number served, standout wins, any lost or churned clients worth naming
- **Offers**: What they sold, what they retired, what they tested
- **Highlight moments**: Launches, press, partnerships, referrals, personal milestones
- **Hard moments**: What failed, what drained them, what they'd undo
- **Time and energy**: How they actually spent their hours vs. how they wanted to
- **Next year intent**: Top 1–3 priorities, what they're dropping, what they're doubling down on

If the user provides partial information, proceed with what's available and flag gaps at the end.

### Step 2: Identify the Year's Core Theme
Before drafting, define one honest theme sentence that captures the year's arc. Examples:
- "This was the year of proving the model works."
- "This was a stabilization year after a chaotic prior year."
- "This was the year I stopped taking clients I didn't want."

Surface this theme from the data — do not impose a positive spin if the year was difficult.

### Step 3: Draft the Narrative
Write the narrative in first person, past tense, from the operator's perspective. Structure it as follows:

1. **Opening hook** (1–2 sentences): The year in one honest, memorable frame.
2. **Business performance** (2–3 sentences): Revenue, volume, trajectory — concrete numbers if provided.
3. **Client and offer highlights** (2–3 sentences): Who you served, what worked, standout wins.
4. **What I learned the hard way** (2–3 sentences): At least one honest challenge or failure. No skipping this.
5. **How I spent my time** (1–2 sentences): Real vs. intended — energy audit snapshot.
6. **Where I'm headed** (2–3 sentences): Strategic priorities for next year, framed as choices, not vague goals.
7. **Closing statement** (1 sentence): A line the operator could say out loud and mean it.

### Step 4: Produce Alternate Versions
After the full narrative, generate two condensed variants:
- **LinkedIn/newsletter version** (3–4 sentences): Public-facing, professional, shareable
- **Partner/pitch version** (2–3 sentences): Credibility-forward, outcome-focused, no vulnerability

### Step 5: Flag and Recommend
End with a short bullets section noting:
- Any data gaps that would strengthen the narrative
- One line the operator might want to cut (too vague, too humble, or overshares)
- One line worth expanding into a longer piece (blog post, case study, or keynote)

## Output Format

Deliver the following in order, clearly labeled:

```
## Annual Business Narrative — [Year]

**Core Theme:** [One sentence]

**Full Narrative:**
[~250–350 words, first person, paragraph form, no bullet points]

**LinkedIn/Newsletter Version:**
[3–4 sentences]

**Partner/Pitch Version:**
[2–3 sentences]

**Notes:**
- Missing data: [list or "none"]
- Consider cutting: [quote the line]
- Worth expanding: [quote the line + suggested format]
```

Total output should be readable in under
