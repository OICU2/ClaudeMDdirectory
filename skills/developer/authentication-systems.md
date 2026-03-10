---
name: authentication-systems
description: >
  Implements secure user authentication flows including OAuth 2.0, JWT tokens, and session management. Use when someone wants to add login to their app, asks about securing user accounts, needs to implement OAuth with Google or GitHub, wants to handle JWTs, or is building a registration and authentication system.
category: developer
tags: [authentication, security, oauth, jwt, sessions]
author: community
---

# Authentication Systems

This skill guides Claude through implementing production-ready authentication including OAuth 2.0 providers, JWT-based auth, and secure session management with best practices for token storage, refresh flows, and security hardening.

## Authentication Implementation Workflow

1. **Identify requirements first** — Ask which auth methods are needed (email/password, OAuth providers, magic links), the tech stack, and whether sessions or JWTs are preferred before writing code.

2. **Implement password-based auth** — Use bcrypt (cost factor 12+) for hashing. Never store plaintext. Enforce minimum password requirements. Return generic error messages ("Invalid credentials") to prevent user enumeration.

3. **JWT implementation rules**:
   - Sign with RS256 (asymmetric) for production, HS256 only for simple single-service apps
   - Set short expiry on access tokens (15 minutes), longer on refresh tokens (7–30 days)
   - Store access tokens in memory (not localStorage), refresh tokens in httpOnly cookies
   - Implement token rotation: issue new refresh token on each use, invalidate old one
   - Include only necessary claims (sub, iat, exp, role) — no sensitive data in payload

4. **OAuth 2.0 integration**:
   - Use Authorization Code Flow with PKCE for all public clients
   - Generate and validate `state` parameter to prevent CSRF
   - Exchange code for tokens server-side only
   - Store provider tokens encrypted if persistence is needed
   - Handle token refresh and provider revocation

5. **Session management**:
   - Generate cryptographically random session IDs (crypto.randomBytes(32))
   - Store sessions server-side (Redis preferred for scalability)
   - Set secure, httpOnly, SameSite=Strict cookies
   - Implement absolute and idle timeouts (e.g., 24h absolute, 30min idle)
   - Regenerate session ID on privilege escalation (login, role change)

6. **Security hardening** — Always implement:
   - Rate limiting on auth endpoints (e.g., 5 attempts per 15 minutes per IP)
   - Account lockout after repeated failures with exponential backoff
   - Secure password reset flow (time-limited tokens, single-use, delivered via email)
   - Audit logging for login, logout, failed attempts, and password changes
   - MFA support hook (TOTP via speakeasy or similar)

7. **Middleware and route protection** — Create reusable auth middleware that validates tokens/sessions, attaches user context to requests, and returns 401/403 with consistent error shapes.

## Output Format

Produce the following for each implementation request:

- **Auth module files**: Complete, runnable code files (e.g., `auth.controller.ts`, `auth.middleware.ts`, `jwt.service.ts`) with imports, error handling, and inline comments on security decisions
- **Database schema**: User table with fields (id, email, password_hash, created_at, last_login, is_verified, mfa_secret) and any session/token tables needed
- **Environment variables list**: All required secrets and config (e.g., `JWT_SECRET`, `OAUTH_CLIENT_ID`) with descriptions
- **Security checklist**: Bullet list of implemented protections and any remaining recommendations
- **Usage examples**: 2–3 code snippets showing how to protect routes and call auth functions from client code

Format code in language-appropriate syntax-highlighted blocks. Flag any shortcuts taken with `// SECURITY NOTE:` comments explaining the tradeoff.