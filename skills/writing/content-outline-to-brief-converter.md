---
name: content-outline-to-brief-converter
description: >
  Converts a raw bullet-point outline into a detailed, actionable editorial brief ready for writers or content teams. Use when someone says "turn this outline into a brief," shares a bullet-point structure and asks for writing guidance, wants to flesh out an outline before assigning it to a writer, or needs word count targets and tone direction for each section. Also activates when someone asks to "make this outline production-ready" or "convert my outline into a content plan."
category: writing
tags: [content-strategy, editorial, briefs, outlines, writing-workflow]
author: community
---

# Content Outline to Editorial Brief Converter

Transforms a raw bullet-point outline into a structured editorial brief with per-section word counts, key arguments, source requirements, and tone guidance so writers can execute without ambiguity.

## Conversion Workflow

1. **Parse the outline structure** — Identify the hierarchy: top-level sections, subsections, and any loose bullets. If the outline is flat, infer logical groupings based on topic proximity.

2. **Define the overall brief header** — Extract or infer:
   - Target audience (ask if not clear)
   - Content goal (inform, convert, entertain, rank)
   - Total word count target (default to 1,200–1,800 words for standard articles unless the outline suggests otherwise)
   - Primary keyword or topic angle (ask if missing)
   - Publication format (blog post, whitepaper, landing page, etc.)

3. **Expand each section individually** — For every top-level section in the outline, produce:
   - **Section title** (H2 or H3 label, finalized)
   - **Word count target** (allocate proportionally; intros/conclusions get 10–15%, body sections split the remainder)
   - **Key arguments or points to cover** (3–5 specific claims, facts, or narratives the writer must hit)
   - **Required sources** (name specific source types: studies, expert quotes, statistics, case studies, or flag where original research is needed)
   - **Tone guidance** (e.g., authoritative and data-driven, conversational and empathetic, persuasive but neutral)
   - **Transition note** (one sentence on how this section connects to the next)

4. **Add SEO and linking guidance** — Identify where to place:
   - Primary keyword and 2–3 secondary keywords with suggested placement
   - Internal link opportunities (flag as [INTERNAL LINK: topic])
   - External link requirements (minimum count and preferred source authority)

5. **Flag risks and open questions** — List any sections that are thin, any claims that need fact-checking, and any structural gaps in the original outline.

6. **Write the writer briefing note** — A 3–5 sentence plain-English summary the writer reads first: what this piece is, who it's for, what success looks like, and any non-negotiable requirements.

## Output Format

Produce a single Markdown document with this structure:

```
# Editorial Brief: [Article Title]

## Brief Overview
- **Audience:** ...
- **Goal:** ...
- **Format:** ...
- **Total Word Count:** ...
- **Primary Keyword:** ...
- **Due Considerations:** ...

## Writer Note
[3–5 sentence plain-English briefing]

---

## Section Briefs

### [Section Title] — [Word Count Target]
**Key Arguments:**
- ...
- ...
- ...

**Required Sources:** ...

**Tone:** ...

**Transition to next section:** ...

---
[Repeat for each section]

## SEO & Linking Guidance
- Primary keyword placement: ...
- Secondary keywords: ...
- Internal links: ...
- External links: ...

## Flags & Open Questions
- ...
```

Keep language directive and specific. Every field must contain actionable information — no placeholders like "add content here." If the input outline is too vague to populate a field, ask one targeted clarifying question rather than guessing.
