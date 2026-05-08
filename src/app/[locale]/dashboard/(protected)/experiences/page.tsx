"use client";

import { useFormik } from "formik";
import {
  Briefcase,
  Building2,
  Check,
  GraduationCap,
  Plus,
  Trash2,
  X,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { FormInput } from "@/components/inputs/input";
import { FormTextarea } from "@/components/inputs/textarea";
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
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  type ExperienceFormData,
  experienceSchema,
} from "@/utils/experience-validation";

interface Experience extends ExperienceFormData {
  id: string;
}

const TYPE_ICONS = {
  work: Briefcase,
  internship: Building2,
  education: GraduationCap,
};

const INITIAL_EXPERIENCES: Experience[] = [
  {
    id: "1",
    name: "Full Stack Developer",
    companyName: "Eachstapp",
    websiteUrl: "https://eachstapp.com",
    location: "Brussels, Belgium",
    startDate: "2024-10-01",
    endDate: "",
    type: "work",
    descriptionEn:
      "Building merchant-facing tools — orders, inventory, analytics — used by hundreds of small businesses. React + .NET API + PostgreSQL. Closely involved in the design system and feature scoping.",
    descriptionFr:
      "Construction d'outils à destination des commerçants — commandes, inventaire, analytics — utilisés par des centaines de petites entreprises. React + API .NET + PostgreSQL.",
  },
  {
    id: "2",
    name: "Fullstack Developer (Internship)",
    companyName: "Eachstapp",
    websiteUrl: "https://eachstapp.com",
    location: "Brussels, Belgium",
    startDate: "2024-01-01",
    endDate: "2024-05-31",
    type: "internship",
    descriptionEn:
      "Contributed to the development of modern web applications. Helped ship session middleware refactor, audit log UI, and a small data export feature.",
    descriptionFr:
      "Contribution au développement d'applications web modernes. Participation au refactoring du middleware de session et à l'UI du journal d'audit.",
  },
  {
    id: "3",
    name: "Computer Science Student",
    companyName: "Haute École Léonard de Vinci",
    websiteUrl: "https://www.vinci.be",
    location: "Brussels, Belgium",
    startDate: "2021-09-01",
    endDate: "2024-06-30",
    type: "education",
    descriptionEn:
      "Bachelor in CS. Algorithms, databases, networks, distributed systems. Capstone project: Atlas, a campus-routing webapp with offline tile support.",
    descriptionFr:
      "Bachelier en informatique. Algorithmes, bases de données, réseaux, systèmes distribués. Projet de fin d'études : Atlas.",
  },
];

const EMPTY_FORM: ExperienceFormData = {
  name: "",
  companyName: "",
  websiteUrl: "",
  location: "",
  startDate: "",
  endDate: "",
  type: "work",
  descriptionEn: "",
  descriptionFr: "",
};

function formatDateRange(start: string, end: string): string {
  const fmt = (d: string) =>
    new Date(d).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  return `${fmt(start)} — ${end ? fmt(end) : "Present"}`;
}

