---
name: cors-misconfiguration-audit
category: developer
description: >
  Reviews server and application configuration files to identify CORS policy misconfigurations
  that could expose APIs to unauthorized cross-origin access. Use when someone says "check my
  CORS settings," asks about cross-origin security risks, wants to audit API access controls,
  needs to find CORS vulnerabilities, or is troubleshooting cross-origin policy issues.
tags: [security, cors, api, configuration, audit]
author: community
---

# CORS Misconfiguration Audit

This skill scans server configs, middleware, and application code for CORS misconfigurations that expose APIs to unauthorized cross-origin access, then produces a prioritized findings report with remediation steps.

## Audit Workflow

### 1. Locate CORS Configuration Sources
Search for CORS settings across all relevant locations:
- Web server configs: `nginx.conf`, `apache.conf`, `.htaccess`
- Framework middleware: Express `cors()`, Django `CORS_ALLOWED_ORIGINS`, Spring `@CrossOrigin`
- Reverse proxy configs: Traefik, HAProxy, Caddy
- Cloud/CDN configs: Cloudfront response headers, API Gateway CORS settings
- Environment variables and `.env` files referencing allowed origins

### 2. Check for Critical Misconfigurations
Evaluate each finding against these high-severity patterns:

**Wildcard with Credentials:**
- `Access-Control-Allow-Origin: *` combined with `Access-Control-Allow-Credentials: true`
- This is invalid per spec but some servers implement it incorrectly

**Dynamic Origin Reflection Without Validation:**
- Code that reads the `Origin` header and echoes it back without a whitelist check
- Pattern: `res.header('Access-Control-Allow-Origin', req.headers.origin)`

**Overly Broad Origin Patterns:**
- Regex that can be bypassed: e.g., `^https://.*\.example\.com` matches `evil.example.com`
- Prefix-only checks: `startsWith('https://trusted.com')` matches `https://trusted.com.evil.com`

**Null Origin Allowed:**
- `Access-Control-Allow-Origin: null` permits requests from sandboxed iframes and `file://` origins

**Permissive Methods and Headers:**
- `Access-Control-Allow-Methods: *` or including `DELETE`, `PUT` when not required
- `Access-Control-Allow-Headers: *` exposing sensitive custom headers unnecessarily

**Missing Vary Header:**
- Origin-dependent responses lacking `Vary: Origin`, causing cache poisoning risk

### 3. Check for Medium-Severity Issues
- Overly long `Access-Control-Max-Age` (preflight cache > 86400 seconds)
- Exposing internal headers via `Access-Control-Expose-Headers`
- CORS enabled on non-public endpoints (admin, internal health checks)
- Inconsistent CORS policies across subdomains of the same app

### 4. Verify Intended vs. Actual Behavior
- Cross-reference allowed origins against known frontend domains
- Flag any origin that is a third-party domain not owned by the organization
- Confirm credentials mode matches authentication architecture (cookie-based vs. token-based)

### 5. Generate Remediation Recommendations
For each finding, provide:
- The exact file and line number
- The specific misconfiguration
- A corrected code or config snippet
- Severity rationale

## Output Format

Produce a structured report with the following sections:

```
## CORS Audit Report

### Summary
- Files Scanned: [list]
- Critical Findings: [count]
- Medium Findings: [count]
- Low/Informational: [count]

### Critical Findings
#### [FINDING-01] [Short Title]
- **File:** path/to/file.js:42
- **Severity:** Critical
- **Issue:** [One sentence describing the misconfiguration]
- **Risk:** [One sentence on exploitability and impact]
- **Current Code:**
  ```[lang]
  [offending snippet]
  ```
- **Remediation:**
  ```[lang]
  [corrected snippet]
  ```

[Repeat for each critical finding]

### Medium Findings
[Same structure]

### Low / Informational
[Condensed list
