"use client";

import { use } from "react";
import { useProjectsControllerFindOneV1 } from "@/api/generated/projects/projects";
import type { ProjectDto } from "@/api/generated/nestJSAPI.schemas";
import { ProjectForm } from "@/components/dashboard/project-form";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function EditProjectPage({ params }: PageProps) {
  const { id } = use(params);
  const { data, isLoading, isError } = useProjectsControllerFindOneV1(id);

  if (isLoading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-10 rounded-lg bg-gray-800/50 animate-pulse" />
        ))}
      </div>
    );
  }

  if (isError) {
    return <p className="text-red-400">Failed to load project.</p>;
  }

  const project = (data as any)?.data as ProjectDto | undefined;

  if (!project) return null;

  return <ProjectForm project={project} />;
}
