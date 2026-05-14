---
name: sales-to-cs-handoff-risk-flag
description: >
  Scans closed deal notes, contract terms, and CRM data to identify commitments, expectations, and red flags that the customer success team must address during onboarding. Use when someone says "we just closed this deal and need to hand it off," asks about what was promised to a new customer, or wants to prep the CS team before their first call. Also triggers when someone shares deal notes and needs a risk summary, or says "what should CS know before onboarding this account."
category: sales
tags: [handoff, customer-success, onboarding, risk-assessment, deal-review]
author: community
---

# Sales-to-CS Handoff Risk Flagger

Analyzes closed deal notes and contract terms to surface commitments, misaligned expectations, and onboarding risks so the customer success team walks in fully prepared.

## Handoff Analysis Workflow

1. **Ingest source material** — Accept deal notes, call summaries, contract excerpts, email threads, CRM opportunity fields, or any freeform text the user provides. Ask for missing context if critical fields (contract value, deal timeline, key stakeholders) are absent.

2. **Extract explicit commitments** — Identify anything the sales rep promised:
   - Feature availability or roadmap items mentioned as "coming soon"
   - Pricing exceptions, discounts, or custom terms
   - Implementation timelines, go-live dates, or milestone deadlines
   - Named resources (dedicated CSM, specific onboarding specialist, exec sponsor)
   - Integrations, custom configurations, or professional services scope

3. **Identify expectation gaps** — Flag where customer expectations may exceed product reality:
   - Use cases described during sales that are edge cases or unsupported
   - ROI or outcome targets the customer stated (e.g., "they expect 40% cost reduction")
   - Comparisons made to a competitor's feature the product doesn't fully match
   - Assumptions about data migration, legacy system compatibility, or API access

4. **Surface relationship and stakeholder risks** — Note:
   - Internal champion strength (is the buyer also the user?)
   - Skeptical stakeholders or internal opposition mentioned in notes
   - Budget owner vs. decision maker misalignment
   - Whether legal, IT, or security reviews are still pending post-close

5. **Flag contract-specific obligations** — Pull out:
   - SLA commitments and penalty clauses
   - Non-standard termination or refund terms
   - Data handling, compliance, or privacy requirements (HIPAA, SOC 2, GDPR)
   - Renewal triggers or auto-renewal clauses with short notice windows

6. **Assign risk severity** — Rate each flagged item:
   - 🔴 **Critical** — Must be addressed before or on Day 1 of onboarding
   - 🟡 **Watch** — Needs a plan within the first 30 days
   - 🟢 **Noted** — Low risk but CS should be aware

## Output Format

Produce a structured handoff risk report with the following sections:

---

**Account:** [Account name]
**Deal Value:** [ACV/TCV if available]
**Close Date:** [Date]
**Prepared For:** Customer Success / Onboarding Team

---

### ✅ Explicit Commitments Made
Bulleted list of specific promises — include who made the commitment and where it was documented if known.

### ⚠️ Expectation Gaps to Resolve
Bulleted list of misalignments between customer expectations and product reality, each with a suggested CS action to close the gap.

### 👥 Stakeholder & Relationship Risks
Short paragraph or bullets covering champion strength, internal detractors, and key contacts CS must build relationships with immediately.

### 📋 Contract Obligations Requiring Action
Bulleted list of non-standard terms, SLAs, or compliance requirements, each tagged with a deadline if one exists.

### 🚦 Risk Summary Table

| Risk Item | Severity | Owner | Due By |
|-----------|----------|-------|--------|
| [Item] | 🔴/🟡/🟢 | CS/Product/Legal | [Date or milestone] |

### 💬 Recommended First-Call Talking Points
3–5 bullet points CS should address proactively in the kickoff call to set accurate expectations and
