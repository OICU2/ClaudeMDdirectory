---
name: customer-language-gap-audit
description: >
  Analyzes the linguistic disconnect between marketing copy and authentic customer language to surface messaging misalignments that hurt conversion. Use when someone says "our messaging isn't resonating," asks why customers aren't converting despite traffic, or wants to understand how customers actually talk about their product. Also activates when someone needs to rewrite copy using voice-of-customer language or wants to audit whether their marketing speaks the way their buyers think.
category: marketing
tags: [copywriting, voice-of-customer, conversion-optimization, messaging, content-audit]
author: community
---

# Customer Language Gap Audit

This skill systematically compares company marketing language against real customer language from reviews, support tickets, and interviews to identify specific word-choice misalignments that reduce conversion and trust.

## Audit Workflow

### Step 1: Collect Source Materials
Request the following from the user before proceeding:
- **Marketing copy**: Homepage, landing pages, ads, email subject lines, product descriptions
- **Customer language sources** (at least one required): App store or G2/Capterra reviews, support ticket summaries, sales call transcripts, interview notes, survey open-ends, social media comments

If no customer language is provided, ask for it explicitly. Do not proceed with fabricated customer voice.

### Step 2: Extract Company Language Patterns
Scan all marketing copy and identify:
- The **exact words and phrases** used to describe the product's value (e.g., "seamless integration," "enterprise-grade," "AI-powered")
- The **problem framing**: how the company describes the pain point the product solves
- The **outcome language**: what the company promises (e.g., "accelerate growth," "drive ROI")
- **Jargon, acronyms, or category terms** the company relies on

List each as a discrete phrase or term, not a summary.

### Step 3: Extract Customer Language Patterns
Scan all customer-provided materials and identify:
- The **exact words customers use** to describe the problem they had before the product
- The **exact words customers use** to describe what the product does for them
- **Emotional language**: frustration, relief, surprise, skepticism
- **Specific use cases or scenarios** customers mention repeatedly
- Words customers use that **never appear in the marketing copy**

List verbatim phrases where possible. Preserve the customer's actual wording — do not paraphrase.

### Step 4: Gap Analysis
Compare the two lists across four dimensions:

1. **Problem Description Gap**: Does the company describe the problem the way customers experienced it? Flag where the company uses abstract or categorical language and customers use concrete, situational language.

2. **Outcome Language Gap**: Does the company's promised outcome match what customers actually celebrate? Flag mismatches between company benefit claims and customer success stories.

3. **Jargon Gap**: List every technical term, buzzword, or category label in the marketing copy that does not appear in customer language. Rate each as: *alienating* (customers use a different word for this), *neutral* (customers don't use it but it doesn't confuse), or *blocking* (evidence it causes confusion or distrust).

4. **Missing Language**: List customer phrases that appear frequently but are absent from all marketing copy. These are conversion opportunities.

### Step 5: Prioritize Gaps
Score each identified gap on two axes:
- **Frequency**: How often does this customer phrase appear in source materials? (High / Medium / Low)
- **Placement risk**: Does the misalignment appear in a high-stakes location — headline, CTA, above-the-fold copy, email subject? (Critical / Moderate / Minor)

Flag the top 3–5 gaps as **Priority Fixes**.

### Step 6: Rewrite Recommendations
For each Priority Fix, provide:
- The current company phrase
- The customer-language replacement (drawn directly from source material)
- One example rewrite showing the phrase in context (headline, sentence, or CTA)

---

## Output Format

Produce a structured audit report with these exact sections:

**COMPANY LANGUAGE INVENTORY**
Bulleted list of key marketing phrases extracted from copy.

**CUSTOMER LANGUAGE INVENTORY**
Bulleted list of verbatim or near-verbatim customer phrases, with source type noted (e.g., "[review]", "[support ticket]").

**GAP ANALYSIS**
Four subsections (Problem Description, Outcome Language, Jargon, Missing Language). Each
