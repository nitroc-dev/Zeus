"use client";

import { Link } from "@/i18n/navigation";
import { useQueryClient } from "@tanstack/react-query";
import {
  useProjectsControllerFindAllV1,
  useProjectsControllerRemoveV1,
  getProjectsControllerFindAllV1QueryKey,
} from "@/api/generated/projects/projects";
import type { ProjectDto } from "@/api/generated/nestJSAPI.schemas";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Plus, Pencil, Trash2, Star } from "lucide-react";
import { toast } from "sonner";

const STATUS_COLORS: Record<string, string> = {
  live: "bg-green-500/20 text-green-400 border-green-500/30",
  in_progress: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  archived: "bg-gray-500/20 text-gray-400 border-gray-500/30",
};

export default function ProjectsPage() {
  const queryClient = useQueryClient();
  const { data, isLoading } = useProjectsControllerFindAllV1();
  const deleteMutation = useProjectsControllerRemoveV1({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: getProjectsControllerFindAllV1QueryKey() });
        toast.success("Project deleted");
      },
      onError: () => toast.error("Failed to delete project"),
    },
  });

  const projects = ((data as any)?.data?.data as ProjectDto[]) ?? [];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Projects</h1>
          <p className="text-gray-400 text-sm mt-1">{projects.length} total</p>
        </div>
        <Button asChild className="bg-blue-600 hover:bg-blue-700">
          <Link href="/dashboard/projects/new">
            <Plus size={16} className="mr-2" />
            New project
          </Link>
        </Button>
      </div>

      {isLoading ? (
        <div className="space-y-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-12 rounded-lg bg-gray-800/50 animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-gray-800 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-gray-800 hover:bg-transparent">
                <TableHead className="text-gray-400">Name</TableHead>
                <TableHead className="text-gray-400">Status</TableHead>
                <TableHead className="text-gray-400">Year</TableHead>
                <TableHead className="text-gray-400 text-center">Featured</TableHead>
                <TableHead className="text-gray-400 text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-gray-500 py-10">
                    No projects yet. Create your first one.
                  </TableCell>
                </TableRow>
              ) : (
                projects.map((project) => (
                  <TableRow key={project.projectId} className="border-gray-800 hover:bg-gray-800/30">
                    <TableCell className="text-white font-medium">{project.nameEn}</TableCell>
                    <TableCell>
                      {project.status && (
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${STATUS_COLORS[project.status] ?? ""}`}
                        >
                          {project.status.replace("_", " ")}
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="text-gray-400">
                      {project.year as string | undefined ?? "—"}
                    </TableCell>
                    <TableCell className="text-center">
                      {project.isFeatured && <Star size={14} className="text-yellow-400 mx-auto" />}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button asChild size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                          <Link href={`/dashboard/projects/${project.projectId}`}>
                            <Pencil size={14} />
                          </Link>
                        </Button>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="text-gray-500 hover:text-red-400 hover:bg-red-400/10"
                            >
                              <Trash2 size={14} />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent className="bg-gray-900 border-gray-700">
                            <AlertDialogHeader>
                              <AlertDialogTitle className="text-white">Delete project?</AlertDialogTitle>
                              <AlertDialogDescription className="text-gray-400">
                                This will permanently delete &ldquo;{project.nameEn}&rdquo;. This action
                                cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel className="border-gray-700 text-gray-300">
                                Cancel
                              </AlertDialogCancel>
                              <AlertDialogAction
                                className="bg-red-600 hover:bg-red-700 text-white"
                                onClick={() =>
                                  deleteMutation.mutate({ projectId: project.projectId })
                                }
                              >
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
