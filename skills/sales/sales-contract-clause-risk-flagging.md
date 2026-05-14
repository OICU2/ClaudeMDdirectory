---
name: sales-contract-clause-risk-flagging
description: >
  Scans draft sales contracts to identify high-risk clauses, unusual payment terms, or liability gaps requiring legal review before signing. Use when someone says "review this contract before we sign," asks about "risky clauses in this agreement," wants to "check if this deal has any red flags," needs to "flag liability issues in a sales contract," or is trying to "spot unusual terms in this customer agreement."
category: sales
tags: [contracts, risk-analysis, legal-review, sales-ops, compliance]
author: community
---

# Sales Contract Clause Risk Flagging

This skill analyzes draft sales contracts to surface high-risk clauses, problematic payment terms, and liability gaps so sales teams know what needs legal review before signing.

## Risk Flagging Workflow

**1. Parse the Contract Structure**
- Identify all major sections: payment terms, liability, indemnification, termination, IP ownership, confidentiality, dispute resolution, and SLAs.
- Note any sections that appear missing or unusually short.

**2. Flag High-Risk Clauses by Category**

*Payment & Financial Risk*
- Payment terms beyond Net-60 or open-ended payment schedules
- Auto-renewal clauses with short opt-out windows (fewer than 30 days)
- Price escalation clauses with no cap or tied to uncapped indexes
- Penalty clauses, clawbacks, or retroactive pricing adjustments

*Liability & Indemnification Risk*
- Uncapped liability or indemnification obligations on your side
- Broad indemnification language covering third-party claims without carve-outs
- Consequential, incidental, or punitive damages not mutually excluded
- Customer's liability capped significantly lower than vendor's

*Operational & Delivery Risk*
- SLA penalties with no cure period before fines apply
- Acceptance criteria that are subjective or undefined
- Scope language broad enough to allow unlimited change requests
- Unilateral right for the customer to modify specs after signing

*Termination & Exit Risk*
- Termination for convenience clauses favoring only the customer
- Immediate termination triggers for minor breaches without notice
- IP ownership transferring to customer upon termination or before full payment
- Non-compete or exclusivity terms that restrict your future business

*Legal & Compliance Risk*
- Governing law in an unfavorable or unusual jurisdiction
- Mandatory arbitration with venue far from your location
- GDPR/data processing obligations without corresponding customer commitments
- Missing confidentiality terms or confidentiality that is entirely one-sided

**3. Assess Severity for Each Flag**
- **Critical**: Must be resolved before signing; poses material financial or legal exposure.
- **High**: Strongly recommend legal review and negotiation.
- **Medium**: Negotiate if possible; document if accepted.
- **Low**: Monitor or flag for future contract templates.

**4. Identify Missing Clauses**
- Check for absence of: limitation of liability, mutual NDA, payment dispute process, force majeure, and governing law.
- Flag each missing section as a gap that creates implicit risk.

**5. Summarize Negotiation Priorities**
- Rank the top 3–5 items the sales team should push back on before signing.
- Suggest standard alternative language for the most critical issues where applicable.

## Output Format

Produce a structured risk report with the following sections:

**Contract Risk Summary**
- One-paragraph overall risk assessment (2–4 sentences) with a risk tier: Low / Moderate / High / Critical.

**Flagged Clauses Table**
| # | Clause/Section | Risk Category | Severity | Issue Description | Recommended Action |
|---|---------------|---------------|----------|-------------------|-------------------|
List every flagged item with the above columns. Include the specific contract language quoted in the Issue Description where possible.

**Missing Sections**
Bulleted list of standard clauses not found in the contract and the risk each absence creates.

**Top Negotiation Priorities**
Numbered list of the 3–5 highest-priority items to address, with a one-line suggested position or alternative language for each.

**Legal Review Recommendation**
One sentence stating whether legal review is required before signing, and which sections to send to counsel first.

Keep the full report concise enough to fit a single document page; flag detail-heavy issues with a note that legal counsel should review the full clause text.
