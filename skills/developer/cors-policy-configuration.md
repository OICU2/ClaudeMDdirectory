---
name: cors-policy-configuration
category: developer
description: >
  Analyzes application request patterns and generates precise CORS policy configurations that balance security restrictions with required cross-origin access. Use when someone says "my API is getting blocked by CORS", asks about cross-origin requests failing, or wants to configure allowed origins for their server. Also activates when someone needs to set up CORS headers, is getting preflight errors, or wants to restrict which domains can access their API.
tags: [cors, security, api, http-headers, web-security]
author: community
---

# CORS Policy Configuration

This skill analyzes request patterns, origin requirements, and security needs to produce complete, production-ready CORS configurations for any server framework or API gateway.

## Analysis Workflow

1. **Identify the stack** — Determine the server framework (Express, FastAPI, Django, Spring, nginx, etc.) and any API gateways or CDN layers involved.

2. **Gather origin requirements** — Ask for or extract:
   - Which frontend domains need access (dev, staging, production URLs)
   - Whether credentials (cookies, Authorization headers) are required
   - Which HTTP methods the API uses (GET, POST, PUT, DELETE, PATCH)
   - Any custom request headers the client sends

3. **Assess security constraints** — Identify:
   - Whether wildcard origins (`*`) are acceptable or forbidden
   - If credentials are involved (wildcard is invalid with credentials)
   - Public API vs. private/authenticated API distinction
   - Whether preflight caching (`max-age`) should be optimized

4. **Generate the configuration** — Produce configs with these exact fields resolved:
   - `Access-Control-Allow-Origin` — specific origins or dynamic origin validation logic
   - `Access-Control-Allow-Methods` — only methods actually used
   - `Access-Control-Allow-Headers` — only headers actually sent
   - `Access-Control-Allow-Credentials` — true only when cookies/auth are needed
   - `Access-Control-Max-Age` — set to 86400 (24h) unless stricter caching is needed
   - `Access-Control-Expose-Headers` — include any custom response headers the client reads

5. **Handle edge cases explicitly**:
   - Multiple allowed origins → provide dynamic origin-matching middleware, not a comma-separated string (browsers don't support that)
   - Credentials + wildcard → flag as invalid, require explicit origin list
   - OPTIONS preflight → ensure 204 responses are handled before auth middleware runs
   - Vary header → add `Vary: Origin` when origin is dynamic to prevent cache poisoning

6. **Validate the policy** — Cross-check for common misconfigurations:
   - Wildcard with credentials (security error)
   - Missing OPTIONS route handler
   - Auth middleware blocking preflight requests
   - Overly broad method/header allowlists

## Output Format

Produce the following sections in order:

**1. Policy Summary Table**
A markdown table listing each CORS header, its configured value, and the reason for that value.

**2. Server Configuration Code**
Complete, copy-paste-ready code snippet for the identified framework. Include comments explaining non-obvious choices. If multiple frameworks are relevant, provide each in a labeled code block.

**3. Preflight Handling**
Explicit route or middleware snippet ensuring OPTIONS requests return 204 before any authentication or business logic runs.

**4. Security Notes**
Bullet list of any risks, trade-offs, or stricter alternatives for the chosen configuration.

**5. Testing Commands**
2–3 `curl` commands that verify the CORS policy is working correctly, including a preflight test and a credentialed request test if applicable.
