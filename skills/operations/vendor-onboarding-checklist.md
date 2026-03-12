---
name: vendor-onboarding-checklist
description: >
  Generates a standardized vendor onboarding workflow covering due diligence, contract setup,
  system access, and compliance verification. Use when someone says "we're bringing on a new
  vendor," asks about onboarding a supplier, wants to set up a new third-party relationship,
  needs a vendor checklist, or is starting a new contractor or service provider engagement.
category: operations
tags: [vendor-management, procurement, compliance, onboarding, third-party]
author: community
---

# Vendor Onboarding Checklist

Generates a complete, phase-by-phase vendor onboarding checklist that guides teams through due diligence, legal setup, system provisioning, and compliance sign-off for any new vendor or supplier relationship.

## Vendor Onboarding Workflow

### Phase 1: Pre-Onboarding Due Diligence
1. Collect vendor business registration documents (certificate of incorporation, business license)
2. Verify tax identification number (EIN or equivalent) and request W-9 or W-8BEN
3. Run vendor through sanctions screening (OFAC, UN, EU watchlists)
4. Request and review latest financial statements or credit report
5. Confirm insurance coverage: general liability, professional liability, cyber liability minimums
6. Check references from at least two existing clients in a similar industry
7. Review any public records for litigation history or regulatory violations
8. Assess vendor's data security posture (SOC 2 report, ISO 27001 cert, or security questionnaire)

### Phase 2: Contract and Legal Setup
1. Define scope of work, deliverables, and SLAs in writing
2. Negotiate and execute Master Service Agreement (MSA) or vendor agreement
3. Attach Data Processing Agreement (DPA) if vendor handles personal data
4. Include NDA / confidentiality clauses covering proprietary information
5. Define payment terms, invoicing cadence, and late payment penalties
6. Establish termination clauses, notice periods, and data return/destruction obligations
7. Obtain legal sign-off and store fully executed contracts in contract management system
8. Record contract expiry date and assign an owner for renewal review

### Phase 3: Internal Approval and Vendor Record Creation
1. Submit vendor for procurement or finance approval per spending threshold policy
2. Create vendor record in ERP or accounts payable system (name, address, banking details)
3. Validate bank account details via callback verification to prevent fraud
4. Assign vendor ID and link to relevant cost center or department
5. Notify relevant stakeholders: finance, IT, legal, and the requesting team

### Phase 4: System Access and Integration
1. Identify all systems the vendor requires access to (e.g., project management, data warehouses, APIs)
2. Apply principle of least privilege — grant minimum necessary permissions
3. Create vendor accounts using company-managed credentials (avoid personal email logins)
4. Enable MFA on all vendor accounts accessing internal systems
5. Document all access grants in the access register with justification and expiry date
6. Provide vendor with VPN credentials or network access instructions if required
7. Share relevant internal documentation, style guides, or operational runbooks

### Phase 5: Compliance and Policy Verification
1. Confirm vendor has acknowledged and signed your Code of Conduct / Supplier Code
2. Verify completion of any required training (e.g., data handling, information security)
3. Ensure vendor is aware of applicable regulatory requirements (GDPR, HIPAA, SOC, etc.)
4. Confirm incident and breach notification obligations are understood and contact points established
5. Schedule first compliance review or business review meeting within 30–90 days of go-live
6. Set calendar reminders for annual vendor reassessment and contract renewal

### Phase 6: Go-Live and Handoff
1. Send formal welcome communication with key contacts, escalation paths, and SLA summary
2. Confirm first invoice or payment milestone is documented
3. Brief internal team on vendor capabilities, limitations, and communication norms
4. Log vendor onboarding completion date in vendor register
5. Schedule a 30-day check-in to surface any early friction or issues

## Output Format

Produce the checklist as a structured Markdown document with:
- **Six labeled phases** as H3 headers, each with numbered action items
- Each action item written as an imperative sentence (verb-first) with enough specificity to act on
