---
name: related-party-transaction-disclosure-builder
description: >
  Identifies and formats required disclosures for transactions between affiliated entities to meet audit and regulatory standards. Use when someone says "we have intercompany transactions to disclose," asks about related party reporting requirements, wants to document transactions with affiliated entities, needs to prepare audit documentation for insider dealings, or is building financial statement footnotes for related party activity.
category: finance
tags: [related-party, disclosure, audit, regulatory-compliance, financial-reporting]
author: community
---

# Related Party Transaction Disclosure Builder

This skill extracts, structures, and formats complete regulatory disclosures for transactions between affiliated entities, ensuring compliance with ASC 850, IAS 24, and applicable SEC or audit requirements.

## Disclosure Identification and Build Workflow

**Step 1: Identify the Parties Involved**
- Confirm the reporting entity's name and fiscal period
- List all related parties: subsidiaries, parent companies, key management personnel (KMP), board members, significant shareholders (>10%), and entities controlled by KMP or board members
- Flag any newly identified relationships not previously disclosed

**Step 2: Categorize Each Transaction**
Classify transactions into standard types:
- Sales/purchases of goods or services
- Loans, advances, or guarantees
- Lease arrangements
- Management fees or shared services
- Equity transactions or capital contributions
- Asset transfers or licensing agreements

**Step 3: Extract Required Data Points per Transaction**
For each transaction, collect:
- Nature of the relationship
- Description of the transaction
- Dollar amount (current period and prior period comparative)
- Outstanding balances (receivable/payable) at period end
- Terms and conditions (pricing methodology, interest rates, due dates)
- Whether terms are equivalent to arm's-length market rates
- Settlement method (cash, offset, deferred)

**Step 4: Apply the Relevant Disclosure Standard**
- **ASC 850 (US GAAP):** Require description, dollar amounts, amounts due to/from, and elimination policy in consolidation
- **IAS 24 (IFRS):** Require KMP compensation breakdown (short-term, post-employment, share-based), outstanding balances, and commitments
- **SEC Regulation S-K Item 404:** Apply for transactions exceeding $120,000 involving directors, officers, or >5% shareholders
- **Audit standard (AS 2410 / ISA 550):** Flag transactions that may indicate fraud risk indicators or non-arm's-length pricing

**Step 5: Draft the Disclosure Language**
- Write in formal financial statement footnote style
- State the relationship, describe the transaction, quantify amounts, and disclose terms
- Include a statement on whether pricing was at arm's length or on what basis it was determined
- Add management's assertion if required by the applicable standard

**Step 6: Flag Incomplete or High-Risk Items**
- Mark any transaction missing pricing methodology with [NEEDS PRICING JUSTIFICATION]
- Mark any transaction with no prior-period comparatives with [COMPARATIVE DATA REQUIRED]
- Mark any undocumented guarantee or informal arrangement with [REQUIRES WRITTEN AGREEMENT]
- Flag transactions that may require board or audit committee approval

## Output Format

Produce a structured disclosure package with the following sections:

---

**RELATED PARTY TRANSACTION DISCLOSURES**
*[Entity Name] | [Fiscal Period Ending]*

**1. Related Party Relationships**
Table listing each related party, their relationship to the reporting entity, and basis for classification.

**2. Transaction Disclosures**
One block per transaction containing:
- Transaction ID (auto-numbered)
- Related party name and relationship
- Transaction type
- Description (2–4 sentences in footnote language)
- Current period amount | Prior period amount
- Period-end balance outstanding
- Terms and pricing basis
- Applicable standard reference

**3. Compliance Checklist**
Checkbox list confirming coverage of each required element under the stated standard (ASC 850, IAS 24, or SEC 404).

**4. Action Items**
Bulleted list of all flagged items requiring additional documentation, approval, or management response before disclosure is finalized.

---

Length: Scale to number of transactions — one block per transaction, no minimum or maximum. Use tables for multi-transaction summaries. All monetary amounts in the entity's functional currency with explicit labeling.
