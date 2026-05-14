---
name: security-threat-model-documentation
description: >
  Documents a structured threat model for an application by identifying assets, attack surfaces, threats, and mitigations using STRIDE or similar frameworks. Use when someone says "threat model this application," asks to "document security risks," wants to "identify attack vectors," needs to "analyze what could go wrong security-wise," or requests a "security assessment" of a system or feature.
category: developer
tags: [security, threat-modeling, STRIDE, documentation, risk-assessment]
author: community
---

# Security Threat Model Documentation

This skill produces a structured threat model document for an application or system, walking through assets, trust boundaries, attack surfaces, STRIDE-categorized threats, and prioritized mitigations.

## Threat Modeling Workflow

1. **Define Scope and Context**
   - Identify the system, feature, or component being modeled
   - Note the technology stack, deployment environment, and key integrations
   - State what is explicitly in-scope and out-of-scope

2. **Enumerate Assets**
   - List all assets worth protecting: data (PII, credentials, secrets, business data), services, infrastructure, and reputation
   - For each asset, note its sensitivity level (Critical / High / Medium / Low)

3. **Map Trust Boundaries and Data Flows**
   - Identify all actors: users, admins, external services, internal services
   - Describe how data moves between components (entry points, storage, egress)
   - Highlight trust boundaries where privilege or trust levels change

4. **Identify Attack Surface**
   - List all external-facing interfaces: APIs, web forms, file uploads, authentication endpoints, third-party integrations
   - Note internal interfaces exposed between services or components

5. **Apply STRIDE Analysis**
   For each significant component or data flow, evaluate threats across all six categories:
   - **S**poofing — Can an attacker impersonate a user, service, or component?
   - **T**ampering — Can data or code be modified in transit or at rest?
   - **R**epudiation — Can a user deny performing an action without detection?
   - **I**nformation Disclosure — Can sensitive data be exposed to unauthorized parties?
   - **D**enial of Service — Can availability be disrupted?
   - **E**levation of Privilege — Can an attacker gain permissions beyond their role?

6. **Rate Each Threat**
   - Assign a risk rating using DREAD or a simple matrix: Likelihood (High/Med/Low) × Impact (High/Med/Low)
   - Produce an overall severity: Critical, High, Medium, Low

7. **Recommend Mitigations**
   - For each threat, provide one or more specific, actionable mitigations
   - Reference relevant standards or controls where applicable (OWASP, NIST, CWE)
   - Note whether each mitigation is already in place, planned, or unaddressed

8. **Summarize Residual Risk**
   - List threats that remain after mitigations are applied
   - Flag any accepted risks and who is accountable for accepting them

## Output Format

Produce a Markdown document with the following sections in order:

```
# Threat Model: [System/Feature Name]
**Date:** [date]
**Scope:** [one sentence]

## 1. Assets
| Asset | Description | Sensitivity |
|-------|-------------|-------------|

## 2. Trust Boundaries & Data Flows
[Prose or bullet description of actors, data flows, and trust boundaries]

## 3. Attack Surface
[Bulleted list of interfaces and entry points]

## 4. STRIDE Threat Analysis
| ID | Component | STRIDE Category | Threat Description | Likelihood | Impact | Severity |
|----|-----------|-----------------|-------------------|------------|--------|----------|

## 5. Mitigations
| Threat ID | Mitigation | Standard/Reference | Status |
|-----------|------------|--------------------|--------|

## 6. Residual Risk Summary
[Bulleted list of remaining risks, accepted risks, and owners]
```

- Use tables for assets, threats, and mitigations
- Write threat descriptions in plain language, not jargon
- Every threat must have at least one mitigation
- Flag Critical and High severity threats with a ⚠️ prefix
- Keep the document self-contained so a non-security engineer can act on it
