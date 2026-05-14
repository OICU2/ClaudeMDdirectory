---
name: marketing-message-readability-audit
description: >
  Scores and rewrites marketing copy across channels to match the reading level and cognitive load appropriate for the target audience. Use when someone says "this copy feels too complex," asks about readability of their marketing content, or wants to simplify messaging for a specific audience. Also triggers when someone needs to adapt copy for different literacy levels, asks why their campaign isn't resonating, or wants to check if their content matches their audience's reading level.
category: marketing
tags: [copywriting, readability, audience-targeting, content-optimization, accessibility]
author: community
---

# Marketing Message Readability Audit

This skill analyzes marketing copy for readability and cognitive load, scores it against audience-appropriate benchmarks, then rewrites it to match the target audience's literacy level and attention capacity.

## Readability Audit Workflow

### 1. Gather Context
Before auditing, identify:
- **Channel**: Email, landing page, social ad, SMS, billboard, product packaging, etc.
- **Target audience**: Age range, education level, industry/profession, familiarity with the product category
- **Goal of the copy**: Awareness, conversion, retention, education

If not provided, ask for these before proceeding. Channel and audience determine the target readability benchmark.

### 2. Score the Existing Copy
Evaluate the submitted copy against these metrics:

- **Flesch-Kincaid Grade Level**: Calculate approximate grade level based on sentence length and syllable count. Target ranges:
  - General consumer (B2C): Grade 6–8
  - Professional/B2B: Grade 8–10
  - Technical/specialist: Grade 10–12
  - SMS/social ads: Grade 4–6
  - Healthcare/financial (regulated, plain language required): Grade 6 or below

- **Average sentence length**: Flag sentences over 20 words
- **Passive voice density**: Flag if more than 15% of sentences use passive construction
- **Jargon count**: List domain-specific or insider terms a layperson would not recognize
- **Cognitive load indicators**: Nested clauses, multiple ideas per sentence, abstract nouns stacked together, acronyms without explanation

### 3. Identify Specific Problem Areas
For each flagged issue, quote the exact phrase or sentence and name the problem type:
- Overly long sentence
- Passive construction
- Jargon or acronym
- Abstract language where concrete language works better
- Too many ideas in one sentence

### 4. Rewrite the Copy
Produce a rewritten version that:
- Hits the target grade level for the identified audience and channel
- Uses active voice by default
- Breaks long sentences into two or replaces them with shorter constructions
- Replaces jargon with plain equivalents (or explains terms inline if they cannot be removed)
- Leads with the concrete benefit before any explanation
- Preserves the original tone, brand voice, and core message
- Matches the appropriate length for the channel (e.g., SMS under 160 characters, social ad headline under 8 words)

### 5. Apply Channel-Specific Rules
- **Email subject lines**: Grade 4–5, under 9 words, one clear idea
- **Landing page hero copy**: Grade 6–8, active verb, outcome-focused
- **Social media ads**: Grade 4–6, conversational, one CTA
- **Long-form content (blog, white paper)**: Grade 8–10 acceptable if audience is professional
- **SMS**: Grade 4–5 maximum, zero jargon, direct CTA
- **Out-of-home (billboard/transit)**: Grade 3–4, 5–7 words max, single message

## Output Format

Produce a structured audit report with these sections:

**Readability Audit: [Copy Title or Channel]**

---

**Original Copy**
> [Paste the submitted copy verbatim]

---

**Audience & Channel**
- Channel: [identified channel]
- Target audience: [identified audience]
- Target grade level: [benchmark range]

---

**Readability Score**
- Estimated FK Grade Level: [X]
- Average sentence length: [X words]
- Passive voice instances: [X]
- Jargon/unclear terms: [list]
- Overall verdict: [Meets target / Slightly above target / Significantly above target]

---

**Issues Found**
| # |
