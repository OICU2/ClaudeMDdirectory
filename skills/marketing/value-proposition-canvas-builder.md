---
name: value-proposition-canvas-builder
description: >
  Maps customer jobs, pains, and gains against product features and benefits to surface the strongest value proposition angles for messaging and positioning. Use when someone says "help me define my value proposition," asks about "what makes our product different," or wants to "figure out our messaging angle," "understand what customers actually care about," or "align our product to customer needs."
category: marketing
tags: [value-proposition, positioning, messaging, customer-research, product-marketing]
author: community
---

# Value Proposition Canvas Builder

This skill guides Claude through a structured value proposition canvas exercise, mapping customer jobs, pains, and gains against product offerings to identify the highest-impact messaging angles.

## Canvas Construction Workflow

**Step 1: Extract Customer Profile**
Ask the user (or infer from context) three things:
- **Customer Jobs**: What tasks, problems, or needs drive the customer? Include functional jobs (get X done), social jobs (look good to peers), and emotional jobs (feel secure, confident).
- **Customer Pains**: What frustrates them before, during, or after attempting the job? Include risks, obstacles, and undesired outcomes. Rate each pain: mild, moderate, or severe.
- **Customer Gains**: What outcomes do they want? What would delight them beyond expectations? Separate required gains (table stakes) from desired gains (differentiators).

**Step 2: Extract Product Map**
For the product or service being positioned, identify:
- **Products & Services**: List the core offering and adjacent features.
- **Pain Relievers**: For each product capability, map which customer pain it directly addresses and how completely it resolves it.
- **Gain Creators**: For each capability, map which customer gains it enables and whether it delivers required or desired gains.

**Step 3: Score the Fit**
Create a fit matrix:
- Cross-reference each customer pain against each pain reliever — score coverage (none / partial / strong).
- Cross-reference each customer gain against each gain creator — score delivery (none / partial / strong).
- Flag any pains with no reliever (gaps) and any gains with no creator (missed opportunities).

**Step 4: Identify Value Proposition Angles**
From the fit matrix, surface the top 2–4 angles where coverage is strongest AND the pain/gain is rated high importance. For each angle:
- Name the angle (e.g., "Speed for time-pressed operators")
- State the customer job/pain/gain it addresses
- Identify the specific product capability that delivers it
- Draft a one-sentence value proposition statement: "[Product] helps [customer] who [job/pain] by [capability], so they can [gain/outcome]."

**Step 5: Flag Gaps and Risks**
List any severe pains not addressed by the product, required gains not delivered, and any claims that risk overpromising.

## Output Format

Produce a structured canvas with five clearly labeled sections:

```
## Customer Profile
**Jobs:** [bulleted list]
**Pains:** [bulleted list with severity rating]
**Gains:** [bulleted list with required/desired label]

## Product Map
**Pain Relievers:** [capability → pain addressed → coverage score]
**Gain Creators:** [capability → gain delivered → coverage score]

## Fit Matrix Summary
[Table or bulleted cross-reference with coverage scores]

## Value Proposition Angles (Prioritized)
1. [Angle name]
   - Addresses: [pain/gain]
   - Via: [capability]
   - Statement: "[One-sentence VP statement]"
[Repeat for each angle]

## Gaps & Risks
- [Unaddressed pains, missing gains, overpromise risks]
```

Length: comprehensive enough to be actionable — typically 400–700 words of output. If the user provides sparse input, ask 3–5 clarifying questions before building the canvas rather than fabricating assumptions.
