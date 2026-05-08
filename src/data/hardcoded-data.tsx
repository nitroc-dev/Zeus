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
  status?: "live" | "in_progress" | "archived";
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

// Helper function to get localized skills
export const getLocalizedSkills = (
  t: (key: string) => string,
): SkillCategory[] => [
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
