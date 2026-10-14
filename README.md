# IIT Madras BS — Machine Learning Practice (MLP) Notes

A responsive, static study-notes website designed to be hosted on GitHub Pages. It follows the January 2026 MLP portal sequence supplied for this project: Course Introduction, Week 0, Weeks 1–12, mock material, supplementary contents, exam answer key and Kaggle peer review.

## Features

- Separate pages for Week 0 through Week 12
- Responsive layout with course sidebar and per-page table of contents
- Detailed topic notes, key definitions, practice prompts and selected code/formula examples
- Light/dark theme toggle
- Browser-local module completion tracker
- Print / Save as PDF button
- MathJax rendering for equations
- No build step, framework, backend or package installation required
- GitHub Pages compatible

## Run locally

Open `index.html` in a browser. For a local static server, from this folder run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a GitHub repository, for example `iitm-mlp-notes`.
2. Upload the contents of this folder to the repository root (so `index.html` is at the root).
3. Open **Settings → Pages**.
4. Under build and deployment, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Wait for GitHub Pages to publish the site.

## Project structure

```text
MLP_GitHub_Notes/
├── index.html
├── styles.css
├── script.js
├── README.md
└── weeks/
    ├── week0.html
    ├── week1.html
    ├── ...
    └── week12.html
```

## Notes on syllabus accuracy

This repository is a supplementary learning guide, not an official IIT Madras publication. The weekly headings follow the portal sequence supplied by the learner. The provided portal excerpt showed Week 0–12 headings but not the lesson titles inside the collapsed weeks. Detailed subtopics are organized as a study syllabus using the prior syllabus outline and general ML practice knowledge. Week 8 is explicitly labelled as an integrated revision module because its exact lesson list was not visible in the supplied excerpt. Always use the current course portal and official grading policy for examinable scope and assessment rules.

## Contributing

Suggested additions: lecture-specific notes, diagrams, tested notebook links, assignment reflections written in your own words, and viva questions. Keep the content accurate, cite external resources you add, and never upload restricted assessment answers or private course material without permission.

## License

No license is imposed by this starter repository. Add a license file if you want to grant explicit reuse permissions.
