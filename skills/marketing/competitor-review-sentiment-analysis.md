---
name: competitor-review-sentiment-analysis
description: >
  Analyzes competitor product reviews across platforms to surface recurring sentiment themes, pain points, and unmet customer needs that reveal positioning opportunities. Use when someone wants to understand why customers love or hate a competitor's product, asks about gaps in the competitor landscape, wants to find angles for positioning against a rival, needs to identify what customers wish a competing product did better, or is building a go-to-market strategy based on competitor weaknesses.
category: marketing
tags: [competitive-intelligence, sentiment-analysis, positioning, customer-insights, market-research]
author: community
---

# Competitor Review Sentiment Analysis

This skill systematically extracts and organizes sentiment themes from competitor reviews to identify positioning gaps and unmet customer needs Claude can use to sharpen differentiation strategy.

## Analysis Workflow

1. **Identify review sources** — Confirm which competitor(s) and platforms are in scope (G2, Capterra, Trustpilot, Amazon, App Store, Reddit, Google Reviews). Ask the user to provide raw review text or URLs if not already supplied; if only a competitor name is given, proceed with known patterns and note the assumption.

2. **Segment by sentiment polarity** — Separate reviews into positive, negative, and mixed categories. Do not treat star ratings as a proxy — read the actual language.

3. **Extract recurring themes per polarity** — Within each polarity bucket, identify themes that appear in at least 3 or more distinct reviews. Label each theme with a short descriptor (e.g., "onboarding friction," "pricing opacity," "unreliable sync").

4. **Identify unmet needs** — From negative and mixed reviews, extract explicit and implied needs the competitor is failing to meet. Distinguish between:
   - **Feature gaps** — functionality users explicitly request
   - **Experience gaps** — friction, confusion, or emotional frustration
   - **Support gaps** — service, documentation, or response failures
   - **Value gaps** — price-to-value mismatches

5. **Map to positioning opportunities** — For each unmet need cluster, generate a one-line positioning angle describing how a competitor or new entrant could exploit that gap (e.g., "Position on transparent, predictable pricing for cost-conscious SMB buyers frustrated by surprise overages").

6. **Flag what customers love** — Capture the top 3 positive themes so the user understands what the competitor does well and what any challenger must match or exceed.

7. **Note sentiment intensity markers** — Flag language indicating strong emotion (all caps, exclamation points, words like "finally," "never again," "still broken") as these signal high-priority issues.

## Output Format

Produce a structured report with the following sections:

---

**Competitor:** [Name]
**Platforms Analyzed:** [List]
**Review Sample Size:** [Exact count or "estimated" if inferred]

---

### Top Positive Themes
| Theme | Frequency Signal | Representative Quote |
|-------|-----------------|----------------------|
| ...   | High/Medium/Low | "..."                |

### Top Negative Themes
| Theme | Frequency Signal | Representative Quote |
|-------|-----------------|----------------------|
| ...   | High/Medium/Low | "..."                |

### Unmet Customer Needs
- **[Need Label]** — [1-sentence description] *(Gap type: Feature / Experience / Support / Value)*

### Positioning Opportunities
1. **[Opportunity headline]** — [1–2 sentences on how to exploit this gap and who it resonates with]
2. ...

### What Any Challenger Must Match
- [Bullet list of 3 things the competitor does well that cannot be ignored]

### High-Intensity Signals
- [Any themes with extreme emotional language worth escalating to product or messaging teams]

---

Keep the report scannable. Use tables and bullets throughout. Total length should be 400–700 words unless the review corpus is large enough to justify more. Do not editorialize — ground every claim in the review language provided.
