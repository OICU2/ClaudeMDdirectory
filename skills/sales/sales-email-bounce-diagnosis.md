---
name: sales-email-bounce-diagnosis
description: >
  Analyzes bounced email patterns from outbound sales sequences to identify deliverability issues, domain reputation problems, and contact data quality gaps. Use when someone says their emails are bouncing, asks why their outbound sequence has high bounce rates, wants to diagnose email deliverability problems, is seeing hard or soft bounces in their campaigns, or needs to clean up their contact list after a failed send.
category: sales
tags: [email-deliverability, bounce-analysis, outbound-sales, contact-data, domain-reputation]
author: community
---

# Sales Email Bounce Diagnosis

Diagnoses the root causes of bounced emails in outbound sales sequences by classifying bounce types, identifying systemic patterns, and producing a prioritized remediation plan.

## Bounce Diagnosis Workflow

### Step 1: Gather Bounce Data
Ask the user to provide or paste:
- Bounce error messages or codes (e.g., 550, 421, 452)
- Bounce rate percentage and total volume sent
- Which domains are bouncing (prospect domains, not sender domain)
- Sending domain and whether SPF/DKIM/DMARC are configured
- Email platform used (Outreach, Salesloft, Apollo, HubSpot, etc.)
- How the contact list was sourced (scraped, purchased, CRM, manual)

### Step 2: Classify Bounce Types
Categorize each bounce pattern into:
- **Hard bounces**: Invalid address (550-5.1.1), domain doesn't exist, mailbox not found — indicates bad contact data
- **Soft bounces**: Mailbox full (452), server temporarily unavailable (421), message deferred — indicates timing or volume issues
- **Reputation blocks**: 550-5.7.1, 421-4.7.0, blocked by spam filter — indicates sender domain or IP reputation problems
- **Policy rejections**: DMARC failure, SPF failure, authentication errors — indicates technical misconfiguration

### Step 3: Identify Systemic Patterns
Look for these specific signals in the data:
- **>5% hard bounce rate**: Contact list has data quality problems; source is unreliable
- **Bounces concentrated on specific domains** (e.g., all Gmail, all Fortune 500): Reputation block or domain-level filtering
- **Bounces spike after day 2-3 of sequence**: Sending volume triggered spam thresholds
- **Authentication errors across all bounces**: SPF/DKIM/DMARC misconfigured or missing
- **Mixed hard + reputation bounces**: Both data quality and reputation issues compound each other

### Step 4: Diagnose Root Causes
Map patterns to causes:
- High hard bounce rate → list was not verified before sending; use ZeroBounce, NeverBounce, or Hunter.io to validate
- Reputation blocks from multiple domains → sending domain is blacklisted; check MXToolbox, Google Postmaster, Microsoft SNDS
- DMARC/SPF failures → DNS records missing or misconfigured; pull DNS TXT records and verify alignment
- Deferred messages at scale → sending too fast; daily send limits exceeded for domain age or warmup stage
- Bounces only from large enterprises → corporate email gateways are filtering; sending patterns look automated

### Step 5: Prioritize Remediation
Rank fixes by impact and urgency:
1. **Immediate stop** if bounce rate exceeds 10% — continued sending will permanently damage domain reputation
2. **Authentication first** — fix SPF/DKIM/DMARC before any other action; nothing else matters without this
3. **List cleaning second** — remove all hard-bounced addresses, run remaining list through a verification tool
4. **Reputation repair third** — if blacklisted, submit removal requests; reduce send volume and warm up domain
5. **Sequence adjustments last** — throttle sending speed, add delays between emails, reduce daily volume

## Output Format

Produce a structured diagnosis report with these exact sections:

**Bounce Summary**
- Total sent, bounce rate, breakdown by bounce type (hard/soft/reputation/authentication)

**Pattern Analysis**
- Bullet list of identified patterns with specific data points from what the user provided

**Root Cause Findings**
- Numbered list of diagnosed causes, ranked by severity (Critical / High / Medium)

**Remediation Plan**
- Step-by-step
