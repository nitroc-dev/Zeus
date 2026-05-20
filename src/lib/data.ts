import {
  experiences,
  projects,
  skillCategories,
  usesSections,
} from "@/data/static-data";
import type {
  ExperienceData,
  Project,
  SkillCategoryData,
  UseSectionData,
} from "@/types";

export async function getProjectsData(): Promise<Project[]> {
  return projects;
}

export async function getProjectById(id: string): Promise<Project | null> {
  return projects.find((p) => p.id === id) ?? null;
}

export async function getProjectIds(): Promise<string[]> {
  return projects.map((p) => p.id);
}

export async function getSkillsData(): Promise<SkillCategoryData[]> {
  return skillCategories;
}

export async function getExperiencesData(): Promise<ExperienceData[]> {
  return experiences;
}

export async function getUsesData(): Promise<UseSectionData[]> {
  return usesSections;
}
