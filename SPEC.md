# Spec: Abdullah Abu Riala — Personal Portfolio

## Objective

A fast, professional personal website that works as an online CV and a contact point.

**Audiences**

1. **Recruiters / hiring managers** (Palestine first, then remote): in under 30 seconds they should see who Abdullah is, his stack, his best projects, and how to reach him or download his CV.
2. **Freelance clients** (restaurants, companies): they should see what he can build for them and send a message.

**User stories**

- As a recruiter, I can read a short summary, scan skills, open a project's details and code, and download the CV.
- As a client, I can see the services offered and send a message through a contact form without leaving the site.
- As Abdullah, I can add or edit a project by editing one Markdown file, then push to GitHub to publish.

**Out of scope (MVP):** blog, Arabic version, custom domain, CMS, backend, WhatsApp button.

## Content (source: `Abdullah CV.pdf`, Oct 2026)

| Section        | Content                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Hero           | Name, "Software Engineer", one-line pitch, photo, buttons: View Projects · Contact Me · Download CV, icons: GitHub, LinkedIn, Email                                                                                                                                                                                                                                                                                                                                                        |
| About          | Summary from CV; Bethlehem, Palestine; B.S. Software Engineering, Bethlehem University (2021–2025); "Open to full-time roles and freelance projects"; languages: Arabic (native), English (professional)                                                                                                                                                                                                                                                                                   |
| Skills         | Languages: Java, PHP, Python, Dart · Backend: Spring Boot, Laravel, REST APIs, JWT, OAuth2, MySQL, Firebase · Frontend: React, TypeScript, HTML/CSS/JS, Tailwind CSS · Mobile: Flutter · Tools: Git, GitHub, Docker, Agile/Scrum, Figma                                                                                                                                                                                                                                                    |
| Projects       | 1. **AuraStride** (graduation project, team) — my part: on-device YOLOv5/TFLite obstacle detection with TTS, GPS campus navigation with voice directions, field testing. Repo: github.com/aabood17/AuraStride · 2. **Palestine Job Finder** — Python automation, bilingual scoring model, GitHub Actions. Repo: github.com/aabood17/palestine-job-finder · 3. **Social Media Platform (Microservices)** — Spring Boot, JWT/OAuth2, React/TS, Figma. Repo: github.com/aabood17/Social-Media |
| Experience     | Full Stack Developer Intern — Element Media (Jun–Sep 2024): Laravel e-commerce, auth/authorization, Agile team. Repo: github.com/Element-Internships/Abdullah_Abu_Riala_Ecommerce                                                                                                                                                                                                                                                                                                          |
| Education      | B.S. Software Engineering — Bethlehem University, Sep 2021 – Dec 2025, with relevant coursework                                                                                                                                                                                                                                                                                                                                                                                            |
| Certifications | Google Prompting Essentials (Coursera, 2026) · AWS Academy Cloud Foundations (2024) · Frontend Development Training — Udemy (2023–2024)                                                                                                                                                                                                                                                                                                                                                    |
| Services       | Business & restaurant websites · Web apps & dashboards · Mobile apps (Flutter)                                                                                                                                                                                                                                                                                                                                                                                                             |
| Contact        | Form (name, email, message) via Web3Forms + email + social links                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Social links   | GitHub (github.com/aabood17) · LinkedIn (linkedin.com/in/aburiala) · Email · Facebook (facebook.com/aabood.17) · Instagram (instagram.com/aabood.17). GitHub + LinkedIn are prominent in the Hero; Facebook + Instagram appear in Contact and the footer.                                                                                                                                                                                                                                  |

Every claim must match the CV. No invented metrics, clients or testimonials.

## Tech Stack

- **Astro** (latest stable at setup, checked via context7) + **TypeScript (strict)**
- **Tailwind CSS v4** via the official Vite plugin; dark/light mode (system default + toggle)
- **Astro Content Collections** with Zod schemas for `projects` and `experience`
- **Web3Forms** for the contact form (free tier), with honeypot spam protection
- `@astrojs/sitemap`, Astro `<Image>` for optimized images
- **Hosting:** Vercel Hobby (free), static output → `https://<name>.vercel.app`
- **Analytics:** Vercel Web Analytics (cookieless)
- Fonts self-hosted via `@fontsource` (no Google Fonts request)

## Commands

```
Install:     npm install
Dev:         npm run dev            # http://localhost:4321
Type check:  npm run check          # astro check
Lint:        npm run lint           # eslint .
Format:      npm run format         # prettier --write .
Build:       npm run build          # outputs dist/
Preview:     npm run preview
E2E tests:   npm run test:e2e       # playwright test (runs against preview build)
```

