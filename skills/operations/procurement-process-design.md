---
name: procurement-process-design
description: >
  Designs end-to-end procurement workflows covering requisition, approval routing, vendor selection, purchase order generation, and receipt confirmation. Use when someone says "help me set up a procurement process," asks about "how should purchase approvals work," wants to "design a vendor selection workflow," needs to "create a purchase order system," or is trying to "streamline our buying process."
category: operations
tags: [procurement, workflow, vendor-management, purchase-orders, approval-routing]
author: community
---

# Procurement Process Design

This skill designs complete, role-specific procurement workflows from initial requisition through payment authorization, activated whenever someone needs to build or improve a purchasing or vendor management process.

## Procurement Workflow Design Process

**1. Scope the Procurement Environment**
- Identify organization size, industry, and regulatory constraints
- Determine spend thresholds that trigger different approval levels (e.g., <$500, $500–$5K, $5K–$50K, >$50K)
- Identify existing tools (ERP, procurement software, manual processes)
- Clarify whether this covers goods, services, or both

**2. Design the Requisition Stage**
- Define who can submit requisitions and through what channel (form, system, email)
- Specify required fields: item description, quantity, estimated cost, business justification, budget code, preferred vendor (if any), required delivery date
- Establish requisition numbering convention and audit trail requirements
- Set auto-rejection rules for incomplete submissions

**3. Map Approval Routing Logic**
- Build a tiered approval matrix based on spend thresholds and department
- Assign primary and backup approvers for each tier
- Define SLA for each approval tier (e.g., 24 hours for Tier 1, 48 hours for Tier 2)
- Specify escalation rules when approvals are missed or budgets are exceeded
- Include finance/budget owner sign-off triggers for unbudgeted items

**4. Define Vendor Selection Criteria**
- For new vendors: establish qualification checklist (insurance certificates, references, financial stability, compliance certifications)
- For competitive bids: specify when RFQ/RFP is required (e.g., >$10K triggers three competitive quotes)
- Create a vendor scoring matrix with weighted criteria: price (30%), quality (25%), delivery reliability (20%), compliance (15%), support (10%)
- Define preferred/approved vendor list usage rules and exceptions process

**5. Structure Purchase Order Generation**
- Specify PO required fields: PO number, vendor details, line items, agreed pricing, delivery terms, payment terms, approving authority
- Define when blanket POs vs. one-time POs are appropriate
- Set rules for PO amendments (price changes >5% or >$500 require re-approval)
- Establish PO transmission method and vendor acknowledgment requirement

**6. Design Receipt and Three-Way Match**
- Define goods receipt confirmation steps: quantity check, quality inspection, condition documentation
- Specify the three-way match process: PO vs. goods receipt vs. vendor invoice
- Set tolerance thresholds for acceptable discrepancies (e.g., ±2% or $50)
- Establish exception handling for partial deliveries, damaged goods, and invoice disputes

**7. Close the Loop: Payment Authorization**
- Define who authorizes payment release after successful three-way match
- Set payment terms enforcement rules and early-payment discount capture process
- Establish vendor performance logging tied to each completed transaction

## Output Format

Produce a structured procurement workflow document with the following sections:

**Process Overview** — A one-paragraph summary of the workflow scope and key design decisions.

**Approval Matrix Table** — A markdown table with columns: Spend Tier | Amount Range | Required Approvers | SLA | Escalation Path

**Stage-by-Stage Workflow** — Numbered stages (Requisition → Approval → Vendor Selection → PO Generation → Receipt → Payment), each containing:
- Trigger condition
- Responsible roles
- Required inputs and outputs
- Decision rules and exception handling

**Vendor Selection Scorecard** — A markdown table with weighted criteria ready to populate per vendor.

**Key Controls Checklist** — Bullet list of audit and compliance checkpoints embedded in the process.

**Implementation Notes** — 3–5 bullets flagging common failure points, tool recommendations, and change management considerations.

Total length: 600–900 words. Use headers, tables, and
