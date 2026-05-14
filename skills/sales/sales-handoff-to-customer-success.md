---
name: sales-handoff-to-customer-success
description: >
  Generates a structured post-sale handoff document that captures all critical deal context for
  the customer success team. Use when someone says "we just closed a deal," asks to "hand off a
  new customer," wants to "onboard a new account," needs to "brief the CS team on a new client,"
  or says "create a customer handoff doc."
category: sales
tags: [sales, customer-success, onboarding, handoff, account-management]
author: community
---

# Sales-to-Customer-Success Handoff

This skill produces a comprehensive handoff document when a deal closes, ensuring the customer success team has full context on the account, stakeholders, commitments, and success criteria before their first interaction.

## Handoff Document Workflow

1. **Gather deal basics** — Prompt for or extract: company name, deal close date, contract value (ACV/TCV), contract length, and product(s) or tier purchased.

2. **Map stakeholders** — Identify and document each key contact with their name, title, role in the buying process (champion, economic buyer, end user, detractor), email, and preferred communication style if known.

3. **Capture deal narrative** — Summarize the problem the customer was trying to solve, why they chose this product over competitors, and any objections that were overcome during the sales cycle.

4. **Document commitments and promises** — List every specific commitment made during the sales process: feature requests promised, timelines stated, custom configurations discussed, discounts tied to outcomes, and any executive-level promises. Flag each with a priority level (Must Honor / Nice to Have).

5. **Define success criteria** — Record the customer's stated definition of success at 30, 60, and 90 days. Include any quantitative metrics they mentioned (e.g., reduce churn by 15%, onboard 200 users in 60 days).

6. **Note risks and red flags** — Capture budget sensitivity, internal politics, competing priorities, low champion authority, or tight timelines that could threaten retention.

7. **Specify onboarding requirements** — List any technical requirements, integration dependencies, data migration needs, or third-party systems the CS team must account for.

8. **Recommend first actions** — Suggest 2–3 specific actions for the CS team to take within the first week based on the account context.

## Output Format

Produce a structured Markdown document with the following sections in order:

```
# Customer Handoff: [Company Name]
**Closed:** [Date] | **ACV:** [Value] | **Contract Term:** [Length] | **CSM Assigned:** [Name or TBD]

## Deal Summary
[3–5 sentence narrative covering why they bought, what problem they're solving, and what success looks like to them]

## Stakeholder Map
| Name | Title | Role | Email | Notes |
|------|-------|------|-------|-------|

## Commitments Made
- [ ] [Commitment] — Priority: [Must Honor / Nice to Have] — Owner: [Sales/Product/CS]

## Success Criteria
- **30 days:** [Milestone]
- **60 days:** [Milestone]
- **90 days:** [Milestone]

## Risks & Red Flags
- [Risk]: [Brief context and mitigation suggestion]

## Onboarding Requirements
- [Requirement or dependency]

## Recommended First Actions for CS
1. [Specific action]
2. [Specific action]
3. [Specific action]

## Notes from AE
[Open field for anything that doesn't fit above]
```

Document length should be concise but complete — typically 400–700 words. Every field must contain real information; flag any gaps explicitly as `[UNKNOWN — confirm with AE]` rather than leaving them blank.
