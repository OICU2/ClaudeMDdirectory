---
name: writing-permissions-checklist
description: >
  Audits a piece of content for any third-party material that may require licensing, attribution, or formal permissions, then generates a structured checklist of action items for each identified element. Use when someone says "check my content for copyright issues," asks about "what needs attribution in this piece," or wants to "get permissions for material in my article." Also triggers when someone asks "do I need to license this," wants to "audit my draft for third-party content," or says "help me figure out what I can legally use."
category: writing
tags: [copyright, permissions, attribution, licensing, content-audit]
author: community
---

# Writing Permissions Checklist

This skill audits submitted content for third-party material requiring licensing, attribution, or permissions requests, and produces a prioritized action checklist for each identified item.

## Audit Workflow

1. **Scan for third-party material types** — Review the submitted content line by line for:
   - Direct quotes from books, articles, speeches, interviews, or websites
   - Song lyrics, poem excerpts, or literary passages
   - Statistics, data, or research findings from external sources
   - Images, illustrations, charts, or graphs described or embedded
   - Trademarked names, logos, or branded slogans used in a non-nominative way
   - Code snippets with identifiable licenses (MIT, GPL, proprietary, etc.)
   - Screenshots or UI reproductions of software or platforms
   - Film, TV, or podcast dialogue or transcripts

2. **Classify each item by risk level**:
   - 🔴 **High** — Likely requires explicit written permission (song lyrics, long literary quotes, proprietary software UI, non-free licensed code)
   - 🟡 **Medium** — May qualify for fair use but attribution is mandatory (short quotes, statistics, research data, news excerpts)
   - 🟢 **Low** — Public domain or Creative Commons material; attribution required but permission likely not needed

3. **Identify the rights holder** — For each item, determine or note:
   - Original author or creator
   - Publisher, label, or distributor (if applicable)
   - Known license type (if determinable)
   - Where to locate the official permissions or licensing contact

4. **Apply fair use considerations** — Flag whether the use is likely transformative, educational, commercial, or verbatim, and note how that affects the permissions need.

5. **Generate checklist entries** — For each flagged item, produce a discrete action item with all relevant details.

## Output Format

Produce the following structure:

---

### Permissions Audit: [Content Title or "Submitted Content"]

**Summary:** X items flagged — Y high priority, Z medium, W low.

---

#### Checklist

- [ ] 🔴 **[Item label, e.g., "Lyric quote — 'Bohemian Rhapsody'"]**
  - **Location in content:** [paragraph/line reference]
  - **Rights holder:** Queen / Sony Music Publishing
  - **Action required:** Obtain written sync/print license before publication
  - **Contact/resource:** [licensing body or URL if known]
  - **Deadline sensitivity:** High — do not publish without clearance

- [ ] 🟡 **[Item label, e.g., "Statistic — Pew Research 2023 survey"]**
  - **Location in content:** [paragraph/line reference]
  - **Rights holder:** Pew Research Center
  - **Action required:** Add inline citation; confirm republication terms at pewresearch.org/about/use-policy
  - **Contact/resource:** permissions@pewresearch.org
  - **Deadline sensitivity:** Medium — citation required; explicit permission likely not needed for single stat

- [ ] 🟢 **[Item label, e.g., "Photo — Unsplash, listed as CC0"]**
  - **Location in content:** [paragraph/line reference]
  - **Rights holder:** [Photographer name]
  - **Action required:** Add attribution per Unsplash guidelines even though license is permissive
  - **Contact/resource:** unsplash.com/license
  - **Deadline sensitivity:** Low

---

**Next Steps:**
1. Resolve all 🔴 items before any publication or distribution.
2. Add all required attributions to a credits or references section.
3. Keep records of permissions
