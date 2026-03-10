---
name: customer-retention-selling
description: >
  Proactively identifies at-risk customers and delivers targeted value to prevent churn and strengthen long-term relationships. Use when someone says "a customer hasn't engaged in a while," asks about reducing churn, wants to save an account that's going cold, needs to re-engage lapsed customers, or is preparing for a renewal conversation with an unhappy client.
category: sales
tags: [retention, churn-prevention, customer-success, renewal, re-engagement]
author: community
---

# Customer Retention Selling

This skill guides Claude through proactive outreach and value-delivery strategies to retain at-risk customers, prevent churn, and turn disengaged accounts into loyal ones.

## Retention Workflow

**Step 1: Diagnose the Risk Signal**
Identify the churn indicator before crafting any outreach. Categorize it:
- **Usage drop**: Customer engagement or product usage has declined
- **Silence**: No contact in 30+ days, ignored check-ins
- **Complaint history**: Unresolved support tickets, expressed dissatisfaction
- **Renewal proximity**: Contract ends within 90 days, no renewal signal
- **Champion departure**: Key internal contact left the company

**Step 2: Audit Delivered Value**
Before reaching out, list:
- What the customer originally bought and why (their stated goals)
- Measurable outcomes they've achieved (usage stats, ROI, milestones)
- Any unresolved issues or broken promises
- Features or services they're underusing that could solve current problems

**Step 3: Choose the Outreach Approach**
Match strategy to risk type:
- **Usage drop** → Share a personalized insight or benchmark showing what similar customers achieve; invite a brief call to uncover blockers
- **Silent customer** → Lead with a low-ask touchpoint (relevant article, industry data, product tip) before requesting a conversation
- **Unhappy customer** → Acknowledge the issue directly, own any failures, present a concrete remediation plan before discussing renewal
- **Renewal risk** → Build a "value recap" showing ROI to date; tie renewal to future goals, not past spend
- **Champion departure** → Reach out to the new contact with fresh context; offer an onboarding or re-introduction session

**Step 4: Craft the Outreach Message**
Follow this structure:
1. **Hook**: Reference something specific to them (recent company news, their usage data, a shared goal)
2. **Value bridge**: Connect that reference to a result they care about
3. **Soft ask**: One low-friction next step (15-minute call, a resource, a question)
4. **No pressure close**: Make it easy to say yes or redirect — never corner them

**Step 5: Prepare for the Retention Conversation**
If a call or meeting occurs:
- Open by asking about their current priorities, not your contract
- Use their answers to reframe your product around present needs
- Offer a concession or upgrade only after understanding the real objection
- End with a mutual success plan: what they need to see to feel good about staying

**Step 6: Handle the "We're Leaving" Conversation**
If the customer signals intent to churn:
1. Don't defend immediately — ask what's driving the decision
2. Separate fixable problems from deal-breakers
3. Propose a structured save offer (pricing adjustment, added support, feature unlock) tied to a specific outcome they stated
4. Set a clear decision deadline; don't let the conversation stay open-ended

## Output Format

For each retention scenario, Claude will produce:

**Situation Summary** (2–3 sentences)
Brief diagnosis of the churn risk and what stage the relationship is in.

**Outreach Message** (ready to send)
A personalized email or message draft, 100–150 words, with subject line included. No generic filler. Customer name, company, and relevant specifics should be clearly marked as `[PLACEHOLDER]` if not provided.

**Talking Points for Live Conversation** (bulleted list)
5–7 specific points to raise on a call, ordered from rapport-building to ask.

**Concession Options** (if applicable)
2–3 tiered offers to use as save levers, from low-cost to high-value, each tied to a customer commitment in return.

**Next Step Recommendation** (1 sentence)
The single most important action to take in the next 48 hours.