export default function ExperiencesPage() {
  const [experiences, setExperiences] =
    useState<Experience[]>(INITIAL_EXPERIENCES);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const editingExp = selectedId
    ? experiences.find((e) => e.id === selectedId)
    : null;

  const formik = useFormik<ExperienceFormData>({
    initialValues: editingExp
      ? {
          name: editingExp.name,
          companyName: editingExp.companyName,
          websiteUrl: editingExp.websiteUrl,
          location: editingExp.location,
          startDate: editingExp.startDate,
          endDate: editingExp.endDate,
          type: editingExp.type,
          descriptionEn: editingExp.descriptionEn,
          descriptionFr: editingExp.descriptionFr,
        }
      : EMPTY_FORM,
    validationSchema: experienceSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      if (isCreating) {
        const newExp: Experience = { ...values, id: Date.now().toString() };
        setExperiences((prev) => [newExp, ...prev]);
        setIsCreating(false);
        setSelectedId(newExp.id);
        toast.success("Experience created");
      } else if (selectedId) {
        setExperiences((prev) =>
          prev.map((e) =>
            e.id === selectedId ? { ...values, id: selectedId } : e,
          ),
        );
        toast.success("Experience updated");
      }
    },
  });

  function startCreate() {
    setSelectedId(null);
    setIsCreating(true);
    formik.resetForm({ values: EMPTY_FORM });
  }

  function selectExp(id: string) {
    setIsCreating(false);
    setSelectedId(id);
  }

  function cancelForm() {
    setIsCreating(false);
    setSelectedId(null);
    formik.resetForm();
  }

  function deleteExp(id: string) {
    setExperiences((prev) => prev.filter((e) => e.id !== id));
    if (selectedId === id) {
      setSelectedId(null);
      setIsCreating(false);
    }
    toast.success("Experience deleted");
  }

  const sorted = [...experiences].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
  );

  const showForm = isCreating || selectedId !== null;

  return (
    <div className="flex h-full -m-6 overflow-hidden">
      {/* Left: timeline list */}
      <aside className="w-80 shrink-0 flex flex-col border-r border-gray-800 bg-gray-950">
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-800">
          <div>
            <h1 className="text-base font-semibold text-white">Experiences</h1>
            <p className="text-xs text-gray-500 mt-0.5">
              {experiences.length} entries
            </p>
          </div>
          <Button
            size="sm"
            className="bg-blue-600 hover:bg-blue-700 h-7 px-2.5 text-xs gap-1"
            onClick={startCreate}
          >
            <Plus size={12} />
            Add
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto py-3 px-3">
          {sorted.length === 0 ? (
            <p className="text-sm text-gray-500 text-center py-10">
              No experiences yet.
            </p>
          ) : (
            <div className="relative">
              <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gray-800" />
              <div className="space-y-1">
                {sorted.map((exp) => {
                  const Icon = TYPE_ICONS[exp.type];
                  const isActive = selectedId === exp.id && !isCreating;
                  return (
                    <button
                      key={exp.id}
                      type="button"
                      onClick={() => selectExp(exp.id)}
                      className={cn(
                        "w-full text-left flex items-start gap-3 pl-2 pr-3 py-3 rounded-lg transition-colors relative",
                        isActive
                          ? "bg-blue-600/10 border border-blue-500/30"
                          : "hover:bg-gray-900 border border-transparent",
                      )}
                    >
                      <div
                        className={cn(
                          "w-9 h-9 rounded-lg flex items-center justify-center shrink-0 z-10",
                          isActive ? "bg-blue-600/20" : "bg-gray-800",
                        )}
                      >
                        <Icon
                          size={15}
                          className={
                            isActive ? "text-blue-400" : "text-gray-400"
                          }
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p
                          className={cn(
                            "text-sm font-medium truncate",
                            isActive ? "text-white" : "text-gray-300",
                          )}
                        >
                          {exp.name}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {exp.companyName}
                        </p>
                        <p className="text-[11px] text-gray-600 mt-0.5">
                          {formatDateRange(exp.startDate, exp.endDate)}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* Right: form */}
      <div className="flex-1 overflow-y-auto">
        {!showForm ? (
          <div className="flex flex-col items-center justify-center h-full gap-3 text-center px-8">
            <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center">
              <Briefcase size={22} className="text-gray-500" />
            </div>
            <p className="text-gray-400 text-sm">
              Select an experience to edit, or add a new one.
            </p>
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 gap-1.5"
              onClick={startCreate}
            >
              <Plus size={13} />
              Add experience
            </Button>
          </div>
        ) : (
          <div className="p-6 max-w-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white">
                {isCreating ? "New experience" : "Edit experience"}
              </h2>
              <div className="flex items-center gap-2">
                {!isCreating && selectedId && (
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-gray-500 hover:text-red-400 hover:bg-red-400/10 gap-1.5"
                      >
                        <Trash2 size={13} />
                        Delete
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="bg-gray-900 border-gray-700">
                      <AlertDialogHeader>
                        <AlertDialogTitle className="text-white">
                          Delete experience?
                        </AlertDialogTitle>
                        <AlertDialogDescription className="text-gray-400">
                          This will permanently remove &ldquo;{editingExp?.name}
                          &rdquo;. This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="border-gray-700 text-gray-300">
                          Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                          className="bg-red-600 hover:bg-red-700 text-white"
                          onClick={() => selectedId && deleteExp(selectedId)}
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                )}
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-gray-400 hover:text-gray-200"
                  onClick={cancelForm}
                >
                  <X size={14} />
                </Button>
              </div>
            </div>

            <form onSubmit={formik.handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <FormInput
                  field={formik.getFieldProps("name")}
                  formik={formik}
                  label="Title *"
                  placeholder="Full Stack Developer"
                  required
                />
                <FormInput
                  field={formik.getFieldProps("companyName")}
                  formik={formik}
                  label="Company / Institution *"
                  placeholder="Acme Corp"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <FormInput
                  field={formik.getFieldProps("startDate")}
                  formik={formik}
                  label="Start date *"
                  type="date"
                  required
                />
                <FormInput
                  field={formik.getFieldProps("endDate")}
                  formik={formik}
                  label="End date"
                  type="date"
                  description="Leave empty if current"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <FormInput
                  field={formik.getFieldProps("location")}
                  formik={formik}
                  label="Location"
                  placeholder="Brussels, Belgium"
                />
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="exp-type"
                    className="text-sm font-medium text-gray-300"
                  >
                    Type *
                  </label>
                  <select
                    id="exp-type"
                    {...formik.getFieldProps("type")}
                    className="h-9 rounded-md border border-gray-700 bg-gray-800 px-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="work">Work</option>
                    <option value="internship">Internship</option>
                    <option value="education">Education</option>
                  </select>
                </div>
              </div>

              <FormInput
                field={formik.getFieldProps("websiteUrl")}
                formik={formik}
                label="Website URL"
                placeholder="https://example.com"
                type="url"
              />

              <FormTextarea
                field={formik.getFieldProps("descriptionEn")}
                formik={formik}
                label="Description (EN) *"
                rows={3}
                placeholder="Describe your role, responsibilities, and achievements..."
                required
              />

              <FormTextarea
                field={formik.getFieldProps("descriptionFr")}
                formik={formik}
                label="Description (FR)"
                rows={3}
                placeholder="Décrivez votre rôle, vos responsabilités et vos réalisations..."
              />

              <div className="flex items-center gap-3 pt-2">
                <Button
                  type="submit"
                  disabled={formik.isSubmitting || !formik.isValid}
                  className="bg-blue-600 hover:bg-blue-700 gap-1.5 disabled:opacity-50"
                >
                  <Check size={14} />
                  {isCreating ? "Create" : "Save changes"}
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  className="text-gray-400 hover:text-gray-200 border-gray-700"
                  onClick={cancelForm}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
