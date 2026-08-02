<div align="center">

# Nidhin S — Portfolio

### Agentic AI Engineer · Multi-Agent Systems · RAG Pipelines · Generative AI

[![Live Site](https://img.shields.io/badge/live%20site-nidhin--1908.github.io-2563EB?style=for-the-badge&logo=googlechrome&logoColor=white)](https://nidhin-1908.github.io/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-nidhin--s--ai-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/nidhin-s-ai/)
[![Email](https://img.shields.io/badge/Email-nidhinshibu01%40gmail.com-06B6D4?style=for-the-badge&logo=gmail&logoColor=white)](mailto:nidhinshibu01@gmail.com)

![Last Commit](https://img.shields.io/github/last-commit/NiDHiN-1908/nidhin-1908.github.io?style=flat-square&color=7C3AED&label=last%20updated)
![Repo Size](https://img.shields.io/github/repo-size/NiDHiN-1908/nidhin-1908.github.io?style=flat-square&color=2563EB)
![Made with](https://img.shields.io/badge/made%20with-HTML%20·%20CSS%20·%20JS-06B6D4?style=flat-square)
![No Framework](https://img.shields.io/badge/framework-none%20%28zero%20build%29-050816?style=flat-square)

</div>

<br>

<div align="center">
  <em>A single-file, dark-theme portfolio built to show — not just tell — what production AI engineering looks like:<br>
  multi-agent orchestration, retrieval-augmented generation, and applied computer vision.</em>
</div>

<br>

---

## 📋 Contents

| | | |
|---|---|---|
| [✨ Overview](#-overview) | [🧩 Sections](#-sections) | [🛠️ Tech Stack](#️-tech-stack) |
| [📂 Structure](#-project-structure) | [🚀 Running Locally](#-running-locally) | [☁️ Deployment](#️-deployment) |
| [✍️ Updating Content](#️-updating-content) | [📬 Contact](#-contact) | |

---

## ✨ Overview

This repo is the source for my personal portfolio — built to showcase real, documented engineering work rather than a generic template. Every project on the site links to a public GitHub repo, every metric is one I can defend in an interview, and every "work in progress" is labeled as exactly that.

**Design system:** dark navy base (`#050816`) with a blue → purple → cyan gradient identity (`#2563EB` · `#7C3AED` · `#06B6D4`), glassmorphism cards, and a canvas-rendered node-graph animation in the hero — a visual metaphor for the multi-agent systems the site is built to showcase.

<br>

## 🧩 Sections

<table>
<tr><td width="140"><b>Hero</b></td><td>Animated node-graph canvas, headline, CTAs, social links</td></tr>
<tr><td><b>About</b></td><td>Background, career journey (full-stack → agentic AI), core values</td></tr>
<tr><td><b>Skills</b></td><td>Grouped by category — AI/ML, LLM providers, web/backend, databases, DevOps, automation</td></tr>
<tr><td><b>Experience</b></td><td>Full career timeline, including operational roles included transparently for employment continuity</td></tr>
<tr><td><b>Projects</b></td><td>Four expandable case studies — see below</td></tr>
<tr><td><b>Impact Metrics</b></td><td>Consolidated, animated key numbers across all projects</td></tr>
<tr><td><b>AI Expertise</b></td><td>RAG, LangGraph, CrewAI, vector databases, prompt engineering, local LLM deployment</td></tr>
<tr><td><b>Certifications / Education</b></td><td>Timeline-style cards</td></tr>
<tr><td><b>GitHub</b></td><td>Repo highlights and stats</td></tr>
<tr><td><b>Contact</b></td><td>Working form (FormSubmit) + direct links</td></tr>
</table>

<br>

<details>
<summary><b>🗂️ Featured Projects — click to expand</b></summary>
<br>

| Project | Status | Highlights |
|---|---|---|
| **[VyaparAI](https://github.com/NiDHiN-1908/VyaparAI)** — *flagship* | Live demo (WIP) | 11-agent CrewAI suite + LangGraph state machine; RAG-based lead capture; multi-lingual (5 languages) automated video pipeline |
| **[RAGNoviq](https://github.com/NiDHiN-1908/ragnoviq-enterprise-rag-assistant)** | Live | FAISS-backed enterprise RAG pipeline with cited, grounded LLM responses |
| **[ID Forgery Detector](https://github.com/NiDHiN-1908/id-document-forgery-detection)** | Complete | OpenCV + EasyOCR document authentication; 95%+ confidence scoring, 75% faster review |
| **[TalentOS AI](https://github.com/NiDHiN-1908/TalentOS_AI)** | 🔨 Building now | Agentic HR platform — hybrid .NET 9 + Python/LangGraph architecture |

</details>

<br>

## 🛠️ Tech Stack

<div align="left">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Google Fonts](https://img.shields.io/badge/Google%20Fonts-4285F4?style=flat-square&logo=googlefonts&logoColor=white)
![No Build Step](https://img.shields.io/badge/build%20step-none-lightgrey?style=flat-square)

</div>

Zero dependencies, zero build tooling — one self-contained `index.html`:

- **HTML5 / CSS3** — custom design-token system (CSS variables), glassmorphism, responsive down to 560px
- **Vanilla JavaScript** — `IntersectionObserver` scroll-reveal, animated counters, 3D tilt on skill cards, magnetic buttons, custom cursor, canvas node-graph animation, case-study accordions
- **Inline SVG icon set** — no external icon CDN, so nothing breaks if a third-party script goes down
- **Fonts:** Space Grotesk (display) · Inter (body) · JetBrains Mono (tags/data)
- **Contact form:** [FormSubmit](https://formsubmit.co/) — no backend required

<br>

## 📂 Project Structure

```
├── index.html      # entire site — markup, styles, and scripts in one file
└── README.md       # you are here
```

Everything lives in one file by design — this is a static portfolio meant to deploy with zero build tooling, directly on GitHub Pages.

<br>

## 🚀 Running Locally

No installation needed.

```bash
# open directly
open index.html          # macOS
start index.html         # Windows
```

Or serve it locally to test exactly as it deploys:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

<br>

## ☁️ Deployment

Deployed via **GitHub Pages**, serving directly from `main`.

```bash
git add index.html
git commit -m "Update portfolio"
git push
```

Live within ~1 minute of pushing — no CI/CD pipeline needed.

<br>

## ✍️ Updating Content

All content lives directly in `index.html` as plain HTML — search for the relevant `<section id="...">` block (`hero`, `about`, `skills`, `experience`, `projects`, `expertise`, `certifications`, `education`, `github`, `contact`) to edit. No CMS, no data files, no build pipeline to break.

<br>

## 📬 Contact

<div align="center">

[![Email](https://img.shields.io/badge/-nidhinshibu01%40gmail.com-050816?style=flat-square&logo=gmail&logoColor=06B6D4)](mailto:nidhinshibu01@gmail.com)
[![LinkedIn](https://img.shields.io/badge/-linkedin.com/in/nidhin--s--ai-050816?style=flat-square&logo=linkedin&logoColor=06B6D4)](https://www.linkedin.com/in/nidhin-s-ai/)
[![GitHub](https://img.shields.io/badge/-github.com/NiDHiN--1908-050816?style=flat-square&logo=github&logoColor=06B6D4)](https://github.com/NiDHiN-1908)
[![Portfolio](https://img.shields.io/badge/-nidhin--1908.github.io-050816?style=flat-square&logo=googlechrome&logoColor=06B6D4)](https://nidhin-1908.github.io/)

</div>

<br>

<div align="center">
<sub>Built and maintained by Nidhin S · Kerala, India · Open to Remote</sub>
</div>
