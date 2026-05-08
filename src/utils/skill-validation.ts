import * as yup from "yup";

export interface SkillFormData {
  nameEn: string;
  nameFr: string;
  icon: string;
}

export const skillSchema = yup.object().shape({
  nameEn: yup.string().required("English name is required"),
  nameFr: yup.string(),
  icon: yup.string(),
});
