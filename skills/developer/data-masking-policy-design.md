---
name: data-masking-policy-design
category: developer
description: >
  Identifies personally identifiable information (PII) and sensitive fields across a data model and generates a structured masking policy defining anonymization, tokenization, or redaction rules per environment. Use when someone says "we need to protect sensitive data in our schema," asks about "how to mask PII fields," wants to "define a data masking strategy," needs to "figure out which fields need anonymization," or is trying to "create a data protection policy for our database."
tags: [data-privacy, pii, security, compliance, data-governance]
author: community
---

# Data Masking Policy Design

This skill analyzes a provided data model or schema to identify sensitive fields and produces a complete, environment-aware masking policy specifying the exact masking technique for each field.

## Analysis and Policy Generation Workflow

### Step 1: Inventory All Fields
- Parse every table, collection, or entity in the provided schema or data model
- List all field names, data types, and any sample values or descriptions provided
- If no schema is provided, ask the user to supply one (DDL, JSON schema, ERD description, or field list)

### Step 2: Classify Each Field by Sensitivity
Assign each field one of these sensitivity tiers:

- **PII — Direct Identifiers**: Full name, SSN, passport number, national ID, date of birth, email, phone number, home address, biometric data, photo/image reference
- **PII — Indirect Identifiers**: ZIP code, gender, age, job title, employer, IP address, device ID, cookie ID, geolocation
- **Financial Sensitive**: Credit card number, bank account number, routing number, salary, transaction amount (context-dependent)
- **Health/Medical**: Diagnosis codes, prescription data, medical record numbers, insurance IDs
- **Credentials/Secrets**: Passwords, API keys, tokens, security questions/answers
- **Business Confidential**: Internal pricing, proprietary scores, customer segment labels, margin data
- **Non-Sensitive**: Public IDs, timestamps, status flags, non-personal metadata

### Step 3: Determine Masking Technique Per Field
Apply these rules to assign a technique:

| Sensitivity Tier | Technique | Rationale |
|---|---|---|
| Direct PII — needs referential integrity | **Tokenization** | Replace with a consistent token; joins still work |
| Direct PII — no referential integrity needed | **Anonymization** | Replace with realistic synthetic value |
| Indirect PII | **Generalization or Suppression** | Broaden (e.g., ZIP → region) or remove |
| Financial — card/account numbers | **Format-preserving tokenization** | Maintain format, mask middle digits |
| Credentials/Secrets | **Redaction** | Replace with null or fixed placeholder |
| Health data | **Anonymization or Redaction** | Depends on whether field is used in analytics |
| Business Confidential | **Redaction or Noise Addition** | Full redact in external environments; noise in analytics |
| Non-Sensitive | **None** | No masking required |

### Step 4: Define Environment-Specific Rules
For each field requiring masking, specify behavior across environments:

- **Production**: No masking (real data, access-controlled)
- **Staging**: Full masking applied; data should be realistic but synthetic
- **Development**: Full masking applied; can use static placeholder values
- **Analytics/Reporting**: Masking applied except where aggregation makes re-identification impossible; note exceptions explicitly
- **Third-party / External**: Most restrictive — redact or remove unless contractually required

### Step 5: Flag Compliance Requirements
Note applicable regulations based on field types detected:
- GDPR (EU personal data)
- CCPA (California residents)
- HIPAA (health data)
- PCI-DSS (payment card data)
- SOC 2 (general security controls)

### Step 6: Identify Risks and Gaps
- Call out fields that are ambiguous and need business clarification
- Flag composite re-identification risks (e.g., ZIP + DOB + gender alone may re-identify)
- Note any fields where masking would break application functionality and suggest alternatives

---

## Output Format

Produce the following four sections in order:

### 1. Sensitive Field Inventory Table
A markdown table with columns:
`Table/
