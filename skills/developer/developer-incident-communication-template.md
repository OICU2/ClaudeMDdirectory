---
name: developer-incident-communication-template
description: >
  Drafts structured incident communication messages for both internal teams and external stakeholders during service disruptions or outages. Use when someone says "we have an outage," asks to "write an incident update," wants to "notify customers about downtime," needs to "draft a status page message," or is "communicating about a service disruption." Automatically classifies severity, summarizes impact, and includes estimated resolution timelines.
category: developer
tags: [incidents, communication, outages, status-pages, on-call]
author: community
---

# Incident Communication Template

This skill drafts clear, structured incident messages for internal and external audiences, applying severity classification and standardized formatting that keeps stakeholders informed without causing unnecessary panic.

## Incident Communication Workflow

1. **Gather incident context** — Ask for or extract: affected service(s), symptoms observed, when it started, how many users/systems are impacted, current status (investigating/identified/monitoring/resolved), and any known cause.

2. **Classify severity** using this rubric:
   - **SEV1 (Critical):** Full outage, all users affected, revenue/data at risk
   - **SEV2 (Major):** Significant degradation, large subset of users affected
   - **SEV3 (Minor):** Partial degradation, workaround available, limited impact
   - **SEV4 (Low):** Cosmetic or negligible impact, most users unaffected

3. **Determine audience** — Internal (engineering, leadership, support team) vs. external (customers, status page, public). Draft both if not specified.

4. **Write internal message first** — Include full technical detail: root cause hypothesis, systems involved, actions taken, who owns the incident, and next update time.

5. **Write external message second** — Strip internal jargon. Focus on user-facing impact, what users can/cannot do, and what is being done. Never speculate on root cause externally.

6. **Set timeline expectations** — If ETR (estimated time to resolution) is unknown, state next update time instead. Never commit to a specific ETR unless confident.

7. **Apply tone calibration:**
   - SEV1/SEV2: Direct, urgent, no hedging
   - SEV3/SEV4: Calm, matter-of-fact, reassuring

## Output Format

Produce two clearly labeled blocks:

---

**INTERNAL INCIDENT COMMUNICATION**
- **Severity:** SEV[1-4] — [one-line rationale]
- **Incident Commander:** [name or TBD]
- **Status:** Investigating | Identified | Monitoring | Resolved
- **Summary:** [2-3 sentences — what is broken, blast radius, business impact]
- **Timeline:**
  - [HH:MM UTC] — Issue first detected
  - [HH:MM UTC] — [action taken or milestone]
- **Root Cause Hypothesis:** [current best theory or "Under investigation"]
- **Actions In Progress:** [bullet list of active remediation steps]
- **Next Update:** [time or trigger condition]
- **War Room / Bridge:** [link or TBD]

---

**EXTERNAL / STATUS PAGE COMMUNICATION**
- **Title:** [Service Name] — [Investigating | Degraded Performance | Outage | Resolved]
- **Posted:** [timestamp or "HH:MM UTC"]

[2-4 sentence message written for end users. Include: what is affected, user-facing symptoms, confirmation that the team is actively working on it, and next update time. No internal jargon, no root cause speculation.]

---

If incident is resolved, append a **Resolution Summary** block with: confirmed root cause, fix applied, duration of impact, and any follow-up actions (postmortem link, preventive measures).
