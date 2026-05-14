---
name: brand-tagline-generator
description: >
  Generates multiple ranked tagline variants for a brand based on positioning, target audience, and desired tone. Use when someone says "help me write a tagline," asks about brand messaging or slogans, wants to craft a catchphrase for their company, needs positioning language for a product launch, or is trying to differentiate their brand in a crowded market.
category: marketing
tags: [branding, copywriting, messaging, positioning, taglines]
author: community
---

# Brand Tagline Generator

This skill produces 8–10 ranked tagline variants tailored to a brand's positioning, audience, and tone, with scoring rationale for each.

## Tagline Generation Workflow

1. **Gather inputs before generating.** If any of the following are missing, ask for them explicitly before proceeding:
   - Brand name and what the product/service does
   - Target audience (who they are, what they care about)
   - Brand tone (e.g., bold, playful, premium, trustworthy, irreverent)
   - Core value proposition or differentiator
   - Any taglines to avoid or competitor examples

2. **Generate across 4 strategic angles.** Produce at least 2 variants per angle:
   - **Outcome-focused** — what the customer achieves
   - **Identity-focused** — who the customer becomes
   - **Problem-focused** — what pain is eliminated
   - **Brand-character-focused** — what makes the brand distinct

3. **Apply these craft rules to every tagline:**
   - 2–7 words unless the brief demands otherwise
   - Avoid jargon, buzzwords, and generic phrases ("world-class," "innovative," "next-level")
   - Prioritize rhythm, alliteration, or contrast where natural
   - Must work without the brand name visible (standalone clarity)
   - Do not use questions unless they create immediate tension

4. **Score and rank all variants.** After generating, rank from strongest to weakest using a 1–10 score across three criteria:
   - **Memorability** — would someone repeat it unprompted?
   - **Differentiation** — could a competitor claim this?
   - **Audience fit** — does it resonate with the stated target?

5. **Flag the top 3 as recommended** and note one specific reason each earned that position.

## Output Format

Produce the following structure:

---

**Brand:** [Name]
**Tone:** [Stated tone]
**Audience:** [Stated audience]

---

### All Tagline Variants

| Rank | Tagline | Memorability | Differentiation | Audience Fit | Total |
|------|---------|-------------|----------------|--------------|-------|
| 1 | [tagline] | 9 | 8 | 9 | 26 |
| 2 | [tagline] | ... | ... | ... | ... |
| ... | | | | | |

---

### ⭐ Top 3 Recommended

**1. "[Tagline]"**
Why it works: [1 sentence — specific, not generic praise]

**2. "[Tagline]"**
Why it works: [1 sentence]

**3. "[Tagline]"**
Why it works: [1 sentence]

---

### Next Steps
- Suggest 1–2 directions to iterate if the client wants a different angle
- Note any tagline that scored low on differentiation and explain the risk
