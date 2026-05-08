"use client";

import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { FormikProvider, useFormik } from "formik";
import { useTranslations } from "next-intl";
import { Plus, Pencil, Trash2, X, Check, ChevronDown, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import {
  useSkillsControllerFindAllCategoriesV1,
  useSkillsControllerCreateCategoryV1,
  useSkillsControllerUpdateCategoryV1,
  useSkillsControllerRemoveCategoryV1,
  useSkillsControllerCreateSkillV1,
  useSkillsControllerUpdateSkillV1,
  useSkillsControllerRemoveSkillV1,
  getSkillsControllerFindAllCategoriesV1QueryKey,
} from "@/api/generated/skills/skills";
import type { SkillCategoryDto, SkillDto } from "@/api/generated/nestJSAPI.schemas";
import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/inputs/input";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type SkillFormData, skillSchema } from "@/utils/skill-validation";
import { type CategoryFormData, categorySchema } from "@/utils/category-validation";

// ── Skill inline form ────────────────────────────────────────────────────────

function SkillRow({
  skill,
  categoryId,
  onSaved,
}: {
  skill?: SkillDto;
  categoryId: string;
  onSaved: () => void;
}) {
  const t = useTranslations("dashboard.skills");
  const isNew = !skill;
  const [editing, setEditing] = useState(isNew);
  const queryClient = useQueryClient();

  const invalidate = () =>
    queryClient.invalidateQueries({ queryKey: getSkillsControllerFindAllCategoriesV1QueryKey() });

  const createMutation = useSkillsControllerCreateSkillV1({
    mutation: {
      onSuccess: () => { invalidate(); onSaved(); toast.success(t("skillCreated")); },
      onError: () => toast.error(t("skillUpdated")),
    },
  });

  const updateMutation = useSkillsControllerUpdateSkillV1({
    mutation: {
      onSuccess: () => { invalidate(); setEditing(false); toast.success(t("skillUpdated")); },
      onError: () => toast.error(t("skillUpdated")),
    },
  });

  const deleteMutation = useSkillsControllerRemoveSkillV1({
    mutation: {
      onSuccess: () => { invalidate(); toast.success(t("skillDeleted")); },
      onError: () => toast.error(t("skillDeleted")),
    },
  });

  const handleSave = async (values: SkillFormData) => {
    if (isNew) {
      createMutation.mutate({ data: { nameEn: values.nameEn, nameFr: values.nameFr, icon: values.icon, categoryId } });
    } else {
      updateMutation.mutate({ skillId: skill!.skillId, data: { nameEn: values.nameEn, nameFr: values.nameFr, icon: values.icon, categoryId } });
    }
  };

  const formik = useFormik<SkillFormData>({
    initialValues: {
      nameEn: skill?.nameEn ?? "",
      nameFr: skill?.nameFr ?? "",
      icon: skill?.icon ?? "",
    },
    validationSchema: skillSchema,
    onSubmit: handleSave,
  });

  if (!editing && skill) {
    return (
      <div className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-gray-800/50 group">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-sm text-gray-300">{skill.nameEn}</span>
          {skill.nameFr && skill.nameFr !== skill.nameEn && (
            <span className="text-xs text-gray-600">/ {skill.nameFr}</span>
          )}
          {skill.icon && <span className="text-xs text-gray-600">[{skill.icon}]</span>}
        </div>
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100">
          <Button
            size="sm"
            variant="ghost"
            className="h-6 w-6 p-0 text-gray-500 hover:text-white"
            onClick={() => setEditing(true)}
          >
            <Pencil size={12} />
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-gray-500 hover:text-red-400">
                <Trash2 size={12} />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-gray-900 border-gray-700">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-white">{t("skillDeleteTitle")}</AlertDialogTitle>
                <AlertDialogDescription className="text-gray-400">
                  {t("skillDeleteDescription")}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="border-gray-700 text-gray-300">{t("cancel")}</AlertDialogCancel>
                <AlertDialogAction
                  className="bg-red-600 hover:bg-red-700"
                  onClick={() => deleteMutation.mutate({ skillId: skill.skillId })}
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    );
  }

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit} className="flex items-end gap-2 py-1.5">
        <div className="flex-1">
          <FormInput
            field={formik.getFieldProps("nameEn")}
            formik={formik}
            placeholder={t("skillNameEn")}
            className="h-7 text-sm bg-gray-800 border-gray-700 text-white"
          />
        </div>
        <div className="flex-1">
          <FormInput
            field={formik.getFieldProps("nameFr")}
            formik={formik}
            placeholder={t("skillNameFr")}
            className="h-7 text-sm bg-gray-800 border-gray-700 text-white"
          />
        </div>
        <div className="flex-1">
          <FormInput
            field={formik.getFieldProps("icon")}
            formik={formik}
            placeholder={t("skillIcon")}
            className="h-7 text-sm bg-gray-800 border-gray-700 text-white"
          />
        </div>
        <Button
          type="submit"
          size="sm"
          disabled={formik.isSubmitting}
          className="h-7 px-2 bg-blue-600 hover:bg-blue-700 shrink-0"
        >
          <Check size={12} />
        </Button>
        {!isNew && (
          <Button
            type="button"
            size="sm"
            variant="ghost"
            className="h-7 px-2 text-gray-500 shrink-0"
            onClick={() => setEditing(false)}
          >
            <X size={12} />
          </Button>
        )}
      </form>
    </FormikProvider>
  );
}

