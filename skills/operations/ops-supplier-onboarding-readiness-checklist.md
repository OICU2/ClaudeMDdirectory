---
name: ops-supplier-onboarding-readiness-checklist
description: >
  Generates a structured checklist of compliance, documentation, and system-access steps required before a new supplier can begin delivering goods or services. Use when someone says "we have a new supplier to onboard," asks about getting a vendor set up, wants to know what documents a new supplier needs to submit, needs to verify a supplier is ready to start, or is preparing a supplier for their first delivery.
category: operations
tags: [supplier-management, vendor-onboarding, compliance, procurement, operations]
author: community
---

# Supplier Onboarding Readiness Checklist

This skill generates a comprehensive, structured readiness checklist covering compliance, documentation, system access, and approval gates required before a new supplier can begin delivering goods or services.

## Checklist Generation Workflow

1. **Gather supplier context** — Ask for the following if not already provided:
   - Supplier name and type (goods, services, or both)
   - Spend category (IT, logistics, raw materials, professional services, etc.)
   - Country/region of supplier (affects compliance requirements)
   - Whether the supplier handles sensitive data, financial transactions, or regulated materials
   - Expected start date and primary internal owner/requestor

2. **Apply risk-based scoping** — Adjust checklist depth based on supplier profile:
   - High-risk (data access, financial, regulated): include full due diligence, cybersecurity, and legal review gates
   - Medium-risk (recurring services, significant spend): include standard compliance and insurance checks
   - Low-risk (one-time, low-spend, no data access): generate an abbreviated checklist

3. **Build the checklist across five domains:**

   **A. Legal & Compliance**
   - Executed Master Service Agreement (MSA) or Purchase Agreement on file
   - Non-Disclosure Agreement (NDA) signed and dated
   - Supplier Code of Conduct acknowledged in writing
   - Anti-bribery / anti-corruption policy attestation (if required by jurisdiction)
   - Sanctions screening completed (OFAC, EU, UN lists as applicable)
   - Business license or registration certificate verified

   **B. Financial & Insurance**
   - W-9 (US) or W-8BEN / equivalent tax form received and validated
   - Banking and payment details confirmed via secure channel
   - General liability insurance certificate on file (minimum coverage met)
   - Workers' compensation certificate on file (if applicable)
   - Professional indemnity / E&O insurance confirmed (for service providers)
   - Credit/financial stability check completed (for high-spend suppliers)

   **C. Data & Security (if applicable)**
   - Data Processing Agreement (DPA) or GDPR addendum signed
   - Cybersecurity questionnaire completed and reviewed
   - Security certifications verified (ISO 27001, SOC 2, etc.)
   - Acceptable Use Policy agreed to
   - Data handling and breach notification procedure acknowledged

   **D. System Access & Procurement Setup**
   - Supplier registered in ERP/procurement system (e.g., SAP, Oracle, Coupa)
   - Supplier portal account created and credentials communicated
   - Purchase order (PO) process explained and confirmed
   - Payment terms agreed and recorded in system
   - Primary contacts (commercial, technical, invoicing) captured in system

   **E. Operational Readiness**
   - Scope of work or service specification agreed and signed
   - Key performance indicators (KPIs) and SLAs defined in contract
   - Escalation and issue resolution process documented
   - First delivery or kick-off date confirmed
   - Internal stakeholder and procurement approvals obtained
   - Supplier briefed on health, safety, and site access requirements (if on-site)

4. **Flag blockers** — Mark any incomplete items as BLOCKED and note the responsible party and deadline for resolution before the supplier may begin.

## Output Format

Produce a checklist formatted as a Markdown document with the following structure:

- **Header**: Supplier name, category, onboarding date, internal owner, risk tier
- **Five labeled sections** (A through E as listed above), each containing:
  - Checkbox items (`- [ ]`) with the task description
  - A "Responsible Party" field per item (e.g., Legal, Finance, IT, Procurement, Supplier)
  - A "Due Date" field per item
  - A "Status" tag
