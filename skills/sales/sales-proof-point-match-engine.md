---
name: sales-proof-point-match-engine
description: >
  Analyzes a prospect's profile and surfaces the most relevant customer case studies, proof points, and social proof to support a sales conversation. Use when someone says "find me a customer story for this prospect," asks about which case studies to use, or wants to match proof points to a specific deal. Also triggers when a rep says "what references do we have for this industry" or "help me find relevant wins for this account."
category: sales
tags: [case-studies, proof-points, social-proof, prospect-matching, sales-enablement]
author: community
---

# Sales Proof Point Match Engine

This skill matches the right customer case studies, ROI data, and proof points to a specific prospect based on their industry, company size, and pain points, so reps always lead with the most relevant evidence.

## Matching Workflow

1. **Gather prospect context** — Collect the following before matching:
   - Industry / vertical (e.g., fintech, healthcare, manufacturing)
   - Company size (employee count or revenue band)
   - Stated pain points or business challenges
   - Deal stage and persona being addressed (e.g., economic buyer, end user)
   - Any known competitors or alternatives the prospect is evaluating

2. **Ask if no context is provided** — If the rep hasn't supplied the above, prompt with:
   - "What industry is this prospect in?"
   - "What size is the company?"
   - "What problems or goals did they mention on the call?"

3. **Rank proof points by relevance** — Score each available case study or proof point across three dimensions:
   - **Industry match** (exact match > adjacent > broad horizontal)
   - **Size match** (same tier > one tier up/down > any size)
   - **Pain point match** (direct quote or metric addressing their challenge > general outcome)

4. **Select top 3 matches** — Return the three highest-scoring proof points. For each one, extract:
   - Company name and industry
   - Company size
   - The specific pain point or challenge they faced
   - The measurable outcome achieved (e.g., "reduced churn by 22%," "cut onboarding time from 6 weeks to 9 days")
   - A one-line narrative hook the rep can use in conversation

5. **Flag gaps** — If no strong match exists for a dimension, explicitly note it (e.g., "No exact-industry match found — closest is adjacent vertical X") so the rep can set expectations.

6. **Suggest usage context** — For each proof point, recommend where it fits best:
   - Cold outreach vs. discovery call vs. proposal/demo
   - Which persona it resonates with most
   - Whether it counters a specific competitor

## Output Format

Return a structured response with three clearly labeled sections:

---

**Top Proof Point Matches for [Prospect Name / Company]**

**Match 1 — [Customer Name] ([Industry], [Size])**
- Pain point addressed: [1 sentence]
- Outcome achieved: [specific metric or result]
- Relevance score: Industry ✅ / Size ✅ / Pain Point ✅ (or ⚠️ if partial)
- Conversation hook: "[1–2 sentence script the rep can say out loud]"
- Best used: [stage] with [persona]

**Match 2 — [Customer Name] ([Industry], [Size])**
[same structure]

**Match 3 — [Customer Name] ([Industry], [Size])**
[same structure]

---

**Gaps / Caveats:**
[Bullet list of any weak matches, missing data, or caveats the rep should know]

**Suggested Next Step:**
[One sentence — e.g., "Send Match 1 as a one-pager in your follow-up email and reference Match 2 verbally if they push back on ROI."]

---

Keep the full output under 400 words. Use plain language the rep can read in 60 seconds before a call.
