import { ProjectCard } from "@/components/cards/project";
import { getProjectsData } from "@/lib/data";
import type { ProjectsGridProps } from "./props";

export async function ProjectsGrid({
  locale,
  featuredOnly = false,
  statusFilter,
  children,
}: ProjectsGridProps) {
  const all = await getProjectsData();
  const projects = all.filter((p) => {
    if (featuredOnly && !p.isFeatured) return false;
    if (statusFilter && p.status !== statusFilter) return false;
    return true;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} locale={locale} />
      ))}
      {children}
    </div>
  );
}
