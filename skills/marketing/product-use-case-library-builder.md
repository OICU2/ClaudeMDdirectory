---
name: product-use-case-library-builder
description: >
  Builds a structured, reusable library of product use cases mapped to customer segments, industries, and pain points for sales and marketing teams. Use when someone says "we need use cases for our product," asks about "how different customers use our solution," or wants to "document use cases by industry or persona." Also triggers when someone needs to "map features to customer problems" or wants to "build a use case repository for sales enablement."
category: marketing
tags: [use-cases, sales-enablement, customer-segments, product-marketing, content-library]
author: community
---

# Product Use Case Library Builder

This skill generates a structured, segmented library of specific product use cases that maps how different customer types use a product to solve real problems, enabling sales and marketing teams to pull relevant examples for any audience.

## Workflow

### Step 1: Gather Product and Audience Inputs
Ask the user for the following if not already provided:
- Product name and one-sentence description of what it does
- Primary product capabilities or feature categories (3–6 buckets)
- Known customer segments or personas (e.g., SMB owner, enterprise IT director, marketing manager)
- Target industries (e.g., fintech, healthcare, e-commerce, SaaS)
- Common pain points the product addresses

If the user provides a product description but no segments or industries, infer 3–5 plausible segments and 3–5 industries based on context and confirm before proceeding.

### Step 2: Define the Use Case Structure
Each use case entry must include:
1. **Use Case Title** — A specific, action-oriented label (e.g., "Automating Monthly Compliance Reporting for Mid-Market Finance Teams")
2. **Customer Segment** — The persona or buyer type this applies to
3. **Industry** — The vertical where this use case is most relevant
4. **Pain Point** — The specific problem the customer faces before using the product
5. **How the Product Solves It** — 2–3 sentences describing the specific product capability used and the outcome achieved
6. **Proof Point / Outcome Metric** — A realistic or placeholder metric that sales can validate (e.g., "reduces reporting time by ~40%")
7. **Content Applications** — Where this use case fits (e.g., homepage hero, sales deck slide, case study hook, cold email, demo script)

### Step 3: Build the Library
- Generate a minimum of 12 use cases, covering at least 3 segments, 3 industries, and 3 distinct pain points
- Avoid duplicate combinations of segment + industry + pain point
- Group entries by segment first, then by industry within each segment
- Prioritize specificity over generality — "reduces manual data entry for ops managers at logistics companies" beats "saves time"

### Step 4: Add a Cross-Reference Index
After the use case entries, include a simple cross-reference table:
- Rows: Industries
- Columns: Customer Segments
- Cells: Use case titles that apply to that intersection (by number or short label)

### Step 5: Flag Gaps
List any segment/industry/pain point combinations that would be high-value but were not covered due to missing information, and suggest what inputs would unlock them.

## Output Format

Produce the library in this exact structure:

---

**PRODUCT USE CASE LIBRARY — [Product Name]**
*Generated: [date placeholder] | Version 1.0*

---

**USE CASES BY SEGMENT**

**Segment: [Segment Name]**

| # | Use Case Title | Industry | Pain Point | Solution Summary | Outcome Metric | Content Applications |
|---|---------------|----------|------------|-----------------|----------------|----------------------|
| 1 | ... | ... | ... | ... | ... | ... |
| 2 | ... | ... | ... | ... | ... | ... |

[Repeat for each segment]

---

**CROSS-REFERENCE INDEX**

| Industry ↓ / Segment → | [Segment 1] | [Segment 2] | [Segment 3] |
|------------------------|-------------|-------------|-------------|
| [Industry 1] | Use Case #1, #4 | Use Case #7 | — |
| [Industry 2] | ... | ... | ... |

---

**GAPS & RECOMMENDATIONS**
- [Gap 1]: [What's missing and why
