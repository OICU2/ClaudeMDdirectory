---
name: application-security-basics
description: >
  Identifies and fixes common application security vulnerabilities following OWASP Top 10 guidelines. Use when someone says "review my code for security issues," asks about "is this code secure," wants to "find vulnerabilities in my app," needs to "fix a security bug," or asks "how do I prevent SQL injection/XSS/CSRF."
category: developer
tags: [security, owasp, vulnerabilities, code-review, penetration-testing]
author: community
---

# Application Security Basics

Scans code and architecture for common security vulnerabilities, explains the risk of each finding, and provides concrete remediation with secure code examples.

## Security Review Workflow

1. **Identify the attack surface** — Determine what inputs the code accepts (HTTP params, headers, file uploads, env vars, DB queries, API calls).

2. **Check OWASP Top 10 categories in order:**
   - **A01 Broken Access Control** — Look for missing auth checks, direct object references, privilege escalation paths.
   - **A02 Cryptographic Failures** — Check for plaintext secrets, weak algorithms (MD5, SHA1, DES), hardcoded keys, unencrypted sensitive data.
   - **A03 Injection** — Find all places user input touches SQL, shell commands, LDAP, XML, or template engines. Look for string concatenation instead of parameterized queries.
   - **A04 Insecure Design** — Flag missing rate limiting, no input validation layer, absent security headers.
   - **A05 Security Misconfiguration** — Check for debug mode enabled, default credentials, verbose error messages, missing HTTP security headers (CSP, HSTS, X-Frame-Options).
   - **A06 Vulnerable Components** — Note outdated dependencies or packages with known CVEs if visible.
   - **A07 Auth Failures** — Check for weak password policies, no MFA support, insecure session tokens, missing logout invalidation.
   - **A08 Software Integrity Failures** — Look for unsigned package installs, no integrity checks on external resources.
   - **A09 Logging Failures** — Check if sensitive actions are logged, if errors expose stack traces to users.
   - **A10 SSRF** — Find places where user-controlled URLs are fetched server-side without validation.

3. **For each vulnerability found:**
   - Assign severity: Critical / High / Medium / Low
   - Explain the exploit scenario in plain language (one sentence)
   - Provide the vulnerable code snippet
   - Provide the fixed code snippet with explanation

4. **Apply language-specific secure defaults:**
   - SQL: Always use parameterized queries or ORM escaping
   - HTML output: Escape with context-aware encoding (HTML, JS, URL, CSS contexts differ)
   - File paths: Canonicalize and validate against allowed directories
   - Auth tokens: Use cryptographically secure random generators, not UUIDs or timestamps

5. **Check for secrets in code** — Flag any API keys, passwords, tokens, or private keys committed directly in source files.

## Output Format

Produce a structured security report with these sections:

**Summary** — One-line count of findings by severity (e.g., "2 Critical, 3 High, 1 Medium, 2 Low").

**Findings** — One block per vulnerability:
```
### [SEVERITY] [OWASP Category] — [Short Title]
**File/Location:** filename.ext, line N
**Risk:** One sentence explaining what an attacker could do.
**Vulnerable Code:**
[code snippet]
**Fixed Code:**
[code snippet]
**Why this fixes it:** One sentence.
```

**Quick Wins** — Bullet list of fixes that take under 5 minutes (security headers, removing debug flags, rotating exposed secrets).

**Recommendations** — Up to 5 architectural changes for systemic issues (e.g., "add a centralized input validation layer," "move secrets to environment variables or a secrets manager").

Keep findings specific to the actual code shown. Do not list vulnerabilities that aren't present. If code is secure in a category, skip that category silently.