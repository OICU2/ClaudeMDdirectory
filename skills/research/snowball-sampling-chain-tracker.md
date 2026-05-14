---
name: snowball-sampling-chain-tracker
description: >
  Maps referral chains in snowball sampling studies to detect over-representation of specific
  network clusters and flag potential sampling bias. Use when someone is analyzing snowball
  sampling data, worried about referral chain bias, asking whether their sample is skewed toward
  a particular social cluster, trying to visualize who referred whom in qualitative research,
  or wants to audit network diversity in their participant pool.
category: research
tags: [snowball-sampling, network-analysis, sampling-bias, qualitative-research, referral-chains]
author: community
---

# Snowball Sampling Chain Tracker

Tracks referral chains across snowball sampling waves to identify cluster over-representation, isolate dominant network nodes, and surface potential sampling bias before analysis begins.

## Chain Mapping & Bias Detection Workflow

### 1. Ingest Referral Data
- Accept participant data in any format: table, CSV description, list, or narrative
- Required fields: participant ID, referrer ID (or "seed" for wave 0), wave number
- Optional but valuable: demographic group, community/organization affiliation, geographic location

### 2. Build the Chain Structure
- Reconstruct referral trees from seed nodes outward by wave
- Identify all unique chains (seed → wave 1 → wave 2 → ...)
- Flag chains with unusual depth (>4 waves) or unusual branching (>5 referrals from one node)

### 3. Detect Cluster Over-Representation
- Group participants by shared affiliation, demographic, or referrer origin
- Calculate what percentage of the total sample each cluster accounts for
- Flag any cluster exceeding 25% of the sample as potentially over-represented
- Identify "hub nodes" — participants who referred 3+ others — as potential bias sources

### 4. Measure Chain Diversity
- Count how many independent seed nodes exist and what share of the final sample each produced
- Calculate the Herfindahl-Hirschman Index (HHI) across chains if data supports it; otherwise use a simple proportion table
- Note whether demographic or network diversity decreases in later waves (a common snowball artifact)

### 5. Flag Bias Risks
Apply these specific checks:
- **Homophily collapse**: Are later waves drawn from a narrower demographic than earlier waves?
- **Single-chain dominance**: Does one referral chain account for >40% of participants?
- **Dead branches**: Are any seeds or sub-nodes producing zero referrals, limiting coverage?
- **Reciprocal referrals**: Did any two participants refer each other (indicates a tight clique)?

### 6. Recommend Corrective Actions
Based on flags, suggest:
- Recruiting additional seeds from underrepresented networks
- Capping referrals per participant (e.g., max 3)
- Stratifying analysis by chain origin as a robustness check
- Acknowledging specific bias risks in the limitations section

## Output Format

Produce a structured report with these sections:

**Chain Map Summary**
- Total participants, waves, and seeds
- ASCII or text-based tree showing referral structure (up to 15 nodes; summarize larger sets)

**Cluster Representation Table**
| Cluster/Affiliation | Count | % of Sample | Flag |
|---|---|---|---|
| [name] | [n] | [%] | Over-represented / OK |

**Hub Node List**
- Participant IDs with referral counts ≥ 3, and the sub-network they generated

**Bias Risk Summary**
- Bulleted list of triggered flags with one-sentence explanation each
- Overall bias risk level: Low / Moderate / High with one-line rationale

**Recommended Actions**
- 2–4 specific, prioritized steps the researcher can take now

Length: concise — aim for one readable page. Expand the cluster table and chain map only as data complexity requires.
