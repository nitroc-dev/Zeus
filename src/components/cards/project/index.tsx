import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { ProjectCardProps } from "./props";

export default function ProjectCard({ project, locale }: ProjectCardProps) {
  return (
    <Card className="bg-gray-800/50 border-gray-700/50 overflow-hidden h-full flex flex-col pt-0">
      <CardContent className="p-0 flex flex-col flex-1">

        {/* Image or gradient fallback */}
        {project.imageUrl ? (
          <div className="relative w-full h-44 overflow-hidden">
            <Image
              src={project.imageUrl}
              alt={project.name}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="w-full h-44 bg-gradient-to-br from-blue-900/30 via-gray-800/60 to-purple-900/30 border-b border-gray-700/30 flex items-center justify-center">
            <span className="text-6xl font-black text-white/5 select-none uppercase tracking-widest">
              {project.name.slice(0, 2)}
            </span>
          </div>
        )}

        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-base font-semibold text-white mb-1">{project.name}</h3>

          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-xs bg-gray-700/60 text-gray-400 border border-gray-600/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <p className="text-sm text-gray-400 leading-relaxed flex-1 line-clamp-3">
            {project.description}
          </p>

          <div className="flex gap-2 mt-4">
            {locale && (
              <Button
                asChild
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
              >
                <Link href={`/${locale}/projects/${project.id}`}>
                  <ArrowRight className="w-4 h-4 mr-1.5" />
                  Details
                </Link>
              </Button>
            )}
            {project.websiteUrl && (
              <Button
                asChild
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <Link href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>
            )}
            {project.repositoryUrl && (
              <Button
                asChild
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <Link href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
