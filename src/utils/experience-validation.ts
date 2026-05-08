import * as Yup from "yup";

export interface ExperienceFormData {
  name: string;
  companyName: string;
  websiteUrl: string;
  location: string;
  startDate: string;
  endDate: string;
  type: "work" | "internship" | "education";
  descriptionEn: string;
  descriptionFr: string;
}

export const experienceSchema: Yup.ObjectSchema<ExperienceFormData> =
  Yup.object({
    name: Yup.string().required("Title is required"),
    companyName: Yup.string().required("Company / institution is required"),
    websiteUrl: Yup.string().url("Must be a valid URL").default(""),
    location: Yup.string().default(""),
    startDate: Yup.string().required("Start date is required"),
    endDate: Yup.string().default(""),
    type: Yup.mixed<"work" | "internship" | "education">()
      .oneOf(["work", "internship", "education"])
      .required("Type is required"),
    descriptionEn: Yup.string().required("English description is required"),
    descriptionFr: Yup.string().default(""),
  });
