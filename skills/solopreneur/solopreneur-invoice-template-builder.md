---
name: solopreneur-invoice-template-builder
description: >
  Generates a professional, branded invoice template tailored to a solopreneur's specific service type, payment terms, and legal requirements. Use when someone says "I need an invoice template," asks about billing clients, wants to create a professional invoice for freelance work, needs to set up payment terms, or wants a customizable invoice for their solo business.
category: solopreneur
tags: [invoicing, billing, freelance, templates, payments]
author: community
---

# Solopreneur Invoice Template Builder

This skill creates a complete, ready-to-use invoice template customized to a solopreneur's service niche, preferred payment terms, tax requirements, and branding preferences.

## Invoice Template Workflow

1. **Gather service context** — Ask the user for: service type (e.g., consulting, design, writing, coaching), business name, location/country (for tax/legal requirements), and typical payment terms (net 15, net 30, 50% upfront, etc.). If they don't know, offer common defaults.

2. **Identify legal and tax requirements** — Based on location, include relevant fields:
   - US-based: optional EIN/SSN field, no VAT unless applicable by state
   - EU/UK-based: VAT number field, VAT line item, reverse charge note if B2B
   - Canada: GST/HST number and line item
   - All others: include a generic tax ID field and adjustable tax rate

3. **Define invoice structure** — Build the template with these sections in order:
   - **Header**: Business name, logo placeholder, tagline (optional)
   - **Sender block**: Name, address, email, phone, website, tax ID (if applicable)
   - **Client block**: Bill To — client name, company, address, contact email
   - **Invoice metadata**: Invoice number (auto-increment format: INV-YYYY-001), issue date, due date, project/PO reference
   - **Line items table**: Description | Qty | Unit | Rate | Amount
   - **Subtotal, tax, discount, and total block**
   - **Payment terms**: Due date, late fee policy (e.g., 1.5%/month after 30 days)
   - **Payment methods**: List accepted methods (bank transfer, PayPal, Stripe, check, etc.)
   - **Notes section**: Thank-you message, project terms reference, or confidentiality note
   - **Footer**: Business registration number (if applicable), legal entity name

4. **Customize for service type** — Tailor language and line item examples:
   - *Consulting/Coaching*: Hourly rate rows, retainer rows, session descriptions
   - *Design/Creative*: Project phase rows, revision rounds, licensing fees
   - *Writing/Content*: Per-word or per-piece rates, rush fee line
   - *Development*: Milestone-based rows, hosting/domain pass-through costs
   - *Other services*: Generic quantity × rate format with editable descriptions

5. **Add payment protection clauses** — Include one short clause block covering:
   - Late payment fee policy
   - Ownership/delivery contingent on full payment
   - Dispute resolution contact

6. **Provide two format outputs** — Deliver the template as:
   - A plain-text/Markdown version (copy-paste ready)
   - A structured table version formatted for easy transfer into Word, Google Docs, or Excel

## Output Format

Produce the following in order:

**Section 1 — Invoice Template (Markdown/Plain Text)**
A fully filled-out sample invoice using placeholder values (e.g., [Your Name], [Client Company], $0.00) formatted exactly as a real invoice would appear. Include every field listed in step 3. Use monospace table formatting for line items.

**Section 2 — Customization Notes**
A bullet list (5–8 items) of fields the user should personalize, with a one-line instruction for each (e.g., "Invoice Number — update sequentially each time; start at INV-2024-001").

**Section 3 — Payment Terms Language**
Two pre-written payment terms paragraphs the user can paste directly into their template or contract: one friendly/standard tone, one firm/legal tone.

**Section 4 — Tool Recommendations**
A short list (3–5 tools) of free or low
