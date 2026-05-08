"use client";

import { Link } from "@/i18n/navigation";
import { useProjectsControllerFindAllV1 } from "@/api/generated/projects/projects";
import { useSkillsControllerFindAllCategoriesV1 } from "@/api/generated/skills/skills";
import type { ProjectDto, SkillCategoryDto } from "@/api/generated/nestJSAPI.schemas";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FolderOpen, Cpu, Plus, ArrowRight } from "lucide-react";

export default function DashboardPage() {
  const { data: projectsData } = useProjectsControllerFindAllV1();
  const { data: skillsData } = useSkillsControllerFindAllCategoriesV1();

  const projects = ((projectsData as any)?.data?.data as ProjectDto[]) ?? [];
  const categories = ((skillsData as any)?.data as SkillCategoryDto[]) ?? [];
  const totalSkills = categories.reduce((sum, c) => sum + c.skills.length, 0);
  const featuredCount = projects.filter((p) => p.isFeatured).length;
  const liveCount = projects.filter((p) => p.status === "live").length;

  const stats = [
    { label: "Total Projects", value: projects.length, icon: FolderOpen, color: "text-blue-400" },
    { label: "Featured", value: featuredCount, icon: FolderOpen, color: "text-purple-400" },
    { label: "Live", value: liveCount, icon: FolderOpen, color: "text-green-400" },
    { label: "Skills", value: totalSkills, icon: Cpu, color: "text-orange-400" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Overview</h1>
        <p className="text-gray-400 text-sm mt-1">Manage your portfolio content</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="bg-gray-900 border-gray-800">
            <CardContent className="pt-6">
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className={`text-3xl font-bold mt-1 ${stat.color}`}>{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="pb-3">
            <CardTitle className="text-base text-white flex items-center gap-2">
              <FolderOpen size={18} className="text-blue-400" />
              Projects
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-gray-400">
              {projects.length} projects · {featuredCount} featured
            </p>
            <div className="flex gap-2">
              <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/dashboard/projects/new">
                  <Plus size={14} className="mr-1" />
                  New project
                </Link>
              </Button>
              <Button asChild size="sm" variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                <Link href="/dashboard/projects">
                  Manage
                  <ArrowRight size={14} className="ml-1" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="pb-3">
            <CardTitle className="text-base text-white flex items-center gap-2">
              <Cpu size={18} className="text-orange-400" />
              Skills
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-gray-400">
              {categories.length} categories · {totalSkills} skills
            </p>
            <div className="flex gap-2">
              <Button asChild size="sm" variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                <Link href="/dashboard/skills">
                  Manage
                  <ArrowRight size={14} className="ml-1" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
