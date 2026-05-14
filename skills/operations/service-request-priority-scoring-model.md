---
name: service-request-priority-scoring-model
description: >
  Builds a weighted scoring framework to consistently prioritize incoming service requests based on urgency, impact, and resource availability. Use when someone says "we need to prioritize our support queue," asks about ranking service tickets objectively, wants to reduce bias in how requests get handled, needs a system to triage incoming work fairly, or is struggling with inconsistent prioritization decisions across teams.
category: operations
tags: [prioritization, service-management, scoring, triage, operations]
author: community
---

# Service Request Priority Scoring Model

This skill constructs a weighted, repeatable scoring model that assigns numeric priority scores to incoming service requests so teams can triage work consistently and transparently.

## Scoring Framework Construction

1. **Gather context** — Ask the user for: types of service requests they handle, existing SLAs or response time commitments, team size and capacity constraints, and any stakeholder groups or customer tiers that affect urgency.

2. **Define scoring dimensions** — Build the model around these five core dimensions (adjust weights based on user context):
   - **Urgency** (0–10): How time-sensitive is the request? Does delay cause active harm or revenue loss?
   - **Business Impact** (0–10): How many users, systems, or processes are affected?
   - **Customer/Stakeholder Tier** (0–10): Does the requester have an elevated SLA, contract status, or strategic importance?
   - **Resource Availability** (0–10): Is the required skill, tool, or personnel currently accessible?
   - **Request Complexity** (0–10): Inversely scored — simpler requests score higher to reward quick wins.

3. **Assign weights** — Default weight distribution (must total 100%):
   - Urgency: 30%
   - Business Impact: 25%
   - Customer/Stakeholder Tier: 20%
   - Resource Availability: 15%
   - Request Complexity: 10%

   Adjust weights if the user identifies overriding priorities (e.g., all enterprise customers must be weighted higher).

4. **Calculate the Priority Score** — Apply the formula:
   ```
   Priority Score = (Urgency × 0.30) + (Impact × 0.25) + (Tier × 0.20) + (Resources × 0.15) + (Complexity × 0.10)
   ```
   Score range: 0–10. Map scores to priority bands:
   - **Critical (8–10):** Respond within 1 hour
   - **High (6–7.9):** Respond within 4 hours
   - **Medium (4–5.9):** Respond within 1 business day
   - **Low (0–3.9):** Respond within 3 business days

5. **Build the scoring rubric** — For each dimension, define what scores of 1–3, 4–6, and 7–10 look like in plain language so any team member can score consistently without ambiguity.

6. **Handle tie-breaking** — When two requests share the same score, default tie-breaker order is: Urgency score → Customer Tier → submission timestamp (oldest first).

7. **Validate with real examples** — Ask the user to provide 3–5 actual past requests. Score them using the model and verify the output matches their intuitive priority ranking. Recalibrate weights if results feel off.

8. **Document override conditions** — Define explicit scenarios where the scoring model is bypassed (e.g., system outage affecting all users, executive escalation, regulatory deadline).

## Output Format

Produce the following artifacts:

**1. Scoring Model Summary Table**
A markdown table listing each dimension, its weight, scoring range, and a three-tier rubric description (Low / Medium / High criteria).

**2. Priority Score Calculator Template**
A filled-in example showing how to score a single request across all five dimensions, calculate the weighted total, and map it to a priority band with a recommended response time.

**3. Scoring Rubric Document**
Plain-language descriptions for each score band (1–3, 4–6, 7–10) for every dimension so any team member can apply scores consistently.

**4. Calibration Results**
A table showing the user's 3–5 sample requests scored through the model, with the resulting priority band and a note on whether it matched expected prioritization.
