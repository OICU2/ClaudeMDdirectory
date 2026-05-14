---
name: discovery-question-bank-builder
description: >
  Generates a structured bank of open-ended discovery questions organized by pain category, buyer role, and deal stage for use in sales calls. Use when someone says "I need better discovery questions," asks about "what to ask prospects," or wants to "build a question library for sales calls." Also activates when someone mentions "our reps don't know what to ask" or "help me prepare for a discovery call."
category: sales
tags: [discovery, sales-calls, prospecting, question-bank, buyer-personas]
author: community
---

# Discovery Question Bank Builder

This skill generates a comprehensive, structured bank of open-ended discovery questions segmented by pain category, buyer role, and deal stage so sales reps can run deeper, more targeted discovery conversations.

## Workflow

1. **Gather context before generating** — Ask the user for: (a) their product/solution category, (b) the buyer roles they typically sell to (e.g., VP Sales, CTO, CFO), and (c) the deal stages in their pipeline (e.g., qualification, discovery, technical eval). If they skip this, make reasonable assumptions and state them explicitly.

2. **Identify pain categories** — Based on the solution context, define 4–6 core pain categories (e.g., efficiency, cost, compliance, visibility, growth, risk). These become the top-level organizing structure.

3. **Generate questions by pain category** — For each pain category, write 5–8 open-ended discovery questions. Questions must:
   - Start with "What," "How," "Tell me about," "Walk me through," or "Why"
   - Uncover current state, emotional impact, business impact, or desired future state
   - Never be answerable with yes/no

4. **Map questions to buyer roles** — Tag each question with the 1–2 buyer roles it is most relevant to (e.g., [Economic Buyer], [Technical Buyer], [End User], [Champion]).

5. **Map questions to deal stage** — Tag each question with the appropriate deal stage: [Qualification], [Discovery], [Technical Eval], or [Negotiation].

6. **Add follow-up probes** — For each pain category, include 2–3 universal follow-up probes that deepen any answer (e.g., "What's the impact of that on your team?", "How long has this been a problem?", "What have you tried already?").

7. **Flag high-value questions** — Mark the 2–3 highest-impact questions per category with ⭐ to help reps prioritize when time is short.

## Output Format

Produce a Markdown document with the following structure:

```
# Discovery Question Bank — [Solution/Product Category]

**Assumptions:** [List any assumptions made about buyer roles, stages, or solution if user skipped context]

---

## Pain Category: [Category Name]

**Questions:**
- ⭐ [Question] | Roles: [Role1, Role2] | Stage: [Stage]
- [Question] | Roles: [Role1] | Stage: [Stage]
- [Question] | Roles: [Role1, Role2] | Stage: [Stage]
(5–8 questions per category)

**Follow-up Probes:**
- [Probe 1]
- [Probe 2]
- [Probe 3]

---
(Repeat for each pain category)

---

## Quick Reference Cheat Sheet

| Question | Pain Category | Best Role | Stage |
|----------|--------------|-----------|-------|
| (Top 10–15 highest-rated questions pulled into a scannable table) |
```

- Length: Full bank should contain 30–50 questions total across all categories
- Tone: Conversational, consultative — questions should sound natural when spoken aloud
- Deliver as a single copyable Markdown document the user can paste into Notion, a CRM, or a sales playbook
