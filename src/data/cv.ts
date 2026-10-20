// Content of the downloadable CV (/cv → public/cv.pdf).
// Copied word for word from Abdullah's CV ("Abdullah CV.pdf", Oct 2026). The only change: no phone number.
// Keep it in sync with the CV itself, not with the site copy.

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
    "Software Engineer with a B.S. from Bethlehem University and hands-on experience across the full stack — Java/Spring Boot, PHP/Laravel, React, and Flutter. Built and shipped e-commerce, social networking, and AI-assisted navigation applications from design through deployment. Comfortable moving between frontend, backend, and mobile, with practical experience applying generative AI tools to speed up development. Seeking a Software Engineer role where I can contribute strong fundamentals, fast learning, and a builder's mindset.",

  education: [
    {
      title: "B.S. in Software Engineering",
      subtitle: "Bethlehem University",
      period: "Sep 2021 – Dec 2025",
      bullets: [
        "Relevant coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Systems, Software Testing, Advanced Web Development, Service-Oriented Architecture, Software Engineering for the Cloud, Design Patterns.",
      ],
    },
  ] satisfies CvEntry[],

  skills: [
    { label: "Languages", value: "Java, PHP, Python, Dart" },
    { label: "Backend", value: "Spring Boot, Laravel, REST APIs, JWT, OAuth2, MySQL, Firebase" },
    { label: "Frontend", value: "React, TypeScript, HTML/CSS/JavaScript, Tailwind CSS" },
    { label: "Mobile", value: "Flutter" },
    { label: "Tools & Practices", value: "Git, GitHub, Docker, Agile/Scrum, Figma" },
    { label: "AI Tools", value: "Prompt Engineering, ChatGPT, Google Gemini" },
  ],

  experience: [
    {
      title: "Full Stack Developer Intern",
      subtitle: "Element Media",
      period: "Jun 2024 – Sep 2024",
      bullets: [
        "Built and shipped a full-stack e-commerce application end-to-end using Laravel, MySQL, and Blade, covering product catalog, checkout, and order tracking.",
        "Implemented secure authentication and authorization to protect user accounts and restrict admin-only actions.",
        "Worked within an Agile team, participating in sprint planning and code reviews to deliver features on schedule.",
      ],
      link: { label: "View repository", href: "https://github.com/Element-Internships/Abdullah_Abu_Riala_Ecommerce" },
    },
  ] satisfies CvEntry[],

  projects: [
    {
      title: "AuraStride — AI Navigation App for the Visually Impaired (Graduation Project)",
      bullets: [
        "Team graduation project: a Flutter app that guides visually impaired students around Bethlehem University's campus with voice directions and real-time obstacle alerts.",
        "Built the object detection module: on-device YOLOv5 (TensorFlow Lite) on the live camera feed, announcing nearby obstacles through text-to-speech.",
        "Built the campus navigation: GPS positioning, Google Maps and step-by-step voice directions to campus buildings, controlled by speech commands.",
        "Field-tested the app in real-world conditions and tested and debugged the detection and navigation code.",
      ],
      link: { label: "View repository", href: "https://github.com/aabood17/aurastride" },
    },
    {
      title: "Palestine Job Finder — Automated Job Search & Email Reports",
      bullets: [
        "Built a Python automation that collects new IT jobs from Palestinian sources (Jobs.ps, Foras, company career pages) and remote jobs from LinkedIn and Indeed via the JSearch API, then emails a ranked report every 3 days.",
        "Designed a keyword-based scoring model (English and Arabic) that rates each job 0–100 against my skills and filters out expired, senior and US-only roles.",
        "Scheduled with GitHub Actions and Windows Task Scheduler, with deduplication, fault-tolerant sources and API keys stored in GitHub Secrets.",
      ],
      link: { label: "View repository", href: "https://github.com/aabood17/palestine-job-finder" },
    },
    {
      title: "Social Media Platform (Microservices)",
      bullets: [
        "Designed and built a full-stack social platform with secure authentication, real-time messaging, and notifications.",
        "Backend: Java, Spring Boot, JWT, OAuth2, SSL. Frontend: React and TypeScript.",
        "Refactored the application into a microservices architecture and designed the UI in Figma.",
      ],
      link: { label: "View repository", href: "https://github.com/S24-SWER313/project-404" },
    },
    {
      title: "UI/UX Prototyping — Academic Project",
      period: "Oct 2023 – Dec 2023",
      bullets: [
        "Designed responsive interfaces and interactive prototypes in Figma, then implemented them with HTML, CSS, and JavaScript.",
        "Applied user-centered design principles while collaborating in a team setting.",
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

  languages: "Arabic (Native) • English (Professional Working Proficiency)",

  volunteering: [
    "IEEE BU Student Branch — Organized coding workshops, technical events, and hackathons (Nov 2023 – May 2025).",
    "Ghirass Cultural Center — Taught English and public speaking to children (May 2023 – Jun 2023).",
  ],
};
