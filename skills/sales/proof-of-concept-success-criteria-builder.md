---
name: proof-of-concept-success-criteria-builder
description: >
  Creates a structured, mutually agreed success criteria document for sales proof-of-concept engagements with measurable outcomes and clear evaluation timelines. Use when someone says "we're starting a POC," asks about defining success for a trial, wants to set evaluation criteria with a prospect, needs to formalize a proof-of-concept agreement, or is trying to align with a customer on what winning looks like. Produces a ready-to-share document both sales and technical teams can sign off on.
category: sales
tags: [sales, proof-of-concept, success-criteria, evaluation, enterprise-sales]
author: community
---

# POC Success Criteria Builder

This skill generates a complete, structured proof-of-concept success criteria document that aligns sales teams and prospects on measurable outcomes, evaluation timelines, and acceptance conditions before a trial begins.

## Workflow

### Step 1: Gather Context
Ask the user for the following if not already provided:
- **Prospect/Customer name** and industry
- **Product or solution** being evaluated
- **Primary use case** the POC is meant to address
- **Key stakeholders** on both sides (champion, technical evaluator, economic buyer)
- **POC duration** (start date, end date)
- **Top 2–4 business problems** the prospect wants to solve

If the user provides partial information, proceed with what's available and insert clearly marked placeholders (e.g., `[INSERT METRIC]`) for missing items.

### Step 2: Define Success Categories
Structure success criteria across these four categories:

1. **Technical Success** — Integration, performance benchmarks, uptime, compatibility
2. **Functional Success** — Feature coverage, workflow completion, user acceptance
3. **Business Outcome Success** — ROI indicators, time saved, error reduction, revenue impact
4. **Process Success** — Vendor responsiveness, onboarding quality, documentation adequacy

For each category, generate 2–3 specific, measurable criteria using this format:
- **Criterion:** What will be measured
- **Target:** The numeric or qualitative threshold for success
- **Measurement Method:** How it will be tracked or verified
- **Owner:** Who is responsible for confirming it

### Step 3: Define Evaluation Timeline
Create a phased timeline:
- **Week 1:** Environment setup, onboarding, baseline measurement
- **Week 2–3:** Active evaluation against criteria
- **Final Week:** Results review, stakeholder sign-off meeting
- **Decision Date:** Firm date for go/no-go decision

### Step 4: Define Exit Conditions
Specify:
- **Success:** All criteria met → recommended next step (e.g., commercial proposal)
- **Partial Success:** Criteria partially met → defined remediation period or escalation path
- **Failure:** Criteria not met → clean exit terms, no obligation

### Step 5: Add Mutual Commitments
List what each party agrees to provide:
- **Vendor commitments:** Dedicated support contact, SLA during POC, named resources
- **Prospect commitments:** Access to systems, named technical contact, attendance at check-ins

## Output Format

Produce a professional document with the following sections in order:

```
# Proof-of-Concept Success Criteria
**Customer:** [Name]
**Vendor:** [Name]
**Product:** [Name]
**POC Period:** [Start Date] – [End Date]
**Decision Date:** [Date]

---

## Executive Summary
[2–3 sentences: purpose of POC, what success enables, what both parties commit to]

---

## Success Criteria

### Technical Success
| Criterion | Target | Measurement Method | Owner |
|-----------|--------|--------------------|-------|
| ...       | ...    | ...                | ...   |

### Functional Success
[Same table format]

### Business Outcome Success
[Same table format]

### Process Success
[Same table format]

---

## Evaluation Timeline
| Phase | Dates | Activities | Milestone |
|-------|-------|------------|-----------|
| ...   | ...   | ...        | ...       |

---

## Exit Conditions
- **Success:** [Definition + next step]
- **Partial Success:** [Definition + remediation path]
- **Failure:** [Definition + exit terms]

---

## Mutual Commitments
**Vendor agrees to:**
- [Bullet list]

**
