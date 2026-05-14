---
name: email-list-hygiene-protocol-builder
category: marketing
description: >
  Creates a systematic workflow for identifying and suppressing invalid, inactive, and duplicate email addresses to protect sender reputation and improve deliverability metrics. Use when someone wants to clean up their email list, asks about reducing bounce rates or spam complaints, needs to improve email deliverability, wants to build a suppression list strategy, or is dealing with low engagement rates from their subscriber base.
tags: [email-marketing, deliverability, list-management, sender-reputation, suppression]
author: community
---

# Email List Hygiene Protocol Builder

This skill generates a structured, step-by-step email list hygiene workflow tailored to the user's platform, list size, and hygiene goals, covering identification, segmentation, suppression, and re-engagement strategies.

## Hygiene Protocol Workflow

### Step 1: Gather Context
Ask the user for the following before building the protocol:
- Email platform (Mailchimp, Klaviyo, HubSpot, SendGrid, custom, etc.)
- Approximate list size and age
- Current bounce rate, spam complaint rate, and open rate if known
- Whether they have existing suppression lists
- Cadence of sends (daily, weekly, monthly)
- Whether re-engagement campaigns have been attempted

### Step 2: Identify Problem Segments
Build logic to flag these specific categories:
- **Hard bounces**: Invalid or non-existent addresses — suppress immediately after first occurrence
- **Soft bounces**: Temporary failures — suppress after 3 consecutive soft bounces within 30 days
- **Spam complainers**: Anyone who marked email as spam — suppress immediately and permanently
- **Duplicates**: Identical email addresses across lists or segments — deduplicate using case-insensitive matching
- **Invalid syntax**: Addresses missing @, domain, or TLD — remove before any send
- **Role-based addresses**: info@, admin@, support@, noreply@ — flag for review; suppress from marketing sends
- **Inactive subscribers**: Define inactivity threshold based on send frequency:
  - Daily senders: No open or click in 60 days
  - Weekly senders: No open or click in 90 days
  - Monthly senders: No open or click in 180 days

### Step 3: Suppression List Structure
Define four suppression tiers:
1. **Global suppression**: Hard bounces, spam complaints, unsubscribes — never mail again
2. **Marketing suppression**: Role-based and invalid syntax — exclude from all campaigns
3. **Temporary hold**: Soft bounce threshold reached — hold 30 days, retry once
4. **Re-engagement queue**: Inactive subscribers — route to win-back sequence before suppression

### Step 4: Re-engagement Sequence (Before Final Suppression)
Design a 3-email win-back sequence for inactive subscribers:
- **Email 1** (Day 0): "We miss you" — soft check-in, no hard sell, prominent unsubscribe link
- **Email 2** (Day 7): Offer incentive or show value update — one clear CTA
- **Email 3** (Day 14): "Last chance to stay subscribed" — explicit opt-in confirmation button
- If no engagement after Email 3: move to global suppression list

### Step 5: Validation and Verification Tools
Recommend integration with one or more of these based on platform:
- **Syntax validation**: Built-in platform tools or regex filters at point of capture
- **Domain/MX record check**: ZeroBounce, NeverBounce, BriteVerify, or Kickbox API
- **Engagement scoring**: Native platform engagement scoring or custom scoring model (opens = 1pt, clicks = 2pt, purchases = 3pt; suppress below 0 points over 90 days)

### Step 6: Ongoing Maintenance Schedule
Define recurring hygiene tasks:
- **Before every send**: Check for new hard bounces and spam complaints from prior send; apply suppressions
- **Weekly**: Pull soft bounce report; identify subscribers crossing threshold
- **Monthly**: Run inactive segment report; seed into re-engagement queue
- **Quarterly**: Full list audit — validate top 10% of unengaged addresses via third-party tool, prune global suppression list of duplicates
- **Annually**: Rebuild suppression list documentation, review inactivity thresholds against send frequency changes

### Step 