// ── Category card ────────────────────────────────────────────────────────────

function CategoryCard({ category }: { category: SkillCategoryDto }) {
  const t = useTranslations("dashboard.skills");
  const [expanded, setExpanded] = useState(true);
  const [editingCategory, setEditingCategory] = useState(false);
  const [addingSkill, setAddingSkill] = useState(false);
  const queryClient = useQueryClient();

  const invalidate = () =>
    queryClient.invalidateQueries({ queryKey: getSkillsControllerFindAllCategoriesV1QueryKey() });

  const updateMutation = useSkillsControllerUpdateCategoryV1({
    mutation: {
      onSuccess: () => { invalidate(); setEditingCategory(false); toast.success(t("categoryUpdated")); },
      onError: () => toast.error(t("categoryUpdated")),
    },
  });

  const deleteMutation = useSkillsControllerRemoveCategoryV1({
    mutation: {
      onSuccess: () => { invalidate(); toast.success(t("categoryDeleted")); },
      onError: () => toast.error(t("categoryDeleted")),
    },
  });

  const handleCategoryUpdate = async (values: CategoryFormData) => {
    updateMutation.mutate({ categoryId: category.categoryId, data: { label: values.label, icon: values.icon } });
  };

  const categoryFormik = useFormik<CategoryFormData>({
    initialValues: { label: category.label, icon: category.icon },
    validationSchema: categorySchema,
    onSubmit: handleCategoryUpdate,
  });

  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardHeader className="pb-2 pt-4 px-4">
        {editingCategory ? (
          <FormikProvider value={categoryFormik}>
            <form onSubmit={categoryFormik.handleSubmit} className="flex items-end gap-2">
              <div className="flex-1">
                <FormInput
                  field={categoryFormik.getFieldProps("label")}
                  formik={categoryFormik}
                  placeholder={t("categoryLabel")}
                  className="h-8 bg-gray-800 border-gray-700 text-white"
                />
              </div>
              <div className="flex-1">
                <FormInput
                  field={categoryFormik.getFieldProps("icon")}
                  formik={categoryFormik}
                  placeholder={t("categoryIcon")}
                  className="h-8 bg-gray-800 border-gray-700 text-white"
                />
              </div>
              <Button
                type="submit"
                size="sm"
                disabled={categoryFormik.isSubmitting}
                className="h-8 px-2 bg-blue-600 hover:bg-blue-700 shrink-0"
              >
                <Check size={14} />
              </Button>
              <Button
                type="button"
                size="sm"
                variant="ghost"
                className="h-8 px-2 text-gray-500 shrink-0"
                onClick={() => setEditingCategory(false)}
              >
                <X size={14} />
              </Button>
            </form>
          </FormikProvider>
        ) : (
          <div className="flex items-center justify-between">
            <CardTitle
              className="text-sm font-semibold text-white flex items-center gap-2 cursor-pointer"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
              {category.label}
              <span className="text-xs font-normal text-gray-500">
                ({category.skills.length} skills)
              </span>
            </CardTitle>
            <div className="flex items-center gap-1">
              <Button
                size="sm"
                variant="ghost"
                className="h-6 w-6 p-0 text-gray-500 hover:text-white"
                onClick={() => setEditingCategory(true)}
              >
                <Pencil size={12} />
              </Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-gray-500 hover:text-red-400">
                    <Trash2 size={12} />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-gray-900 border-gray-700">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-white">{t("categoryDeleteTitle")}</AlertDialogTitle>
                    <AlertDialogDescription className="text-gray-400">
                      {t("categoryDeleteDescription")}
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="border-gray-700 text-gray-300">{t("cancel")}</AlertDialogCancel>
                    <AlertDialogAction
                      className="bg-red-600 hover:bg-red-700"
                      onClick={() => deleteMutation.mutate({ categoryId: category.categoryId })}
                    >
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        )}
      </CardHeader>

      {expanded && (
        <CardContent className="px-4 pb-4 space-y-1">
          {category.skills.map((skill) => (
            <SkillRow key={skill.skillId} skill={skill} categoryId={category.categoryId} onSaved={() => {}} />
          ))}

          {addingSkill ? (
            <SkillRow
              categoryId={category.categoryId}
              onSaved={() => setAddingSkill(false)}
            />
          ) : (
            <Button
              size="sm"
              variant="ghost"
              className="h-7 px-2 text-gray-500 hover:text-blue-400 hover:bg-transparent mt-1"
              onClick={() => setAddingSkill(true)}
            >
              <Plus size={12} className="mr-1" />
              {t("addSkill")}
            </Button>
          )}
        </CardContent>
      )}
    </Card>
  );
}

