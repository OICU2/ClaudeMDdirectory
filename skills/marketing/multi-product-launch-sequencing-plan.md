---
name: multi-product-launch-sequencing-plan
description: >
  Designs a sequenced launch calendar when multiple products or features are ready simultaneously, balancing audience attention, channel capacity, and revenue priority. Use when someone says "we have too many things launching at once," asks how to prioritize multiple product releases, or wants to avoid cannibalizing their own launches. Also activates when a team needs to stagger announcements, coordinate a release roadmap, or sequence feature drops for maximum impact.
category: marketing
tags: [product-launch, go-to-market, launch-calendar, sequencing, release-planning]
author: community
---

# Multi-Product Launch Sequencing Plan

This skill creates a prioritized, conflict-free launch calendar when multiple products or features are competing for the same audience attention, marketing channels, and team bandwidth simultaneously.

## Launch Sequencing Workflow

### 1. Inventory All Pending Launches
Collect and document every product, feature, or initiative ready to launch. For each item capture:
- Internal code name and public-facing name
- Target audience segment
- Primary revenue impact (high / medium / low) and whether it's new revenue or retention
- Required marketing channels (email, paid, social, PR, in-app)
- Estimated team effort to execute launch (days of marketing/comms bandwidth)
- Hard deadlines (contractual, seasonal, competitive) vs. flexible windows

### 2. Score Each Launch on Four Axes
Rate each launch 1–5 on:
- **Revenue Priority**: Direct ARR impact or strategic importance
- **Audience Urgency**: How time-sensitive is this for the buyer (seasonal peak, competitor pressure)?
- **Execution Complexity**: How many channels, assets, and approvals are required?
- **Dependency Risk**: Does another launch depend on this one shipping first?

Calculate a weighted score: (Revenue × 2) + Urgency + (Complexity inversely, so lower complexity = higher score) + Dependency. Rank launches highest to lowest.

### 3. Identify Conflicts and Cannibalization Risks
Flag any two launches that share:
- The same primary audience segment (competing for attention in the same inbox/feed)
- The same high-effort channel within a 7-day window (e.g., two hero email campaigns)
- Overlapping PR cycles or media pitches
- The same sales team focus or demo script

Mark conflicts as RED (must separate by 2+ weeks), YELLOW (can overlap with channel isolation), or GREEN (safe to run in parallel).

### 4. Apply Sequencing Rules
- **Anchor launches first**: Schedule the highest-revenue, lowest-complexity launch in the earliest available clean window.
- **Minimum spacing**: RED conflicts require 14-day separation. YELLOW conflicts require different primary channels or different audience segments.
- **Recovery buffer**: After any major launch, reserve 5 business days before the next announcement for support load, sales follow-up, and team reset.
- **Batch small launches**: Group low-complexity, same-audience updates into a single "product update" release to conserve channel capacity.
- **Protect seasonal windows**: Never schedule two launches in the 2 weeks before a known high-revenue period (e.g., Q4 close, annual conference).

### 5. Assign Channel Ownership Per Window
For each launch slot, specify:
- Which channels are allocated exclusively to this launch
- Which channels are blacked out for other launches during this window
- Which channels can run supporting (non-hero) content for other initiatives simultaneously

### 6. Validate the Sequence
Before finalizing, check:
- No single team member owns hero execution on two concurrent launches
- Email list fatigue: no segment receives more than 2 launch emails in 7 days
- Sales team has a clear "lead message" — only one launch is the primary sales conversation at a time
- The sequence tells a coherent product narrative (launches build on each other where possible)

## Output Format

Produce the following three artifacts:

**1. Launch Priority Ranking Table**
A markdown table with columns: Launch Name | Audience | Revenue Priority | Urgency | Complexity | Conflict Risk | Recommended Slot

**2. Sequenced Launch Calendar**
A week-by-week timeline (minimum 6 weeks, extend as needed) showing:
- Week number and date range
- Launch name scheduled in that window
- Primary channels activated
- Channels blacked out for other launches
- Buffer periods labeled explicitly

Format as a markdown table
