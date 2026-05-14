---
name: sales-objection-early-warning-detector
description: >
  Scans email threads and call notes to identify recurring objection patterns before they derail a deal. Use when someone says "something feels off with this deal," asks about why a prospect has gone quiet, or wants to review communication history before a critical call. Also activates when someone shares call transcripts or email threads and wants to understand underlying resistance signals.
category: sales
tags: [sales, objection-handling, deal-risk, pipeline, communication-analysis]
author: community
---

# Sales Objection Early Warning Detector

This skill analyzes email threads and call notes to surface hidden or recurring objection signals, giving sales reps a chance to address concerns before they kill a deal.

## Detection Workflow

1. **Ingest the material** — Accept raw email threads, call transcripts, or CRM notes as input. Ask for all available touchpoints if only partial data is provided.

2. **Scan for soft signals** — Look for language patterns that indicate hesitation, stalling, or unspoken concerns:
   - Delayed or short responses after previously engaged communication
   - Vague language: "we need to think about it," "not quite there yet," "still evaluating"
   - Scope reduction requests: asking to start smaller, phase things out, or revisit pricing
   - Missing stakeholders: key decision-makers dropping off calls or email threads
   - Repeated questions about the same topic (budget, timeline, integration, security)
   - Competitor name-drops, even casual ones
   - Enthusiasm drop-off compared to earlier messages

3. **Cluster by objection type** — Group signals into categories:
   - **Budget/ROI**: cost concerns, approval delays, finance involvement
   - **Authority**: champion losing influence, new stakeholders appearing
   - **Need**: scope shrinking, use case uncertainty, internal prioritization shifts
   - **Timeline**: delays, vague go-live dates, "after Q[X]" language
   - **Competition**: alternative mentions, feature comparisons, RFP signals
   - **Trust/Risk**: security questions, legal review stalls, reference requests

4. **Assess recurrence and severity** — Flag objections that appear more than once as high-priority. Note if the same concern appears across different contacts or channels.

5. **Map to deal stage** — Consider where the deal is. A budget question in discovery is normal; the same question after a signed SOW is a warning sign.

6. **Generate talking points** — For each flagged objection cluster, produce a specific, non-defensive response strategy the rep can use in the next interaction.

## Output Format

Produce a structured report with the following sections:

**Deal Risk Summary**
- Overall risk level: Low / Medium / High / Critical (1 line rationale)

**Detected Objection Signals**
A table or bulleted list per signal:
- Signal: exact quote or paraphrase from the source material
- Source: email, call note, or transcript (with date if available)
- Objection type: category label
- Recurrence count: how many times this theme appeared
- Severity: Low / Medium / High

**Priority Concerns**
Top 2–3 objections most likely to derail the deal, explained in 2–3 sentences each with supporting evidence from the material.

**Recommended Next Steps**
For each priority concern, one specific action the rep should take before the next interaction (e.g., "Schedule a call with the CFO directly to address ROI timeline — champion has deflected this question twice").

**Suggested Talking Points**
For each priority concern, 2–3 concise, ready-to-use responses the rep can adapt in conversation or email.

Keep the total output scannable. Use plain language. Avoid jargon. The rep should be able to read this in under three minutes and walk into their next call prepared.
