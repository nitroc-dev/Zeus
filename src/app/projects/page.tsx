"use client";

import ProjectCard from "@/components/cards/project";
import { projects } from "@/data/hardcoded-data";

export default function ProjectsPage() {
  return (
    <section className="min-h-[95vh] px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          My <span className="text-primary">Projects</span>
        </h1>
        <p className="mb-12 text-lg text-muted-foreground sm:text-xl max-w-3xl mx-auto">
          Here&apos;s a collection of projects I&apos;ve worked on, showcasing
          my skills in web development, backend systems, and modern
          technologies.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects?.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
