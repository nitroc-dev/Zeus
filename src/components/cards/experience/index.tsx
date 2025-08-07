import { Briefcase, GraduationCap, Star } from "lucide-react";
import { ExperienceCardProps } from "./props";
import { Card, CardContent } from "@/components/ui/card";
import { formatExperience } from "@/utils/date";

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const getIcon = () => {
    switch (experience.experienceType) {
      case "work":
        return <Briefcase className="w-5 h-5 text-white" />;
      case "education":
        return <GraduationCap className="w-5 h-5 text-white" />;
      case "internship":
        return <Star className="w-5 h-5 text-white" />;
      default:
        return null;
    }
  };

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardContent>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-white">
            {getIcon()}
            <h3 className="text-xl font-semibold">{experience.name}</h3>
          </div>
          {!experience.endDate && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 text-sm text-yellow-400 bg-yellow-800 rounded-full">
              <Star className="w-4 h-4" />
              Current
            </span>
          )}
        </div>
        <p className="mb-3 text-sm text-gray-400">
          {experience.companyName} / {formatExperience(experience) || "Present"}
        </p>
        <p className="mb-4 leading-relaxed text-gray-300">
          {experience.description}
        </p>
      </CardContent>
    </Card>
  );
}
