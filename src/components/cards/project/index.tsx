import { LinkIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ProjectCardProps } from "./props";
import { GithubIcon } from "@/components/icons/github";
import { Card, CardContent } from "@/components/ui/card";

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="bg-gray-800 border-gray-700 overflow-hidden p-0 flex flex-col">
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
            <h3 className="mb-2 text-xl font-semibold text-white">
              {project.name}
            </h3>
            <p className="text-sm text-gray-300">{project.description}</p>
          </div>
          <div className="flex items-center gap-4 mt-4">
            {project.websiteUrl && (
              <Link
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Visit Website"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <LinkIcon size={18} />
              </Link>
            )}

            {project.repositoryUrl && (
              <Link
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="View Repository"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <GithubIcon width={18} height={18} />
              </Link>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
