---
name: content-sensitivity-escalation-log
description: >
  Reviews a draft for potentially sensitive, legally risky, or audience-inappropriate content and produces a prioritized escalation list for editorial review. Use when someone says "flag anything risky in this draft," asks to "check this for sensitive content," or wants to "identify what needs legal or editorial review." Also triggers when someone asks to "audit this piece before publishing" or needs to "escalate content concerns to the editorial team."
category: writing
tags: [content-review, editorial, risk-assessment, compliance, publishing]
author: community
---

# Content Sensitivity Escalation Log

This skill scans a draft for sensitive, legally risky, or audience-inappropriate content and produces a structured, prioritized escalation log that editorial or legal reviewers can act on immediately.

## Review Workflow

1. **Read the full draft** before flagging anything — context determines severity.
2. **Scan for these content categories:**
   - **Legal risk**: defamation, unverified claims about real people or companies, copyright/trademark issues, medical/legal/financial advice without disclaimers, privacy violations (PII, HIPAA-adjacent content)
   - **Audience appropriateness**: age-sensitive material, graphic violence or explicit content, content mismatched to stated audience or platform
   - **Reputational risk**: politically charged statements, divisive social topics, brand associations that could backfire, satire that could be read as factual
   - **Factual sensitivity**: contested statistics, unattributed claims, outdated data presented as current, quotes that may be misattributed
   - **Ethical concerns**: stereotyping, discriminatory framing, exploitation of vulnerable groups, trauma content without warnings
3. **Assign a priority level to each flagged item:**
   - 🔴 **P1 — Block**: Do not publish until resolved (legal exposure, factual error, severe audience mismatch)
   - 🟡 **P2 — Review**: Requires editorial judgment before publishing (reputational risk, contested claims)
   - 🟢 **P3 — Note**: Low risk but worth awareness (minor tone concerns, optional disclaimers)
4. **Quote the exact flagged text** — do not paraphrase.
5. **State the specific concern** — not just "this is sensitive" but why and what the consequence could be.
6. **Suggest a resolution path** for each item: rewrite, remove, add disclaimer, verify with source, or escalate to legal.

## Output Format

Produce a structured escalation log in this exact format:

---

**CONTENT SENSITIVITY ESCALATION LOG**
Draft title / identifier: [title or first line of draft]
Review date: [today's date]
Total flags: [number] (P1: X | P2: X | P3: X)

---

**[P1/P2/P3] — [Category, e.g., Legal Risk / Audience Appropriateness / Reputational Risk]**
> "[exact quoted text from draft]"

**Concern:** [1-2 sentences explaining the specific risk and potential consequence]
**Recommended action:** [Rewrite / Remove / Add disclaimer / Verify with source / Escalate to legal] — [1 sentence on what that action looks like]

---

Repeat the block above for each flagged item, ordered P1 → P2 → P3.

End with a **Summary** section (3-5 sentences) stating: overall risk level of the draft, which flags are blockers, and any systemic pattern in the flags (e.g., "multiple unattributed statistics suggest a sourcing process gap").

If no issues are found, state: "No sensitivity flags identified. Draft appears clear for editorial review."
