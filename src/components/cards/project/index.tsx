import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { ProjectCardProps } from "./props";

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="bg-gray-800/50 border-gray-700/50 overflow-hidden h-full flex flex-col transition-all duration-200 hover:bg-gray-800/70 pt-0">
      <CardContent className="p-0 flex flex-col flex-1">
        <div className="relative w-full h-48 overflow-hidden">
          {project.imageUrl && (
            <Image
              src={project.imageUrl}
              alt={project.name}
              fill
              className="object-cover"
            />
          )}
        </div>

        <div className="p-6 text-left flex flex-col flex-1">
          <div className="flex-1">
            <h3 className="mb-3 text-xl font-semibold text-white">
              {project.name}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed line-clamp-3 mb-4">
              {project.description}
            </p>
          </div>

          <div className="flex gap-3 mt-4">
            {project.websiteUrl && (
              <Button
                asChild
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
              >
                <Link
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Link>
              </Button>
            )}

            {project.repositoryUrl && (
              <Button
                asChild
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white flex-1"
              >
                <Link
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Source Code
                </Link>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
