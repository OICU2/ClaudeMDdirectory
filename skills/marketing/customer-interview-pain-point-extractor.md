---
name: customer-interview-pain-point-extractor
description: >
  Analyzes raw customer interview transcripts to surface recurring pain points, emotional language, and unmet desires for use in marketing copy and positioning. Use when someone says "here are my customer interview transcripts," asks to find patterns in customer feedback, wants to extract voice-of-customer language, needs to identify what problems customers keep mentioning, or is trying to understand what their customers actually want.
category: marketing
tags: [voice-of-customer, copywriting, market-research, positioning, customer-insights]
author: community
---

# Customer Interview Pain Point Extractor

This skill processes raw customer interview transcripts to identify recurring pain points, desires, and exact language patterns that can be used directly in messaging, ads, landing pages, and sales copy.

## Extraction Workflow

1. **Read all transcripts fully before categorizing** — do not tag the first mention of something as a pattern; require it to appear across multiple interviews or with strong emotional weight.

2. **Extract Pain Points** — Identify specific frustrations, failures, and problems customers described. Note the exact words they used, not paraphrases. Flag emotional intensity (mild / moderate / strong) based on qualifiers like "hate," "waste," "never works," "so frustrating."

3. **Extract Desires and Outcomes** — Identify what customers said they actually want, wish existed, or imagine a better version looks like. Separate functional desires (save time, reduce cost) from emotional desires (feel confident, stop worrying).

4. **Extract Recurring Language Patterns** — Pull verbatim phrases that appear across multiple interviews or that describe the problem in unusually vivid or specific ways. These are gold for copy — preserve them exactly.

5. **Identify Jobs-to-Be-Done** — Summarize the underlying task or goal each pain point clusters around. Group related pain points under a single JTBD statement.

6. **Flag Copy-Ready Phrases** — Mark any customer quote that could be dropped directly into a headline, ad, or email subject line with minimal editing.

7. **Note What Customers Are NOT Saying** — If a topic the business cares about (e.g., a feature) is absent or rarely mentioned, flag this gap explicitly.

## Output Format

Produce a structured report with the following sections:

**TOP PAIN POINTS** (ranked by frequency/intensity)
- Pain point statement (synthesized)
- Frequency: how many interviews mentioned it
- Intensity: mild / moderate / strong
- Verbatim customer quotes (2–4 per pain point)

**DESIRES & OUTCOMES**
- Functional desires (bulleted list)
- Emotional desires (bulleted list)
- Verbatim quotes illustrating each

**RECURRING LANGUAGE PATTERNS**
- Table with columns: Phrase | Appears In (# of interviews) | Suggested Use (headline / body copy / email / ad)

**JOBS-TO-BE-DONE SUMMARY**
- 3–6 JTBD statements in the format: "When [situation], customers want to [motivation], so they can [expected outcome]."

**COPY-READY PHRASES**
- Bulleted list of verbatim quotes requiring minimal editing for direct use in marketing

**GAPS & SURPRISES**
- Topics absent from interviews that the business might assume matter
- Unexpected themes that appeared

Keep synthesis tight. Every insight must be traceable to at least one direct quote. Do not editorialize or add assumptions beyond what the transcripts support.
