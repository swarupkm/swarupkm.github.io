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
3. Get the job description: if the user provides a public link, fetch the job details from the posting; if they paste the job description, use that text directly.
4. Parse the posting as an ATS would before rewriting anything. Extract every keyword, skill, and requirement the system will scan for, grouped as:
   - job title and title variants
   - hard skills, tools, languages, platforms, and methodologies
   - domain and industry terms
   - soft skills and leadership signals
   - qualifications such as years of experience, education, and certifications
   Mark each term as must-have or nice-to-have, based on how the posting phrases it ("required" vs "preferred", repetition, placement).
5. Score the baseline match rate: the percentage of extracted terms already present in the current resume (exact string or the posting's own wording), and list the terms that are missing.
6. Review positioning before rewriting:
   - **Identity framing:** check whether the headline title and summary present the candidate as the kind of professional this posting hires (for example builder vs. manager vs. consultant), and reframe them toward that identity where the experience truthfully supports it.
   - **Buried credentials:** find strong, relevant credentials, wins, or technologies that appear only deep in older roles or late bullets, and move them up into the summary, skills, or the first bullets of the role.
7. Prioritize exact terms and literal job-title language used in the posting; match the exact title when appropriate to the candidate’s background. Rewrite bullets to mirror the posting's language naturally while keeping the candidate's real accomplishments.
8. Update the resume content to emphasize the most relevant:
   - summary statement
   - skill groups
   - experience bullets
   - experience-level technology stack language where appropriate
   - relevant project technologies in the global skill groups, which render under Key Skills; do not add project timeframes or per-project technology-stack blocks
9. Keep the wording truthful, senior, and ATS-friendly. Keep the summary short: 2-3 sentences, no longer than the baseline summary (~60 words).
10. Preserve the existing resume layout and formatting unless the user explicitly asks for a redesign.
11. Avoid inventing job titles, years of experience, or achievements that are not supported by the current content.
12. Favor ATS-safe formatting and parsing rules:
    - keep the resume single-column and simple
    - use standard section headers such as Experience, Education, and Skills
    - avoid tables, icons, emojis, graphics, or decorative elements
    - keep contact info in the visible body of the resume, not in headers or footers
    - use consistent date formatting across the whole resume, preferably Month Year ranges
    - prefer .docx as the safe master format unless the job explicitly requests PDF
13. Focus on high-signal keyword coverage without keyword stuffing:
    - use the most relevant 25-35 role-specific terms naturally in the summary, skills, and bullets
    - prefer exact strings from the posting over synonyms unless the synonym is the actual term the hiring team uses
    - keep terms relevant to the role and supported by actual experience
14. Treat the resume as a search-and-scan document: the goal is visibility, readability, and keyword relevance, not creativity for its own sake.
15. When creating a tailored resume variant, save it as a clearly named file using a company-role shorthand, for example:
    - google-staff-software-engineer.js
    - amazon-sde-2.js
    - meta-platform-engineer.js
    - stripe-finance-engineering.js
    The file name should include a short company code or shorthand and the target role, in lowercase, with hyphen separators.
16. Generate the candidate-facing tailored output set for each variant:
    - a matching DOCX export file with the same company-role shorthand and the current date stamp
    - a matching PDF export file with the same company-role shorthand and the current date stamp
17. Treat the JS source file as optional internal scaffolding only when needed for reproducibility; the primary deliverables are the DOCX and PDF files that will be shared with recruiters or hiring teams.
18. Keep generated artifacts in the project root alongside the base resume files so they are easy to find and review.
19. If a source JS variant is created, it should be consistent with the DOCX/PDF content and use the same company-role shorthand naming.
20. Before generating the DOCX and PDF exports, run the Review checklist below against the tailored content and fix anything that fails.

## Review checklist
Review the tailored resume as the hiring manager for the target role would:
- **6-second test:** the top third of the first page (name, title, summary) must show the current role, total years of experience, and the two or three strongest wins that matter for this posting. If a recruiter stopped reading there, they should already know why the candidate fits.
- **Impact over responsibilities:** each experience bullet should state an outcome, not a duty. Prefer "action + what changed + measurable result" (scale, latency, cost, revenue, team size, delivery time). Use only numbers and results already supported by `baseProfileData` or confirmed by the user, and never invent metrics. If a bullet has no supported number, state the concrete outcome in words.
- **Tailored to the posting:** the most relevant experience and skills for this job description come first within each section, and bullets that don't help this application are cut back or removed rather than kept as filler.
- **Consistency:** job titles, company names, dates, years-of-experience claims, and technology names agree across the summary, experience, skills, DOCX, and PDF, with no conflicting numbers or date formats.
- **Match rate:** re-score the tailored resume against the same extracted term list used for the baseline score, and confirm every must-have term the experience truthfully supports is now present.
- **Keyword stuffing:** read the summary and bullets as a human reviewer would, and flag any phrase where a posting term is forced in (repeated terms, keyword lists inside sentences, terms that don't fit what the bullet describes). Rewrite each flagged phrase naturally or drop the term.
- **Actionable gaps:** list in the output any requirement in the posting that the resume can't truthfully cover, so the user can decide whether to add supporting detail.

## Output
- A short summary of the tailoring approach
- The tailored resume content or the relevant data changes
- The ATS keyword extraction: every extracted term, grouped by category and marked must-have or nice-to-have
- Before/after match rate, with the terms still missing after tailoring
- Positioning changes: how the identity framing changed and which buried credentials were moved up
- Keyword-stuffing flags: each forced phrase found and how it was rewritten
- Any notable keywords or themes that were emphasized
- The generated DOCX and PDF file names for the tailored resume variant
- Optional: the generated source JS file name if it was created for reproducibility
- ATS-specific notes such as exact title matching, section naming, and keyword strategy if relevant
- Review checklist results: what changed to pass the 6-second test, bullets rewritten for impact, and any requirements from the posting the resume can't truthfully cover
