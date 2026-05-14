---
name: account-penetration-whitespace-mapper
description: >
  Analyzes an existing account's organizational structure and current product usage to surface untapped buying centers and expansion revenue opportunities. Use when someone says "we need to grow this account," asks about "whitespace in an account," wants to "find expansion opportunities," is trying to "map buying centers," or needs to "identify upsell potential" within an existing customer. Produces a structured account penetration map with prioritized opportunities and next steps.
category: sales
tags: [account-expansion, whitespace-analysis, revenue-growth, org-mapping, upsell]
author: community
---

# Account Penetration Whitespace Mapper

This skill analyzes an existing customer account's org structure and product footprint to identify untapped departments, personas, and use cases where additional revenue can be captured, and Claude will use it whenever a rep or account manager needs to systematically find growth within a current account.

## Whitespace Mapping Workflow

### Step 1: Gather Account Inputs
Prompt the user to provide the following before proceeding:
- **Current products/services in use** and which teams use them
- **Known contacts and their departments** (titles, functions, seniority)
- **Account size** (employee count, revenue, number of locations/BUs if known)
- **Industry and business model** (B2B, B2C, SaaS, manufacturing, etc.)
- **Current contract value and renewal date** (if known)
- **Any known pain points or strategic initiatives** the customer has mentioned

If inputs are incomplete, ask targeted follow-up questions rather than proceeding with assumptions.

### Step 2: Map the Org Structure
Based on inputs, construct a buying center map:
- Identify **known departments** where the product is already deployed
- Infer **likely departments** that exist based on company size and industry (e.g., Finance, IT, HR, Operations, Marketing, Legal, Procurement, Regional/Country divisions)
- Flag departments with **zero known contacts** as primary whitespace zones
- Note **seniority gaps** — e.g., product is used at manager level but no VP or C-suite relationship exists

### Step 3: Identify Product Whitespace
Cross-reference the customer's current product usage against the full product/solution portfolio:
- List all products/modules/tiers the customer is **currently using**
- List products/modules/tiers the customer is **not using** that are relevant to their industry or stated needs
- For each unused product, identify **which department or persona** is the natural buyer
- Flag **natural adjacencies** — solutions that extend or complement current usage

### Step 4: Score and Prioritize Opportunities
For each identified whitespace opportunity, assign a priority tier:
- **Tier 1 (Hot):** Department exists, pain is known or inferable, budget cycle is near, you have a warm contact path
- **Tier 2 (Warm):** Department exists, fit is strong, but no current contact or explicit pain confirmed
- **Tier 3 (Cold):** Plausible fit but speculative — limited evidence of need or no entry point

Prioritization factors to weigh:
- Strength of existing relationship as a reference point
- Alignment with customer's stated strategic initiatives
- Revenue potential (estimate seats, licenses, or contract value uplift)
- Ease of internal champion introduction

### Step 5: Generate Penetration Actions
For each Tier 1 and Tier 2 opportunity, prescribe a specific next action:
- Name the **target persona** (title/function)
- Identify the **internal champion** best positioned to make an introduction
- Draft a **one-line value hook** tailored to that persona's likely priorities
- Recommend an **outreach vehicle** (exec sponsor email, QBR agenda item, champion ask, event invitation, etc.)

## Output Format

Produce a structured whitespace map in the following format:

---

**Account:** [Account Name]
**Current ARR / Footprint:** [Products in use] | [Departments covered] | [Known contacts]

---

### 🗺️ Org Whitespace (Uncovered Departments)

| Department | Whitespace Type | Priority | Entry Point |
|---|---|---|---|
| [Dept Name] | No contact / No product | Tier 1/2/3 | [Champion name or approach] |

---

### 📦 Product Whitespace (Unused Solutions)
