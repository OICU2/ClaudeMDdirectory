---
name: api-consumer-onboarding-guide-builder
category: developer
description: >
  Drafts a comprehensive, step-by-step onboarding guide for developers integrating with an API for the first time. Use when someone says "help me onboard new API users," asks about "how do I write API documentation for consumers," or wants to "create a getting started guide for my API." Also triggers when a team needs to "document API authentication setup" or wants to "show developers how to use my API."
tags: [api, documentation, onboarding, developer-experience, integration]
author: community
---

# API Consumer Onboarding Guide Builder

This skill produces a structured, developer-ready onboarding guide that walks new API consumers through authentication, rate limits, and practical request examples so they can integrate successfully from day one.

## Workflow

### 1. Gather API Context
Before drafting, collect the following details (ask if not provided):
- API name and base URL
- Authentication method (API key, OAuth 2.0, JWT, Basic Auth, etc.)
- Rate limit tiers (requests per minute/hour/day, per endpoint or global)
- Primary use cases or top 3–5 endpoints
- Response formats (JSON, XML, etc.)
- SDK availability or language preferences
- Sandbox/test environment availability
- Link to reference docs (if any)

### 2. Structure the Guide

Build the guide in this exact order:

**Section 1 — Prerequisites**
- List required accounts, permissions, or credentials the consumer must obtain before starting
- Specify supported languages, frameworks, or environments if relevant

**Section 2 — Authentication Setup**
- Explain how to obtain credentials (registration link, admin request, etc.)
- Show exactly how to include credentials in requests (header name, format, example token)
- Provide a working curl or HTTP example of an authenticated request
- Cover token expiry and refresh flow if applicable

**Section 3 — Base URL and Environments**
- List production and sandbox base URLs explicitly
- Recommend starting in sandbox/staging
- Note any environment-specific headers or flags

**Section 4 — Rate Limits and Quotas**
- State limits clearly in a table: endpoint, limit, window, scope
- Explain the HTTP headers that communicate rate limit status (e.g., `X-RateLimit-Remaining`)
- Describe what happens when limits are exceeded (429 response, retry-after header)
- Provide a retry strategy with exponential backoff pseudocode

**Section 5 — Making Your First Request**
- Walk through 2–3 common endpoint examples end-to-end
- For each: show the request (curl + one SDK language if applicable), expected success response, and key fields to note

**Section 6 — Error Handling**
- Table of common error codes (400, 401, 403, 404, 429, 500) with meaning and remediation
- Show an example error response payload

**Section 7 — Next Steps**
- Link to full API reference, changelog, and support channel
- List advanced topics (webhooks, pagination, filtering) with one-line descriptions

### 3. Tone and Style Rules
- Write in second person ("you", "your application")
- Use present tense
- Keep sentences short and imperative where possible
- Every code example must be complete and runnable (no `...` placeholders without explanation)
- Prefer curl for universal examples; add a secondary language if the consumer's stack is known

## Output Format

Produce a single Markdown document with the following structure:

```
# Getting Started with [API Name]

> Estimated setup time: X minutes

## Prerequisites
## 1. Authentication Setup
## 2. Base URL and Environments
## 3. Rate Limits and Quotas
## 4. Making Your First Request
## 5. Error Handling
## 6. Next Steps
```

- **Length:** 600–1200 words depending on API complexity
- **Code blocks:** Fenced with language tag (`bash`, `json`, `python`, etc.)
- **Tables:** Used for rate limits and error codes — minimum 3 columns
- **Callout blocks:** Use `> ⚠️` for warnings (e.g., "never expose your API key in client-side code")
- Deliver the complete guide in one response; do not summarize or truncate sections
