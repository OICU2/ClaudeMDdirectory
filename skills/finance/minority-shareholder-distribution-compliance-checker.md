---
name: minority-shareholder-distribution-compliance-checker
category: finance
description: >
  Verifies that proposed distributions to minority shareholders comply with operating agreement waterfall provisions and applicable tax elections. Use when someone says "we're planning a distribution to minority owners," asks about "whether this payout follows our waterfall," or wants to "check if our distribution is compliant with the operating agreement." Also triggers when someone mentions "minority interest distribution review" or "validating a preferred return calculation before disbursement."
tags: [distributions, minority-shareholders, operating-agreement, waterfall, compliance]
author: community
---

# Minority Shareholder Distribution Compliance Checker

This skill analyzes proposed distributions against operating agreement waterfall provisions and tax elections to surface compliance issues before funds are disbursed.

## Compliance Verification Workflow

### 1. Gather Required Inputs
Request the following if not already provided:
- Proposed distribution amount and timing
- Cap table with ownership percentages and share classes
- Operating agreement sections governing distributions (waterfall, preferred return, catch-up provisions)
- Active tax elections (e.g., 83(b), Section 754, partnership vs. S-corp status)
- Prior distribution history and any unpaid preferred returns
- Any drag-along, tag-along, or anti-dilution provisions affecting payouts

### 2. Map the Waterfall
Parse the operating agreement waterfall in order:
- Identify each tier: return of capital, preferred return, catch-up, residual splits
- Note hurdle rates, IRR thresholds, or preferred yield percentages
- Flag any "pay-if-paid" or discretionary language that limits minority rights
- Confirm whether the waterfall is deal-by-deal or whole-fund

### 3. Calculate Each Tier
For the proposed distribution amount:
- Apply each waterfall tier sequentially
- Compute amounts owed per share class per tier
- Verify minority shareholder allocation at each stage
- Flag any shortfall in preferred returns that must be satisfied before residual splits
- Identify if a catch-up provision accelerates any class's share

### 4. Cross-Check Tax Elections
- If S-corp: confirm pro-rata distribution rule compliance; flag any disproportionate distributions that could trigger election termination
- If partnership/LLC: check whether guaranteed payments or preferred returns have been properly characterized for K-1 reporting
- If Section 754 election is active: note step-up implications on distributed property
- Flag any phantom income risk to minority shareholders relative to the cash distribution

### 5. Identify Violations and Risks
Flag each of the following as HIGH / MEDIUM / LOW severity:
- Distribution that skips or underpays a waterfall tier
- Disproportionate payout inconsistent with share class rights
- Distribution that violates a tax election's consistency requirements
- Missing consent or approval thresholds required by the operating agreement
- Distributions during a restricted period (lockup, clawback window, reinvestment period)

### 6. Validate Approvals Required
Check the operating agreement for:
- Required manager or board approval thresholds
- Minority shareholder consent rights (veto, approval percentage)
- Notice periods before distribution
- Any lender or lien-holder consent requirements

## Output Format

Produce a structured compliance report with these sections:

**Distribution Compliance Report**

| Field | Detail |
|---|---|
| Proposed Distribution | $[amount] on [date] |
| Entity Type / Tax Election | [e.g., LLC taxed as partnership, Section 754 active] |
| Waterfall Version Referenced | [Section X.X of Operating Agreement, dated MM/DD/YYYY] |

**Waterfall Tier Analysis**
List each tier as a numbered row: Tier name → Amount allocated → Minority shareholder share → Status (✅ Satisfied / ⚠️ Partially Satisfied / ❌ Violated)

**Compliance Findings**
Bulleted list of findings, each labeled [HIGH] / [MEDIUM] / [LOW] with a one-sentence explanation and the specific operating agreement section or tax code reference.

**Required Actions Before Disbursement**
Numbered checklist of mandatory steps (approvals, notices, corrections) that must be completed.

**Open Questions**
List any inputs that were missing or ambiguous that must be resolved before a definitive compliance determination can be made.

Keep the report concise — findings should be specific and cite clause numbers or code sections. Do not speculate beyond the provided
