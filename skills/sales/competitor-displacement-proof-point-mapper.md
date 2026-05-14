---
name: competitor-displacement-proof-point-mapper
description: >
  Maps verified customer proof points and case study metrics to specific competitor weaknesses to build a targeted displacement argument. Use when someone says "we're losing deals to [competitor]", asks about how to position against a specific rival, or wants to build a competitive takeout strategy. Also activates when a rep needs to justify switching costs or wants to turn customer wins into competitive ammunition.
category: sales
tags: [competitive-intelligence, proof-points, displacement, case-studies, positioning]
author: community
---

# Competitor Displacement Proof Point Mapper

This skill extracts and maps verified customer metrics and case study outcomes to known competitor weaknesses, producing a structured displacement argument a rep can use in a live deal.

## Mapping Workflow

1. **Identify the target competitor**: Confirm which competitor is being displaced. If not specified, ask. Do not proceed with generic output.

2. **Extract competitor weaknesses**: List 3–6 documented or commonly known weaknesses of that competitor across these categories:
   - Product gaps (missing features, poor integrations, scalability limits)
   - Operational pain (slow implementation, poor support, high admin burden)
   - Commercial risk (unpredictable pricing, lock-in, hidden costs)
   - Strategic risk (roadmap uncertainty, vendor stability, M&A exposure)

3. **Collect proof points**: Ask the user to provide available customer evidence, or work with what is supplied. Accept any of: case study PDFs, win/loss notes, customer quotes, ROI data, NPS scores, support ticket reduction stats, time-to-value metrics.

4. **Map proof points to weaknesses**: For each competitor weakness identified, match one or more proof points that directly contradict or expose that weakness. Use this logic:
   - Competitor weakness → "Customers switching from [competitor] report [pain]"
   - Proof point → "[Customer X] achieved [metric] within [timeframe] after switching"
   - Bridge → "This directly addresses the [weakness] that [competitor] cannot solve because [reason]"

5. **Flag unmatched weaknesses**: If a weakness has no proof point coverage, flag it explicitly as a gap. Do not fabricate metrics or invent outcomes.

6. **Assign confidence level**: Rate each mapped pair as High (verified customer data), Medium (anecdotal or anonymized), or Low (industry claim only).

7. **Build the displacement narrative**: Assemble the mappings into a sequenced argument that starts with the prospect's most likely pain point, not the strongest metric.

## Output Format

Produce a structured displacement brief with these sections:

**Target Competitor**: [Name]

**Weakness-to-Proof-Point Map**:
| Competitor Weakness | Proof Point | Source | Confidence |
|---|---|---|---|
| [Weakness description] | [Metric or quote] | [Customer/case study name] | High/Med/Low |

**Coverage Gaps**: List any weaknesses with no supporting proof point and suggest what evidence to gather.

**Displacement Narrative** (3–5 sentences): A sequenced talking track that leads with prospect pain, bridges to competitor failure, and lands on a verified customer outcome. Written for a rep to say out loud, not read from a slide.

**Recommended Proof Point Ask**: One specific customer reference or data request the rep should pull before the next call.

Total output should fit on one page. Use plain language. No jargon the prospect wouldn't already use.
