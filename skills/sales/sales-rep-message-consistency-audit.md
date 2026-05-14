---
name: sales-rep-message-consistency-audit
description: >
  Analyzes outbound emails and call notes across a sales rep's pipeline to detect inconsistent positioning, contradictory claims, or conflicting value propositions made to prospects. Use when someone says "check if my messaging is consistent," asks to "review what I've promised across my deals," or wants to "audit my outreach for conflicting claims." Also triggers when a rep says "I can't remember what I told this prospect" or needs to "clean up messaging before a big push."
category: sales
tags: [sales, messaging, consistency, audit, pipeline, outreach]
author: community
---

# Sales Rep Message Consistency Audit

This skill reviews a sales rep's outbound emails and call notes across their pipeline to surface inconsistent positioning, contradictory product claims, or conflicting commitments made to different prospects.

## Audit Workflow

1. **Collect inputs**: Request all relevant materials — outbound emails, call notes, follow-up messages, and any recorded talking points. Ask the rep to specify the time range and which deals or prospects to include.

2. **Extract claims by category**: Parse each piece of communication and extract discrete claims across these categories:
   - Pricing or discount mentions
   - Feature availability or roadmap promises
   - Timeline or delivery commitments
   - Competitive differentiators
   - ROI or outcome guarantees
   - Support or service level assertions

3. **Map claims to prospects**: Build a per-prospect record of every claim made. Note the date, channel (email vs. call note), and exact language used.

4. **Identify inconsistencies**: Flag any instance where:
   - The same claim is made differently to different prospects (e.g., "up to 30% faster" vs. "2x faster")
   - A promise made to one prospect contradicts the message sent to another
   - A commitment in an early email conflicts with a later follow-up to the same prospect
   - Pricing or terms vary without a documented reason

5. **Assess severity**: Rate each inconsistency as:
   - **Critical** — contradictory claims that could create legal, contractual, or trust risk
   - **High** — conflicting value props that could undermine close conversations
   - **Medium** — inconsistent language that muddies positioning
   - **Low** — minor wording variation with no material impact

6. **Recommend corrections**: For each flagged issue, suggest a single approved version of the claim and note which prospects may need a clarifying follow-up.

## Output Format

Produce a structured audit report with the following sections:

**Summary**
- Total communications reviewed
- Number of prospects covered
- Count of inconsistencies by severity (Critical / High / Medium / Low)
- One-sentence overall assessment

**Inconsistency Log**
A table with columns: `Issue ID | Severity | Category | Prospect(s) Affected | Conflicting Claims | Recommended Resolution`

**Per-Prospect Snapshot** *(optional, include if requested or if Critical issues exist)*
For each affected prospect: list the claims made to them, flag any that conflict with the approved message, and note whether a follow-up correction is recommended.

**Approved Messaging Reference**
A clean list of the standardized claims the rep should use going forward, derived from reconciling the conflicting versions found during the audit.

Keep the report scannable — use tables and bullet points. Avoid narrative filler. Flag the most urgent items first.
