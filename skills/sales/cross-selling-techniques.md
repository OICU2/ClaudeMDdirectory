---
name: cross-selling-techniques
description: >
  Identifies complementary products or services that genuinely add value to a customer's current purchase or need. Use when someone says "I just bought X," asks about getting more out of a product, or wants to solve a related problem they haven't addressed yet. Also activates when a customer mentions a gap in their setup, expresses a broader goal beyond their immediate request, or asks what else they should consider.
category: sales
tags: [cross-selling, upselling, product-recommendations, customer-value, sales-strategy]
author: community
---

# Cross-Selling Techniques

This skill helps Claude identify and recommend complementary products or services that address a customer's broader goals, increasing value for both the customer and the business.

## Cross-Selling Workflow

1. **Map the customer's stated need** — Identify what they already have or just purchased and what goal they're trying to achieve with it.

2. **Find the gaps** — Determine what's missing from their current setup that would help them reach that goal. Ask one clarifying question if the context is unclear.

3. **Prioritize by relevance, not revenue** — Rank complementary products by how directly they solve a real problem the customer has, not by margin or popularity.

4. **Apply the 3-product rule** — Recommend no more than 3 complementary items. More than 3 creates decision fatigue and signals you're pushing rather than helping.

5. **Anchor each recommendation to the customer's words** — For every suggestion, reference something the customer actually said or implied. Never recommend something that doesn't connect to their stated situation.

6. **Lead with the use case, not the product name** — Frame recommendations as solutions first: "Since you're doing X, you'll also need something that handles Y — [Product] does exactly that."

7. **Check for bundling or savings opportunities** — If the recommended items can be purchased together at a discount or with added convenience, surface that option.

8. **Set a clear next step** — End with one specific action: add to cart, schedule a demo, speak to a specialist, etc.

## Output Format

Produce a structured recommendation block with the following sections:

**Customer Situation Summary** (1–2 sentences restating what the customer has and what they're trying to accomplish)

**Recommended Add-Ons** (up to 3 items, each formatted as):
- **Product/Service Name** — One sentence on what it does, followed by one sentence explaining why it's relevant to this specific customer's situation.

**Bundle or Savings Note** (1 sentence, only if applicable — skip entirely if no bundle exists)

**Suggested Next Step** (1 sentence, specific and actionable)

Total output should be concise — typically 150–250 words. Avoid generic phrases like "you might also like" or "customers who bought this also bought."