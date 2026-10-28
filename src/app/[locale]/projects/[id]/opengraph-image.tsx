import { getProjectById } from "@/lib/data";
import { OG_CONTENT_TYPE, OG_SIZE, renderOg } from "@/lib/og";
import { createTranslator } from "@/utils/translate";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Project by Corentin D'haeyere";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  const project = await getProjectById(id);
  const tr = createTranslator(locale);
  const name = project ? (tr(project, "name") ?? project.nameEn) : "Project";
  const description = project
    ? (tr(project, "description") ?? project.descriptionEn)
    : "";
  return renderOg({
    title: name,
    subtitle: description,
    god: project?.god
      ? { id: project.god.id, greek: project.god.greek }
      : undefined,
    footer: "nitroc.xyz · Corentin D'haeyere",
  });
}
