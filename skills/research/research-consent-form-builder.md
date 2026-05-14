---
name: research-consent-form-builder
description: >
  Generates complete participant consent forms for research studies, including required ethical
  disclosures, data usage terms, and opt-out instructions. Use when someone needs to create an
  informed consent document, wants to write a consent form for their study, asks how participants
  should be informed about research risks, or needs to document data collection agreements for
  human subjects research.
category: research
tags: [research, consent, ethics, IRB, human-subjects]
author: community
---

# Research Consent Form Builder

This skill generates complete, IRB-aligned informed consent forms tailored to a specific research study, including all required disclosures, rights, and data handling terms.

## Consent Form Generation Workflow

1. **Gather study details** — If not provided, ask for: study title, principal investigator name and institution, study purpose, procedures involved, time commitment, compensation (if any), data collected, and funding source.

2. **Identify risk level** — Classify the study as minimal risk or greater than minimal risk based on procedures described. Adjust disclosure language accordingly.

3. **Build the form using these required sections in order:**
   - **Study Title and Investigator Information** — Full title, PI name, institutional affiliation, contact email and phone
   - **Purpose of the Study** — Plain-language explanation of research goals (2–4 sentences, no jargon)
   - **What Participation Involves** — Step-by-step description of procedures, time required, location (in-person/remote)
   - **Risks and Discomforts** — List all foreseeable risks; if minimal, explicitly state "This study involves minimal risk"
   - **Benefits** — Direct benefits to participant (if any) and societal/scientific benefits
   - **Confidentiality and Data Usage** — How data is stored, who can access it, whether it will be shared or published, retention period, de-identification methods
   - **Voluntary Participation and Right to Withdraw** — Statement that participation is voluntary, how to withdraw, and that withdrawal carries no penalty
   - **Opt-Out Instructions** — Specific steps to withdraw consent or request data deletion, including contact method and deadline
   - **Compensation** — Payment amount, timing, and conditions, or state "No compensation is provided"
   - **Contact Information** — PI contact for study questions; IRB or ethics board contact for rights questions
   - **Signature Block** — Lines for participant name (printed), signature, and date; optional line for researcher signature

4. **Apply plain-language standards** — Write at a 8th-grade reading level. Avoid technical terms without definitions. Use second person ("You will be asked to...").

5. **Flag missing information** — If critical details are absent (e.g., data retention policy, IRB approval number), insert clearly marked placeholders: `[INSERT IRB APPROVAL NUMBER]`.

## Output Format

Produce a single, ready-to-use consent form document with:
- **Header**: Study title, version date, page number format (Page 1 of N)
- **Sections**: Each section has a bold heading followed by paragraph or bulleted content
- **Length**: Typically 400–800 words for minimal-risk studies; 600–1200 words for greater-than-minimal-risk studies
- **Signature block**: Formatted as a table or clearly spaced lines at the bottom
- **Format**: Plain text with Markdown formatting (headers with `##`, bold with `**`), suitable for copying into Word or PDF tools
- **Closing note**: One-line reminder to participant to keep a copy of the signed form
