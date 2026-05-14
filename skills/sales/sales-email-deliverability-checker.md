---
name: sales-email-deliverability-checker
description: >
  Analyzes outbound sales email copy for spam trigger words, formatting issues, and deliverability risks before sending. Use when someone says "check this email before I send it," asks whether their email will land in spam, wants to review their cold outreach for deliverability, needs to clean up sales email copy, or is worried their emails aren't reaching prospects' inboxes.
category: sales
tags: [email, deliverability, spam, cold-outreach, sales]
author: community
---

# Sales Email Deliverability Checker

This skill audits outbound sales email copy for spam triggers, formatting red flags, and structural issues that hurt inbox placement, and returns a prioritized fix list before the email is sent.

## Analysis Workflow

1. **Scan for spam trigger words** — Check the subject line and body against high-risk terms: "FREE," "guaranteed," "act now," "limited time," "no obligation," "click here," "earn money," "risk-free," "winner," "congratulations," "double your," "increase sales," "special promotion," "buy now," "order now," "call now," "cash," "cheap," "deal," "discount," "save big," "100%," and excessive use of "you" or "your."

2. **Check subject line hygiene** — Flag if subject line is over 60 characters, uses all caps in any word, contains more than one punctuation mark, starts with "Re:" or "Fwd:" deceptively, or includes numbers that look like clickbait (e.g., "Make $5,000 this week").

3. **Evaluate formatting issues** — Identify: excessive exclamation points (more than 1 total), ALL CAPS words or phrases, more than 2 font colors mentioned, HTML-heavy structure if visible, broken or shortened URLs (bit.ly, tinyurl), and missing plain-text alternative signals.

4. **Assess link and CTA risk** — Count total links; flag if more than 3 links appear in a cold email. Check if the CTA is aggressive ("Buy now," "Sign up immediately") versus low-friction ("Worth a quick chat?"). Flag mailto links and unsubscribe language that looks templated.

5. **Review sender authentication signals** (if metadata is provided) — Note missing SPF/DKIM/DMARC references, mismatched sender names, or generic sending domains (gmail.com, yahoo.com) for business outreach.

6. **Evaluate text-to-link ratio** — If the email body is under 100 words and contains more than 1 link, flag as high-risk for spam filters.

7. **Check personalization signals** — Emails with zero personalization tokens and generic openers ("I hope this email finds you well," "My name is X and I work at Y") score poorly with modern spam filters; flag these.

8. **Score overall deliverability risk** — Assign a risk level:
   - **Low (0–2 issues):** Ready to send with minor tweaks
   - **Medium (3–5 issues):** Needs revision before sending
   - **High (6+ issues):** Do not send; significant rework required

## Output Format

Return a structured report with these sections:

**Deliverability Risk Score:** [Low / Medium / High] — [one sentence summary]

**Spam Trigger Words Found:**
- List each flagged word/phrase, its location (subject line or body), and a suggested replacement

**Formatting Issues:**
- Bulleted list of each issue with a specific fix

**Subject Line Assessment:**
- Pass/Fail on each criterion (length, caps, punctuation, deception)
- Rewritten subject line suggestion if score is Medium or High

**CTA & Link Review:**
- Link count, risk rating, and recommended reduction or rewording

**Top 3 Priority Fixes:**
- Numbered list of the highest-impact changes to make before sending

**Revised Email (if High risk):**
- Full rewritten version of the email with all issues resolved

Keep the report scannable. Use plain language. Flag only real issues — do not penalize legitimate professional language.
