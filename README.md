# Nidhin S — Portfolio

Personal portfolio site for **Nidhin S**, Agentic AI Engineer specializing in multi-agent systems, RAG pipelines, and generative AI.

**Live site:** [nidhin-1908.github.io](https://nidhin-1908.github.io/)

---

## About

A single-page, dark-theme portfolio built to showcase production AI engineering work — multi-agent orchestration (CrewAI, LangGraph), retrieval-augmented generation, and applied computer vision — alongside a full-stack development background (ASP.NET, C#, SQL Server).

## Sections

- **Hero** — animated node-graph canvas (representing a multi-agent orchestration graph), headline, CTAs, social links
- **About** — background, career journey, core values
- **Skills** — grouped by category (AI/ML, LLM providers, web/backend, databases, DevOps, automation)
- **Experience** — full career timeline, including two industrial-operations roles included transparently for employment continuity
- **Projects** — four case studies with expandable details (Problem, Solution, Architecture, Tech Stack, Engineering Challenges, Results):
  - **VyaparAI** (flagship) — 11-agent CrewAI + LangGraph multi-agent marketing/sales platform
  - **RAGNoviq** — enterprise RAG pipeline with FAISS + cited LLM responses
  - **ID Forgery Detector** — OpenCV/EasyOCR document authentication service
  - **TalentOS AI** *(in development)* — agentic HR platform on a hybrid .NET 9 + Python/LangGraph architecture
- **Impact Metrics** — consolidated, animated key numbers across all projects
- **AI Expertise** — RAG, LangGraph, CrewAI, vector databases, prompt engineering, local LLM deployment
- **Certifications**, **Education**, **GitHub** (repo highlights), **Contact** (working form via FormSubmit)

## Tech

Single self-contained file — no build step, no framework, no dependencies to install:

- **HTML5 / CSS3** — custom design system (CSS variables for color/spacing), glassmorphism, responsive grid layouts down to 560px
- **Vanilla JavaScript** — scroll-reveal via `IntersectionObserver`, animated counters, 3D tilt on skill cards, magnetic buttons, custom cursor, canvas-based node-graph animation, case-study accordions
- **Inline SVG icon set** — no external icon library/CDN dependency (avoids third-party script failures)
- **Fonts:** Space Grotesk (display), Inter (body), JetBrains Mono (tags/data) via Google Fonts
- **Contact form:** [FormSubmit](https://formsubmit.co/) — no backend required

## Project Structure

```
├── index.html      # entire site — markup, styles, and scripts in one file
└── README.md
```

Everything lives in `index.html` by design — this is a static portfolio meant to deploy with zero build tooling, directly on GitHub Pages.

## Running Locally

No installation needed. Either:

```bash
# open directly
open index.html          # macOS
start index.html         # Windows
```

or serve it locally to test relative behavior exactly as it deploys:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deployment

This repo is deployed via **GitHub Pages**, serving directly from `main`. To update the live site:

1. Edit `index.html`
2. Commit and push to `main`
3. GitHub Pages rebuilds automatically — changes are live within ~1 minute

## Updating Content

All content (experience, projects, skills, etc.) lives directly in `index.html` as plain HTML — search for the relevant `<section id="...">` block to edit. No CMS, no data files, no build pipeline to break.

## Contact

- **Email:** nidhinshibu01@gmail.com
- **LinkedIn:** [linkedin.com/in/nidhin-s-ai](https://www.linkedin.com/in/nidhin-s-ai/)
- **GitHub:** [github.com/NiDHiN-1908](https://github.com/NiDHiN-1908)

---

*Built and maintained by Nidhin S.*
