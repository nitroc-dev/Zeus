import type { ReactNode } from "react";

export interface TechStackItem {
  name: string;
  reasonEn: string;
  reasonFr: string;
}

export interface Project {
  id: string;
  nameEn: string;
  nameFr: string;
  descriptionEn: string;
  descriptionFr: string;
  longDescriptionEn?: string;
  longDescriptionFr?: string;
  contentEn?: string;
  contentFr?: string;
  imageUrl?: string;
  repositoryUrl?: string;
  websiteUrl?: string;
  tags?: string[];
  techStack?: TechStackItem[];
  highlights?: string[];
  year?: string;
  status?: "live" | "in_progress" | "archived";
  role?: string;
  isFeatured: boolean;
  lighthouseScore?: string;
  timeline?: string;
  version?: string;
  category?: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface SkillCategoryData {
  id: string;
  icon?: ReactNode;
  labelEn: string;
  labelFr: string;
  technologies: string[];
}

export interface UseItemData {
  name: string;
  sub: string;
  whyEn: string;
  whyFr: string;
}

export interface UseSectionData {
  id: string;
  icon: string;
  titleEn: string;
  titleFr: string;
  items: UseItemData[];
}

export interface ExperienceData {
  id: string;
  nameEn: string;
  nameFr: string;
  companyName: string;
  descriptionEn: string;
  descriptionFr: string;
  startDate: string;
  endDate?: string;
  locationEn: string;
  locationFr: string;
  experienceType: "work" | "education" | "internship";
  websiteUrl?: string;
}
