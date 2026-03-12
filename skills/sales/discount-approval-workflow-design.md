---
name: discount-approval-workflow-design
description: >
  Maps and documents the internal discount request and approval process including thresholds, required justifications, and escalation paths to prevent margin leakage. Use when someone says they need to formalize their discount process, asks about who should approve pricing exceptions, or wants to reduce unauthorized discounting. Also triggers when someone mentions reps giving away margin too freely or needing a discount policy.
category: sales
tags: [discounting, approval-workflow, pricing, margin-protection, sales-process]
author: community
---

# Discount Approval Workflow Design

This skill maps and documents a structured discount approval process — defining thresholds, justification requirements, approver roles, and escalation paths — to protect margin while keeping deals moving.

## Workflow Design Steps

1. **Establish Discount Tiers**
   - Define 3–5 discount bands (e.g., 0–5%, 6–15%, 16–25%, 26%+)
   - Assign each tier a maximum deal size or revenue threshold where it applies
   - Note any product lines, customer segments, or contract types that require separate rules

2. **Assign Approvers by Tier**
   - Tier 1 (smallest): Rep self-approval with CRM log required
   - Tier 2: First-line sales manager approval
   - Tier 3: VP of Sales or Revenue Operations approval
   - Tier 4+: CFO or executive sign-off; legal review if contract terms change
   - Document backup approvers for each role to prevent deal delays

3. **Define Required Justifications**
   - For each tier, list acceptable justification categories (e.g., competitive pressure, deal size, strategic account, end-of-quarter timing, multi-year commit)
   - Specify what evidence is required (competitor quote, account history, champion statement)
   - Flag justifications that are never acceptable (e.g., "rep promised it verbally")

4. **Set Turnaround SLAs**
   - Assign a response time commitment per tier (e.g., Tier 1: immediate, Tier 2: 4 business hours, Tier 3: 1 business day, Tier 4: 48 hours)
   - Define what happens if the SLA is missed (auto-escalate, deal holds, exception process)

5. **Design the Escalation Path**
   - Document the exact chain: who gets notified, in what order, after what trigger
   - Include a fast-track path for end-of-quarter or time-sensitive deals with additional scrutiny requirements
   - Specify who can override the process and under what conditions (board deal, strategic partnership, etc.)

6. **Capture the Request Format**
   - Define the fields required in every discount request: deal ID, account name, proposed discount %, list price, justified discount rationale, competitive context, rep name, approver needed
   - Specify where requests are submitted (CRM, Slack workflow, email template, CPQ tool)

7. **Establish Audit and Compliance Rules**
   - All approved discounts logged in CRM with approver name and timestamp
   - Monthly review cadence for discount patterns by rep, segment, and tier
   - Define what triggers a policy review (average discount creep, margin below target, high override frequency)

## Output Format

Produce a **Discount Approval Workflow Document** with the following sections:

**1. Discount Tier Table**
A table with columns: Tier | Discount Range | Max Deal Size | Approver | Backup Approver | SLA

**2. Justification Requirements by Tier**
Bullet list per tier showing required evidence and acceptable/unacceptable justification categories

**3. Escalation Path Diagram (text-based)**
Numbered sequence showing the escalation chain with trigger conditions at each step

**4. Request Submission Checklist**
Bulleted list of required fields and where/how to submit

**5. Audit & Governance Rules**
3–5 bullet points covering logging requirements, review cadence, and policy review triggers

**6. Edge Case Guidance**
Short paragraph addressing fast-track deals, executive overrides, and multi-product bundle discounting

Length: 600–900 words. Use tables and bullets throughout. Write for a Sales Ops or RevOps audience who will implement and enforce the process.
