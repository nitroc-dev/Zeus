"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { FormikProvider, useFormik } from "formik";
import { useTranslations } from "next-intl";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import {
  getProjectsControllerFindAllV1QueryKey,
  useProjectsControllerCreateV1,
  useProjectsControllerUpdateV1,
} from "@/api/generated/projects/projects";
import type {
  ProjectDto,
  ProjectsControllerCreateV1BodyStatus,
  ProjectsControllerUpdateV1BodyStatus,
} from "@/api/generated/nestJSAPI.schemas";
import { FormInput } from "@/components/inputs/input";
import { FormTextarea } from "@/components/inputs/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { type ProjectFormData, projectSchema } from "@/utils/project-validation";

interface ProjectFormProps {
  project?: ProjectDto;
}

export function ProjectForm({ project }: ProjectFormProps) {
  const t = useTranslations("dashboard.projects");
  const router = useRouter();
  const queryClient = useQueryClient();
  const isEdit = !!project;
  const [image, setImage] = useState<File | undefined>();

  const createMutation = useProjectsControllerCreateV1();
  const updateMutation = useProjectsControllerUpdateV1();

  const handleSubmit = async (values: ProjectFormData) => {
    const tags = values.tagsRaw
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
    const highlights = values.highlightsRaw
      .split(",")
      .map((h) => h.trim())
      .filter(Boolean);

    try {
      if (isEdit) {
        await updateMutation.mutateAsync({
          projectId: project.projectId,
          data: {
            nameEn: values.nameEn,
            nameFr: values.nameFr,
            descriptionEn: values.descriptionEn,
            descriptionFr: values.descriptionFr,
            longDescriptionEn: values.longDescriptionEn || undefined,
            longDescriptionFr: values.longDescriptionFr || undefined,
            repositoryUrl: values.repositoryUrl || undefined,
            websiteUrl: values.websiteUrl || undefined,
            tags: tags.length ? tags : undefined,
            highlights: highlights.length ? highlights : undefined,
            year: values.year || undefined,
            status: (values.status || undefined) as ProjectsControllerUpdateV1BodyStatus | undefined,
            role: values.role || undefined,
            isFeatured: values.isFeatured,
            image: image,
          },
        });
        toast.success(t("updated"));
      } else {
        await createMutation.mutateAsync({
          data: {
            nameEn: values.nameEn,
            nameFr: values.nameFr,
            descriptionEn: values.descriptionEn,
            descriptionFr: values.descriptionFr,
            longDescriptionEn: values.longDescriptionEn || undefined,
            longDescriptionFr: values.longDescriptionFr || undefined,
            repositoryUrl: values.repositoryUrl || undefined,
            websiteUrl: values.websiteUrl || undefined,
            tags: tags.length ? tags : undefined,
            highlights: highlights.length ? highlights : undefined,
            year: values.year || undefined,
            status: (values.status || undefined) as ProjectsControllerCreateV1BodyStatus | undefined,
            role: values.role || undefined,
            isFeatured: values.isFeatured,
            image: image,
          },
        });
        toast.success(t("created"));
      }
      queryClient.invalidateQueries({ queryKey: getProjectsControllerFindAllV1QueryKey() });
      router.push("/dashboard/projects");
    } catch {
      toast.error(isEdit ? t("updateError") : t("createError"));
    }
  };

  const formik = useFormik<ProjectFormData>({
    initialValues: {
      nameEn: project?.nameEn ?? "",
      nameFr: project?.nameFr ?? "",
      descriptionEn: project?.descriptionEn ?? "",
      descriptionFr: project?.descriptionFr ?? "",
      longDescriptionEn: project?.longDescriptionEn ?? "",
      longDescriptionFr: project?.longDescriptionFr ?? "",
      repositoryUrl: project?.repositoryUrl ?? "",
      websiteUrl: project?.websiteUrl ?? "",
      tagsRaw: project?.tags?.join(", ") ?? "",
      highlightsRaw: project?.highlights?.join(", ") ?? "",
      year: project?.year ?? "",
      status: project?.status ?? "",
      role: project?.role ?? "",
      isFeatured: project?.isFeatured ?? false,
    },
    validationSchema: projectSchema,
    onSubmit: handleSubmit,
  });

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit} className="space-y-6">
        <div className="flex items-center gap-3">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => router.back()}
            className="text-gray-400 hover:text-white"
          >
            <ArrowLeft size={16} className="mr-1" />
            {t("back")}
          </Button>
          <h1 className="text-2xl font-bold text-white">
            {isEdit ? `${t("edit")} — ${project.nameEn}` : t("new")}
          </h1>
        </div>

        <Tabs defaultValue="en" className="w-full">
          <TabsList className="bg-gray-800 border border-gray-700">
            <TabsTrigger value="en" className="data-[state=active]:bg-gray-700">
              {t("tabEn")}
            </TabsTrigger>
            <TabsTrigger value="fr" className="data-[state=active]:bg-gray-700">
              {t("tabFr")}
            </TabsTrigger>
            <TabsTrigger value="details" className="data-[state=active]:bg-gray-700">
              {t("tabDetails")}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="en" className="space-y-4 mt-4">
            <FormInput
              field={formik.getFieldProps("nameEn")}
              formik={formik}
              label={`${t("nameEn")} *`}
              required
              className="bg-gray-800 border-gray-700 text-white"
            />
            <FormTextarea
              field={formik.getFieldProps("descriptionEn")}
              formik={formik}
              label={`${t("descriptionEn")} *`}
              required
              rows={3}
              className="bg-gray-800 border-gray-700 text-white resize-none"
            />
            <FormTextarea
              field={formik.getFieldProps("longDescriptionEn")}
              formik={formik}
              label={t("longDescriptionEn")}
              rows={6}
              className="bg-gray-800 border-gray-700 text-white resize-none"
            />
          </TabsContent>

          <TabsContent value="fr" className="space-y-4 mt-4">
            <FormInput
              field={formik.getFieldProps("nameFr")}
              formik={formik}
              label={`${t("nameFr")} *`}
              required
              className="bg-gray-800 border-gray-700 text-white"
            />
            <FormTextarea
              field={formik.getFieldProps("descriptionFr")}
              formik={formik}
              label={`${t("descriptionFr")} *`}
              required
              rows={3}
              className="bg-gray-800 border-gray-700 text-white resize-none"
            />
            <FormTextarea
              field={formik.getFieldProps("longDescriptionFr")}
              formik={formik}
              label={t("longDescriptionFr")}
              rows={6}
              className="bg-gray-800 border-gray-700 text-white resize-none"
            />
          </TabsContent>

          <TabsContent value="details" className="space-y-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInput
                field={formik.getFieldProps("repositoryUrl")}
                formik={formik}
                label={t("repositoryUrl")}
                placeholder="https://github.com/..."
                className="bg-gray-800 border-gray-700 text-white"
              />
              <FormInput
                field={formik.getFieldProps("websiteUrl")}
                formik={formik}
                label={t("websiteUrl")}
                placeholder="https://..."
                className="bg-gray-800 border-gray-700 text-white"
              />
              <FormInput
                field={formik.getFieldProps("year")}
                formik={formik}
                label={t("year")}
                placeholder="2024"
                className="bg-gray-800 border-gray-700 text-white"
              />
              <FormInput
                field={formik.getFieldProps("role")}
                formik={formik}
                label={t("role")}
                placeholder="Full-stack developer"
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInput
                field={formik.getFieldProps("tagsRaw")}
                formik={formik}
                label={t("tags")}
                placeholder="React, TypeScript, Next.js"
                className="bg-gray-800 border-gray-700 text-white"
              />
              <FormInput
                field={formik.getFieldProps("highlightsRaw")}
                formik={formik}
                label={t("highlights")}
                placeholder="Feature A, Feature B"
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-gray-300">{t("status")}</Label>
                <Select
                  value={formik.values.status}
                  onValueChange={(val) => formik.setFieldValue("status", val)}
                >
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                    <SelectValue placeholder={t("status")} />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="live">{t("statusLive")}</SelectItem>
                    <SelectItem value="in_progress">{t("statusInProgress")}</SelectItem>
                    <SelectItem value="archived">{t("statusArchived")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-gray-300">{t("image")}</Label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files?.[0])}
                  className="w-full text-sm text-gray-300 file:text-gray-300 file:bg-transparent file:border-0 file:mr-3 file:py-1.5 file:px-0 bg-gray-800 border border-gray-700 rounded-md px-3 py-1.5 cursor-pointer"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Switch
                id="featured"
                checked={formik.values.isFeatured}
                onCheckedChange={(val) => formik.setFieldValue("isFeatured", val)}
              />
              <Label htmlFor="featured" className="text-gray-300 cursor-pointer">
                {t("featured")}
              </Label>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end gap-3 pt-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.back()}
            className="border-gray-700 text-gray-300 hover:bg-gray-800"
          >
            {t("cancel")}
          </Button>
          <Button
            type="submit"
            disabled={formik.isSubmitting}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            {formik.isSubmitting ? t("saving") : isEdit ? t("save") : t("create")}
          </Button>
        </div>
      </form>
    </FormikProvider>
  );
}
