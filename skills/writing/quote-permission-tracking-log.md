---
name: quote-permission-tracking-log
description: >
  Builds a structured log of every quoted source in a piece, recording permission status, attribution format, and follow-up actions needed. Use when someone says "I need to track permissions for my quotes," asks about "organizing source clearances," or wants to "log which quotes are approved." Also activates when someone mentions "keeping track of attribution requirements" or "managing permission status for quoted material."
category: writing
tags: [permissions, attribution, sourcing, tracking, publishing]
author: community
---

# Quote Permission Tracking Log

This skill builds a comprehensive, structured log of every quoted source in a document, capturing permission status, required attribution language, and outstanding follow-up tasks so nothing slips through before publication.

## Workflow

1. **Extract all quotes** — Identify every direct quote, block quote, and paraphrased passage with citation intent in the provided text. Note page number or section location for each.

2. **Capture source metadata** — For each quote, record:
   - Source name (author, publication, organization)
   - Original publication title and date
   - Quote type (direct, paraphrased, adapted)
   - Word count or excerpt length

3. **Assign permission status** — Classify each entry with one of four statuses:
   - `CLEARED` — Written permission received, document on file
   - `PENDING` — Request sent, awaiting response
   - `NEEDED` — Permission required but not yet requested
   - `EXEMPT` — Falls under fair use, public domain, or Creative Commons; note the specific basis

4. **Document attribution format** — Record the exact attribution string the rights holder requires, or draft a standard attribution if none has been specified yet.

5. **Define follow-up actions** — For every non-CLEARED entry, write a concrete next step with an owner and target date (e.g., "Email rights@publisher.com by 2024-03-15 to request reprint rights").

6. **Flag risk items** — Mark any quote exceeding 300 words, any commercial use of creative work, or any source with known aggressive rights enforcement as HIGH RISK.

## Output Format

Produce a markdown table followed by a summary block.

**Table columns:**
| # | Quote Excerpt (≤20 words) | Source | Type | Status | Attribution Required | Follow-Up Action | Risk Level |

**Summary block after the table:**
```
## Log Summary
- Total quotes tracked: X
- Cleared: X
- Pending: X
- Needed: X
- Exempt: X
- High-risk items: X
- Immediate actions required: [bulleted list of NEEDED + HIGH RISK items]
```

If the user has not provided source text, prompt them to paste the document or list their quotes before proceeding. Keep excerpt previews brief enough to identify the quote without reproducing it in full.
