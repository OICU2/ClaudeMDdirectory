---
name: marketing-ops-tool-audit
category: marketing
description: >
  Audits the current marketing technology stack to identify redundant tools, integration gaps, and consolidation opportunities with a prioritized replacement recommendation. Use when someone says "we have too many marketing tools," asks about reducing their martech spend, wants to clean up their marketing stack, is evaluating marketing software overlap, or needs to justify tool consolidation to leadership.
tags: [martech, marketing-operations, tool-audit, consolidation, marketing-stack]
author: community
---

# Marketing Ops Tool Audit

This skill systematically maps, evaluates, and rationalizes a marketing technology stack, producing a prioritized consolidation plan with cost and integration impact analysis.

## Audit Workflow

### 1. Inventory Collection
Ask the user to provide or confirm:
- All active marketing tools (name, primary function, monthly/annual cost, number of users)
- Tools that are paid but underused or unused
- Any tools currently under evaluation or on notice for cancellation
- The core CRM and marketing automation platform (anchors the stack)

If the user cannot list all tools, prompt them to check: credit card statements, IT/finance software registries, or ask department leads (demand gen, content, social, analytics, paid media, SEO, events).

### 2. Functional Categorization
Map every tool to exactly one primary category:
- **CRM & Contact Management**
- **Marketing Automation & Email**
- **Analytics & Reporting**
- **SEO & Content**
- **Paid Media & Ad Tech**
- **Social Media Management**
- **Conversion & Landing Pages**
- **Account-Based Marketing (ABM)**
- **Data Enrichment & Intent**
- **Project Management & Collaboration**
- **Video & Webinar**
- **Customer Advocacy & Reviews**

Flag any category with 2+ tools as a **redundancy zone**.

### 3. Redundancy Analysis
For each redundancy zone:
- Identify the primary tool (highest usage, deepest integration, or strategic fit)
- Identify the redundant tool(s)
- Document overlapping features (be specific: e.g., "both HubSpot and Mailchimp send nurture emails")
- Estimate annual cost of the redundant tool
- Note switching friction: data migration complexity, contract lock-in, team dependency

### 4. Integration Gap Analysis
Review how tools connect:
- Which tools lack native or third-party integrations with the CRM?
- Where does data require manual export/import?
- Which tools create data silos (no bidirectional sync)?
- Are there broken or unmaintained Zapier/Make automations patching gaps?

Label each gap: **Critical** (blocks revenue reporting), **Moderate** (causes manual work), or **Minor** (cosmetic inefficiency).

### 5. Consolidation Scoring
Score each redundant or gap-creating tool on a 1–5 scale across:
- **Replaceability**: Can the primary platform absorb this function? (1 = hard, 5 = easy)
- **Cost Impact**: How significant is the savings? (1 = minimal, 5 = high)
- **Risk**: How disruptive is removal? (1 = very disruptive, 5 = low risk)

Calculate a **Consolidation Priority Score** = Replaceability + Cost Impact + Risk. Higher scores = act first.

### 6. Recommendation Prioritization
Group recommendations into three tiers:
- **Quick Wins (Score 11–15)**: Cut or consolidate within 30 days
- **Planned Migrations (Score 6–10)**: Schedule over next quarter
- **Monitor/Defer (Score 3–5)**: Revisit at next annual renewal

For each recommendation, state: what to cut, what replaces it, estimated savings, and one-line migration note.

## Output Format

Produce a structured audit report with these sections:

---

**MARKETING TECH STACK AUDIT**

**Stack Summary**
- Total tools audited: [N]
- Total estimated annual spend: [$X]
- Redundancy zones identified: [N categories]
- Integration gaps: [N critical / N moderate / N minor]

**Full Tool Inventory**
Table with columns: Tool | Category | Annual Cost | Users | Integration Status | Redundancy Flag

**Redundancy Zone Breakdown**
For each zone: list tools, overl
