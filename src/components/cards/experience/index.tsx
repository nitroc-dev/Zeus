import { Briefcase, ExternalLink, GraduationCap, MapPin, Star } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { formatExperience } from "@/utils/date";
import type { ExperienceCardProps } from "./props";

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const getIcon = () => {
    switch (experience.experienceType) {
      case "work":
        return <Briefcase className="w-5 h-5 text-blue-400" />;
      case "education":
        return <GraduationCap className="w-5 h-5 text-green-400" />;
      case "internship":
        return <Star className="w-5 h-5 text-purple-400" />;
      default:
        return <Briefcase className="w-5 h-5 text-gray-400" />;
    }
  };

  const getIconBackground = () => {
    switch (experience.experienceType) {
      case "work":
        return "bg-blue-600/20 border-blue-600/30";
      case "education":
        return "bg-green-600/20 border-green-600/30";
      case "internship":
        return "bg-purple-600/20 border-purple-600/30";
      default:
        return "bg-gray-600/20 border-gray-600/30";
    }
  };

  return (
    <Card className="bg-gray-800/50 border-gray-700">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${getIconBackground()}`}
          >
            {getIcon()}
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-white">
              {experience.name}
            </h3>
            {experience.websiteUrl ? (
              <Link
                href={experience.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 text-sm font-medium inline-flex items-center gap-1 hover:text-blue-300 transition-colors"
              >
                {experience.companyName}
                <ExternalLink className="w-3 h-3" />
              </Link>
            ) : (
              <p className="text-blue-400 text-sm font-medium">
                {experience.companyName}
              </p>
            )}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs text-gray-400">
              <span>{formatExperience(experience)}</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {experience.location}
              </span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mt-3">
              {experience.description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
