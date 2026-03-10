---
name: payment-processing-setup
description: >
  Configures complete payment infrastructure including payment gateways, invoicing systems, and
  collection workflows. Use when someone says "set up Stripe," asks about accepting payments,
  wants to configure invoicing, needs to automate payment collection, or is building a billing system.
category: finance
tags: [stripe, payments, invoicing, billing, fintech]
author: community
---

# Payment Processing Setup

This skill guides Claude through configuring end-to-end payment systems — from gateway integration to automated collection workflows — whenever a user needs to accept, manage, or automate payments.

## Payment System Configuration Workflow

### 1. Identify Payment Requirements
- Ask: one-time payments, subscriptions, or both?
- Determine currencies, regions, and tax requirements
- Identify payment methods needed (card, ACH, SEPA, wallets)
- Clarify volume expectations to recommend correct Stripe tier or alternative

### 2. Stripe Integration Setup
- Generate API key configuration with environment separation (test/live)
- Scaffold Stripe SDK initialization with error handling
- Implement `PaymentIntent` for one-time charges or `Subscription` + `Customer` objects for recurring
- Add webhook endpoint handler for: `payment_intent.succeeded`, `invoice.payment_failed`, `customer.subscription.deleted`
- Include idempotency keys on all charge requests

### 3. Invoicing Configuration
- Create invoice templates with line items, tax rates, and due dates
- Configure `auto_advance` and collection method (`charge_automatically` vs `send_invoice`)
- Set up PDF invoice generation via Stripe or a library like `pdfkit`
- Add invoice numbering sequence and metadata fields

### 4. Collection Workflow Automation
- Configure Smart Retries for failed payments (Stripe Dunning or custom retry schedule: day 3, 5, 7)
- Build reminder email triggers at: 7 days before due, day of, 3 days overdue, 7 days overdue
- Implement grace period logic before service suspension
- Set up escalation path: auto-retry → email → account flag → manual review queue

### 5. Security and Compliance
- Confirm PCI compliance by using Stripe Elements or Stripe.js (never log raw card data)
- Add webhook signature verification using `stripe.webhooks.constructEvent()`
- Store only Stripe customer IDs and last-4 digits locally — never full card numbers
- Enable Stripe Radar rules for fraud prevention

### 6. Testing Checklist
- Test with Stripe test cards: `4242 4242 4242 4242` (success), `4000 0000 0000 9995` (decline)
- Simulate webhook events via Stripe CLI: `stripe trigger payment_intent.succeeded`
- Verify idempotency by replaying the same request twice
- Confirm failed payment retry logic fires correctly in staging

## Output Format

Claude will produce the following artifacts, clearly separated by headers:

**1. Configuration Code Block**
- Language-specific Stripe SDK setup (Node, Python, Ruby, or PHP based on user's stack)
- Environment variable template (`.env.example`) with all required keys

**2. Webhook Handler**
- Complete event router with handlers for the 5 critical payment events
- Error logging and HTTP response codes

**3. Invoice Template Spec**
- JSON or code object defining invoice fields, tax config, and send settings

**4. Collection Workflow Diagram (text-based)**
- ASCII flowchart showing payment attempt → retry schedule → escalation path

**5. Go-Live Checklist**
- Numbered list of steps to switch from test to live keys safely
- Links to relevant Stripe Dashboard sections

Each section should be production-ready, not pseudocode. Include comments explaining non-obvious decisions.