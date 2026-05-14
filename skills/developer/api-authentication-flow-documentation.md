---
name: api-authentication-flow-documentation
category: developer
description: >
  Generates clear, step-by-step documentation for API authentication flows including OAuth 2.0, JWT, and API key patterns. Use when someone says "document my auth flow," asks about "how to explain authentication to new developers," wants to "write onboarding docs for our API," needs to "create a guide for OAuth integration," or asks to "document our login and token process."
tags: [api, authentication, documentation, oauth, jwt, developer-onboarding]
author: community
---

# API Authentication Flow Documentation

This skill generates structured, developer-friendly documentation for API authentication flows that helps new engineers integrate quickly and securely.

## Documentation Workflow

1. **Identify the auth pattern** — Determine which mechanism is in use: OAuth 2.0 (authorization code, client credentials, implicit, PKCE), JWT (stateless tokens), API keys (header, query param, or basic auth), or a combination.

2. **Gather required details** — Collect or infer: base URL, relevant endpoints (token, authorize, refresh, revoke), required headers, request/response payload shapes, token lifetimes, and scope requirements.

3. **Structure the flow in sequence** — Document each step in chronological order as the developer will execute it:
   - Prerequisites (credentials, environment variables, dependencies)
   - Step-by-step request/response pairs with real example values
   - Token storage and rotation guidance
   - Error handling for common failure cases (401, 403, token expiry)

4. **Add security callouts** — Flag where secrets must not be exposed (client-side code, logs, URLs), recommend HTTPS enforcement, and note PKCE requirements for public clients.

5. **Provide code snippets** — Include minimal working examples in the language/framework the developer is using, or default to curl + one high-level language (Python or JavaScript) if unspecified.

6. **Cover edge cases** — Token refresh before expiry, retry logic on 401, revocation on logout, and multi-tenant or multi-scope scenarios if relevant.

## Output Format

Produce a Markdown document with the following structure:

```
# [Auth Method] Authentication Guide

## Overview
One-paragraph summary of the auth pattern and when it applies.

## Prerequisites
Bulleted list of what the developer needs before starting.

## Authentication Flow

### Step 1: [Action]
- What to do
- Exact request (method, URL, headers, body)
- Expected response with example payload

### Step 2: [Action]
...repeat per step...

## Token Management
- Storage recommendations
- Refresh strategy with example request
- Expiry handling

## Error Reference
| Status Code | Cause | Resolution |
|-------------|-------|------------|
| 401 | ... | ... |

## Security Checklist
- [ ] item 1
- [ ] item 2

## Code Example
\`\`\`language
# Minimal working example
\`\`\`
```

- Length: comprehensive but not padded — cut any step that doesn't change developer behavior
- Code examples: runnable with placeholder values clearly marked (e.g., `YOUR_CLIENT_ID`)
- Tone: direct, second-person ("you"), no jargon without definition
