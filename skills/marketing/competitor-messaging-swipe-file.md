---
name: competitor-messaging-swipe-file
description: >
  Compiles and categorizes competitor taglines, headlines, and value proposition claims into a
  structured reference file for differentiation and positioning work. Use when someone says "I need
  to know how my competitors are positioning themselves," asks about competitor messaging or taglines,
  wants to build a swipe file of competitor copy, needs to find gaps in competitor value claims, or
  is preparing a differentiation strategy and wants to audit the competitive landscape.
category: marketing
tags: [competitor-analysis, positioning, copywriting, differentiation, messaging]
author: community
---

# Competitor Messaging Swipe File

This skill researches, compiles, and categorizes competitor taglines, headlines, and value claims into a structured swipe file Claude uses to surface differentiation opportunities and messaging gaps.

## Workflow

1. **Identify competitors**: Ask the user to confirm the company name, product category, and list of direct and indirect competitors. If no list is provided, infer 5–8 likely competitors based on the category and ask for confirmation before proceeding.

2. **Extract messaging elements**: For each competitor, collect and record the following — pulled from homepage headlines, hero copy, taglines, and above-the-fold value claims:
   - Primary tagline or brand slogan
   - Hero headline (H1)
   - Supporting subheadline or descriptor
   - Primary CTA copy
   - Top 2–3 stated value propositions or benefit claims

3. **Categorize by messaging theme**: Group all extracted claims into recurring themes across competitors. Common themes include: speed/efficiency, cost savings, ease of use, reliability/trust, integrations/ecosystem, enterprise grade, innovation, customer support, compliance/security, and ROI.

4. **Flag overused language**: Identify words, phrases, and claims that appear across 3 or more competitors — these are commoditized and should be avoided or reframed.

5. **Identify white space**: Note themes, benefits, or emotional angles that no competitor or fewer than 2 competitors are claiming — these represent differentiation opportunities.

6. **Score claim specificity**: Rate each competitor's messaging as Vague, Moderate, or Specific based on whether claims include concrete numbers, named outcomes, or measurable results.

## Output Format

Produce a structured markdown swipe file with the following sections:

---

**Competitor Messaging Swipe File — [Category/Market]**
*Generated for: [User's Company Name]*

---

### Competitor Profiles

For each competitor, a block formatted as:

```
## [Competitor Name] — [URL]
- **Tagline**: "..."
- **Hero Headline**: "..."
- **Subheadline**: "..."
- **CTA**: "..."
- **Key Claims**:
  - Claim 1
  - Claim 2
  - Claim 3
- **Claim Specificity**: Vague / Moderate / Specific
```

---

### Messaging Theme Map

A table grouping all competitors by which themes they claim:

| Theme | Competitors Claiming It |
|---|---|
| Speed/Efficiency | Competitor A, B, C |
| Ease of Use | Competitor B, D |
| ... | ... |

---

### Overused Language (Avoid or Reframe)

Bulleted list of words and phrases appearing in 3+ competitors with the count next to each.

---

### White Space Opportunities

Bulleted list of unclaimed or underclaimed angles with a one-sentence explanation of why each represents a differentiation opportunity.

---

### Recommended Positioning Directions

3–5 short positioning hypothesis statements the user's company could test, written as: *"For [audience], [Company] is the only [category] that [unique claim]."*

---

File length: thorough but scannable — aim for completeness over brevity. Use headers, tables, and bullets throughout. No prose paragraphs in the output body.
