import { Briefcase, GraduationCap, Star, ExternalLink } from "lucide-react";
import { ExperienceCardProps } from "./props";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

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
    <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 group">
      <CardContent className="p-8">
        <div className="flex items-start gap-4 mb-6">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-lg border ${getIconBackground()}`}
          >
            {getIcon()}
          </div>

          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {experience.name}
                </h3>
                {experience.websiteUrl ? (
                  <Link
                    href={experience.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 font-medium mb-1 inline-flex items-center gap-1 hover:text-blue-300 transition-colors"
                  >
                    {experience.companyName}
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                ) : (
                  <p className="text-blue-400 font-medium mb-1">
                    {experience.companyName}
                  </p>
                )}
                <p className="text-sm text-gray-400">
                  {experience.startDate} - {experience.endDate || "Present"} •{" "}
                  {experience.location}
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-300 leading-relaxed">
          {experience.description}
        </p>
      </CardContent>
    </Card>
  );
}