## Project Structure

```
portfolio/
├─ src/
│  ├─ content/projects/*.md      → one file per project (frontmatter + case study body)
│  ├─ content/experience/*.md    → one file per job / education entry
│  ├─ content.config.ts          → Zod schemas for collections
│  ├─ data/site.ts               → name, links, skills, services, certifications (single source)
│  ├─ components/                → Hero, About, Skills, ProjectCard, Timeline, Services, ContactForm, ThemeToggle, Header, Footer
│  ├─ layouts/BaseLayout.astro   → <head>, SEO, Open Graph, JSON-LD, theme script
│  ├─ pages/index.astro          → one-page home
│  ├─ pages/projects/[slug].astro→ project case study
│  ├─ pages/404.astro
│  ├─ assets/                    → images processed by Astro (photo, project screenshots)
│  └─ styles/global.css          → Tailwind import + design tokens
├─ public/                       → favicon, og-image.png, robots.txt, cv.pdf (no phone number)
├─ tests/e2e/*.spec.ts           → Playwright
├─ .github/workflows/ci.yml      → check + lint + build + e2e on every push/PR
├─ .env.example                  → PUBLIC_WEB3FORMS_KEY=
├─ SPEC.md, README.md
```

## Code Style

- TypeScript strict, Prettier defaults (+ `prettier-plugin-astro`), ESLint `eslint-plugin-astro`.
- Components: `PascalCase.astro`; content files: `kebab-case.md`; one component per section.
- Content and copy live in `src/content` and `src/data/site.ts`, never hard-coded in components.
- Semantic HTML first; client JS only where needed (theme toggle, form submit).

```ts
// src/content.config.ts
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string().max(160),
      role: z.string(), // what *I* did, honestly
      stack: z.array(z.string()),
      cover: image().optional(),
      repo: z.string().url().optional(),
      live: z.string().url().optional(),
      order: z.number(),
      featured: z.boolean().default(true),
    }),
});

export const collections = { projects };
```

## Testing Strategy

- **Static checks:** `astro check` (types + content schemas) and ESLint must pass.
- **E2E (Playwright, Chromium, desktop + mobile viewport):**
  - Home loads; every section heading is visible; nav anchors scroll to sections.
  - Every project card links to a working `/projects/<slug>` page.
  - External links (GitHub, LinkedIn) have correct `href` and `rel="noopener"`.
  - Contact form: empty / invalid email is blocked client-side; a valid submit shows a success message (Web3Forms request mocked with `page.route`).
  - CV download link returns a PDF.
  - Unknown URL renders the 404 page.
- **Lighthouse CI** on the built site (mobile).
- **Manual visual check** in a browser at 375px and 1440px, light and dark.

## Boundaries

- **Always:** run check + lint + build + e2e before committing; commit as Abdullah with his GitHub noreply email; keep content truthful to the CV; scan for secrets and phone numbers before every push.
- **Ask first:** adding a dependency outside this spec; anything that costs money; creating the GitHub repo, pushing, or deploying; changing project descriptions beyond the CV.
- **Never:** commit `.env` or keys; publish the phone number or the original CV PDF; add `Co-Authored-By: Claude` to commits; invent experience, metrics or testimonials.

## Success Criteria

1. Site is live on a free Vercel URL over HTTPS.
2. All sections above render from content files; adding a new `src/content/projects/x.md` adds a card and a page with no code changes.
3. Lighthouse (mobile): Performance ≥ 95, Accessibility = 100, Best Practices ≥ 95, SEO = 100.
4. No horizontal scroll at 320–1920px; works in light and dark mode; keyboard navigable with visible focus.
5. A real message sent from the live form arrives in Abdullah's inbox.
6. Sharing the URL on LinkedIn/WhatsApp shows the OG title, description and image.
7. CI is green on `main`; the public repo contains no secrets and no phone number.

## Open Questions

1. **Profile photo** — no professional photo yet. Plan: Abdullah picks his clearest everyday photo; it is cropped, background removed and color-corrected locally (free, nothing uploaded). The site ships with a clean initials placeholder until the photo is ready.
2. **CV for download** — I'll generate `public/cv.pdf` from the latest CV with the phone number removed. Confirm which file is the source (`Downloads/Abdullah CV.pdf`, dated 2026-10-18, is the newest; `CV - updated.pdf` from CLAUDE.md no longer exists).
3. **Project screenshots** — any images for AuraStride / Social Media? Default: pull from repos if present, otherwise a clean generated cover.
4. **Live demo links** — none known; cards will show only the repo link unless provided.
