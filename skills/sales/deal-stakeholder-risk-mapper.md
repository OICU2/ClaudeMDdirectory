---
name: deal-stakeholder-risk-mapper
description: >
  Identifies, scores, and profiles every stakeholder in an active deal by influence level, sentiment, and likelihood of blocking or delaying a close. Use when someone says "I'm not sure who the real decision maker is," asks about "mapping the buying committee," wants to "figure out who might kill this deal," needs to "assess stakeholder risk before the QBR," or is trying to "understand the political landscape in this account."
category: sales
tags: [deal-management, stakeholder-mapping, risk-assessment, forecasting, enterprise-sales]
author: community
---

# Deal Stakeholder Risk Mapper

This skill builds a structured stakeholder risk profile for an active deal by scoring each known contact on influence, sentiment, and blocking potential, then surfaces the highest-risk gaps and recommended actions.

## Stakeholder Mapping Workflow

**Step 1 — Extract Known Stakeholders**
Ask the rep to list every person they have interacted with or who has been mentioned in the deal. For each person, collect:
- Name and title
- Department and reporting line (if known)
- How they were introduced (champion referral, inbound, exec intro, etc.)
- Last interaction date and outcome

**Step 2 — Score Each Stakeholder on Three Dimensions**
Rate each stakeholder 1–5 on the following:

- **Influence Score (1–5):** How much weight does this person carry in the final decision? (1 = no authority, 5 = final approver or strong blocker)
- **Sentiment Score (1–5):** How positive are they toward your solution? (1 = actively opposed, 3 = neutral/unknown, 5 = strong advocate)
- **Engagement Score (1–5):** How actively involved are they in the evaluation? (1 = never responds, 5 = drives meetings and shares internal intel)

**Step 3 — Calculate Risk Rating**
For each stakeholder, compute a Risk Flag using this logic:
- **Critical Risk:** Influence ≥ 4 AND Sentiment ≤ 2
- **High Risk:** Influence ≥ 4 AND Sentiment = 3 (unknown/neutral)
- **Medium Risk:** Influence = 3 AND Sentiment ≤ 2, OR Engagement ≤ 2 for any high-influence contact
- **Low Risk:** Influence ≤ 2 OR (Influence ≥ 4 AND Sentiment ≥ 4)

**Step 4 — Identify Coverage Gaps**
Flag missing stakeholders based on standard buying committee roles:
- Economic Buyer (budget authority)
- Technical Evaluator / Security / IT
- Legal / Procurement
- End User Champion
- Executive Sponsor

If any role is uncontacted or unknown, mark it as a **blind spot** with a risk note.

**Step 5 — Generate Recommended Actions**
For each Critical or High Risk stakeholder, produce one specific next action:
- Who should reach out (rep, AE, exec sponsor)
- What the outreach angle should be (address a known concern, provide a reference, offer a technical deep-dive)
- Suggested timeline relative to close date

## Output Format

Produce the following structured output:

---

### Stakeholder Risk Map — [Deal Name / Account Name]

**Deal Summary**
- Stage: [current stage]
- Target Close Date: [date]
- Overall Deal Risk: [Critical / High / Medium / Low — based on worst stakeholder rating]

---

**Stakeholder Scorecard**

| Name | Title | Influence | Sentiment | Engagement | Risk Flag |
|------|-------|-----------|-----------|------------|-----------|
| [Name] | [Title] | [1–5] | [1–5] | [1–5] | 🔴 Critical / 🟠 High / 🟡 Medium / 🟢 Low |

---

**Buying Committee Coverage**

| Role | Contact | Status |
|------|---------|--------|
| Economic Buyer | [Name or UNKNOWN] | ✅ Covered / ⚠️ Blind Spot |
| Technical Evaluator | [Name or UNKNOWN] | ✅ Covered / ⚠️ Blind Spot |
| Legal / Procurement | [Name or UNKNOWN] | 
