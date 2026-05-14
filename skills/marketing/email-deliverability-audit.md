---
name: email-deliverability-audit
description: >
  Analyzes sender reputation, list hygiene, and email configuration to diagnose and improve inbox placement rates. Use when someone says their emails are going to spam, asks about improving deliverability, wants to diagnose why open rates dropped, is setting up a new sending domain, or needs to fix bounce rates.
category: marketing
tags: [email, deliverability, spam, sender-reputation, dns]
author: community
---

# Email Deliverability Audit

This skill runs a structured audit of all factors affecting email inbox placement and produces a prioritized remediation plan.

## Audit Workflow

### 1. Gather Context
Ask for the following if not provided:
- Sending domain and IP (shared or dedicated)
- Current inbox placement rate, bounce rate, and spam complaint rate
- ESP (email service provider) in use
- Approximate list size and how it was acquired
- Recent changes to sending volume or frequency

### 2. DNS & Authentication Check
Evaluate or prompt user to check:
- **SPF**: Is a valid SPF record published? Does it include all sending sources? Is it under the 10 DNS lookup limit?
- **DKIM**: Is DKIM signing enabled? Is the key 2048-bit or higher?
- **DMARC**: Is a DMARC record present? What is the policy (none/quarantine/reject)? Is `rua` reporting configured?
- **BIMI**: Optional — is a BIMI record and VMC in place for brand trust signals?
- **Reverse DNS**: Does the sending IP have a matching PTR record?

### 3. Sender Reputation Assessment
Check or ask about:
- IP and domain reputation via Google Postmaster Tools, Microsoft SNDS, or Sender Score
- Presence on major blocklists (Spamhaus, Barracuda, SORBS)
- Spam complaint rate — flag if above 0.08% (Google threshold) or 0.1% (Yahoo threshold)
- Bounce rate — flag hard bounces above 2% as critical

### 4. List Hygiene Review
Identify risks:
- How was the list acquired? (Opt-in vs. purchased lists are a critical distinction)
- Is double opt-in used?
- Are hard bounces removed immediately after first occurrence?
- Are soft bounces suppressed after 3–5 failures?
- Are unsubscribes honored within 10 business days (CAN-SPAM) or immediately (GDPR)?
- Is list-unsubscribe header (one-click, RFC 8058) enabled?
- When was the last list validation run (e.g., ZeroBounce, NeverBounce)?

### 5. Sending Behavior Analysis
Flag any of the following patterns:
- Sudden volume spikes without warmup
- Sending to inactive subscribers (no opens/clicks in 12+ months) without a re-engagement campaign
- Inconsistent sending frequency (long gaps followed by large sends)
- No engagement-based segmentation (sending everything to everyone)
- Missing or generic From name increasing spam complaints

### 6. Content & Infrastructure Signals
Review:
- Spam trigger words in subject lines or preheader text
- Image-to-text ratio (all-image emails are high risk)
- Presence of unsubscribe link and physical mailing address
- Link tracking domains — are they shared or custom-branded?
- HTML/CSS cleanliness — avoid inline JavaScript, excessive nesting

### 7. Prioritize Issues
Classify every finding as:
- 🔴 **Critical** — Actively causing deliverability failures (fix immediately)
- 🟡 **Warning** — Increasing risk or eroding reputation over time
- 🟢 **Best Practice** — Not urgent but improves long-term standing

## Output Format

Produce a structured audit report with these sections:

---

**Email Deliverability Audit Report**
*Domain: [domain] | Date: [date] | ESP: [ESP]*

**Summary**
One paragraph stating the overall deliverability health and the top 2–3 root causes of any problems.

**Authentication & DNS**
Table with columns: Check | Status | Finding | Action Required

**Sender Reputation**
Bullet list of reputation scores, blocklist status, complaint rate, and bounce rate with red/yellow/green flags.

**List
