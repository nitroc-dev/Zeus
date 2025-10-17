import { Box, Code, Database } from "lucide-react";
import { ReactNode } from "react";

export interface Project {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  repositoryUrl?: string;
  websiteUrl?: string;
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
}

// Hardcoded projects data
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

// Hardcoded skills data
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

// Hardcoded experiences data
export const experiences: Experience[] = [
  {
    id: "1",
    name: "Full Stack Developer",
    companyName: "Eachstapp",
    description:
      "Developed and maintained web applications using React, Next.js, and .NET. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    startDate: "2024-10-01",
    location: "Brussels, Belgium",
    experienceType: "work",
  },
  {
    id: "2",
    name: "Fullstack Developer (Internship)",
    companyName: "Eachstapp",
    description:
      "Assisted in the development of web applications, focusing on frontend and backend integration. Gained hands-on experience with modern web technologies and agile methodologies.",
    startDate: "2024-01-01",
    endDate: "2024-05-01",
    location: "Brussels, Belgium",
    experienceType: "internship",
  },
  {
    id: "3",
    name: "Computer Science Student",
    companyName: "Haute Ecole Léonard de Vinci",
    description:
      "Studied various aspects of computer science, including programming, algorithms, and software development.",
    startDate: "2021-09-01",
    endDate: "2024-06-30",
    location: "Brussels, Belgium",
    experienceType: "education",
  },
];
