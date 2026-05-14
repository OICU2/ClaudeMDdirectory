---
name: byline-to-bio-length-adapter
description: >
  Converts a full author biography into multiple standardized length variants formatted for publication submissions. Use when someone says "I need a shorter bio," asks about adapting their author bio for a submission, or wants to create different bio lengths for different venues. Also triggers when someone shares their author biography and mentions word count requirements or says "trim my bio" or "I need a 50-word bio."
category: writing
tags: [biography, author, publishing, editing, formatting]
author: community
---

# Byline to Bio Length Adapter

This skill takes a full author biography and produces three precise-length variants (25, 50, and 100 words) suitable for different publication submission requirements.

## Workflow

1. **Receive the source bio** — Accept the full author biography as input. If none is provided, ask for it before proceeding.
2. **Identify core elements** — Extract and rank the following in order of priority:
   - Current role or primary occupation
   - Most notable publication, award, or credential
   - Institutional affiliation (if relevant)
   - Location (only if space allows)
   - Personal detail or hook (only in longer variants)
3. **Draft the 25-word variant** — Include only the top 1–2 priority elements. Use present tense. Name + role + one credential. No filler phrases like "is a writer who."
4. **Draft the 50-word variant** — Add the next 1–2 priority elements. May include one publication title or award. One sentence of context is acceptable.
5. **Draft the 100-word variant** — Closest to the original in substance. Include personality, fuller credential list, and one personal or thematic detail. Still tighter than the original.
6. **Verify word counts** — Count each variant precisely. Adjust wording until each hits its target count (±1 word is acceptable).
7. **Preserve voice** — Match the tone of the original bio (first person vs. third person, formal vs. conversational). Do not switch voice unless asked.

## Output Format

Produce three clearly labeled sections in this exact structure:

---

**25-Word Bio**
[Bio text — exactly 25 words]
*(Word count: 25)*

---

**50-Word Bio**
[Bio text — exactly 50 words]
*(Word count: 50)*

---

**100-Word Bio**
[Bio text — exactly 100 words]
*(Word count: 100)*

---

After all three variants, add a single line:
> *Note: All variants written in [first/third] person to match your original. Let me know if you need a different voice or a custom word count.*
