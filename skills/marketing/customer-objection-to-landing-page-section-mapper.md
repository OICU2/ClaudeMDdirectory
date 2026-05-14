---
name: customer-objection-to-landing-page-section-mapper
description: >
  Converts a list of customer objections into structured landing page sections that proactively address each concern before it becomes a blocker. Use when someone says "we need to handle common objections on our landing page," asks about "turning objections into copy," or wants to "map customer concerns to page sections." Also triggers when someone shares a list of sales objections and wants to know where or how to address them on a website.
category: marketing
tags: [landing-page, copywriting, conversion-optimization, objection-handling, sales]
author: community
---

# Customer Objection to Landing Page Section Mapper

This skill takes a list of customer objections and maps each one to a specific landing page section type, placement recommendation, and copy strategy so Claude can help build or restructure a page that preemptively removes purchase barriers.

## Mapping Workflow

1. **Collect objections**: Ask the user to provide their list of customer objections. If they haven't provided one, prompt: "Please share the objections your sales team or customers commonly raise — even rough notes work."

2. **Categorize each objection** by type:
   - **Price/value**: "It's too expensive," "I'm not sure it's worth it"
   - **Trust/credibility**: "I've never heard of you," "How do I know this works?"
   - **Relevance/fit**: "This isn't for someone like me," "My situation is different"
   - **Urgency/timing**: "I'll think about it," "Not the right time"
   - **Complexity/risk**: "This seems hard to implement," "What if it doesn't work?"
   - **Comparison**: "I'm already using [competitor]," "Why not just use X?"

3. **Map each objection to a landing page section**:
   - Price objections → Pricing section (reframe ROI), FAQ, comparison table
   - Trust objections → Social proof section (testimonials, logos, case studies), About section, certifications
   - Relevance objections → Hero section subheadline, "Who this is for" section, use-case examples
   - Urgency objections → CTA section (add specificity), limited offer callout, results timeline
   - Complexity/risk objections → How it works section, guarantee/refund policy, onboarding explainer
   - Comparison objections → Comparison table, differentiator section, "Why us" callout

4. **Write a copy direction note** for each mapped section:
   - State the objection being addressed
   - Suggest the emotional reframe (from fear/doubt → confidence/clarity)
   - Provide a 1–2 sentence example headline or copy snippet that directly counters the objection

5. **Assign placement priority** (Above the fold / Mid-page / Near CTA / FAQ) based on how early in the decision process the objection typically arises. Price and trust objections usually need mid-page placement; fit and risk objections can sit lower.

6. **Flag gaps**: If an objection doesn't have a natural section home, flag it and suggest either adding a new section or incorporating it into the FAQ.

## Output Format

Produce a structured table followed by a section-by-section copy brief.

**Part 1 — Objection Mapping Table**

| Objection | Category | Recommended Section | Placement | Priority |
|-----------|----------|-------------------|-----------|----------|
| [verbatim or paraphrased objection] | [category] | [section name] | [Above fold / Mid-page / Near CTA / FAQ] | [High / Medium / Low] |

**Part 2 — Section Copy Briefs**

For each unique section identified in the table, write:

```
### [Section Name]
**Objections addressed:** [list]
**Goal:** [what this section must make the visitor feel or believe]
**Reframe:** [from X → to Y]
**Suggested headline:** "[example headline]"
**Supporting copy direction:** [1–3 sentences describing what evidence, format, or content to include]
```

Keep the table exhaustive (every objection mapped) and copy briefs concise (no longer than 6 lines each). If the user provided more than 10 objections, group closely related ones under a single section brief.
