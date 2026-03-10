---
name: fraud-detection-awareness
description: >
  Identifies financial fraud red flags and recommends preventive controls for systems, processes, and transactions. Use when someone says "something seems off with these transactions," asks about preventing payment fraud, wants to audit financial controls, needs to review suspicious account activity, or is designing fraud detection logic for a finance system.
category: finance
tags: [fraud-detection, financial-controls, risk-management, compliance, security]
author: community
---

# Fraud Detection Awareness

This skill analyzes financial data, workflows, and system designs to surface fraud indicators and recommend concrete preventive controls.

## Fraud Detection Workflow

### 1. Classify the Fraud Surface
Identify which fraud category applies before analyzing:
- **Payment fraud**: unauthorized transactions, card-not-present abuse, ACH manipulation
- **Account takeover**: credential stuffing, session hijacking, unauthorized profile changes
- **Internal fraud**: employee manipulation of records, ghost vendors, duplicate payments
- **Identity fraud**: synthetic identities, KYC bypass, document forgery
- **Refund/chargeback abuse**: friendly fraud, return manipulation, dispute farming

### 2. Scan for Red Flags
Check for these specific indicators based on context:

**Transaction-level red flags:**
- Round-number amounts (e.g., $1,000.00 exactly) at unusual frequency
- Velocity spikes: multiple transactions in short windows from one source
- Transactions just below approval thresholds (e.g., $9,999 repeatedly)
- Mismatched billing/shipping addresses or device fingerprints
- First transaction immediately at high value with no account history

**Account/behavioral red flags:**
- Password reset followed immediately by large transfer
- New payee added and paid within minutes
- Login from new geography + high-value action within same session
- Multiple accounts sharing email domain, IP, or device ID
- Profile edits (email, phone, address) clustered before a transaction

**Process/internal red flags:**
- Single approver on high-value disbursements (missing dual control)
- Vendors with no address, phone, or tax ID on file
- Payments to employees or their relatives from vendor accounts
- Backdated entries or journal entries with no supporting documentation
- Expense reports approved by the same person submitting them

### 3. Evaluate Existing Controls
For each red flag found, assess whether a control exists:
- **Preventive control**: blocks fraud before it occurs (e.g., transaction limits, MFA)
- **Detective control**: catches fraud after the fact (e.g., reconciliation, alerts)
- **Corrective control**: limits damage (e.g., freeze accounts, chargeback process)

Flag any area where no control exists as a **control gap**.

### 4. Recommend Specific Controls
Map each gap to a concrete control:

| Gap | Recommended Control |
|-----|---------------------|
| No velocity checking | Rate-limit transactions per user/IP per hour; alert at 3+ in 10 min |
| Single approver | Require dual authorization above defined threshold (e.g., $10K) |
| No anomaly baseline | Build rolling 30-day spend baseline per user; flag >2 SD deviations |
| Weak KYC | Require document + liveness check for high-risk account actions |
| No audit trail | Enforce immutable logging on all financial record mutations |
| Duplicate payments | Hash payee+amount+date; reject exact duplicates within 24h |

### 5. Assign Risk Scores
Rate each identified issue:
- **Critical**: Active exploit likely or already occurring — act immediately
- **High**: Control gap with known attack vector — address within sprint
- **Medium**: Partial control exists but bypassable — schedule remediation
- **Low**: Defense-in-depth improvement — backlog

## Output Format

Produce a structured fraud assessment with these sections:

**1. Fraud Surface Summary** (2–4 sentences identifying which fraud types are in scope)

**2. Red Flags Identified** (bulleted list; each item states the specific signal, where it was observed, and why it matters)

**3. Control Gap Analysis** (table with columns: Area | Current Control | Gap | Risk Level)

**4. Recommended Controls** (numbered list; each recommendation includes: what to implement, where, and the specific fraud vector it addresses)

**5. Immediate Actions** (3–5 highest-priority items labeled CRITICAL or HIGH that should