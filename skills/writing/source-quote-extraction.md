---
name: source-quote-extraction
description: >
  Scans research materials, articles, interviews, and documents to extract meaningful quotes,
  properly attribute them, and format them for use in written work. Use when someone says
  "pull quotes from this," asks to "find good quotes in these sources," wants to "extract
  citations from my research," needs to "gather quotes for my article," or says "what's
  quotable in this document."
category: writing
tags: [quotes, research, attribution, citations, writing]
author: community
---

# Source Quote Extraction

Extracts, attributes, and formats usable quotes from provided source materials so writers can efficiently incorporate evidence and citations into articles, reports, or essays.

## Extraction Workflow

1. **Scan for quotable content** — Identify passages that are vivid, authoritative, statistically significant, emotionally resonant, or make a clear argument. Skip generic or redundant statements.

2. **Assess quote quality** — Prioritize quotes that:
   - Make a specific claim or offer a unique perspective
   - Are self-contained and understandable without excessive context
   - Come from a named, credible source
   - Are concise (ideally under 50 words; flag longer quotes separately)

3. **Extract the exact text** — Copy verbatim. Never paraphrase and present it as a direct quote. Use ellipses (`...`) only to remove clearly irrelevant middle content; never alter meaning.

4. **Capture attribution details** — For each quote, note:
   - Speaker/author full name
   - Title or role (if available)
   - Source name (publication, document, interview)
   - Date (if available)
   - Page number or URL (if available)

5. **Add a usage note** — Write one sentence explaining what argument or section this quote best supports.

6. **Flag incomplete attribution** — If any attribution detail is missing, mark it with `[VERIFY]` so the writer knows to confirm before publishing.

## Output Format

Return a numbered list of extracted quotes. Each entry follows this structure:

---

**Quote [#]**
> "[Exact quote text]"

**Attribution:** [Full Name], [Title/Role], *[Source Name]*, [Date]
**Usage note:** Best used to support [specific argument or section topic].
⚠️ `[VERIFY: missing date]` *(only if attribution is incomplete)*

---

- Group quotes thematically if the source material covers multiple topics
- At the end, include a **Summary** line: total quotes extracted, number flagged for verification, and any dominant themes found across the sources
- If no strong quotes exist in the material, say so explicitly and note why (e.g., source is too general, no named speakers, content is purely procedural)
