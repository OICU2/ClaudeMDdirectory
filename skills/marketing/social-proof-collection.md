---
name: social-proof-collection
description: >
  Systematically gathers, categorizes, and formats customer reviews, testimonials, and case study
  data for use in marketing assets. Use when someone says "we need more testimonials," asks about
  organizing customer feedback, wants to build a case study library, needs to find social proof for
  a campaign, or is trying to turn customer reviews into marketing content.
category: marketing
tags: [testimonials, case-studies, reviews, customer-feedback, content-marketing]
author: community
---

# Social Proof Collection

This skill extracts, organizes, and formats raw customer reviews, testimonials, and feedback into structured, campaign-ready social proof assets.

## Collection & Categorization Workflow

1. **Identify source material** — Ask for or locate raw inputs: review platform exports (G2, Trustpilot, Capterra, Google), CSV dumps, email threads, interview transcripts, NPS survey responses, or pasted text.

2. **Extract key data points** from each piece of feedback:
   - Customer name, title, company, industry, company size (if available)
   - Core outcome or result mentioned (quantified if possible)
   - Pain point addressed before using the product/service
   - Specific feature or capability called out
   - Emotional language or standout phrases
   - Star rating or sentiment score

3. **Categorize each testimonial** by:
   - **Use case**: onboarding, ROI, support, ease-of-use, switching from competitor, scalability
   - **Buyer persona**: role (e.g., founder, marketing manager, IT director)
   - **Industry vertical**: SaaS, ecommerce, healthcare, finance, etc.
   - **Proof strength**: Tier 1 (quantified result + named source), Tier 2 (named source, no metrics), Tier 3 (anonymous or vague)

4. **Flag gaps** — After categorizing, note which use cases, personas, or industries lack strong Tier 1 proof and recommend outreach targets.

5. **Reformat for asset types** — Produce ready-to-use versions for:
   - Pull quote (1–2 sentences, bolded key phrase)
   - Short-form ad copy (under 50 words)
   - Landing page testimonial block (name, title, company, quote, optional headshot placeholder)
   - Case study outline (situation, challenge, solution, results)

6. **Deduplicate and score** — Remove redundant entries and rank remaining testimonials by specificity, credibility, and relevance to stated campaign goal.

## Output Format

Produce a structured report with the following sections:

**Section 1 — Testimonial Registry** (table format)
| ID | Customer | Role/Company | Tier | Use Case | Industry | Core Quote | Quantified Result |
|----|----------|-------------|------|----------|----------|------------|-------------------|

**Section 2 — Formatted Assets**
For each Tier 1 testimonial, provide:
- `PULL QUOTE:` [italicized 1–2 sentence version]
- `AD COPY:` [≤50 word version]
- `LANDING PAGE BLOCK:` [name, title, company, full quote]

**Section 3 — Case Study Outlines**
For any testimonials with sufficient detail, provide a 4-part outline:
- **Situation:** [1 sentence]
- **Challenge:** [1 sentence]
- **Solution:** [1–2 sentences]
- **Results:** [bullet list of outcomes, quantified where possible]

**Section 4 — Gap Analysis**
- Personas with weak coverage: [list]
- Industries with no Tier 1 proof: [list]
- Recommended outreach: [specific customer segments to target for new testimonials]

Total output length scales with input volume. Minimum viable output for ≤10 reviews is one complete registry table plus formatted assets for all Tier 1 entries.
