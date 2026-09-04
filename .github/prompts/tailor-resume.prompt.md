---
mode: agent
description: Tailor the resume content for a specific job description while keeping it truthful, ATS-friendly, and concise.
---

# Tailor Resume for a Job Description

Use this prompt when the user wants to adapt the resume for a specific role.

## Goal
Revise the resume content in the workspace so it better matches the target job description without overstating experience or changing the core structure.

## Inputs
- A job description pasted by the user
- The existing resume source in [index.js](../../index.js), [index.html](../../index.html), and [styles.css](../../styles.css)

## Instructions
1. Read the current resume data and structure first.
2. Extract the strongest role-relevant keywords and themes from the job description.
3. Update the resume content to emphasize the most relevant:
   - summary statement
   - skill groups
   - experience bullets
   - technology stack language where appropriate
4. Keep the wording truthful, senior, and ATS-friendly.
5. Preserve the existing resume layout and formatting unless the user explicitly asks for a redesign.
6. Avoid inventing job titles, years of experience, or achievements that are not supported by the current content.

## Output
- A short summary of the tailoring approach
- The updated resume content or the relevant data changes
- Any notable keywords or themes that were emphasized
