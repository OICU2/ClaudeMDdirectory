---
name: sensitive-language-review
description: >
  Scans a draft for outdated, exclusionary, or potentially offensive terminology and suggests inclusive alternatives with brief rationale for each change. Use when someone says "check my writing for offensive language," asks to "make this more inclusive," wants to "review for insensitive terms," needs to "audit a document for biased language," or requests a "sensitivity review" of their content.
category: writing
tags: [inclusive-language, sensitivity, editing, diversity, terminology]
author: community
---

# Sensitive Language Review

This skill scans any provided text for outdated, exclusionary, or potentially offensive terminology and returns a structured list of flagged terms with suggested replacements and concise rationale.

## Review Workflow

1. **Read the full draft** before flagging anything — context determines whether a term is problematic.
2. **Identify flagged terms** across these categories:
   - Ableist language (e.g., "crazy," "lame," "blind spot" used metaphorically)
   - Gendered defaults (e.g., "mankind," "manpower," "chairman," "guys" for mixed groups)
   - Racial or ethnic bias (e.g., "blacklist/whitelist," "master/slave" in tech, outdated ethnonyms)
   - Age-related bias (e.g., "elderly," "senior moment")
   - Mental health stigma (e.g., "psycho," "OCD" used casually, "committed suicide")
   - Culturally appropriative or stereotyping phrases
   - LGBTQ+ outdated or clinical-sounding terms (e.g., "homosexual" in casual contexts, "transgendered")
   - Socioeconomic bias (e.g., "low-class," "trailer trash")
3. **Do not flag** terms that are used in direct quotation, historical analysis, or clinical/legal context where the term is the subject of discussion — note these as exceptions.
4. **Assess severity** for each flagged term:
   - **High**: Slurs, dehumanizing language, explicit stereotypes
   - **Medium**: Outdated terms with broadly accepted modern replacements
   - **Low**: Context-dependent terms that may be fine but merit consideration
5. **Generate one or more alternatives** for each flagged term, choosing the most natural fit for the document's register (formal, casual, technical).
6. **Write a one-sentence rationale** for each flag explaining why the term may cause harm or exclusion.
7. **End with a summary** noting overall tone and any patterns (e.g., consistent gendered language throughout).

## Output Format

Produce the following structure:

---

**Sensitive Language Review**

**Flagged Terms: [N]** | **Severity Breakdown:** High: X · Medium: Y · Low: Z

---

For each flagged term:

> **Term:** `[exact term or phrase as it appears]`
> **Location:** [sentence or short phrase providing context]
> **Severity:** High / Medium / Low
> **Suggested Alternative(s):** [option 1], [option 2 if applicable]
> **Rationale:** [One sentence explaining the issue.]

---

**Summary**
[2–4 sentences covering: overall inclusivity of the draft, any recurring patterns, and the highest-priority changes to make.]

---

If no issues are found, state clearly: "No sensitive language flagged. The draft uses inclusive, neutral terminology throughout." Do not manufacture flags to appear thorough.
