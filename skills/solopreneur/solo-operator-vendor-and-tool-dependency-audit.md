---
name: solo-operator-vendor-and-tool-dependency-audit
description: >
  Audits every third-party tool, platform, and vendor a solopreneur depends on to identify single points of failure and critical risks to service delivery. Use when someone says "I rely on too many tools," asks about their tech stack vulnerabilities, wants to understand what would break their business if it went down, is worried about vendor lock-in, or needs to map their operational dependencies. Produces a prioritized risk register with mitigation recommendations.
category: solopreneur
tags: [vendor-risk, tools, business-continuity, solopreneur, dependency-mapping]
author: community
---

# Solo Operator Vendor & Tool Dependency Audit

This skill maps every third-party dependency in a solopreneur's stack, scores each by failure risk and business impact, and surfaces actionable steps to eliminate or buffer single points of failure.

## Dependency Audit Workflow

### Step 1: Extract the Full Dependency Inventory

Ask the user to list or confirm tools across these categories (prompt for any gaps):

- **Revenue & payments**: invoicing, payment processors, subscription billing
- **Client delivery**: project management, file sharing, communication platforms
- **Marketing & acquisition**: website host, email marketing, social platforms, SEO tools
- **Operations**: scheduling, CRM, automation/Zapier-style tools, cloud storage
- **Finance & admin**: accounting software, banking, contracts/e-signature
- **Infrastructure**: domain registrar, DNS, email provider, hosting, CDN
- **Identity & access**: password manager, SSO, 2FA providers

For each tool, collect:
- Tool name and vendor
- Primary function
- How often it's used (daily / weekly / occasionally)
- Whether the business can operate without it (yes / degraded / no)
- Whether data is backed up externally (yes / partial / no)
- Estimated time to replace if it disappeared tomorrow

### Step 2: Score Each Dependency

Rate every tool on two axes (1–5 scale):

**Criticality Score** (how essential to revenue/delivery):
1 = Nice to have → 5 = Revenue stops immediately without it

**Failure Risk Score** (likelihood + severity of disruption):
1 = Redundant, easily replaced → 5 = No alternative exists, data locked in, no backup

Calculate **Risk Priority = Criticality × Failure Risk** (max 25).

Flag any tool scoring **15 or above** as a **Red Zone dependency**.

### Step 3: Identify Single Points of Failure (SPOFs)

Flag a dependency as a SPOF if any of the following are true:
- It is the sole channel for client communication or delivery
- It holds data with no external backup
- Losing it would delay client work by more than 48 hours
- There is no free-tier or manual fallback
- The vendor has shown recent instability (pricing changes, shutdowns, outages)
- The solopreneur has no login recovery method (no backup codes, shared access)

### Step 4: Generate Mitigation Options

For each Red Zone or SPOF dependency, produce:
- **Backup alternative**: one named substitute tool or manual workaround
- **Data portability check**: confirm whether data can be exported and how
- **Decoupling action**: specific step to reduce lock-in (e.g., move email list to portable CSV weekly, point domain to own registrar)
- **Time-to-implement**: realistic effort estimate (under 1 hour / half day / multi-day project)

### Step 5: Prioritize the Action List

Sort mitigations by **Risk Priority score descending**, then by **time-to-implement ascending** (quick wins first within each risk tier).

## Output Format

Produce the following sections in order:

---

**DEPENDENCY INVENTORY TABLE**

| Tool | Category | Criticality (1–5) | Failure Risk (1–5) | Risk Priority | SPOF? | Backup Exists? |
|------|----------|-------------------|-------------------|---------------|-------|----------------|
| [Tool] | [Category] | [#] | [#] | [#] | Yes/No | Yes/Partial/No |

---

**RED ZONE DEPENDENCIES** *(Risk Priority ≥ 15)*

For each: one paragraph naming the risk, what failure looks like concretely, and why it's flagged.

---

**SINGLE
