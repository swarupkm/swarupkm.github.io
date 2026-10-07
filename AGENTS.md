# AGENTS.md

This file provides guidance to AI agents when working with code in this repository.

## Project overview

This is `swarupkm.github.io`, a GitHub Pages user site that renders a single resume page. There is no build step, bundler, package manager, linter, or test suite — it's plain HTML/CSS/JS served as-is by GitHub Pages from `master`.

## Commands

**Run locally** — any static file server works, e.g.:
```
python3 -m http.server 8000
# then open http://localhost:8000/index.html
```

**Regenerate the PDF resume** (`SwarupMahapatra_Resume_September.pdf`) after any content or print-style change — it is a build artifact produced by printing the page, not hand-edited, and is not tracked in git:
```
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu \
  --no-pdf-header-footer \
  --print-to-pdf="SwarupMahapatra_Resume_September.pdf" \
  http://localhost:8000/index.html
```
To export from the page, click **Download PDF** beside **Download DOCX**; this opens the browser's Print dialog. Select "Save as PDF" to save the resume, using the existing `print.css` layout. Disable the browser's own "Headers and footers" (the page supplies its own via `print.css`), and enable "Background graphics" (required for the accent colors and tech-pill backgrounds in `print.css`, which set `print-color-adjust: exact`).

## Architecture

**Data-driven rendering, no templating engine.** `index.html` is a static skeleton of empty containers (`.profile-name`, `.all-experiences`, `.key-skills-list`, etc.). All resume content lives in a single object, `baseProfileData`, at the top of [index.js](index.js). On `DOMContentLoaded`, `loadProfileData()` deep-clones it into `currentResumeData` and `renderResumeData()` populates the DOM imperatively (`document.createElement`/`textContent`) via a set of `render*` functions (`renderContact`, `renderEducation`, `renderSkills`, `renderExperiences`, `renderATSPreHeader`). To change resume content, edit `baseProfileData` — never edit the PDF or hand-write DOM elsewhere.

**Two stylesheets, two audiences.** `styles.css` is the on-screen look. `print.css` (loaded via `<link media="print">`) is applied only when printing/exporting to PDF and re-shapes the layout specifically for ATS (Applicant Tracking System) parsing:
- `.ats-pre-header` in `index.html` is a hidden-on-screen, plain-text block (name/role/contact, no icons) that `renderATSPreHeader()` fills in. It's placed first in the DOM specifically so it's first in the PDF's text stream regardless of Chrome's visual compositing order; `print.css` then hides the icon-heavy `.profile-header` so this plain block is what actually appears.
- `print.css` reflows the two-column screen layout (`.content-columns` with `.left`/`.right`) into a single column via `flex-direction: column` + `order`, putting Experience before Education/Skills — because a single-column reading order is what ATS parsers handle reliably, multi-column layouts often scramble text extraction order.
- When changing `print.css` layout/order rules, verify the *extracted text order* of the regenerated PDF still matches the intended visual order (open the PDF and check copy-pasted/selected text), not just how it looks.

**Experience and project technologies.** An experience entry in `baseProfileData.experiences` can have a top-level `techStack` and a nested `projects[]` array. In `renderExperiences()` ([index.js](index.js)), each project is rendered with a `Project: {name} | {client}` heading and summary bullets; project durations and per-project technology-stack blocks are not rendered. Put relevant project technologies in the global `skills` groups, which render under Key Skills. Experience-level `techStack` values remain supported and render after the projects list with an `"Also used across engagements:"` label (`.tech-stack-label`) when the experience has projects.

## Tailoring the resume for a job description

[.github/prompts/tailor-resume.prompt.md](.github/prompts/tailor-resume.prompt.md) documents the intended workflow for adapting content to a specific job posting: extract role-relevant keywords/themes from the JD, then update the summary, skill groups, experience bullets, and tech-stack wording in `baseProfileData` to emphasize them — without inventing titles, years of experience, or achievements, and without changing the overall layout/structure unless explicitly asked.
