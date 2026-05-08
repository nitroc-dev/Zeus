import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "@/components/icons/github";
import type { ProjectCardProps } from "./props";

export default function ProjectCard({ project, locale }: ProjectCardProps) {
  return (
    <div
      className="group flex flex-col overflow-hidden rounded-[var(--radius-lg)] transition-all duration-200 hover:[border-color:var(--portfolio-line-2)]"
      style={{
        background: "var(--navy-1)",
        border: "1px solid var(--portfolio-line)",
      }}
    >
      {/* Image / placeholder */}
      {project.imageUrl ? (
        <div className="relative w-full h-44 overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      ) : (
        <div
          className="w-full h-44 flex items-center justify-center"
          style={{
            background:
              "repeating-linear-gradient(45deg, transparent 0, transparent 14px, rgba(255,255,255,0.02) 14px, rgba(255,255,255,0.02) 28px), var(--navy-2)",
            borderBottom: "1px solid var(--portfolio-line)",
          }}
        >
          <span
            className="font-mono text-5xl font-black select-none uppercase tracking-widest"
            style={{ color: "var(--portfolio-line-2)" }}
          >
            {project.name.slice(0, 2)}
          </span>
        </div>
      )}

      <div className="p-5 flex flex-col flex-1">
        {/* Name */}
        <h3
          className="text-base font-semibold mb-2 leading-tight"
          style={{ color: "var(--text-p-0)" }}
        >
          {project.name}
        </h3>

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-0.5 rounded font-mono text-xs"
                style={{
                  background: "var(--navy-2)",
                  border: "1px solid var(--portfolio-line)",
                  color: "var(--text-p-1)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <p
          className="text-sm leading-relaxed flex-1 line-clamp-3"
          style={{ color: "var(--text-p-2)" }}
        >
          {project.description}
        </p>

        {/* Actions */}
        <div className="flex gap-2 mt-4">
          {locale && (
            <Link
              href={`/${locale}/projects/${project.id}`}
              className="inline-flex items-center gap-1.5 flex-1 justify-center px-3 py-1.5 rounded-lg text-sm font-medium transition-all hover:-translate-y-px"
              style={{
                background: "var(--portfolio-accent)",
                color: "oklch(0.18 0.02 252)",
                boxShadow: "0 2px 8px var(--portfolio-accent-glow)",
              }}
            >
              <ArrowRight className="w-3.5 h-3.5" />
              Details
            </Link>
          )}
          {project.websiteUrl && (
            <Link
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-8 h-8 rounded-lg transition-all hover:[border-color:var(--portfolio-accent)] hover:[color:var(--portfolio-accent)]"
              style={{
                background: "var(--navy-2)",
                border: "1px solid var(--portfolio-line)",
                color: "var(--text-p-1)",
              }}
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          )}
          {project.repositoryUrl && (
            <Link
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-8 h-8 rounded-lg transition-all hover:[border-color:var(--portfolio-accent)] hover:[color:var(--portfolio-accent)]"
              style={{
                background: "var(--navy-2)",
                border: "1px solid var(--portfolio-line)",
                color: "var(--text-p-1)",
              }}
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
