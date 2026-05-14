---
name: research-vendor-contract-risk-scanner
description: >
  Analyzes research vendor contracts to identify data ownership clauses, exclusivity terms, and confidentiality gaps that could compromise study integrity or intellectual property rights. Use when someone shares a vendor contract for review, asks about research data rights, wants to evaluate a CRO or lab services agreement, or needs to check if a vendor agreement protects their study data. Also activates when someone says they're signing a contract with a research vendor or worries about who owns their study results.
category: research
tags: [contracts, risk-assessment, data-ownership, research-compliance, vendor-management]
author: community
---

# Research Vendor Contract Risk Scanner

This skill systematically reviews research vendor contracts to surface data ownership risks, exclusivity traps, and confidentiality weaknesses that could compromise study integrity or institutional IP rights.

## Risk Scanning Workflow

**Step 1: Extract and Categorize Key Clauses**
- Identify all clauses related to: data ownership, IP assignment, publication rights, confidentiality, exclusivity, data retention, and termination
- Flag any clause that transfers rights away from the researcher or institution
- Note missing clauses — the absence of explicit data ownership language is itself a risk

**Step 2: Assess Data Ownership Risks**
- Who owns raw data, processed data, and derived insights after contract ends?
- Does the vendor claim any license to use study data for their own purposes (e.g., training models, benchmarking, resale)?
- Are there carve-outs that allow the vendor to retain data post-termination?
- Check for "work for hire" language and confirm it favors the researcher, not the vendor

**Step 3: Evaluate Exclusivity Terms**
- Identify any exclusivity obligations — geographic, temporal, or methodological
- Flag exclusivity that prevents the researcher from working with competing vendors or replicating the study
- Check if exclusivity is mutual or one-sided
- Assess whether exclusivity terms extend beyond the study period

**Step 4: Identify Confidentiality Gaps**
- Confirm there is a mutual NDA or confidentiality clause protecting study protocols, hypotheses, and preliminary findings
- Check if confidentiality obligations survive contract termination and for how long
- Identify permitted disclosures — does the vendor have the right to disclose data to subcontractors, affiliates, or regulators without consent?
- Flag any "residuals" clause that allows vendor staff to use information retained in memory

**Step 5: Review Publication and Reporting Rights**
- Does the researcher retain unilateral right to publish findings?
- Can the vendor delay, veto, or require review of publications?
- Are there sponsor approval clauses that could suppress unfavorable results?

**Step 6: Flag Termination and Data Return Provisions**
- What happens to data if the contract is terminated early?
- Is there a defined data return or destruction process with timeline?
- Who bears cost of data transfer upon termination?

**Step 7: Score and Prioritize Risks**
- Assign each identified risk a severity: **Critical / High / Medium / Low**
- Critical = could result in loss of IP, blocked publication, or regulatory noncompliance
- High = significant negotiation leverage lost or study integrity at risk
- Medium = unfavorable but manageable terms
- Low = minor ambiguity or administrative gaps

## Output Format

Produce a structured **Contract Risk Report** with the following sections:

---

**CONTRACT RISK REPORT**
*Vendor:* [Vendor name if provided]
*Contract Type:* [e.g., CRO Agreement, Lab Services, Data Licensing]
*Review Date:* [Today's date]

---

**Executive Summary**
2–3 sentences summarizing overall risk level and the top 2–3 concerns requiring immediate attention.

**Risk Findings Table**

| Risk Area | Clause/Section | Issue | Severity | Recommended Action |
|---|---|---|---|---|
| Data Ownership | §X.X | [Specific issue] | Critical | [Specific fix] |
| Exclusivity | §X.X | [Specific issue] | High | [Specific fix] |
| Confidentiality | Missing | [Gap description] | High | [Add clause language] |

**Missing Clauses Checklist**
List any standard protective clauses that are absent, with a one-line description of why each matters.

**Negotiation Priorities**
