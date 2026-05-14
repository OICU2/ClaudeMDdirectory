---
name: vendor-risk-assessment
category: operations
description: >
  Scores and documents third-party vendor risks across financial stability, data security, and delivery reliability to inform procurement decisions. Use when someone says "we need to evaluate a new vendor," asks about third-party risk, wants to assess supplier reliability, needs to review a vendor before signing a contract, or is building a vendor approval process.
tags: [vendor-management, risk-assessment, procurement, due-diligence, operations]
author: community
---

# Vendor Risk Assessment

This skill produces a structured risk scorecard and narrative summary for any third-party vendor, evaluating financial stability, data security posture, and delivery reliability to support procurement decisions.

## Assessment Workflow

1. **Gather vendor profile inputs** — Collect vendor name, category (SaaS, services, hardware, etc.), contract value, data access level (none/limited/sensitive/critical), and business criticality (low/medium/high).

2. **Score Financial Stability (0–25 points)**
   - Years in operation: <2yr = 0, 2–5yr = 5, >5yr = 10
   - Funding/revenue visibility: unknown = 0, disclosed = 5, audited = 10
   - Customer concentration risk: one major client = 0, diversified = 5
   - Assign a subtotal and flag if score < 12.

3. **Score Data Security (0–25 points)**
   - Certifications held (SOC 2, ISO 27001, etc.): none = 0, one = 8, two+ = 15
   - Breach history: known breach <3yr = 0, none known = 5
   - Data processing agreement available: no = 0, yes = 5
   - Assign a subtotal and flag if score < 15 and data access level is sensitive or critical.

4. **Score Delivery Reliability (0–25 points)**
   - Published SLA with uptime guarantee: none = 0, <99.5% = 8, ≥99.5% = 15
   - Support tier and response time: email-only = 0, dedicated support = 5
   - Reference customers available: none = 0, yes = 5
   - Assign a subtotal and flag if score < 12 for high-criticality vendors.

5. **Score Compliance & Legal (0–25 points)**
   - Relevant regulatory compliance (GDPR, HIPAA, PCI-DSS as applicable): none = 0, partial = 8, full = 15
   - Liability and indemnification clauses in contract: absent = 0, present = 5
   - Subprocessor disclosure: no = 0, yes = 5
   - Assign a subtotal.

6. **Calculate total score and assign tier:**
   - 85–100: **Tier 1 — Approved** (proceed)
   - 65–84: **Tier 2 — Conditional** (proceed with mitigations)
   - 40–64: **Tier 3 — Elevated Risk** (escalate to stakeholders before proceeding)
   - 0–39: **Tier 4 — Do Not Proceed** (reject or require major remediation)

7. **Identify mitigations** — For any flagged category or Tier 2/3 result, list specific required actions (e.g., "require SOC 2 Type II report before contract execution," "include right-to-audit clause," "obtain financial statements").

8. **Write recommendation** — One paragraph summarizing the vendor's overall risk profile, the top two risk factors, and a clear procurement recommendation.

## Output Format

Produce a vendor risk assessment report with the following sections:

**Header:** Vendor name, assessment date, assessor, contract value, data access level, business criticality.

**Scorecard Table:**
| Category | Score | Max | Flags |
|---|---|---|---|
| Financial Stability | X | 25 | [flag or —] |
| Data Security | X | 25 | [flag or —] |
| Delivery Reliability | X | 25 | [flag or —] |
| Compliance & Legal | X | 25 | [flag or —] |
| **Total** | **X** | **100** | |

**Risk Tier:** Clearly stated with tier label and color
