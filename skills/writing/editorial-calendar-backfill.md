---
name: editorial-calendar-backfill
description: >
  Analyzes a content archive to surface high-value update and expansion opportunities, then produces a prioritized editorial backfill plan. Use when someone says "our blog needs fresh content," asks about filling gaps in a publishing schedule, wants to audit old articles for rewrites, needs to plan evergreen content updates, or is trying to stretch existing content into a fuller calendar.
category: writing
tags: [editorial, content-strategy, content-calendar, seo, blogging]
author: community
---

# Editorial Calendar Backfill

This skill reviews an existing content archive and generates a ranked, actionable list of evergreen updates, rewrites, and topic expansions to fill scheduling gaps in a publishing calendar.

## Workflow

1. **Inventory the archive** — Collect titles, publish dates, URLs (if available), and brief topic summaries from the provided content list. If no archive is given, prompt the user to paste titles, describe their niche, and specify their publishing cadence.

2. **Identify scheduling gaps** — Map existing content against the target calendar frequency (daily, weekly, bi-weekly). Flag periods with no published content or thin coverage.

3. **Classify each existing piece** into one of four buckets:
   - **Evergreen update** — Strong topic, outdated facts or stats; refresh and republish
   - **Expansion candidate** — Thin post under ~600 words on a high-interest topic; develop into pillar content
   - **Rewrite** — Poor structure, weak angle, or off-brand voice; rebuild from scratch with same keyword target
   - **Retire** — Low relevance, duplicate, or irrecoverable; remove or redirect

4. **Score each opportunity** using three criteria (1–5 scale each):
   - **Audience value** — How much will readers benefit from updated or expanded content?
   - **Effort to produce** — How much work is required? (5 = minimal, 1 = heavy lift)
   - **Calendar urgency** — How large is the gap this fills?
   - Compute a **priority score** = Audience Value + Effort + Urgency

5. **Generate new topic expansions** — For each major theme in the archive with fewer than three posts, suggest one original topic that fills a logical gap (use "what," "how," "why," or "vs." framing where appropriate).

6. **Map everything to a calendar grid** — Assign each task (update, rewrite, expansion, new topic) to a specific publish slot, respecting the user's stated cadence and any blackout dates they provide.

## Output Format

Produce three sections:

**Section 1 — Archive Audit Table**
A markdown table with columns: `Title | Type (Update/Expand/Rewrite/Retire) | Priority Score | Rationale (1 sentence)`
Sort by Priority Score descending.

**Section 2 — New Topic Suggestions**
A numbered list of 3–8 original topic ideas not currently in the archive. Each entry includes:
- Proposed headline
- Target theme/cluster it belongs to
- One-sentence justification

**Section 3 — Backfill Calendar**
A markdown table with columns: `Publish Slot | Content Title | Task Type | Estimated Word Count | Notes`
Fill slots in chronological order. Include a brief note on any slot that required a judgment call.

Keep the full output scannable. Avoid prose paragraphs in the tables. Flag any assumptions made about cadence or audience if the user did not specify them.
