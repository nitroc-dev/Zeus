import { unstable_cache } from "next/cache";
import { createServerClient } from "@/lib/supabase/server";
import type {
  ExperienceData,
  Project,
  SkillCategoryData,
  UseSectionData,
} from "@/types";

// ── Projects ──────────────────────────────────────────────────────────────────

export const getProjectsData = unstable_cache(
  async (): Promise<Project[]> => {
    const supabase = createServerClient();
    const { data, error } = await supabase
      .from("projects")
      .select("*, tech_stack(*)")
      .order("year", { ascending: false });
    if (error) throw error;
    return (data ?? []).map(mapProject);
  },
  ["projects"],
  { revalidate: 3600, tags: ["projects"] },
);

export const getProjectById = unstable_cache(
  async (id: string): Promise<Project | null> => {
    const supabase = createServerClient();
    const { data, error } = await supabase
      .from("projects")
      .select("*, tech_stack(*)")
      .eq("id", id)
      .single();
    if (error) return null;
    return mapProject(data);
  },
  ["project"],
  { revalidate: 3600, tags: ["projects"] },
);

export const getProjectIds = unstable_cache(
  async (): Promise<string[]> => {
    const supabase = createServerClient();
    const { data } = await supabase.from("projects").select("id");
    return data?.map((p: { id: string }) => p.id) ?? [];
  },
  ["project-ids"],
  { revalidate: 3600, tags: ["projects"] },
);

// ── Skills ────────────────────────────────────────────────────────────────────

export const getSkillsData = unstable_cache(
  async (): Promise<SkillCategoryData[]> => {
    const supabase = createServerClient();
    const { data, error } = await supabase
      .from("skills")
      .select("*")
      .order("sort_order");
    if (error) throw error;
    return (data ?? []).map(
      (row: {
        id: string;
        label_en: string;
        label_fr: string;
        technologies: string[];
      }) => ({
        id: row.id,
        labelEn: row.label_en,
        labelFr: row.label_fr,
        technologies: row.technologies,
      }),
    );
  },
  ["skills"],
  { revalidate: 3600, tags: ["skills"] },
);

// ── Uses ──────────────────────────────────────────────────────────────────────

export const getUsesData = unstable_cache(
  async (): Promise<UseSectionData[]> => {
    const supabase = createServerClient();
    const { data, error } = await supabase
      .from("uses_sections")
      .select(
        "id, icon, title_en, title_fr, sort_order, uses_items(id, name, sub, why_en, why_fr, sort_order)",
      )
      .order("sort_order");
    if (error) throw error;
    return (data ?? []).map((row) => ({
      id: row.id as string,
      icon: row.icon as string,
      titleEn: row.title_en as string,
      titleFr: row.title_fr as string,
      items: [...((row.uses_items as UseItemRow[]) ?? [])]
        .sort((a, b) => a.sort_order - b.sort_order)
        .map((item) => ({
          name: item.name,
          sub: item.sub,
          whyEn: item.why_en,
          whyFr: item.why_fr,
        })),
    }));
  },
  ["uses"],
  { revalidate: 3600, tags: ["uses"] },
);

// ── Experiences ───────────────────────────────────────────────────────────────

export const getExperiencesData = unstable_cache(
  async (): Promise<ExperienceData[]> => {
    const supabase = createServerClient();
    const { data, error } = await supabase
      .from("experiences")
      .select("*")
      .order("start_date", { ascending: false });
    if (error) throw error;
    return (data ?? []).map((row: ExperienceRow) => ({
      id: row.id,
      nameEn: row.name_en,
      nameFr: row.name_fr,
      companyName: row.company_name,
      descriptionEn: row.description_en,
      descriptionFr: row.description_fr,
      startDate: row.start_date,
      endDate: row.end_date,
      locationEn: row.location_en,
      locationFr: row.location_fr,
      experienceType: row.experience_type,
      websiteUrl: row.website_url,
    }));
  },
  ["experiences"],
  { revalidate: 3600, tags: ["experiences"] },
);

// ── Internal row types ────────────────────────────────────────────────────────

interface TechStackRow {
  name: string;
  reason_en: string;
  reason_fr: string;
  sort_order: number;
}

interface ProjectRow {
  id: string;
  name_en: string;
  name_fr: string;
  description_en: string;
  description_fr: string;
  long_description_en?: string;
  long_description_fr?: string;
  content_en?: string;
  content_fr?: string;
  image_url?: string;
  repository_url?: string;
  website_url?: string;
  tags?: string[];
  highlights?: string[];
  year?: string;
  status?: "live" | "in_progress" | "archived";
  role?: string;
  is_featured: boolean;
  lighthouse_score?: string;
  timeline?: string;
  version?: string;
  category?: string;
  seo_title?: string;
  seo_description?: string;
  tech_stack?: TechStackRow[];
}

interface ExperienceRow {
  id: string;
  name_en: string;
  name_fr: string;
  company_name: string;
  description_en: string;
  description_fr: string;
  start_date: string;
  end_date?: string;
  location_en: string;
  location_fr: string;
  experience_type: "work" | "education" | "internship";
  website_url?: string;
}

interface UseItemRow {
  id: number;
  name: string;
  sub: string;
  why_en: string;
  why_fr: string;
  sort_order: number;
}

function mapProject(row: ProjectRow): Project {
  return {
    id: row.id,
    nameEn: row.name_en,
    nameFr: row.name_fr,
    descriptionEn: row.description_en,
    descriptionFr: row.description_fr,
    longDescriptionEn: row.long_description_en,
    longDescriptionFr: row.long_description_fr,
    contentEn: row.content_en,
    contentFr: row.content_fr,
    imageUrl: row.image_url,
    repositoryUrl: row.repository_url,
    websiteUrl: row.website_url,
    tags: row.tags,
    highlights: row.highlights,
    year: row.year,
    status: row.status,
    role: row.role,
    isFeatured: row.is_featured,
    lighthouseScore: row.lighthouse_score,
    timeline: row.timeline,
    version: row.version,
    category: row.category,
    seoTitle: row.seo_title,
    seoDescription: row.seo_description,
    techStack: (row.tech_stack ?? [])
      .sort((a, b) => a.sort_order - b.sort_order)
      .map((t) => ({
        name: t.name,
        reasonEn: t.reason_en,
        reasonFr: t.reason_fr,
      })),
  };
}
