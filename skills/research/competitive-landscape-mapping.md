---
name: competitive-landscape-mapping
description: >
  Structures a visual and narrative map of competitors across defined dimensions such as pricing, features, positioning, and target audience from collected data. Use when someone says "map out the competitive landscape," asks about how competitors compare, or wants to understand where a product fits in the market. Also triggers when someone needs to analyze rivals, benchmark against competitors, or build a competitor matrix for a pitch or strategy document.
category: research
tags: [competitive-analysis, market-research, strategy, positioning, benchmarking]
author: community
---

# Competitive Landscape Mapping

This skill produces a structured competitive landscape map — including a comparison matrix, positioning narrative, and strategic gaps — whenever Claude is asked to analyze, compare, or visualize how competitors relate to each other or to a given product.

## Workflow

1. **Identify the scope**: Clarify the product or company being analyzed and the market category. If not provided, infer from context or ask one clarifying question.

2. **Extract or request competitor data**: Pull named competitors from the conversation, uploaded data, or prior research. Aim for 4–10 competitors. If data is sparse, note assumptions explicitly.

3. **Define comparison dimensions**: Default dimensions are:
   - **Pricing**: free / freemium / low / mid / enterprise / custom
   - **Core features**: list 4–6 key capabilities relevant to the category
   - **Target audience**: SMB / mid-market / enterprise / consumer / developer / etc.
   - **Positioning / value prop**: one-line summary of how each competitor presents itself
   - **Go-to-market**: self-serve / sales-led / product-led / channel-led

   Add or replace dimensions if the user specifies others.

4. **Build the comparison matrix**: Create a Markdown table with competitors as rows and dimensions as columns. Fill each cell with concise, factual data. Use `—` for unknown values; never fabricate data.

5. **Write the positioning narrative**: Summarize in 3–5 paragraphs:
   - Where competitors cluster (e.g., "most players target enterprise with high-touch sales")
   - Notable outliers and why they stand out
   - Whitespace or underserved segments
   - Where the subject company/product sits relative to the field

6. **Identify strategic implications**: List 3–5 bullet points covering:
   - Direct threats (competitors with heavy overlap)
   - Differentiation opportunities
   - Positioning moves worth considering

7. **Flag data gaps**: Note any competitors where key data was unavailable or assumed, and suggest sources to verify (e.g., G2, Crunchbase, company pricing pages).

## Output Format

Produce the following sections in order:

---

### Competitive Landscape: [Market/Product Name]

**Scope**: [One sentence defining the market and subject company]

#### Competitor Matrix

| Competitor | Pricing | Target Audience | Core Features | Positioning | GTM Motion |
|------------|---------|-----------------|---------------|-------------|------------|
| ...        | ...     | ...             | ...           | ...         | ...        |

#### Positioning Narrative

[3–5 paragraphs: clustering patterns, outliers, whitespace, subject company placement]

#### Strategic Implications

- [Threat or opportunity 1]
- [Threat or opportunity 2]
- [Threat or opportunity 3]
- [Threat or opportunity 4 — optional]
- [Threat or opportunity 5 — optional]

#### Data Gaps & Sources to Verify

- [Competitor or field]: [what's missing and where to find it]

---

Length: 400–800 words total excluding the matrix. Matrix rows: one per competitor, no merging cells. Use plain Markdown only — no HTML, no images, no diagrams unless the user explicitly requests ASCII positioning charts.
