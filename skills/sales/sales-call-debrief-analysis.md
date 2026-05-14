---
name: sales-call-debrief-analysis
description: >
  Analyzes sales call notes or transcripts to extract structured intelligence for pipeline management and follow-up. Use when someone says "here are my call notes," asks to "debrief a sales call," wants to "pull insights from a transcript," needs to "identify next steps from a call," or says "help me summarize what happened in my meeting." Produces buyer signals, risk flags, and action items that improve forecast accuracy and rep follow-up quality.
category: sales
tags: [sales, pipeline, call-analysis, crm, forecasting]
author: community
---

# Sales Call Debrief Analysis

This skill parses raw sales call notes or transcripts and produces a structured debrief covering buyer intent, deal risks, and concrete next steps that reps can act on immediately.

## Analysis Workflow

1. **Identify the deal context** — Extract company name, deal stage, participants, and call date if present. Flag if any are missing.

2. **Score buyer engagement signals** — Look for explicit and implicit signals:
   - *Positive*: budget mentions, timeline urgency, champion advocacy, competitor dismissal, internal selling language ("we would use this for…")
   - *Negative*: vague answers, stakeholder avoidance, price objections, delayed timelines, competitor preference hints

3. **Extract MEDDIC/MEDDPICC elements** — Pull any evidence of:
   - Metrics (quantified pain or ROI expectations)
   - Economic Buyer (who controls budget, were they on the call)
   - Decision Criteria (stated requirements or evaluation factors)
   - Decision Process (next steps they described, approval chain)
   - Identified Pain (problems they articulated)
   - Champion (internal advocate behavior)
   - Competition (named or implied alternatives)

4. **Flag deal risks** — Identify red flags such as:
   - No clear next step agreed upon
   - Economic buyer not engaged
   - Undefined timeline
   - Objections left unresolved
   - Stakeholder misalignment signals

5. **Define next steps** — List every committed action item with owner (rep vs. prospect) and any stated deadline. Flag any next steps that were discussed but not confirmed.

6. **Assess deal health** — Assign a simple health score: **Strong / Moderate / At Risk**, with a one-sentence rationale tied to the evidence in the notes.

## Output Format

Produce a structured debrief with the following sections:

---

**Deal Summary**
- Company | Stage | Call Date | Participants

**Buyer Signals**
- ✅ Positive: [bulleted list]
- ⚠️ Concerns: [bulleted list]

**MEDDIC Coverage**
| Element | Evidence Found | Gap |
|---|---|---|
| Metrics | … | … |
| Economic Buyer | … | … |
| Decision Criteria | … | … |
| Decision Process | … | … |
| Identified Pain | … | … |
| Champion | … | … |
| Competition | … | … |

**Risk Flags**
- [Each risk on its own line, bolded if critical]

**Next Steps**
- [ ] [Action] — Owner: [Rep/Prospect] — Due: [date or TBD]

**Deal Health:** Strong / Moderate / At Risk
*Rationale: [1 sentence]*

**Recommended CRM Notes** *(paste-ready summary for Salesforce/HubSpot)*
[3–5 sentence narrative summarizing the call, buyer sentiment, and next steps in plain prose]

---

Keep the output scannable. Use exact quotes from the transcript when citing buyer signals or objections. If the input is too sparse to populate a section, write "Insufficient data — probe in next call" rather than guessing.
