---
name: service-request-source-classification-map
description: >
  Categorizes inbound service requests by origination channel, request type, and requester role to surface volume patterns and routing inefficiencies. Use when someone says "we're getting too many requests from one channel," asks about where service requests are coming from, wants to understand who is submitting the most tickets, needs to identify bottlenecks in request routing, or wants to map out request intake patterns. Produces a structured classification map with actionable routing recommendations.
category: operations
tags: [service-requests, classification, routing, operations, intake-analysis]
author: community
---

# Service Request Source Classification Map

This skill analyzes inbound service request data to classify requests by channel, type, and requester role, then identifies volume patterns and routing inefficiencies for operational improvement.

## Classification Workflow

1. **Gather Input Data**
   - Ask for a sample of service requests (paste raw data, export, or describe the dataset)
   - Confirm the time period being analyzed (last 30 days, quarter, etc.)
   - Identify available fields: submission channel, request category, requester name/role/department

2. **Classify by Origination Channel**
   - Assign each request to exactly one channel: Email, Portal/Self-Service, Phone, Slack/Chat, Walk-In, API/Integration, or Unknown
   - Flag requests with ambiguous or missing channel data separately

3. **Classify by Request Type**
   - Group requests into functional categories: Access & Permissions, Hardware/Equipment, Software Support, Information Request, Incident Report, Onboarding/Offboarding, Compliance/Audit, or Other
   - Merge similar categories if volume is low (fewer than 5% of total)

4. **Classify by Requester Role**
   - Tag each request with requester role tier: Executive, Manager, Individual Contributor, External Vendor, or System/Automated
   - Note department or team if available

5. **Identify Volume Patterns**
   - Calculate request count and percentage share per channel, type, and role
   - Flag any single category exceeding 30% of total volume as a concentration risk
   - Identify the top 3 channel-type-role combinations by volume (the "dominant request profiles")

6. **Identify Routing Inefficiencies**
   - Flag requests that arrived via a non-preferred channel for their type (e.g., access requests submitted by email instead of portal)
   - Identify role groups consistently bypassing self-service channels
   - Note request types with high mismatch between intake channel and resolution team

7. **Generate Recommendations**
   - For each identified inefficiency, produce one specific corrective action (redirect, automation, training, policy change)

## Output Format

Produce the following sections in order:

**Summary Line**
One sentence: total requests analyzed, time period, and top finding.

**Classification Map Table**
Markdown table with columns: Channel | Request Type | Requester Role | Count | % of Total

Sort by Count descending. Include a totals row.

**Dominant Request Profiles**
Numbered list of top 3 channel-type-role combinations with count and a one-sentence interpretation of what each pattern suggests operationally.

**Volume Pattern Flags**
Bullet list of any concentration risks or anomalies. Each bullet: metric, threshold breached, and implication.

**Routing Inefficiency Log**
Table with columns: Inefficiency | Affected Volume | Likely Cause | Recommended Fix

**Priority Actions**
Numbered list of up to 5 specific actions ranked by estimated impact. Each action: what to do, who owns it, and what outcome to expect.
