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
    "Software Engineer from Bethlehem, Palestine. Full-stack development with Java/Spring Boot, PHP/Laravel, React/Next.js and Flutter. Open to full-time roles and freelance projects.",
  /** Hero line: "Software engineer who builds" + one of these, cycling. */
  builds: ["full-stack web apps.", "APIs with Spring Boot.", "mobile apps in Flutter.", "products people use."],
  pitch:
    "Based in Bethlehem, Palestine. I take products from the first conversation to a live release, and I recently shipped one for a paying client.",
  availability: "Open to full-time roles and freelance projects",
  /** Big statement at the top of the About section. */
  statement: "I care about software that real people rely on every day.",
  summary: [
    "I'm a Software Engineer with a B.S. from Bethlehem University and hands-on experience across the full stack: Java/Spring Boot, PHP/Laravel, React/Next.js, and Flutter.",
    "Most recently I delivered a bilingual QR menu and website for a paying restaurant client, from the first meeting to a live site the owner updates himself. Before that I built e-commerce, social networking, and AI-assisted navigation applications.",
    "I've also worked part-time in restaurants since 2020, alongside my studies. It taught me to stay calm under pressure, work as a team, and listen to what people actually need.",
    "I'm looking for a Software Engineer role where I can bring strong fundamentals and ownership, and I take on freelance projects for businesses.",
  ],
  facts: [
    { label: "Based in", value: "Bethlehem, Palestine" },
    { label: "Degree", value: "B.S. Software Engineering" },
    { label: "Languages", value: "Arabic (native), English (professional)" },
    { label: "Currently", value: "Open to full-time roles and freelance" },
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
  { label: "Work", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
];

export const skillGroups = [
  { title: "Languages", items: ["Java", "PHP", "Python", "Dart", "TypeScript", "JavaScript"] },
  { title: "Backend", items: ["Spring Boot", "Laravel", "REST APIs", "JWT", "OAuth2", "MySQL", "Firebase"] },
  { title: "Frontend", items: ["React", "Next.js", "HTML/CSS", "Tailwind CSS", "Sanity CMS"] },
  { title: "Mobile", items: ["Flutter"] },
  {
    title: "Tools & Practices",
    items: ["Git", "GitHub Actions (CI/CD)", "Docker", "Cloudflare Pages", "Vitest", "Agile/Scrum", "Figma"],
  },
  { title: "AI Tools", items: ["AI-assisted development (Claude Code)", "Prompt Engineering"] },
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
