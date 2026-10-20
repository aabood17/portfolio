// Single source for personal details, links and section copy.
// Every claim here must match the CV (see SPEC.md > Content).

export const site = {
  name: "Abdullah Abu Riala",
  shortName: "Abdullah",
  role: "Software Engineer",
  location: "Bethlehem, Palestine",
  email: "aburialaabdullah@gmail.com",
  cvPath: "/cv.pdf",
  title: "Abdullah Abu Riala | Software Engineer",
  description:
    "Software Engineer from Bethlehem, Palestine. Full-stack development with Java/Spring Boot, PHP/Laravel, React and Flutter. Open to full-time roles and freelance projects.",
  pitch:
    "I build full-stack web and mobile applications with Java/Spring Boot, PHP/Laravel, React and Flutter, from design through deployment.",
  availability: "Open to full-time roles and freelance projects",
  summary: [
    "I'm a Software Engineer with a B.S. from Bethlehem University and hands-on experience across the full stack: Java/Spring Boot, PHP/Laravel, React, and Flutter.",
    "I've built and shipped e-commerce, social networking, and AI-assisted navigation applications from design through deployment. I'm comfortable moving between frontend, backend, and mobile, and I use generative AI tools in practice to speed up development.",
    "I'm looking for a Software Engineer role where I can contribute strong fundamentals, fast learning, and a builder's mindset, and I take on freelance projects for businesses.",
  ],
  facts: [
    { label: "Based in", value: "Bethlehem, Palestine" },
    { label: "Degree", value: "B.S. Software Engineering" },
    { label: "Languages", value: "Arabic (native), English (professional)" },
  ],
} as const;

export type SocialId = "github" | "linkedin" | "email" | "facebook" | "instagram";

export interface SocialLink {
  id: SocialId;
  label: string;
  href: string;
  handle: string;
  /** Professional links are shown in the hero; the rest only in contact and footer. */
  primary: boolean;
}

export const socials: SocialLink[] = [
  { id: "github", label: "GitHub", href: "https://github.com/aabood17", handle: "aabood17", primary: true },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aburiala",
    handle: "in/aburiala",
    primary: true,
  },
  { id: "email", label: "Email", href: `mailto:${site.email}`, handle: site.email, primary: true },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/aabood.17",
    handle: "aabood.17",
    primary: false,
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/aabood.17/",
    handle: "@aabood.17",
    primary: false,
  },
];

export const nav = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
];

export const skillGroups = [
  { title: "Languages", items: ["Java", "PHP", "Python", "Dart"] },
  { title: "Backend", items: ["Spring Boot", "Laravel", "REST APIs", "JWT", "OAuth2", "MySQL", "Firebase"] },
  { title: "Frontend", items: ["React", "TypeScript", "HTML/CSS/JavaScript", "Tailwind CSS"] },
  { title: "Mobile", items: ["Flutter"] },
  { title: "Tools & Practices", items: ["Git", "GitHub", "Docker", "Agile/Scrum", "Figma"] },
  { title: "AI Tools", items: ["Prompt Engineering", "ChatGPT", "Google Gemini"] },
];

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  /** Public credential page, if there is one. */
  url?: string;
  urlLabel?: string;
}

export const certifications: Certification[] = [
  {
    title: "Google Prompting Essentials Specialization",
    issuer: "Google Career Certificates, Coursera",
    year: "2026",
    url: "https://www.coursera.org/account/accomplishments/specialization/Z4NLH1SIVZBU",
    urlLabel: "View certificate",
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    year: "2024",
    url: "https://www.credly.com/badges/712905ea-62d7-442a-9557-a41e4d95169b/public_url",
    urlLabel: "View badge",
  },
  {
    title: "Frontend Development Training (React, Flutter, Figma)",
    issuer: "Udemy",
    year: "2023–2024",
  },
];

export const services = [
  {
    title: "Business & restaurant websites",
    description:
      "Fast, mobile-first websites with menus, galleries, maps and contact forms that owners can update themselves.",
  },
  {
    title: "Web apps & dashboards",
    description:
      "Full-stack applications with secure login, admin panels and REST APIs built on Laravel, Spring Boot and React.",
  },
  {
    title: "Mobile apps",
    description: "Cross-platform Android and iOS apps with Flutter, from the first screen design to a working release.",
  },
];
