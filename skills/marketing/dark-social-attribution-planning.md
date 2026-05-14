---
name: dark-social-attribution-planning
description: >
  Designs tracking and survey methods to estimate conversions originating from untrackable private sharing channels such as messaging apps, email forwards, and closed communities. Use when someone says "we can't tell where our traffic is coming from," asks about attributing word-of-mouth or private sharing, or wants to measure the impact of channels that don't pass referrer data. Also activate when someone mentions "direct traffic is too high," "our attribution model has gaps," or wants to quantify dark social's contribution to conversions.
category: marketing
tags: [attribution, dark-social, analytics, tracking, conversion]
author: community
---

# Dark Social Attribution Planning

This skill designs a multi-layered tracking and survey strategy to estimate and attribute conversions that originate from private, untrackable sharing channels, and Claude will use it whenever a user needs to account for attribution gaps caused by dark social traffic.

## Attribution Planning Workflow

### 1. Audit Current Attribution Gaps
- Pull direct traffic percentage from analytics; anything above 20% for a content-heavy site signals dark social leakage
- Identify content types most likely shared privately: long-form articles, pricing pages, product comparisons, job listings
- Flag campaigns that ran with no trackable distribution (organic word-of-mouth, offline mentions, private Slack/Discord communities)

### 2. Implement Technical Tracking Layers
- **UTM-wrapped share links**: Replace all social sharing buttons with UTM-tagged URLs (`utm_source=dark-social&utm_medium=share-button&utm_content=[page-slug]`)
- **Bitly or short-link wrapping**: Use branded short links for content shared in newsletters or PDFs so referrer data survives
- **Copy-to-clipboard interception**: Instrument clipboard copy events on key pages to fire an analytics event when users manually copy the URL
- **Session stitching**: Use fingerprinting or logged-in user ID matching to connect a direct-traffic session to a prior attributed session from the same user

### 3. Deploy Post-Conversion "How Did You Hear?" Surveys
- Trigger a single-question survey at the point of conversion (thank-you page, onboarding step 1, or checkout confirmation)
- Include response options: direct search, social media, email from a friend, messaging app (WhatsApp/Slack/iMessage), private community, saw it mentioned somewhere
- Keep it optional and one-click; aim for 30%+ response rate before drawing conclusions
- Store survey responses alongside session data in your CRM or data warehouse for correlation analysis

### 4. Build a Dark Social Estimation Model
- Segment "unexplained direct" traffic: direct sessions to deep interior pages (not homepage/brand) that convert at rates matching known referral traffic
- Apply a dark social coefficient: `estimated dark social conversions = (direct traffic to deep pages) × (referral conversion rate)`
- Cross-validate the coefficient against survey data monthly and adjust
- Separate brand-search direct (users who typed your URL) from true dark social using branded keyword data from Search Console

### 5. Set Up Content-Level Attribution Scoring
- Tag each piece of content with a "shareability score" based on topic, format, and audience
- Track which content accumulates disproportionate direct traffic over time — high direct-to-page ratio indicates active dark social sharing
- Build a report view grouping content by estimated dark social lift vs. baseline direct traffic

### 6. Establish Ongoing Measurement Cadence
- Weekly: monitor clipboard-copy events and share-button UTM clicks for trending content
- Monthly: reconcile survey responses against modeled dark social estimates; recalibrate coefficient
- Quarterly: present dark social contribution as a percentage of total attributed conversions to stakeholders

## Output Format

Produce a **Dark Social Attribution Plan** structured as follows:

1. **Gap Analysis Summary** (3–5 bullet points): current attribution blind spots identified from the audit, with specific metrics where provided by the user
2. **Technical Implementation Checklist** (table with columns: Tactic | Priority | Implementation Complexity | Expected Data Gain)
3. **Survey Design** (exact question wording + 6–8 response options ready to paste into a survey tool)
4. **Estimation Model** (formula + example calculation using placeholder or user-provided numbers)
5. **Measurement Calendar** (weekly / monthly / quarterly actions in a simple table)
6. **KPIs to Track** (bulleted list of 5–
