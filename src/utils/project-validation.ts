import * as yup from "yup";

export interface ProjectFormData {
  nameEn: string;
  nameFr: string;
  descriptionEn: string;
  descriptionFr: string;
  longDescriptionEn: string;
  longDescriptionFr: string;
  repositoryUrl: string;
  websiteUrl: string;
  tagsRaw: string;
  highlightsRaw: string;
  year: string;
  status: string;
  role: string;
  isFeatured: boolean;
}

export const projectSchema = yup.object().shape({
  nameEn: yup.string().required("English name is required"),
  nameFr: yup.string().required("French name is required"),
  descriptionEn: yup.string().required("English description is required"),
  descriptionFr: yup.string().required("French description is required"),
  longDescriptionEn: yup.string(),
  longDescriptionFr: yup.string(),
  repositoryUrl: yup.string().test("url-or-empty", "Must be a valid URL", (val) => !val || yup.string().url().isValidSync(val)),
  websiteUrl: yup.string().test("url-or-empty", "Must be a valid URL", (val) => !val || yup.string().url().isValidSync(val)),
  tagsRaw: yup.string(),
  highlightsRaw: yup.string(),
  year: yup.string(),
  status: yup.string(),
  role: yup.string(),
  isFeatured: yup.boolean().required(),
});
