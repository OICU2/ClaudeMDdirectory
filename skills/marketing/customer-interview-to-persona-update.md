---
name: customer-interview-to-persona-update
description: >
  Processes raw customer interview transcripts to extract language patterns, pain points, and motivations that should update or challenge existing marketing persona documentation. Use when someone says "I just finished customer interviews," asks "what did we learn from these calls," or wants to "update our personas based on new research." Also activates when someone shares interview notes and says "see if this changes how we think about our customers" or "check if our assumptions still hold."
category: marketing
tags: [personas, customer-research, interviews, voice-of-customer, positioning]
author: community
---

# Customer Interview to Persona Update

This skill analyzes raw customer interview transcripts to surface language patterns, unmet needs, and belief shifts that should prompt updates to existing marketing personas.

## Extraction and Analysis Workflow

1. **Ingest the transcript(s)** — Accept raw text, rough notes, or structured Q&A. Ask for existing persona documentation if not provided; proceed with a placeholder if unavailable.

2. **Extract verbatim language** — Pull exact quotes that describe problems, desired outcomes, frustrations, and decision triggers. Prioritize the customer's own words over paraphrased summaries.

3. **Identify patterns across interviews** — If multiple transcripts are provided, flag language or themes that appear in 2+ interviews. Mark single-source insights as "emerging signal, needs validation."

4. **Categorize findings into five buckets:**
   - **New pain points** — problems not reflected in current persona
   - **Reframed pain points** — same problem described differently than the persona assumes
   - **Motivations and desired outcomes** — what the customer is actually trying to achieve
   - **Decision triggers** — what prompted them to seek a solution now
   - **Objections and hesitations** — what almost stopped them or still worries them

5. **Compare against existing persona** — For each finding, determine one of three verdicts:
   - **Confirms** — consistent with current persona language
   - **Refines** — same concept but sharper or more specific framing
   - **Challenges** — contradicts an assumption in the current persona

6. **Draft persona update recommendations** — Write specific edits to persona sections (e.g., "Replace 'struggles with time management' with 'feels like they're always reacting instead of leading'").

7. **Flag high-priority changes** — Mark any finding that contradicts a core persona assumption as a priority review item requiring team discussion before adoption.

## Output Format

Produce a structured report with the following sections:

---

**Interview Source(s):** [names, dates, or IDs]
**Persona Reviewed:** [persona name or "no existing persona provided"]

---

### Key Verbatim Quotes
A bulleted list of 5–10 direct quotes, each tagged with the bucket it belongs to (pain point, motivation, trigger, objection, or language pattern).

### Pattern Summary
2–4 sentences describing the dominant themes across interviews. Note where multiple customers converged on the same language.

### Persona Impact Assessment

| Finding | Current Persona Says | Interview Evidence | Verdict |
|---|---|---|---|
| [finding] | [current assumption] | [quote or summary] | Confirms / Refines / Challenges |

Include 5–10 rows. Prioritize Challenges and Refines over Confirms.

### Recommended Persona Edits
Bulleted list of specific, copy-ready edits. Format each as:
- **Section:** [persona section name] → **Change:** [current text] → [proposed replacement text] → **Reason:** [one sentence]

### Priority Review Items
List any findings that challenge core assumptions. Flag with ⚠️ and include a suggested discussion question for the team.

### Open Questions
2–5 follow-up questions to investigate in future interviews based on gaps or ambiguous signals in this batch.
