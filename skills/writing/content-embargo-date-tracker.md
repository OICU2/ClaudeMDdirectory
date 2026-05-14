---
name: content-embargo-date-tracker
description: >
  Tracks embargo dates for draft content and generates a publish-ready checklist when each piece is cleared for release. Use when someone says "this content is embargoed until," asks to log a release date for a draft, wants to track when a piece can go live, needs to manage a hold on publishing, or wants a checklist for content that's been cleared to publish.
category: writing
tags: [content-management, publishing, editorial, scheduling, drafts]
author: community
---

# Content Embargo Date Tracker

This skill logs embargo dates for draft content pieces and automatically generates a publish-ready checklist when a piece is cleared for release.

## Workflow

1. **Capture embargo details** — When the user mentions an embargoed piece, extract:
   - Content title or working title
   - Embargo lift date and time (including timezone if specified)
   - Content type (article, press release, blog post, social campaign, etc.)
   - Source or owner (who set the embargo)
   - Any special release conditions (e.g., "only after partner announcement goes live")

2. **Log the embargo entry** — Create a structured embargo record using the format in the Output section. If multiple pieces are mentioned, log each separately.

3. **Check for cleared content** — If the user indicates a piece is cleared for release (e.g., "the embargo lifted," "we got the green light," "it's cleared to publish"), switch into checklist generation mode for that piece.

4. **Generate publish-ready checklist** — Produce a final pre-publish checklist tailored to the content type. Include:
   - Final copy review and fact-check confirmation
   - Legal/compliance sign-off verification
   - SEO metadata (title tag, meta description, slug)
   - Images and alt text confirmed
   - Internal links reviewed
   - Distribution channels listed (social, email, syndication)
   - Scheduling or publish action in CMS
   - Stakeholder notification (who to alert at go-live)
   - Post-publish spot check (live URL, formatting, tracking pixels)

5. **Maintain running log** — If the user asks to see all embargoed content, compile all logged entries into a summary table sorted by embargo lift date.

## Output Format

**Embargo Log Entry:**
```
📌 EMBARGOED CONTENT LOG
─────────────────────────────
Title:          [Content title]
Type:           [Article / Press release / Blog / etc.]
Embargo Lifts:  [Date, Time, Timezone]
Set By:         [Source/owner]
Conditions:     [Any special release conditions, or "None"]
Status:         EMBARGOED
─────────────────────────────
```

**Publish-Ready Checklist (generated when cleared):**
```
✅ PUBLISH-READY CHECKLIST — [Content Title]
Embargo Lifted: [Date/Time]
─────────────────────────────
PRE-PUBLISH
[ ] Final copy proofread and approved
[ ] Facts, figures, and quotes verified
[ ] Legal/compliance sign-off confirmed
[ ] SEO title, meta description, and slug finalized
[ ] All images sized, formatted, and alt text added
[ ] Internal and external links tested
[ ] CMS entry complete and formatted correctly

DISTRIBUTION
[ ] Social posts drafted and scheduled for each channel
[ ] Email campaign queued or sent
[ ] Syndication partners notified (if applicable)
[ ] Paid promotion assets ready (if applicable)

GO-LIVE
[ ] Content published and live URL confirmed
[ ] Formatting verified on desktop and mobile
[ ] Analytics/tracking confirmed active
[ ] Key stakeholders notified with live link
[ ] Post-publish performance check scheduled
─────────────────────────────
Status: CLEARED FOR RELEASE
```

**Running Embargo Summary Table (when requested):**

| # | Title | Type | Embargo Lifts | Set By | Status |
|---|-------|------|---------------|--------|--------|
| 1 | [Title] | [Type] | [Date/Time TZ] | [Source] | EMBARGOED / CLEARED |
