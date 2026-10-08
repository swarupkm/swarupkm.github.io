---
mode: agent
description: Tailor the resume content for a specific job description while keeping it truthful, ATS-friendly, and concise.
---

# Tailor Resume for a Job Description

Use this prompt when the user wants to adapt the resume for a specific role.

## Goal
Use the current profile as the baseline and generate a tailored resume variant from either a pasted job description or a public job posting link. The tailored version should be more relevant to the target role without overstating experience or changing the core structure.

## Inputs
- A job description pasted by the user
- Or a public job posting URL
- The existing resume source in [index.js](../../index.js), [index.html](../../index.html), and [styles.css](../../styles.css)

## Instructions
1. Read the current resume data and structure first.
2. Treat the current resume as the baseline source that is being tailored, not as a separate generic backup.
3. If the user provides a public link, fetch the relevant job details from the posting and extract the strongest role-relevant keywords and themes from it.
4. If the user provides a pasted job description, use that text directly and extract the strongest role-relevant keywords and themes.
5. Prioritize exact terms and literal job-title language used in the posting; match the exact title when appropriate to the candidate’s background.
6. Update the resume content to emphasize the most relevant:
   - summary statement
   - skill groups
   - experience bullets
   - experience-level technology stack language where appropriate
   - relevant project technologies in the global skill groups, which render under Key Skills; do not add project timeframes or per-project technology-stack blocks
7. Keep the wording truthful, senior, and ATS-friendly.
8. Preserve the existing resume layout and formatting unless the user explicitly asks for a redesign.
9. Avoid inventing job titles, years of experience, or achievements that are not supported by the current content.
10. Favor ATS-safe formatting and parsing rules:
    - keep the resume single-column and simple
    - use standard section headers such as Experience, Education, and Skills
    - avoid tables, icons, emojis, graphics, or decorative elements
    - keep contact info in the visible body of the resume, not in headers or footers
    - use consistent date formatting across the whole resume, preferably Month Year ranges
    - prefer .docx as the safe master format unless the job explicitly requests PDF
11. Focus on high-signal keyword coverage without keyword stuffing:
    - use the most relevant 25-35 role-specific terms naturally in the summary, skills, and bullets
    - prefer exact strings from the posting over synonyms unless the synonym is the actual term the hiring team uses
    - keep terms relevant to the role and supported by actual experience
12. Treat the resume as a search-and-scan document: the goal is visibility, readability, and keyword relevance, not creativity for its own sake.
13. When creating a tailored resume variant, save it as a clearly named file using a company-role shorthand, for example:
    - google-staff-software-engineer.js
    - amazon-sde-2.js
    - meta-platform-engineer.js
    - stripe-finance-engineering.js
    The file name should include a short company code or shorthand and the target role, in lowercase, with hyphen separators.
14. Generate the candidate-facing tailored output set for each variant:
    - a matching DOCX export file with the same company-role shorthand and the current date stamp
    - a matching PDF export file with the same company-role shorthand and the current date stamp
15. Treat the JS source file as optional internal scaffolding only when needed for reproducibility; the primary deliverables are the DOCX and PDF files that will be shared with recruiters or hiring teams.
16. Keep generated artifacts in the project root alongside the base resume files so they are easy to find and review.
17. If a source JS variant is created, it should be consistent with the DOCX/PDF content and use the same company-role shorthand naming.

## Output
- A short summary of the tailoring approach
- The tailored resume content or the relevant data changes
- Any notable keywords or themes that were emphasized
- The generated DOCX and PDF file names for the tailored resume variant
- Optional: the generated source JS file name if it was created for reproducibility
- ATS-specific notes such as exact title matching, section naming, and keyword strategy if relevant
