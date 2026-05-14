---
name: solo-service-rate-card-builder
description: >
  Builds a structured rate card for a solopreneur's services by analyzing market positioning, deliverables, and target client budget ranges. Use when someone says "I don't know what to charge," asks about pricing their services, wants to create a rate card or pricing sheet, needs help structuring service tiers, or is unsure how to present their fees to clients.
category: solopreneur
tags: [pricing, rate-card, services, positioning, freelance]
author: community
---

# Solo Service Rate Card Builder

This skill guides Claude to extract service details, analyze positioning, and produce a clean, client-ready rate card that reflects the solopreneur's market value and target clientele.

## Rate Card Build Workflow

1. **Gather service inventory** — Ask the user to list every service or deliverable they offer, even informally. Prompt: "What do you actually do for clients, start to finish?"

2. **Identify positioning tier** — Determine if they compete on price, value, or premium expertise. Ask: "Who is your ideal client — budget-conscious, mid-market, or high-end?" and "What's your #1 differentiator?"

3. **Establish time and scope baselines** — For each service, extract: estimated hours, revision rounds, communication included, and any hard deliverable (report, design file, session recording, etc.).

4. **Research market anchors** — Based on the service type and positioning tier, apply these general rate benchmarks:
   - Budget/entry: $25–$75/hr or low fixed project fees
   - Mid-market: $75–$150/hr or mid fixed fees
   - Premium/specialized: $150–$500+/hr or high-value retainers
   Adjust for geography, niche demand, and experience signaled by the user.

5. **Bundle into tiers** — Organize services into 2–4 packages (e.g., Starter, Standard, Premium) or standalone line items if bundling doesn't fit the business model. Ensure each tier has a clear scope ceiling to prevent scope creep.

6. **Add client-facing language** — Rewrite each service name and description in outcome-focused language (what the client gets, not what the freelancer does).

7. **Flag pricing gaps or risks** — Note any service that appears underpriced relative to scope, any tier that may cannibalize another, or any missing "anchor" high-price option.

## Output Format

Produce the following in order:

**1. Rate Card Table**
A markdown table with columns: Service / Package | What's Included | Turnaround | Price | Best For

**2. Positioning Statement (1–2 sentences)**
A plain-language summary of who this rate card is built for and what makes it competitive.

**3. Pricing Notes**
Bullet list (3–5 items) covering: payment terms suggestion, revision policy recommendation, rush fee guidance, and any red-flag scope items to define in a contract.

**4. Optional Add-Ons Table**
A secondary table listing à la carte extras with individual prices (e.g., extra revision round, expedited delivery, extended support).

Total output should be scannable and client-presentable with minimal editing required.
