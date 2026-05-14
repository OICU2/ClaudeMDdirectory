---
name: content-promise-delivery-gap-checker
category: writing
description: >
  Analyzes whether a piece of writing actually delivers on what its headline or introduction promises to readers. Use when someone says "my article feels off," asks if their content matches their title, wants to check if their piece delivers on its hook, needs to find why readers might feel disappointed, or wonders if their intro is misleading. Surfaces specific gaps between implied promises and actual content so writers can fix misalignment.
tags: [writing, editing, content-analysis, headlines, reader-experience]
author: community
---

# Content Promise-Delivery Gap Checker

Extracts the implicit promises made by a headline or introduction, then audits the body content to identify exactly where and how the piece fails to fulfill reader expectations.

## Analysis Workflow

1. **Extract the headline/intro promises**
   - Identify every explicit claim (e.g., "5 ways to X")
   - Identify implicit promises (tone, depth, audience, format implied by word choice)
   - Note emotional expectations set (e.g., "shocking," "simple," "complete guide")
   - List each promise as a discrete, testable statement

2. **Audit the body content against each promise**
   - Check whether each extracted promise is fully met, partially met, or unmet
   - Note the specific location where a promise was expected to be honored
   - Flag content that exists in the body but was never promised (scope creep or mismatch)

3. **Classify each gap by type**
   - **Missing delivery**: Promise made, content absent
   - **Partial delivery**: Content exists but is shallow, vague, or incomplete relative to the promise
   - **Scope mismatch**: Body covers different ground than the headline/intro implied
   - **Tone mismatch**: Promised register (expert, casual, urgent) not maintained
   - **Audience mismatch**: Intro targets one reader; body assumes a different one

4. **Prioritize gaps by reader impact**
   - Rank each gap: High (reader feels deceived or lost), Medium (reader feels underwhelmed), Low (minor inconsistency)

5. **Generate specific fixes**
   - For each gap, offer one concrete revision option: either rewrite the promise or point to where the body must be expanded/changed

## Output Format

Produce a structured gap report with these sections:

**Promises Extracted**
A numbered list of every promise identified from the headline and introduction.

**Gap Analysis Table**
| Promise | Status | Gap Type | Reader Impact | Location in Body |
|---------|--------|----------|---------------|------------------|
One row per promise.

**Top 3 Priority Fixes**
Numbered, each containing:
- The specific gap being addressed
- A concrete revision suggestion (either rewrite the promise OR the body section, with example language)

**Overall Alignment Score**
A single rating: Strong / Moderate / Weak, with one sentence explaining the verdict.

Keep the report direct and actionable. No padding. Flag only real gaps, not stylistic preferences.
