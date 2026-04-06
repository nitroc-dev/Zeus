import { Box, Code, Database } from "lucide-react";
import type { ReactNode } from "react";

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  imageUrl?: string;
  repositoryUrl?: string;
  websiteUrl?: string;
  tags?: string[];
  highlights?: string[];
  year?: string;
  status?: "live" | "in-progress" | "archived";
  role?: string;
  isFeatured: boolean;
}

export interface SkillCategory {
  id: string;
  icon: ReactNode;
  label: string;
  technologies: string[];
}

export interface Experience {
  id: string;
  name: string;
  companyName: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
  experienceType: "work" | "education" | "internship";
  websiteUrl?: string;
}

// Helper function to get localized projects
export const getLocalizedProjects = (t: (key: string) => string): Project[] => [
  {
    id: "zeus",
    name: t("zeus.name"),
    description: t("zeus.description"),
    longDescription: t("zeus.longDescription"),
    imageUrl: "/projects/zeus.png",
    repositoryUrl: "https://github.com/nitroc-dev/Zeus",
    websiteUrl: "https://nitroc.xyz",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "next-intl"],
    highlights: [
      "Full EN/FR internationalization with next-intl",
      "Zero client JS on the main page — fully server-rendered sections",
      "Contact form forwarding webhook",
      "SEO metadata, Open Graph, and Twitter cards",
      "Deployed on Vercel with Analytics and Speed Insights",
    ],
    year: "2024",
    status: "live",
    role: "Solo — design, architecture, development",
    isFeatured: true,
  },
  {
    id: "placeholder-1",
    name: t("placeholder1.name"),
    description: t("placeholder1.description"),
    longDescription: t("placeholder1.longDescription"),
    tags: ["React", "NestJS", "PostgreSQL", "Docker"],
    year: "2024",
    status: "in-progress",
    role: "Solo",
    isFeatured: true,
  },
  {
    id: "placeholder-2",
    name: t("placeholder2.name"),
    description: t("placeholder2.description"),
    longDescription: t("placeholder2.longDescription"),
    tags: ["Next.js", ".NET", "MySQL"],
    year: "2024",
    status: "in-progress",
    role: "Solo",
    isFeatured: true,
  },
];

// Helper function to get localized skills
export const getLocalizedSkills = (
  t: (key: string) => string,
): SkillCategory[] => [
  // Languages
  {
    id: "1",
    icon: <Code className="w-5 h-5 text-primary" />,
    label: t("programmingLanguages"),
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "C",
      "C#",
      "Java",
    ],
  },

  // Frameworks
  {
    id: "2",
    icon: <Box className="w-5 h-5 text-primary" />,
    label: t("frameworksLibraries"),
    technologies: [
      "React",
      "Next.js",
      "NestJS",
      ".NET",
      "Express.js",
      "Spring Boot",
    ],
  },

  // Tools and Databases
  {
    id: "3",
    icon: <Database className="w-5 h-5 text-primary" />,
    label: t("toolsDatabases"),
    technologies: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Git",
      "GitHub",
      "GitHub Actions",
    ],
  },
];

// Helper function to get localized experiences
export const getLocalizedExperiences = (
  t: (key: string) => string,
): Experience[] => [
  {
    id: "1",
    name: t("fullStackDev.name"),
    companyName: t("fullStackDev.company"),
    description: t("fullStackDev.description"),
    startDate: "2024-10-01",
    location: t("fullStackDev.location"),
    experienceType: "work",
    websiteUrl: "https://eachstapp.com",
  },
  {
    id: "2",
    name: t("internship.name"),
    companyName: t("internship.company"),
    description: t("internship.description"),
    startDate: "2024-01-01",
    endDate: "2024-05-01",
    location: t("internship.location"),
    experienceType: "internship",
    websiteUrl: "https://eachstapp.com",
  },
  {
    id: "3",
    name: t("education.name"),
    companyName: t("education.company"),
    description: t("education.description"),
    startDate: "2021-09-01",
    endDate: "2024-06-30",
    location: t("education.location"),
    experienceType: "education",
    websiteUrl: "https://www.vinci.be",
  },
];

// Hardcoded projects data (legacy - use getLocalizedProjects instead)
export const projects: Project[] = [
  {
    id: "1",
    name: "Zeus",
    description:
      "Zeus is a portfolio that showcases my skills, experience, and projects in software development. The goal of this project is to highlight my professional journey, technical skills, and the solutions I’ve created. Feel free to explore and connect!",
    imageUrl: "/projects/zeus.png",
    repositoryUrl: "https://github.com/nitroc-dev/Zeus",
    websiteUrl: "https://nitroc.xyz",
    isFeatured: true,
  },
];

// Hardcoded skills data (legacy - use getLocalizedSkills instead)
export const skills: SkillCategory[] = [
  // Languages
  {
    id: "1",
    icon: <Code className="w-5 h-5 text-primary" />,
    label: "Programming Languages",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "C",
      "C#",
      "Java",
    ],
  },

  // Frameworks
  {
    id: "2",
    icon: <Box className="w-5 h-5 text-primary" />,
    label: "Frameworks & Libraries",
    technologies: [
      "React",
      "Next.js",
      "NestJS",
      ".NET",
      "Express.js",
      "Spring Boot",
    ],
  },

  // Tools and Databases
  {
    id: "3",
    icon: <Database className="w-5 h-5 text-primary" />,
    label: "Tools & Databases",
    technologies: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Git",
      "GitHub",
      "GitHub Actions",
    ],
  },
];

// Hardcoded experiences data (legacy - use getLocalizedExperiences instead)
export const experiences: Experience[] = [
  {
    id: "1",
    name: "Full Stack Developer",
    companyName: "Eachstapp",
    description:
      "Leading the development and maintenance of enterprise web applications using React, Next.js, and .NET technologies. Collaborating with cross-functional teams to architect scalable solutions, implement RESTful APIs, and optimize application performance. Successfully delivered multiple features that improved user engagement and system efficiency while maintaining high code quality standards.",
    startDate: "2024-10-01",
    location: "Brussels, Belgium",
    experienceType: "work",
    websiteUrl: "https://eachstapp.com",
  },
  {
    id: "2",
    name: "Fullstack Developer (Internship)",
    companyName: "Eachstapp",
    description:
      "Contributed to the development of modern web applications by implementing responsive frontend components and backend API integrations. Gained practical experience with React, TypeScript, and .NET while working in an agile development environment. Participated in code reviews, sprint planning sessions, and learned industry best practices for building production-ready applications.",
    startDate: "2024-01-01",
    endDate: "2024-05-01",
    location: "Brussels, Belgium",
    experienceType: "internship",
    websiteUrl: "https://eachstapp.com",
  },
  {
    id: "3",
    name: "Computer Science Student",
    companyName: "Haute Ecole Léonard de Vinci",
    description:
      "Completed comprehensive studies in computer science covering programming fundamentals, data structures, algorithms, database management, and software engineering principles. Developed strong analytical and problem-solving skills through hands-on projects and coursework. Built a solid foundation in object-oriented programming, web development, and system design that directly applies to modern software development practices.",
    startDate: "2021-09-01",
    endDate: "2024-06-30",
    location: "Brussels, Belgium",
    experienceType: "education",
    websiteUrl: "https://www.vinci.be",
  },
];
