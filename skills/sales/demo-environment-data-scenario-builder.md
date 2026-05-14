---
name: demo-environment-data-scenario-builder
description: >
  Generates realistic, industry-specific demo data scenarios so product demonstrations feel immediately relevant to a prospect's world. Use when someone says "our demo feels too generic," asks about tailoring a product walkthrough to a specific prospect, or wants to build sample data that mirrors a customer's actual workflows. Also activates when a sales engineer needs to populate a demo environment before a meeting or when someone wants to replace placeholder data with realistic examples.
category: sales
tags: [demo, sales-engineering, prospect-research, demo-data, personalization]
author: community
---

# Demo Environment Data Scenario Builder

This skill generates tailored demo data scenarios — realistic records, workflows, and narratives — matched to a prospect's industry and pain points so every demo feels like it was built specifically for them.

## Scenario Building Workflow

1. **Gather prospect context** before generating anything. Ask for or extract: company name, industry vertical, company size, primary pain points or use case, and the specific product feature(s) being demonstrated.

2. **Identify industry-specific entities** that should appear in the data:
   - Use real-sounding but fictional company names, person names, and product/service names native to that industry (e.g., for healthcare: patient records, care pathways, ICD codes; for logistics: shipment IDs, carrier names, SKUs; for fintech: transaction IDs, account types, compliance flags).
   - Mirror the vocabulary, job titles, and workflows the prospect uses daily.

3. **Map pain points to data states** — create scenarios that visually demonstrate the problem and the solution:
   - Build a "before" data state showing the pain point in action (e.g., missed SLAs, manual bottlenecks, data inconsistencies).
   - Build an "after" or "in-progress" data state showing the product resolving it.
   - Include at least one edge case or exception that makes the demo feel lived-in and credible.

4. **Generate 3–5 named scenario sets**, each with:
   - A short scenario title (e.g., "Q3 Audit Backlog — Regional Bank")
   - A one-line narrative hook ("Show how the compliance team cleared 47 overdue reviews in one afternoon")
   - All specific data records needed: names, dates, statuses, amounts, IDs, categories — no Lorem Ipsum, no "Sample User 1"

5. **Flag demo talking points** tied to each scenario — one or two sentences a sales rep can say out loud while clicking through that data to connect it to the prospect's stated pain.

6. **Format for handoff**: produce output that a sales engineer can copy directly into a demo environment, spreadsheet, or CRM sandbox with minimal reformatting.

## Output Format

Produce a structured document with the following sections for each scenario:

**Scenario [N]: [Title]**
- **Narrative Hook:** One sentence a rep can say to open this demo moment.
- **Industry Context:** Two sentences explaining why this data pattern is realistic for this vertical.
- **Data Records:** A table or structured list with all fields populated — no placeholders. Include 8–15 records per scenario with realistic variance (different statuses, dates, assignees, amounts, etc.).
- **Demo Talking Point:** 1–2 sentences the rep delivers while showing this data.
- **Pain Point Addressed:** One-line callout of which prospect pain point this scenario targets.

Deliver all 3–5 scenarios in a single response. Total length should be comprehensive enough to be copy-paste ready — typically 400–800 words of actual data content plus narrative framing. Use tables for record sets whenever the data has more than three fields.
