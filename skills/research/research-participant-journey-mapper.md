---
name: research-participant-journey-mapper
description: >
  Maps the complete experience of a research participant from first contact through debrief, identifying friction points, protocol gaps, and participant burden across all study phases. Use when someone says "walk me through what a participant experiences," asks about participant drop-off or attrition, wants to audit their study protocol for participant experience issues, needs to identify where consent or data collection breaks down, or is designing a new study and wants to stress-test the participant flow.
category: research
tags: [ux-research, participant-experience, protocol-design, journey-mapping, friction-analysis]
author: community
---

# Research Participant Journey Mapper

This skill produces a structured stage-by-stage map of a research participant's full experience, surfacing friction points, protocol gaps, and burden hotspots so researchers can improve retention, consent quality, and data integrity.

## Mapping Workflow

**Step 1: Gather Study Context**
Ask the researcher for the following before mapping (or infer from provided materials):
- Study type (lab, remote, longitudinal, survey, ethnographic, clinical, etc.)
- Recruitment channel(s) and screening criteria
- Compensation model and session count
- Any known drop-off points or complaints from prior runs
- IRB or ethics constraints that shape the protocol

**Step 2: Map Each Stage**
Document the participant experience across these five canonical stages:

1. **Recruitment**
   - How participants first encounter the study (ad, email, registry, snowball)
   - Screening process: length, medium, response time, eligibility communication
   - Scheduling: tool used, flexibility, confirmation and reminder cadence
   - Friction flags: unclear eligibility, long screening, no response loop

2. **Consent**
   - Delivery method (paper, e-sign, verbal, online form)
   - Reading level and length of consent document
   - Opportunity to ask questions
   - Confirmation that consent is informed, not coerced
   - Friction flags: walls of legal text, time pressure, no questions invited

3. **Pre-Session Preparation**
   - Instructions sent to participant (clarity, timing, format)
   - Technical setup required (software, device, location)
   - Reminder communications
   - Friction flags: last-minute instructions, missing access credentials, tech burden on participant

4. **Data Collection**
   - Session structure from participant perspective (not researcher perspective)
   - Task cognitive load and duration
   - Rest breaks, check-ins, and opt-out reminders
   - Emotional or sensitive content exposure
   - Friction flags: sessions running over time, unclear task instructions, no breaks in long sessions

5. **Debrief and Offboarding**
   - Debrief completeness (purpose explained, questions answered, deception revealed if applicable)
   - Compensation delivery: timing, method, reliability
   - Follow-up communication: what participants receive after
   - Friction flags: no debrief, delayed payment, ghosting after session ends

**Step 3: Score Participant Burden**
For each stage, rate participant burden on three dimensions:
- **Time burden** (Low / Medium / High)
- **Cognitive burden** (Low / Medium / High)
- **Emotional burden** (Low / Medium / High)

**Step 4: Identify Protocol Gaps**
Flag any stage where:
- Participant has incomplete information to proceed
- Researcher assumes participant capability or context not confirmed
- No fallback exists if participant encounters a problem
- Ethical obligation (informed consent, right to withdraw, debrief) is unclear or missing

**Step 5: Generate Recommendations**
For each identified friction point or gap, provide one specific, actionable fix. Prioritize by impact on data quality and participant welfare.

## Output Format

Produce a structured journey map with the following sections:

---

**Study Overview**
One-paragraph summary of the study type, population, and session structure as understood.

**Stage-by-Stage Journey Map**
For each of the five stages:
- `Stage Name`
- `Participant Experience`: 3–6 bullet points describing what the participant actually does and feels
- `Burden Rating`: Time / Cognitive / Emotional (Low / Medium / High)
- `Friction Points`: Bulleted list of specific problems identified (or "None identified")
- `Protocol Gaps`: Specific missing elements (or "None identified")

**Friction Hotspot Summary**
A ranked list (highest to lowest impact
