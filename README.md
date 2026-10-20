# Abdullah Abu Riala | Portfolio

Personal portfolio and online CV of Abdullah Abu Riala, Software Engineer from Bethlehem, Palestine.

**Live:** https://aburiala.vercel.app

Built with [Astro](https://astro.build), TypeScript and Tailwind CSS. Static, no backend, and Lighthouse 100 on performance, accessibility and SEO.

## Features

- One-page home: hero, about, skills, projects, experience, certifications, services and contact
- A case study page for every project, generated from Markdown
- Contact form through [Web3Forms](https://web3forms.com), with client-side validation and a spam honeypot
- Light and dark mode that follows the system and remembers the visitor's choice
- A printable CV (`/cv`) generated from the same data and exported to `public/cv.pdf`
- SEO: meta and Open Graph tags, JSON-LD `Person`, sitemap and robots.txt
- End-to-end tests with Playwright on desktop and mobile, run in GitHub Actions

## Getting started

Requires Node.js 22.22 or newer.

```sh
npm install
cp .env.example .env   # add your Web3Forms access key
npm run dev            # http://localhost:4321
```

| Command            | What it does                                              |
| ------------------ | --------------------------------------------------------- |
| `npm run dev`      | Start the dev server                                      |
| `npm run build`    | Build the static site into `dist/`                        |
| `npm run preview`  | Serve the production build                                |
| `npm run check`    | Type-check Astro files and content schemas                |
| `npm run lint`     | Run ESLint                                                |
| `npm run format`   | Format with Prettier                                      |
| `npm run test:e2e` | Build, serve and run the Playwright tests                 |
| `npm run cv`       | Export `/cv` to `public/cv.pdf` (dev server must run)     |
| `npm run og`       | Regenerate the social preview image `public/og-image.png` |

## Updating content

| To change                              | Edit                               |
| -------------------------------------- | ---------------------------------- |
| Name, summary, links, skills, services | `src/data/site.ts`                 |
| A project (or add one)                 | `src/content/projects/<slug>.md`   |
| Jobs and education                     | `src/content/experience/<slug>.md` |
| Profile photo                          | `src/assets/profile.jpeg`          |

Adding a project is one new Markdown file: copy an existing one, change the frontmatter and text, and it gets a card on the home page and its own page. Images go in `src/assets/projects/`. After changing content, run `npm run cv` so the downloadable CV stays in sync.

## Project structure

```
src/
  components/       UI sections (Hero, Projects, ContactForm, ...)
  content/          Projects and experience as Markdown
  content.config.ts Content schemas (Zod)
  data/site.ts      Personal details and copy
  layouts/          Base layout with SEO tags
  pages/            Home, project pages, CV and 404
scripts/            CV and Open Graph image generators
tests/e2e/          Playwright tests
```

## Deployment

The site deploys to Vercel from the `main` branch. Set `PUBLIC_WEB3FORMS_KEY` in the Vercel project's environment variables. Every pull request gets a preview deployment.

## License

The code is available under the MIT License. The content (text, photos and CV) belongs to Abdullah Abu Riala and may not be reused.
