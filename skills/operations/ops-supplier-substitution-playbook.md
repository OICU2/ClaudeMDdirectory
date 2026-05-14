---
name: ops-supplier-substitution-playbook
description: >
  Builds a ranked list of qualified backup suppliers and step-by-step activation procedures for every critical input when a primary vendor fails. Use when someone says their supplier fell through, asks about backup vendor options, wants to prepare for supply chain disruptions, needs a contingency sourcing plan, or is dealing with a vendor who can't fulfill an order.
category: operations
tags: [supply-chain, procurement, vendor-management, contingency-planning, risk-mitigation]
author: community
---

# Supplier Substitution Playbook Builder

This skill generates a structured, actionable playbook that identifies ranked backup suppliers and defines clear activation steps for each critical input, so teams can respond immediately when a primary vendor fails.

## Workflow

### Step 1: Inventory Critical Inputs
- Ask the user to list all critical inputs, components, or services sourced from the failing or at-risk vendor
- For each input, capture: item name, current monthly/annual volume, lead time requirement, quality spec or certification needed, and estimated spend
- Flag any inputs with single-source risk or no existing alternatives

### Step 2: Define Substitution Criteria
- Establish minimum qualification thresholds for backup suppliers:
  - Certifications or compliance requirements (ISO, FDA, etc.)
  - Geographic constraints (regional, domestic, international)
  - Minimum order quantities and lead time tolerances
  - Price variance tolerance (e.g., accept up to 20% premium)
  - Quality equivalency standards

### Step 3: Build the Ranked Backup Supplier List
For each critical input, identify and rank up to five backup suppliers using this logic:
1. **Tier 1 — Pre-qualified alternates**: Suppliers already audited, approved, or previously used
2. **Tier 2 — Known market options**: Suppliers with verified capability but not yet onboarded
3. **Tier 3 — Spot or broker market**: Emergency sourcing options with higher cost/risk
- For each ranked supplier, record: company name, contact info, estimated lead time, estimated price delta vs. primary, any qualification gaps, and last known availability status

### Step 4: Write Activation Steps Per Supplier
For each backup supplier on the ranked list, define:
- **Trigger condition**: What threshold or event activates outreach (e.g., primary vendor misses confirmation by Day X)
- **Immediate actions**: Who contacts the supplier, using what template or PO process, within what timeframe
- **Qualification fast-track**: Any expedited audit, sample approval, or contract steps required
- **Transition logistics**: Shipping, labeling, or system updates needed to onboard the alternate
- **Escalation owner**: Named role responsible if Tier 1 fails and Tier 2 must be activated

### Step 5: Define Monitoring and Reset Triggers
- Set criteria for when the substitution is complete and operations are stable
- Define conditions for returning to the primary supplier if the disruption resolves
- Identify leading indicators to monitor (e.g., primary vendor shipment delays, inventory buffer dropping below X weeks)

## Output Format

Produce a structured playbook with the following sections:

**Header**
- Date created, business unit, primary vendor name, disruption scenario

**Critical Input Register** (table)
| Input | Volume | Lead Time Needed | Spec/Cert Required | Single-Source Risk |
|-------|--------|-----------------|-------------------|-------------------|

**Supplier Substitution Matrix** (one block per critical input)
- Input name
- Ranked backup supplier table: Rank | Supplier Name | Contact | Lead Time | Price Delta | Qualification Status | Notes
- Activation steps numbered 1–5 with owner and deadline for each

**Escalation Ladder**
- Tier 1 fails → Tier 2 activation owner and timeline
- Tier 2 fails → Tier 3 or executive escalation path

**Monitoring Checklist**
- 3–5 specific metrics to track weekly during disruption
- Reset criteria to declare disruption resolved

Length: Concise but complete. Use tables and numbered lists throughout. Avoid prose paragraphs in action sections. The playbook must be usable by an ops manager without additional interpretation.
