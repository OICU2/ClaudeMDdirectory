---
name: email-sender-reputation-audit
description: >
  Audits email sender reputation by analyzing domain authentication, bounce rates, spam complaints, and list hygiene to diagnose deliverability problems and recommend fixes. Use when someone says their emails are going to spam, asks about improving email deliverability, wants to check their sender reputation, is seeing high bounce rates, or needs to diagnose why their email campaigns aren't reaching inboxes.
category: marketing
tags: [email, deliverability, spam, dns, list-hygiene]
author: community
---

# Email Sender Reputation Audit

This skill performs a systematic audit of all factors affecting email deliverability and produces a prioritized action plan to improve inbox placement rates.

## Audit Workflow

### 1. Gather Baseline Information
Ask the user for:
- Sending domain(s) and ESP (email service provider)
- Current bounce rate, open rate, and spam complaint rate
- Monthly send volume and list size
- How long the domain has been used for email
- Any recent changes (new ESP, domain, IP, or list source)

### 2. Domain Authentication Check
Verify the following DNS records exist and are correctly configured:
- **SPF**: Check for a valid `TXT` record with correct `include` statements and a `-all` or `~all` suffix. Flag missing or overly permissive (`+all`) records.
- **DKIM**: Confirm a DKIM selector is published and that the ESP is signing outbound mail. Flag missing or mismatched keys.
- **DMARC**: Check for a `_dmarc` TXT record. Flag missing records, `p=none` with no monitoring, or policies misaligned with SPF/DKIM.
- **BIMI**: Note if absent — mention as an optional trust signal for major mailbox providers.

### 3. Sending Infrastructure Review
- Identify whether the sender uses a shared or dedicated IP.
- Check if the IP or domain appears on major blocklists: Spamhaus (SBL, XBL, PBL), Barracuda, SURBL, MXToolbox.
- Evaluate IP warm-up status if the domain or IP is new (under 90 days).
- Review subdomain usage — flag if transactional and marketing mail share the same domain.

### 4. Bounce Rate Analysis
- **Hard bounces > 2%**: Flag as critical. Indicates stale or purchased lists.
- **Soft bounces > 5%**: Flag as moderate. May indicate delivery throttling or full mailboxes.
- Recommend immediate suppression of all hard-bounced addresses.
- Ask whether double opt-in is used at signup.

### 5. Spam Complaint Rate Analysis
- **Complaint rate > 0.1% (Google Postmaster threshold)**: Flag as critical.
- **Complaint rate > 0.08%**: Flag as warning.
- Ask whether the unsubscribe process is one-click and prominent.
- Check if the sender is enrolled in FBL (Feedback Loop) programs with Yahoo, Comcast, etc.
- Review whether the Google Postmaster Tools and Microsoft SNDS dashboards are being monitored.

### 6. List Hygiene Assessment
Ask about each of the following:
- Last full list clean date and method (email verification service used?)
- Presence of role-based addresses (admin@, info@, support@) — these inflate complaints
- Re-engagement campaigns for subscribers inactive > 6 months
- Whether list segments exist for engagement tiers (active, lapsing, inactive)
- Source of list (organic opt-in vs. purchased/rented)

### 7. Content and Sending Behavior Flags
- Flag URL shorteners, excessive image-to-text ratios, or spam-trigger words in subject lines
- Check sending frequency consistency — sudden volume spikes damage reputation
- Verify unsubscribe links are functional and honor requests within 2 business days
- Confirm physical mailing address is present (CAN-SPAM/CASL requirement)

## Output Format

Produce a structured audit report with the following sections:

**1. Reputation Health Summary**
A 3–5 sentence executive summary with an overall status: 🔴 Critical / 🟡 At Risk / 🟢 Healthy.

**2. Authentication Status Table**
| Record | Status | Issue | Fix |
|--------|--------|----