// ── New category form ────────────────────────────────────────────────────────

function NewCategoryForm({ onDone }: { onDone: () => void }) {
  const t = useTranslations("dashboard.skills");
  const queryClient = useQueryClient();

  const mutation = useSkillsControllerCreateCategoryV1({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: getSkillsControllerFindAllCategoriesV1QueryKey() });
        onDone();
        toast.success(t("categoryCreated"));
      },
      onError: () => toast.error(t("categoryCreated")),
    },
  });

  const handleSubmit = async (values: CategoryFormData) => {
    mutation.mutate({ data: { label: values.label, icon: values.icon } });
  };

  const formik = useFormik<CategoryFormData>({
    initialValues: { label: "", icon: "" },
    validationSchema: categorySchema,
    onSubmit: handleSubmit,
  });

  return (
    <FormikProvider value={formik}>
      <form
        onSubmit={formik.handleSubmit}
        className="flex items-end gap-2 p-3 rounded-lg border border-blue-500/30 bg-blue-500/5"
      >
        <div className="flex-1">
          <FormInput
            field={formik.getFieldProps("label")}
            formik={formik}
            placeholder={t("categoryLabel")}
            className="bg-gray-800 border-gray-700 text-white"
          />
        </div>
        <div className="flex-1">
          <FormInput
            field={formik.getFieldProps("icon")}
            formik={formik}
            placeholder={t("categoryIcon")}
            className="bg-gray-800 border-gray-700 text-white"
          />
        </div>
        <Button
          type="submit"
          disabled={formik.isSubmitting || mutation.isPending}
          className="bg-blue-600 hover:bg-blue-700 shrink-0"
        >
          <Check size={14} className="mr-1" />
          {t("create")}
        </Button>
        <Button
          type="button"
          variant="ghost"
          className="text-gray-500 shrink-0"
          onClick={onDone}
        >
          <X size={14} />
        </Button>
      </form>
    </FormikProvider>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function SkillsPage() {
  const t = useTranslations("dashboard.skills");
  const { data, isLoading } = useSkillsControllerFindAllCategoriesV1();
  const [addingCategory, setAddingCategory] = useState(false);

  const categories = ((data as any)?.data as SkillCategoryDto[]) ?? [];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">{t("title")}</h1>
          <p className="text-gray-400 text-sm mt-1">
            {categories.length} categories ·{" "}
            {categories.reduce((s, c) => s + c.skills.length, 0)} skills
          </p>
        </div>
        {!addingCategory && (
          <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => setAddingCategory(true)}>
            <Plus size={16} className="mr-2" />
            {t("newCategory")}
          </Button>
        )}
      </div>

      {addingCategory && <NewCategoryForm onDone={() => setAddingCategory(false)} />}

      {isLoading ? (
        <div className="space-y-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-32 rounded-lg bg-gray-800/50 animate-pulse" />
          ))}
        </div>
      ) : categories.length === 0 ? (
        <p className="text-center text-gray-500 py-16">{t("noCategories")}</p>
      ) : (
        <div className="space-y-3">
          {categories.map((cat) => (
            <CategoryCard key={cat.categoryId} category={cat} />
          ))}
        </div>
      )}
    </div>
  );
}
