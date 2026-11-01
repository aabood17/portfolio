// Content of the downloadable CV (/cv → public/cv.pdf).
// Copied word for word from Abdullah's official CV (Documents\CV\Abdullah_Abu_Riala_CV.html, Nov 2026).
// The only change: no phone number. Keep it in sync with the CV itself, not with the site copy.

export interface CvLink {
  label: string;
  href: string;
}

export interface CvEntry {
  title: string;
  subtitle?: string;
  period?: string;
  bullets: string[];
  link?: CvLink;
}

export const cv = {
  summary:
    "Software Engineer with a B.S. from Bethlehem University who builds and ships full-stack products. Most recently delivered a live bilingual (Arabic/English) QR menu and website for a paying restaurant client, owning every step from requirements to deployment and owner training. Hands-on with Java/Spring Boot, PHP/Laravel, React/Next.js and Flutter, and uses AI-assisted development to deliver faster.",

  experience: [
    {
      title: "Freelance Full-Stack Developer",
      subtitle: "Bunduq Restaurant & Cafe, Bethlehem",
      period: "Oct 2026 – Nov 2026",
      bullets: [
        "Delivered a live bilingual (Arabic RTL / English) QR menu and website for a paying client, end to end.",
        "Built a static Next.js + TypeScript site on Cloudflare Pages with a Sanity CMS dashboard, so the owner updates 117 items, prices and photos himself; each publish goes live in about a minute.",
        "Set up CI with GitHub Actions (secret scanning, type checks, linting, Vitest unit tests) and strict security headers, keeping running costs to the domain only (~$39/year).",
      ],
      link: { label: "bunduq.ps", href: "https://bunduq.ps" },
    },
    {
      title: "Full Stack Developer Intern",
      subtitle: "Element Media",
      period: "Jun 2024 – Sep 2024",
      bullets: [
        "Built and shipped a full-stack e-commerce app with Laravel, MySQL and Blade: catalog, checkout, order tracking.",
        "Implemented secure authentication and authorization to protect user accounts and restrict admin-only actions.",
        "Worked within an Agile team, participating in sprint planning and code reviews to deliver features on schedule.",
      ],
      link: { label: "Code", href: "https://github.com/Element-Internships/Abdullah_Abu_Riala_Ecommerce" },
    },
  ] satisfies CvEntry[],

  projects: [
    {
      title: "AuraStride — AI Navigation App for the Visually Impaired (Graduation Project)",
      bullets: [
        "Team project: a Flutter app that guides visually impaired students around campus with voice directions.",
        "Built the object detection: on-device YOLOv5 (TensorFlow Lite) on the live camera, announcing obstacles by voice.",
        "Built the campus navigation: GPS, Google Maps and step-by-step voice directions, controlled by speech commands.",
        "Field-tested the app in real-world conditions and tested and debugged the detection and navigation code.",
      ],
      link: { label: "Code", href: "https://github.com/aabood17/aurastride" },
    },
    {
      title: "Palestine Job Finder — Automated Job Search & Email Reports",
      bullets: [
        "Python automation that gathers local IT jobs (Jobs.ps, Foras) and remote jobs (JSearch API) into ranked email reports.",
        "Keyword-based scoring (English and Arabic) rates each job 0–100 and filters out expired, senior and US-only roles.",
        "Runs on GitHub Actions with deduplication, fault-tolerant sources and API keys stored in GitHub Secrets.",
      ],
      link: { label: "Code", href: "https://github.com/aabood17/palestine-job-finder" },
    },
    {
      title: "Social Media Platform (Microservices)",
      bullets: [
        "Team of 3 (Microservices course): a social platform with secure authentication, real-time messaging and notifications.",
        "Backend: Java, Spring Boot, JWT, OAuth2, SSL. Frontend: React and TypeScript.",
        "Refactored the application into a microservices architecture and designed the UI in Figma.",
      ],
      link: { label: "Code", href: "https://github.com/S24-SWER313/project-404" },
    },
  ] satisfies CvEntry[],

  skills: [
    { label: "Programming", value: "Java, PHP, Python, Dart, TypeScript, JavaScript" },
    { label: "Backend", value: "Spring Boot, Laravel, REST APIs, JWT, OAuth2, MySQL, Firebase" },
    { label: "Frontend & Mobile", value: "React, Next.js, HTML/CSS, Tailwind CSS, Sanity CMS, Flutter" },
    {
      label: "Tools & Practices",
      value: "Git, GitHub Actions (CI/CD), Docker, Cloudflare Pages, Vitest, Agile/Scrum, Figma",
    },
    { label: "AI Tools", value: "AI-assisted development (Claude Code), Prompt Engineering" },
    { label: "Languages", value: "Arabic (Native), English (Professional Working Proficiency)" },
  ],

  education: [
    {
      title: "B.S. in Software Engineering",
      subtitle: "Bethlehem University",
      period: "Sep 2021 – Dec 2025",
      bullets: [
        "Coursework: Data Structures & Algorithms, OOP, Databases, Software Testing, Web Development, SOA, Design Patterns.",
      ],
    },
  ] satisfies CvEntry[],

  certifications: [
    {
      text: "Google Prompting Essentials Specialization — Google Career Certificates, Coursera (2026)",
      link: {
        label: "View certificate",
        href: "https://www.coursera.org/account/accomplishments/specialization/Z4NLH1SIVZBU",
      },
    },
    {
      text: "AWS Academy Cloud Foundations — AWS Academy (2024)",
      link: {
        label: "View badge",
        href: "https://www.credly.com/badges/712905ea-62d7-442a-9557-a41e4d95169b/public_url",
      },
    },
    { text: "Frontend Development Training (React, Flutter, Figma) — Udemy (2023–2024)" },
  ] as { text: string; link?: CvLink }[],

  other: [
    "Restaurant work (part-time), currently Head Waiter at Bunduq Restaurant & Cafe (2020 – Present).",
    "IEEE BU Student Branch — Organized coding workshops, technical events, and hackathons (Nov 2023 – May 2025).",
    "Ghirass Cultural Center — Taught English and public speaking to children (May 2023 – Jun 2023).",
  ],
};
