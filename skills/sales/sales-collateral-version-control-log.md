---
name: sales-collateral-version-control-log
description: >
  Creates a structured log that tracks which version of sales decks, one-pagers, and case studies each prospect or account received and when. Use when someone says "I need to track what we sent to prospects," asks about which deck version a client has seen, or wants to log sales material distribution across accounts. Also triggers when someone needs to audit collateral versions before a follow-up call or wants to standardize how the team records what was shared and with whom.
category: sales
tags: [sales, collateral, version-control, tracking, prospects]
author: community
---

# Sales Collateral Version Control Log

This skill generates and maintains a structured log that records exactly which version of every sales asset was sent to each prospect or account, including timestamps, sender, and delivery method.

## Log Entry Workflow

1. **Capture the account details**: Collect prospect/account name, primary contact name, contact email, and account owner or rep name.

2. **Record the collateral item**: Identify the asset type (sales deck, one-pager, case study, proposal, ROI calculator, etc.), the specific file name, and the version number or date stamp (e.g., v2.3, Q1-2024, Jan_15_Final).

3. **Log delivery context**: Record the date sent, delivery method (email, shared link, in-meeting screen share, physical print, portal upload), and the specific meeting or touchpoint it was tied to (e.g., "Discovery Call #2," "Follow-up after demo").

4. **Note any customization**: Flag whether the asset was the standard version or a customized variant (e.g., "logo swapped," "custom ROI numbers inserted," "competitor slide removed"). If customized, note which elements were changed.

5. **Add status and next steps**: Mark whether the prospect has acknowledged receipt, opened the asset (if trackable), or requested a revision. Note which version supersedes a prior one if the prospect received an update.

6. **Check for conflicts**: Before logging a new entry, scan existing entries for the same account to flag if they have an outdated version in their hands and whether a re-send is needed.

## Output Format

Produce a log table with the following columns, followed by a plain-text summary section:

**Log Table (Markdown):**

| Date Sent | Account Name | Contact | Asset Name | Version | Asset Type | Delivery Method | Customized? | Customization Notes | Sent By | Status | Supersedes |
|---|---|---|---|---|---|---|---|---|---|---|---|

Populate each row with the provided details. Leave cells blank rather than writing "N/A" to keep the log clean.

**Summary Block (below the table):**
- Total assets sent to this account: [count]
- Most recent version in prospect's hands: [asset name + version]
- Outdated versions still in circulation: [list or "None"]
- Action required: [e.g., "Re-send updated one-pager v3.1 to replace v2.0 shared on Nov 3"]

If building a log for multiple accounts at once, produce one table covering all accounts sorted by date sent descending, followed by a per-account summary block for each account that has more than one entry.
