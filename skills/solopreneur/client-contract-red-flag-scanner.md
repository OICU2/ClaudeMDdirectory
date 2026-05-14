---
name: client-contract-red-flag-scanner
description: >
  Analyzes client contracts to surface unfavorable clauses that solo operators commonly overlook around payment terms, IP ownership, liability exposure, and termination rights. Use when someone says "can you review this contract," asks about whether a client agreement looks fair, wants to know what they're signing, needs help understanding contract terms, or shares a freelance or service agreement for feedback.
category: solopreneur
tags: [contracts, legal, client-management, freelance, risk]
author: community
---

# Client Contract Red Flag Scanner

This skill reviews client contracts and service agreements to identify clauses that could harm a solo operator's cash flow, intellectual property rights, legal liability, or ability to exit the relationship.

## Scanning Workflow

1. **Parse the full contract** before flagging anything — read all sections including schedules, exhibits, and appendices where harmful terms are often buried.

2. **Check payment terms** for these specific red flags:
   - Net-60 or longer payment windows without late payment penalties
   - "Payment upon client satisfaction" or subjective approval clauses
   - Clawback provisions or milestone reversion rights
   - Client's right to withhold payment pending unrelated disputes

3. **Check IP ownership clauses** for:
   - Work-for-hire language that transfers all rights including pre-existing tools, frameworks, or methods
   - Overly broad "derivative works" definitions that capture your reusable assets
   - Perpetual royalty-free licenses granted to the client with no reciprocal restrictions
   - Missing carve-outs for your background IP or proprietary processes

4. **Check liability and indemnification** for:
   - Uncapped indemnification obligations (you cover client's legal costs with no ceiling)
   - Consequential damages clauses that expose you to lost profits claims
   - One-sided indemnification (you indemnify them but they don't indemnify you)
   - Personal liability language that pierces entity protection

5. **Check termination terms** for:
   - Termination-for-convenience clauses with no kill fee or minimum notice
   - Non-payment of work completed upon termination
   - Post-termination non-compete or non-solicitation clauses that are overly broad
   - Auto-renewal clauses with short cancellation windows

6. **Check miscellaneous traps**:
   - Exclusivity clauses that prevent you from working with similar clients
   - Governing law in a distant or unfavorable jurisdiction
   - Mandatory arbitration with cost-shifting provisions
   - Unilateral contract modification rights granted to the client

7. **Assign a risk tier to each flag**: High (negotiate or walk away), Medium (negotiate if possible), Low (be aware but generally acceptable).

## Output Format

Produce a structured report with the following sections:

**Contract Red Flag Report**

- **Overall Risk Level**: [Low / Medium / High / Critical] with a one-sentence summary

- **Red Flags Found**: A numbered list where each entry includes:
  - Flag title (e.g., "Uncapped Indemnification")
  - Risk tier: High / Medium / Low
  - Exact quote or section reference from the contract
  - Why it's a problem in plain language (1–2 sentences)
  - Suggested fix or negotiation language (1 sentence)

- **Missing Protections**: List any standard clauses that are absent but should be present (e.g., no late payment penalty, no limitation of liability cap, no IP carve-out for background IP)

- **Recommended Next Steps**: 3–5 prioritized action items the person should take before signing

Keep the tone direct and practical. Avoid legal disclaimers that obscure the actual advice. Flag when a situation warrants consulting a lawyer, but still provide the substantive analysis.
